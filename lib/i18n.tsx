'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'es' | 'en'

const dictionary = {
   nav: {
      approach: { es: 'Enfoque', en: 'Approach' },
      technologies: { es: 'Tecnologías', en: 'Technologies' },
      projects: { es: 'Proyectos', en: 'Projects' },
      experience: { es: 'Experiencia', en: 'Experience' },
      contact: { es: 'Contacto', en: 'Contact' },
   },
   hero: {
      role: { es: 'Desarrollador Web', en: 'Web Developer' },
      subtitle: {
         es: 'Transformo ideas en productos digitales que funcionan. Disfruto uniendo la solidez del mundo corporativo con la libertad de crear desde cero.',
         en: 'I turn ideas into functional digital products. I enjoy combining the stability of the corporate world with the freedom of creating from scratch.',
      },
      available: {
         es: 'Disponible para trabajar',
         en: 'Available for work',
      },
      viewProjects: { es: 'Ver Proyectos', en: 'View Projects' },
      contact: { es: 'Contacto', en: 'Contact' },
      scroll: { es: 'Bajar', en: 'Scroll' },
      scrollAriaLabel: {
         es: 'Desplazarse a la sección de enfoque',
         en: 'Scroll to approach section',
      },
   },
   approach: {
      label: { es: 'Dos Mundos, Una Mentalidad', en: 'Approach' },
      title: { es: 'Cómo Trabajo', en: 'Two Worlds, One Mindset' },
      corporateTitle: {
         es: 'Trayectoria Corporativa',
         en: 'Corporate Trajectory',
      },
      corporateDescription: {
         es: 'Trabajo liderando desarrollos en entornos de alta exigencia y a gran escala. No solo escribo código; guío equipos para asegurar que cada despliegue sea robusto y escalable.',
         // es: 'Trabajo liderando desarrollos en entornos de alta exigencia y a gran escala, donde la arquitectura sólida, el código limpio y los despliegues robustos no se negocian. No solo escribo código, guío a otros desarrolladores y aseguro el correcto funcionamiento.',
         en: 'Leading critical systems with solid architecture, clean code, and robust deployments. Not just writing code, guiding other developers, and ensuring the product scales.',
      },
      corporateItems: {
         es: [
            'Liderazgo técnico y mentoría',
            'Colaboración en grandes equipos',
            'Integración y despliegue continuo',
         ],
         en: [],
      },
      independentTitle: {
         es: 'Proyectos Independientes',
         en: 'Independent Projects',
      },
      independentDescription: {
         // es: 'Apasionado por construir productos de cero a uno. Asumiendo la responsabilidad completa del stack, desde la arquitectura del sistema hasta el despliegue y la experiencia de usuario. Tratando cada proyecto personal con el mismo rigor que el software de producción.',
         es: 'Me apasiona llevar ideas desde el papel hasta el servidor. Me involucro en todo el ciclo: diseño, infraestructura y negocio, tratando cada proyecto con el rigor de un producto real.',
         // es: 'Llevo ideas desde el papel hasta el servidor. Me involucro con el negocio y analizo todo su ciclo de vida, diseño la solución, levanto la infraestructura y conecto los servicios necesarios. Trato cada proyecto con la misma seriedad que un software de producción a gran escala.',
         en: 'Passionate about building products from zero to one. Owning the full stack, from system architecture to deployment and user experience. Treating every side project with the same rigor as production-level software.',
      },
      independentItems: {
         es: [
            'Visión de producto de punta a punta',
            'Desarrollo ágil y entregas rápidas',
            'Foco total en la experiencia del usuario',
         ],
         en: [
            'Full ownership from idea to launch',
            'Architecture & system design',
            'Product vision & user empathy',
            'Rapid iteration & shipping',
         ],
      },
      quote: {
         es: '\u201CProgramar es un desafío constante donde siempre encuentro la forma de divertirme.\u201D',
         en: '\u201CI apply corporate standards and product thinking to every project I build.\u201D',
      },
   },
   technologies: {
      label: { es: 'Stack', en: 'Stack' },
      title: { es: 'Tecnologías', en: 'Technologies' },
      description: {
         es: 'Herramientas y frameworks que uso a diario para entregar software confiable y de alto rendimiento.',
         en: 'Tools and frameworks I use daily to ship reliable, performant software.',
      },
   },
   projects: {
      label: { es: 'Trabajo', en: 'Work' },
      title: { es: 'Proyectos Seleccionados', en: 'Selected Projects' },
      description: {
         es: 'Una selección de proyectos que demuestran mi enfoque para resolver problemas reales con código limpio y mantenible.',
         en: 'A selection of projects that demonstrate my approach to solving real-world problems with clean, maintainable code.',
      },
      featured: { es: 'Proyecto Destacado', en: 'Featured Project' },
      items: {
         es: [
            {
               title: 'Silk',
               description:
                  'Plataforma SPA para marca personal de estilismo y asesoría de imagen. Incluye venta de productos digitales y servicios, panel de administración, gestión de contenido (blog con editor enriquecido), integración de pagos y captación estratégica de leads.',
            },
            {
               title: 'Aquazul',
               description:
                  'Sistema de gestión para lavandería industrial con múltiples roles (Admin, Operario y Cliente). Permite administración de artículos y precios personalizados por cliente, generación de pedidos, remitos, control de reclamos y visualización de estadísticas.',
            },
            {
               title: 'Asociación de Pádel',
               description:
                  'Sitio web institucional y sistema de gestión para torneos y reservas. Enfocado en digitalizar la organización de canchas, jugadores y eventos, mejorando la experiencia administrativa y operativa.',
            },
            {
               title: 'Full Court',
               description:
                  'Aplicación para gestión de canchas deportivas con control de reservas, clientes y consumos. Arquitectura fullstack con React, Node.js y Prisma, diseñada con enfoque escalable y buenas prácticas de producto.',
            },
         ],
         en: [
            {
               title: 'Silk',
               description:
                  'E-commerce y plataforma de captación para marca personal. Arquitectura fullstack orientada a escalabilidad, con panel administrativo, gestión dinámica de contenido, venta de productos digitales y automatización de procesos comerciales.',
            },
            {
               title: 'Aquazul',
               description:
                  'Sistema integral para operación de lavandería industrial con lógica de negocio compleja: múltiples roles, precios personalizados por cliente, trazabilidad de pedidos y generación de documentación operativa.',
            },
            {
               title: 'Asociación de Pádel',
               description:
                  'Plataforma web institucional con funcionalidades de gestión deportiva. Digitaliza la administración de torneos, reservas y organización de jugadores.',
            },
            {
               title: 'Full Court',
               description:
                  'Aplicación de gestión de reservas deportivas con arquitectura modular y escalable. Incluye control de clientes, consumos y validaciones robustas en frontend y backend.',
            },
         ],
      },
   },
   experience: {
      label: { es: 'Carrera', en: 'Career' },
      title: { es: 'Experiencia', en: 'Experience' },
      items: {
         es: [
            {
               period: '2026 \u2014 Presente',
               role: 'Líder Técnico Frontend',
               company: 'Accenture - Client: Banco Galicia',
               description:
                  'Liderando la arquitectura frontend de la plataforma principal. Introduje un sistema de diseño que redujo el tiempo de desarrollo un 35%. Mentoreando un equipo de 5 ingenieros.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2024 \u2014 2025',
               role: 'Desarrollador Frontend',
               company: 'Accenture - Client: Banco Galicia',
               description:
                  'Liderando la arquitectura frontend de la plataforma principal. Introduje un sistema de diseño que redujo el tiempo de desarrollo un 35%. Mentoreando un equipo de 5 ingenieros.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2021 \u2014 2022',
               role: 'Desarrollador Salesforce',
               company: 'Accenture - Proyecto Manage my Sales',
               description:
                  'Entregué más de 20 proyectos para clientes en salud, fintech y e-commerce. Establecí una librería de componentes y estándares de testing para el equipo.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2020 \u2014 2021',
               role: 'Desarrollador Junior',
               company: 'Tember',
               description:
                  'Primera contratación de ingeniería. Construí el MVP que aseguró la ronda semilla. Asumí múltiples roles entre frontend, backend y DevOps.',
               impact: 'Aca podria ir el impacto principal',
            },
         ],
         en: [
            {
               period: '2022 \u2014 Present',
               role: 'Senior Fullstack Engineer',
               company: 'NovaTech Solutions',
               description:
                  'Leading frontend architecture for the core product platform. Introduced design system that reduced development time by 35%. Mentoring a team of 5 engineers.',
               impact: '35% faster dev cycles',
            },
            {
               period: '2020 \u2014 2022',
               role: 'Fullstack Developer',
               company: 'DataBridge Corp',
               description:
                  'Built internal tools for data pipeline management serving 200+ analysts. Migrated legacy PHP services to a modern Node.js/React stack.',
               impact: '200+ internal users',
            },
            {
               period: '2018 \u2014 2020',
               role: 'Frontend Developer',
               company: 'PixelCraft Agency',
               description:
                  'Delivered 20+ client projects across healthcare, fintech, and e-commerce. Established component library and testing standards for the team.',
               impact: '20+ shipped projects',
            },
            {
               period: '2017 \u2014 2018',
               role: 'Junior Developer',
               company: 'StartupLab',
               description:
                  'First engineering hire. Built the MVP that secured seed funding. Wore many hats across frontend, backend, and DevOps.',
               impact: 'Seed round secured',
            },
         ],
      },
   },
   philosophy: {
      label: { es: 'Valores', en: 'Values' },
      title: { es: 'Filosofía de Trabajo', en: 'Work Philosophy' },
      items: {
         es: [
            {
               title: 'Pensamiento Estratégico',
               description:
                  'Cada línea de código tiene un propósito. Pienso más allá de la funcionalidad inmediata para entender cómo las decisiones escalan e impactan en el sistema.',
            },
            {
               title: 'Mejora Continua',
               description:
                  'La tecnología evoluciona rápido. Me mantengo actualizado leyendo, experimentando y contribuyendo a la comunidad a través de open-source y escritura.',
            },
            {
               title: 'Arquitectura Limpia',
               description:
                  'El código bien estructurado es una ventaja competitiva. Invierto en separación de responsabilidades, interfaces claras y patrones mantenibles.',
            },
            {
               title: 'Comunicación y Ownership',
               description:
                  'La buena ingeniería es colaborativa. Me comunico proactivamente, documento decisiones y asumo la responsabilidad total del trabajo que entrego.',
            },
         ],
         en: [
            {
               title: 'Strategic Thinking',
               description:
                  'Every line of code serves a purpose. I think beyond the immediate feature to understand how decisions scale and impact the broader system.',
            },
            {
               title: 'Continuous Improvement',
               description:
                  'Technology evolves fast. I stay current by reading, experimenting, and contributing back to the community through open-source and writing.',
            },
            {
               title: 'Clean Architecture',
               description:
                  'Well-structured code is a competitive advantage. I invest in separation of concerns, clear interfaces, and maintainable patterns.',
            },
            {
               title: 'Communication & Ownership',
               description:
                  'Good engineering is collaborative. I communicate proactively, document decisions, and take full ownership of the work I deliver.',
            },
         ],
      },
   },
   contact: {
      label: { es: 'Contacto', en: 'Contact' },
      title: { es: 'Trabajemos Juntos', en: 'Let\u2019s Work Together' },
      description: {
         es: '¿Tenés un proyecto en mente o querés conversar sobre oportunidades? Me encantaría saber de vos.',
         en: 'Have a project in mind or want to discuss opportunities? I\u2019d love to hear from you.',
      },
      sentTitle: { es: '¡Mensaje enviado!', en: 'Message sent!' },
      sentDescription: {
         es: 'Gracias por escribirme. Te responderé a la brevedad.',
         en: 'Thank you for reaching out. I\u2019ll get back to you shortly.',
      },
      nameLabel: { es: 'Nombre', en: 'Name' },
      namePlaceholder: { es: 'Tu nombre', en: 'Your name' },
      emailLabel: { es: 'Email', en: 'Email' },
      emailPlaceholder: { es: 'tu@email.com', en: 'your@email.com' },
      messageLabel: { es: 'Mensaje', en: 'Message' },
      messagePlaceholder: {
         es: 'Contame sobre tu proyecto...',
         en: 'Tell me about your project...',
      },
      sendButton: { es: 'Enviar Mensaje', en: 'Send Message' },
      emailTitle: { es: 'Email', en: 'Email' },
      socialTitle: { es: 'Redes', en: 'Social' },
      locationTitle: { es: 'Ubicación', en: 'Location' },
      locationLine1: {
         es: 'Basado en Mar del Plata, Argentina',
         en: 'Based in Mar del Plata, Argentina',
      },
      locationLine2: {
         es: 'Abierto a oportunidades remotas a nivel mundial',
         en: 'Open to remote opportunities worldwide',
      },
   },
   footer: {
      rights: {
         es: '\u00A9 2026 Lautaro Fullone. Todos los derechos reservados.',
         en: '\u00A9 2026 Lautaro Fullone. All rights reserved.',
      },
   },
} as const

type Dictionary = typeof dictionary

interface I18nContextType {
   locale: Locale
   toggleLocale: () => void
   t: Dictionary
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
   const [locale, setLocale] = useState<Locale>('es')

   const toggleLocale = useCallback(() => {
      setLocale((prev) => (prev === 'es' ? 'en' : 'es'))
   }, [])

   return (
      <I18nContext.Provider value={{ locale, toggleLocale, t: dictionary }}>
         {children}
      </I18nContext.Provider>
   )
}

export function useI18n() {
   const context = useContext(I18nContext)
   if (!context) throw new Error('useI18n must be used within I18nProvider')
   return context
}
