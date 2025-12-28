import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  background?: 'default' | 'deep-void' | 'elevation-layer' | 'soft-white'
}

export function Section({ 
  children, 
  className = '', 
  containerSize = 'xl',
  background = 'default'
}: SectionProps) {
  const backgrounds = {
    default: '',
    'deep-void': 'bg-deep-void',
    'elevation-layer': 'bg-elevation-layer',
    'soft-white': 'bg-soft-white',
  }
  
  return (
    <section className={`py-16 lg:py-24 ${backgrounds[background]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

