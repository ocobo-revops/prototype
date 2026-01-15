// Section Component Namespace Export
// Following architecture.md pattern for multi-file components

import { Section as SectionRoot } from './section'
import { HeroSection } from './hero-section'
import { CtaSection } from './cta-section'

export const Section = {
  Root: SectionRoot,
  Hero: HeroSection,
  Cta: CtaSection,
}

// Re-export types
export type { SectionProps } from './section'
export type { HeroSectionProps } from './hero-section'
export type { CtaSectionProps } from './cta-section'
