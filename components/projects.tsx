'use client'

import ScrollStack, { ScrollStackItem } from './ui/react-bits/ScrollStack'
import SectionHeader from './shared/section-header'
import { useMobile } from '@/hooks/use-mobile'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'

export function Projects() {
   const { locale, t } = useI18n()
   const projects = t.projects.items[locale]
   const isMobile = useMobile()

   return (
      <section id="projects" className="px-6 py-28 lg:py-36">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.projects.label[locale]}
               title={t.projects.title[locale]}
               description={t.projects.description[locale]}
            />

            <div className="mt-16 sm:mt-24 lg:mt-32">
               <ScrollStack
                  useWindowScroll //para usar o scroll del navegador
                  itemDistance={isMobile ? 20 : 40} //distancia entre cards antes de hacer stack
                  itemStackDistance={20} //distancia entre cars al hacer stack
                  baseScale={isMobile ? 0.8 : 0.95} //la scala del primer item que hace stack
                  itemScale={isMobile ? 0.08 : 0.02} //la scala incremental de cada card que hace stack
                  rotationAmount={isMobile ? 0 : 0.9} //la rotacion incremental de cada card que hace stack
               >
                  {projects.map((project, idx) => (
                     <ScrollStackItem key={idx} itemClassName="w-full">
                        <article className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50">
                           <div className="flex flex-col lg:flex-row">
                              <div className="relative w-full lg:w-1/2 aspect-16/10 lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                                 <Image
                                    src="image-placeholder.svg"
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                 />
                                 <div className="absolute inset-0 bg-background/20" />
                              </div>

                              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                                 <div className="mb-2 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                                       {project.title}
                                    </h3>
                                    <ArrowUpRight
                                       size={24}
                                       className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                 </div>
                                 <span className="font-mono text-xs text-primary tracking-wider">
                                    {project.label}
                                 </span>
                                 <p className="mt-4 text-muted-foreground leading-relaxed">
                                    {project.description}
                                 </p>
                              </div>
                           </div>
                        </article>
                     </ScrollStackItem>
                  ))}
               </ScrollStack>
            </div>
         </div>
      </section>
   )
}
