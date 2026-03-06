import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

import localFont from 'next/font/local'
import ClickSpark from '@/components/ui/react-bits/ClickSpark'

const workSans = localFont({
   src: '../assets/fonts/WorkSans-VariableFont_wght.ttf',
   variable: '--font-work-sans',
   display: 'swap',
})

const jetbrainsMono = localFont({
   src: '../assets/fonts/JetBrainsMono-Medium.woff2',
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
   themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#1c1917' },
      { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
   ],
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
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <ClickSpark
                  sparkColor="#d97757"
                  sparkSize={20}
                  sparkRadius={15}
                  sparkCount={10}
                  duration={400}
               >
                  {children}
               </ClickSpark>
            </ThemeProvider>
            <Analytics />
         </body>
      </html>
   )
}
