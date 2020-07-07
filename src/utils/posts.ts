import { Metadata } from '*.mdx'
import glob from 'glob'

export async function getAllMetadata(): Promise<Metadata[]> {
  const pattern = 'src/pages/posts/**/*.mdx'
  const files = glob.sync(pattern)
  const mdxDocs = Promise.all(
    files.map((f) => import('../' + f.substring(f.indexOf('pages'))))
  )
  const metaList = (await mdxDocs).map((mdx, i) => ({
    ...mdx.meta,
    path: toPostPath(files[i]),
  }))
  return metaList
}

function toPostPath(file: string) {
  return subExt(file.substring(file.indexOf('/posts')))
}

function subExt(file: string) {
  return file.substring(0, file.indexOf('.') || file.length)
}
