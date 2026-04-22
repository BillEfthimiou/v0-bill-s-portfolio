import { ExternalLink, Palette, PenTool, Image, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Logos",
    count: 12,
    icon: PenTool,
    color: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "Social Media",
    count: 25,
    icon: Image,
    color: "bg-pink-500/20 text-pink-400",
  },
  {
    name: "Thumbnails",
    count: 18,
    icon: Sparkles,
    color: "bg-cyan-500/20 text-cyan-400",
  },
  {
    name: "Brand Kits",
    count: 6,
    icon: Palette,
    color: "bg-emerald-500/20 text-emerald-400",
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
              <Palette className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-foreground">My Work</h3>
          </div>
          <a 
            href="https://behance.net/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.name}
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cat flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-800/50 p-4 transition-all hover:bg-zinc-800 hover:scale-[1.02]"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.color.split(' ')[0]}`}>
                  <Icon className={`h-5 w-5 ${category.color.split(' ')[1]}`} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count}+ designs</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
