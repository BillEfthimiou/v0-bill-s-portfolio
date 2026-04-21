import { Briefcase, Clock, MapPin } from "lucide-react"

export function AvailabilityCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />
      
      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
            <Briefcase className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Work Availability</h3>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-sm text-emerald-400">Available for work</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-zinc-800/50 p-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Full-time & Freelance</p>
              <p className="text-xs text-muted-foreground">Open to both opportunities</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 rounded-xl bg-zinc-800/50 p-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">Remote / Hybrid</p>
              <p className="text-xs text-muted-foreground">Based in Your City</p>
            </div>
          </div>
        </div>

        <a 
          href="mailto:your@email.com" 
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/20 py-2.5 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/30"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}
