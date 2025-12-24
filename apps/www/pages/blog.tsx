import fs from 'fs'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { generateRss } from '~/lib/rss'
import { getSortedPosts } from '~/lib/posts'

import type { PostTypes, BlogView } from '~/types'
import DefaultLayout from '~/components/layouts/Default'
import BlogGridItem from '~/components/layouts/Blog/BlogGridItem'
import BlogListItem from '~/components/layouts/Blog/BlogListItem'
import BlogFilters from '~/components/layouts/Blog/BlogFilters'
import FeaturedThumb from '~/components/layouts/Blog/FeaturedThumb'
import { cn } from 'ui'
import { isBrowser } from '~/lib/helpers'

function Blog(props: any) {
  const localView = isBrowser ? (localStorage?.getItem('paybill-blog-view') as BlogView) : undefined
  const [blogs, setBlogs] = useState(props.blogs)
  const [view, setView] = useState<BlogView>(localView ?? 'list')
  const isList = view === 'list'

  const meta_title = 'Paybill Blog: the Database and Api Development platform'
  const meta_description = 'Get all your Paybill News on the Paybill blog.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/blog`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            href: `/rss.xml`,
          },
        ]}
      />
      <DefaultLayout>
        <h1 className="sr-only">Paybill blog</h1>
        <div className="md:container mx-auto py-4 lg:py-10 px-4 sm:px-12 xl:px-16">
          {props.blogs
            ?.slice(0, 1)
            .map((blog: any, i: number) => <FeaturedThumb key={i} {...blog} />)}
        </div>

        <div className="border-default border-t">
          <div className="md:container mx-auto mt-6 lg:mt-8 px-6 sm:px-16 xl:px-20">
            <BlogFilters
              allPosts={props.blogs ?? []}
              setPosts={setBlogs}
              view={view as BlogView}
              setView={setView}
            />

            <ol
              className={cn(
                'grid -mx-2 sm:-mx-4 py-6 lg:py-6 lg:pb-20',
                isList ? 'grid-cols-1' : 'grid-cols-12 lg:gap-4'
              )}
            >
              {blogs?.length ? (
                blogs?.map((blog: PostTypes, idx: number) =>
                  isList ? (
                    <div className="col-span-12 px-2 sm:px-4 [&_a]:last:border-none" key={idx}>
                      <BlogListItem post={blog} />
                    </div>
                  ) : (
                    <div
                      className="col-span-12 mb-4 md:col-span-12 lg:col-span-6 xl:col-span-4 h-full"
                      key={idx}
                    >
                      <BlogGridItem post={blog} />
                    </div>
                  )
                )
              ) : (
                <p className="text-sm text-light col-span-full">No results</p>
              )}
            </ol>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts({
    directory: '_blog',
    runner: '** BLOG PAGE **',
  })
  console.log('All blog posts data:', allPostsData)
  if (!allPostsData || allPostsData.length === 0) {
    return {
      props: {
        blogs: allPostsData,
      },
    }
  }

  const rss = generateRss(allPostsData)

  // create a rss feed in public directory
  // rss feed is added via <Head> component in render return
  fs.writeFileSync('./public/rss.xml', rss)

  // generate a series of rss feeds for each author (for PlanetPG)
  const planetPgPosts = allPostsData.filter((post: any) => post.tags?.includes('planetpg'))
  const planetPgAuthors = planetPgPosts.map((post: any) => post.author.split(','))
  const uniquePlanetPgAuthors = new Set([].concat(...planetPgAuthors))

  uniquePlanetPgAuthors.forEach((author) => {
    const authorPosts = planetPgPosts.filter((post: any) => post.author.includes(author))
    if (authorPosts.length > 0) {
      const authorRss = generateRss(authorPosts, author)
      fs.writeFileSync(`./public/planetpg-${author}-rss.xml`, authorRss)
    }
  })

  return {
    props: {
      blogs: allPostsData,
    },
  }
}

export default Blog
