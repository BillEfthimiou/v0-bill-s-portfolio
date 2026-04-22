"use client"

import { useState } from "react"
import { ExternalLink, Palette, PenTool, Image, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    name: "Logos",
    count: 12,
    icon: PenTool,
    color: "bg-amber-500/20 text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
    // 👇 Add your image URLs here for this category
    images: [
      // { src: "/work/logos/logo1.png", alt: "Logo design 1" },
      // { src: "/work/logos/logo2.png", alt: "Logo design 2" },
    ],
  },
  {
    name: "Social Media",
    count: 25,
    icon: Image,
    color: "bg-pink-500/20 text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
    accentText: "text-pink-400",
    // 👇 Add your image URLs here for this category
    images: [
      // { src: "/work/social/post1.png", alt: "Social media post 1" },
    ],
  },
  {
    name: "Thumbnails",
    count: 18,
    icon: Sparkles,
    color: "bg-cyan-500/20 text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    accentText: "text-cyan-400",
    // 👇 Add your image URLs here for this category
    images: [
      // { src: "/work/thumbnails/thumb1.png", alt: "Thumbnail 1" },
    ],
  },
  {
    name: "Brand Kits",
    count: 6,
    icon: Palette,
    color: "bg-emerald-500/20 text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    accentText: "text-emerald-400",
    // 👇 Add your image URLs here for this category
    images: [
      // { src: "/work/brands/brand1.png", alt: "Brand kit 1" },
    ],
  },
]

type Category = (typeof categories)[number]

function PortfolioDialog({
  category,
  onClose,
}: {
  category: Category
  onClose: () => void
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const Icon = category.icon
  const hasImages = category.images.length > 0

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + category.images.length) % category.images.length : null))
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % category.images.length : null))

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={`relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl border ${category.accentBorder} bg-zinc-900 shadow-2xl flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b border-zinc-800`}>
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.accentBg}`}>
                <Icon className={`h-5 w-5 ${category.accentText}`} />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">{category.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {hasImages ? `${category.images.length} piece${category.images.length !== 1 ? "s" : ""}` : "No images yet"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-800 text-muted-foreground transition-colors hover:bg-zinc-700 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 flex-1">
            {hasImages ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="group aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800/50 transition-all hover:border-zinc-600 hover:scale-[1.02]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            ) : (
              // Empty state — shown until you add images
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.accentBg}`}>
                  <Icon className={`h-8 w-8 ${category.accentText}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">No work added yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add image paths to the <code className="rounded bg-zinc-800 px-1 py-0.5 text-xs">{category.name.toLowerCase()}</code> array in{" "}
                    <code className="rounded bg-zinc-800 px-1 py-0.5 text-xs">portfolio-card.tsx</code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-white transition hover:bg-zinc-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <img
            src={category.images[lightboxIndex].src}
            alt={category.images[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-white transition hover:bg-zinc-700"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/80 text-white transition hover:bg-zinc-700"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="absolute bottom-4 text-sm text-zinc-400">
            {lightboxIndex + 1} / {category.images.length}
          </p>
        </div>
      )}
    </>
  )
}

export function PortfolioCard() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null)

  return (
    <>
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
                <button
                  key={category.name}
                  onClick={() => setOpenCategory(category)}
                  className="group/cat flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-800/50 p-4 transition-all hover:bg-zinc-800 hover:scale-[1.02] text-left"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.color.split(" ")[0]}`}>
                    <Icon className={`h-5 w-5 ${category.color.split(" ")[1]}`} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count}+ designs</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {openCategory && (
        <PortfolioDialog
          category={openCategory}
          onClose={() => setOpenCategory(null)}
        />
      )}
    </>
  )
}
