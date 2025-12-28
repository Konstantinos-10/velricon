'use client'

import { motion } from 'framer-motion'

/**
 * HeroVisualPlaceholder Component
 * 
 * This is a placeholder container for a future 3D interactive component.
 * It will be replaced with a WebGL/Three.js implementation that allows
 * users to interactively select and explore different service offerings.
 * 
 * The container is designed to:
 * - Maintain proper layout and spacing
 * - Be visually balanced with the hero content
 * - Be easily replaceable without affecting the layout structure
 */
export function HeroVisualPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-3xl border-2 border-strategy-blue/20 bg-gradient-to-br from-elevation-layer via-deep-void to-elevation-layer overflow-hidden"
    >
      {/* Subtle animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(116, 179, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(116, 179, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(116, 179, 255, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
      />
      
      {/* Placeholder content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-strategy-blue/20 border-2 border-strategy-blue/40 flex items-center justify-center">
            <svg className="w-12 h-12 text-strategy-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p className="text-slate text-sm font-body px-4">
            Interactive service selection<br />coming soon
          </p>
        </div>
      </div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-3xl border border-strategy-blue/10 pointer-events-none" />
    </motion.div>
  )
}

