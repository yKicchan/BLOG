/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
