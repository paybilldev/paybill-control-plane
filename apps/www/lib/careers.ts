export interface JobItemProps {
  id: string
  title: string
  location: any
  team: string
  employment: string
  descriptionHtml: string
  jobUrl: string
}

export const groupJobsByTeam = (jobs: JobItemProps[]) => {
  return jobs.reduce(
    (acc, job) => {
      if (!acc[job.team]) {
        acc[job.team] = []
      }
      acc[job.team].push(job)
      return acc
    },
    {} as Record<string, JobItemProps[]>
  )
}
