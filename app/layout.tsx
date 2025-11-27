import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minh Hoàng - Frontend Developer | React & Next.js Expert',
  description: 'Senior Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building beautiful, performant web experiences.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Expert',
    'TypeScript',
    'Web Development',
    'UI/UX Developer',
    'JavaScript',
    'Portfolio',
    'Minh Hoàng',
    'Vietnam Developer',
    'React Native',
    'Full Stack Developer'
  ],
  authors: [{ name: 'Đinh Nguyễn Minh Hoàng', url: 'https://github.com/dinhnguyenminhhoang' }],
  creator: 'Minh Hoàng',
  publisher: 'Minh Hoàng',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://minhhoang.dev',
    siteName: 'Minh Hoàng Portfolio',
    title: 'Minh Hoàng - Frontend Developer | React & Next.js Expert',
    description: 'Portfolio showcasing modern web development projects using React, Next.js, and cutting-edge technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minh Hoàng - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minh Hoàng - Frontend Developer',
    description: 'Senior Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://minhhoang.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00f5ff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
