"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4">
          Hola, mi nombre es
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
          Tu Nombre Aqui.
        </h1>
        
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-8 text-balance">
          Construyo experiencias digitales.
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
          Soy un <span className="text-primary font-medium">desarrollador Full Stack</span> especializado 
          en crear aplicaciones web modernas, escalables y con una excelente experiencia de usuario. 
          Actualmente enfocado en construir productos digitales que combinen diseño elegante 
          con ingenieria robusta.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Contactame
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
