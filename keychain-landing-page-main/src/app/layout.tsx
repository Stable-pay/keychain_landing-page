import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keychain - a simple web3 money transfer app',
  description: 'A simple web3 money transfer app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favico.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}
