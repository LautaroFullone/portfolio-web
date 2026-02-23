'use client'

import { useI18n } from '@/lib/i18n'
import { useEffect, useRef, useState } from 'react'

export const Phrase = () => {
   const { locale } = useI18n()
   const ref = useRef<HTMLElement>(null)
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true)
               observer.disconnect()
            }
         },
         { threshold: 0.2 }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
   }, [])

   return (
      <section ref={ref} className="relative w-full overflow-hidden">
         {/* Subtle grain texture overlay */}
         <div className="pointer-events-none absolute inset-0 " />

         <div className="mx-auto w-full max-w-6xl px-6 py-28 lg:py-44">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-center">
               {/* Left column — identity */}
               {/* <div className="lg:col-span-4"></div> */}

               {/* Right column — quote */}
               <blockquote
                  className={`lg:col-span-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '150ms' }}
               >
                  {/* Opening quote mark */}

                  <span className="font-serif text-5xl leading-none text-primary/60 select-none">
                     &ldquo;
                  </span>
                  <p className="font-sans text-2xl sm:text-3xl lg:text-4xl leading-[1.35] text-background dark:text-accent-foreground mt-1">
                     {locale === 'es' ? (
                        <>
                           Llevo a cabo{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              software de calidad
                           </strong>{' '}
                           con el rigor de un{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              experimentado
                           </strong>{' '}
                           y la{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              curiosidad constante
                           </strong>{' '}
                           de quien nunca dejó de
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              divertirse
                           </strong>{' '}
                           creando
                        </>
                     ) : (
                        <>
                           I create{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              quality software
                           </strong>{' '}
                           with the rigor of an{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              experienced
                           </strong>{' '}
                           and the{' '}
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              constant curiosity
                           </strong>{' '}
                           of someone who never stops
                           <strong className="font-bold text-background dark:text-accent-foreground">
                              having fun
                           </strong>{' '}
                           creating
                        </>
                     )}
                  </p>
               </blockquote>
            </div>
         </div>
      </section>
   )
}
