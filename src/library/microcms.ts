//SDK利用準備
import type { MicroCMSQueries } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

//型定義
export type Article = {
  id: string
  publishedAt: string
  title: string
  overview: string
  content: string
  eyecatch: {
    url: string
    width: number
    height: number
  }
  category: {
    id: string
    name: string
  }
  tags: [
    {
      id: string
      name: string
    },
  ]
}
export type ArticlesResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Article[]
}

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticlesResponse>({
    endpoint: 'articles',
    queries: {
      ...queries,
      filters: 'category[equals]zd8afe9dx2y',
    },
  })
}
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Article>({
    endpoint: 'articles',
    contentId,
    queries,
  })
}

export const getNewsPosts = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticlesResponse>({
    endpoint: 'articles',
    queries: {
      ...queries,
      filters: 'category[equals]3609pxbtcrr7',
    },
  })
}

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Article>({
    endpoint: 'articles',
    contentId,
    queries,
  })
}
