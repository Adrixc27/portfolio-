"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2023 — Presente",
    title: "Full Stack Developer",
    company: "Tu Empresa",
    companyUrl: "#",
    description: "Desarrollo y mantenimiento de aplicaciones web utilizando React, Node.js y PostgreSQL. Colaboracion con equipos de diseño para implementar interfaces de usuario accesibles y responsivas.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "Otra Empresa",
    companyUrl: "#",
    description: "Construccion de componentes UI reutilizables y optimizacion del rendimiento de aplicaciones. Implementacion de tests automatizados y mejora de la experiencia de usuario.",
    technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "Jest"],
  },
  {
    period: "2020 — 2021",
    title: "Junior Developer",
    company: "Startup Tech",
    companyUrl: "#",
    description: "Desarrollo de features para aplicaciones web, correccion de bugs y participacion activa en code reviews. Aprendizaje continuo de mejores practicas de desarrollo.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">01.</span>
          Experiencia
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <p className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </p>
              
              <div>
                <h3 className="text-foreground font-medium mb-1">
                  {exp.title} ·{" "}
                  <Link 
                    href={exp.companyUrl}
                    className="text-primary inline-flex items-center gap-1 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/resume.pdf"
          className="mt-12 inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Ver curriculum completo
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
