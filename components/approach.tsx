"use client"

import { Building2, Rocket } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Approach() {
  const { locale, t } = useI18n()

  return (
    <section id="approach" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          {t.approach.label[locale]}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {t.approach.title[locale]}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Corporate */}
          <div className="border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center bg-secondary text-foreground">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t.approach.corporateTitle[locale]}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.approach.corporateDescription[locale]}
            </p>
            <ul className="mt-6 space-y-3">
              {t.approach.corporateItems[locale].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Independent */}
          <div className="border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center bg-secondary text-foreground">
                <Rocket size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t.approach.independentTitle[locale]}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.approach.independentDescription[locale]}
            </p>
            <ul className="mt-6 space-y-3">
              {t.approach.independentItems[locale].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center text-lg font-medium text-foreground/80 italic max-w-2xl mx-auto text-balance">
          {t.approach.quote[locale]}
        </p>
      </div>
    </section>
  )
}
