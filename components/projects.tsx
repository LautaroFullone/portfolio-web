'use client'

import SectionHeader from './shared/section-header'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'

export function Projects() {
   const { locale, t } = useI18n()
   const items = t.projects.items[locale]

   return (
      <section id="projects" className="px-6 py-28 lg:py-36">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.projects.label[locale]}
               title={t.projects.title[locale]}
               description={t.projects.description[locale]}
            />

            <div className="mt-16 grid gap-6">
               {/* Featured project — image left, text right */}
               <article className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50">
                  <div className="flex flex-col lg:flex-row">
                     <div className="relative w-full lg:w-1/2 aspect-16/10 lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                        <Image
                           src="image-placeholder.svg"
                           alt={items[0].title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-105"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-background/20" />
                     </div>

                     <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                        <span className="font-mono text-xs text-primary tracking-wider uppercase">
                           {t.projects.featured[locale]}
                        </span>
                        <div className="mt-3 flex items-start justify-between gap-4">
                           <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                              {items[0].title}
                           </h3>
                           <ArrowUpRight
                              size={24}
                              className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                           />
                        </div>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                           {items[0].description}
                        </p>
                     </div>
                  </div>
               </article>

               {/* Smaller projects — image on top, text below */}
               <div className="grid gap-6 md:grid-cols-3">
                  {items.slice(1).map((project, idx) => (
                     <article
                        key={project.title}
                        className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 flex flex-col"
                     >
                        <div className="relative w-full aspect-16/10 overflow-hidden">
                           <Image
                              src="image-placeholder.svg"
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                           />
                           <div className="absolute inset-0 bg-background/20" />
                        </div>

                        <div className="flex flex-1 flex-col p-6 lg:p-8">
                           <div className="flex items-start justify-between gap-3">
                              <h3 className="text-lg font-semibold text-foreground">
                                 {project.title}
                              </h3>
                              <ArrowUpRight
                                 size={18}
                                 className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                           </div>
                           <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                              {project.description}
                           </p>
                        </div>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
