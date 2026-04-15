# Claw 消息协议索引（可维护恢复版）

本文件用于把扩展内部的高频 `chrome.runtime.sendMessage` / `runtime.onMessage` 消息类型集中到一处，帮助后续在混淆 bundle 里快速定位“谁发的、谁收的、带了哪些字段”。

说明：

- `claw-contract.js` 里的 `contract.messages.*` 是“冻结契约”的子集，优先作为常量来源。
- `claw-contract.js` 现已额外收口 4 组字段协议：`contract.offscreen`、`contract.pairing`、`contract.agentIndicator`、`contract.mcpBridge`。
- `mcp-permission-popup-protocol.js` 是 MCP permission popup 的共享 helper 入口，统一承接 query / storage / runtime 回包相关 helper，并由 `sidepanel.html` 与 `service-worker-loader.js` 在各自 bundle 前接入。
- 混淆 bundle 内仍可能存在同名字符串直写；本索引以“运行行为”为准。

## 组件与入口

- Service Worker：`assets/service-worker.ts-H0DVM1LS.js`（发行 bundle）+ `service-worker-loader.js`（壳）+ `service-worker-runtime.js`（可维护层）
- Sidepanel：`assets/sidepanel-BoLm9pmH.js`
- Options：`assets/options-Hyb_OzME.js`
- Pairing：`assets/pairing-H3Cs7KHl.js` + `assets/PairingPrompt-Do4C6yFu.js`
- Offscreen：`offscreen.html` + `offscreen.js`
- Content scripts：
  - `assets/content-script.ts-Bwa5rY9t.js`（仅 claude.ai onboarding）
  - `assets/agent-visual-indicator.js-Ct7LqXhp.js`（执行态提示）
  - `assets/accessibility-tree.js-D8KNCIWO.js`（read_page 的 DOM 序列化）
- MCP Bridge：`assets/mcpPermissions-qqAoJjJ8.js`（WebSocket bridge + tool_call 执行链）
- MCP permission popup helper：`mcp-permission-popup-protocol.js`（由 `sidepanel.html` / `service-worker-loader.js` 预先接入，给 sidepanel 与 background 共用 query / storage / runtime helper）

## runtime.onMessage（扩展内部）

### Sidepanel 侧接收（关键入口）

定位锚点：`assets/sidepanel-BoLm9pmH.js` 搜 `__cpSidepanelRuntimeMessageType*`。

- `PING_SIDEPANEL`
  - 方向：未知（用于探测 sidepanel 存活）
  - sidepanel 响应：`{ success: true, tabId }`

- `PANEL_OPENED` / `PANEL_CLOSED`
  - 方向：Sidepanel -> Service Worker
  - 字段：`{ tabId, mainTabId }`
  - 作用：声明面板可见性生命周期，供后台做轻量 ACK 和主标签态同步
  - 注意：这两条消息不等于 MCP permission response，也不会直接 resolve permission popup 的 pending promise

- `MAIN_TAB_ACK_REQUEST`
  - 方向：Service Worker -> Sidepanel（主/副 tab 协调）
  - 请求字段：`{ mainTabId, secondaryTabId }`
  - sidepanel 行为：若自己是主 tab 则回 `MAIN_TAB_ACK_RESPONSE`

- `MAIN_TAB_ACK_RESPONSE`
  - 方向：Sidepanel -> Service Worker
  - 响应字段：`{ secondaryTabId, mainTabId, success: true }`

- `STOP_AGENT`
  - 方向：多端广播（常见来源：执行态提示条/Stop 按钮）
  - sidepanel 行为：取消正在运行的 agent，并触发权限拒绝处理

- `EXECUTE_TASK`
  - 方向：Service Worker -> Sidepanel（定时任务/快捷指令在独立窗口运行时触发）
  - 常见字段：`{ prompt, taskName, runLogId, windowSessionId, isScheduledTask, targetTabId }`
  - sidepanel 行为：
    - 校验当前是否独立窗口、`sessionId` 是否匹配
    - 根据 URL query `skipPermissions=true` 决定是否跳过权限检查
    - 将 prompt 注入输入并触发发送

- `POPULATE_INPUT_TEXT`
  - 方向：Service Worker -> Sidepanel（打开 sidepanel 时填充 prompt）
  - 常见字段：`{ prompt, permissionMode, selectedModel, attachments }`
  - `attachments` 形状（已观察到）：`[{ base64, mediaType, fileName, id, isAnnotated }]`

- `permission_required`（sidepanel 内部握手，不是 runtime message）
  - 入口：聊天编排层的 `onPermissionRequired`
  - sidepanel 行为：
    - 把 prompt 写入本地权限弹窗状态
    - 把当前这次权限请求的 resolve 挂到 `Ee.current`
    - 普通 sidepanel 内点击 Allow / Deny 会分别走 `Ee.current(true/false)`
  - 字段职责补充：
    - `toolUseId` 仍保留在 `permissionPrompt` 对象上，只用于一次性授权（`ONCE`）账本
    - `requestId` 不在这条普通 sidepanel UI 内部生成；它属于 popup / background 那条 MCP 权限回包链
  - popup 分支补充：
    - `mcpPermissionOnly=true` 的专用窗口不会直接在 background 里 resolve
    - 它会先发送 `MCP_PERMISSION_RESPONSE`
    - 再由 background 按 `requestId` 找到对应 pending promise

### Content-script 侧发送

- `open_side_panel`
  - 方向：`assets/content-script.ts-Bwa5rY9t.js` -> Service Worker
  - 字段：`{ prompt }`

## Offscreen（声音与 GIF）

定位锚点：`offscreen.js` 搜 `__cpOffscreen*`。

- `SW_KEEPALIVE`
  - 方向：Offscreen -> Service Worker
  - 作用：MV3 keepalive（每 `20000ms` 发送一次）
  - 字段来源：`contract.offscreen.KEEPALIVE_INTERVAL_MS`

- `OFFSCREEN_PLAY_SOUND`
  - 方向：Service Worker -> Offscreen
  - 字段：`{ audioUrl, volume }`（volume 默认 `0.5`）
  - 字段来源：`contract.offscreen.AUDIO_FIELD_*` / `DEFAULT_VOLUME`
  - 响应：`{ success: true }` 或 `{ success: false, error }`

- `GENERATE_GIF`
  - 方向：Service Worker -> Offscreen
  - 字段：`{ frames, options }`
  - 字段来源：`contract.offscreen.GIF_FIELD_*`
  - 响应：`{ success: true, result }`（result 通常包含 base64/blobUrl/尺寸等）

- `REVOKE_BLOB_URL`
  - 方向：Service Worker -> Offscreen
  - 字段：`{ blobUrl }`

### Agent Indicator（执行态提示）

定位锚点：`assets/agent-visual-indicator.js-Ct7LqXhp.js` 搜 `__cpAgentIndicator*`、`__cpStaticIndicator*`。

- `SHOW_AGENT_INDICATORS` / `HIDE_AGENT_INDICATORS`
  - 方向：Service Worker/执行链 -> content script
  - 作用：显示或隐藏页面四周的执行态边框与底部 Stop 按钮
  - 字段来源：`contract.agentIndicator.RUNTIME_MESSAGE_TYPES.*`

- `HIDE_FOR_TOOL_USE` / `SHOW_AFTER_TOOL_USE`
  - 方向：执行链内部 -> content script
  - 作用：工具执行期间临时隐藏，再按之前状态恢复

- `SHOW_STATIC_INDICATOR` / `HIDE_STATIC_INDICATOR`
  - 方向：Service Worker -> content script
  - 作用：显示或隐藏 tab group 常驻提示条

- `STOP_AGENT`
  - 方向：content script -> Service Worker
  - 字段：`{ fromTabId: "CURRENT_TAB" }`
  - 哨兵来源：`contract.agentIndicator.CURRENT_TAB_SENTINEL`
  - 触发点：执行态 Stop 按钮

- `SWITCH_TO_MAIN_TAB`
  - 方向：content script -> Service Worker
  - 触发点：静态提示条里的“Open chat”按钮

- `DISMISS_STATIC_INDICATOR_FOR_GROUP`
  - 方向：content script -> Service Worker
  - 触发点：静态提示条关闭按钮

- `STATIC_INDICATOR_HEARTBEAT`
  - 方向：content script -> Service Worker
  - 作用：每 `5000ms` 探测当前标签组里是否仍存在活跃主 tab；失败时内容脚本自行收起提示条
  - 后台补充：Service Worker 会遍历同组 tab，并缓存最近 `3000ms` 的 ACK 探测结果，避免重复探测

## Pairing（桥接连接）

- `show_pairing_prompt`
  - 方向：MCP bridge -> 扩展页面（优先尝试由扩展内处理；失败则退化为打开 `pairing.html`）
  - 常见字段：`{ request_id, client_type, current_name }`
  - sidepanel 已打开时：会先走内联 pairing 状态，不直接新开页面

- `pairing_confirmed`
  - 方向：Pairing 页面 -> Service Worker/MCP bridge
  - 字段：`{ request_id, name }`
  - sidepanel 内联弹层：若 sidepanel 已打开，会直接在面板内消费 `show_pairing_prompt`，确认时复用同一条 `pairing_confirmed` 协议回传
  - 独立 pairing 页补充：页面本身只负责转发 payload，然后按固定 delay 自我关闭

- `pairing_dismissed`
  - 方向：Pairing 页面 -> Service Worker/MCP bridge
  - 字段：`{ request_id }`
  - 当前观察：仓库内未见 background 显式消费分支；运行时效果更接近“用户取消配对的协议级 no-op”

- 页面内辅助契约
  - `pairing.html` query key：`request_id` / `client_type` / `current_name`
  - 字段来源：`contract.pairing.QUERY_KEYS`
  - 独立 pairing 页职责：只消费这 3 个 query 字段并回传配对决定，不参与 `tabId` / `toolUseId` 之类的工具上下文
  - PairingPrompt 内部：默认聚焦输入框，`Enter` 等价于点击 Connect，提交前会先做 `trim()`
  - PairingPrompt 职责补充：组件本身只负责命名输入与回调，真正发送哪条 runtime message 由 sidepanel 或 pairing.html 调用方决定

## MCP Bridge（WebSocket）

定位锚点：`assets/mcpPermissions-qqAoJjJ8.js` 搜 `__cpMcpBridge*`、`__cpMcpToolExecutor`。

- 连接：`wss://bridge.claudeusercontent.com/chrome/{token}`
- 典型入站消息：
  - `tool_call`：触发工具执行（最终应回 `tool_result`）
  - `pairing_request`：触发 pairing 流程（可能打开 `pairing.html`）
  - `permission_response`：权限确认结果回包
- 典型出站消息：
  - `tool_result`：工具执行结果/错误回传
  - `notification`：用于 bridge 的通知通道（method/params）
- popup / storage 协议：
  - helper 入口：`mcp-permission-popup-protocol.js`；当前 query 解析、storage key/payload 构造、runtime 回包构造，以及 popup URL / window options / timeout helper 已外提到这里，并由 `sidepanel.html` / `service-worker-loader.js` 接入
  - `mcp_prompt_`：MCP 权限窗 prompt 暂存前缀，来自 `contract.mcpBridge.PERMISSION_PROMPT_STORAGE_KEY_PREFIX`
  - storage payload：`prompt` / `tabId` / `timestamp`，来自 `contract.mcpBridge.PERMISSION_PROMPT_STORAGE_FIELDS`
  - storage 语义：sidepanel consumer 实际只读取 `prompt`；`tabId` / `timestamp` 更偏向 background 侧账本、清理和诊断上下文
  - popup query：`tabId` / `mcpPermissionOnly` / `requestId`，来自 `contract.mcpBridge.PERMISSION_POPUP_QUERY_KEYS`
  - runtime 回包字段：`requestId` / `allowed`，来自 `contract.mcpBridge.RUNTIME_MESSAGE_FIELDS`
  - sidepanel 消费补充：`tabId` 先走通用 sidepanel bootstrap，`mcpPermissionOnly + requestId` 再进入权限弹窗注入与回包链
  - promise 握手补充：background 会把 `requestId` 绑定到 pending permission promise；sidepanel 的允许/拒绝回包会 resolve，它超时 `30000ms` 也会兜底解析为 `false`
  - UI 分支补充：`mcpPermissionOnly=true` 的专用窗口会绕过普通 sidepanel 的权限提示 UI，直接走 “prompt 注入 -> requestId 回包 -> close window” 链
  - 账本职责补充：
    - `requestId`：只负责 `permission_request <-> permission_response` 与 `MCP_PERMISSION_RESPONSE` 的对账
    - `toolUseId`：只负责标识这次权限请求属于哪次外层 `tool_call`
    - `tabId`：只负责 sidepanel/popup 上下文定位，不参与 pending promise resolve
  - 清理补充：
    - 手动关闭 popup 不会立即触发 runtime 回包
    - background 会依赖 `30000ms` timeout 兜底解析为拒绝
    - bridge 断连/重连时，未完成的 `permission_request` 也会统一按拒绝收口，避免 `requestId` 账本泄漏
