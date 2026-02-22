'use client'

import { useI18n } from '@/lib/i18n'
import LogoLoop from './ui/react-bits/LogoLoop'
import SectionHeader from './shared/section-header'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import bunIcon from '@/assets/icons/bun.svg'
import cloudflareIcon from '@/assets/icons/cloudflare.svg'
import dockerIcon from '@/assets/icons/docker.svg'
import gitIcon from '@/assets/icons/git.svg'
import grafanaIcon from '@/assets/icons/grafana.svg'
import javaIcon from '@/assets/icons/java.svg'
import javascriptIcon from '@/assets/icons/javascript.svg'
import laravelIcon from '@/assets/icons/laravel.svg'
import mercadoPagoIcon from '@/assets/icons/mercado-pago.svg'
import n8nIcon from '@/assets/icons/n8n.svg'
import nestjsIcon from '@/assets/icons/nestjs.svg'
import nextjsIconDark from '@/assets/icons/nextjs_icon_dark.svg'
import nodejsIcon from '@/assets/icons/nodejs.svg'
import postgresqlIcon from '@/assets/icons/postgresql.svg'
import postmanIcon from '@/assets/icons/postman.svg'
import reactqueryIcon from '@/assets/icons/reactquery.svg'
import salesforceIcon from '@/assets/icons/salesforce.svg'
import springIcon from '@/assets/icons/spring.svg'
import supabaseIcon from '@/assets/icons/supabase.svg'
import swaggerIcon from '@/assets/icons/swagger.svg'
import tailwindcssIcon from '@/assets/icons/tailwindcss.svg'
import tanstackIcon from '@/assets/icons/tanstack.svg'
import typescriptIcon from '@/assets/icons/typescript.svg'
import viteIcon from '@/assets/icons/vite.svg'
import githubDark from '@/assets/icons/GitHub_dark.svg'
import githubLight from '@/assets/icons/GitHub_light.svg'
import mongodbDark from '@/assets/icons/MongoDB_dark.svg'
import mongodbLight from '@/assets/icons/MongoDB_light.svg'
import mysqlDark from '@/assets/icons/MySQL_dark.svg'
import mysqlLight from '@/assets/icons/MySQL_light.svg'
import prismaDark from '@/assets/icons/Prisma_dark.svg'
import prismaLight from '@/assets/icons/Prisma_light.svg'
import reactDark from '@/assets/icons/React_dark.svg'
import reactLight from '@/assets/icons/React_light.svg'
import vercelDark from '@/assets/icons/Vercel_dark.svg'
import vercelLight from '@/assets/icons/Vercel_light.svg'

type TechIconProps = {
   name: string
   icon?: any
   lightIcon?: any
   darkIcon?: any
}

const rawTechnologies: TechIconProps[] = [
   { name: 'Bun', icon: bunIcon },
   { name: 'Cloudflare', icon: cloudflareIcon },
   { name: 'Docker', icon: dockerIcon },
   { name: 'Git', icon: gitIcon },
   { name: 'Grafana', icon: grafanaIcon },
   { name: 'Java', icon: javaIcon },
   { name: 'JavaScript', icon: javascriptIcon },
   { name: 'Laravel', icon: laravelIcon },
   { name: 'Mercado Pago', icon: mercadoPagoIcon },
   { name: 'n8n', icon: n8nIcon },
   { name: 'NestJS', icon: nestjsIcon },
   { name: 'Next.js', icon: nextjsIconDark },
   { name: 'Node.js', icon: nodejsIcon },
   { name: 'PostgreSQL', icon: postgresqlIcon },
   { name: 'Postman', icon: postmanIcon },
   { name: 'React Query', icon: reactqueryIcon },
   { name: 'Salesforce', icon: salesforceIcon },
   { name: 'Spring', icon: springIcon },
   { name: 'Supabase', icon: supabaseIcon },
   { name: 'Swagger', icon: swaggerIcon },
   { name: 'Tailwind CSS', icon: tailwindcssIcon },
   { name: 'TanStack', icon: tanstackIcon },
   { name: 'TypeScript', icon: typescriptIcon },
   { name: 'Vite', icon: viteIcon },
   { name: 'GitHub', lightIcon: githubLight, darkIcon: githubDark },
   { name: 'MongoDB', lightIcon: mongodbLight, darkIcon: mongodbDark },
   { name: 'MySQL', lightIcon: mysqlLight, darkIcon: mysqlDark },
   { name: 'Prisma', lightIcon: prismaLight, darkIcon: prismaDark },
   { name: 'React', lightIcon: reactLight, darkIcon: reactDark },
   { name: 'Vercel', lightIcon: vercelLight, darkIcon: vercelDark },
]

const shuffleArray = <T,>(array: T[]): T[] => {
   const newArray = [...array]
   for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
   }
   return newArray
}

export function Technologies() {
   const { locale, t } = useI18n()
   const [shuffledTechs, setShuffledTechs] = useState<TechIconProps[]>(rawTechnologies)
   const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      setShuffledTechs(shuffleArray(rawTechnologies))
   }, [])

   const techLogos = shuffledTechs.map((tech) => ({
      node: (
         <div
            key={tech.name}
            className="group flex flex-col items-center justify-center gap-3 border border-border bg-card h-32 w-32 rounded-xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(217,119,87,0.15)] hover:scale-105"
         >
            <div className="text-muted-foreground transition-colors duration-300 group-hover:text-primary relative h-10 w-10 flex items-center justify-center">
               {tech.icon && (
                  <Image
                     src={tech.icon}
                     alt={tech.name}
                     className="w-10 h-10 object-contain"
                  />
               )}
               {tech.lightIcon && tech.darkIcon && mounted && (
                  <Image
                     src={resolvedTheme === 'dark' ? tech.darkIcon : tech.lightIcon}
                     alt={tech.name}
                     className="w-10 h-10 object-contain"
                  />
               )}
            </div>
            <span className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground text-center">
               {tech.name}
            </span>
         </div>
      ),
      title: tech.name,
   }))

   const half = Math.ceil(techLogos.length / 2)
   const techLogos1 = techLogos.slice(0, half)
   const techLogos2 = techLogos.slice(half)

   return (
      <section id="technologies" className="bg-muted px-6 py-28 lg:py-36 overflow-hidden">
         <div className="mx-auto max-w-6xl">
            <SectionHeader
               label={t.technologies.label[locale]}
               title={t.technologies.title[locale]}
               description={t.technologies.description[locale]}
            />

            <div className="mt-16 flex flex-col w-screen relative left-1/2 -ml-[50vw]">
               <LogoLoop
                  logos={techLogos1}
                  direction="left"
                  speed={40}
                  pauseOnHover={true}
                  className="p-3"
               />
               <LogoLoop
                  logos={techLogos2}
                  direction="right"
                  speed={40}
                  pauseOnHover={true}
                  className="p-3"
               />
            </div>
         </div>
      </section>
   )
}
