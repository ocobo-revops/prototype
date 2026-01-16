import React from 'react'
import { Section } from './section'
import { Container } from '../container'

export interface FeatureSectionProps {
  /** Background theme for the section (default: 'light') */
  background?: 'dark' | 'light'
  /** Enable decorative blob elements (default: false) */
  withBlobs?: boolean
  /** Section content */
  children: React.ReactNode
  /** Additional classes applied to the Container component */
  className?: string
  /** Accessible label for the section */
  'aria-label'?: string
}

// Map FeatureSection background to Section background
const backgroundMap = {
  dark: 'dark',
  light: 'white',
} as const

export function FeatureSection({
  background = 'light',
  withBlobs = false,
  children,
  className = '',
  'aria-label': ariaLabel,
}: FeatureSectionProps) {
  const sectionBackground = backgroundMap[background]

  return (
    <Section spacing="lg" background={sectionBackground} aria-label={ariaLabel} className="relative">
      {withBlobs && (
        <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
          {/* Top-right blob */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-ocobo-yellow opacity-20 rounded-full blur-3xl"
          />
          {/* Bottom-left blob */}
          <div 
            className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-ocobo-mint opacity-20 rounded-full blur-3xl"
          />
        </div>
      )}
      <Container size="lg" className={className}>
        {children}
      </Container>
    </Section>
  )
}
