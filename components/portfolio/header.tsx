"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { id: "about", label: "Sobre Mi" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
]

const socialLinks = [
  { href: "https://github.com/Adrixc27", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/adrian-mendoza-1b36b9400/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:tu@email.com", icon: Mail, label: "Email" },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Header() {
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
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
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
