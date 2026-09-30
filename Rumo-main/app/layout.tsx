import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'Rumo | AI-powered sales optimization', template: '%s | Rumo' },
  description: 'Rumo is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <script
  src="http://localhost:4000/embed/v1/embed.js"
  data-chatbot-id="b8f9c9f5-b06e-41fc-a3a3-6781dd84576f"
  data-widget-base="http://localhost:3000"
  data-primary-color="#769656"
  data-bg-color="#ffffff"
  data-text-color="#1f2937"
  defer
></script>
      </body>
    </html>
  )
}
