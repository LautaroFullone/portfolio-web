'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import silkImage from '@/assets/images/projects/silk-mockup.webp'
import padelMockup from '@/assets/images/projects/padel-mockup.webp'
import aquazulMockup from '@/assets/images/projects/aquazul-mockup.webp'
// import fullCourtMockup from '@/assets/images/projects/full-court-mockup.png'

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
      experience: { es: 'Experiencia', en: 'Experience' },
      viewProjects: { es: 'Ver Proyectos', en: 'View Projects' },
      downloadCV: { es: 'Descargar CV', en: 'Download CV' },
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
         en: 'I lead development in high-demand, large-scale environments. Not just writing code — I guide teams to ensure every deployment is robust and scalable.',
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
         en: '\u201CCoding is a constant challenge where I always find a way to have fun.\u201D',
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
               label: '<Web type="Consultoría de Imagen y Estilismo" />',
               title: 'ESTUDIO SILK',
               url: 'https://estudiosilk.com',
               description:
                  'Transformé la visión de la marca en un ecosistema digital completo. Un sistema que no solo es una web, sino una herramienta estratégica para gestionar contenidos, automatizar ventas de productos digitales y captar leads de forma eficiente.',
               image: silkImage,
            },
            {
               label: '<Web type="Asociación de Jugadores de Padel" />',
               title: 'ASOC. PADEL MAR DEL PLATA',
               url: 'https://padel-mardelplata.vercel.app/',
               description:
                  'Digitalicé una de las pasiones de mi ciudad. Un sistema integral diseñado para automatizar la logística de torneos en tiempo real, mejorando la experiencia de la comunidad.',
               image: padelMockup,
            },
            {
               label: '<Web type="Lavadero Industrial" />',
               title: 'AQUAZUL',
               url: 'https://aquazul-lavadero.com',
               description:
                  'Creé un panel administrativo robusto con multiples roles que controla la gestión de inventarios y pedidos personalizados y estadísticas diarias, permitiendo un control total de la operativa del negocio.',
               image: aquazulMockup,
            },
         ],
         en: [
            {
               label: '<Web type="Image Consulting &amp; Styling" />',
               title: 'ESTUDIO SILK',
               url: 'https://estudiosilk.com',
               description:
                  "I transformed the brand's vision into a complete digital ecosystem. A system that is not just a website, but a strategic tool for managing content, automating digital product sales, and capturing leads efficiently.",
               image: silkImage,
            },
            {
               label: '<Web type="Padel Players Association" />',
               title: 'PADEL ASSOC. MAR DEL PLATA',
               url: 'https://padel-mardelplata.vercel.app/',
               description:
                  "I digitized one of my city's passions. A comprehensive system designed to automate tournament logistics in real time, improving the community's experience.",
               image: padelMockup,
            },
            {
               label: '<Web type="Industrial Laundry" />',
               title: 'AQUAZUL',
               url: 'https://aquazul-lavadero.com',
               description:
                  'I created a robust administrative panel with multiple roles that controls inventory management, custom orders, and daily statistics — enabling total control over business operations.',
               image: aquazulMockup,
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
               role: 'Líder Técnico FullStack',
               company: 'Accenture | Cliente: Banco Galicia',
               description:
                  'Hoy soy referente técnico del flujo de vinculación de cuentas para el Home Banking. Defino la arquitectura y guío a mi equipo en el proceso. Actualemnte contamos con más de 1 millon de usuarios diarios.',
            },
            {
               period: '2024 - 2025',
               role: 'Desarrollador FullStack',
               company: 'Accenture | Cliente: Banco Galicia',
               description:
                  'Participé activamente en el desarrollo del Home Banking para empresas. Me enfoqué en armar un sistema de trabajo que nos permitió avanzar más rápido, actualizando viejas estructuras y acompañando a otros desarrolladores en el proceso.',
            },
            {
               period: '2021 - 2024',
               role: 'Líder Técnico Salesforce',
               company: 'Accenture | Proyecto: Manage My Sales',
               description:
                  'Coordiné y desarrollé soluciones técnicas para equipos de todo el mundo, además de participar en academias corporativas para capacitar a otros desarrolladores en el uso del CRM. Luego de unos años, decidí rotar hacia el mundo del desarrollo web que es lo que realmente me apasiona.',
            },
            {
               period: '2020 - 2021',
               role: 'Desarrollador Web',
               company: 'Tember',
               description:
                  'Fui el primer desarrollador en sumarse al equipo. Me tocó el desafío de construir el MVP desde cero para asegurar el financiamiento del proyecto, ocupándome de todo: frontend, backend y las primeras configuraciones de los servidores.',
            },
         ],
         en: [
            {
               period: '2025 - Present',
               role: 'FullStack Tech Lead',
               company: 'Accenture | Client: Banco Galicia',
               description:
                  'I am the technical reference for the account-linking flow in Home Banking. I define the architecture and guide my team through the process. We currently serve more than 1 million daily users.',
            },
            {
               period: '2024 - 2025',
               role: 'FullStack Developer',
               company: 'Accenture | Client: Banco Galicia',
               description:
                  'I actively participated in the development of the Business Home Banking. I focused on building a workflow system that allowed us to move faster, modernizing legacy structures and supporting other developers throughout the process.',
            },
            {
               period: '2021 - 2024',
               role: 'Salesforce Tech Lead',
               company: 'Accenture | Project: Manage My Sales',
               description:
                  'I coordinated and developed technical solutions for global teams, and participated in corporate academies to train other developers in CRM usage. After a few years, I transitioned to web development — which is what I am truly passionate about.',
            },
            {
               period: '2020 - 2021',
               role: 'Web Developer',
               company: 'Tember',
               description:
                  'I was the first developer to join the team. I took on the challenge of building the MVP from scratch to secure project funding, handling everything: frontend, backend, and the initial server configuration.',
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
         es: '¿Tenés un proyecto en mente o querés conversar sobre oportunidades? No dudes en contactarme.',
         en: 'Have a project in mind or want to discuss opportunities? Don\u2019t hesitate to contact me.',
      },
      sentTitle: { es: '¡Mensaje enviado!', en: 'Message sent!' },
      sentDescription: {
         es: 'Gracias por escribirme. Te responderé a la brevedad.',
         en: 'Thank you for reaching out. I\u2019ll get back to you shortly.',
      },
      nameLabel: { es: 'Nombre', en: 'Name' },
      namePlaceholder: { es: 'Tu nombre', en: 'Your name' },
      companyLabel: { es: 'Empresa', en: 'Company' },
      companyPlaceholder: { es: 'Tu empresa', en: 'Your company' },
      emailLabel: { es: 'Email', en: 'Email' },
      emailPlaceholder: { es: 'tu@email.com', en: 'your@email.com' },
      subjectLabel: { es: 'Asunto', en: 'Subject' },
      subjectPlaceholder: { es: 'Asunto del mensaje', en: 'Message subject' },
      messageLabel: { es: 'Mensaje', en: 'Message' },
      messagePlaceholder: {
         es: 'Contame sobre tu proyecto...',
         en: 'Tell me about your project...',
      },
      sendButton: { es: 'Enviar Mensaje', en: 'Send Message' },
      emailTitle: { es: 'Mi Email', en: 'My Email' },
      socialTitle: { es: 'Mis Redes', en: 'My Social' },
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
