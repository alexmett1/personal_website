import type { Metadata } from "next"
import { StarButton } from "@/components/ui/star-button"
import { Github, Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — Alex Mettenheimer",
}

const socials = [
  { href: "mailto:alexjmettenheimer@gmail.com", icon: Mail, label: "Email", detail: "alexjmettenheimer@gmail.com" },
  { href: "https://github.com/alexmett1", icon: Github, label: "GitHub", detail: "github.com/alexmett1" },
  { href: "https://www.linkedin.com/in/alex-mettenheimer-3332591bb", icon: Linkedin, label: "LinkedIn", detail: "linkedin.com/in/alex-mettenheimer" },
]

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Want to connect, collaborate, or just say hi?
        </p>

        <div className="grid gap-4 mb-12">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/30 transition-colors bg-card group"
              >
                <Icon size={20} className="text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.detail}</p>
                </div>
              </a>
            )
          })}
        </div>

        <StarButton href="mailto:alexjmettenheimer@gmail.com">
          Send an Email <Mail size={16} />
        </StarButton>
      </div>
    </section>
  )
}
