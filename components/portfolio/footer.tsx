"use client"

import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { href: "https://github.com/Adrixc27", icon: Github, label: "GitHub" },
  { href: "mailto:adrimend0407@gmail.com", icon: Mail, label: "adrimend0407@gmail.com" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:hidden">
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

          <p className="text-muted-foreground text-sm font-mono text-center">
            {t.footer.builtBy}{" "}
            <Link
              href="https://github.com/Adrixc27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Adrian Mendoza
            </Link>
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
