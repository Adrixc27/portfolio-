"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "es" | "en"

export const translations = {
  es: {
    // Header
    nav: {
      about: "Sobre Mi",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    // Hero
    hero: {
      greeting: "Hola, mi nombre es",
      tagline: "Web Designer & Developer",
      description:
        "Soy un desarrollador web enfocado en crear sitios y experiencias digitales modernas, funcionales y visualmente atractivas. Me interesa combinar el diseño de interfaces con el desarrollo frontend para construir productos digitales que ofrezcan una experiencia intuitiva y una identidad visual única",
      descriptionHighlight: "diseño de interfaces y desarrollo front-end",
      cta: "Ver Proyecto",
      ctaContact: "Contactame",
    },
    // Experience
    experience: {
      sectionNumber: "01.",
      sectionTitle: "Experiencia",
      viewResume: "Ver curriculum completo",
      present: "Presente",
      jobs: [
        {
          period: "2026 — Presente",
          title: "Web Designer & Developer",
          company: "Freelancer",
          companyUrl: "#",
          description:
            "Desarrollador Full Stack con solida experiencia en el diseno, desarrollo e implementacion de aplicaciones web, utilizando una amplia variedad de lenguajes y tecnologias de programacion. Capaz de trabajar tanto en el frontend como en el backend, asegurando soluciones eficientes, escalables y orientadas a las mejores practicas de desarrollo.",
        },
        {
          period: "2024 — 2026",
          title: "Junior Developer",
          company: "MA Designs",
          companyUrl: "https://www.agenciamadesigns.com/",
          description:
            "Responsable del diseno y desarrollo de sitios web, gestionando de manera integral tanto el frontend como el backend. Encargado de crear interfaces atractivas y funcionales, asi como de implementar la logica y estructura necesarias para garantizar un rendimiento optimo y una experiencia de usuario eficiente.",
        },
      ],
    },
    // Projects
    projects: {
      sectionNumber: "02.",
      sectionTitle: "Proyectos Destacados",
      featuredLabel: "Proyecto Destacado",
      otherTitle: "Otros Proyectos",
      githubLabel: "Ver código en GitHub",
      liveLabel: "Ver proyecto en vivo",
      viewDesign: "Ver diseño en Figma",
      caseStudyLabel: "Ver detalles",
      caseStudyDefault: "Problema → proceso → diseño → desarrollo → resultado.",
      featured: [
        {
          title: "Aplicación R.U.T.A",
          description:
            "Proyecto personal publicado en GitHub que reúne una arquitectura moderna, componentes reutilizables y una experiencia responsive enfocada en presentar trabajo digital de forma profesional.",
        },
        {
          title: "Sistema de diseño para Figma",
          description:
            "Diseño de interfaz en Figma con componentes, estilos y prototipos interactivos para construir productos digitales consistentes y fáciles de escalar.",
        },
        {
          title: "Landing Page Corporativa",
          description:
            "Página web corporativa orientada a conversión, con jerarquía visual clara, navegación intuitiva y una identidad visual sobria para marcas profesionales.",
        },
      ],
      other: [
        {
          title: "Dashboard Analítico",
          description:
            "Interfaz web para visualizar métricas de negocio mediante tarjetas, tablas y gráficos responsive.",
        },
        {
          title: "Landing Page para SaaS",
          description: "Página web minimalista para presentar un producto digital y sus beneficios.",
        },
        {
          title: "Kit UI para Figma",
          description: "Colección de componentes y pantallas reutilizables para acelerar el diseño de productos.",
        },
        {
          title: "Página Web de Agencia",
          description:
            "Sitio web elegante para una agencia creativa, con secciones de servicios, proyectos y contacto.",
        },
      ],
    },
    // Skills
    skills: {
      sectionNumber: "03.",
      sectionTitle: "Habilidades",
      categories: [
        { title: "Frontend" },
{ title: "Diseño de producto" },
  { title: "Desarrollo web" },
  { title: "Herramientas" },
      ],
    },
    // Contact
    contact: {
      sectionNumber: "04.",
      preTitle: "04. Y ahora?",
      title: "Hablemos",
      description:
        "Actualmente estoy abierto a nuevas oportunidades y mi inbox siempre esta disponible. Ya sea que tengas una pregunta, una propuesta de proyecto, o simplemente quieras saludar, hare todo lo posible por responderte.",
      cta: "Enviar Email",
    },
    // Footer
    footer: {
      builtBy: "Disenado & Construido por",
    },
  },
  en: {
    // Header
    nav: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hi, my name is",
      tagline: "I build digital experiences",
      description:
        "I am a Full Stack developer specialized in building modern, scalable web applications with excellent user experiences. Currently focused on creating digital products that combine elegant design with robust engineering.",
      descriptionHighlight: "Full Stack developer",
      cta: "View Projects",
      ctaContact: "Contact Me",
    },
    // Experience
    experience: {
      sectionNumber: "01.",
      sectionTitle: "Experience",
      viewResume: "View full resume",
      present: "Present",
      jobs: [
        {
          period: "2026 — Present",
          title: "Full Stack Developer",
          company: "Freelancer",
          companyUrl: "#",
          description:
            "Full Stack developer with solid experience in the design, development, and deployment of web applications using a wide range of programming languages and technologies. Able to work on both frontend and backend, ensuring efficient, scalable solutions aligned with best development practices.",
        },
        {
          period: "2024 — 2026",
          title: "Junior Developer",
          company: "MA Designs",
          companyUrl: "https://www.agenciamadesigns.com/inicio",
          description:
            "Responsible for the design and development of websites, managing both frontend and backend comprehensively. In charge of creating attractive and functional interfaces, as well as implementing the logic and structure needed to ensure optimal performance and an efficient user experience.",
        },
      ],
    },
    // Projects
    projects: {
      sectionNumber: "02.",
      sectionTitle: "Featured Projects",
      featuredLabel: "Featured Project",
      otherTitle: "Other Projects",
      githubLabel: "View code on GitHub",
      liveLabel: "View live project",
      viewDesign: "View Figma design",
      caseStudyLabel: "View details",
      caseStudyDefault: "Problem → process → design → development → result.",
      featured: [
        {
          title: "Full Stack Portfolio on GitHub",
          description:
            "Personal project published on GitHub with modern architecture, reusable components, and a responsive experience focused on presenting digital work professionally.",
        },
        {
          title: "Figma Design System",
          description:
            "Figma interface design with components, styles, and interactive prototypes for building consistent, scalable digital products.",
        },
        {
          title: "Corporate Landing Page",
          description:
            "Conversion-focused corporate website with clear visual hierarchy, intuitive navigation, and a refined identity for professional brands.",
        },
      ],
      other: [
        {
          title: "Analytics Dashboard",
          description:
            "Web interface for visualizing business metrics through cards, tables, and responsive charts.",
        },
        {
          title: "SaaS Landing Page",
          description: "Minimalist website for presenting a digital product and its benefits.",
        },
        {
          title: "Figma UI Kit",
          description: "Collection of reusable components and screens to speed up product design.",
        },
        {
          title: "Agency Website",
          description:
            "Elegant website for a creative agency with services, projects, and contact sections.",
        },
      ],
    },
    // Skills
    skills: {
      sectionNumber: "03.",
      sectionTitle: "Skills",
      categories: [
        { title: "Frontend" },
{ title: "Product design" },
  { title: "Web development" },
  { title: "Tools" },
      ],
    },
    // Contact
    contact: {
      sectionNumber: "04.",
      preTitle: "04. What's next?",
      title: "Let's Talk",
      description:
        "I am currently open to new opportunities and my inbox is always available. Whether you have a question, a project proposal, or just want to say hi, I will do my best to get back to you.",
      cta: "Send Email",
    },
    // Footer
    footer: {
      builtBy: "Designed & Built by",
    },
  },
}

type Translations = typeof translations.es

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
