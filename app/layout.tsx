import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Agency',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
