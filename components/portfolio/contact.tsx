"use client"

import Link from "next/link"
import { Mail, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { href: "https://github.com/Adrixc27", icon: Github, label: "GitHub" },
  { href: "mailto:adrimend0407@gmail.com", icon: Mail, label: "adrimend0407@gmail.com" },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">{t.contact.preTitle}</p>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          {t.contact.title}
        </h2>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          {t.contact.description}
        </p>

        <Link
          href="mailto:adrimend0407@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity text-lg"
        >
          <Mail className="h-5 w-5" />
          {t.contact.cta}
        </Link>

        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
