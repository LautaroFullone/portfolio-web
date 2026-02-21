'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { ThemeSwitcher } from '@/components/theme-switcher'

export function Navbar() {
   const [scrolled, setScrolled] = useState(false)
   const [mobileOpen, setMobileOpen] = useState(false)
   const { locale, toggleLocale, t } = useI18n()

   const navLinks = [
      { label: t.nav.approach[locale], href: '#approach' },
      { label: t.nav.technologies[locale], href: '#technologies' },
      { label: t.nav.projects[locale], href: '#projects' },
      { label: t.nav.experience[locale], href: '#experience' },
      { label: t.nav.contact[locale], href: '#contact' },
   ]

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
               ? 'bg-background/80 backdrop-blur-md border-b border-border'
               : 'bg-transparent'
         }`}
      >
         <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a
               href="#"
               className="group flex items-center transition-transform hover:scale-105 active:scale-95"
            >
               <Image
                  src="/dev-icon.png"
                  alt="dev.portfolio"
                  width={44}
                  height={44}
                  className="rounded-lg drop-shadow-sm transition-opacity group-hover:opacity-90"
               />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 ">
               <ul className="flex items-center gap-8">
                  {navLinks.map((link) => (
                     <li key={link.href}>
                        <a
                           href={link.href}
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>

               {/* Controls */}
               <div className="flex items-center gap-2">
                  <button
                     onClick={toggleLocale}
                     className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5 hover:border-primary/50"
                     aria-label={
                        locale === 'es' ? 'Switch to English' : 'Cambiar a Español'
                     }
                  >
                     <Globe size={14} />
                     <span>{locale === 'es' ? 'EN' : 'ES'}</span>
                  </button>
                  <ThemeSwitcher />
               </div>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
               <button
                  onClick={toggleLocale}
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-border px-2.5 py-1.5 hover:border-primary/50"
                  aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
               >
                  <Globe size={14} />
                  <span>{locale === 'es' ? 'EN' : 'ES'}</span>
               </button>
               <ThemeSwitcher />
               <button
                  className="text-foreground"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
               >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>
         </nav>

         {/* Mobile menu */}
         {mobileOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
               <ul className="flex flex-col items-start gap-4 px-6 py-6">
                  {navLinks.map((link) => (
                     <li key={link.href}>
                        <a
                           href={link.href}
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                           onClick={() => setMobileOpen(false)}
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </header>
   )
}
