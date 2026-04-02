"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electronico completa con carrito de compras, pagos con Stripe, panel de administracion y gestion de inventario. Incluye autenticacion de usuarios y dashboard analitico.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://adrixc27.github.io/Pagina/gato.html",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    description: "Aplicacion de gestion de tareas con drag and drop, colaboracion en tiempo real, notificaciones y organizacion por proyectos. Implementa WebSockets para actualizaciones en vivo.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://adrixc27.github.io/Pagina/gato.html",
    image: "/projects/taskapp.jpg",
  },
  {
    title: "AI Content Generator",
    description: "Herramienta de generacion de contenido impulsada por IA que permite crear articulos, posts para redes sociales y descripciones de productos utilizando modelos de lenguaje avanzados.",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase"],
    github: "https://github.com",
    live: "https://adrixc27.github.io/Pagina/gato.html",
    image: "/projects/aigenerator.jpg",
  },
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con pronosticos extendidos, graficos interactivos y geolocalizacion.",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Shop Template",
    description: "Template de tienda minimalista y responsive para desarrolladores.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "URL Shortener",
    description: "Acortador de URLs con analiticas, QR codes y enlaces personalizados.",
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Aplicacion de chat en tiempo real con salas, mensajes privados y compartir archivos.",
    technologies: ["Socket.io", "React", "Node.js", "AWS S3"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description: "Rastreador de gastos personales con categorias, graficos y exportacion de datos.",
    technologies: ["React Native", "Firebase", "Expo"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "API REST Starter",
    description: "Boilerplate para APIs REST con autenticacion JWT, validacion y documentacion.",
    technologies: ["Node.js", "Express", "Swagger", "Jest"],
    github: "https://github.com",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">02.</span>
          Proyectos Destacados
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-primary font-mono text-sm mb-2">Proyecto Destacado</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-muted-foreground text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Ver codigo en GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Ver proyecto en vivo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative aspect-video bg-card rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-8">
          Otros Proyectos
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver codigo en GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  {project.live !== "#" && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver proyecto en vivo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>

              <h4 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-muted-foreground text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
