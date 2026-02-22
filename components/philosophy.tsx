'use client'

import { Compass, RefreshCcw, Layers, MessageCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import SectionHeader from './shared/section-header'

const icons = [Compass, RefreshCcw, Layers, MessageCircle]

export function Philosophy() {
   const { locale, t } = useI18n()
   const items = t.philosophy.items[locale]

   return (
      <section className="px-6 py-28 lg:py-36 bg-muted">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.philosophy.label[locale]}
               title={t.philosophy.title[locale]}
            />

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
               {items.map((principle, idx) => {
                  const Icon = icons[idx]
                  return (
                     <div key={principle.title} className="flex gap-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                           <Icon size={20} />
                        </div>
                        <div>
                           <h3 className="text-base font-semibold text-card-foreground">
                              {principle.title}
                           </h3>
                           <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              {principle.description}
                           </p>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
