import { Sparkles } from "lucide-react"

export function IntroCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-800/50 p-6 transition-all hover:border-zinc-700">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-3xl transition-all group-hover:from-indigo-500/30 group-hover:to-cyan-500/30" />
      <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 blur-3xl transition-all group-hover:from-emerald-500/20 group-hover:to-cyan-500/20" />
      
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-500/30">
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </div>
            <span className="text-sm text-muted-foreground">Graphic Designer</span>
          </div>
          
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Bill</span>
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            I craft beautiful visual experiences through thoughtful design. 
            Passionate about creating work that stands out and makes an impact.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Photoshop", "Illustrator", "Figma", "After Effects", "Branding"].map((skill) => (
            <span 
              key={skill}
              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
