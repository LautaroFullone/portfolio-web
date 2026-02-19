"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { locale, t } = useI18n()

  return (
    <section className="bg-accent relative flex min-h-screen flex-col items-start justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            {t.hero.available[locale]}
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
          Lautaro Fullone
        </h1>

        <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
          {t.hero.role[locale]}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subtitle[locale]}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90"
          >
            {t.hero.viewProjects[locale]}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {t.hero.contact[locale]}
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#approach"
          aria-label={t.hero.scrollAriaLabel[locale]}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            {t.hero.scroll[locale]}
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
