"use client"

import { useEffect, useState } from "react"

interface LanyardData {
  discord_user: {
    username: string
    avatar: string
    id: string
    global_name: string
  }
  discord_status: "online" | "idle" | "dnd" | "offline"
  activities: Array<{
    name: string
    state?: string
    details?: string
    type: number
    application_id?: string
    assets?: {
      large_image?: string
      large_text?: string
      small_image?: string
      small_text?: string
    }
  }>
  listening_to_spotify: boolean
  spotify?: {
    song: string
    artist: string
    album_art_url: string
  }
}

const statusColors = {
  online: "bg-emerald-500",
  idle: "bg-amber-500",
  dnd: "bg-red-500",
  offline: "bg-zinc-500",
}

const statusText = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
}

// Replace with your Discord User ID
const DISCORD_USER_ID = "1154058524012322837"

export function DiscordCard() {
  const [data, setData] = useState<LanyardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
        const json = await res.json()
        if (json.success) {
          setData(json.data)
        }
      } catch (error) {
        console.error("Failed to fetch Discord status:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLanyard()
    const interval = setInterval(fetchLanyard, 30000)
    return () => clearInterval(interval)
  }, [])

  const status = data?.discord_status || "offline"
  const activity = data?.activities?.[0]

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all group-hover:bg-indigo-500/20" />

      <div className="relative mb-4 flex items-center gap-3">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
            <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-900 ${statusColors[status]}`} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Discord</h3>
          <p className="text-sm text-muted-foreground">
            {loading ? "Loading..." : statusText[status]}
          </p>
        </div>
      </div>

      <div className="relative space-y-3">
        {activity && !loading && (
          <div className="flex items-center gap-3 rounded-xl bg-zinc-800/50 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20">
              <svg className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground">
                {activity.type === 0 ? "Playing" : activity.type === 2 ? "Listening" : "Activity"}
              </p>
              <p className="text-sm font-medium text-foreground truncate">{activity.name}</p>
              {activity.details && (
                <p className="text-xs text-muted-foreground truncate">{activity.details}</p>
              )}
            </div>
          </div>
        )}

        {data?.listening_to_spotify && data.spotify && (
          <div className="flex items-center gap-3 rounded-xl bg-zinc-800/50 p-3">
            <img
              src={data.spotify.album_art_url}
              alt="Album art"
              className="h-10 w-10 shrink-0 rounded-lg"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Spotify
              </p>
              <p className="text-sm font-medium text-foreground truncate">{data.spotify.song}</p>
              <p className="text-xs text-muted-foreground truncate">{data.spotify.artist}</p>
            </div>
          </div>
        )}

        {!activity && !data?.listening_to_spotify && !loading && (
          <div className="flex items-center gap-3 rounded-xl bg-zinc-800/50 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-700/50">
              <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">No current activity</p>
              <p className="text-xs text-muted-foreground">Probably designing something cool</p>
            </div>
          </div>
        )}

        <a
          href="https://discord.com/users/billefthimiou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-500/20 p-2.5 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-500/30"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Add me on Discord
        </a>
      </div>
    </div>
  )
}
