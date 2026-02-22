'use client'

import { Building2, Rocket } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import DecryptedText from './ui/react-bits/DecryptedText'
import SectionHeader from './shared/section-header'

export function Approach() {
   const { locale, t } = useI18n()

   return (
      <section id="approach" className="px-6 py-28 lg:py-36">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.approach.label[locale]}
               title={t.approach.title[locale]}
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2">
               {/* Corporate */}
               <div className="border border-border bg-card p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                        <Building2 size={20} />
                     </div>
                     <h3 className="text-lg font-semibold text-foreground">
                        {t.approach.corporateTitle[locale]}
                     </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                     {/* {t.approach.corporateDescription[locale]} */}
                     <DecryptedText
                        text={t.approach.corporateDescription[locale]}
                        animateOn="both"
                        speed={50}
                        maxIterations={20}
                        useOriginalCharsOnly
                     />
                  </p>

                  <ul className="mt-6 space-y-3">
                     {t.approach.corporateItems[locale].map((item) => (
                        <li
                           key={item}
                           className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                           <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                           <DecryptedText
                              text={item}
                              animateOn="both"
                              speed={100}
                              maxIterations={25}
                              useOriginalCharsOnly
                           />
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Independent */}
               <div className="border border-border bg-card p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                        <Rocket size={20} />
                     </div>
                     <h3 className="text-lg font-semibold text-foreground">
                        {t.approach.independentTitle[locale]}
                     </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                     {/* {t.approach.independentDescription[locale]} */}
                     <DecryptedText
                        text={t.approach.independentDescription[locale]}
                        animateOn="both"
                        speed={50}
                        maxIterations={20}
                        useOriginalCharsOnly
                     />
                  </p>

                  <ul className="mt-6 space-y-3">
                     {t.approach.independentItems[locale].map((item) => (
                        <li
                           key={item}
                           className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                           <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                           <DecryptedText
                              text={item}
                              animateOn="both"
                              speed={100}
                              maxIterations={25}
                              useOriginalCharsOnly
                           />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* <p className="mt-16 text-center text-lg font-medium text-foreground/80 italic max-w-2xl mx-auto text-balance">
               {t.approach.quote[locale]}
            </p> */}
         </div>
      </section>
   )
}
