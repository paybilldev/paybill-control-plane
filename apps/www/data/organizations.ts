export type Organization = {
  billing_email: string | null
  /** @enum {string|null} */
  billing_partner: 'aws_marketplace' | null
  id: number
  is_owner: boolean
  name: string
  opt_in_tags: string[]
  organization_missing_address: boolean
  organization_requires_mfa: boolean
  plan: {
    /** @enum {string} */
    id: 'pro' | 'team' | 'enterprise'
    name: string
  }
  restriction_data: {
    [key: string]: string
  } | null
  /** @enum {string|null} */
  restriction_status: 'grace_period' | 'grace_period_over' | 'restricted' | null
  slug: string
  customer_id: string | null
  subscription_id: string | null
  usage_billing_enabled: boolean
}
