import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollToTop from './ScrollToTop'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KairTravelAlmaty — Discover Kazakhstan',
  description:
    'Premium adventure travel across Kazakhstan. Explore mountains, canyons, lakes and nomadic culture with KairTravelAlmaty LLP.',
  icons: {
    icon: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
  openGraph: {
    title: 'KairTravelAlmaty — Discover Kazakhstan',
    description: 'Premium adventure travel across Kazakhstan.',
    images: ['/images/nomad-culture.jpg'], 
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#e0f2fe', 
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900`}>
        <ScrollToTop />
        <main className="relative overflow-x-hidden min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}