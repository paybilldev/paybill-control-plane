export interface SignInEvent {
  action: 'sign_in'
  properties: {
    category: 'account'
    /**
     * The method used to sign in, e.g. email, github, sso
     */
    method: string
  }
}

export interface SignUpEvent {
  action: 'sign_up'
  properties: {
    category: 'conversion'
  }
}

export type TelemetryGroups = {
  project: string
  organization: string
}

export interface FeaturePreviewDisabledEvent {
  action: 'feature_preview_disabled'
  properties: {
    /**
     * Feature key of the preview that was disabled. e.g. ui-api-side-panel
     */
    feature: string
  }
  groups: TelemetryGroups
}

/**
 * User clicked the "Request a Demo" button in various locations described in properties.
 *
 * @group Events
 * @source www
 */
export interface RequestDemoButtonClickedEvent {
  action: 'request_demo_button_clicked'
  properties: {
    /**
     * The source of the button click, e.g. homepage hero, cta banner, product page header.
     * If it states it came from the request demo form, it can come from different pages so refer to path name to determine.
     */
    buttonLocation: string
  }
}

/**
 * User clicked the green "Start Project" button in various locations described in properties.
 *
 * @group Events
 * @source www
 */
export interface StartProjectButtonClickedEvent {
  action: 'start_project_button_clicked'
  properties: {
    /**
     * The source of the button click, e.g. homepage hero, product page header.
     */
    buttonLocation: string
  }
}

/**
 * User clicked a customer story card in the homepage.
 *
 * @group Events
 * @source www
 * @page /
 */
export interface HomepageCustomerStoryCardClickedEvent {
  action: 'homepage_customer_story_card_clicked'
  properties: {
    customer?: string
    /**
     * The size of the card clicked.
     */
    cardType: 'expanded' | 'narrow'
  }
}

/**
 * User clicked the project template card in the homepage.
 *
 * @group Events
 * @source www
 * @page /
 */
export interface HomepageProjectTemplateCardClickedEvent {
  action: 'homepage_project_template_card_clicked'
  properties: {
    /**
     * The title of the project template card clicked.
     */
    templateTitle: string
  }
}

/**
 * User clicked the framework quickstart card on the homepage, leading to the specific framework documentation.
 *
 * @group Events
 * @source www
 * @page /
 */
export interface HomepageFrameworkQuickstartClickedEvent {
  action: 'homepage_framework_quickstart_clicked'
  properties: {
    /**
     * The name of the framework quickstart card clicked.
     */
    frameworkName: string
  }
}

/**
 * User clicked the sign-in button in various locations described in properties.
 *
 * @group Events
 * @source www
 */
export interface SignInButtonClickedEvent {
  action: 'sign_in_button_clicked'
  properties: {
    /**
     * The source of the button click, e.g. homepage hero, cta banner, product page header.
     */
    buttonLocation: string
  }
}

/**
 * User clicked on the CTA button on a plan in the pricing page.
 *
 * @group Events
 * @source www
 * @page /pricing
 */
export interface WwwPricingPlanCtaClickedEvent {
  action: 'www_pricing_plan_cta_clicked'
  properties: {
    /**
     * The plan type that was clicked.
     */
    plan: string
    /**
     * Whether the upgrade now text is shown on the cta button. This is only shown when org is upgradeable and user is logged in.
     */
    showUpgradeText: boolean
    /**
     * The section of the page where the plan was clicked.
     * Main means the big top section of the page,
     * comparison_table means the comparison table with all plans listed together below.
     */
    section: 'main' | 'comparison_table'
    tableMode?: 'mobile' | 'desktop'
  }
}

/**
 * User clicked on a DPA PDF link to open it.
 *
 * @group Events
 * @source www, studio
 */
export interface DpaPdfOpenedEvent {
  action: 'dpa_pdf_opened'
  properties: {
    /**
     * The source of the click, e.g. www, studio
     */
    source: 'www' | 'studio'
  }
}

/**
 * User clicked on a TIA PDF link to open it.
 *
 * @group Events
 * @source www, studio
 */
export interface TIAPdfOpenedEvent {
  action: 'tia_pdf_opened'
  properties: {
    /**
     * The source of the click, e.g. www, studio
     */
    source: 'www' | 'studio'
  }
}

export type TelemetryEvent =
  | SignUpEvent
  | SignInEvent
  | RequestDemoButtonClickedEvent
  | FeaturePreviewDisabledEvent
  | StartProjectButtonClickedEvent
  | HomepageCustomerStoryCardClickedEvent
  | HomepageProjectTemplateCardClickedEvent
  | HomepageFrameworkQuickstartClickedEvent
  | SignInButtonClickedEvent
  | WwwPricingPlanCtaClickedEvent
  | DpaPdfOpenedEvent
  | TIAPdfOpenedEvent
