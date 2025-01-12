import { Roboto } from 'next/font/google'
import '../styles/globals.scss'
import Header from '@/Header'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Asyshop',
  description: 'Great place to shopping',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
