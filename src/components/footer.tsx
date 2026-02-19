import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  { href: "https://github.com/alexmett1", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/alex-mettenheimer-3332591bb", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:alexjmettenheimer@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Alex Mettenheimer
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
