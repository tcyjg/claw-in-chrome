const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..", "..");
const sidepanelPath = path.join(rootDir, "assets", "sidepanel-BoLm9pmH.js");
const permissionManagerPath = path.join(rootDir, "assets", "PermissionManager-9s959502.js");
const mcpPermissionsPath = path.join(rootDir, "assets", "mcpPermissions-qqAoJjJ8.js");
const accessibilityTreeBundlePath = path.join(rootDir, "assets", "accessibility-tree.js-D8KNCIWO.js");
const agentVisualIndicatorBundlePath = path.join(rootDir, "assets", "agent-visual-indicator.js-Ct7LqXhp.js");
const startRecordingBundlePath = path.join(rootDir, "assets", "startRecording-BeCDKY84.js");
const pairingBootstrapBundlePath = path.join(rootDir, "assets", "pairing-H3Cs7KHl.js");
const pairingPromptBundlePath = path.join(rootDir, "assets", "PairingPrompt-Do4C6yFu.js");
const contentScriptBundlePath = path.join(rootDir, "assets", "content-script.ts-Bwa5rY9t.js");
const serviceWorkerBundlePath = path.join(rootDir, "assets", "service-worker.ts-H0DVM1LS.js");
const serviceWorkerRuntimePath = path.join(rootDir, "service-worker-runtime.js");
const detachedWindowRuntimePath = path.join(rootDir, "service-worker-detached-window-runtime.js");
const serviceWorkerLoaderPath = path.join(rootDir, "service-worker-loader.js");
const optionsBundlePath = path.join(rootDir, "assets", "options-Hyb_OzME.js");
const offscreenPath = path.join(rootDir, "offscreen.js");
const storageChunkPath = path.join(rootDir, "assets", "useStorageState-hbwNMVUA.js");
const mapPath = path.join(rootDir, "DEOBFUSCATION_MAP.md");
const sessionRecoveryDetachedWindowDocPath = path.join(rootDir, "docs", "session-recovery-detached-window.md");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assertIncludes(source, needle, label) {
  assert.equal(source.includes(needle), true, `${label} should include ${needle}`);
}

async function testSidepanelAnchorsExist() {
  const source = read(sidepanelPath);
  assertIncludes(source, "const __cpPermissionPromptStore = t1;", "sidepanel bundle");
  assertIncludes(source, "const __cpHandlePermissionRequiredPrompt = async e => {", "sidepanel bundle");
  assertIncludes(source, "const __cpPermissionRetryHelper = OQ;", "sidepanel bundle");
  assertIncludes(source, "const __cpPermissionRetryingToolExecutor = Se;", "sidepanel bundle");
  assertIncludes(source, "const __cpDetachedWindowLockStorageKey = __CP_DETACHED_WINDOW_LOCKS_KEY;", "sidepanel bundle");
  assertIncludes(source, "const __cpPermissionApproveHandler = nn;", "sidepanel bundle");
  assertIncludes(source, "const __cpPermissionDenyHandler = sn;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPermissionPromptPromiseResolverRef = Ee;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelInlinePairingPromptState = Le;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelContractMessages = globalThis.__CP_CONTRACT__?.messages;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypeExecuteTask = __cpSidepanelContractMessages?.EXECUTE_TASK ?? \"EXECUTE_TASK\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypePopulateInputText = __cpSidepanelContractMessages?.POPULATE_INPUT_TEXT ?? \"POPULATE_INPUT_TEXT\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypeStopAgent = __cpSidepanelContractMessages?.STOP_AGENT ?? \"STOP_AGENT\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypeMainTabAckRequest = __cpSidepanelContractMessages?.MAIN_TAB_ACK_REQUEST ?? \"MAIN_TAB_ACK_REQUEST\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypeMainTabAckResponse = __cpSidepanelContractMessages?.MAIN_TAB_ACK_RESPONSE ?? \"MAIN_TAB_ACK_RESPONSE\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypePingSidepanel = __cpSidepanelContractMessages?.PING_SIDEPANEL ?? \"PING_SIDEPANEL\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelQueryKeySessionId = \"sessionId\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelQueryKeySkipPermissions = \"skipPermissions\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelQueryModeWindow = \"window\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypeSecondaryTabCheckMain = __cpSidepanelContractMessages?.SECONDARY_TAB_CHECK_MAIN ?? \"SECONDARY_TAB_CHECK_MAIN\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypeShowPermissionNotification = __cpSidepanelContractMessages?.SHOW_PERMISSION_NOTIFICATION ?? \"SHOW_PERMISSION_NOTIFICATION\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypeOpenOptionsWithTask = __cpSidepanelContractMessages?.OPEN_OPTIONS_WITH_TASK ?? \"OPEN_OPTIONS_WITH_TASK\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypePanelOpened = __cpSidepanelContractMessages?.PANEL_OPENED ?? \"PANEL_OPENED\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypePanelClosed = __cpSidepanelContractMessages?.PANEL_CLOSED ?? \"PANEL_CLOSED\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypePlayNotificationSound = __cpSidepanelContractMessages?.PLAY_NOTIFICATION_SOUND ?? \"PLAY_NOTIFICATION_SOUND\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypeResizeWindow = __cpSidepanelContractMessages?.resize_window ?? \"resize_window\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelChatOrchestratorComponent = CQ;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPromptsContract = globalThis.__CP_CONTRACT__?.prompts || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeySystemPrompt = __cpSidepanelPromptsContract.SYSTEM_PROMPT_STORAGE_KEY || \"chrome_ext_system_prompt\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeySkipPermissionsSystemPrompt = __cpSidepanelPromptsContract.SKIP_PERMISSIONS_SYSTEM_PROMPT_STORAGE_KEY || \"chrome_ext_skip_perms_system_prompt\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeyToolUsagePrompt = __cpSidepanelPromptsContract.TOOL_USAGE_PROMPT_STORAGE_KEY || \"chrome_ext_tool_usage_prompt\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeyCustomToolPrompts = \"chrome_ext_custom_tool_prompts\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelBootstrapQueryKeySkipPermissions = \"skipPermissions\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSessionHydrationLockRef = __cpHydratingSessionRef;", "sidepanel bundle");
  assertIncludes(source, "const __cpApplyDraftToCurrentScope = __cpApplySessionDraft;", "sidepanel bundle");
  assertIncludes(source, "const __cpApplySnapshotToCurrentScope = __cpApplySessionSnapshot;", "sidepanel bundle");
  assertIncludes(source, "const __cpSynchronizeExternalActiveSession = __cpSyncExternalActiveSession;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPairingContract = globalThis.__CP_CONTRACT__?.pairing || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPairingQueryKeyRequestId = __cpSidepanelPairingQueryKeys.REQUEST_ID || \"request_id\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelOutgoingMessageTypePairingConfirmed = __cpSidepanelPairingContractMessages.pairing_confirmed ?? \"pairing_confirmed\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpBridgeContract = globalThis.__CP_CONTRACT__?.mcpBridge || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPopupProtocol = globalThis.__CP_MCP_PERMISSION_POPUP_PROTOCOL__ || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPromptStorageFields = __cpSidepanelMcpPermissionPopupProtocol.STORAGE_FIELDS || __cpSidepanelMcpBridgeContract.PERMISSION_PROMPT_STORAGE_FIELDS || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPopupQueryKeys = __cpSidepanelMcpPermissionPopupProtocol.QUERY_KEYS || __cpSidepanelMcpBridgeContract.PERMISSION_POPUP_QUERY_KEYS || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpRuntimeMessageFields = __cpSidepanelMcpPermissionPopupProtocol.RESPONSE_FIELDS || __cpSidepanelMcpBridgeContract.RUNTIME_MESSAGE_FIELDS || {};", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageQueryKeyMode = \"mode\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageQueryKeyTabId = __cpSidepanelMcpPermissionPopupQueryKeys.TAB_ID || \"tabId\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageQueryKeyMcpPermissionOnly = __cpSidepanelMcpPermissionPopupQueryKeys.PERMISSION_ONLY || \"mcpPermissionOnly\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageQueryKeyRequestId = __cpSidepanelMcpPermissionPopupQueryKeys.REQUEST_ID || \"requestId\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageQueryKeyModel = \"model\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageMcpPromptStoragePrefix = __cpSidepanelMcpPermissionPopupProtocol.STORAGE_KEY_PREFIX || __cpSidepanelMcpBridgeContract.PERMISSION_PROMPT_STORAGE_KEY_PREFIX || \"mcp_prompt_\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPromptStorageFieldPrompt = __cpSidepanelMcpPermissionPromptStorageFields.PROMPT || \"prompt\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpRuntimeMessageFieldRequestId = __cpSidepanelMcpRuntimeMessageFields.REQUEST_ID || \"requestId\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpRuntimeMessageFieldAllowed = __cpSidepanelMcpRuntimeMessageFields.ALLOWED || \"allowed\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPopupBuildStorageKey = __cpSidepanelMcpPermissionPopupProtocol.buildPromptStorageKey || (e => `${__cpSidepanelPageMcpPromptStoragePrefix}${e}`);", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPopupParseSearch = __cpSidepanelMcpPermissionPopupProtocol.parsePopupSearch || (e => {", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelMcpPermissionPopupBuildResponse = __cpSidepanelMcpPermissionPopupProtocol.buildResponseMessage || ((e, t) => ({", "sidepanel bundle");
  assertIncludes(source, "type: globalThis.__CP_CONTRACT__?.messages?.MCP_PERMISSION_RESPONSE ?? \"MCP_PERMISSION_RESPONSE\",", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelPageWindowCloseDelayMs = __cpSidepanelMcpPermissionPopupProtocol.WINDOW_CLOSE_DELAY_MS || 50;", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeyPurlPrompt = \"chrome_ext_purl_prompt\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeyVersionInfo = \"chrome_ext_version_info\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelStorageKeyAnnouncement = \"chrome_ext_announcement\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelEditorQueryKeyTabId = \"tabId\";", "sidepanel bundle");
  assertIncludes(source, "const __cpSidepanelBlockedTabsQueryKeyTabId = \"tabId\";", "sidepanel bundle");
  assertIncludes(source, "语义锚点：首屏模型 bootstrap 主链", "sidepanel bundle");
  assertIncludes(source, "语义锚点：这里是 sidepanel 的凭据刷新主入口", "sidepanel bundle");
  assertIncludes(source, "语义锚点：工具结果汇总与权限闸门", "sidepanel bundle");
  assertIncludes(source, "语义锚点：工具执行主循环里的 permission_required 分支。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：工具执行返回 `permission_required` 时，统一从这里转到 sidepanel 权限弹窗。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：当前 sidepanel 权限请求的 Promise resolve 挂点。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 页面 query 参数协议（主窗口/独立窗口、目标 tab、MCP 权限窗、模型注入）。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：MCP permission popup 的 query 消费分两段，tabId 走通用 sidepanel bootstrap，mcpPermissionOnly/requestId 走权限弹窗链。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 已打开时，优先在当前面板内消费 show_pairing_prompt，而不是退化为新开 pairing.html。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：mcpPermissionOnly 独立窗口启动后，会从 storage 注入 prompt，并在用户决策后立即回包关闭。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：MCP permission popup consumer 挂载点 1，负责从 storage 注入 prompt 并绑定当前 requestId 的回包回调。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 的 MCP permission popup consumer 只消费 storage payload 里的 prompt；tabId/timestamp 不参与此处上下文恢复。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：MCP 权限窗回包字段 requestId/allowed 与 mcpBridge runtime 字段契约保持一致；真正关联 pending promise 的是 requestId，不是 tabId。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：MCP permission popup consumer 挂载点 2，复用同一份 storage prompt 与 requestId 回包逻辑给主面板状态层。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：主面板状态层同样只读取 prompt；storage payload 里的 tabId/timestamp 不在这里消费。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 主面板里的 MCP 权限弹窗复用同一组 requestId/allowed runtime 字段。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：mcpPermissionOnly 专用窗口会绕过普通 sidepanel 的权限提示 UI 分支，直接走 requestId 回包后关窗。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：Ee.current(true) 实际上会 resolve 当前 requestId 对应的 MCP permission pending promise。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：Ee.current(false) 会把当前 requestId 对应的 MCP permission pending promise 解析为拒绝。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：权限弹窗“拒绝”处理器。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：普通 sidepanel 权限链里，toolUseId 只用于一次性授权账本；", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 内联 pairing 弹层状态。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：PANEL_OPENED / PANEL_CLOSED 只表示 sidepanel 可见性生命周期，不等于 MCP permission response。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：PANEL_CLOSED 由 visibilitychange(hidden) 触发，只表示页面进入 hidden，不等价于 MCP permission 拒绝。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 内联 pairing 确认后，复用 pairing_confirmed 协议把 request_id/name 回传给 bridge。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel 内联 pairing 的 dismiss 只关闭本地弹层；pairing_dismissed 仅由独立 pairing.html 发出。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel <-> service worker / runtime.onMessage 消息协议", "sidepanel bundle");
  assertIncludes(source, "语义锚点：scope 切换后的 session hydrate 总入口", "sidepanel bundle");
  assertIncludes(source, "语义锚点：scope 切换后的 session hydrate 主流程", "sidepanel bundle");
  assertIncludes(source, "语义锚点：scope 绑定的 storage 变化同步桥", "sidepanel bundle");
  assertIncludes(source, "语义锚点：hydrate 迁移策略 1，按旧 chromeGroup scope 兜底迁移", "sidepanel bundle");
  assertIncludes(source, "语义锚点：hydrate 迁移策略 2，按当前 scope 精确匹配 mainTab/group 迁移", "sidepanel bundle");
  assertIncludes(source, "语义锚点：hydrate 迁移策略 3，按当前 URL / 标题做近似匹配迁移", "sidepanel bundle");
  assertIncludes(source, "语义锚点：会话恢复主链从这里开始", "sidepanel bundle");
  assertIncludes(source, "语义锚点：scope hydrate 主流程", "sidepanel bundle");
  assertIncludes(source, "语义锚点：把草稿态恢复回当前 sidepanel 会话的入口。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：把持久化 snapshot 恢复回当前 sidepanel 会话的入口。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：外部 active session 变化后的统一同步入口。", "sidepanel bundle");
  assertIncludes(source, "语义锚点：独立窗口打开前，会先把当前 scope 的 snapshot/draft 持久化", "sidepanel bundle");
  assertIncludes(source, "语义锚点：权限弹窗“允许”处理器", "sidepanel bundle");
  assertIncludes(source, "语义锚点：detached window 锁记录的归一化入口", "sidepanel bundle");
  assertIncludes(source, "语义锚点：plan 审批型 permission_required 对象的产出点", "sidepanel bundle");
  assertIncludes(source, "语义锚点：detached window 锁状态的 storage 同步监听", "sidepanel bundle");
  assertIncludes(source, "语义锚点：sidepanel <-> service worker / runtime.onMessage 消息协议（ping/主副 tab ack/执行/填充/停止）。", "sidepanel bundle");
}

async function testPermissionManagerAnchorsExist() {
  const source = read(permissionManagerPath);
  assertIncludes(source, "const __cpPermissionModesWithRelaxedPrompts = Sy;", "PermissionManager bundle");
  assertIncludes(source, "const __cpDefaultPlanApprovalMode = Ty;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionScopeTypesEnum = vy;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionScopeTypeNetloc = \"netloc\";", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionActionAllow = by.ALLOW;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionDurationOnce = wy.ONCE;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionStoragePayloadPermissionsField = \"permissions\";", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionCacheKeyNoTool = \"no-tool\";", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionModeFollowPlan = \"follow_a_plan\";", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionStoragePersistenceKey = B.PERMISSION_STORAGE;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerClass = xy;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerStorageKeysEnum = B;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerStorageKeyUpdateAvailable = B.UPDATE_AVAILABLE;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerCheckPermission = xy.prototype.checkPermission;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerNormalizeDomain = xy.prototype.normalizeDomain;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerFindApplicablePermission = xy.prototype.findApplicablePermission;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerIsLocalhostUrl = xy.prototype.isLocalhostUrl;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerSetupStorageListener = xy.prototype.setupStorageListener;", "PermissionManager bundle");
  assertIncludes(source, "const __cpPermissionManagerSetTurnApprovedDomains = xy.prototype.setTurnApprovedDomains;", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：follow_a_plan 批准后的域名白名单入口", "PermissionManager bundle");
  assertIncludes(source, "turn-approved domain 生效时，计划外域名会被直接挡住", "PermissionManager bundle");
  assertIncludes(source, "域间跳转权限和普通 netloc 权限是两套规则", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：把 URL / host / IPv6 / host:port 统一归一化为可比较的域名字符串。", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：普通站点权限命中链，先查一次性 toolUseId，再查持久 ALLOW/DENY 规则。", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：netloc 匹配支持 *.example.com 通配和 www. 归一化比较。", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：MCP localhost 旁路判定使用的 hostname 归类入口。", "PermissionManager bundle");
  assertIncludes(source, "语义锚点：本地存储变化后，重新加载权限并清空匹配缓存", "PermissionManager bundle");
}

async function testStorageChunkAnchorExists() {
  const source = read(storageChunkPath);
  assertIncludes(source, "const __cpSidepanelStorageSupportChunk = true;", "useStorageState bundle");
  assertIncludes(source, "const __cpNormalizeCookieDomain = S;", "useStorageState bundle");
  assertIncludes(source, "const __cpEnumerateParentCookieDomains = T;", "useStorageState bundle");
  assertIncludes(source, "const __cpCookieRemovalExpiresAt = A;", "useStorageState bundle");
  assertIncludes(source, "const __cpModelsConfigStorageKey = globalThis.__CP_CONTRACT__?.models?.CONFIG_STORAGE_KEY || \"chrome_ext_models\";", "useStorageState bundle");
  assertIncludes(source, "const __cpModelsConfigReader = xU;", "useStorageState bundle");
  assertIncludes(source, "const __cpModelsConfigDefaultValue = xUDefaultModelConfig;", "useStorageState bundle");
  assertIncludes(source, "const __cpResolveModelDisplayName = EU;", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStorageSyncKeyPrefix = \"LSS-\";", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStorageEventName = \"storage\";", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStoragePayloadFieldValue = \"value\";", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStoragePayloadFieldTabId = \"tabId\";", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStoragePayloadFieldTimestamp = \"timestamp\";", "useStorageState bundle");
  assertIncludes(source, "const __cpUseLocalStorageStateHook = V;", "useStorageState bundle");
  assertIncludes(source, "const __cpCookieDomainStorageBridge = O;", "useStorageState bundle");
  assertIncludes(source, "const __cpCookieStorageAdapter = O;", "useStorageState bundle");
  assertIncludes(source, "const __cpWebStorageKeyEnum = H;", "useStorageState bundle");
  assertIncludes(source, "const __cpCrossTabLocalStorageSyncHook = U;", "useStorageState bundle");
  assertIncludes(source, "const __cpOptionsAccountCustomProviderStorageKey = \"customProviderConfig\";", "useStorageState bundle");
  assertIncludes(source, "const __cpOptionsAccountProfileApiPath = \"/api/oauth/profile\";", "useStorageState bundle");
  assertIncludes(source, "语义锚点：跨 tab 的 localStorage 同步桥，sidepanel 如果依赖本地持久态会经过这里。", "useStorageState bundle");
  assertIncludes(source, "语义锚点：options / sidepanel 鉴权探测时使用的 profile query", "useStorageState bundle");
  assertIncludes(source, "语义锚点：options 页账号态 bootstrap", "useStorageState bundle");
}

async function testMcpPermissionsAnchorsExist() {
  const source = read(mcpPermissionsPath);
  assertIncludes(source, "const __cpDebugContract = globalThis.__CP_CONTRACT__?.debug || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeKeepaliveAlarmName = Ea;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeKeepalivePingIntervalMs = 20000;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeDisplayNameStorageKey = \"bridgeDisplayName\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeDeviceIdStorageKey = \"bridgeDeviceId\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeWebSocketUrlPrefix = \"wss://bridge.claudeusercontent.com/chrome/\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypeConnect = \"connect\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypePaired = \"paired\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketFieldRequestId = \"request_id\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketFieldClientType = \"client_type\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketFieldToolUseId = \"tool_use_id\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeClientTypeChromeExtension = \"chrome-extension\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeDefaultPeerClientType = \"desktop\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpGifCreatorToolName = \"gif_creator\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpGifCreatorActionExport = \"export\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpGifCreatorOffscreenMessageTypeGenerateGif = __cpGifCreatorContractMessages.GENERATE_GIF || \"GENERATE_GIF\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeEnsureConnected = Pa;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSend = La;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeNotify = Oa;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgePendingPermissionResponseLedger = Ca;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeContract = globalThis.__CP_CONTRACT__?.mcpBridge || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupProtocol = globalThis.__CP_MCP_PERMISSION_POPUP_PROTOCOL__ || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageFields = __cpMcpPermissionPopupProtocol.RESPONSE_FIELDS || __cpMcpBridgeContract.RUNTIME_MESSAGE_FIELDS || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPromptStorageFields = __cpMcpPermissionPopupProtocol.STORAGE_FIELDS || __cpMcpBridgeContract.PERMISSION_PROMPT_STORAGE_FIELDS || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupQueryKeys = __cpMcpPermissionPopupProtocol.QUERY_KEYS || __cpMcpBridgeContract.PERMISSION_POPUP_QUERY_KEYS || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpPairingContract = globalThis.__CP_CONTRACT__?.pairing || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpPairingQueryKeys = __cpPairingContract.QUERY_KEYS || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpAgentIndicatorContract = globalThis.__CP_CONTRACT__?.agentIndicator || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpAgentIndicatorRuntimeMessageTypes = __cpAgentIndicatorContract.RUNTIME_MESSAGE_TYPES || {};", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageTypePairingConfirmed = __cpMcpBridgeContractMessages.pairing_confirmed || \"pairing_confirmed\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageTypePairingDismissed = __cpMcpBridgeContractMessages.pairing_dismissed || \"pairing_dismissed\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageTypeShowPairingPrompt = __cpMcpBridgeContractMessages.show_pairing_prompt || \"show_pairing_prompt\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpSidepanelRuntimeMessageTypeExecuteTask = __cpMcpBridgeContractMessages.EXECUTE_TASK || \"EXECUTE_TASK\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageTypeMcpPermissionResponse = __cpMcpBridgeContractMessages.MCP_PERMISSION_RESPONSE || \"MCP_PERMISSION_RESPONSE\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageFieldRequestId = __cpMcpBridgeRuntimeMessageFields.REQUEST_ID || \"requestId\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeRuntimeMessageFieldAllowed = __cpMcpBridgeRuntimeMessageFields.ALLOWED || \"allowed\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPromptStorageFieldPrompt = __cpMcpPermissionPromptStorageFields.PROMPT || \"prompt\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypeToolCall = __cpMcpBridgeContractMessages.tool_call || \"tool_call\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypeToolResult = __cpMcpBridgeContractMessages.tool_result || \"tool_result\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypePairingRequest = __cpMcpBridgeContractMessages.pairing_request || \"pairing_request\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgeSocketMessageTypePermissionResponse = __cpMcpBridgeContractMessages.permission_response || \"permission_response\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpShortcutsExecuteQueryKeyMode = \"mode\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPromptStorageKeyPrefix = __cpMcpPermissionPopupProtocol.STORAGE_KEY_PREFIX || __cpMcpBridgeContract.PERMISSION_PROMPT_STORAGE_KEY_PREFIX || \"mcp_prompt_\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupBuildStorageKey = __cpMcpPermissionPopupProtocol.buildPromptStorageKey || (e => `${__cpMcpPermissionPromptStorageKeyPrefix}${e}`);", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupCreateStorageEntry = __cpMcpPermissionPopupProtocol.createPromptStorageEntry || ((e, t, r = Date.now()) => ({", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpBridgePairingQueryKeyRequestId = __cpPairingQueryKeys.REQUEST_ID || \"request_id\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupQueryKeyTabId = __cpMcpPermissionPopupQueryKeys.TAB_ID || \"tabId\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupCreateUrl = __cpMcpPermissionPopupProtocol.buildPopupUrl || ((e, t) => e(`sidepanel.html?${__cpMcpPermissionPopupQueryKeyTabId}=${t.tabId}&${__cpMcpPermissionPopupQueryKeyPermissionOnly}=true&${__cpMcpPermissionPopupQueryKeyRequestId}=${t.requestId}`));", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupCreateWindowOptions = __cpMcpPermissionPopupProtocol.createPopupWindowOptions || ((e, t) => ({", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpPermissionPopupResponseTimeoutMs = __cpMcpPermissionPopupProtocol.RESPONSE_TIMEOUT_MS || __cpMcpBridgeContract.PERMISSION_POPUP_RESPONSE_TIMEOUT_MS || 30000;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpAgentIndicatorRuntimeMessageTypeShowAgentIndicators = __cpAgentIndicatorRuntimeMessageTypes.SHOW_AGENT_INDICATORS || \"SHOW_AGENT_INDICATORS\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpAgentIndicatorRuntimeMessageTypeHideStaticIndicator = __cpAgentIndicatorRuntimeMessageTypes.HIDE_STATIC_INDICATOR || \"HIDE_STATIC_INDICATOR\";", "mcpPermissions bundle");
  assertIncludes(source, "const __cpShortcutsExecuteStartInPopupWindow = Wa;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpToolErrorResultFactory = bn;", "mcpPermissions bundle");
  assertIncludes(source, "const __cpMcpToolExecutor = wn;", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：GIF 录制/导出主状态机（start/stop/export/clear）。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：GIF 导出上传前的 permission_required 产出点。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：GIF 导出后的页面内拖拽上传分支（DataTransfer + dragenter/dragover/drop）。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge 连接握手 payload（connect / client_type / device_id / display_name）", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge 入站消息分发（paired/waiting/ping/tool_call/pairing_request/permission_response）", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：MCP Bridge 连接与消息发送入口", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge runtime listener 当前只显式消费 pairing_confirmed；pairing_dismissed 未在此处回 bridge，表现为用户取消配对的协议级 no-op。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge permission_request 待回包账本（key=requestId -> { resolve }）。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：requestId 只负责 bridge permission_request/permission_response 对账；", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：requestId 是 bridge permission_request/permission_response 的对账键；", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge 断连/重连时，未完成的 permission_request 一律按拒绝收口，避免 requestId 账本泄漏。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：permission prompt storage payload 里的 tabId/timestamp 主要给 background 账本与清理链使用；sidepanel consumer 实际只读 prompt。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：这里把 requestId 绑定到 pending permission promise；sidepanel 的 requestId/allowed 回包会 resolve 它。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：popup 权限链的 requestId 是 background <-> sidepanel 的唯一关联键；", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：收到 runtime MCP_PERMISSION_RESPONSE 后，background 会主动关闭 popup；手动关闭则留给 timeout 兜底。", "mcpPermissions bundle");
  assertIncludes(source, "pairing_dismissed 属于配对链 no-op，不会触发这里的 pending permission promise。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：popup 创建失败按拒绝处理，避免 pending promise 长时间悬挂。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：手动关闭 permission popup 不会立即回包；background 侧最终由 30s timeout 兜底拒绝。", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：agent indicator 内容脚本显隐消息类型（bridge / sidepanel 都会跨 tab 发送）", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：shortcuts_execute 通过新 sidepanel 窗口发送 EXECUTE_TASK 启动任务", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：bridge 权限请求握手（permission_request -> permission_response）", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：MCP tool_call 的标准错误返回结构（tool_result.error 的兼容格式）", "mcpPermissions bundle");
  assertIncludes(source, "语义锚点：MCP 工具执行主入口", "mcpPermissions bundle");
}

async function testServiceWorkerBundleAnchorsExist() {
  const source = read(serviceWorkerBundlePath);
  assertIncludes(source, "const __cpNativeMessagingContract = globalThis.__CP_CONTRACT__?.nativeMessaging || {};", "service-worker bundle");
  assertIncludes(source, "const __cpNativeMessagingPermission = __cpNativeMessagingContract.PERMISSION || \"nativeMessaging\";", "service-worker bundle");
  assertIncludes(source, "const __cpNativeHostDesktopName = __cpNativeMessagingContract.HOST_DESKTOP || \"com.anthropic.claude_browser_extension\";", "service-worker bundle");
  assertIncludes(source, "const __cpNativeHostClaudeCodeName = __cpNativeMessagingContract.HOST_CLAUDE_CODE || \"com.anthropic.claude_code_browser_extension\";", "service-worker bundle");
  assertIncludes(source, "const __cpAlarmPrefixPrompt = \"prompt_\";", "service-worker bundle");
  assertIncludes(source, "const __cpAlarmPrefixRetry = \"retry_\";", "service-worker bundle");
  assertIncludes(source, "const __cpContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "service-worker bundle");
  assertIncludes(source, "const __cpAgentIndicatorContract = globalThis.__CP_CONTRACT__?.agentIndicator || {};", "service-worker bundle");
  assertIncludes(source, "const __cpBackgroundMessageTypeOpenSidePanel = __cpContractMessages.open_side_panel || \"open_side_panel\";", "service-worker bundle");
  assertIncludes(source, "const __cpBackgroundMessageTypePopulateInputText = __cpContractMessages.POPULATE_INPUT_TEXT || \"POPULATE_INPUT_TEXT\";", "service-worker bundle");
  assertIncludes(source, "const __cpBackgroundMessageTypeExecuteTask = __cpContractMessages.EXECUTE_TASK || \"EXECUTE_TASK\";", "service-worker bundle");
  assertIncludes(source, "const __cpBackgroundMessageTypeOffscreenPlaySound = __cpContractMessages.OFFSCREEN_PLAY_SOUND || \"OFFSCREEN_PLAY_SOUND\";", "service-worker bundle");
  assertIncludes(source, "const __cpAgentIndicatorCurrentTabSentinel = __cpAgentIndicatorContract.CURRENT_TAB_SENTINEL || \"CURRENT_TAB\";", "service-worker bundle");
  assertIncludes(source, "const __cpStaticIndicatorAckPayloadFieldSecondaryTabId = \"secondaryTabId\";", "service-worker bundle");
  assertIncludes(source, "const __cpStaticIndicatorAckCacheTtlMs = 3000;", "service-worker bundle");
  assertIncludes(source, "const __cpBackgroundMessageTypeLogout = \"logout\";", "service-worker bundle");
  assertIncludes(source, "const __cpExternalMessageTypeOauthRedirect = \"oauth_redirect\";", "service-worker bundle");
  assertIncludes(source, "const __cpTrustedExternalOriginClaudeAi = \"https://claude.ai\";", "service-worker bundle");
  assertIncludes(source, "const __cpTrustedExternalOrigins = [__cpTrustedExternalOriginClaudeAi];", "service-worker bundle");
  assertIncludes(source, "const __cpNativePortNotificationJsonRpcVersion = \"2.0\";", "service-worker bundle");
  assertIncludes(source, "const __cpChromeNotificationTypeBasic = \"basic\";", "service-worker bundle");
  assertIncludes(source, "const __cpScheduledTaskFallbackName = \"Scheduled Task\";", "service-worker bundle");
  assertIncludes(source, "const __cpScheduledTaskExecutionTypeManual = \"manual\";", "service-worker bundle");
  assertIncludes(source, "const __cpSwitchToMainTabErrorNoMainTab = \"No main tab found\";", "service-worker bundle");
  assertIncludes(source, "const __cpExternalBridgeErrorUntrustedOrigin = \"Untrusted origin\";", "service-worker bundle");
  assertIncludes(source, "原生宿主桥初始化入口", "service-worker bundle");
  assertIncludes(source, "原生宿主消息分发：工具执行、连接状态同步、状态查询回包。", "service-worker bundle");
  assertIncludes(source, "原生宿主 tool_response 回包桥：把后台工具结果 / 用户拒绝统一包装回 native host。", "service-worker bundle");
  assertIncludes(source, "网络请求头注入入口：统一给外部 API 请求附加扩展版 User-Agent。", "service-worker bundle");
  assertIncludes(source, "clau.de deep-link / 扩展路由桥：", "service-worker bundle");
  assertIncludes(source, "permissions 深链接：跳到 options#permissions，再关闭当前 clau.de 中转页。", "service-worker bundle");
  assertIncludes(source, "reconnect 深链接：断开旧 native host / bridge，再重新初始化后台连接。", "service-worker bundle");
  assertIncludes(source, "tab 深链接：聚焦指定 tab，并把 sidepanel 绑定到对应主标签组上下文。", "service-worker bundle");
  assertIncludes(source, "service worker 启动链", "service-worker bundle");
  assertIncludes(source, "detached window 锁巡检、group/session cleanup 则由 loader 后注册的 recovered runtime 追加，不在这里展开。", "service-worker bundle");
  assertIncludes(source, "recovered runtime 只额外消费 OPEN_GROUP_DETACHED_WINDOW；这里继续承接 ACK/indicator/native-host 等主桥消息。", "service-worker bundle");
  assertIncludes(source, "后台主桥消息分区：", "service-worker bundle");
  assertIncludes(source, "轻量 ACK 类消息：仅回包确认", "service-worker bundle");
  assertIncludes(source, "PANEL_OPENED / PANEL_CLOSED 只是面板生命周期 ACK，不参与 MCP permission promise 的解析。", "service-worker bundle");
  assertIncludes(source, "OAuth 探测桥：当前恢复层不在此 bundle 内做刷新，只回传固定探测结果。", "service-worker bundle");
  assertIncludes(source, "非音频类消息继续在主桥里细分；PLAY_NOTIFICATION_SOUND 则单独走 offscreen document。", "service-worker bundle");
  assertIncludes(source, "sidepanel 打开主链：打开侧栏后，按重试策略把 prompt/模型/附件注入输入框。", "service-worker bundle");
  assertIncludes(source, "退出登录探测：当前发行版只需要告诉调用方该能力已禁用。", "service-worker bundle");
  assertIncludes(source, "原生宿主 / MCP bridge 状态读取：优先向 native host 请求最新状态，失败时回退本地缓存。", "service-worker bundle");
  assertIncludes(source, "MCP 通知桥：优先走 native host 的 notification 通道", "service-worker bundle");
  assertIncludes(source, "options 引导桥：把待执行任务先写入 storage，再聚焦或打开 options#prompts。", "service-worker bundle");
  assertIncludes(source, "定时任务执行桥：由后台统一落埋点并把任务转交 sidepanel 独立窗口。", "service-worker bundle");
  assertIncludes(source, "agent / tab-group 协调链：Stop、主副 tab 切换、ACK 探测、静态提示条心跳都从这里汇总。", "service-worker bundle");
  assertIncludes(source, "secondary -> main 聚焦桥：把副 tab 切回主 tab，并同步聚焦对应窗口。", "service-worker bundle");
  assertIncludes(source, "静态提示条心跳会遍历同组 tab，并缓存 3s ACK 结果以避免重复探测", "service-worker bundle");
  assertIncludes(source, "secondary -> main 的 ACK 请求桥：只确认主 tab 是否还活着，不负责 detached popup 的生命周期。", "service-worker bundle");
  assertIncludes(source, "主 tab ACK 回包：这里只透传 success，供 secondary heartbeat 判断主 tab 存活。", "service-worker bundle");
  assertIncludes(source, "静态提示条心跳：遍历同组 tab 做 ACK 探测；detached window 是否复用/新开由 recovered runtime 单独判断。", "service-worker bundle");
  assertIncludes(source, "这里只清静态提示条；tab group 关闭后的 session scope / detached lock 清理由 recovered runtime 的事件处理链负责。", "service-worker bundle");
  assertIncludes(source, "offscreen 音频播放桥：确保 offscreen document 存在后", "service-worker bundle");
  assertIncludes(source, "定时任务窗口会话入口：新建目标窗口、弹出独立 sidepanel，并向面板投递执行动作。", "service-worker bundle");
  assertIncludes(source, "更新可用态同步入口：写入后台状态，供 options/sidepanel 提示升级。", "service-worker bundle");
  assertIncludes(source, "定时任务闹钟桥：`prompt_` 负责执行任务，`retry_` 负责补偿重排。", "service-worker bundle");
  assertIncludes(source, "tab 关闭同步入口：先让 tab-group 管理器更新主副 tab 账本；", "service-worker bundle");
  assertIncludes(source, "clau.de navigation bridge：消费 `/chrome/permissions` / `reconnect` / `tab/<id>` 这类扩展深链接。", "service-worker bundle");
  assertIncludes(source, "外部页面桥：只信任 claude.ai", "service-worker bundle");
}

async function testAccessibilityTreeAnchorsExist() {
  const source = read(accessibilityTreeBundlePath);
  assertIncludes(source, "const __cpAccessibilityTreeGlobalGeneratorKey = \"__generateAccessibilityTree\";", "accessibility-tree bundle");
  assertIncludes(source, "const __cpAccessibilityTreeInferRole = h;", "accessibility-tree bundle");
  assertIncludes(source, "const __cpAccessibilityTreeInferLabel = g;", "accessibility-tree bundle");
  assertIncludes(source, "const __cpAccessibilityTreeTraverseAndSerialize = b;", "accessibility-tree bundle");
  assertIncludes(source, "const __cpAccessibilityTreeDefaultDepth = 15;", "accessibility-tree bundle");
  assertIncludes(source, "const __cpAccessibilityTreeFilterInteractive = \"interactive\";", "accessibility-tree bundle");
  assertIncludes(source, "语义锚点：页面可访问性树生成器", "accessibility-tree bundle");
}

async function testAgentVisualIndicatorAnchorsExist() {
  const source = read(agentVisualIndicatorBundlePath);
  assertIncludes(source, "const __cpAgentIndicatorContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorContract = globalThis.__CP_CONTRACT__?.agentIndicator || {};", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorRuntimeMessageTypes = __cpAgentIndicatorContract.RUNTIME_MESSAGE_TYPES || {};", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorDomIds = __cpAgentIndicatorContract.DOM_IDS || {};", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorMessageTypeStopAgent = __cpAgentIndicatorContractMessages.STOP_AGENT || \"STOP_AGENT\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorMessageTypeStaticIndicatorHeartbeat = __cpAgentIndicatorContractMessages.STATIC_INDICATOR_HEARTBEAT || \"STATIC_INDICATOR_HEARTBEAT\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorRuntimeMessageShowAgentIndicators = __cpAgentIndicatorRuntimeMessageTypes.SHOW_AGENT_INDICATORS || \"SHOW_AGENT_INDICATORS\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorCurrentTabSentinel = __cpAgentIndicatorContract.CURRENT_TAB_SENTINEL || \"CURRENT_TAB\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorAnimationStylesId = __cpAgentIndicatorDomIds.ANIMATION_STYLES || \"claude-agent-animation-styles\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorStopButtonId = __cpAgentIndicatorDomIds.STOP_BUTTON || \"claude-agent-stop-button\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpStaticIndicatorContainerId = __cpAgentIndicatorDomIds.STATIC_CONTAINER || \"claude-static-indicator-container\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpStaticIndicatorChatButtonId = __cpAgentIndicatorDomIds.STATIC_CHAT_BUTTON || \"claude-static-chat-button\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpStaticIndicatorCloseButtonId = __cpAgentIndicatorDomIds.STATIC_CLOSE_BUTTON || \"claude-static-close-button\";", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpAgentIndicatorHideTransitionDelayMs = __cpAgentIndicatorContract.HIDE_TRANSITION_DELAY_MS || 300;", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpStaticIndicatorHeartbeatIntervalMs = __cpAgentIndicatorContract.HEARTBEAT_INTERVAL_MS || 5000;", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpShowActiveAgentIndicators = p;", "agent-visual-indicator bundle");
  assertIncludes(source, "const __cpHideStaticTabGroupIndicator = L;", "agent-visual-indicator bundle");
  assertIncludes(source, "语义锚点：执行态边框 / Stop 按钮 / tab group 常驻提示条共享的后台消息协议。", "agent-visual-indicator bundle");
  assertIncludes(source, "语义锚点：tab group 常驻提示条入口；关闭时会同步停止心跳并移除 DOM。", "agent-visual-indicator bundle");
  assertIncludes(source, "语义锚点：tab group 指示器通过后台心跳确认自己仍属于活跃主标签组。", "agent-visual-indicator bundle");
}

async function testStartRecordingAnchorsExist() {
  const source = read(startRecordingBundlePath);
  assertIncludes(source, "const __cpSessionReplayRecordTypeFullSnapshot = J;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayRecordSourceBrowser = \"browser\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplaySegmentUploadMimeType = \"application/octet-stream\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplaySegmentMetadataMimeType = \"application/json\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplaySegmentCreationReasonBytesLimit = \"segment_bytes_limit\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayWorkerRecordChannel = \"record\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayTransportBuilderDependency = \"sessionReplayEndpointBuilder\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayMissingEmitFunctionsError = \"emit functions are required\";", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayMouseMoveThrottleMs = 50;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayMutationFlushThrottleMs = 16;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplaySegmentDurationLimitMs = fe;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplaySegmentByteLimit = pe;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayRecorderRuntime = de;", "startRecording bundle");
  assertIncludes(source, "const __cpSessionReplayStartRecordingExport = he;", "startRecording bundle");
}

async function testPairingAnchorsExist() {
  const pairingSource = read(pairingBootstrapBundlePath);
  assertIncludes(pairingSource, "const __cpPairingContract = globalThis.__CP_CONTRACT__?.pairing || {};", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingQueryKeys = __cpPairingContract.QUERY_KEYS || {};", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingQueryKeyRequestId = __cpPairingQueryKeys.REQUEST_ID || \"request_id\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingDefaultClientType = __cpPairingContract.DEFAULT_CLIENT_TYPE || \"desktop\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingRuntimeMessageTypeConfirmed = __cpPairingContractMessages.pairing_confirmed || \"pairing_confirmed\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingRuntimeMessageTypeDismissed = __cpPairingContractMessages.pairing_dismissed || \"pairing_dismissed\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingMessageFields = __cpPairingContract.MESSAGE_FIELDS || {};", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingMessageFieldRequestId = __cpPairingMessageFields.REQUEST_ID || \"request_id\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingMessageFieldName = __cpPairingMessageFields.NAME || \"name\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingCloseDelayMs = __cpPairingContract.CLOSE_DELAY_MS || 100;", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingPageRootMountId = __cpPairingContract.PAGE_ROOT_MOUNT_ID || \"root\";", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingCloseCurrentTab = n;", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingPromptComponent = i;", "pairing bundle");
  assertIncludes(pairingSource, "const __cpPairingPageAppRootComponent = m;", "pairing bundle");
  assertIncludes(pairingSource, "语义锚点：pairing_confirmed / pairing_dismissed 消息 payload 字段名", "pairing bundle");
  assertIncludes(pairingSource, "语义锚点：pairing 页面关闭策略（当前 tab 自我关闭）", "pairing bundle");
  assertIncludes(pairingSource, "语义锚点：关闭 pairing 当前标签页（确认/忽略后都会触发）", "pairing bundle");
  assertIncludes(pairingSource, "语义锚点：独立 pairing 页只消费 request_id/client_type/current_name 这 3 个 query 字段；", "pairing bundle");
  assertIncludes(pairingSource, "语义锚点：pairing 页面 React Root 组件入口", "pairing bundle");
  assertIncludes(pairingSource, "当前恢复层里未观察到后台显式消费 pairing_dismissed，运行时更接近“取消配对”的协议级 no-op。", "pairing bundle");

  const promptSource = read(pairingPromptBundlePath);
  assertIncludes(promptSource, "const __cpPairingClientTypeClaudeCode = \"claude-code\";", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptSubmitKey = \"Enter\";", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptInputRef = u;", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptConfirmHandler = b;", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptKeydownHandler = f;", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptResolvedClientLabel = g;", "PairingPrompt bundle");
  assertIncludes(promptSource, "const __cpPairingPromptExportedComponent = r;", "PairingPrompt bundle");
  assertIncludes(promptSource, "语义锚点：PairingPrompt 组件只负责浏览器命名输入与回调，不直接决定 runtime message。", "PairingPrompt bundle");
  assertIncludes(promptSource, "语义锚点：pairing 对话框打开后，默认把焦点放到浏览器命名输入框。", "PairingPrompt bundle");
  assertIncludes(promptSource, "语义锚点：确认分支会先 trim 浏览器名称；空字符串不会触发上层 onConfirm。", "PairingPrompt bundle");
  assertIncludes(promptSource, "语义锚点：PairingPrompt 组件导出（供 pairing 页面引用）", "PairingPrompt bundle");
}

async function testContentScriptAnchorsExist() {
  const source = read(contentScriptBundlePath);
  assertIncludes(source, "const __cpClaudeOnboardingButtonSelector = \"#claude-onboarding-button\";", "content-script bundle");
  assertIncludes(source, "const __cpClaudeOnboardingPromptDataAttribute = \"data-task-prompt\";", "content-script bundle");
  assertIncludes(source, "const __cpContentScriptContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "content-script bundle");
  assertIncludes(source, "const __cpContentScriptMessageTypeOpenSidePanel = __cpContentScriptContractMessages.open_side_panel || \"open_side_panel\";", "content-script bundle");
}

async function testOptionsBundleAnchorsExist() {
  const source = read(optionsBundlePath);
  assertIncludes(source, "const __cpOptionsSettingsTabHashParser = cpGetSettingsTabFromHash;", "options bundle");
  assertIncludes(source, "const __cpOptionsSubviewHashParser = cpGetOptionsSubviewFromHash;", "options bundle");
  assertIncludes(source, "const __cpOptionsSettingsTabWhitelist = __cpOptionsSettingsTabTokens;", "options bundle");
  assertIncludes(source, "const __cpOptionsHashParamTruthyValue = \"true\";", "options bundle");
  assertIncludes(source, "const __cpOptionsHashChangeEventName = \"hashchange\";", "options bundle");
  assertIncludes(source, "const __cpOptionsProviderSubviewToken = \"provider\";", "options bundle");
  assertIncludes(source, "const __cpOptionsGithubRuntimeMessageBridge = cpGithubSendRuntimeMessage;", "options bundle");
  assertIncludes(source, "__cpOptionsGithubUpdateInfoStorageKey = a.INFO;", "options bundle");
  assertIncludes(source, "__cpOptionsGithubUpdateAutoCheckStorageKey = a.AUTO_CHECK_ENABLED;", "options bundle");
  assertIncludes(source, "__cpOptionsGithubUpdateCheckNowAction = r.CHECK_NOW;", "options bundle");
  assertIncludes(source, "__cpOptionsProviderMountAnchorId = \"cp-options-provider-anchor\";", "options bundle");
  assertIncludes(source, "__cpOptionsSessionMountAnchorId = \"cp-options-session-anchor\";", "options bundle");
  assertIncludes(source, "const __cpOptionsPermissionManagerContract = globalThis.__CP_CONTRACT__?.permissionManager || {};", "options bundle");
  assertIncludes(source, "const __cpOptionsPendingScheduledTaskStorageKey = __cpOptionsPermissionManagerContract.PENDING_SCHEDULED_TASK_STORAGE_KEY || T.PENDING_SCHEDULED_TASK;", "options bundle");
  assertIncludes(source, "const __cpOptionsCustomProviderContract = globalThis.__CP_CONTRACT__?.customProvider || {};", "options bundle");
  assertIncludes(source, "const __cpOptionsAccountBootstrapStorageKey = __cpOptionsCustomProviderContract.ANTHROPIC_API_KEY_STORAGE_KEY || T.ANTHROPIC_API_KEY;", "options bundle");
  assertIncludes(source, "const __cpOptionsProviderNavItemId = \"cp-options-provider-nav-item\";", "options bundle");
  assertIncludes(source, "const __cpOptionsNavHrefOptionsProvider = \"/settings/options?provider=true\";", "options bundle");
  assertIncludes(source, "const __cpOptionsSettingsTabHashWriter = f;", "options bundle");
  assertIncludes(source, "const __cpOptionsSubviewHashWriter = g;", "options bundle");
  assertIncludes(source, "const __cpOptionsRootMountElementId = \"root\";", "options bundle");
  assertIncludes(source, "window.addEventListener(__cpOptionsHashChangeEventName, t);", "options bundle");
  assertIncludes(source, "语义锚点：options 页 hash -> 状态同步入口（一级 tab、二级子视图、麦克风回跳）", "options bundle");
  assertIncludes(source, "语义锚点：一级 tab 点击后，直接写回 window.location.hash 并清空 options 子视图。", "options bundle");
  assertIncludes(source, "语义锚点：options 二级子视图切换（provider/session/prompt -> hash 持久化）", "options bundle");
  assertIncludes(source, "const __cpOptionsBootstrapRuntimeChain = [R, _, L];", "options bundle");
}

async function testOffscreenAnchorsExist() {
  const source = read(offscreenPath);
  assertIncludes(source, "const __cpOffscreenContractMessages = globalThis.__CP_CONTRACT__?.messages || {};", "offscreen");
  assertIncludes(source, "const __cpOffscreenContract = globalThis.__CP_CONTRACT__?.offscreen || {};", "offscreen");
  assertIncludes(source, "const __cpOffscreenKeepaliveMessageType = __cpOffscreenContractMessages.SW_KEEPALIVE || \"SW_KEEPALIVE\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenKeepaliveIntervalMs = __cpOffscreenContract.KEEPALIVE_INTERVAL_MS || 20000;", "offscreen");
  assertIncludes(source, "const __cpOffscreenMessageTypePlaySound = __cpOffscreenContractMessages.OFFSCREEN_PLAY_SOUND || \"OFFSCREEN_PLAY_SOUND\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenMessageTypeGenerateGif = __cpOffscreenContractMessages.GENERATE_GIF || \"GENERATE_GIF\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenMessageTypeRevokeBlobUrl = __cpOffscreenContractMessages.REVOKE_BLOB_URL || \"REVOKE_BLOB_URL\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenAudioFieldUrl = __cpOffscreenContract.AUDIO_FIELD_URL || \"audioUrl\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenAudioFieldVolume = __cpOffscreenContract.AUDIO_FIELD_VOLUME || \"volume\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenDefaultVolume = __cpOffscreenContract.DEFAULT_VOLUME || 0.5;", "offscreen");
  assertIncludes(source, "const __cpOffscreenGifFieldFrames = __cpOffscreenContract.GIF_FIELD_FRAMES || \"frames\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenGifFieldOptions = __cpOffscreenContract.GIF_FIELD_OPTIONS || \"options\";", "offscreen");
  assertIncludes(source, "const __cpOffscreenGifFieldBlobUrl = __cpOffscreenContract.GIF_FIELD_BLOB_URL || \"blobUrl\";", "offscreen");
  assertIncludes(source, "语义锚点：offscreen document <-> service worker 的消息协议", "offscreen");
}

async function testDetachedWindowRuntimeAnchorsExist() {
  const source = read(detachedWindowRuntimePath);
  assertIncludes(source, "detached window lock 归一化边界：", "detached window runtime");
  assertIncludes(source, "detached lock 读取边界：从 storage.local 拉全量账本后逐项归一化，", "detached window runtime");
  assertIncludes(source, "detached window URL 契约：", "detached window runtime");
  assertIncludes(source, "detached window URL 解析边界：", "detached window runtime");
  assertIncludes(source, "detached window 查找链：", "detached window runtime");
  assertIncludes(source, "detached lock 巡检链：", "detached window runtime");
  assertIncludes(source, "openDetachedWindowForGroup 的职责边界：", "detached window runtime");
}

async function testServiceWorkerRuntimeAnchorsExist() {
  const source = read(serviceWorkerRuntimePath);
  assertIncludes(source, "session cleanup 子链只关心 storage 里的 scope 账本，不负责 popup/ack/message 分发。", "service-worker runtime");
  assertIncludes(source, "storage 快照索引层：", "service-worker runtime");
  assertIncludes(source, "tab group 被关闭后的清理链：", "service-worker runtime");
  assertIncludes(source, "启动/安装时做一次孤儿组扫描，只删 chrome-group:* 这类“组已经消失”的残留 scope。", "service-worker runtime");
  assertIncludes(source, "安装/启动维护链：清掉发行版留下的 uninstall survey，再做 scope + detached lock 巡检。", "service-worker runtime");
  assertIncludes(source, "这里故意只消费 OPEN_GROUP_DETACHED_WINDOW。", "service-worker runtime");
}

async function testServiceWorkerLoaderAnchorsExist() {
  const source = read(serviceWorkerLoaderPath);
  assertIncludes(source, "先加载发行版 bundle，保留原有 background 主桥。", "service-worker loader");
  assertIncludes(source, "再加载 detached window runtime，与 recovered runtime 组合出第二轮恢复层。", "service-worker loader");
  assertIncludes(source, "loader 的职责边界：", "service-worker loader");
  assertIncludes(source, "通过依赖注入把 lock sweep/open/close/remove 串到 recovered runtime", "service-worker loader");
}

async function testDeobfuscationMapMentionsCurrentFocusFiles() {
  const source = read(mapPath);
  assertIncludes(source, "assets/sidepanel-BoLm9pmH.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/accessibility-tree.js-D8KNCIWO.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/agent-visual-indicator.js-Ct7LqXhp.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/pairing-H3Cs7KHl.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/PairingPrompt-Do4C6yFu.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/startRecording-BeCDKY84.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/service-worker.ts-H0DVM1LS.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/options-Hyb_OzME.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/content-script.ts-Bwa5rY9t.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "offscreen.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/PermissionManager-9s959502.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/mcpPermissions-qqAoJjJ8.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "assets/useStorageState-hbwNMVUA.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "service-worker-detached-window-runtime.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "service-worker-runtime.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "service-worker-loader.js", "DEOBFUSCATION_MAP");
  assertIncludes(source, "OPEN_GROUP_DETACHED_WINDOW", "DEOBFUSCATION_MAP");
  assertIncludes(source, "sidepanel 打开主链：打开侧栏后，按重试策略把 prompt/模型/附件注入输入框。", "DEOBFUSCATION_MAP");
  assertIncludes(source, "原生宿主 / MCP bridge 状态读取：优先向 native host 请求最新状态，失败时回退本地缓存。", "DEOBFUSCATION_MAP");
  assertIncludes(source, "options 引导桥：把待执行任务先写入 storage，再聚焦或打开 options#prompts。", "DEOBFUSCATION_MAP");
  assertIncludes(source, "定时任务执行桥：由后台统一落埋点并把任务转交 sidepanel 独立窗口。", "DEOBFUSCATION_MAP");
  assertIncludes(source, "secondary -> main 聚焦桥：把副 tab 切回主 tab，并同步聚焦对应窗口。", "DEOBFUSCATION_MAP");
  assertIncludes(source, "clau.de deep-link / 扩展路由桥", "DEOBFUSCATION_MAP");
}

async function testSessionRecoveryDocMentionsServiceWorkerBridgePartitions() {
  const source = read(sessionRecoveryDetachedWindowDocPath);
  assertIncludes(source, "service worker 启动链：先恢复 bridge/listener/offscreen，再探测 native host 和定时任务。", "session recovery doc");
  assertIncludes(source, "detached window 锁巡检、group/session cleanup 则由 loader 后注册的 recovered runtime 追加，不在这里展开。", "session recovery doc");
  assertIncludes(source, "recovered runtime 只额外消费 OPEN_GROUP_DETACHED_WINDOW；这里继续承接 ACK/indicator/native-host 等主桥消息。", "session recovery doc");
  assertIncludes(source, "轻量 ACK 类消息：仅回包确认，让 sidepanel / 指示器 / keepalive 调用方快速结束。", "session recovery doc");
  assertIncludes(source, "sidepanel 打开主链：打开侧栏后，按重试策略把 prompt/模型/附件注入输入框。", "session recovery doc");
  assertIncludes(source, "原生宿主 / MCP bridge 状态读取：优先向 native host 请求最新状态，失败时回退本地缓存。", "session recovery doc");
  assertIncludes(source, "options 引导桥：把待执行任务先写入 storage，再聚焦或打开 options#prompts。", "session recovery doc");
  assertIncludes(source, "定时任务执行桥：由后台统一落埋点并把任务转交 sidepanel 独立窗口。", "session recovery doc");
  assertIncludes(source, "secondary -> main 聚焦桥：把副 tab 切回主 tab，并同步聚焦对应窗口。", "session recovery doc");
  assertIncludes(source, "主 tab ACK 回包：这里只透传 success，供 secondary heartbeat 判断主 tab 存活。", "session recovery doc");
  assertIncludes(source, "clau.de deep-link / 扩展路由桥", "session recovery doc");
}

async function main() {
  await testSidepanelAnchorsExist();
  await testServiceWorkerBundleAnchorsExist();
  await testAccessibilityTreeAnchorsExist();
  await testAgentVisualIndicatorAnchorsExist();
  await testStartRecordingAnchorsExist();
  await testPairingAnchorsExist();
  await testContentScriptAnchorsExist();
  await testOptionsBundleAnchorsExist();
  await testOffscreenAnchorsExist();
  await testDetachedWindowRuntimeAnchorsExist();
  await testServiceWorkerRuntimeAnchorsExist();
  await testServiceWorkerLoaderAnchorsExist();
  await testPermissionManagerAnchorsExist();
  await testMcpPermissionsAnchorsExist();
  await testStorageChunkAnchorExists();
  await testDeobfuscationMapMentionsCurrentFocusFiles();
  await testSessionRecoveryDocMentionsServiceWorkerBridgePartitions();
  console.log("deobfuscation anchor regression tests passed");
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
