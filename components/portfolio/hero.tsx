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
                  src="/profile-photo.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"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
