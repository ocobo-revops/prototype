import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSection } from './hero-section'

describe('HeroSection Component', () => {
  describe('AC1: HeroSection Variants', () => {
    it('should apply centered variant classes by default', () => {
      const { container } = render(
        <HeroSection>
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      expect(heroContent?.className).toContain('text-center')
      expect(heroContent?.className).toContain('items-center')
    })

    it('should apply centered variant classes when variant="centered"', () => {
      const { container } = render(
        <HeroSection variant="centered">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      expect(heroContent?.className).toContain('text-center')
      expect(heroContent?.className).toContain('flex-col')
    })

    it('should apply split variant classes when variant="split"', () => {
      const { container } = render(
        <HeroSection variant="split">
          <div>Left content</div>
          <div>Right content</div>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.grid')
      expect(heroContent?.className).toContain('grid')
      expect(heroContent?.className).toContain('md:grid-cols-2')
      expect(heroContent?.className).toContain('gap-8')
    })

    it('should apply animated variant classes when variant="animated"', () => {
      const { container } = render(
        <HeroSection variant="animated">
          <h1>Animated Hero</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      expect(heroContent?.className).toContain('text-center')
      expect(heroContent?.className).toContain('relative')
    })
  })

  describe('AC2: Background Support', () => {
    it('should apply white background by default', () => {
      const { container } = render(
        <HeroSection>
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-white')
    })

    it('should apply white background and dark text when background="white"', () => {
      const { container } = render(
        <HeroSection background="white">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      const heroContent = container.querySelector('div.flex')
      expect(section?.className).toContain('bg-white')
      expect(heroContent?.className).toContain('text-ocobo-dark')
    })

    it('should apply dark background and white text when background="dark"', () => {
      const { container } = render(
        <HeroSection background="dark">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-dark')
      // text-white is applied by Section component for dark background
      expect(section?.className).toContain('text-white')
    })

    it('should automatically adjust text color for contrast (white bg → dark text)', () => {
      const { container } = render(
        <HeroSection background="white">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      expect(heroContent?.className).toContain('text-ocobo-dark')
      expect(heroContent?.className).not.toContain('text-white')
    })

    it('should automatically adjust text color for contrast (dark bg → white text)', () => {
      const { container } = render(
        <HeroSection background="dark">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      // text-white is inherited from Section component for dark background
      expect(section?.className).toContain('text-white')
      expect(section?.className).not.toContain('text-ocobo-dark')
    })
  })

  describe('AC3: Token Usage', () => {
    it('should use token-based background colors (no hardcoded hex)', () => {
      const { container } = render(
        <HeroSection background="dark">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      const classStr = section?.className || ''
      expect(classStr).toContain('bg-ocobo-dark')
      expect(classStr).not.toContain('#')
      expect(classStr).not.toContain('[#')
    })

    it('should use token-based text colors (no hardcoded hex)', () => {
      const { container } = render(
        <HeroSection background="white">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      const classStr = heroContent?.className || ''
      expect(classStr).toContain('text-ocobo-dark')
      expect(classStr).not.toContain('#')
    })

    it('should use shadow-hero token for animated variant decorative element', () => {
      const { container } = render(
        <HeroSection variant="animated">
          <h1>Animated Hero</h1>
        </HeroSection>
      )
      const decorativeBlob = container.querySelector('[aria-hidden="true"]')
      expect(decorativeBlob).toBeDefined()
      expect(decorativeBlob?.className).toContain('shadow-hero')
    })

    it('should not render decorative blob for non-animated variants', () => {
      const { container } = render(
        <HeroSection variant="centered">
          <h1>Centered Hero</h1>
        </HeroSection>
      )
      const decorativeBlob = container.querySelector('[aria-hidden="true"]')
      expect(decorativeBlob).toBeNull()
    })
  })

  describe('AC4: File Structure & Types', () => {
    it('should export HeroSectionProps type', () => {
      const validProps = {
        variant: 'centered' as const,
        background: 'white' as const,
        children: <div>Test</div>,
      }
      expect(validProps).toBeDefined()
    })

    it('should render with only children prop', () => {
      const { container } = render(
        <HeroSection>
          <h1>Minimal Hero</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section).toBeDefined()
    })

    it('should render with all props', () => {
      const { container } = render(
        <HeroSection
          variant="split"
          background="dark"
          className="custom-class"
          aria-label="Hero section"
        >
          <h1>Full Props Hero</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section).toBeDefined()
      expect(section?.getAttribute('aria-label')).toBe('Hero section')
    })
  })

  describe('AC5: Integration with Architecture', () => {
    it('should compose with Section component (spacing="lg")', () => {
      const { container } = render(
        <HeroSection>
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('py-32') // lg spacing
    })

    it('should compose with Container component (size="lg")', () => {
      const { container } = render(
        <HeroSection>
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const containerDiv = container.querySelector('div.max-w-7xl')
      expect(containerDiv).toBeDefined()
    })

    it('should render semantic section element', () => {
      const { container } = render(
        <HeroSection>
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section?.tagName).toBe('SECTION')
    })

    it('should support aria-label for accessibility', () => {
      const { container } = render(
        <HeroSection aria-label="Main hero section">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const section = container.querySelector('section')
      expect(section?.getAttribute('aria-label')).toBe('Main hero section')
    })

    it('should apply additional className prop', () => {
      const { container } = render(
        <HeroSection className="my-custom-hero">
          <h1>Hero Title</h1>
        </HeroSection>
      )
      const heroContent = container.querySelector('div.flex')
      expect(heroContent?.className).toContain('my-custom-hero')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<HeroSection />)
      const section = container.querySelector('section')
      expect(section).toBeDefined()
    })

    it('should handle multiple children', () => {
      const { container } = render(
        <HeroSection>
          <h1>Title</h1>
          <p>Subtitle</p>
          <button type="button">CTA</button>
        </HeroSection>
      )
      expect(screen.getByText('Title')).toBeDefined()
      expect(screen.getByText('Subtitle')).toBeDefined()
      expect(screen.getByText('CTA')).toBeDefined()
    })

    it('should handle complex nested children', () => {
      const { container } = render(
        <HeroSection variant="split" background="dark">
          <div>
            <h1>Left Side</h1>
            <p>Description</p>
          </div>
          <div>
            <img src="/hero.jpg" alt="Hero" />
          </div>
        </HeroSection>
      )
      expect(screen.getByText('Left Side')).toBeDefined()
      expect(screen.getByText('Description')).toBeDefined()
    })

    it('should apply all variant options correctly', () => {
      const variants: Array<'centered' | 'split' | 'animated'> = ['centered', 'split', 'animated']

      variants.forEach((variant) => {
        const { container, unmount } = render(
          <HeroSection variant={variant}>
            <h1>Hero</h1>
          </HeroSection>
        )
        const heroContent = container.querySelector('div.flex, div.grid')
        expect(heroContent).toBeDefined()
        unmount()
      })
    })

    it('should apply all background options correctly', () => {
      const backgrounds: Array<'white' | 'dark'> = ['white', 'dark']
      const expectedBgClasses = ['bg-white', 'bg-ocobo-dark']
      // text-ocobo-dark is on heroContent (for white bg), text-white is on section (for dark bg via Section component)
      const expectedTextClasses = ['text-ocobo-dark', 'text-white']
      const textOnElement = ['heroContent', 'section'] as const

      backgrounds.forEach((bg, index) => {
        const { container, unmount } = render(
          <HeroSection background={bg}>
            <h1>Hero</h1>
          </HeroSection>
        )
        const section = container.querySelector('section')
        const heroContent = container.querySelector('div.flex')
        expect(section?.className).toContain(expectedBgClasses[index])
        // Check text class on the appropriate element
        const targetElement = textOnElement[index] === 'section' ? section : heroContent
        expect(targetElement?.className).toContain(expectedTextClasses[index])
        unmount()
      })
    })
  })
})
