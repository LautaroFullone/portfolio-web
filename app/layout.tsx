import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
   subsets: ['latin'],
   variable: '--font-jetbrains',
})

export const metadata: Metadata = {
   title: 'Lautaro Fullone',
   description:
      'Desarrollador Fullstack especializado en React, TypeScript, Node.js y tecnologías web modernas. Construyendo aplicaciones corporativas y productos independientes.',
   icons: {
      icon: '/dev-icon.png',
      apple: '/dev-icon.png',
   },
}

export const viewport: Viewport = {
   themeColor: '#1c1917',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="es"
         className={`${inter.variable} ${jetbrainsMono.variable}`}
         suppressHydrationWarning
      >
         <body className="font-sans antialiased">
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
            <Analytics />
         </body>
      </html>
   )
}
