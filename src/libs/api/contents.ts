import { client } from '~/libs/client'
import { MicroCMSQueries } from 'microcms-js-sdk'

const endpoint = 'posts' as const

const contents = {
  list: (queries?: MicroCMSQueries) =>
    client.get<ListResponse>({
      endpoint,
      queries: {
        fields: [
          'id',
          'publishedAt',
          'revisedAt',
          'title',
          'excerpt',
          'tags.id',
          'tags.name',
        ],
        ...queries,
      },
    }),
  get: (contentId: Content['id'], queries?: MicroCMSQueries) =>
    client.get<GetResponse>({
      endpoint,
      contentId,
      queries: {
        fields: [
          'id',
          'publishedAt',
          'revisedAt',
          'title',
          'excerpt',
          'body',
          'tags.id',
          'tags.name',
        ],
        ...queries,
      },
    }),
}
export default contents

export type Meta = Pick<
  Content,
  'id' | 'publishedAt' | 'revisedAt' | 'title' | 'excerpt'
> & {
  tags: Pick<Tag, 'id' | 'name'>[]
}

interface ListResponse extends PostsResponse {
  content: Meta[]
}

export type GetResponse = Pick<
  Content,
  'id' | 'publishedAt' | 'revisedAt' | 'title' | 'excerpt' | 'body'
> & {
  tags: Pick<Tag, 'id' | 'name'>[]
}

export type Post = GetResponse
