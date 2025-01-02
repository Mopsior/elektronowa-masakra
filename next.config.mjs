import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '*',
              port: '',
              pathname: '/*/**',
              search: '',
            },
          ],
    }
};

const withMDX = createMDX({})
 
export default withMDX(nextConfig)