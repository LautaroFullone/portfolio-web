'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'es' | 'en'

const dictionary = {
   nav: {
      approach: { es: 'Como Trabajo', en: 'How I Work' },
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
      label: { es: 'Dos Mundos - Una Mentalidad', en: 'Two Worlds - One Mindset' },
      title: { es: 'Cómo Trabajo', en: 'How I Work' },
      corporateTitle: {
         es: 'Trayectoria Corporativa',
         en: 'Corporate Trajectory',
      },
      corporateDescription: {
         es: 'Trabajo liderando desarrollos en entornos de alta exigencia y a gran escala. No solo escribo código; guío equipos para asegurar que cada despliegue sea robusto y escalable.',
         en: 'Leading critical systems with solid architecture, clean code, and robust deployments. Not just writing code, guiding other developers, and ensuring the product scales.',
      },
      corporateItems: {
         es: [
            'Liderazgo técnico y mentoría',
            'Colaboración en grandes equipos',
            'Integración y despliegue continuo',
         ],
         en: [
            'Technical leadership and mentoring',
            'Collaboration in large teams',
            'Integration and continuous deployment',
         ],
      },
      independentTitle: {
         es: 'Proyectos Independientes',
         en: 'Independent Projects',
      },
      independentDescription: {
         es: 'Me apasiona llevar ideas desde el papel hasta el servidor. Me involucro en todo el ciclo: diseño, infraestructura y negocio, tratando cada proyecto con el rigor de un producto real.',
         en: 'I love bringing ideas from paper to the server. I get involved in the entire cycle: design, infrastructure, and business, treating each project with the rigor of a real product.',
      },
      independentItems: {
         es: [
            'Visión de producto de punta a punta',
            'Desarrollo ágil y entregas rápidas',
            'Foco total en la experiencia del usuario',
         ],
         en: [
            'Full ownership from idea to launch',
            'Agile development and fast delivery',
            'Total focus on user experience',
         ],
      },
      quote: {
         es: '\u201CProgramar es un desafío constante donde siempre encuentro la forma de divertirme.\u201D',
         en: '\u201CI apply corporate standards and product thinking to every project I build.\u201D',
      },
   },
   technologies: {
      label: { es: 'Mi ecosistema de desarrollo', en: 'My development ecosystem' },
      title: { es: 'Tecnologías', en: 'Technologies' },
      description: {
         es: 'Más que un listado de conocimientos, es el conjunto de herramientas que elijo y domino para construir software eficiente y escalable.',
         en: 'More than a list of knowledge, it is the set of tools that I choose and master to build efficient and scalable software.',
      },
   },
   projects: {
      label: { es: 'El Resultado', en: 'The Result' },
      title: { es: 'Proyectos', en: 'Projects' },
      description: {
         es: 'Esta es una selección de los desafíos que más disfruté construir, proyectos reales que pasaron de ser una idea a convertirse en productos funcionales.',
         en: 'This is a selection of the challenges I most enjoyed building, real projects that went from being an idea to becoming functional products.',
      },
      featured: { es: 'Proyecto Destacado', en: 'Featured Project' },
      items: {
         es: [
            {
               label: '<Web type="Landing" editor="WYSIWYG" adminPanel />',
               title: 'SILK',
               description:
                  'Transformé la visión de la marca en un ecosistema digital completo. Desarrollé un sistema que no solo es una web, sino una herramienta estratégica para gestionar contenidos, automatizar ventas de productos digitales y captar leads de forma eficiente.',
            },
            {
               label: '<Web type="Landing" payments="MP" tournamentsPanel />',
               title: 'ASOC. PADEL MAR DEL PLATA',
               description:
                  'Digitalicé la pasión de mi ciudad. Un sistema integral diseñado para automatizar la logística de torneos y reservas en tiempo real, mejorando la experiencia de la comunidad y simplificando la operatividad administrativa de punta a punta.',
            },
            {
               label: '<Web type="System" charts="analytics" adminPanel />',
               title: 'AQUAZUL',
               description:
                  'Llevé el rigor del software corporativo al sector industrial. Creé un panel administrativo robusto con multiples roles que controla desde la gestión de inventarios y pedidos personalizados hasta estadísticas críticas, permitiendo un control total de la operativa en tiempo real.',
            },
            {
               label: '<Web type="System" management="RT" reservationsPanel />',
               title: 'Full Court',
               description:
                  'Mi terreno de juego favorito. Desarrollé una arquitectura escalable para el control total de centros deportivos, enfocada en resolver la complejidad de las reservas y consumos con una interfaz fluida y una lógica de negocio sólida.',
            },
         ],
         en: [
            {
               label: '<Web type="Landing" editor="WYSIWYG" adminPanel />',
               title: 'SILK',
               description:
                  "I transformed the brand's vision into a complete digital ecosystem. I developed a system that is not only a website but a strategic tool for managing content, automating digital product sales, and capturing leads efficiently.",
            },
            {
               label: '<Web type="System" charts="analytics" adminPanel />',
               title: 'AQUAZUL',
               description:
                  'I brought the rigor of corporate software to the industrial sector. I created a robust administrative panel with multiple roles that controls everything from inventory management and custom orders to critical statistics, allowing for total control of operations in real time.',
            },
            {
               label: '<Web type="System" management="RT" reservationsPanel />',
               title: 'PADEL ASSOC. MAR DEL PLATA',
               description:
                  "I digitized one of my city's passions. A comprehensive system designed to automate tournament logistics and real-time reservations, improving the community's experience and simplifying end-to-end administrative operations.",
            },
            {
               label: '<Web type="System" management="RT" reservationsPanel />',
               title: 'Full Court',
               description:
                  'My favorite playground. I developed a scalable architecture for total control of sports centers, focused on solving the complexity of reservations and consumptions with a fluid interface and solid business logic.',
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
               period: '2025 - Presente',
               role: 'Líder Técnico Frontend',
               company: 'Accenture - Client: Banco Galicia',
               description:
                  'Liderando la arquitectura frontend de la plataforma principal. Introduje un sistema de diseño que redujo el tiempo de desarrollo un 35%. Mentoreando un equipo de 5 ingenieros.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2024 - 2025',
               role: 'Desarrollador Frontend',
               company: 'Accenture - Client: Banco Galicia',
               description:
                  'Liderando la arquitectura frontend de la plataforma principal. Introduje un sistema de diseño que redujo el tiempo de desarrollo un 35%. Mentoreando un equipo de 5 ingenieros.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2021 - 2022',
               role: 'Desarrollador Salesforce',
               company: 'Accenture - Proyecto Manage my Sales',
               description:
                  'Entregué más de 20 proyectos para clientes en salud, fintech y e-commerce. Establecí una librería de componentes y estándares de testing para el equipo.',
               impact: 'Aca podria ir el impacto principal',
            },
            {
               period: '2020 - 2021',
               role: 'Desarrollador Web',
               company: 'Tember',
               description:
                  'Primera contratación de ingeniería. Construí el MVP que aseguró la ronda semilla. Asumí múltiples roles entre frontend, backend y DevOps.',
               impact: 'Aca podria ir el impacto principal',
            },
         ],
         en: [
            {
               period: '2025 - Present',
               role: 'Senior Fullstack Engineer',
               company: 'NovaTech Solutions',
               description:
                  'Leading frontend architecture for the core product platform. Introduced design system that reduced development time by 35%. Mentoring a team of 5 engineers.',
               impact: '35% faster dev cycles',
            },
            {
               period: '2024 - 2025',
               role: 'Fullstack Developer',
               company: 'Accenture - Client: Banco Galicia',
               description:
                  'Built internal tools for data pipeline management serving 200+ analysts. Migrated legacy PHP services to a modern Node.js/React stack.',
               impact: '200+ internal users',
            },
            {
               period: '2021 - 2022',
               role: 'Frontend Developer',
               company: 'Accenture - Proyecto Manage my Sales',
               description:
                  'Delivered 20+ client projects across healthcare, fintech, and e-commerce. Established component library and testing standards for the team.',
               impact: '20+ shipped projects',
            },
            {
               period: '2020 - 2021',
               role: 'Web Developer',
               company: 'Tember',
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
