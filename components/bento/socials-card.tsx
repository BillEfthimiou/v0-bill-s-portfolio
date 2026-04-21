import { Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  {
    name: "GitHub",
    handle: "@yourusername",
    href: "https://github.com/yourusername",
    icon: Github,
    color: "bg-zinc-500/20 text-zinc-300 hover:bg-zinc-500/30",
  },
  {
    name: "Twitter",
    handle: "@yourusername",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "bg-sky-500/20 text-sky-400 hover:bg-sky-500/30",
  },
  {
    name: "LinkedIn",
    handle: "Your Name",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
  },
]

export function SocialsCard() {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition-all group-hover:bg-sky-500/20" />
      
      <div className="relative">
        <h3 className="mb-4 font-semibold text-foreground">Connect with me</h3>
        
        <div className="grid gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${social.color}`}
            >
              <social.icon className="h-5 w-5" />
              <div className="flex-1">
                <p className="text-sm font-medium">{social.name}</p>
                <p className="text-xs opacity-70">{social.handle}</p>
              </div>
              <svg className="h-4 w-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
