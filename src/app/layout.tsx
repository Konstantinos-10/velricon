import type { Metadata } from 'next'
import { Montserrat, Alegreya, Karla } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { siteConfig } from '@/config/site'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap',
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['fractional CFO', 'financial leadership', 'startup finance', 'scaleup finance'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${alegreya.variable} ${karla.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics />
        ) : (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}

