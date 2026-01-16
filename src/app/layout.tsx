import type { Metadata } from 'next'
import { Montserrat, Karla, Alegreya } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'antd/dist/reset.css'
import './globals.css'
import ConditionalLayout from '@/components/layout/ConditionalLayout'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { siteConfig } from '@/config/site'

// Headers: Montserrat (light weight preferred, 300)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Body: Karla (regular, 400)
const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-karla',
  display: 'swap',
})

// Accent: Alegreya (used sparingly for emphasis)
const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-alegreya',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['fractional CFO', 'financial leadership', 'startup finance', 'scaleup finance'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${karla.variable} ${alegreya.variable}`}>
      <body className="font-body antialiased">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
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

