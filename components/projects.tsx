'use client'

import ScrollStack, { ScrollStackItem } from './ui/react-bits/ScrollStack'
import SectionHeader from './shared/section-header'
import type { StaticImageData } from 'next/image'
import { useMobile } from '@/hooks/use-mobile'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'

export function Projects() {
   const { locale, t } = useI18n()
   const projects = t.projects.items[locale]
   const isMobile = useMobile()

   return (
      <section id="projects" className="px-6 py-28 lg:py-36 bg-muted">
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
                  blurAmount={2}
               >
                  {projects.map((project, idx) => {
                     const imageSrc =
                        (project as { image?: string | StaticImageData }).image ??
                        '/image-placeholder.svg'
                     const url = (project as { url?: string }).url

                     return (
                        <ScrollStackItem key={idx}>
                           <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col md:flex-row group border border-border min-h-[300px] md:min-h-[380px] cursor-pointer bg-background"
                           >
                              {/* Image Container */}
                              <div
                                 className="relative w-full md:w-3/5 lg:w-2/3 md:aspect-auto md:min-h-[380px] overflow-hidden"
                                 style={isMobile ? { aspectRatio: '16/9' } : {}}
                              >
                                 <Image
                                    src={imageSrc}
                                    onError={(evt) =>
                                       (evt.currentTarget.src = '/image-placeholder.svg')
                                    }
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                                 />
                              </div>

                              {/* Content */}
                              <div className="relative flex flex-col justify-center px-6 md:px-8 w-full md:w-2/5 lg:w-1/3">
                                 <div className="relative z-10 py-6 lg:py-6">
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
                           </a>
                        </ScrollStackItem>
                     )
                  })}
               </ScrollStack>
            </div>
         </div>
      </section>
   )
}
