type Pricing = {
  database: PricingCategory
  auth: PricingCategory
  storage: PricingCategory
  dashboard: PricingCategory
  security: PricingCategory
  support: PricingCategory
}

type PricingCategory = {
  title: string
  icon: string
  features: PricingFeature[]
}

type PricingFeature = {
  title: string
  key: FeatureKey
  plans: {
    pro: boolean | string | string[]
    team: boolean | string | string[]
    enterprise: boolean | string | string[]
  }
  usage_based: boolean
}

export type FeatureKey =
  | 'database.dedicatedDatabase'
  | 'database.unlimitedApiRequests'
  | 'database.size'
  | 'database.advancedDiskConfig'
  | 'database.automaticBackups'
  | 'database.pitr'
  | 'database.branching'
  | 'database.bandwidth'
  | 'auth.totalUsers'
  | 'auth.maus'
  | 'auth.userDataOwnership'
  | 'auth.anonSignIns'
  | 'auth.socialOAuthProviders'
  | 'auth.customSMTPServer'
  | 'auth.removePaybillBranding'
  | 'auth.auditTrails'
  | 'auth.basicMFA'
  | 'auth.advancedMFAPhone'
  | 'auth.thirdPartyMAUs'
  | 'auth.saml'
  | 'auth.leakedPasswordProtection'
  | 'auth.singleSessionPerUser'
  | 'auth.sessionTimeouts'
  | 'auth.authHooks'
  | 'auth.advancedSecurityFeatures'
  | 'storage.size'
  | 'storage.customAccessControls'
  | 'storage.maxFileSize'
  | 'storage.cdn'
  | 'storage.transformations'
  | 'storage.byoc'
  | 'functions.invocations'
  | 'functions.scriptSize'
  | 'functions.numberOfFunctions'
  | 'dashboard.teamMembers'
  | 'dashboard.auditTrails'
  | 'security.byoc'
  | 'security.logRetention'
  | 'security.logDrain'
  | 'security.metricsEndpoint'
  | 'security.sso'
  | 'security.uptimeSla'
  | 'security.accessRoles'
  | 'security.vanityUrls'
  | 'security.customDomains'
  | 'support.communitySupport'
  | 'support.emailSupport'
  | 'support.emailSupportSla'
  | 'support.designatedSupport'
  | 'support.onBoardingSupport'
  | 'support.designatedCustomerSuccessTeam'
  | 'support.securityQuestionnaireHelp'

export const pricing: Pricing = {
  database: {
    title: 'Database',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    features: [
      {
        key: 'database.dedicatedDatabase',
        title: 'Dedicated Postgres or MySQL Database',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'database.unlimitedApiRequests',
        title: 'Unlimited API requests',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'database.size',
        title: 'Database size',
        plans: {
          pro: ['8 GB disk size per project included', 'then $0.125 per GB'],
          team: ['8 GB disk size per project included', 'then $0.125 per GB'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'database.advancedDiskConfig',
        title: 'Advanced disk config',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'database.automaticBackups',
        title: 'Automatic backups',
        plans: {
          pro: '7 days',
          team: '14 days',
          enterprise: 'Custom',
        },
        usage_based: false,
      },
      {
        key: 'database.pitr',
        title: 'Point in time recovery',
        plans: {
          pro: '$100 per month per 7 days retention',
          team: '$100 per month per 7 days retention',
          enterprise: '$100 per month per 7 days retention, >28 days retention available',
        },
        usage_based: false,
      },
      {
        key: 'database.branching',
        title: 'Branching',
        plans: {
          pro: '$0.01344 per branch, per hour',
          team: '$0.01344 per branch, per hour',
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'database.bandwidth',
        title: 'Bandwidth',
        plans: {
          pro: ['250 GB included', 'then $0.09 per GB'],
          team: ['250 GB included', 'then $0.09 per GB'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
    ],
  },
  auth: {
    title: 'Auth',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    features: [
      {
        key: 'auth.totalUsers',
        title: 'Total Users',
        plans: {
          pro: 'Unlimited',
          team: 'Unlimited',
          enterprise: 'Unlimited',
        },
        usage_based: false,
      },
      {
        key: 'auth.maus',
        title: 'MAUs',
        plans: {
          pro: ['100,000 included', 'then $0.00325 per MAU'],
          team: ['100,000 included', 'then $0.00325 per MAU'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'auth.userDataOwnership',
        title: 'User data ownership',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.anonSignIns',
        title: 'Anonymous Sign-ins',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },

      {
        key: 'auth.socialOAuthProviders',
        title: 'Social OAuth providers',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.customSMTPServer',
        title: 'Custom SMTP server',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.removePaybillBranding',
        title: 'Remove Paybill branding from emails',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.auditTrails',
        title: 'Audit trails',
        plans: {
          pro: '7 days',
          team: '28 days',
          enterprise: '90 days',
        },
        usage_based: false,
      },
      {
        key: 'auth.basicMFA',
        title: 'Basic Multi-Factor Auth',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.advancedMFAPhone',
        title: 'Advanced Multi-Factor Auth - Phone',
        plans: {
          pro: ['$75 per month for first project', 'then $10 per month per additional projects'],
          team: ['$75 per month for first project', 'then $10 per month per additional projects'],
          enterprise: 'Custom',
        },
        usage_based: false,
      },
      {
        key: 'auth.thirdPartyMAUs',
        title: 'Third-Party MAUs',
        plans: {
          pro: ['100,000 included', 'then $0.00325 per MAU'],
          team: ['100,000 included', 'then $0.00325 per MAU'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'auth.saml',
        title: 'Single Sign-On (SAML 2.0)',
        plans: {
          pro: ['50 included', 'then $0.015 per MAU'],
          team: ['50 included', 'then $0.015 per MAU'],
          enterprise: 'Contact Us',
        },

        usage_based: false,
      },
      {
        key: 'auth.leakedPasswordProtection',
        title: 'Leaked password protection',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.singleSessionPerUser',
        title: 'Single session per user',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.sessionTimeouts',
        title: 'Session timeouts',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'auth.authHooks',
        title: 'Auth Hooks',
        plans: {
          pro: 'Custom Access Token (JWT), Send custom email/SMS',
          team: 'All',
          enterprise: 'All',
        },
        usage_based: false,
      },
      {
        key: 'auth.advancedSecurityFeatures',
        title: 'Advanced security features',
        plans: {
          pro: false,
          team: false,
          enterprise: 'Contact Us',
        },
        usage_based: false,
      },
    ],
  },
  storage: {
    title: 'Storage',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',

    features: [
      {
        key: 'storage.size',
        title: 'Storage',
        plans: {
          pro: ['100 GB included', 'then $0.021 per GB'],
          team: ['100 GB included', 'then $0.021 per GB'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'storage.customAccessControls',
        title: 'Custom access controls',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'storage.maxFileSize',
        title: 'Max file upload size',
        plans: {
          pro: '500 GB',
          team: '500 GB',
          enterprise: 'Custom',
        },
        usage_based: false,
      },
      {
        key: 'storage.cdn',
        title: 'Content Delivery Network',
        plans: {
          pro: 'Smart CDN',
          team: 'Smart CDN',
          enterprise: 'Smart CDN',
        },
        usage_based: false,
      },
      {
        key: 'storage.transformations',
        title: 'Image Transformations',
        plans: {
          pro: ['100 origin images included', 'then $5 per 1000 origin images'],
          team: ['100 origin images included', 'then $5 per 1000 origin images'],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'storage.byoc',
        title: 'Bring your own storage provider',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
    ],
  },
  dashboard: {
    title: 'Dashboard',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    features: [
      {
        key: 'dashboard.teamMembers',
        title: 'Team members',
        plans: {
          pro: 'Unlimited',
          team: 'Unlimited',
          enterprise: 'Unlimited',
        },
        usage_based: false,
      },
      {
        key: 'dashboard.auditTrails',
        title: 'Audit trails',
        plans: {
          pro: false,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
    ],
  },
  security: {
    title: 'Platform Security and Compliance',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    features: [
      {
        key: 'security.byoc',
        title: 'BYO cloud',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'security.logRetention',
        title: 'Log retention (API & Database)',
        plans: {
          pro: '7 days',
          team: '28 days',
          enterprise: '90 days',
        },
        usage_based: false,
      },
      {
        key: 'security.logDrain',
        title: 'Log Drain',
        plans: {
          pro: false,
          team: [
            '$60 per drain per month',
            '+ $0.20 per million events',
            '+ $0.09 per GB bandwidth',
          ],
          enterprise: 'Custom',
        },
        usage_based: true,
      },
      {
        key: 'security.metricsEndpoint',
        title: 'Metrics endpoint',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'security.sso',
        title: 'SSO',
        plans: {
          pro: false,
          team: 'Contact Us',
          enterprise: 'Contact Us',
        },
        usage_based: false,
      },
      {
        key: 'security.uptimeSla',
        title: 'Uptime SLAs',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'security.accessRoles',
        title: 'Access Roles',
        plans: {
          pro: 'Owner, Admin, Developer',
          team: 'Owner, Admin, Developer, Read-only, Predefined project scoped roles',
          enterprise: 'Custom project scoped roles',
        },
        usage_based: false,
      },
      {
        key: 'security.vanityUrls',
        title: 'Vanity URLs',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'security.customDomains',
        title: 'Custom Domains',
        plans: {
          pro: '$10 per domain per month per project add on',
          team: '$10 per domain per month per project add on',
          enterprise: '1, additional $10/domain/month',
        },
        usage_based: false,
      },
    ],
  },
  support: {
    title: 'Support',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    features: [
      {
        key: 'support.communitySupport',
        title: 'Community Support',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.emailSupport',
        title: 'Email Support',
        plans: {
          pro: true,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.emailSupportSla',
        title: 'Email Support SLA',
        plans: {
          pro: false,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.designatedSupport',
        title: 'Designated support',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.onBoardingSupport',
        title: 'On Boarding Support',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.designatedCustomerSuccessTeam',
        title: 'Designated Customer Success Team',
        plans: {
          pro: false,
          team: false,
          enterprise: true,
        },
        usage_based: false,
      },
      {
        key: 'support.securityQuestionnaireHelp',
        title: 'Security Questionnaire Help',
        plans: {
          pro: false,
          team: true,
          enterprise: true,
        },
        usage_based: false,
      },
    ],
  },
}
