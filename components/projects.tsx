'use client'

import ScrollStack, { ScrollStackItem } from './ui/react-bits/ScrollStack'
import SectionHeader from './shared/section-header'
import { useMobile } from '@/hooks/use-mobile'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

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

            <div className="mt-16">
               <ScrollStack
                  useWindowScroll
                  itemDistance={isMobile ? 20 : 40}
                  itemStackDistance={20}
                  baseScale={isMobile ? 0.8 : 0.95}
                  itemScale={isMobile ? 0.08 : 0.02}
                  rotationAmount={isMobile ? 0 : 0.9}
               >
                  {projects.map((project, idx) => {
                     const imageSrc =
                        (project as { image?: string | StaticImageData }).image ??
                        '/image-placeholder.svg'

                     return (
                        <ScrollStackItem key={idx}>
                           <div className="flex flex-col md:flex-row bg-accent group border border-border min-h-[300px] md:min-h-[380px]">
                              {/* Image Container — object-contain para ver el mockup completo */}
                              <div className="relative w-full md:w-3/5 lg:w-2/3 aspect-video md:aspect-auto md:min-h-[380px] overflow-hidden">
                                 <Image
                                    src={imageSrc}
                                    onError={(evt) =>
                                       (evt.currentTarget.src = '/image-placeholder.svg')
                                    }
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                                 />
                              </div>

                              {/* Content */}
                              <div className="relative flex flex-col justify-center px-6 md:px-8 w-full md:w-2/5 lg:w-1/3">
                                 {/* Project number - comentado, disponible para reactivar */}
                                 {/* <span className="absolute top-4 right-4 md:top-6 md:right-6 text-6xl md:text-8xl font-bold text-foreground/5 select-none">
                                    {String(idx + 1).padStart(2, '0')}
                                 </span> */}

                                 <div className="relative z-10 py-4 lg:py-6">
                                    <div className="mb-2 flex items-start justify-between gap-4">
                                       <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                                          {project.title}
                                       </h3>
                                       <ArrowUpRight
                                          size={24}
                                          className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                       />
                                    </div>

                                    {/* Label */}
                                    <span className="font-mono text-xs text-primary tracking-wider">
                                       {project.label}
                                    </span>

                                    {/* Description */}
                                    <p className="mt-4 text-muted-foreground leading-relaxed mb-6">
                                       {project.description}
                                    </p>
                                 </div>
                              </div>
                           </div>

                           {/* VERSION ANTERIOR — mantener como referencia
                           <article className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50">
                              <div className="flex flex-col lg:flex-row">
                                 <div className="relative w-full lg:w-1/2 aspect-16/10 lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                                    <Image
                                       src={imageSrc}
                                       onError={(evt) =>
                                          (evt.currentTarget.src = '/image-placeholder.svg')
                                       }
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
                           </article> */}
                        </ScrollStackItem>
                     )
                  })}
               </ScrollStack>
            </div>
         </div>
      </section>
   )
}
