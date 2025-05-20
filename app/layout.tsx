import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tetris',
  description: 'Created with v0',
  generator: 'v0.dev',
   icons: {
    icon: '/Tetris icon.jpg', // path to your favicon file
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
