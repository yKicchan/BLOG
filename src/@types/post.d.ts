declare interface Post {
  meta: Meta
  body: string
}

declare interface Meta {
  id: string
  title: string
  excerpt: string
  createdAt: string
  updatedAt?: string
  tags: string[]
}
