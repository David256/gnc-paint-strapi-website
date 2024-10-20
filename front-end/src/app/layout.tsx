import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const elMessiri = localFont({
  src: './fonts/ElMessiri.ttf',
  variable: '--font-el-messiri-sans',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'PAINT | G&C - Demo Web App',
  description: 'PAINT Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${elMessiri.variable} antialiased`}>{children}</body>
    </html>
  )
}
