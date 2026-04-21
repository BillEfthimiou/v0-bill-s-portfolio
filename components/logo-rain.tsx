"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface RainDrop {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function LogoRain() {
  const [drops, setDrops] = useState<RainDrop[]>([])

  useEffect(() => {
    // Generate rain drops with varying properties
    const generateDrops = () => {
      const newDrops: RainDrop[] = []
      const dropCount = 15 // Keep it sparse, not crowded

      for (let i = 0; i < dropCount; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (%)
          size: 20 + Math.random() * 40, // Size between 20-60px
          duration: 8 + Math.random() * 12, // Fall duration 8-20 seconds
          delay: Math.random() * 10, // Stagger start times
          opacity: 0.03 + Math.random() * 0.05, // Very subtle opacity 0.03-0.08
        })
      }

      setDrops(newDrops)
    }

    generateDrops()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute animate-fall"
          style={{
            left: `${drop.x}%`,
            width: drop.size,
            height: drop.size,
            opacity: drop.opacity,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          <Image
            src="/images/be-logo.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  )
}
