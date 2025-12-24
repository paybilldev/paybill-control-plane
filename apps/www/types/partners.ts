export type Partner = {
  approved: boolean | null
  call_to_action_link: string | null
  category: string
  contact: number
  created_at: string
  description: string
  developer: string
  docs: string | null
  featured: boolean | null
  id: number
  images: string[] | null
  logo: string
  overview: string
  slug: string
  title: string
  tsv: unknown | null
  type: 'technology' | 'expert'
  video: string | null
  website: string
}
