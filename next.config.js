/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypePrism],
  },
})
const withPWA = require('next-pwa')

module.exports = withPWA(
  withMDX({
    pageExtensions: ['tsx', 'mdx'],
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    pwa: {
      dest: 'public',
    },
  })
)
