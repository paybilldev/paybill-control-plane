import { SectionContainer } from 'ui'
import CTABanner from '~/components/layouts/CTABanner'
import Layout from '~/components/layouts/Default'
import { useSendTelemetryEvent } from 'common'

const TIA = () => {
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <>
      <Layout>
        <SectionContainer>
          <div className="mx-auto grid max-w-2xl grid-cols-12 rounded-lg">
            <div className="col-span-12 flex items-center lg:col-span-12">
              <div className="prose flex flex-col space-y-8 pb-16">
                <h1 className="text-center text-5xl">Transfer Impact Assessment</h1>
                <p>
                  We have a long-standing commitment to customer privacy and data protection. As
                  part of this commitment, we have prepared a Transfer Impact Assessment ("TIA").
                  You can review a static PDF version of our latest TIA document{' '}
                  <a
                    href="/docs/TIA+260101.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-link hover:underline"
                    onClick={() =>
                      sendTelemetryEvent({
                        action: 'tia_pdf_opened',
                        properties: { source: 'www' },
                      })
                    }
                  >
                    here
                  </a>
                  .
                </p>

                <p>
                  To make the TIA legally binding, you need to sign and complete the details through
                  a PandaDoc document that we prepare. To get this version of the TIA,{' '}
                  <a
                    href="/dashboard/org/_/documents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-link hover:underline"
                  >
                    request it from the legal documents page
                  </a>{' '}
                  of your Paybill dashboard.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
        <CTABanner />
      </Layout>
    </>
  )
}
export default TIA
