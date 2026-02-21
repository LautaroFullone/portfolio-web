import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

import localFont from 'next/font/local'

const workSans = localFont({
   src: '../assets/WorkSans-VariableFont_wght.ttf',
   variable: '--font-work-sans',
   display: 'swap',
})

const jetbrainsMono = localFont({
   src: '../assets/JetBrainsMono-Medium.woff2',
   variable: '--font-jetbrains',
   weight: '500',
   style: 'normal',
   display: 'swap',
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
         className={`${workSans.variable} ${jetbrainsMono.variable}`}
         suppressHydrationWarning
      >
         <body className="font-mono antialiased">
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
