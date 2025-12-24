import { NextSeo } from 'next-seo'
import DefaultLayout from '~/components/layouts/Default'
import { SectionContainer } from 'ui'
import RequestADemoForm from '~/components/forms/RequestADemoForm'
import { Quote, TabQuotes } from 'ui'

const data = {
  meta_title: 'Contact Sales & Request a Demo | Paybill',
  meta_description: 'Book a demo to explore how Paybill can support your business growth',
}

const ContactSales = () => {
  return (
    <>
      <NextSeo
        title={data.meta_title}
        description={data.meta_description}
        openGraph={{
          title: data.meta_title,
          description: data.meta_description,
          url: `/contact/sales`,
        }}
      />
      <DefaultLayout className="!min-h-fit">
        <SectionContainer className="text grid gap-8 lg:gap-12 md:grid-cols-2">
          <div className="md:px-4 lg:pb-8 md:h-full w-full flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2 md:max-w-md">
              <h1 className="h1 !m-0">Talk to our Sales team</h1>
              <p className="md:text-lg text-foreground-lighter">
                Book a demo and set up a trial Enterprise account to see how Paybill's scalable
                features can accelerate your business growth and app development.
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
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default ContactSales
