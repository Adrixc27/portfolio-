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
      tagline: "Construyo experiencias digitales",
      description:
        "Soy un desarrollador Full Stack especializado en crear aplicaciones web modernas, escalables y con una excelente experiencia de usuario. Actualmente enfocado en construir productos digitales que combinen diseño elegante con ingenieria robusta.",
      descriptionHighlight: "desarrollador Full Stack",
      cta: "Ver Proyectos",
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
          title: "Full Stack Developer",
          company: "Freelancer",
          companyUrl: "#",
          description:
            "Desarrollador Full Stack con solida experiencia en el diseno, desarrollo e implementacion de aplicaciones web, utilizando una amplia variedad de lenguajes y tecnologias de programacion. Capaz de trabajar tanto en el frontend como en el backend, asegurando soluciones eficientes, escalables y orientadas a las mejores practicas de desarrollo.",
        },
        {
          period: "2024 — 2026",
          title: "Junior Developer",
          company: "MA Designs",
          companyUrl: "https://www.agenciamadesigns.com/inicio",
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
      githubLabel: "Ver codigo en GitHub",
      liveLabel: "Ver proyecto en vivo",
      featured: [
        {
          title: "E-Commerce Platform",
          description:
            "Plataforma de comercio electronico completa con carrito de compras, pagos con Stripe, panel de administracion y gestion de inventario. Incluye autenticacion de usuarios y dashboard analitico.",
        },
        {
          title: "Task Management App",
          description:
            "Aplicacion de gestion de tareas con drag and drop, colaboracion en tiempo real, notificaciones y organizacion por proyectos. Implementa WebSockets para actualizaciones en vivo.",
        },
        {
          title: "AI Content Generator",
          description:
            "Herramienta de generacion de contenido impulsada por IA que permite crear articulos, posts para redes sociales y descripciones de productos utilizando modelos de lenguaje avanzados.",
        },
      ],
      other: [
        {
          title: "Weather Dashboard",
          description:
            "Dashboard del clima con pronosticos extendidos, graficos interactivos y geolocalizacion.",
        },
        {
          title: "Shop Template",
          description: "Template de tienda minimalista y responsive para desarrolladores.",
        },
        {
          title: "URL Shortener",
          description: "Acortador de URLs con analiticas, QR codes y enlaces personalizados.",
        },
        {
          title: "Chat Application",
          description:
            "Aplicacion de chat en tiempo real con salas, mensajes privados y compartir archivos.",
        },
        {
          title: "Expense Tracker",
          description:
            "Rastreador de gastos personales con categorias, graficos y exportacion de datos.",
        },
        {
          title: "API REST Starter",
          description:
            "Boilerplate para APIs REST con autenticacion JWT, validacion y documentacion.",
        },
      ],
    },
    // Skills
    skills: {
      sectionNumber: "03.",
      sectionTitle: "Habilidades",
      categories: [
        { title: "Frontend" },
        { title: "Backend" },
        { title: "DevOps & Herramientas" },
        { title: "Otros" },
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
      featured: [
        {
          title: "E-Commerce Platform",
          description:
            "Full-featured e-commerce platform with shopping cart, Stripe payments, admin dashboard, and inventory management. Includes user authentication and an analytics dashboard.",
        },
        {
          title: "Task Management App",
          description:
            "Task management application with drag and drop, real-time collaboration, notifications, and project organization. Implements WebSockets for live updates.",
        },
        {
          title: "AI Content Generator",
          description:
            "AI-powered content generation tool that lets you create articles, social media posts, and product descriptions using advanced language models.",
        },
      ],
      other: [
        {
          title: "Weather Dashboard",
          description:
            "Weather dashboard with extended forecasts, interactive charts, and geolocation.",
        },
        {
          title: "Shop Template",
          description: "Minimalist, responsive shop template for developers.",
        },
        {
          title: "URL Shortener",
          description: "URL shortener with analytics, QR codes, and custom links.",
        },
        {
          title: "Chat Application",
          description:
            "Real-time chat application with rooms, private messages, and file sharing.",
        },
        {
          title: "Expense Tracker",
          description:
            "Personal expense tracker with categories, charts, and data export.",
        },
        {
          title: "API REST Starter",
          description:
            "Boilerplate for REST APIs with JWT authentication, validation, and documentation.",
        },
      ],
    },
    // Skills
    skills: {
      sectionNumber: "03.",
      sectionTitle: "Skills",
      categories: [
        { title: "Frontend" },
        { title: "Backend" },
        { title: "DevOps & Tools" },
        { title: "Other" },
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
