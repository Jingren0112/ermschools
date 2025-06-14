import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isGithubPages ? '/ermschools' : '',
    assetPrefix: isGithubPages ? '/ermschools' : ''
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)