import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core
        'velricon-navy': '#002857',
        'strategy-blue': '#74B3FF',
        // Surfaces
        'deep-void': '#0E101A',
        'elevation-layer': '#1A1F2E',
        'soft-white': '#F4F6F9',
        // Text
        'white': '#FFFFFF',
        'platinum': '#E2E8F0',
        'slate': '#94A3B8',
        'dark-ink': '#0F172A',
        // Interactive
        'electric-blue': '#3B82F6',
        'blue-hover': '#60A5FA',
        'surface-border': '#1E293B',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        'sans': [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config

