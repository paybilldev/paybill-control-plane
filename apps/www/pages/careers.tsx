import { GlobeAltIcon } from '@heroicons/react/outline'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { cn, Badge, Button, buttonVariants, Separator } from 'ui'
import { z } from 'zod'
import Styles from '~/styles/career.module.css'

import DefaultLayout from '~/components/layouts/Default'
import { SectionContainer } from 'ui'

import job_data from '~/data/json/jobs.json' assert { type: 'json' }
import career from '~/data/json/career.json'
import { groupJobsByTeam, JobItemProps } from '~/lib/careers'

const ContributorSchema = z.object({
  login: z.string(),
  avatar_url: z.string(),
  html_url: z.string(),
})

type Contributor = z.infer<typeof ContributorSchema>

export const getServerSideProps: GetServerSideProps = (async ({ res }) => {
  // refresh every 5 minutes
  res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=300')

  const jobs = groupJobsByTeam(job_data)

  const contributorResponse = await fetch(
    'https://api.github.com/repos/paybilldev/paybill/contributors?per_page=100'
  )
  let contributorArray: Contributor[] = []
  try {
    const contributorResponseData = await contributorResponse.json()
    // if the response is not in the expected format, throw an error and return an empty array
    contributorArray = ContributorSchema.array().parse(contributorResponseData)
  } catch {}

  const contributor_data = contributorArray.map((contributor) => {
    return {
      login: contributor.login,
      avatar_url: contributor.avatar_url,
      html_url: contributor.html_url,
    }
  })

  const contributors = await contributor_data.filter((contributor) =>
    career.contributors.includes(contributor.login)
  )

  // Pass data to the page via props
  return { props: { jobs, contributors } }
}) satisfies GetServerSideProps<CareersPageProps>

interface CareersPageProps {
  jobs: Record<string, JobItemProps[]>
  contributors: { login: string; avatar_url: string; html_url: string }[]
}

const CareerPage = ({ jobs, contributors }: CareersPageProps) => {
  const meta_title = 'Careers | Paybill'
  const meta_description = 'Help build software developers love'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/careers`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />
      <DefaultLayout>
        <header className="container relative mx-auto px-6 pt-12 pb-8 lg:pt-24 lg:px-16 xl:px-20 text-center space-y-4">
          <h1 className="text-sm text-brand md:text-base">
            <span className="sr-only">Paybill </span>Careers
          </h1>
          <h2 className="text-3xl md:text-4xl xl:text-5xl lg:max-w-2xl xl:max-w-3xl lg:mx-auto tracking-[-1px]">
            Contributors building Paybill
          </h2>
          <p className="text-sm md:text-base text-foreground-lighter max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            We're building a community of communities, bringing together developers from many
            different backgrounds, as well as new developers looking to get involved.
          </p>
          <Button asChild type="primary" className="mt-4">
            <Link href="#positions">Open positions</Link>
          </Button>
          <div className="w-[1080px] h-[370px] mx-auto sm:mt-10 md:mt-16 lg:mt-28 2xl:mt-60">
            {contributors.map((contributor, i) => {
              return (
                <div
                  className={`${
                    Styles[`contributors-${i}`]
                  } absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-[1.5px] border-default z-10
                          transition-all hover:scale-105 drop-shadow-sm hover:drop-shadow-md
                        `}
                  key={i}
                >
                  <Link href={contributor.html_url} target="_blank">
                    <div className="relative w-full h-full">
                      <Image
                        src={contributor.avatar_url}
                        alt={`${contributor.login} github avatar`}
                        fill
                        sizes="(min-width: 767px) 45vw, 100vw"
                        placeholder="blur"
                        blurDataURL="/images/blur.png"
                        className="rounded-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
            <div
              className={`${Styles['contributors-bg-circle']} w-[100%] lg:w-[80%] left-[0%] lg:left-[10%] -bottom-[30%] xs:-bottom-[36%] sm:-bottom-[52%] md:-bottom-[64%] lg:-bottom-[80%] xl:-bottom-[100%]`}
            >
              <div className="flex flex-col justify-between h-full bg-alternative rounded-full p-4"></div>
            </div>
            <div
              className={`${Styles['contributors-bg-circle']} w-[80%] lg:w-[60%] left-[10%] lg:left-[20%] -bottom-[25%] xs:-bottom-[30%] sm:-bottom-[44%] md:-bottom-[54%] lg:-bottom-[60%] xl:-bottom-[75%]`}
            >
              <div className="flex flex-col justify-between h-full bg-alternative rounded-full p-4"></div>
            </div>
            <div
              className={`${Styles['contributors-bg-circle']} w-[60%] lg:w-[40%] left-[20%] lg:left-[30%] -bottom-[20%] xs:-bottom-[25%] sm:-bottom-[38%] md:-bottom-[44%] lg:-bottom-[40%] xl:-bottom-[50%]`}
            >
              <div className="flex flex-col justify-between h-full bg-alternative rounded-full p-4"></div>
            </div>
            <div
              className={`${Styles['contributors-bg-circle']} w-[40%] lg:w-[20%] left-[30%] lg:left-[40%] -bottom-[15%] xs:-bottom-[19%] sm:-bottom-[30%] md:-bottom-[34%] lg:-bottom-[20%] xl:-bottom-[25%]`}
            >
              <div className="flex flex-col justify-between h-full bg-alternative rounded-full p-4"></div>
            </div>
          </div>
        </header>

        <SectionContainer>
          <div className="xl:flex lg:items-start xl:gap-10 justify-between">
            <div className="xl:min-w-[300px] xl:max-w-[400px]">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl max-w-[280px] sm:max-w-xs xl:max-w-none tracking-[-1px]">
                Great people deserve great benefits
              </h2>
            </div>
            <div className="mt-12 xl:mt-0 space-y-6 lg:space-y-0 sm:w-fit sm:mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
              {career.benefits.map((benefits, i) => {
                return (
                  <div className="h-full flex items-start space-x-6 w-full" key={i}>
                    <div className="h-fit text-sm lg:text-base">
                      <h3 className="text-base">{benefits.title}</h3>
                      <ReactMarkdown className="prose pt-1 text-sm">{benefits.text}</ReactMarkdown>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionContainer>

        <Separator />

        <div id="positions" className="max-w-6xl mx-auto">
          <SectionContainer>
            <h2 className="text-xl sm:text-3xl xl:text-3xl tracking-[-1px] mb-3">Open positions</h2>
            <p className="max-w-xl text-foreground-lighter">
              Want to build the best developer platform?
              <br /> We’d love to talk to you.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              {Object.entries(jobs).map(([team, teamJobs]) => (
                <div key={team}>
                  <h3 className="text-foreground-lighter text-sm">{team}</h3>
                  <div className="mt-2 -space-y-px">
                    {teamJobs.map((job) => (
                      <JobItem job={job} key={job.id} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8 mt-4 border-t border-muted flex flex-col lg:flex-row justify-between items-start lg:items-end gap-2">
              <div>
                <h3>Don't see a role that fits?</h3>
                <p className="text-foreground-lighter text-sm">
                  Join our talent community to stay updated on future opportunities.
                </p>
              </div>
              <Button asChild type="primary">
                <Link href="https://discord.gg/v9rYchap" target="_blank">
                  Join community
                </Link>
              </Button>
            </div>
          </SectionContainer>
        </div>
      </DefaultLayout>
    </>
  )
}

const JobItem = ({ job }: { job: JobItemProps }) => {
  return (
    <Link
      href={job.jobUrl}
      className="
        first-of-type:rounded-t-md last-of-type:rounded-b-md
        cursor-pointer md:cursor-default bg-surface-75 border border-muted drop-shadow-sm p-4
        flex flex-col md:flex-row
        md:items-center
        transition hover:bg-surface-100
        hover:cursor-pointer
      "
      target="_blank"
    >
      <h4 className="text-base min-w-[240px] lg:min-w-[316px] flex-grow sm:truncate mr-6">
        {job.title}
      </h4>
      <div className="flex justify-between justify-[normal] pt-2 md:pt-0 lg:w-1/3 items-center">
        <div className="flex items-center gap-4">
          <Badge>
            <GlobeAltIcon className="w-3 h-3" />
            <span className="ml-1">{job.location}</span>
          </Badge>
          <span className="hidden md:block">{job.employment}</span>
        </div>
        <div className={cn(buttonVariants({ type: 'default', size: 'tiny' }), 'rounded-full')}>
          Apply for position
        </div>
      </div>
    </Link>
  )
}

export default CareerPage
