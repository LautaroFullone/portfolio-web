"use client"

import { Compass, RefreshCcw, Layers, MessageCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const icons = [Compass, RefreshCcw, Layers, MessageCircle]

export function Philosophy() {
  const { locale, t } = useI18n()
  const items = t.philosophy.items[locale]

  return (
    <section className="px-6 py-28 lg:py-36 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
          {t.philosophy.label[locale]}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
          {t.philosophy.title[locale]}
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {items.map((principle, idx) => {
            const Icon = icons[idx]
            return (
              <div key={principle.title} className="flex gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-secondary text-accent">
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
