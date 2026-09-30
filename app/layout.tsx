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
       <Script
  src="https://api.chatmate360.com/embed/v1/embed.js"
  data-chatbot-id="6808717b-8fd1-479c-baaa-83675b1f9c36"
  data-widget-base="https://chatmate360.com"
  data-primary-color="#769656"
  data-bg-color="#ffffff"
  data-text-color="#1f2937"
  strategy="lazyOnload"
/>
      </body>
    </html>
  )
}
