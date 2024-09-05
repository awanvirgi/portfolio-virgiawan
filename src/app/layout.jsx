import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Virgiawan Sanria',
  description: 'My Portofolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#BCDDFC]`}>
        {children}
      </body>
    </html>
  )
}
