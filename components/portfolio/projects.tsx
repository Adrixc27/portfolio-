"use client"

import { ArrowUpRight, Github, ExternalLink, Figma } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

type ProjectMeta = {
  technologies: string[]
  live: string
  kind: string
  /** Ruta local en /public o URL externa para personalizar la portada del proyecto. */
  image?: string
  imageAlt?: string
  github?: string
}

const featuredMeta: ProjectMeta[] = [
  { technologies: ["C#", "WPF"], github: "https://github.com/Adrixc27/Ruta-App", live: "https://github.com/Adrixc27/Ruta-App", kind: "code", image: "/projects/ruta.png", imageAlt: "Interfaz de la aplicación R.U.T.A para planificar rutas de transporte público" },
  { technologies: ["Figma", "UI Design", "Prototyping"], live: "https://www.figma.com/design/aaU3ToSaBldVbi8UxRK9G6/Sin-t%C3%ADtulo?node-id=0-1&t=hJC4yl4PtqZoLpVg-1", kind: "figma", image: "/projects/erp.png", imageAlt: "Dashboard de gestión empresarial ERP" },
  { technologies: ["Figma", "UX Strategy", "Art Direction"], live: "https://www.figma.com/community", kind: "enjambre" },
]

const otherMeta: ProjectMeta[] = [
  { technologies: ["HTML", "CSS", "JavaScript"], live: "https://gutierrezoutfitter.com", kind: "web", image: "/projects/outdoor.png", imageAlt: "Página web de Outdoor Experience en un paisaje natural" },
  { technologies: ["Figma", "Auto Layout"], live: "https://www.figma.com/design/nHOTClJPBJuBGpEDvpaCfw/Sin-t%C3%ADtulo?node-id=6-67&t=hJC4yl4PtqZoLpVg-1", kind: "figma", image: "/projects/ecommerce.png", imageAlt: "Diseño de tienda e-commerce para productos profesionales" },
  { technologies: ["React", "Responsive UI", "Web Design"], live: "https://adrixc27.github.io/Pagina/gato.html", kind: "web" },
  { technologies: ["Figma", "UX Flow", "Prototyping"], live: "https://www.figma.com/community", kind: "figma" },
]

function ProjectVisual({ kind, image, imageAlt, compact = false }: { kind: string; image?: string; imageAlt?: string; compact?: boolean }) {
  if (image) return <img src={image} alt={imageAlt ?? "Vista previa del proyecto"} className="h-full w-full object-cover" />
  if (kind === "figma") return <div className="h-full w-full bg-[#e9e5dc] p-5 text-[#1d2530]"><div className="flex gap-2 mb-5"><span className="h-2 w-2 rounded-full bg-[#f24e1e]" /><span className="h-2 w-2 rounded-full bg-[#ff7262]" /><span className="h-2 w-2 rounded-full bg-[#a259ff]" /></div><div className="grid grid-cols-[0.7fr_1.3fr] gap-3 h-[75%]"><div className="rounded bg-[#d5d0c5] p-3 space-y-2"><div className="h-2 w-3/4 bg-[#1d2530]/30 rounded" /><div className="h-2 w-1/2 bg-[#1d2530]/20 rounded" /><div className="h-2 w-2/3 bg-[#1d2530]/20 rounded" /></div><div className="rounded bg-white p-4"><div className="h-3 w-1/2 bg-[#1d2530] rounded mb-4" /><div className="h-16 bg-[#d8e0ea] rounded mb-3" /><div className="flex gap-2"><div className="h-10 flex-1 bg-[#a7b8c9] rounded" /><div className="h-10 flex-1 bg-[#e9b949]/60 rounded" /></div></div></div></div>
  if (kind === "enjambre") return <div className="h-full w-full bg-[#16242a] p-6 text-[#e8efe9]"><div className="flex justify-between items-center mb-8"><span className="font-serif text-lg">enjambre</span><span className="text-[9px] uppercase tracking-[.25em] opacity-60">concepto / no oficial</span></div><div className="max-w-xs"><p className="text-xs uppercase tracking-[.2em] text-[#b7c9a8] mb-3">Diseño que conecta</p><div className="font-serif text-3xl leading-tight">Las ideas también necesitan espacio para crecer.</div><div className="mt-5 h-1 w-20 bg-[#b7c9a8]" /></div><div className="absolute bottom-5 right-6 text-4xl opacity-30">✳</div></div>
  if (kind === "web") return <div className="h-full w-full bg-[#d9e3ea] p-5 text-[#14202b]"><div className="flex justify-between text-[9px] uppercase tracking-widest mb-8"><span>studio / digital</span><span>menu</span></div><div className="h-2 w-2/3 bg-[#14202b] rounded mb-3" /><div className="h-2 w-1/2 bg-[#14202b]/50 rounded mb-8" /><div className="grid grid-cols-3 gap-2"><div className="h-20 bg-[#8da8b8] rounded" /><div className="h-20 bg-[#b7c5c3] rounded" /><div className="h-20 bg-[#5c7482] rounded" /></div></div>
  return <div className="h-full w-full bg-[#101923] p-5 text-[#d9e3ea]"><div className="flex gap-2 mb-8"><span className="h-2 w-2 rounded-full bg-[#4c8dff]" /><span className="h-2 w-2 rounded-full bg-white/20" /></div><div className="h-3 w-2/3 bg-white/80 rounded mb-3" /><div className="h-2 w-1/2 bg-white/30 rounded mb-8" /><div className="grid grid-cols-3 gap-2"><div className="h-20 bg-[#1d3347] rounded" /><div className="h-20 bg-[#254d68] rounded" /><div className="h-20 bg-[#183044] rounded" /></div></div>
}

export function Projects() {
  const { t } = useLanguage()
  return <section id="projects" className="py-24 px-6 bg-secondary/30"><div className="container mx-auto max-w-6xl">
    <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4"><span className="text-primary font-mono text-lg">{t.projects.sectionNumber}</span>{t.projects.sectionTitle}<span className="h-px bg-border flex-1 max-w-xs" /></h2>
    <div className="space-y-20 mb-24">{t.projects.featured.map((project, index) => { const meta = featuredMeta[index]; return <article key={project.title} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className={`relative aspect-[16/10] rounded-xl overflow-hidden border border-border shadow-2xl ${index % 2 ? "lg:order-2" : ""}`}><ProjectVisual kind={meta.kind} image={meta.image} imageAlt={meta.imageAlt ?? project.title} /><div className="absolute inset-0 ring-1 ring-inset ring-white/10" /></div>
      <div className={index % 2 ? "lg:order-1" : ""}><p className="text-primary font-mono text-xs uppercase tracking-[.2em] mb-3">{t.projects.featuredLabel}</p><h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3><p className="text-muted-foreground leading-relaxed mb-5">{project.description}</p><p className="text-sm text-foreground/80 border-l-2 border-primary pl-4 mb-6">{(project as { caseStudy?: string }).caseStudy ?? t.projects.caseStudyDefault}</p><div className="flex flex-wrap gap-2 mb-6">{meta.technologies.map((tech) => <span key={tech} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">{tech}</span>)}</div><div className="flex gap-5">{meta.kind === "code" ? <Link href={meta.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"><Github className="h-4 w-4" />{t.projects.githubLabel}</Link> : <Link href={meta.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"><Figma className="h-4 w-4" />{t.projects.viewDesign}</Link>}<Link href={meta.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowUpRight className="h-4 w-4" />{t.projects.caseStudyLabel}</Link></div></div>
    </article>})}</div>
    <h3 className="text-xl font-bold text-foreground text-center mb-8">{t.projects.otherTitle}</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{t.projects.other.map((project, index) => { const meta = otherMeta[index]; return <article key={project.title} className="group overflow-hidden rounded-xl border border-border bg-card hover:-translate-y-1 transition-transform"><div className="h-40 overflow-hidden"><ProjectVisual kind={meta.kind} image={meta.image} imageAlt={meta.imageAlt ?? project.title} compact /></div><div className="p-5"><div className="flex items-center justify-between mb-4"><span className="text-xs uppercase tracking-wider text-primary font-mono">{meta.kind === "figma" ? "Figma" : "Web"}</span><Link href={meta.live} target="_blank" rel="noopener noreferrer" aria-label={t.projects.liveLabel} className="text-muted-foreground hover:text-primary"><ExternalLink className="h-4 w-4" /></Link></div><h4 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h4><p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p><div className="flex flex-wrap gap-2">{meta.technologies.map((tech) => <span key={tech} className="text-muted-foreground text-xs font-mono">{tech}</span>)}</div></div></article>})}</div>
  </div></section>
}

