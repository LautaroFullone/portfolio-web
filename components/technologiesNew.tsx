'use client'

import { useI18n } from '@/lib/i18n'
import LogoLoop from './ui/react-bits/LogoLoop'

const technologies = [
   {
      name: 'React',
      icon: (
         <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            <ellipse
               cx="12"
               cy="12"
               rx="10"
               ry="4"
               stroke="currentColor"
               strokeWidth="1.5"
               fill="none"
            />
            <ellipse
               cx="12"
               cy="12"
               rx="10"
               ry="4"
               stroke="currentColor"
               strokeWidth="1.5"
               fill="none"
               transform="rotate(60 12 12)"
            />
            <ellipse
               cx="12"
               cy="12"
               rx="10"
               ry="4"
               stroke="currentColor"
               strokeWidth="1.5"
               fill="none"
               transform="rotate(120 12 12)"
            />
         </svg>
      ),
   },
   {
      name: 'TypeScript',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <rect
               x="2"
               y="2"
               width="20"
               height="20"
               rx="2"
               fill="currentColor"
               opacity="0.15"
            />
            <text
               x="12"
               y="17"
               textAnchor="middle"
               fontSize="12"
               fontWeight="bold"
               fill="currentColor"
            >
               TS
            </text>
         </svg>
      ),
   },
   {
      name: 'Node.js',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
               d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <text
               x="12"
               y="15"
               textAnchor="middle"
               fontSize="7"
               fontWeight="bold"
               fill="currentColor"
            >
               N
            </text>
         </svg>
      ),
   },
   {
      name: 'PostgreSQL',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <ellipse
               cx="12"
               cy="8"
               rx="8"
               ry="4"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M4 8v8c0 2.2 3.6 4 8 4s8-1.8 8-4V8"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
            />
         </svg>
      ),
   },
   {
      name: 'Prisma',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
               d="M12 2L4 20h16L12 2z"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinejoin="round"
            />
         </svg>
      ),
   },
   {
      name: 'Tailwind CSS',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
               d="M6 12c1.3-4 3.7-6 7-6 5 0 5.5 3.5 8 4.5-1.5 2-3.3 2.5-5.5 1.5C13.8 11.2 12 12 6 12zm-4 6c1.3-4 3.7-6 7-6 5 0 5.5 3.5 8 4.5-1.5 2-3.3 2.5-5.5 1.5C9.8 17.2 8 18 2 18z"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
         </svg>
      ),
   },
   {
      name: 'Next.js',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <circle
               cx="12"
               cy="12"
               r="10"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <text
               x="12"
               y="16"
               textAnchor="middle"
               fontSize="8"
               fontWeight="bold"
               fill="currentColor"
            >
               N
            </text>
         </svg>
      ),
   },
   {
      name: 'Docker',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <rect
               x="3"
               y="10"
               width="18"
               height="10"
               rx="2"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <rect x="6" y="6" width="3" height="4" fill="currentColor" opacity="0.3" />
            <rect x="10.5" y="6" width="3" height="4" fill="currentColor" opacity="0.3" />
            <rect x="15" y="6" width="3" height="4" fill="currentColor" opacity="0.3" />
         </svg>
      ),
   },
   {
      name: 'VPS',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <polygon
               points="12,3 21,8 21,16 12,21 3,16 3,8"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
         </svg>
      ),
   },
   {
      name: 'Storybook',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <rect
               x="4"
               y="4"
               width="16"
               height="16"
               rx="3"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M8 12h8M12 8v8"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
            />
         </svg>
      ),
   },
   {
      name: 'Git',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <circle
               cx="7"
               cy="7"
               r="2.5"
               fill="currentColor"
               opacity="0.3"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <circle
               cx="17"
               cy="17"
               r="2.5"
               fill="currentColor"
               opacity="0.3"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <circle
               cx="17"
               cy="7"
               r="2.5"
               fill="currentColor"
               opacity="0.3"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M7 9.5V15a2 2 0 002 2h6M17 9.5V9.5"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
            />
         </svg>
      ),
   },
   {
      name: 'MongoDB',
      icon: (
         <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
            <path
               d="M2 16l10 4 10-4"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M2 12l10 4 10-4"
               fill="none"
               stroke="currentColor"
               strokeWidth="1.5"
            />
            <path
               d="M2 8l10 4 10-4-10-4L2 8z"
               fill="currentColor"
               opacity="0.15"
               stroke="currentColor"
               strokeWidth="1.5"
            />
         </svg>
      ),
   },
]

export function TechnologiesNew() {
   const { locale, t } = useI18n()

   const techLogos = technologies.map((tech) => ({
      node: (
         <div className="group flex flex-col items-center justify-center gap-3 border border-border bg-card h-32 w-32 rounded-xl transition-all duration-300 hover:border-primary/50 hover:bg-secondary">
            <div className="text-muted-foreground transition-colors duration-300 group-hover:text-primary">
               {tech.icon}
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
            <p className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
               {t.technologies.label[locale]}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
               {t.technologies.title[locale]}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
               {t.technologies.description[locale]}
            </p>

            <div className="mt-16 flex flex-col gap-8 w-screen relative left-1/2 -ml-[50vw]">
               <LogoLoop
                  logos={techLogos1}
                  direction="left"
                  speed={40}
                  gap={32}
                  logoHeight={128}
                  pauseOnHover={true}
               />
               <LogoLoop
                  logos={techLogos2}
                  direction="right"
                  speed={40}
                  gap={32}
                  logoHeight={128}
                  pauseOnHover={true}
               />
            </div>
         </div>
      </section>
   )
}
