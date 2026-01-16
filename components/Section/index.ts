// Section Component Namespace Export
// Following architecture.md pattern for multi-file components

import { Section as SectionRoot } from './section'
import { HeroSection } from './hero-section'
import { CtaSection } from './cta-section'
import { FeatureSection } from './feature-section'
import { GridSection } from './grid-section'

export const Section = {
  Root: SectionRoot,
  Hero: HeroSection,
  Cta: CtaSection,
  Feature: FeatureSection,
  Grid: GridSection,
}

// Re-export types
export type { SectionProps } from './section'
export type { HeroSectionProps } from './hero-section'
export type { CtaSectionProps } from './cta-section'
export type { FeatureSectionProps } from './feature-section'
export type { GridSectionProps } from './grid-section'
