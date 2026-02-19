import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Alex Mettenheimer",
}

export default function AboutPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-muted-foreground mb-16 text-lg">
          Sales professional with hands-on AI exploration.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">What I Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sales professional focused on full-cycle B2B sales and technical discovery
              within technical environments. I work closely with IT and security stakeholders
              to understand complex requirements and translate them into actionable solutions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">What I&apos;m Building</h2>
            <p className="text-muted-foreground leading-relaxed">
              I build and experiment with AI-powered tools to deepen my understanding of
              automation, prompt engineering, and applied machine learning in practical
              workflows. These projects are learning exercises that help me bridge the gap
              between sales and technical product development.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">What I&apos;m Learning</h2>
            <ul className="space-y-2">
              {[
                "AI-assisted development",
                "Prompt engineering",
                "Full-stack fundamentals (React, Next.js, TypeScript)",
                "Stripe payment integrations",
                "Database design and data modeling",
              ].map((item) => (
                <li key={item} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
