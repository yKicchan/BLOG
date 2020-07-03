import fs from 'fs'
import { Metadata } from '*.mdx'

export async function getAllMetadata(): Promise<Metadata[]> {
  const dir = '/src/pages/posts/'
  const files = fs.readdirSync(process.cwd() + dir).reverse()
  const mdxDocs = Promise.all(
    files.map((file) => import('~/pages/posts/' + file))
  )
  const metadataList = (await mdxDocs).map((mdx, i) => ({
    ...mdx.metadata,
    path: `/posts/${subExt(files[i])}`,
  }))
  return metadataList
}

function subExt(file: string) {
  return file.substring(0, file.indexOf('.') || file.length)
}
