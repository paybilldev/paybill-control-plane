export type CustomerStoryType = {
  type: 'Customer Story'
  title: string
  description: string
  organization: string
  imgUrl: string
  logo: string
  logo_inverse?: string
  url: string
  ctaText?: string
  path?: string
  postMeta?: {
    name: string
    avatarUrl: string
    publishDate: string
    readLength: number
  }
}

export const data: CustomerStoryType[] = []

export default data
