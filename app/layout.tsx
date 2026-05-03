import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Cost Per User Tracker — Know Who\'s Costing You Money',
  description: 'Monitor API usage and costs attributed to specific users. Identify expensive customers and optimize your pricing tiers. Built for SaaS founders and API-heavy startups.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="beb7d4bb-602c-4294-a682-04ae36c03b54"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
