"use client"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Otros",
    skills: ["REST APIs", "GraphQL", "Testing", "Agile/Scrum", "Figma", "UI/UX"],
  },
]

export function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">03.</span>
          Habilidades
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-foreground font-medium mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
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
