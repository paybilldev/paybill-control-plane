export type PlanId = 'pro' | 'team' | 'enterprise'

export interface PricingInformation {
  id: string
  planId: PlanId
  name: string
  nameBadge?: string
  costUnit?: string
  href: string
  priceLabel?: string
  priceMonthly: number | string
  warning?: string
  warningTooltip?: string
  description: string
  preface: string
  features: { partners: string[]; features: (string | string[])[] }[]
  footer?: { partners: string[]; footer: string }[]
  cta: string
}

export const plans: PricingInformation[] = [
  {
    id: 'tier_pro',
    planId: 'pro',
    name: 'Pro',
    nameBadge: 'Most Popular',
    costUnit: '/ month',
    href: `/new?plan=pro`,
    priceLabel: 'From',
    warning: 'Scale with ease',
    priceMonthly: 25,
    description: 'For production applications with the power to scale.',
    features: [
      {
        partners: [],
        features: [
          ['100,000 monthly active users', 'then $0.00325 per MAU'],
          ['8 GB disk size per project', 'then $0.125 per GB'],
          ['250 GB bandwidth', 'then $0.09 per GB'],
          ['100 GB file storage', 'then $0.021 per GB'],
          'Email support',
          'Daily backups stored for 7 days',
          '7-day log retention',
        ],
      },
      {
        partners: ['aws'],
        features: [
          ['8 GB disk size per project', 'then $0.125 per GB'],
          ['250 GB bandwidth', 'then $0.09 per GB'],
          'Email support',
          'Daily backups stored for 7 days',
          '7-day log retention',
        ],
      },
    ],
    preface: '',
    cta: 'Get Started',
  },
  {
    id: 'tier_team',
    planId: 'team',
    name: 'Team',
    nameBadge: '',
    costUnit: '/ month',
    href: '/new?plan=team',
    priceLabel: 'From',
    warning: 'Scale with ease',
    priceMonthly: 599,
    description: 'Add features such as SSO, control over backups.',
    features: [
      {
        partners: [],
        features: [
          'Project-scoped and read-only access',
          'SSO for Paybill Dashboard',
          'Priority email support & SLAs',
          'Daily backups stored for 14 days',
          '28-day log retention',
        ],
      },
    ],
    preface: 'Everything in the Pro Plan, plus:',
    cta: 'Get Started',
  },
  {
    id: 'tier_enterprise',
    planId: 'enterprise',
    name: 'Enterprise',
    href: '#',
    description: 'For large-scale applications running Internet scale workloads.',
    features: [
      {
        partners: [],
        features: [
          'Designated Support manager',
          'Uptime SLAs',
          'BYO Cloud supported',
          '24×7×365 premium enterprise support',
          'Private Slack channel',
          'Custom Security Questionnaires',
        ],
      },
    ],
    priceLabel: '',
    priceMonthly: 'Custom',
    preface: '',
    cta: 'Contact Us',
  },
] as const

export function pickFeatures(plan: PricingInformation, billingPartner: string = '') {
  return (
    plan.features.find((f) => f.partners.includes(billingPartner))?.features ||
    plan.features.find((f) => f.partners.length === 0)!.features
  )
}

export function pickFooter(plan: PricingInformation, billingPartner: string = '') {
  return (
    plan.footer?.find((f) => f.partners.includes(billingPartner))?.footer ||
    plan.footer?.find((f) => f.partners.length === 0)!.footer
  )
}
