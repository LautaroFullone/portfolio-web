'use client'

import { useState } from 'react'
import { Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import SectionHeader from './shared/section-header'

export function Contact() {
   const [submitted, setSubmitted] = useState(false)
   const { locale, t } = useI18n()

   return (
      <section id="contact" className="px-6 py-28 lg:py-36">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.contact.label[locale]}
               title={t.contact.title[locale]}
            />

            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
               {t.contact.description[locale]}
            </p>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
               {/* Form */}
               <div>
                  {submitted ? (
                     <div className="border border-primary/30 bg-primary/5 p-8">
                        <p className="text-lg font-semibold text-foreground">
                           {t.contact.sentTitle[locale]}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                           {t.contact.sentDescription[locale]}
                        </p>
                     </div>
                  ) : (
                     <form
                        onSubmit={(e) => {
                           e.preventDefault()
                           setSubmitted(true)
                        }}
                        className="flex flex-col gap-5"
                     >
                        <div>
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
                              className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                              placeholder={t.contact.namePlaceholder[locale]}
                           />
                        </div>
                        <div>
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
                              className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                              placeholder={t.contact.emailPlaceholder[locale]}
                           />
                        </div>
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
                              className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                              placeholder={t.contact.messagePlaceholder[locale]}
                           />
                        </div>
                        <button
                           type="submit"
                           className="inline-flex w-fit items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90"
                        >
                           {t.contact.sendButton[locale]}
                           <Send size={14} />
                        </button>
                     </form>
                  )}
               </div>

               {/* Links */}
               <div className="flex flex-col justify-between gap-8">
                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.emailTitle[locale]}
                     </h3>
                     <a
                        href="mailto:hello@alexmorgan.dev"
                        className="text-foreground hover:text-primary transition-colors"
                     >
                        lautarofullone@gmail.com
                     </a>
                  </div>

                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.socialTitle[locale]}
                     </h3>
                     <div className="flex gap-4">
                        <a
                           href="#"
                           aria-label="GitHub"
                           className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                        >
                           <Github size={18} />
                        </a>
                        <a
                           href="#"
                           aria-label="LinkedIn"
                           className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                        >
                           <Linkedin size={18} />
                        </a>
                        <a
                           href="#"
                           aria-label="X"
                           className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                        >
                           <Twitter size={18} />
                        </a>
                     </div>
                  </div>

                  <div>
                     <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
                        {t.contact.locationTitle[locale]}
                     </h3>
                     <p className="text-muted-foreground text-sm">
                        {t.contact.locationLine1[locale]}
                     </p>
                     <p className="text-muted-foreground text-sm">
                        {t.contact.locationLine2[locale]}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
