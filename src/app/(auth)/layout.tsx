import '../styles/globals.scss'

export const metadata = {
  title: 'Auth',
  description: 'Great place to shopping',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
