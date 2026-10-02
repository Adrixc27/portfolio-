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
            "Desarrollador Web con solida experiencia en el diseño, desarrollo e implementacion de aplicaciones web, utilizando una amplia variedad de lenguajes y tecnologias de programacion. Capaz de trabajar tanto en el frontend como en el backend, asegurando soluciones eficientes, escalables y orientadas a las mejores practicas de desarrollo.",
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
            "Aplicación de transporte público diseñada para ayudar a los usuarios a encontrar rutas de autobús según su origen, destino y preferencias. Busca simplificar la elección de recorridos, identificar paradas y comprender transbordos mediante recomendaciones claras y personalizadas",
        },
        {
          title: "Diseño web para un ERP (Enterprise Resource Planning)",
          description:
            "Diseño de una plataforma ERP enfocada en centralizar y simplificar la gestión de diferentes áreas de una empresa, con una interfaz clara, organizada y fácil de navegar",
        },
      ],
      other: [
        {
          title: "Outdoor Experience Website",
          description: "Diseño y desarrollo de un sitio web para una empresa de cacería en Sonora, enfocado en presentar sus servicios, experiencia y destinos mediante una interfaz visual, clara y responsive",
        },
        {
          title: "Diseño E-commerce ",
          description: "Diseño y desarrollo de una tienda en línea enfocada en ofrecer una experiencia de compra intuitiva y visualmente atractiva, con navegación por categorías, organización de productos y una interfaz adaptable a diferentes dispositivos",
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
      tagline: "Web Designer & Developer",
      description:
        "I am a web developer focused on creating modern, functional, and visually engaging websites and digital experiences. I combine interface design with frontend development to build intuitive products with a distinctive visual identity.",
      descriptionHighlight: "interface design and frontend development",
      cta: "View Project",
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
          title: "Web Designer & Developer",
          company: "Freelancer",
          companyUrl: "#",
          description:
            "I design and build modern web experiences from concept to implementation, combining clear interfaces, responsive layouts, and maintainable frontend development to solve real communication and usability needs.",
        },
        {
          period: "2024 — 2026",
          title: "Junior Developer",
          company: "MA Designs",
          companyUrl: "https://www.agenciamadesigns.com/inicio",
          description:
            "I designed and developed websites across frontend and backend, creating attractive, functional interfaces and implementing the structure needed for reliable performance and an efficient user experience.",
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
          title: "R.U.T.A. App",
          description:
            "Public transportation app designed to help people find bus routes by origin, destination, and preferences, making stops and transfers easier to understand.",
        },
        {
          title: "ERP Web Design",
          description:
            "ERP platform interface designed to centralize business operations with a clear, organized, and easy-to-navigate experience.",
        },
      ],
      other: [
        {
          title: "Outdoor Experience Website",
          description:
            "Website designed and developed for a hunting company in Sonora, presenting its services, experience, and destinations through a clear responsive interface.",
        },
        {
          title: "E-commerce Design",
          description:
            "Online store designed and developed around an intuitive shopping experience, with category navigation, organized products, and responsive layouts.",
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
        "I am currently open to new opportunities and my inbox is always available. Whether you have a question, a project proposal, or simply want to say hello, I will do my best to get back to you.",
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
