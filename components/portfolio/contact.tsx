"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/tuusuario", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/tuusuario", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/tuusuario", icon: Twitter, label: "Twitter" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">04. Y ahora?</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Hablemos
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Actualmente estoy abierto a nuevas oportunidades y mi inbox siempre esta disponible. 
          Ya sea que tengas una pregunta, una propuesta de proyecto, o simplemente quieras saludar, 
          hare todo lo posible por responderte.
        </p>
        
        <Link
          href="mailto:tu@email.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity text-lg"
        >
          <Mail className="h-5 w-5" />
          Enviar Email
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
