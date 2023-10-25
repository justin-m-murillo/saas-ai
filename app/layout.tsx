import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider/ModalProvider'
import ToasterProvider from '@/components/toaster-provider/ToasterProvider'
import { CrispProvider } from '@/components/crisp-provider/CrispProvider'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'Ai SaaS Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
