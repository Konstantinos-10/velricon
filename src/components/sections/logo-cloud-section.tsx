"use client"

import { motion } from "framer-motion"
import { LogoCloud } from "@/components/ui/logo-cloud-3"

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

export function LogoCloudSection() {
  const gridStyles = `
    @keyframes grid-draw-dark {
      0% { stroke-dashoffset: 1000; opacity: 0; }
      50% { opacity: 0.3; }
      100% { stroke-dashoffset: 0; opacity: 0.15; }
    }
    .grid-line-dark {
      stroke: #64748B;
      stroke-width: 0.5;
      opacity: 0;
      stroke-dasharray: 5 5;
      stroke-dashoffset: 1000;
      animation: grid-draw-dark 2s ease-out forwards;
    }
    .detail-dot-dark {
      fill: #94A3B8;
      opacity: 0;
      animation: pulse-glow-dark 3s ease-in-out infinite;
    }
    @keyframes pulse-glow-dark {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.1); }
    }
  `

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0E101A' }}>
      <style>{gridStyles}</style>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94A3B8 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="gridLogoCloud" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridLogoCloud)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark" style={{ animationDelay: "0.1s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark" style={{ animationDelay: "0.2s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark" style={{ animationDelay: "0.3s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark" style={{ animationDelay: "0.4s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-dark" style={{ animationDelay: "0.5s", opacity: "0.05" }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-dark" style={{ animationDelay: "0.6s", opacity: "0.05" }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: "0.7s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: "0.8s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: "0.9s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: "1s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot-dark" style={{ animationDelay: "1.1s" }} />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-20"
      >
        <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] text-platinum mb-4">
          <span className="text-electric-blue">Businesses</span> we've supported
        </h2>
        <p className="text-center text-lg md:text-xl font-light tracking-tight text-platinum/70 mb-8">
          Across different industries, stages, and financial situations.
        </p>
        <LogoCloud logos={logos} />
      </motion.div>
    </section>
  )
}
