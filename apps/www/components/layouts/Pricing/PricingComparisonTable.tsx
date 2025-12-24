import Link from 'next/link'
import { useState } from 'react'

import { plans } from 'data/plans'
import { pricing } from 'data/pricing'
import {
  cn,
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ui'
import { PricingTableRowDesktop, PricingTableRowMobile } from './PricingTableRow'
import { useSendTelemetryEvent } from 'common'
import { Organization } from '~/data/organizations'
import UpgradePlan from './UpgradePlan'

const MobileHeader = ({
  description,
  priceDescription,
  price,
  plan,
  showDollarSign = true,
  from = false,
  organizations,
  hasExistingOrganizations,
}: {
  description: string
  priceDescription: string
  price: string
  plan: string
  showDollarSign?: boolean
  from?: boolean
  organizations?: Organization[]
  hasExistingOrganizations?: boolean
}) => {
  const selectedPlan = plans.find((p) => p.name === plan)!
  const isUpgradablePlan = selectedPlan.name === 'Pro' || selectedPlan.name === 'Team'
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <div className="mt-8 px-4 mobile-header">
      <h2 className="text-foreground text-3xl font-medium uppercase font-mono">{plan}</h2>
      <div className="flex items-baseline gap-2">
        {from && <span className="text-foreground text-base">From</span>}
        {showDollarSign ? (
          <span className="h1 font-mono">
            {plan !== 'Enterprise' ? '$' : ''}
            {price}
          </span>
        ) : (
          <span className="text-foreground-light">{price}</span>
        )}

        <p className="p">{priceDescription}</p>
      </div>
      <p className="p">{description}</p>
      {isUpgradablePlan && hasExistingOrganizations ? (
        <UpgradePlan
          organizations={organizations}
          onClick={() =>
            sendTelemetryEvent({
              action: 'www_pricing_plan_cta_clicked',
              properties: {
                plan,
                showUpgradeText: true,
                section: 'comparison_table',
                tableMode: 'mobile',
              },
            })
          }
          size="medium"
          planId={selectedPlan.planId}
        />
      ) : (
        <Button asChild size="medium" type={plan === 'Enterprise' ? 'default' : 'primary'} block>
          <Link
            href={selectedPlan.href}
            onClick={() =>
              sendTelemetryEvent({
                action: 'www_pricing_plan_cta_clicked',
                properties: {
                  plan,
                  showUpgradeText: false,
                  section: 'comparison_table',
                  tableMode: 'mobile',
                },
              })
            }
          >
            {selectedPlan.cta}
          </Link>
        </Button>
      )}
    </div>
  )
}

interface PricingComparisonTableProps {
  organizations?: Organization[]
  hasExistingOrganizations?: boolean
}

const PricingComparisonTable = ({
  organizations,
  hasExistingOrganizations,
}: PricingComparisonTableProps) => {
  const [activeMobilePlan, setActiveMobilePlan] = useState('Pro')
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <div
      id="compare-plans"
      className="sm:pb-18 container relative mx-auto px-4 pb-16 md:pb-16 lg:px-16 xl:px-20"
    >
      {/* <!-- xs to lg --> */}
      <div className="lg:hidden">
        <div className="bg-background p-2 sticky top-14 z-10 pt-4">
          <div className="bg-surface-100 rounded-lg border py-2 px-4 flex justify-between items-center">
            <label className="text-foreground-lighter">Change plan</label>
            <Select onValueChange={setActiveMobilePlan} defaultValue={activeMobilePlan}>
              <SelectTrigger className="min-w-[120px]" size="medium">
                <SelectValue placeholder="Change plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="Team">Team</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {activeMobilePlan === 'Pro' && (
          <>
            <MobileHeader
              plan="Pro"
              from={false}
              price={'25'}
              priceDescription={'/month + additional use'}
              description={'Everything you need to scale your project into production'}
            />
            <PricingTableRowMobile
              category={pricing.dashboard}
              plan={'pro'}
              icon={pricing.dashboard.icon}
            />
            <PricingTableRowMobile
              category={pricing.security}
              plan={'pro'}
              icon={pricing.security.icon}
            />
            <PricingTableRowMobile
              category={pricing.support}
              plan={'pro'}
              icon={pricing.support.icon}
            />
          </>
        )}

        {activeMobilePlan === 'Team' && (
          <>
            <MobileHeader
              plan="Team"
              from={false}
              price={'599'}
              priceDescription={'/month + additional use'}
              description={'Collaborate with different permissions and access patterns'}
            />
            <PricingTableRowMobile
              category={pricing.dashboard}
              plan={'team'}
              icon={pricing.dashboard.icon}
            />
            <PricingTableRowMobile
              category={pricing.security}
              plan={'team'}
              icon={pricing.security.icon}
            />
            <PricingTableRowMobile
              category={pricing.support}
              plan={'team'}
              icon={pricing.support.icon}
            />
          </>
        )}

        {activeMobilePlan === 'Enterprise' && (
          <>
            <MobileHeader
              plan="Enterprise"
              price={'Contact us for a quote'}
              priceDescription={''}
              description={'Designated support team, account manager and technical specialist'}
              showDollarSign={false}
            />
            <PricingTableRowMobile
              category={pricing.dashboard}
              plan={'enterprise'}
              icon={pricing.dashboard.icon}
            />
            <PricingTableRowMobile
              category={pricing.security}
              plan={'enterprise'}
              icon={pricing.security.icon}
            />
            <PricingTableRowMobile
              category={pricing.support}
              plan={'enterprise'}
              icon={pricing.support.icon}
            />
          </>
        )}
      </div>

      {/* <!-- lg+ --> */}
      <div className="hidden lg:block">
        <table className="h-px w-full table-fixed">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead className="bg-background sticky top-[62px] z-10">
            <tr>
              <th
                className="text-foreground w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
                scope="col"
              >
                <span className="sr-only">Feature by</span>
                <span
                  className="h-0.25 absolute bottom-0 left-0 w-full"
                  style={{ height: '1px' }}
                />
              </th>

              {plans.map((plan) => {
                const isUpgradablePlan = plan.name === 'Pro' || plan.name === 'Team'

                return (
                  <th
                    className="text-foreground w-1/4 px-0 text-left text-sm font-normal"
                    scope="col"
                    key={plan.name}
                  >
                    <span className="flex flex-col px-6 pr-2 pt-2 gap-1.5">
                      <span className="flex flex-col xl:flex-row xl:items-end gap-1">
                        <h3 className="text-lg xl:text-xl 2xl:text-2xl leading-5 uppercase font-mono font-normal flex items-center">
                          {plan.name}
                        </h3>
                        <p
                          className={cn(
                            'text-foreground-lighter -my-1 xl:m-0',
                            plan.name === 'Enterprise' && 'xl:opacity-0'
                          )}
                        >
                          <span
                            className="text-foreground-lighter font-mono text-xl mr-1 tracking-tighter"
                            translate="no"
                          >
                            {plan.name !== 'Enterprise' && '$'}
                            {plan.priceMonthly}
                          </span>
                          {['Pro', 'Team'].includes(plan.name) && (
                            <span className="text-[13px] leading-4 mt-1">{plan.costUnit}</span>
                          )}
                        </p>
                      </span>
                      <span className="flex flex-col justify-between h-full pb-2">
                        {isUpgradablePlan && hasExistingOrganizations ? (
                          <UpgradePlan
                            organizations={organizations}
                            onClick={() =>
                              sendTelemetryEvent({
                                action: 'www_pricing_plan_cta_clicked',
                                properties: {
                                  plan: plan.name,
                                  showUpgradeText: true,
                                  section: 'comparison_table',
                                  tableMode: 'desktop',
                                },
                              })
                            }
                            size="tiny"
                            planId={plan.planId}
                          />
                        ) : (
                          <Button
                            asChild
                            size="tiny"
                            type={plan.name === 'Enterprise' ? 'default' : 'primary'}
                            block
                          >
                            <Link
                              href={plan.href}
                              onClick={() =>
                                sendTelemetryEvent({
                                  action: 'www_pricing_plan_cta_clicked',
                                  properties: {
                                    plan: plan.name,
                                    showUpgradeText: false,
                                    section: 'comparison_table',
                                    tableMode: 'desktop',
                                  },
                                })
                              }
                            >
                              {plan.cta}
                            </Link>
                          </Button>
                        )}
                      </span>
                    </span>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="border-default divide-border divide-y first:divide-y-0">
            <PricingTableRowDesktop
              category={pricing.dashboard}
              icon={pricing.dashboard.icon}
              sectionId="dashboard"
            />
            <PricingTableRowDesktop
              category={pricing.security}
              icon={pricing.security.icon}
              sectionId="security"
            />
            <PricingTableRowDesktop
              category={pricing.support}
              icon={pricing.support.icon}
              sectionId="support"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PricingComparisonTable
