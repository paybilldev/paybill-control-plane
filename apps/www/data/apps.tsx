import { FunctionComponent } from 'react'
import type { LucideIcon } from 'lucide-react'
import { GitBranch } from 'lucide-react'

export type APPS =
  | APP_SHORTNAMES.ACCOUNTING
  | APP_SHORTNAMES.HUMAN_RESOURCES
  | APP_SHORTNAMES.MANUFACTURING

export enum APP_NAMES {
  ACCOUNTING = 'Accounting',
  HUMAN_RESOURCES = 'Human Resources',
  MANUFACTURING = 'Manufacturing',
}

export enum APP_SHORTNAMES {
  ACCOUNTING = 'accounting',
  HUMAN_RESOURCES = 'human-resources',
  MANUFACTURING = 'manufacturing',
}

export interface AppProps {
  name: APP_NAMES
  icon: Icon
  url: string
}

export type Apps = {
  [app in APPS]: AppProps
}

export const appIcons: Apps = {
  [APP_SHORTNAMES.ACCOUNTING]: {
    name: APP_NAMES.ACCOUNTING,
    icon: {
      '16': 'M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z',
      '18': 'M15.7014 8.34507V5.80169L10.8772 1.00033H3.7014C2.96501 1.00033 2.36805 1.59728 2.36805 2.33367V6.33312M15.6545 5.77939L10.8752 1L10.8752 4.44605C10.8752 5.18243 11.4722 5.77939 12.2086 5.77939L15.6545 5.77939ZM4.29028 6.33312H2.33335C1.59696 6.33312 1 6.93008 1 7.66647V14.3333C1 15.8061 2.19392 17 3.66669 17H14.3333C15.8061 17 17 15.8061 17 14.3333V9.67842C17 8.94203 16.403 8.34507 15.6667 8.34507H7.42712C7.07725 8.34507 6.7414 8.20755 6.492 7.96218L5.2254 6.71601C4.976 6.47063 4.64015 6.33312 4.29028 6.33312Z',
      '24': 'M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z',
    },
    url: '/docs/apps/accounting/invoice-management',
  },
  [APP_SHORTNAMES.HUMAN_RESOURCES]: {
    name: APP_NAMES.HUMAN_RESOURCES,
    icon: {
      '16': 'M3.49414 9.97461H8.49414M3.49414 9.97461V11.9746H8.49414V9.97461M3.49414 9.97461V7.97461H8.49414V9.97461M10 5V3C10 1.89543 9.10457 1 8 1C6.89543 1 6 1.89543 6 3V5M3.47266 7L3.47266 12C3.47266 13.1046 4.36809 14 5.47266 14H10.4727C11.5772 14 12.4727 13.1046 12.4727 12V7C12.4727 5.89543 11.5772 5 10.4727 5L5.47266 5C4.36809 5 3.47266 5.89543 3.47266 7Z',
      '18': 'M3.02644 12.0457H9.18048M3.02644 12.0457V14.5072H9.18048V12.0457M3.02644 12.0457V9.58414H9.18048V12.0457M11.0339 5.92308V3.46154C11.0339 2.10207 9.93179 1 8.57228 1C7.21277 1 6.11067 2.10207 6.11067 3.46154V5.92308M3 8.38465L3 14.5384C3 15.8979 4.10208 17 5.46157 17H11.6157C12.9752 17 14.0773 15.8979 14.0773 14.5384V8.38465C14.0773 7.02516 12.9752 5.92308 11.6157 5.92308L5.46158 5.92308C4.10209 5.92308 3 7.02516 3 8.38465Z',
      '24': 'M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z',
    },
    url: '/docs/apps/human-resources',
  },
  [APP_SHORTNAMES.MANUFACTURING]: {
    name: APP_NAMES.MANUFACTURING,
    icon: {
      '16': 'M1.857 11.36a7 7 0 0 1 9.41-9.551M4.774 14.212a7 7 0 0 0 9.41-9.497m-8.812 7.845a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9.296-9.13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      '18': 'M5.31216 16.101C6.41582 16.6754 7.67021 17 9.00043 17C13.419 17 17.0009 13.4183 17.0009 9C17.0009 7.66622 16.6744 6.40868 16.0971 5.30289M12.7352 1.92336C11.6203 1.33382 10.3494 1 9.00043 1C4.58192 1 1 4.58172 1 9C1 10.3615 1.34015 11.6436 1.94012 12.766M1.94012 12.766C1.61762 13.16 1.42413 13.6637 1.42413 14.2126C1.42413 15.475 2.44753 16.4983 3.70997 16.4983C4.9724 16.4983 5.99581 15.475 5.99581 14.2126C5.99581 12.9502 4.9724 11.9269 3.70997 11.9269C2.99646 11.9269 2.35931 12.2538 1.94012 12.766ZM16.6199 3.7793C16.6199 5.04166 15.5965 6.06501 14.3341 6.06501C13.0716 6.06501 12.0482 5.04166 12.0482 3.7793C12.0482 2.51693 13.0716 1.49358 14.3341 1.49358C15.5965 1.49358 16.6199 2.51693 16.6199 3.7793ZM14.1436 9C14.1436 11.8403 11.8409 14.1429 9.00043 14.1429C6.15996 14.1429 3.8573 11.8403 3.8573 9C3.8573 6.15968 6.15996 3.85714 9.00043 3.85714C11.8409 3.85714 14.1436 6.15968 14.1436 9Z',
      '24': 'M6.6594 21.8201C8.10788 22.5739 9.75418 23 11.5 23C17.299 23 22 18.299 22 12.5C22 10.7494 21.5716 9.09889 20.8139 7.64754M16.4016 3.21191C14.9384 2.43814 13.2704 2 11.5 2C5.70101 2 1 6.70101 1 12.5C1 14.287 1.44643 15.9698 2.23384 17.4428M2.23384 17.4428C1.81058 17.96 1.55664 18.6211 1.55664 19.3416C1.55664 20.9984 2.89979 22.3416 4.55664 22.3416C6.21349 22.3416 7.55664 20.9984 7.55664 19.3416C7.55664 17.6847 6.21349 16.3416 4.55664 16.3416C3.62021 16.3416 2.78399 16.7706 2.23384 17.4428ZM21.5 5.64783C21.5 7.30468 20.1569 8.64783 18.5 8.64783C16.8432 8.64783 15.5 7.30468 15.5 5.64783C15.5 3.99097 16.8432 2.64783 18.5 2.64783C20.1569 2.64783 21.5 3.99097 21.5 5.64783ZM18.25 12.5C18.25 16.2279 15.2279 19.25 11.5 19.25C7.77208 19.25 4.75 16.2279 4.75 12.5C4.75 8.77208 7.77208 5.75 11.5 5.75C15.2279 5.75 18.25 8.77208 18.25 12.5Z',
    },
    url: '/docs/apps/manufacturing',
  },
}

export enum STAGES {
  PRIVATE_ALPHA = 'Private Alpha',
  PUBLIC_ALPHA = 'Public Alpha',
  BETA = 'Beta',
  PUBLIC_BETA = 'Public Beta',
  GA = 'General Availability',
}

export type AppType = {
  /**
   * name of the app
   */
  title: string
  /**
   * subtitle will be displayed in the app card, after the title
   */
  subtitle: string
  /**
   * slug of the app page
   */
  slug: string
  /**
   * icon will be displayed in the app card
   */
  icon: string | LucideIcon | FunctionComponent
  /**
   * Each app belongs to one or more apps
   */
  apps: APPS[]
  url?: string
  /**
   * app metadata on its status
   */
  status?: {
    stage: STAGES
    availableOnSelfHosted: boolean
    selfHostedTooling?: {
      label: string
      link: string
    }
  }
}

// icon can be 16px, 18px or 24px
interface Icon {
  '16': string
  '18': string
  '24': string
}

export type MainType = {
  [key: string]: {
    name: string
    icon: string
    description: string | JSX.Element
    description_short: string
    label: string
    url: string
  }
}

export const MainApps: MainType = {
  [APP_SHORTNAMES.ACCOUNTING]: {
    name: APP_NAMES.ACCOUNTING,
    icon: appIcons[APP_SHORTNAMES.ACCOUNTING].icon[24],
    description: (
      <>
        <strong>Handle customer payments, vendor bills, and financial records</strong> effectively.
      </>
    ),
    description_short: 'Complete Accounting solution',
    label: '',
    url: '/docs/apps/accounting/invoice-management',
  },
  [APP_SHORTNAMES.HUMAN_RESOURCES]: {
    name: APP_NAMES.HUMAN_RESOURCES,
    icon: appIcons[APP_SHORTNAMES.HUMAN_RESOURCES].icon[24],
    description: (
      <>
        <strong>Manage employees, payroll, attendance, and performance</strong> effectively.
      </>
    ),
    description_short: 'Complete HR management',
    label: '',
    url: '/docs/apps/hr',
  },
  [APP_SHORTNAMES.MANUFACTURING]: {
    name: APP_NAMES.MANUFACTURING,
    icon: appIcons[APP_SHORTNAMES.MANUFACTURING].icon[24],
    description: (
      <>
        <strong>
          Plan production, manage bills of materials, and track manufacturing processes
        </strong>
        .
      </>
    ),
    description_short: 'Manufacturing process management',
    label: '',
    url: '/docs/apps/manufacturing',
  },
}

export enum ACCOUNTING_FEATURE_NAMES {
  INVOICEMANAGEMENT = 'Invoice',
  SALESMANAGEMENT = 'Sales',
  PRODUCTMANAGEMENT = 'Products',
  INVENTORYMANAGEMENT = 'Inventory',
  PURCHASEORDERMANAGEMENT = 'Purchase Order',
}

export enum ACCOUNTING_FEATURE_SHORTNAMES {
  PURCHASEORDERMANAGEMENT = 'purchase-order-management',
  INVOICEMANAGEMENT = 'invoice-management',
  SALESMANAGEMENT = 'sales-management',
  PRODUCTMANAGEMENT = 'product-management',
  INVENTORYMANAGEMENT = 'inventory-management',
}

export interface AccountingFeatureProps {
  name: ACCOUNTING_FEATURE_NAMES
  icon: Icon
  url: string
}

export type ACCOUNTING_FEATURES =
  | ACCOUNTING_FEATURE_SHORTNAMES.INVENTORYMANAGEMENT
  | ACCOUNTING_FEATURE_SHORTNAMES.INVOICEMANAGEMENT
  | ACCOUNTING_FEATURE_SHORTNAMES.PRODUCTMANAGEMENT
  | ACCOUNTING_FEATURE_SHORTNAMES.PURCHASEORDERMANAGEMENT
  | ACCOUNTING_FEATURE_SHORTNAMES.SALESMANAGEMENT

export type AccountingFeatures = {
  [feature in ACCOUNTING_FEATURES]: AccountingFeatureProps
}

export const accountingFeatureIcons: AccountingFeatures = {
  [ACCOUNTING_FEATURE_SHORTNAMES.INVENTORYMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.INVENTORYMANAGEMENT,
    icon: {
      '16': 'M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z',
      '18': 'M15.7014 8.34507V5.80169L10.8772 1.00033H3.7014C2.96501 1.00033 2.36805 1.59728 2.36805 2.33367V6.33312M15.6545 5.77939L10.8752 1L10.8752 4.44605C10.8752 5.18243 11.4722 5.77939 12.2086 5.77939L15.6545 5.77939ZM4.29028 6.33312H2.33335C1.59696 6.33312 1 6.93008 1 7.66647V14.3333C1 15.8061 2.19392 17 3.66669 17H14.3333C15.8061 17 17 15.8061 17 14.3333V9.67842C17 8.94203 16.403 8.34507 15.6667 8.34507H7.42712C7.07725 8.34507 6.7414 8.20755 6.492 7.96218L5.2254 6.71601C4.976 6.47063 4.64015 6.33312 4.29028 6.33312Z',
      '24': 'M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z',
    },
    url: '/docs/apps/accounting/inventory-management',
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.INVOICEMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.INVOICEMANAGEMENT,
    icon: {
      '16': 'M3.502 6h8.996v4H3.502V6ZM3 10.002h10v4H3v-4ZM3 2h10v4H3V2Z',
      '18': 'M3.00829 6.33225H15.1778V11.6648H3.00829V6.33225Z M2 13.0839C2 12.3016 2.63418 11.6674 3.41647 11.6674H14.7483C15.5306 11.6674 16.1648 12.3016 16.1648 13.0839V15.5835C16.1648 16.3658 15.5306 17 14.7483 17H3.41647C2.63418 17 2 16.3658 2 15.5835V13.0839Z M2 2.41647C2 1.63418 2.63418 1 3.41647 1H14.7483C15.5306 1 16.1648 1.63418 16.1648 2.41647V4.9161C16.1648 5.6984 15.5306 6.33257 14.7483 6.33257H3.41647C2.63418 6.33257 2 5.6984 2 4.9161V2.41647Z',
      '24': 'M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z',
    },
    url: '/docs/apps/accounting/invoice-management',
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.SALESMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.SALESMANAGEMENT,
    icon: {
      '16': 'M2 2h2l2 12h8L14 6H4m4 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z',
      '18': 'M2 2h2l2 14h10L16 6H4m4 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z',
      '24': 'M3 3h3l3 18h12L21 7H5m5 18a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z',
    },
    url: '/docs/apps/accounting/sales-management',
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.PRODUCTMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.PRODUCTMANAGEMENT,
    icon: {
      '16': 'M3 6h10v1H3V6zm0 3h10v1H3V9zm0 3h7v1H3v-1z',
      '18': 'M3 6h12v2H3V6zm0 4h12v2H3V10zm0 4h9v2H3v-2z',
      '24': 'M3 6h14v3H3V6zm0 5h14v3H3V11zm0 5h11v3H3v-3z',
    },
    url: '/docs/apps/accounting/product-management',
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.PURCHASEORDERMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.PRODUCTMANAGEMENT,
    icon: {
      '16': 'M3 6h10v1H3V6zm0 3h10v1H3V9zm0 3h7v1H3v-1z',
      '18': 'M3 6h12v2H3V6zm0 4h12v2H3V10zm0 4h9v2H3V14z',
      '24': 'M3 6h14v3H3V6zm0 5h14v3H3V11zm0 5h11v3H3v-3z',
    },
    url: '/docs/apps/accounting/purchase-order-management',
  },
}

export const AccountingFeatures: MainType = {
  [ACCOUNTING_FEATURE_SHORTNAMES.INVOICEMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.INVOICEMANAGEMENT,
    icon: accountingFeatureIcons[ACCOUNTING_FEATURE_SHORTNAMES.INVOICEMANAGEMENT].icon[24],
    description: (
      <>
        Comprehensive <strong>accounting and financial management</strong> for your business.
      </>
    ),
    description_short: 'Make your billing process easier',
    label: '',
    url: `/docs/apps/accounting/invoice-management`,
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.SALESMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.SALESMANAGEMENT,
    icon: accountingFeatureIcons[ACCOUNTING_FEATURE_SHORTNAMES.SALESMANAGEMENT].icon[24],
    description: (
      <>
        Comprehensive <strong>accounting and financial management</strong> for your business.
      </>
    ),
    description_short: 'Quotation to invoicing',
    label: '',
    url: `/docs/apps/accounting/sales-management`,
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.PRODUCTMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.PRODUCTMANAGEMENT,
    icon: accountingFeatureIcons[ACCOUNTING_FEATURE_SHORTNAMES.PRODUCTMANAGEMENT].icon[24],
    description: (
      <>
        Comprehensive <strong>accounting and financial management</strong> for your business.
      </>
    ),
    description_short: 'Product lifecycle management',
    label: '',
    url: `/docs/apps/accounting/product-management`,
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.INVENTORYMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.INVENTORYMANAGEMENT,
    icon: accountingFeatureIcons[ACCOUNTING_FEATURE_SHORTNAMES.INVENTORYMANAGEMENT].icon[24],
    description: (
      <>
        <strong>Track inventory, manage stock levels, and optimize supply chain</strong> operations.
      </>
    ),
    description_short: 'Inventory and stock management',
    label: '',
    url: '/docs/apps/accounting/inventory-management',
  },
  [ACCOUNTING_FEATURE_SHORTNAMES.PURCHASEORDERMANAGEMENT]: {
    name: ACCOUNTING_FEATURE_NAMES.PURCHASEORDERMANAGEMENT,
    icon: accountingFeatureIcons[ACCOUNTING_FEATURE_SHORTNAMES.PURCHASEORDERMANAGEMENT].icon[24],
    description: (
      <>
        <strong>Automate procurement, track purchase orders, and manage vendors efficiently</strong>{' '}
        all in one place.
      </>
    ),
    description_short: 'Purchase order management',
    label: '',
    url: '/docs/apps/accounting/purchase-order-management',
  },
}

export const apps: AppType[] = [
  {
    title: APP_NAMES.ACCOUNTING,
    subtitle: 'Comprehensive accounting and financial management for your business.',
    icon: GitBranch,
    apps: [APP_SHORTNAMES.ACCOUNTING],
    url: '/docs/apps/accounting',
    slug: APP_SHORTNAMES.ACCOUNTING,
    status: {
      stage: STAGES.GA,
      availableOnSelfHosted: true,
    },
  },
  // {
  //   title: APP_NAMES.HUMAN_RESOURCES,
  //   subtitle: 'Efficiently manage employee records, payroll, attendance, and performance.',
  //   icon: ChartScatter,
  //   apps: [],
  //   url: '/docs/guides/hr/overview',
  //   slug: APP_SHORTNAMES.HUMAN_RESOURCES,
  //   status: {
  //     stage: STAGES.GA,
  //     availableOnSelfHosted: true,
  //   },
  // },
  // {
  //   title: APP_NAMES.MANUFACTURING,
  //   subtitle: 'Streamline production planning, bills of materials, and manufacturing processes.',
  //   icon: UserX,
  //   apps: [],
  //   url: '/docs/guides/manufacturing/overview',
  //   slug: APP_SHORTNAMES.MANUFACTURING,
  //   status: {
  //     stage: STAGES.GA,
  //     availableOnSelfHosted: true,
  //   },
  // },
]
