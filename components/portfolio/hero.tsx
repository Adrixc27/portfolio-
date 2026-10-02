"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <p className="text-primary font-mono text-sm mb-4">
              {t.hero.greeting}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Adrian Mendoza
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-8 text-balance">
              {t.hero.tagline}
            </h2>

            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              {t.hero.description.split(t.hero.descriptionHighlight).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-primary font-medium">{t.hero.descriptionHighlight}</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </div>

          {/* Sección de foto */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-card to-card/80 border border-primary/30 rounded-lg flex items-center justify-center overflow-hidden group">
                <img
                  src="/profile-photo.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover object-[center_42%] scale-[0.84] group-hover:scale-[0.88] transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23334155" width="400" height="400"/%3E%3Ccircle cx="200" cy="130" r="50" fill="%2364748b"/%3E%3Cpath d="M100 250 Q100 200 200 200Q300 200 300 250L300 350Q200 400 100 350Z" fill="%2364748b"/%3E%3C/svg%3E'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            {t.hero.cta}
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            {t.hero.ctaContact}
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
