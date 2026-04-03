"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { href: "https://github.com/Adrixc27", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/adrian-mendoza-1b36b9400/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:tu@email.com", icon: Mail, label: "Email" },
]

const navIds = ["about", "experience", "projects", "contact"] as const

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    contact: t.nav.contact,
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          {"ꨄ"}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navIds.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer"
              >
                {navLabels[id]}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border text-xs font-mono font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Change language"
          >
            <span className={language === "es" ? "text-primary font-bold" : ""}>ES</span>
            <span className="opacity-40">/</span>
            <span className={language === "en" ? "text-primary font-bold" : ""}>EN</span>
          </button>

          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
