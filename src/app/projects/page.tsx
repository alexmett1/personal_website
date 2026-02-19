import type { Metadata } from "next"
import { projects } from "@/lib/projects"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects — Alex Mettenheimer",
}

export default function ProjectsPage() {
  const displayed = [...projects].reverse()

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground mb-16 text-lg">
          Experiments in AI, automation, and web development.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-all bg-card"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={14} /> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
