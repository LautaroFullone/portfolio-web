'use client'

import { useI18n } from '@/lib/i18n'
import SectionHeader from './shared/section-header'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { BlurIn } from '@/components/ui/react-bits/BlurIn'

export function Experience() {
   const { locale, t } = useI18n()
   const items = t.experience.items[locale]
   const containerRef = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start center', 'end center'],
   })

   // Transformamos el progreso (0-1) en un porcentaje de altura (0%-100%)
   // para que la línea crezca en altura real desde arriba hacia abajo
   const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

   return (
      <section id="experience" className="px-6 py-28 lg:py-36 bg-muted">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.experience.label[locale]}
               title={t.experience.title[locale]}
            />

            <div className="mt-16 relative" ref={containerRef}>
               {/* Timeline line (inactive) */}
               <div
                  className="timeline-line-left absolute top-1.5 bottom-0 w-px bg-border"
                  aria-hidden="true"
               />

               {/* Timeline line (active progress) - crece en altura desde arriba */}
               <motion.div
                  className="timeline-line-left absolute w-px bg-primary"
                  style={{ height: lineHeight }}
                  aria-hidden="true"
               />

               <div className="flex flex-col gap-12">
                  {items.map((exp: any) => (
                     <ExperienceItem key={exp.role} exp={exp} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

function ExperienceItem({ exp }: { exp: any }) {
   const ref = useRef<HTMLDivElement>(null)
   const [isActive, setIsActive] = useState(false)

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start center', 'end center'],
   })

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      // Using a micro-threshold to ensure the line tip perfectly touches the dot
      if (latest > 0.01) {
         setIsActive(true)
      } else {
         setIsActive(false)
      }
   })

   return (
      <div ref={ref} className="relative flex flex-col gap-4 md:flex-row md:gap-12">
         {/* Period text */}
         <div className="timeline-mobile-indent shrink-0 md:w-[140px] md:text-right pr-4">
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
               {exp.period}
            </span>
         </div>

         {/* Dot */}
         <div
            className="timeline-line-left mt-1.5 absolute -translate-x-1/2 z-10 flex flex-col items-center justify-center size-3"
            aria-hidden="true"
         >
            {/* Base inactive dot */}
            <div className="absolute inset-0 rounded-full bg-background border border-border" />

            {/* Active animated dot */}
            <motion.div
               animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                  boxShadow: isActive ? '0 0 12px 2px hsl(var(--primary) / 0.6)' : 'none',
               }}
               initial={{ scale: 0, opacity: 0 }}
               transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
               }}
               className="size-3 rounded-full bg-primary relative z-10"
            />
         </div>

         {/* Content - ml en mobile para separar de la línea, reset en desktop */}
         <div className="timeline-content-indent flex-1">
            <BlurIn delay={0.1}>
               <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
               <p className="mt-1 text-sm text-primary font-mono">{exp.company}</p>
               <p className="mt-3 text-muted-foreground leading-relaxed">
                  {exp.description}
               </p>
            </BlurIn>
         </div>
      </div>
   )
}
