import './globals.css'

export const metadata = {
  title: 'Premium Next.js App',
  description: 'Generated with a stunning design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
