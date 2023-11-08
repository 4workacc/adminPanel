import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  )
}
