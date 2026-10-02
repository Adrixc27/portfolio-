"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const jobTechnologies = [
  ["React", "TypeScript", "Node.js", "PostgreSQL", "Python"],
  ["HTML", "CSS", "JavaScript", "React", "Git"],
]

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">{t.experience.sectionNumber}</span>
          {t.experience.sectionTitle}
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="space-y-8">
          {t.experience.jobs.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <p className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </p>

              <div>
                <h3 className="text-foreground font-medium mb-1">
                  {exp.title} &middot;{" "}
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
                  {jobTechnologies[index]?.map((tech) => (
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

      </div>
    </section>
  )
}
