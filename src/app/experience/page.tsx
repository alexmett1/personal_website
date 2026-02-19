import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience — Alex Mettenheimer",
}

const roles = [
  {
    title: "Sales Development Representative",
    company: "B2B SaaS",
    period: "2023 — Present",
    highlights: [
      "108% quota attainment — consistently exceeding targets",
      "$20,000+ quarterly MRR generated through outbound pipeline",
      "Full sales cycle ownership from prospecting through close",
      "Technical discovery with IT and security stakeholders",
      "Close collaboration with sales engineers on solution design",
    ],
  },
  {
    title: "Expanding into AI & Technical Systems",
    company: "Self-directed",
    period: "2024 — Present",
    highlights: [
      "Built 5 web applications to explore AI APIs, prompt engineering, and modern frameworks",
      "Hands-on experience with Next.js, React, TypeScript, OpenAI API, and Stripe",
      "Learning full-stack development to bridge sales and technical product understanding",
      "Exploring automation workflows and AI-assisted tooling",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-muted-foreground mb-16 text-lg">
          Sales career with a growing technical edge.
        </p>

        <div className="space-y-12">
          {roles.map((role, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-border hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-border border-2 border-background" />
              <p className="text-xs text-muted-foreground font-mono mb-1">{role.period}</p>
              <h2 className="text-xl font-semibold">{role.title}</h2>
              <p className="text-sm text-primary mb-3">{role.company}</p>
              <ul className="space-y-2">
                {role.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">—</span>
                    {h}
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
