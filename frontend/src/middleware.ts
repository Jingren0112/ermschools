
import { routing } from '@/i18n/routing'
import createMiddleware from 'next-intl/middleware'

// This middleware handles locale redirection based on the request headers.
export const supportedLocales = ['en-us', 'zh-cn']
export type SupportedLocale = (typeof supportedLocales)[number]

export default createMiddleware(routing)
export const config = {
    matcher: [
        // Match all paths except for the ones that start with _next, api, and static
        '/((?!_next|api|static|favicon.ico|robots.txt).*)',
    ],
}