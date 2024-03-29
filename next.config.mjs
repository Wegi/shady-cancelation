import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    images: {domains: ['images.unsplash.com'], formats: ['image/avif', 'image/webp'],},
}

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
    },
})

export default withMDX(nextConfig)
