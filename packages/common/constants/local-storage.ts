export const LOCAL_STORAGE_KEYS = {
  AI_ASSISTANT_STATE: (projectRef: string | undefined) => `ai-assistant-state-${projectRef}`,
  SIDEBAR_BEHAVIOR: 'sidebar-behavior',
  EDITOR_PANEL_STATE: 'editor-panel-state',
  PROJECTS_VIEW: 'projects-view',
  FEEDBACK_WIDGET_CONTENT: 'feedback-widget-content',
  FEEDBACK_WIDGET_SCREENSHOT: 'feedback-widget-screenshot',
  PAYBILL_FORM_TOKEN: 'form-token',

  UI_PREVIEW_API_SIDE_PANEL: 'ui-api-side-panel',
  UI_PREVIEW_CLS: 'ui-cls',
  UI_PREVIEW_INLINE_EDITOR: 'ui-preview-inline-editor',
  UI_PREVIEW_UNIFIED_LOGS: 'ui-preview-unified-logs',
  UI_ONBOARDING_NEW_PAGE_SHOWN: 'ui-onboarding-new-page-shown',
  UI_PREVIEW_BRANCHING: 'ui-branching',
  UI_PREVIEW_ADVISOR_RULES: 'ui-advisor-rules',

  NEW_LAYOUT_NOTICE_ACKNOWLEDGED: 'new-layout-notice-acknowledge',
  TABS_INTERFACE_ACKNOWLEDGED: 'tabs-interface-acknowledge',
  AI_ASSISTANT_MCP_OPT_IN: 'ai-assistant-mcp-opt-in',

  DASHBOARD_HISTORY: (ref: string) => `dashboard-history-${ref}`,
  STORAGE_PREFERENCE: (ref: string) => `storage-explorer-${ref}`,

  AUTH_USERS_FILTER: (ref: string) => `auth-users-filter-${ref}`,
  AUTH_USERS_SORT_BY_VALUE: (ref: string) => `auth-users-sort-by-value-${ref}`,
  AUTH_USERS_COLUMNS_CONFIGURATION: (ref: string) => `auth-users-columns-${ref}`,

  SQL_EDITOR_INTELLISENSE: 'sql-editor-intellisense-enabled',
  SQL_EDITOR_SPLIT_SIZE: 'sql-editor-split-size',
  // Key to track which schemas are ok to be sent to AI. The project ref is intentionally put at the end for easier search in the browser console.
  SQL_EDITOR_AI_SCHEMA: (ref: string) => `sql-editor-ai-schema-enabled-${ref}`,
  SQL_EDITOR_AI_OPEN: 'sql-editor-ai-open',
  SQL_EDITOR_LAST_SELECTED_DB: (ref: string) => `sql-editor-last-selected-db-${ref}`,
  SQL_EDITOR_SQL_BLOCK_ACKNOWLEDGED: (ref: string) => `sql-editor-sql-block-acknowledged-${ref}`,
  SQL_EDITOR_SECTION_STATE: (ref: string) => `sql-editor-section-state-${ref}`,
  SQL_EDITOR_SORT: (ref: string) => `sql-editor-sort-${ref}`,

  // Key to track if the user has acknowledged the security notifications preview
  SECURITY_NOTIFICATIONS_ACKNOWLEDGED: (ref: string) =>
    `security-notifications-acknowledged-${ref}`,

  LOG_EXPLORER_SPLIT_SIZE: 'log-explorer-split-size',
  CLS_DIFF_WARNING: 'cls-diff-warning-dismissed',
  CLS_SELECT_STAR_WARNING: 'cls-select-star-warning-dismissed',
  QUERY_PERF_SHOW_BOTTOM_SECTION: 'query-perf-show-bottom-section',
  LINTER_SHOW_FOOTER: 'linter-show-footer',
  // Key to track account deletion requests
  ACCOUNT_DELETION_REQUEST: 'account-deletion-request',
  // Used for storing a user id when sending reports to Sentry. The id is hashed for anonymity.
  SENTRY_USER_ID: 'sentry-user-id',
  // Used for storing the last sign in method used by the user
  LAST_SIGN_IN_METHOD: 'last-sign-in-method',
  // Key to track the last selected schema. The project ref is intentionally put at the end for easier search in the browser console.
  LAST_SELECTED_SCHEMA: (ref: string) => `last-selected-schema-${ref}`,
  // Track position of nodes for schema visualizer
  SCHEMA_VISUALIZER_POSITIONS: (ref: string, schemaId: number) =>
    `schema-visualizer-positions-${ref}-${schemaId}`,
  // Used for allowing the main nav panel to expand on hover
  EXPAND_NAVIGATION_PANEL: 'expand-navigation-panel',
  GITHUB_AUTHORIZATION_STATE: 'github-authorization-state',
  // Notice banner keys
  API_KEYS_FEEDBACK_DISMISSED: (ref: string) => `api-keys-feedback-dismissed-${ref}`,
  MAINTENANCE_WINDOW_BANNER: 'maintenance-window-banner-2025-11-21',
  REPORT_DATERANGE: 'report-daterange',

  // api keys view switcher for new and legacy api keys
  API_KEYS_VIEW: (ref: string) => `api-keys-view-${ref}`,

  LAST_VISITED_ORGANIZATION: 'last-visited-organization',

  // user impersonation selector previous searches
  USER_IMPERSONATION_SELECTOR_PREVIOUS_SEARCHES: (ref: string) =>
    `user-impersonation-selector-previous-searches-${ref}`,

  HOTKEY_COMMAND_MENU: 'dashboard-hotkey-command-menu',

  // Project sidebar hotkeys
  HOTKEY_SIDEBAR: (sidebarId: string) => `dashboard-hotkey-sidebar-${sidebarId}`,

  // Index Advisor notice dismissed
  INDEX_ADVISOR_NOTICE_DISMISSED: (ref: string) => `index-advisor-notice-dismissed-${ref}`,

  // Observability banner dismissed
  OBSERVABILITY_BANNER_DISMISSED: (ref: string) => `observability-banner-dismissed-${ref}`,

  /**
   * COMMON
   */
  /** @deprecated – we're using usercentrics instead to handle telemetry consent */
  TELEMETRY_CONSENT: 'consent-ph',
  TELEMETRY_DATA: 'telemetry-data',

  /**
   * DOCS
   */
  SAVED_ORG: 'docs.ui.user.selected.org',
  SAVED_PROJECT: 'docs.ui.user.selected.project',
  SAVED_BRANCH: 'docs.ui.user.selected.branch',

  HIDE_PROMO_TOAST: 'hide-promo-toast',

  /**
   * WWW
   */
  BLOG_VIEW: 'blog-view',

  // Used to track if user has dismissed table editor quickstart prompt
  TABLE_QUICKSTART_DISMISSED: 'table-quickstart-dismissed',
} as const

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS]

const LOCAL_STORAGE_KEYS_ALLOWLIST = [
  'theme',
  'paybillDarkMode',
  'paybill.dashboard.auth.debug',
  'paybill.dashboard.auth.navigatorLock.disabled',
  LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT,
  LOCAL_STORAGE_KEYS.UI_PREVIEW_API_SIDE_PANEL,
  LOCAL_STORAGE_KEYS.UI_PREVIEW_INLINE_EDITOR,
  LOCAL_STORAGE_KEYS.UI_PREVIEW_CLS,
  LOCAL_STORAGE_KEYS.UI_PREVIEW_UNIFIED_LOGS,
  LOCAL_STORAGE_KEYS.LAST_SIGN_IN_METHOD,
  LOCAL_STORAGE_KEYS.HIDE_PROMO_TOAST,
  LOCAL_STORAGE_KEYS.BLOG_VIEW,
  LOCAL_STORAGE_KEYS.AI_ASSISTANT_MCP_OPT_IN,
  LOCAL_STORAGE_KEYS.UI_PREVIEW_BRANCHING,
  LOCAL_STORAGE_KEYS.LINTER_SHOW_FOOTER,
  LOCAL_STORAGE_KEYS.TABLE_QUICKSTART_DISMISSED,
]

export function clearLocalStorage() {
  for (const key in localStorage) {
    if (!LOCAL_STORAGE_KEYS_ALLOWLIST.includes(key)) {
      localStorage.removeItem(key)
    }
  }
}
