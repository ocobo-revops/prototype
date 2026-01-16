import React from 'react'
import { Section } from './section'
import { Container } from '../container'

export interface HeroSectionProps {
  variant?: 'centered' | 'split' | 'animated'
  background?: 'white' | 'dark'
  children?: React.ReactNode
  className?: string
  'aria-label'?: string
}

const variantClasses = {
  centered: 'flex flex-col items-center text-center gap-6',
  split: 'grid md:grid-cols-2 gap-8 lg:gap-12 items-center',
  animated: 'flex flex-col items-center text-center gap-6 relative z-10',
} as const

// Only need text color for white background (dark bg already has text-white from Section)
const textColorClasses = {
  white: 'text-ocobo-dark',
  dark: '', // Section component already applies text-white for dark background
} as const

export function HeroSection({
  variant = 'centered',
  background = 'white',
  children,
  className = '',
  'aria-label': ariaLabel,
}: HeroSectionProps) {
  const classes = [
    variantClasses[variant],
    textColorClasses[background],
    className
  ].filter(Boolean).join(' ')

  // Decorative blob for animated variant
  const showDecorativeBlob = variant === 'animated'

  return (
    <Section spacing="lg" background={background} aria-label={ariaLabel}>
      <Container size="lg">
        <div className={showDecorativeBlob ? 'relative' : ''}>
          {showDecorativeBlob && (
            <div
              className="absolute inset-0 -z-10 mx-auto w-full max-w-2xl h-64 bg-ocobo-yellow rounded-full blur-3xl opacity-30 shadow-hero"
              aria-hidden="true"
            />
          )}
          <div className={classes}>
            {children}
          </div>
        </div>
      </Container>
    </Section>
  )
}
