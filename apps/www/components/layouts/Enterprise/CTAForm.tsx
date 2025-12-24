import React, { FC } from 'react'

import RequestADemoForm from '../../forms/RequestADemoForm'
import { Quote, SectionContainer, TabQuotes } from 'ui'

interface Props {}

const UseCases: FC<Props> = (props) => {
  return (
    <SectionContainer className="text grid gap-8 lg:gap-12 md:grid-cols-2">
      <div className="lg:pb-8 md:h-full w-full flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2 md:max-w-md">
          <h1 className="h1 !m-0">Request a demo</h1>
          <p className="md:text-lg text-foreground-lighter">
            We can take your requirements and show you how Paybill can help you achieve your goals.
          </p>
        </div>
        <TabQuotes
          className="hidden md:flex"
          tabs={[
            {
              label: (
                <img
                  src="/images/integration/woocommerce.svg"
                  alt="woocommerce"
                  title="WooCommerce"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="WooCommerce and Paybill work hand-in-hand to simplify your online store payments and automate your sales processes."
                  author="WooCommerce"
                />
              ),
            },
            {
              label: (
                <img
                  src="/images/integration/shopify.svg"
                  alt="shopify"
                  title="Shopify"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="Integrating Shopify with Paybill allows you to manage orders, payments, and customer data seamlessly in one place."
                  author="Shopify"
                />
              ),
            },
            {
              label: (
                <img
                  src="/images/integration/quickbooks.svg"
                  alt="quickbooks"
                  title="QuickBooks"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="QuickBooks integration with Paybill gives you effortless accounting and real-time financial insights across your business."
                  author="QuickBooks"
                />
              ),
            },
            {
              label: (
                <img
                  src="/images/integration/xero.svg"
                  alt="xero"
                  title="Xero"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="Xero and Paybill together streamline your bookkeeping, invoicing, and payment reconciliations with ease."
                  author="Xero"
                />
              ),
            },
            {
              label: (
                <img
                  src="/images/integration/sap.svg"
                  alt="sap"
                  title="SAP"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="Paybill's integration with SAP enables enterprise-grade financial operations with reliable automation and reporting."
                  author="SAP"
                />
              ),
            },
            {
              label: (
                <img
                  src="/images/integration/magento.svg"
                  alt="magento"
                  title="Magento"
                  className="h-12 w-12 object-contain"
                />
              ),
              panel: (
                <Quote
                  quote="Magento and Paybill make scaling your e-commerce platform effortless, with smooth payment and order management."
                  author="Magento"
                />
              ),
            },
          ]}
        />
      </div>
      <RequestADemoForm />
      <TabQuotes
        className="hidden md:flex"
        tabs={[
          {
            label: (
              <img
                src="/images/integration/woocommerce.svg"
                alt="woocommerce"
                title="WooCommerce"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="WooCommerce and Paybill work hand-in-hand to simplify your online store payments and automate your sales processes."
                author="WooCommerce"
              />
            ),
          },
          {
            label: (
              <img
                src="/images/integration/shopify.svg"
                alt="shopify"
                title="Shopify"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="Integrating Shopify with Paybill allows you to manage orders, payments, and customer data seamlessly in one place."
                author="Shopify"
              />
            ),
          },
          {
            label: (
              <img
                src="/images/integration/quickbooks.svg"
                alt="quickbooks"
                title="QuickBooks"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="QuickBooks integration with Paybill gives you effortless accounting and real-time financial insights across your business."
                author="QuickBooks"
              />
            ),
          },
          {
            label: (
              <img
                src="/images/integration/xero.svg"
                alt="xero"
                title="Xero"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="Xero and Paybill together streamline your bookkeeping, invoicing, and payment reconciliations with ease."
                author="Xero"
              />
            ),
          },
          {
            label: (
              <img
                src="/images/integration/sap.svg"
                alt="sap"
                title="SAP"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="Paybill's integration with SAP enables enterprise-grade financial operations with reliable automation and reporting."
                author="SAP"
              />
            ),
          },
          {
            label: (
              <img
                src="/images/integration/magento.svg"
                alt="magento"
                title="Magento"
                className="h-12 w-12 object-contain"
              />
            ),
            panel: (
              <Quote
                quote="Magento and Paybill make scaling your e-commerce platform effortless, with smooth payment and order management."
                author="Magento"
              />
            ),
          },
        ]}
      />
    </SectionContainer>
  )
}

export default UseCases
