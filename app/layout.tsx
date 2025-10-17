import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Klau & Ros - Endless Academy | Learn Bachata Online',
  description: '24/7 Online Bachata classes from fundamentals to advanced, taught by the famous couple Klau & Ros. Flexible learning at your own pace.',
  keywords: 'Klau & Ros, bachata, dance, online classes, dance academy, bachata lessons, endless academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  )
}

