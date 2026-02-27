'use client'

import { ArrowDown, Github, Linkedin, Download, ChevronDown } from 'lucide-react'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import TextType from './ui/react-bits/TextType'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'
import { useMobile } from '@/hooks/use-mobile'
import meImage from '@/assets/images/me-cool.webp'

export function Hero() {
   const { locale, t } = useI18n()

   return (
      <section className="bg-accent relative flex min-h-screen w-full flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden">
         <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 lg:mb-0">
            {/* Text Content */}
            <div className="flex flex-col items-start z-10 w-full lg:col-span-8">
               <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                     {t.hero.available[locale]}
                  </span>
               </div>

               <h1 className="sr-only">Lautaro Fullone</h1>
               <TextType
                  as="h2"
                  text="Lautaro Fullone"
                  startOnVisible
                  loop={false}
                  showCursor
                  typingSpeed={50}
                  pauseDuration={8000}
                  cursorCharacter="|"
                  cursorClassName="font-normal"
                  deletingSpeed={50}
                  cursorBlinkDuration={0.6}
                  className="font-sans text-7xl font-bold tracking-tight text-foreground lg:text-8xl text-balance"
               />

               <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
                  {t.hero.role[locale]}
               </p>

               <p
                  className="font-mono mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
               >
                  {t.hero.subtitle[locale]}
               </p>

               <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 sm:gap-4 w-full sm:w-auto">
                  <div className="flex w-full sm:w-auto flex-row items-center justify-center sm:justify-start gap-4">
                     <a
                        href="#projects"
                        className="inline-flex flex-1 sm:flex-none items-center justify-center bg-foreground text-background px-4 sm:px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90 whitespace-nowrap"
                     >
                        {t.hero.viewProjects[locale]}
                     </a>

                     <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer inline-flex flex-1 sm:flex-none items-center justify-center border border-border bg-transparent px-4 sm:px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary gap-2 outline-none whitespace-nowrap">
                           <Download size={16} />
                           {t.hero.downloadCV[locale]}
                           <ChevronDown size={14} className="opacity-50" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="center" className="w-[150px]">
                           <DropdownMenuItem asChild>
                              <a
                                 href="/cv/CV 2026 Español.pdf"
                                 download
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="cursor-pointer w-full"
                              >
                                 Español
                              </a>
                           </DropdownMenuItem>

                           <DropdownMenuItem asChild>
                              <a
                                 href="/cv/CV 2026 English.pdf"
                                 download
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="cursor-pointer w-full"
                              >
                                 English
                              </a>
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>

                  <div className="flex items-center justify-center gap-4 sm:ml-2">
                     <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                     >
                        <Github size={20} />
                     </a>

                     <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                     >
                        <Linkedin size={20} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center lg:justify-end w-full lg:col-span-4">
               {/* Glow effect behind the image for a more premium look */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

               <div className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px]">
                  <Image
                     src={meImage}
                     alt="Lautaro Fullone"
                     fill
                     className="object-cover rounded-full drop-shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:-rotate-1 "
                     priority
                  />
               </div>
            </div>
         </div>

         <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a
               href="#approach"
               aria-label={t.hero.scrollAriaLabel[locale]}
               className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
               <span className="text-xs font-mono tracking-widest uppercase">
                  {t.hero.scroll[locale]}
               </span>
               <ArrowDown size={16} className="animate-bounce" />
            </a>
         </div>
      </section>
   )
}
