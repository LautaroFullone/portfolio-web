'use client'

import { I18nProvider } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Approach } from '@/components/approach'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
// import { Philosophy } from '@/components/philosophy'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Phrase } from '@/components/phrase'

export default function Home() {
   return (
      <I18nProvider>
         <Navbar />
         <main>
            <Hero />
            <Approach />
            <Technologies />
            <Projects />
            <Experience />
            {/* <Philosophy /> */}
            <Phrase />
            <Contact />
         </main>
         <Footer />
      </I18nProvider>
   )
}
