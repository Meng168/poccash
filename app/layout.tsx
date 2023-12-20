import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly'
import { avenir, cerebri } from './fonts/fonts'
import { meta } from '@/metadata'
import { BASE_URL } from '@/url-endpoint'
import { Viewport } from 'next'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6DB33F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://poccash.vercel.app'),
  title: {
    template: `${meta.title} | %s`,
    default: 'Poccash'
  },
  description: '',
  generator: 'Mengdev',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Meng Information',
  keywords: ["cash", "money", "poccash"],
  authors: [{ name: 'Meng' }, { name: 'Meng', url: 'https://web.facebook.com/sin.meng.372' }],
  colorScheme: 'dark',
  creator: 'Meng',
  publisher: 'Mengdev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'cash',
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: BASE_URL,
    siteName: meta.title,
    images: [
      {
        url: meta.image1,
        width: 500,
        height: 500,
        alt: 'Profile',
      },
      {
        url: meta.image2,
        width: 500,
        height: 500,
        alt: 'Meng',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image1,
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': '/en-US'
    },
  },
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${avenir.variable} ${cerebri.variable} scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100`}>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  )
}
