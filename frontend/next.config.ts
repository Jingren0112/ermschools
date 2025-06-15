import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
    output: isGithubPages ? 'export' : undefined,
    basePath: isGithubPages ? '/ermschools' : '',
    assetPrefix: isGithubPages ? '/ermschools' : '',
    images: {
        unoptimized: true
    }
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)