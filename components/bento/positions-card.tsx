import { Building2 } from "lucide-react"

const positions = [
  {
    role: "Senior Developer",
    company: "Tech Company",
    period: "2023 - Present",
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    current: false,
  },
  {
    role: "Junior Developer",
    company: "Agency Co",
    period: "2019 - 2021",
    current: false,
  },
]

export function PositionsCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" />
      
      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
            <Building2 className="h-5 w-5 text-blue-400" />
          </div>
          <h3 className="font-semibold text-foreground">Past Positions</h3>
        </div>

        <div className="space-y-1">
          {positions.map((position, index) => (
            <div 
              key={index}
              className="relative flex gap-4 py-3"
            >
              <div className="flex flex-col items-center">
                <div className={`h-2.5 w-2.5 rounded-full ${position.current ? 'bg-blue-400' : 'bg-zinc-600'}`} />
                {index !== positions.length - 1 && (
                  <div className="mt-1 h-full w-px bg-zinc-700" />
                )}
              </div>
              <div className="flex-1 -mt-0.5">
                <p className="text-sm font-medium text-foreground">{position.role}</p>
                <p className="text-sm text-muted-foreground">{position.company}</p>
                <p className="text-xs text-zinc-500">{position.period}</p>
              </div>
              {position.current && (
                <span className="self-start rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                  Current
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
