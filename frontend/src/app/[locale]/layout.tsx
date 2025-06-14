import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ERMSchools, help with every kids",
  description: "ERMSchools site that aims to support and donate for kids",
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  let selectedLocale = !hasLocale(routing.locales, locale) ? routing.defaultLocale : locale;

  setRequestLocale(selectedLocale);
  return (
    <html lang={ selectedLocale }>
      <body className={ `${geistSans.variable} ${geistMono.variable}` }>
        <NextIntlClientProvider>{ children }</NextIntlClientProvider>
      </body>
    </html>
  )
}
