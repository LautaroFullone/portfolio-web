"use client";

import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { locale, t } = useI18n();
  const items = t.experience.items[locale];

  return (
    <section id="experience" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
          {t.experience.label[locale]}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.experience.title[locale]}
        </h2>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[140px]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {items.map((exp) => (
              <div
                key={exp.role}
                className="relative flex flex-col gap-4 pl-8 md:flex-row md:gap-12 md:pl-0"
              >
                {/* Period */}
                <div className="flex-shrink-0 md:w-[140px] md:text-right pr-3">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {exp.period}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 md:left-[140px] md:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <div className="h-2.5 w-2.5 bg-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 md:pl-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-primary font-mono">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <span className="mt-3 inline-block font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1">
                    {exp.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
