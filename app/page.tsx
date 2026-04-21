import { IntroCard } from "@/components/bento/intro-card"
import { DiscordCard } from "@/components/bento/discord-card"
import { AvailabilityCard } from "@/components/bento/availability-card"
import { PositionsCard } from "@/components/bento/positions-card"
import { SocialsCard } from "@/components/bento/socials-card"
import { PortfolioCard } from "@/components/bento/portfolio-card"
import { LogoRain } from "@/components/logo-rain"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <LogoRain />
      <div className="mx-auto max-w-6xl">
        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Intro - Large spanning card */}
          <div className="md:col-span-2 lg:row-span-1">
            <IntroCard />
          </div>

          {/* Discord Status */}
          <div className="lg:row-span-1">
            <DiscordCard />
          </div>

          {/* Work Availability */}
          <div className="md:col-span-1">
            <AvailabilityCard />
          </div>

          {/* Past Positions */}
          <div className="md:col-span-1 lg:col-span-1">
            <PositionsCard />
          </div>

          {/* Socials */}
          <div className="md:col-span-1">
            <SocialsCard />
          </div>

          {/* Portfolio - Wide card */}
          <div className="md:col-span-2 lg:col-span-3">
            <PortfolioCard />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
