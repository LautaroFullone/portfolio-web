'use client'

import { I18nProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import dynamic from 'next/dynamic'

// Skeleton genérico para secciones lazy — evita layout shift
const SectionSkeleton = () => (
   <div className="w-full py-24 animate-pulse">
      <div className="mx-auto max-w-5xl px-6 space-y-6">
         <div className="h-4 w-32 rounded bg-muted" />
         <div className="h-8 w-64 rounded bg-muted" />
         <div className="h-4 w-full max-w-xl rounded bg-muted" />
      </div>
   </div>
)

// Secciones below-the-fold — se cargan solo cuando el JS llega al cliente
const Approach = dynamic(
   () => import('@/components/approach').then((m) => ({ default: m.Approach })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Technologies = dynamic(
   () => import('@/components/technologies').then((m) => ({ default: m.Technologies })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Projects = dynamic(
   () => import('@/components/projects').then((m) => ({ default: m.Projects })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Experience = dynamic(
   () => import('@/components/experience').then((m) => ({ default: m.Experience })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Phrase = dynamic(
   () => import('@/components/phrase').then((m) => ({ default: m.Phrase })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Contact = dynamic(
   () => import('@/components/contact').then((m) => ({ default: m.Contact })),
   { ssr: false, loading: () => <SectionSkeleton /> }
)

const Footer = dynamic(
   () => import('@/components/footer').then((m) => ({ default: m.Footer })),
   { ssr: false, loading: () => <div className="h-24" /> }
)

export default function Home() {
   return (
      <I18nProvider>
         <Navbar />
         <main>
            <Hero />
            <Approach />
            <Technologies />
            <Experience />
            <Projects />
            <Phrase />
            <Contact />
         </main>
         <Footer />
      </I18nProvider>
   )
}
