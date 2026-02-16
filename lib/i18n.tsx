"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "es" | "en"

const dictionary = {
  nav: {
    approach: { es: "Enfoque", en: "Approach" },
    technologies: { es: "Tecnologías", en: "Technologies" },
    projects: { es: "Proyectos", en: "Projects" },
    experience: { es: "Experiencia", en: "Experience" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    role: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    subtitle: {
      es: "Construyendo aplicaciones escalables en entornos corporativos y creando productos digitales independientes. Uniendo estándares empresariales con velocidad de startup.",
      en: "Building scalable applications in corporate environments and crafting independent digital products. Bridging the gap between enterprise standards and startup speed.",
    },
    available: {
      es: "Disponible para trabajar",
      en: "Available for work",
    },
    viewProjects: { es: "Ver Proyectos", en: "View Projects" },
    contact: { es: "Contacto", en: "Contact" },
    scroll: { es: "Bajar", en: "Scroll" },
    scrollAriaLabel: {
      es: "Desplazarse a la sección de enfoque",
      en: "Scroll to approach section",
    },
  },
  approach: {
    label: { es: "Enfoque", en: "Approach" },
    title: { es: "Dos Mundos, Una Mentalidad", en: "Two Worlds, One Mindset" },
    corporateTitle: { es: "Ingeniería Corporativa", en: "Corporate Engineering" },
    corporateDescription: {
      es: "Años de experiencia trabajando en equipos grandes, cumpliendo estándares de nivel empresarial, construyendo para escalabilidad y entregando funcionalidades complejas a través de pipelines robustos de CI/CD. Familiarizado con revisiones de código, decisiones de arquitectura y colaboración entre equipos a gran escala.",
      en: "Years of experience working within large teams, adhering to enterprise-level standards, building for scalability, and shipping complex features through robust CI/CD pipelines. Familiar with code reviews, architecture decisions, and cross-team collaboration at scale.",
    },
    corporateItems: {
      es: [
        "Colaboración en equipos grandes",
        "Estándares y revisiones de código empresarial",
        "Arquitectura orientada a escalabilidad",
        "Pipelines robustos de CI/CD y testing",
      ],
      en: [
        "Large-scale team collaboration",
        "Enterprise code standards & reviews",
        "Scalability-first architecture",
        "Robust CI/CD & testing pipelines",
      ],
    },
    independentTitle: { es: "Productos Independientes", en: "Independent Products" },
    independentDescription: {
      es: "Apasionado por construir productos de cero a uno. Asumiendo la responsabilidad completa del stack, desde la arquitectura del sistema hasta el despliegue y la experiencia de usuario. Tratando cada proyecto personal con el mismo rigor que el software de producción.",
      en: "Passionate about building products from zero to one. Owning the full stack, from system architecture to deployment and user experience. Treating every side project with the same rigor as production-level software.",
    },
    independentItems: {
      es: [
        "Responsabilidad total de idea a lanzamiento",
        "Arquitectura y diseño de sistemas",
        "Visión de producto y empatía con el usuario",
        "Iteración rápida y entrega continua",
      ],
      en: [
        "Full ownership from idea to launch",
        "Architecture & system design",
        "Product vision & user empathy",
        "Rapid iteration & shipping",
      ],
    },
    quote: {
      es: "\u201CAplico estándares corporativos y pensamiento de producto a cada proyecto que construyo.\u201D",
      en: "\u201CI apply corporate standards and product thinking to every project I build.\u201D",
    },
  },
  technologies: {
    label: { es: "Stack", en: "Stack" },
    title: { es: "Tecnologías", en: "Technologies" },
    description: {
      es: "Herramientas y frameworks que uso a diario para entregar software confiable y de alto rendimiento.",
      en: "Tools and frameworks I use daily to ship reliable, performant software.",
    },
  },
  projects: {
    label: { es: "Trabajo", en: "Work" },
    title: { es: "Proyectos Seleccionados", en: "Selected Projects" },
    description: {
      es: "Una selección de proyectos que demuestran mi enfoque para resolver problemas reales con código limpio y mantenible.",
      en: "A selection of projects that demonstrate my approach to solving real-world problems with clean, maintainable code.",
    },
    featured: { es: "Proyecto Destacado", en: "Featured Project" },
    items: {
      es: [
        {
          title: "CloudSync Dashboard",
          description:
            "Plataforma de analíticas en tiempo real para monitorear la salud, costos y métricas de rendimiento de infraestructura en la nube a través de múltiples proveedores.",
        },
        {
          title: "FormForge",
          description:
            "Constructor de formularios de código abierto con interfaz drag-and-drop, lógica condicional e integraciones con webhooks. Usado por más de 2k desarrolladores.",
        },
        {
          title: "PayTrack API",
          description:
            "Servicio de conciliación de pagos que procesa más de 50k transacciones diarias con matching automático y detección de anomalías.",
        },
        {
          title: "DevPulse",
          description:
            "Herramienta de productividad para desarrolladores que rastrea patrones de commits, ciclos de revisión de código y velocidad del equipo con insights accionables.",
        },
      ],
      en: [
        {
          title: "CloudSync Dashboard",
          description:
            "Real-time analytics platform for monitoring cloud infrastructure health, costs and performance metrics across multiple providers.",
        },
        {
          title: "FormForge",
          description:
            "Open-source form builder with drag-and-drop interface, conditional logic, and webhook integrations. Used by 2k+ developers.",
        },
        {
          title: "PayTrack API",
          description:
            "Payment reconciliation service processing 50k+ daily transactions with automated matching and anomaly detection.",
        },
        {
          title: "DevPulse",
          description:
            "Developer productivity tool that tracks commit patterns, code review cycles and team velocity with actionable insights.",
        },
      ],
    },
  },
  experience: {
    label: { es: "Carrera", en: "Career" },
    title: { es: "Experiencia", en: "Experience" },
    items: {
      es: [
        {
          period: "2022 \u2014 Presente",
          role: "Ingeniero Fullstack Senior",
          company: "NovaTech Solutions",
          description:
            "Liderando la arquitectura frontend de la plataforma principal. Introduje un sistema de diseño que redujo el tiempo de desarrollo un 35%. Mentoreando un equipo de 5 ingenieros.",
          impact: "35% ciclos más rápidos",
        },
        {
          period: "2020 \u2014 2022",
          role: "Desarrollador Fullstack",
          company: "DataBridge Corp",
          description:
            "Construí herramientas internas para la gestión de pipelines de datos que sirven a más de 200 analistas. Migré servicios legacy de PHP a un stack moderno de Node.js/React.",
          impact: "200+ usuarios internos",
        },
        {
          period: "2018 \u2014 2020",
          role: "Desarrollador Frontend",
          company: "PixelCraft Agency",
          description:
            "Entregué más de 20 proyectos para clientes en salud, fintech y e-commerce. Establecí una librería de componentes y estándares de testing para el equipo.",
          impact: "20+ proyectos entregados",
        },
        {
          period: "2017 \u2014 2018",
          role: "Desarrollador Junior",
          company: "StartupLab",
          description:
            "Primera contratación de ingeniería. Construí el MVP que aseguró la ronda semilla. Asumí múltiples roles entre frontend, backend y DevOps.",
          impact: "Ronda semilla obtenida",
        },
      ],
      en: [
        {
          period: "2022 \u2014 Present",
          role: "Senior Fullstack Engineer",
          company: "NovaTech Solutions",
          description:
            "Leading frontend architecture for the core product platform. Introduced design system that reduced development time by 35%. Mentoring a team of 5 engineers.",
          impact: "35% faster dev cycles",
        },
        {
          period: "2020 \u2014 2022",
          role: "Fullstack Developer",
          company: "DataBridge Corp",
          description:
            "Built internal tools for data pipeline management serving 200+ analysts. Migrated legacy PHP services to a modern Node.js/React stack.",
          impact: "200+ internal users",
        },
        {
          period: "2018 \u2014 2020",
          role: "Frontend Developer",
          company: "PixelCraft Agency",
          description:
            "Delivered 20+ client projects across healthcare, fintech, and e-commerce. Established component library and testing standards for the team.",
          impact: "20+ shipped projects",
        },
        {
          period: "2017 \u2014 2018",
          role: "Junior Developer",
          company: "StartupLab",
          description:
            "First engineering hire. Built the MVP that secured seed funding. Wore many hats across frontend, backend, and DevOps.",
          impact: "Seed round secured",
        },
      ],
    },
  },
  philosophy: {
    label: { es: "Valores", en: "Values" },
    title: { es: "Filosofía de Trabajo", en: "Work Philosophy" },
    items: {
      es: [
        {
          title: "Pensamiento Estratégico",
          description:
            "Cada línea de código tiene un propósito. Pienso más allá de la funcionalidad inmediata para entender cómo las decisiones escalan e impactan en el sistema.",
        },
        {
          title: "Mejora Continua",
          description:
            "La tecnología evoluciona rápido. Me mantengo actualizado leyendo, experimentando y contribuyendo a la comunidad a través de open-source y escritura.",
        },
        {
          title: "Arquitectura Limpia",
          description:
            "El código bien estructurado es una ventaja competitiva. Invierto en separación de responsabilidades, interfaces claras y patrones mantenibles.",
        },
        {
          title: "Comunicación y Ownership",
          description:
            "La buena ingeniería es colaborativa. Me comunico proactivamente, documento decisiones y asumo la responsabilidad total del trabajo que entrego.",
        },
      ],
      en: [
        {
          title: "Strategic Thinking",
          description:
            "Every line of code serves a purpose. I think beyond the immediate feature to understand how decisions scale and impact the broader system.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Technology evolves fast. I stay current by reading, experimenting, and contributing back to the community through open-source and writing.",
        },
        {
          title: "Clean Architecture",
          description:
            "Well-structured code is a competitive advantage. I invest in separation of concerns, clear interfaces, and maintainable patterns.",
        },
        {
          title: "Communication & Ownership",
          description:
            "Good engineering is collaborative. I communicate proactively, document decisions, and take full ownership of the work I deliver.",
        },
      ],
    },
  },
  contact: {
    label: { es: "Contacto", en: "Contact" },
    title: { es: "Trabajemos Juntos", en: "Let\u2019s Work Together" },
    description: {
      es: "¿Tenés un proyecto en mente o querés conversar sobre oportunidades? Me encantaría saber de vos.",
      en: "Have a project in mind or want to discuss opportunities? I\u2019d love to hear from you.",
    },
    sentTitle: { es: "¡Mensaje enviado!", en: "Message sent!" },
    sentDescription: {
      es: "Gracias por escribirme. Te responderé a la brevedad.",
      en: "Thank you for reaching out. I\u2019ll get back to you shortly.",
    },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    emailLabel: { es: "Email", en: "Email" },
    emailPlaceholder: { es: "tu@email.com", en: "your@email.com" },
    messageLabel: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Contame sobre tu proyecto...",
      en: "Tell me about your project...",
    },
    sendButton: { es: "Enviar Mensaje", en: "Send Message" },
    emailTitle: { es: "Email", en: "Email" },
    socialTitle: { es: "Redes", en: "Social" },
    locationTitle: { es: "Ubicación", en: "Location" },
    locationLine1: { es: "Basado en Berlín, Alemania", en: "Based in Berlin, Germany" },
    locationLine2: {
      es: "Abierto a oportunidades remotas a nivel mundial",
      en: "Open to remote opportunities worldwide",
    },
  },
  footer: {
    rights: {
      es: "\u00A9 2026 Lautaro Fullone. Todos los derechos reservados.",
      en: "\u00A9 2026 Lautaro Fullone. All rights reserved.",
    },
    builtWith: {
      es: "Diseñado y construido con Next.js y Tailwind CSS",
      en: "Designed & built with Next.js and Tailwind CSS",
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
  const [locale, setLocale] = useState<Locale>("es")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"))
  }, [])

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
