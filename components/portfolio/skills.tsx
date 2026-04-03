"use client"

import { useLanguage } from "@/lib/language-context"

const skillsByCategory = [
  ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  ["Node.js", "Python", "PostgreSQL & MySQL", "MongoDB", "Lua"],
  ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  ["REST APIs", "GraphQL", "Testing", "Scrum", "Figma", "UI/UX", "IA Tools"],
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">{t.skills.sectionNumber}</span>
          {t.skills.sectionTitle}
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {t.skills.categories.map((category, index) => (
            <div key={category.title}>
              <h3 className="text-foreground font-medium mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {skillsByCategory[index]?.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                    <span className="font-mono text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
