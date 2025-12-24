import { isFeatureEnabled } from '../../../enabled-features'

const billingEnabled = isFeatureEnabled('billing:all')

export enum SupportCategories {
  PROBLEM = 'Problem',
  DASHBOARD_BUG = 'Dashboard_bug',
  DATABASE_UNRESPONSIVE = 'Database_unresponsive',
  PERFORMANCE_ISSUES = 'Performance',
  SALES_ENQUIRY = 'Sales',
  BILLING = 'Billing',
  REFUND = 'Refund',
  ABUSE = 'Abuse',
  LOGIN_ISSUES = 'Login_issues',
  ACCOUNT_DELETION = 'Account_deletion',
}

export type ExtendedSupportCategories = SupportCategories | 'Plan_upgrade' | 'Others'

export const CATEGORY_OPTIONS: {
  value: ExtendedSupportCategories
  label: string
  description: string
  query?: string
  hidden?: boolean
}[] = [
  {
    value: SupportCategories.PROBLEM,
    label: 'APIs and client libraries',
    description: "Issues with your project's API and client libraries",
    query: undefined,
  },
  {
    value: SupportCategories.DASHBOARD_BUG,
    label: 'Dashboard bug',
    description: 'Issues with the dashboard',
    query: undefined,
  },
  {
    value: SupportCategories.DATABASE_UNRESPONSIVE,
    label: 'Database unresponsive',
    description: 'Issues with connecting to your database',
    query: 'Unable to connect',
  },
  {
    value: SupportCategories.PERFORMANCE_ISSUES,
    label: 'Performance issues',
    description: 'Reporting of performance issues is only available on the Pro Plan',
    query: 'Performance',
  },
  {
    value: SupportCategories.ABUSE,
    label: 'Abuse report',
    description: 'Report abuse of a project or Paybill brand',
    query: undefined,
  },
  {
    value: SupportCategories.LOGIN_ISSUES,
    label: 'Issues with logging in',
    description: 'Issues with logging in and MFA',
    query: undefined,
  },
  ...(billingEnabled
    ? [
        {
          value: SupportCategories.SALES_ENQUIRY,
          label: 'Sales enquiry',
          description: 'Questions about pricing, paid plans and Enterprise plans',
          query: undefined,
        },
        {
          value: SupportCategories.BILLING,
          label: 'Billing',
          description: 'Issues with credit card charges | invoices | overcharging',
          query: undefined,
        },
        {
          value: SupportCategories.REFUND,
          label: 'Refund enquiry',
          description: 'Formal enquiry form for requesting refunds',
          query: undefined,
        },
      ]
    : [
        // [Joshen] Ideally shift this to shared-types, although not critical as API isn't validating the category
        {
          value: 'Plan_upgrade' as const,
          label: 'Plan upgrade',
          description: 'Enquire a plan upgrade for your organization',
          query: undefined,
        },
      ]),
  {
    value: 'Others' as const,
    label: 'Others',
    description: 'Issues that are not related to any of the other categories',
    query: undefined,
    hidden: true,
  },
]
