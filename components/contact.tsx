'use client'

import { Send, Github, Linkedin, MapPin, Globe, Mail, Copy } from 'lucide-react'
import SpotlightCard from './ui/react-bits/SpotlightCard'
import SectionHeader from './shared/section-header'
import { useI18n } from '@/lib/i18n'
import { useState } from 'react'

export function Contact() {
   const [submitted, setSubmitted] = useState(false)
   const { locale, t } = useI18n()

   return (
      <section id="contact" className="px-6 py-28 lg:py-36 bg-muted">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.contact.label[locale]}
               title={t.contact.title[locale]}
               description={t.contact.description[locale]}
            />

            <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
               {/* Columna Izquierda: Info */}
               <SpotlightCard
                  className="lg:col-span-2 flex flex-col justify-between gap-8 shadow-sm order-2 lg:order-1 h-fit"
                  spotlightColor="rgba(255, 255, 255, 0.1)"
               >
                  {/* Subtle glow effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.emailTitle[locale]}
                     </h3>
                     <span className="text-base sm:text-lg font-semibold text-foreground inline-block break-all">
                        lautarofullone.dev@gmail.com
                     </span>
                     {/* copy to clipboard button */}
                     <button
                        onClick={() => {
                           navigator.clipboard.writeText('lautarofullone.dev@gmail.com')
                        }}
                        className="ml-3 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                     >
                        <Copy size={16} />
                     </button>
                  </div>

                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.socialTitle[locale]}
                     </h3>
                     <div className="flex gap-4">
                        <a
                           href="https://github.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="GitHub"
                           className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-foreground hover:text-background"
                        >
                           <Github size={20} />
                        </a>
                        <a
                           href="https://linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="LinkedIn"
                           className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-foreground hover:text-background"
                        >
                           <Linkedin size={20} />
                        </a>
                        <a
                           href="mailto:lautarofullone.dev@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Email"
                           className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-foreground hover:text-background"
                        >
                           <Mail size={20} />
                        </a>
                     </div>
                  </div>

                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.locationTitle[locale]}
                     </h3>
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-foreground font-medium text-base">
                           <MapPin size={18} className="text-primary shrink-0" />
                           <span>Mar del Plata, Argentina </span>
                        </div>

                        <div className="flex items-start gap-2 text-muted-foreground text-sm">
                           <Globe size={18} className="text-primary shrink-0 mt-0.5" />
                           <span>{t.contact.locationLine2[locale]}</span>
                        </div>
                     </div>
                  </div>
               </SpotlightCard>

               {/* Columna Derecha: Formulario */}
               <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col justify-center">
                  {submitted ? (
                     <div className="border border-primary/30 bg-primary/5 p-8 text-center lg:text-left">
                        <p className="text-xl font-semibold text-foreground">
                           {t.contact.sentTitle[locale]}
                        </p>
                        <p className="mt-3 text-muted-foreground">
                           {t.contact.sentDescription[locale]}
                        </p>
                     </div>
                  ) : (
                     <form
                        onSubmit={(e) => {
                           e.preventDefault()
                           setSubmitted(true)
                        }}
                        className="flex flex-col gap-6"
                     >
                        {/* Fila 1: Nombre | Empresa */}
                        <div className="flex flex-col sm:flex-row gap-6">
                           <div className="flex-1">
                              <label
                                 htmlFor="name"
                                 className="block font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2"
                              >
                                 {t.contact.nameLabel[locale]}
                              </label>
                              <input
                                 id="name"
                                 type="text"
                                 required
                                 className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                                 placeholder={t.contact.namePlaceholder[locale]}
                              />
                           </div>
                           <div className="flex-1">
                              <label
                                 htmlFor="company"
                                 className="block font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2"
                              >
                                 {t.contact.companyLabel[locale]}
                              </label>
                              <input
                                 id="company"
                                 type="text"
                                 className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                                 placeholder={t.contact.companyPlaceholder[locale]}
                              />
                           </div>
                        </div>

                        {/* Fila 2: Email | Asunto */}
                        <div className="flex flex-col sm:flex-row gap-6">
                           <div className="flex-1">
                              <label
                                 htmlFor="email"
                                 className="block font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2"
                              >
                                 {t.contact.emailLabel[locale]}
                              </label>
                              <input
                                 id="email"
                                 type="email"
                                 required
                                 className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                                 placeholder={t.contact.emailPlaceholder[locale]}
                              />
                           </div>
                           <div className="flex-1">
                              <label
                                 htmlFor="subject"
                                 className="block font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2"
                              >
                                 {t.contact.subjectLabel[locale]}
                              </label>
                              <input
                                 id="subject"
                                 type="text"
                                 required
                                 className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                                 placeholder={t.contact.subjectPlaceholder[locale]}
                              />
                           </div>
                        </div>

                        {/* Fila 3: Mensaje */}
                        <div>
                           <label
                              htmlFor="message"
                              className="block font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2"
                           >
                              {t.contact.messageLabel[locale]}
                           </label>
                           <textarea
                              id="message"
                              required
                              rows={5}
                              className="w-full border border-border bg-transparent px-4 py-4 mt-2 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                              placeholder={t.contact.messagePlaceholder[locale]}
                           />
                        </div>

                        <button
                           type="submit"
                           className="cursor-pointer inline-flex w-full sm:w-fit items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-semibold transition-transform hover:scale-[1.02] hover:bg-foreground/90 mt-4"
                        >
                           {t.contact.sendButton[locale]}
                           <Send size={16} />
                        </button>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}
