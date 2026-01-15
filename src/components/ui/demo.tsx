"use client"

import { cn } from "@/lib/utils"
import { LogoCloud } from "@/components/ui/logo-cloud-3"

export default function DemoOne() {
  return (
    <div className="min-h-screen w-full place-content-center">
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="relative mx-auto max-w-3xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by experts.</span>
          <br />
          <span className="font-semibold">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  )
}

const logos = [
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=320&h=80&fit=crop&auto=format",
    alt: "City skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=320&h=80&fit=crop&auto=format",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=320&h=80&fit=crop&auto=format",
    alt: "Forest canopy",
  },
  {
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=320&h=80&fit=crop&auto=format",
    alt: "Minimal architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=320&h=80&fit=crop&auto=format",
    alt: "Nature texture",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=320&h=80&fit=crop&auto=format",
    alt: "Forest light",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=320&h=80&fit=crop&auto=format",
    alt: "Desert ridge",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=320&h=80&fit=crop&auto=format",
    alt: "Snow peaks",
  },
]
