import type { Metadata } from 'next'
import { Epilogue, Inter } from 'next/font/google'
import './globals.css'

const inter = Epilogue({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convenir Admin',
  description: 'The convenir admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
