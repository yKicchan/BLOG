/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypePrism],
  },
})

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})
