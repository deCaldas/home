/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx'],
  output: 'export',
  basePath: '/home'
}

module.exports = nextConfig
