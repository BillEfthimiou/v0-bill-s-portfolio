import { ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    name: "Project Alpha",
    description: "A modern web application built with Next.js",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://example.com/project-alpha",
  },
  {
    name: "Project Beta",
    description: "Full-stack e-commerce platform",
    tech: ["React", "Node.js", "PostgreSQL"],
    href: "https://example.com/project-beta",
  },
  {
    name: "Project Gamma",
    description: "Real-time collaboration tool",
    tech: ["Vue.js", "Socket.io", "Redis"],
    href: "https://example.com/project-gamma",
  },
]

export function PortfolioCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all group-hover:bg-amber-500/20" />
      
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <Folder className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-foreground">Portfolio</h3>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid gap-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/project flex items-start gap-3 rounded-xl bg-zinc-800/50 p-3 transition-colors hover:bg-zinc-800"
            >
              <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground group-hover/project:text-amber-400 transition-colors">
                  {project.name}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {project.description}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="rounded-full bg-zinc-700/50 px-2 py-0.5 text-[10px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
