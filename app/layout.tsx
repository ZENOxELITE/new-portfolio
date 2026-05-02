import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Muneer Ahmed — Python Developer',
//   description: 'Full-stack Python developer building web applications, data tools, and scalable systems.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

export const metadata = {
  verification: {
    google: 'IE1caZCLuJaY86l5AGhExDu85ch_2rB1b0GXOltlcGk',
  },
  title: 'Muneer Ahmed — Python Developer',
  description: 'Full-stack Python developer building web applications, data tools, and scalable systems.',
  icons: {
    icon: '/favicon.png',        // shows in browser tab
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Muneer Ahmed — Python Developer',
    description: 'Full-stack Python developer building web applications, data tools, and scalable systems.',
    url: 'https://buildwithmuner.online',
    images: [
      {
        url: '/og.png',    // shows on Google search & social shares
        width: 1200,
        height: 630,
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
