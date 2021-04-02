import glob from 'glob'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pattern = join(process.cwd(), 'posts/**/*.md')
const files = glob.sync(pattern)

export function getAllPosts(): Post[] {
  const posts = files.map((file) => {
    const id = file
      .substring(file.indexOf('posts/'))
      .replace('posts/', '')
      .replace(/\//g, '-')
      .replace(/\.md$/, '')
    return getPost(id)
  })
  return posts.reverse()
}

export function getPost(id: string): Post {
  const filePath = id.replace(/-/g, '/')
  const path = join(process.cwd(), 'posts', `${filePath}.md`)
  const contents = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(contents)
  return {
    meta: { ...data, id } as Meta,
    body: content,
  }
}
