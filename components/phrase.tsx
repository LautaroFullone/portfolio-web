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
      <section
         ref={ref}
         className="relative w-full overflow-hidden border-y border-border bg-muted/20"
      >
         {/* Subtle grain texture overlay */}
         <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-50 bg-[url('/noise.webp')]" />

         <div className="mx-auto w-full max-w-4xl px-6 py-28 lg:py-40 relative z-10 flex flex-col justify-center">
            <div
               className={`transition-all duration-1000 flex flex-col gap-6 lg:gap-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
               <p className="font-mono text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.4] text-foreground tracking-tight">
                  {locale === 'es' ? (
                     <>
                        Llevo a cabo{' '}
                        <span className="text-primary font-bold">
                           software de calidad
                        </span>{' '}
                        con el rigor de un experimentado y la curiosidad constante de
                        quien nunca dejó de divertirse creando.
                     </>
                  ) : (
                     <>
                        I build{' '}
                        <span className="text-primary font-bold">quality software</span>{' '}
                        with the rigor of experience and the constant curiosity of someone
                        who never stops having fun creating.
                     </>
                  )}
               </p>

               <div className="w-16 h-px bg-border my-2" />

               <p className="font-mono text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {locale === 'es' ? (
                     <>
                        Si buscás un aliado que se comprometa con la visión estratégica de
                        tu proyecto tanto como vos,{' '}
                        <a
                           href="mailto:lautarofullone@gmail.com"
                           className="text-primary hover:text-primary/80 transition-colors tracking-widest font-bold text-base"
                        >
                           hablemos.
                        </a>
                     </>
                  ) : (
                     <>
                        If you're looking for an ally who is as committed to the strategic
                        vision of your project as you are,{' '}
                        <a
                           href="mailto:lautarofullone@gmail.com"
                           className="text-primary hover:text-primary/80 transition-colors tracking-widest font-bold text-base"
                        >
                           let's talk.
                        </a>
                     </>
                  )}
               </p>
            </div>
         </div>
      </section>
   )
}
