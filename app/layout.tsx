import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollToTop from './ScrollToTop'

const _inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'KairTravelAlmaty — Discover Kazakhstan',
  description:
    'Premium adventure travel across Kazakhstan. Explore mountains, canyons, lakes and nomadic culture with KairTravelAlmaty LLP.',
  // Убрали generator: 'v0.app', чтобы не было лишних упоминаний ИИ
  icons: {
    icon: [
      {
        // Используем ваш основной логотип как иконку сайта
        url: '/images/logo-icon.png',
        href: '/images/logo-icon.png',
      }
    ],
    apple: '/images/logo-icon.png',
  },
}

export const viewport: Viewport = {
  // Изменили цвет панели браузера на светло-голубой (под ваш новый дизайн)
  themeColor: '#e0f2fe', 
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}