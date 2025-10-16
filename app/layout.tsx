import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['700', '800', '900']
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Get Your $100 Crumbl Gift Card - Free Survey',
  description: 'Complete a quick survey and offers to receive a $100 Crumbl Cookies gift card. Limited time offer!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} font-body`}>{children}</body>
    </html>
  )
}
