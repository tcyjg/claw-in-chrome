# 1.0.66_0 模块索引

本轮处理是“自动反混淆 + 人工入口标注”，目标是提升可读性，**不等于**
恢复原始源码工程结构。

## 核心文件

- `assets/sidepanel-BoLm9pmH.js`
  - 侧栏主界面入口。
  - 包含聊天 UI、模型选择、权限提示、OAuth 与供应商凭据刷新。
  - 本轮补了几个关键锚点：
    - `$Q(e = {})`：模型选择与粘性模型读取
    - `qQ`：会话输入 store
    - `t1`：权限弹窗 store
    - `__cpPermissionPromptStore`：`t1` 的语义别名，后续查权限态优先搜这个
    - `__cpHandlePermissionRequiredPrompt`：收到 `permission_required` 后转入 sidepanel 权限弹窗的入口
    - `auth.refresh_state`：凭据刷新与 sidepanel 首屏鉴权
    - `__cpModelBootstrap*`：模型首屏初始化去重
    - `__cpPermissionRetryHelper`：单次动作的 `permission_required` 重试包装器
    - `__cpPermissionRetryingToolExecutor`：`permission_required` 的提示后重试执行链
    - `__cpPermissionApproveHandler` / `__cpPermissionDenyHandler`
    - `__cpSidepanelPermissionPromptPromiseResolverRef`：当前 sidepanel 权限请求的 Promise resolve 挂点（普通权限弹窗与 `mcpPermissionOnly` 专用窗口共用）
    - `__cpSidepanelInlinePairingPromptState`：sidepanel 内联 pairing 弹层状态（`requestId/clientType/currentName`）
    - `Ee.current`：当前 sidepanel 权限请求的 resolve 挂点；普通权限弹窗与 `mcpPermissionOnly` 专用窗口都会复用它完成允许/拒绝回包
    - `__cpSessionHydrationLockRef`：session hydrate 并发锁
    - `__cpApplyDraftToCurrentScope` / `__cpApplySnapshotToCurrentScope`
    - `__cpSynchronizeExternalActiveSession`
    - `session.hydrate_*`：scope 切换后的 draft / active / recent / empty 恢复主链
    - `session.recent_refresh_external_change`：scope 绑定的 storage 变化同步桥
    - `__cpOpenDetachedWindow`：独立窗口打开前的 snapshot/draft 持久化入口
    - `__cpDetachedWindowLockStorageKey` / `__cpNormalizeDetachedWindowLockEntry`
    - `sidepanel.runtime_message_bridge`：sidepanel 内 `PING/ACK/EXECUTE/POPULATE/STOP` 的 runtime 消息消费面
    - `session.external_active_sync`：外部 active session 变化后按 `draft -> snapshot -> empty` 的统一同步入口
    - `session.hydrate_scope_switch`：scope 切换后的 hydrate 决策面（legacy/exact/URL-title 迁移 + restore）
    - plan `permission_required` producer：计划审批权限请求对象的产出点
    - detached window lock storage listener：sidepanel 内 detached lock 的 storage 同步桥
    - `__cpSidepanelContractMessages`：sidepanel 侧读取 `contract.messages` 的别名
    - `__cpSidepanelRuntimeMessageType*`：sidepanel `runtime.onMessage` 的消息类型锚点（PING/ACK/EXECUTE/POPULATE/STOP）
    - `__cpSidepanelQueryKey*`：独立窗口模式的 query key（mode/sessionId/skipPermissions）
    - `__cpSidepanelOutgoingMessageType*`：sidepanel 主动发往 background 的动作名锚点（permission notification / MCP response / panel opened/closed / sound / resize / open options）
    - `__cpSidepanelPairingContract*`：sidepanel 内联 pairing 弹层消费 `show_pairing_prompt`、并复用 `pairing_confirmed` 协议回传的字段/消息常量
    - `__cpSidepanelMcpBridgeContract*` / `__cpSidepanelMcpPermissionPromptStorageFields`：MCP 权限窗 query、storage payload、runtime 回包字段优先从 `contract.mcpBridge` 读取
    - `__cpSidepanelChatOrchestratorComponent`：聊天主 orchestrator 组件入口（参数注入、消息列表、system prompt 组合）
    - `__cpSidepanelPageQueryKey*` / `__cpSidepanelPageMcpPromptStoragePrefix`：sidepanel 页面 query 协议（mode/tabId/requestId/model/mcpPermissionOnly）与 MCP 权限窗 storage 前缀
    - `__cpSidepanelStorageKey*`：system/skip-perms/multi-tabs/explicit/tool-usage/custom-tool/purl/version-info/announcement 的 storage key 常量
    - `__cpSidepanelEditorQueryKeyTabId` / `__cpSidepanelBlockedTabsQueryKeyTabId`：编辑器快捷跳转与 blocked-tabs 清理链路复用的 tabId query key
    - 中文入口锚点：`工具执行主循环里的 permission_required 分支`、`工具执行返回 permission_required 时，统一从这里转到 sidepanel 权限弹窗`、`当前 sidepanel 权限请求的 Promise resolve 挂点`、`普通 sidepanel 权限链里，toolUseId 只用于一次性授权账本`、`sidepanel 页面 query 参数协议`、`MCP permission popup 的 query 消费分两段`、`mcpPermissionOnly 独立窗口启动后`、`MCP permission popup consumer 挂载点 1`、`sidepanel 的 MCP permission popup consumer 只消费 storage payload 里的 prompt`、`MCP permission popup consumer 挂载点 2`、`主面板状态层同样只读取 prompt`、`Ee.current(true) 实际上会 resolve 当前 requestId 对应的 MCP permission pending promise`、`Ee.current(false) 会把当前 requestId 对应的 MCP permission pending promise 解析为拒绝`、`权限弹窗“拒绝”处理器`、`sidepanel 内联 pairing 弹层状态`、`PANEL_CLOSED 由 visibilitychange(hidden) 触发`、`mcpPermissionOnly 专用窗口会绕过普通 sidepanel 的权限提示 UI 分支`、`sidepanel 内联 pairing 确认后`、`sidepanel 内联 pairing 的 dismiss 只关闭本地弹层`、`按 chromeGroupId 读取当前 sidepanel 作用域对应的 detached window 锁`

- `assets/service-worker.ts-H0DVM1LS.js`
  - 后台消息桥。
  - 负责 sidepanel 打开、权限通知、OAuth 刷新、MCP 权限回包等后台事件。
  - 本轮补了几个关键锚点（偏“动作名/键名/入口”）：
    - `__cpNativeMessagingContract` + `__cpNativeMessagingPermission` / `__cpNativeHostDesktopName` / `__cpNativeHostClaudeCodeName`（优先从 `claw-contract.js:nativeMessaging` 读取）
    - `__cpBackgroundMessageType*`：后台 `runtime.onMessage` 的 action 常量集合（如 `EXECUTE_TASK` / `POPULATE_INPUT_TEXT` / `OFFSCREEN_PLAY_SOUND` / `logout`）
    - `__cpExternalMessageType*` / `__cpTrustedExternalOriginClaudeAi` / `__cpTrustedExternalOrigins`：外部页面桥（onboarding / oauth redirect / origin 白名单）
    - `__cpAlarmPrefixPrompt` / `__cpAlarmPrefixRetry`：定时任务 alarm 前缀
    - `__cpPermissionManagerStorageKey*`：复用 PermissionManager 的关键 storage key
    - `__cpNativePortNotificationJsonRpcVersion` / `__cpChromeNotificationTypeBasic` / `__cpScheduledTaskExecutionType*`：native host 通知、Chrome 通知、定时任务埋点的协议常量
    - `__cpSwitchToMainTabErrorNoMainTab` / `__cpExternalBridgeErrorUntrustedOrigin`：主副 tab / 外部 bridge 错误字面量
    - `__cpAgentIndicatorCurrentTabSentinel` / `__cpStaticIndicatorAckPayloadField*` / `__cpStaticIndicatorAckCacheTtlMs`：agent indicator 的 `CURRENT_TAB` 哨兵、ACK 探测 payload 字段与 3 秒缓存窗口
    - 中文入口锚点：`原生宿主桥初始化入口`、`网络请求头注入入口`、`service worker 启动链`、`轻量 ACK 类消息`、`OAuth 探测桥`、`MCP 通知桥`、`agent / tab-group 协调链`、`offscreen 音频播放桥`、`定时任务闹钟桥`、`外部页面桥`
    - 新增中文入口锚点：`静态提示条心跳会遍历同组 tab，并缓存 3s ACK 结果以避免重复探测`
    - 第二轮新增职责边界：
      - service worker 启动链只恢复 bundle 自己的 bridge/listener/offscreen/native host/timer
      - `OPEN_GROUP_DETACHED_WINDOW`、detached lock 巡检、group/session cleanup 由 recovered runtime 单独追加
      - ACK / static indicator heartbeat 与 detached window 只共享 group 上下文，不共享锁账本
    - 细分主桥读法：
      - `原生宿主消息分发：工具执行、连接状态同步、状态查询回包。`
      - `sidepanel 打开主链：打开侧栏后，按重试策略把 prompt/模型/附件注入输入框。`
      - `原生宿主 / MCP bridge 状态读取：优先向 native host 请求最新状态，失败时回退本地缓存。`
      - `options 引导桥：把待执行任务先写入 storage，再聚焦或打开 options#prompts。`
      - `定时任务执行桥：由后台统一落埋点并把任务转交 sidepanel 独立窗口。`
      - `secondary -> main 聚焦桥：把副 tab 切回主 tab，并同步聚焦对应窗口。`
      - `主 tab ACK 回包：这里只透传 success，供 secondary heartbeat 判断主 tab 存活。`
      - `clau.de deep-link / 扩展路由桥`：`/chrome/permissions`、`/chrome/reconnect`、`/chrome/tab/<id>` 的中转入口

- `assets/options-Hyb_OzME.js`
  - options 页面主 bundle。
  - provider / session / prompt 的子视图切换与挂载点都在这里完成。
  - 本轮补了几个关键锚点：
    - `__cpOptionsSettingsTabHashParser` / `__cpOptionsSubviewHashParser`
    - `__cpOptionsSettingsTabWhitelist` / `__cpOptionsHashParamTruthyValue` / `__cpOptionsHashChangeEventName`：hash 解析白名单、query 真值、hashchange 监听协议
    - `__cpOptions*SubviewToken`：`provider` / `session` / `prompt`
    - `__cpOptions*MountAnchorId`：`cp-options-provider-anchor` / `cp-options-session-anchor` / `cp-options-prompt-anchor`
    - `__cpOptionsGithubRuntimeMessageBridge` + `__cpOptionsGithubUpdate*`：更新卡片的存储键、动作名与 handler
    - `__cpOptionsAccountBootstrapStorageKey` / `__cpOptionsAccountBootstrapReader`：账号态 bootstrap 入口
    - `__cpOptionsProviderNavItemId` / `__cpOptionsNavHrefOptionsProvider`：provider 子页导航项 id 与 href 契约
    - `__cpOptionsSettingsTabHashWriter` / `__cpOptionsSubviewHashWriter`：一级/二级导航写回 hash 的入口
    - `__cpOptionsRootMountElementId`：页面 React root 挂载点
    - 中文入口锚点：`options 页 hash -> 状态同步入口`、`一级 tab 点击后`、`options 二级子视图切换`

- `assets/content-script.ts-Bwa5rY9t.js`
  - 仅注入到 `claude.ai` 的轻量 content-script。
  - 负责监听 onboarding 按钮点击，并把 prompt 透传给后台打开 sidepanel。
  - 本轮补了几个关键锚点：
    - `__cpClaudeOnboardingButtonSelector` / `__cpClaudeOnboardingPromptDataAttribute`
    - `__cpContentScriptMessageTypeOpenSidePanel`：动作名 `open_side_panel`

- `assets/PermissionManager-9s959502.js`
  - 权限模型、权限检查和 OAuth 辅助逻辑。
  - 和侧栏里的权限弹窗、权限提示串联较深。
  - 本轮补了几个关键锚点：
    - `__cpPermissionModesWithRelaxedPrompts`
    - `__cpDefaultPlanApprovalMode`
    - `__cpPermissionScopeTypesEnum` / `__cpPermissionScopeTypeNetloc` / `__cpPermissionAction*` / `__cpPermissionDuration*`：scope/action/duration 的语义枚举
    - `__cpPermissionStoragePayloadPermissionsField` / `__cpPermissionCacheKeyNoTool` / `__cpPermissionModeFollowPlan`：权限存储 payload 字段、cache key 默认值、permission mode 字面量
    - `__cpPermissionStoragePersistenceKey`
    - `__cpPermissionManagerClass`
    - `__cpPermissionManagerStorageKeysEnum` + `__cpPermissionManagerStorageKey*`：PermissionManager/后台任务/更新链路会频繁引用的 storage key 别名集合
    - `__cpPermissionManager*`（prototype 别名）：PermissionManager 关键方法入口（normalize/check/grant/deny/revoke/load/save/listener/findApplicablePermission/isLocalhostUrl 等）
    - `__cpPermissionManagerSetTurnApprovedDomains`：计划批准后“本轮允许域名”白名单写入入口
    - `setTurnApprovedDomains`：计划批准后的域名白名单入口
    - `checkPermission` / `checkDomainTransition`：普通站点权限与域间跳转权限两条命中链
    - `findApplicablePermission` / `matchesNetloc`：站点权限命中与通配域匹配主链
    - `isLocalhostDomain` / `isLocalhostUrl`：MCP localhost 旁路判定入口
    - `loadPermissions` / `savePermissions` / `setupStorageListener`：权限规则的本地存储持久化链

- `assets/mcpPermissions-qqAoJjJ8.js`
  - 浏览器自动化工具与 MCP 权限流程。
  - 和标签页消息、权限确认、工具执行能力有关。
  - 本轮补了几个关键锚点：
    - `__cpDebugContract` / `__cpBackgroundDebugStorageKey` / `__cpBackgroundDebugMetaKey`：bridge 侧调试日志落库键
    - `__cpMcpBridgeKeepaliveAlarmName`：bridge keepalive alarm 名称
    - `__cpMcpBridgeKeepalivePingIntervalMs` / `__cpMcpBridgeRefreshProbeIntervalMs` / `__cpMcpBridgeAlarmPeriodMinutes`：bridge keepalive ping、刷新探测、alarm 周期常量
    - `__cpMcpBridgeDisplayNameStorageKey` / `__cpMcpBridgeDeviceIdStorageKey`：配对设备信息的本地存储 key
    - `__cpMcpBridgeWebSocketUrlPrefix`：bridge WebSocket 连接前缀
    - `__cpMcpBridgeSocketMessageType*` / `__cpMcpBridgeSocketField*`：bridge 握手、tool_call、pairing、permission_response、notification 的消息类型与字段名
    - `__cpMcpBridgeClientTypeChromeExtension` / `__cpMcpBridgeDefaultPeerClientType`：bridge 握手上报的本端 client_type 与远端缺省 client_type
    - `__cpMcpBridgeEnsureConnected` / `__cpMcpBridgeSend` / `__cpMcpBridgeNotify`：bridge 连接、发包、通知主入口
    - `__cpMcpBridgePendingPermissionResponseLedger`：bridge permission_request 待回包账本（`requestId -> { resolve }`）
    - `__cpMcpBridgeRuntimeMessageTypePairingConfirmed` / `__cpMcpBridgeRuntimeMessageTypeShowPairingPrompt` / `__cpMcpBridgeRuntimeMessageTypeMcpPermissionResponse`
    - `__cpMcpBridgeContract` / `__cpMcpBridgeRuntimeMessageFields` / `__cpMcpPermissionPopupQueryKeys`：MCP 权限弹窗 runtime 字段、popup query 与 storage 前缀优先从 `contract.mcpBridge` 读取
    - `__cpMcpPermissionPromptStorageFields` / `__cpMcpPermissionPromptStorageField*`：MCP 权限窗 storage payload（prompt/tabId/timestamp）优先从 `contract.mcpBridge` 读取
    - `__cpPairingContract` / `__cpPairingQueryKeys`：pairing query key 优先从 `contract.pairing` 读取
    - `__cpAgentIndicatorContract` / `__cpAgentIndicatorRuntimeMessageType*`：跨 tab 显隐指示器的 runtime 消息类型优先从 `contract.agentIndicator` 读取
    - `__cpGifCreatorToolName` / `__cpGifCreatorAction*` / `__cpGifCreatorOffscreenMessageType*`：GIF 录制、导出、offscreen 生成消息协议
    - `__cpSidepanelRuntimeMessageTypeExecuteTask`：shortcuts_execute -> sidepanel 的任务启动消息类型
    - `__cpShortcutsExecuteQueryKey*` / `__cpShortcutsExecuteWindow*`：独立窗口 sidepanel 的 query 参数与窗口常量
    - `__cpMcpPermissionPromptStorageKeyPrefix`：后台暂存 MCP 权限提示对象的 storage key 前缀
    - `__cpMcpBridgePairingQueryKey*` / `__cpMcpPermissionPopupQueryKey*`：pairing 页与 MCP 权限弹窗 sidepanel 的 query 参数契约
    - `__cpShortcutsExecuteStartInPopupWindow`：shortcuts_execute 打开独立窗口并发 EXECUTE_TASK 的总入口
    - `__cpMcpToolExecutor`：MCP 工具执行主入口（tab 编排、域名策略、权限提示、tool_result 回传）
    - `__cpMcpToolErrorResultFactory`：工具执行失败时的标准 error tool_result 格式
    - 中文入口锚点：`bridge 连接握手 payload`、`bridge 入站消息分发`、`bridge 权限请求握手`、`GIF 录制/导出主状态机`、`GIF 导出上传前的 permission_required 产出点`
    - 新增中文入口锚点：`bridge runtime listener 当前只显式消费 pairing_confirmed`、`bridge permission_request 待回包账本`、`requestId 只负责 bridge permission_request/permission_response 对账`、`requestId 是 bridge permission_request/permission_response 的对账键`、`bridge 断连/重连时，未完成的 permission_request 一律按拒绝收口`、`permission prompt storage payload 里的 tabId/timestamp 主要给 background 账本与清理链使用`、`这里把 requestId 绑定到 pending permission promise`、`手动关闭 permission popup 不会立即回包`

- `assets/pairing-H3Cs7KHl.js`
  - pairing.html 的启动脚本（“连接浏览器”弹窗）。
  - 本轮补了几个关键锚点：
    - `__cpPairingContract` / `__cpPairingQueryKeys` / `__cpPairingMessageFields`：query key / payload 字段优先从 `contract.pairing` 读取
    - `__cpPairingQueryKey*`：request_id/client_type/current_name
    - `__cpPairingDefaultClientType`：配对页 query 缺省时使用的 peer client_type
    - `__cpPairingRuntimeMessageTypeConfirmed` / `__cpPairingRuntimeMessageTypeDismissed`
    - `__cpPairingMessageFieldRequestId` / `__cpPairingMessageFieldName`：pairing runtime payload 字段名
    - `__cpPairingPromptComponent`：PairingPrompt 组件引用
    - `__cpPairingCloseDelayMs` / `__cpPairingCloseCurrentTab`：确认/忽略后的关闭策略
    - `__cpPairingPageRootMountId` / `__cpPairingPageAppRootComponent`：页面挂载点与 React root 入口
    - 配对页职责：只负责消费 query、把 `request_id`/`name` 回传给 background，再延时自我关闭；真正是否接受连接仍由 bridge 后台链处理
    - 中文入口锚点：`独立 pairing 页只消费 request_id/client_type/current_name 这 3 个 query 字段`

- `assets/PairingPrompt-Do4C6yFu.js`
  - pairing 弹窗的 UI 组件（输入设备名 + Connect/Ignore）。
  - 本轮补了几个关键锚点：
    - `__cpPairingClientTypeClaudeCode` 与 `__cpPairingClientLabel*`：client label 映射
    - `__cpPairingPromptSubmitKey`：输入框 Enter 提交键
    - `__cpPairingPromptInputRef`：输入框默认聚焦 ref
    - `__cpPairingPromptConfirmHandler` / `__cpPairingPromptKeydownHandler`：trim 校验与 Enter 提交主链
    - `__cpPairingPromptResolvedClientLabel`：最终展示到 UI 的 client label
    - `__cpPairingPromptExportedComponent`：组件导出别名
    - 组件职责：只负责浏览器命名输入与回调，不直接决定发送哪一种 runtime message

- `assets/accessibility-tree.js-D8KNCIWO.js`
  - `read_page` / DOM 序列化的可访问性树生成器（注入到页面上下文）。
  - 本轮补了几个关键锚点：
    - `__cpAccessibilityTreeGlobalGeneratorKey`：全局函数名 `window.__generateAccessibilityTree`
    - `__cpAccessibilityTreeInferRole` / `__cpAccessibilityTreeInferLabel`
    - `__cpAccessibilityTreeIsVisible` / `__cpAccessibilityTreeIsInteractive` / `__cpAccessibilityTreeIsStructural`
    - `__cpAccessibilityTreeShouldIncludeElement` / `__cpAccessibilityTreeTraverseAndSerialize`
    - `__cpAccessibilityTreeDefaultDepth` / `__cpAccessibilityTreeFilterInteractive`

- `assets/agent-visual-indicator.js-Ct7LqXhp.js`
  - 页面内的“执行态指示器”（边框/Stop 按钮）与“tab group 常驻提示条”。
  - 本轮补了几个关键锚点：
    - `__cpAgentIndicatorContract` / `__cpAgentIndicatorRuntimeMessageTypes` / `__cpAgentIndicatorDomIds`：显隐消息、DOM id、节流/心跳参数优先从 `contract.agentIndicator` 读取
    - `__cpAgentIndicatorMessageTypeStopAgent` / `__cpAgentIndicatorMessageTypeStaticIndicatorHeartbeat`
    - `__cpAgentIndicatorRuntimeMessageShowAgentIndicators` / `__cpAgentIndicatorRuntimeMessageShowStaticIndicator`：内容脚本内部的显隐消息类型
    - `__cpAgentIndicatorCurrentTabSentinel`：Stop 按钮上报“当前 tab”的哨兵值
    - `__cpAgentIndicator*Id` / `__cpStaticIndicator*Id`：关键 DOM 节点 id
    - `__cpStaticIndicator*Selector`：静态提示条按钮/tooltip 查询选择器
    - `__cpAgentIndicatorHideTransitionDelayMs` / `__cpStaticIndicatorHeartbeatIntervalMs`：执行态隐藏过渡与常驻提示条心跳间隔
    - `__cpShowActiveAgentIndicators` / `__cpHideStaticTabGroupIndicator`：显隐主入口别名
    - 中文入口锚点：`tab group 常驻提示条入口`、`tab group 指示器通过后台心跳确认自己仍属于活跃主标签组`

- `assets/startRecording-BeCDKY84.js`
  - “录制链”相关 chunk（更接近 session replay 事件录制，而非系统级屏幕/音频采集）。
  - 本轮补了几个关键锚点：
    - `__cpSessionReplayWorkerRecordChannel`：worker 通道名 `record`
    - `__cpSessionReplayRecordTypeFullSnapshot` / `__cpSessionReplayRecordSourceBrowser`：full snapshot 类型与记录来源
    - `__cpSessionReplaySegmentCreationReason*`：segment 轮转原因（init/view_change/stop/duration_limit/bytes_limit）
    - `__cpSessionReplaySegmentUploadMimeType` / `__cpSessionReplaySegmentMetadataMimeType`
    - `__cpSessionReplayMouseMoveThrottleMs` / `__cpSessionReplayScrollThrottleMs` / `__cpSessionReplayVisualViewportThrottleMs`
    - `__cpSessionReplayMutationFlushThrottleMs` / `__cpSessionReplayMutationFlushTimeoutMs`：mutation 批处理节流与超时
    - `__cpSessionReplayTransportBuilderDependency` / `__cpSessionReplayMissingEmitFunctionsError`：transport 依赖键与启动失败错误字面量
    - `__cpSessionReplaySegmentDurationLimitMs` / `__cpSessionReplaySegmentByteLimit`：segment 轮转上限
    - `__cpSessionReplayRecorderRuntime` / `__cpSessionReplaySegmentFactory` / `__cpSessionReplaySegmentTransportRuntime` / `__cpSessionReplayStartRecordingExport`：录制运行时、segment 工厂、transport、导出入口别名

- `assets/useStorageState-hbwNMVUA.js`
  - 存储相关 hook 与状态同步。
  - 侧栏模型配置、用户配置、缓存状态会频繁经过这里。
  - 本轮补了几个入口锚点：
    - `__cpSidepanelStorageSupportChunk`
    - `__cpModelsConfigStorageKey` / `__cpModelsConfigReader` / `__cpModelsConfigDefaultValue` / `__cpResolveModelDisplayName`：模型配置读取、默认值与展示名解析（storage key `chrome_ext_models`）
    - `__cpNormalizeCookieDomain` / `__cpEnumerateParentCookieDomains` / `__cpCookieRemovalExpiresAt`：cookie domain 归一化与清理
    - `__cpCookieDomainStorageBridge` / `__cpCookieStorageAdapter`
    - `__cpWebStorageKeyEnum`
    - `__cpCrossTabLocalStorageSyncHook`
    - `__cpCrossTabLocalStorageSyncKeyPrefix` / `__cpCrossTabLocalStorageEventName` / `__cpCrossTabLocalStoragePayloadField*` / `__cpUseLocalStorageStateHook`：跨 tab localStorage 同步协议、事件名、payload 字段与 hook 入口
    - `__cpOptionsAccountCustomProviderStorageKey` / `__cpOptionsAccountProfileApiPath`：profile query 的 storage key 与 API path 常量
    - `jA`：用户 profile 查询，custom provider 接管鉴权时会短路
    - `xA`：options 账号态 bootstrap

- `assets/index-5uYI7rOK.js`
  - React 运行时与打包入口之一。
  - 控制台里看到的 React `#185` 多半会指到这里，但真正业务原因通常不在这里。

## 自定义供应商

- `custom-provider-models.js`
  - 统一拉取兼容供应商的 `/models`，并整理成可选模型列表。

- `custom-provider-settings.js`
  - `options.html` 对应的自定义供应商配置 UI。

- `sidepanel-inline-provider.js`
  - sidepanel 里的内联供应商配置 UI。

- `provider-format-adapter.js`
  - 供应商格式适配层。
  - 用来区分 OpenAI / Anthropic 兼容接口的字段与请求格式。

## 页面与壳层

- `claw-contract.js`
  - 当前恢复层的稳定接口契约。
  - 统一收口关键 `storage key`（custom provider/auth/prompts/models/permission/github update）、会话前缀、独立窗口消息类型与高频 message type（`contract.messages.*`）。
  - 新增字段协议子树：`contract.offscreen`、`contract.pairing`、`contract.agentIndicator`、`contract.mcpBridge`。
  - `contract.mcpBridge` 现已覆盖 runtime 回包字段、popup query、permission prompt storage payload 字段。
  - 后续新增外提模块时，优先从这里取常量，避免键名继续散落。

- `mcp-permission-popup-protocol.js`
  - MCP permission popup 协议 helper。
  - 负责统一 MCP 权限窗的 query helper（`tabId` / `mcpPermissionOnly` / `requestId`）、storage helper（prompt 暂存 key/payload）与 runtime 回包 helper（`requestId` / `allowed`），并补充 popup URL / window options / timeout 等构造逻辑。
  - 壳层接入位置：`sidepanel.html` 会在 sidepanel bundle 前注入它，`service-worker-loader.js` 会在后台 bundle 前 import 它，供 `assets/sidepanel-BoLm9pmH.js` 与 `assets/mcpPermissions-qqAoJjJ8.js` 共享。

- `sidepanel.html`
  - 侧栏页面入口，负责先注入 `claw-contract.js` / `mcp-permission-popup-protocol.js`，再挂载主 bundle 和调试脚本。

- `options.html`
  - 设置页入口。

- `offscreen.html`
  - offscreen document 入口（隐藏页面）。
  - 主要用于播放声音与生成 GIF（MV3 下可用于 service worker keepalive）。

- `offscreen.js`
  - offscreen document 的运行脚本：keepalive、音频播放、GIF 生成与消息分发。
  - 本轮补了几个关键锚点：
    - `__cpOffscreenContract`：offscreen payload 字段与 keepalive 间隔优先从 `contract.offscreen` 读取
    - `__cpOffscreenKeepaliveMessageType` / `__cpOffscreenKeepaliveIntervalMs`
    - `__cpOffscreenMessageTypePlaySound` / `__cpOffscreenMessageTypeGenerateGif` / `__cpOffscreenMessageTypeRevokeBlobUrl`
    - `__cpOffscreenAudioFieldUrl` / `__cpOffscreenAudioFieldVolume` / `__cpOffscreenDefaultVolume`
    - `__cpOffscreenGifFieldFrames` / `__cpOffscreenGifFieldOptions` / `__cpOffscreenGifFieldBlobUrl`

- `service-worker-loader.js`
  - 后台脚本加载壳，会在发行 bundle 前导入 `claw-contract.js` 与 `mcp-permission-popup-protocol.js`。
  - 当前固定加载顺序：
    1. `assets/service-worker.ts-H0DVM1LS.js`：保留原始 background 主桥
    2. `service-worker-detached-window-runtime.js`：补 detached popup 锁账本/URL/open-reuse-runtime
    3. `service-worker-runtime.js`：注册 recovered runtime，把 cleanup/maintenance/OPEN_GROUP_DETACHED_WINDOW 接起来
  - loader 自身不改 bundle 逻辑，只做依赖注入与职责拼接。

- `service-worker-detached-window-runtime.js`
  - 独立窗口模式的可维护运行时。
  - 负责 detached lock 账本的归一化、读写、清理，以及独立窗口 URL 协议。
  - 关键主链：
    - `normalizeDetachedWindowLockEntry`：锁账本最小有效边界（`groupId` / `windowId`）
    - `readDetachedWindowLocks` / `writeDetachedWindowLocks` / `upsertDetachedWindowLock` / `removeDetachedWindowLockByWindowId`：storage.local 上的 detached popup 锁账本读写链
    - `buildDetachedWindowUrl` / `parseDetachedWindowUrl`：`sidepanel.html?mode=window&tabId=...&groupId=...` 协议
    - `ensureDetachedWindowGroupContext`：从主 tab 恢复 group 上下文；必要时先补 group
    - `findDetachedWindowByGroupId`：按 `groupId` 查找可复用 popup
    - `sweepDetachedWindowLocks`：storage 锁账本与真实 popup 窗口的巡检/对账链
    - `openDetachedWindowForGroup`：`sweep -> resolve context -> reuse existing popup -> else create new -> persist lock`

- `service-worker-runtime.js`
  - service worker 的可维护恢复层。
  - 负责三条壳层职责：session scope 清理、detached popup 生命周期收口、安装/启动维护任务。
  - 关键主链：
    - `createScopeCleanupRuntime`：session scope 清理运行时，只处理 storage scope 账本
    - `collectStoredScopeEntries`：把 storage snapshot 聚合为 `scopeId -> { keys/groupIds/mainTabIds }` 账本
    - `cleanupClosedGroupScopes`：tab group 关闭后的关联 scope 清理链
    - `cleanupOrphanGroupScopes`：启动/安装时的 orphan chrome-group scope 扫描清理链
    - `runBackgroundMaintenance`：`clearUninstallUrl -> cleanupOrphanGroupScopes -> sweepDetachedWindowLocks`
    - `onWindowRemoved` / `onTabRemoved`：host window / main tab 销毁后的 detached popup 收口链
    - `onMessage`：这里只消费 `OPEN_GROUP_DETACHED_WINDOW`，其余 runtime message 仍回到 bundle 主桥

## 后续人工整理建议

- 先继续拆 `assets/sidepanel-BoLm9pmH.js`
  - 可按“模型 / 权限 / 聊天初始化”三块继续做语义注释。

- 同步维护 `docs/maintainability-boundaries.md`
  - 把“哪些接口冻结、哪些区域允许外提”写清楚，避免恢复过程中反复漂移。

- 再处理 `assets/service-worker.ts-H0DVM1LS.js`
  - 适合把消息类型按“面板 / OAuth / 通知 / MCP”分类补注释。
