import Image from "next/image"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { AnimatedName } from "@/components/ui/animated-name"
import { HyperText } from "@/components/ui/hyper-text"
import { StarButton } from "@/components/ui/star-button"
import { projects } from "@/lib/projects"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function HomePage() {
  const featured = [...projects].reverse().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <BackgroundPaths>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 m-auto w-32 h-32 bg-[#FF1F3D]/10 rounded-full blur-2xl" />
              <Image
                src="/alex.jpg"
                alt="Alex Mettenheimer"
                width={150}
                height={150}
                className="relative rounded-xl object-cover ring-1 ring-[#FF1F3D]/50 shadow-lg"
              />
            </div>
          </div>
          <AnimatedName className="text-5xl sm:text-7xl font-bold text-foreground">
            Alex Mettenheimer
          </AnimatedName>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            <HyperText className="text-primary font-bold">SALES PROFESSIONAL EXPLORING AI</HyperText>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Sales professional with hands-on experience building AI-powered tools
            to better understand automation, product development, and modern technical workflows.
          </p>
          <p className="text-sm text-muted-foreground">
            Full-cycle B2B sales · Technical discovery · Building AI workflow prototypes
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <StarButton href="/projects" className="hover:shadow-[0_0_30px_rgba(255,31,61,0.25)] transition-shadow">
              View Projects <ArrowRight size={16} />
            </StarButton>
            <StarButton href="/contact" className="hover:shadow-[0_0_30px_rgba(255,31,61,0.25)] transition-shadow">
              Contact <ExternalLink size={16} />
            </StarButton>
          </div>
        </div>
      </BackgroundPaths>

      {/* Section divider */}
      <div
        className="h-px max-w-2xl mx-auto"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,31,61,0.25), transparent)" }}
      />

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground mb-12">
            Recent experiments building AI-powered tools and web applications.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <a
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border rounded-lg p-6 hover:border-primary/30 transition-colors bg-card block"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
