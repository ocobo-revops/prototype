import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureSection } from './feature-section'

describe('FeatureSection', () => {
  describe('AC1: FeatureSection Backgrounds', () => {
    it('renders with light background by default', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section).toBeTruthy()
      expect(section?.className).toContain('bg-white')
    })

    it('renders with dark background when specified', () => {
      const { container } = render(
        <FeatureSection background="dark">
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-dark')
      expect(section?.className).toContain('text-white')
    })

    it('renders with light background explicitly', () => {
      const { container } = render(
        <FeatureSection background="light">
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-white')
    })

    it('applies correct text color for dark background', () => {
      const { container } = render(
        <FeatureSection background="dark">
          <div>Feature content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('text-white')
    })

    it('uses default text color for light background', () => {
      const { container } = render(
        <FeatureSection background="light">
          <div>Feature content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).not.toContain('text-white')
    })

    it('applies dark text color for light background', () => {
      const { container } = render(
        <FeatureSection background="light">
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('text-ocobo-dark')
    })
  })

  describe('AC2: Decorative Blobs Support', () => {
    it('does not render blobs by default', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeFalsy()
    })

    it('renders blobs when withBlobs is true', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeTruthy()
      const blobs = blobContainer?.querySelectorAll('div')
      expect(blobs?.length).toBeGreaterThan(0)
    })

    it('does not render blobs when withBlobs is false', () => {
      const { container } = render(
        <FeatureSection withBlobs={false}>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeFalsy()
    })

    it('renders decorative blobs with correct positioning classes', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeTruthy()
      
      const blobs = blobContainer?.querySelectorAll('div')
      expect(blobs?.length).toBeGreaterThan(0)
      
      // Check at least one blob has absolute positioning
      const hasAbsolutePositioning = Array.from(blobs || []).some(blob =>
        blob.classList.contains('absolute')
      )
      expect(hasAbsolutePositioning).toBe(true)
    })

    it('renders blobs with token-based colors', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      const blobs = blobContainer?.querySelectorAll('div')
      
      // Check at least one blob uses ocobo color tokens
      const hasTokenColors = Array.from(blobs || []).some(blob => {
        const classes = blob.className
        return classes.includes('bg-ocobo-yellow') || 
               classes.includes('bg-ocobo-mint') ||
               classes.includes('bg-ocobo-sky')
      })
      expect(hasTokenColors).toBe(true)
    })

    it('blobs have overflow-hidden container to prevent scroll', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeTruthy()
      expect(blobContainer?.className).toContain('overflow-hidden')
    })

    it('blobs use responsive sizing for mobile-first approach', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      const blobs = blobContainer?.querySelectorAll('div')
      
      // Check at least one blob has responsive classes
      const hasResponsiveClasses = Array.from(blobs || []).some(blob => {
        const classes = blob.className
        return classes.includes('md:w-') && classes.includes('lg:w-')
      })
      expect(hasResponsiveClasses).toBe(true)
    })
  })

  describe('AC3: Card Integration and Composition', () => {
    it('renders children content', () => {
      render(
        <FeatureSection>
          <div data-testid="child-content">Feature content</div>
        </FeatureSection>
      )
      expect(screen.getByTestId('child-content')).toBeTruthy()
      expect(screen.getByText('Feature content')).toBeTruthy()
    })

    it('supports any children via composition', () => {
      render(
        <FeatureSection>
          <h2>Heading</h2>
          <p>Paragraph</p>
          <div>Custom content</div>
        </FeatureSection>
      )
      expect(screen.getByText('Heading')).toBeTruthy()
      expect(screen.getByText('Paragraph')).toBeTruthy()
      expect(screen.getByText('Custom content')).toBeTruthy()
    })

    it('supports complex nested children', () => {
      render(
        <FeatureSection>
          <div className="grid">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
          </div>
        </FeatureSection>
      )
      expect(screen.getByText('Card 1')).toBeTruthy()
      expect(screen.getByText('Card 2')).toBeTruthy()
    })
  })

  describe('AC4: File Structure and TypeScript', () => {
    it('exports FeatureSectionProps interface', () => {
      // Type test - will fail at compile time if interface not exported
      const props: import('./feature-section').FeatureSectionProps = {
        background: 'dark',
        withBlobs: true,
        children: <div>Test</div>
      }
      expect(props).toBeDefined()
    })

    it('has correct background type constraint', () => {
      // This will fail TypeScript compilation if wrong
      render(
        <FeatureSection background="dark">
          <div>Content</div>
        </FeatureSection>
      )
      
      render(
        <FeatureSection background="light">
          <div>Content</div>
        </FeatureSection>
      )
    })
  })

  describe('AC5: Integration with Architecture', () => {
    it('composes with Section component', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section).toBeTruthy()
    })

    it('uses Section spacing classes', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      // Section component adds py-* classes
      expect(section?.className).toMatch(/py-/)
    })

    it('uses Container for width control', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      // Container adds max-w-* classes
      const maxWidthElement = container.querySelector('[class*="max-w-"]')
      expect(maxWidthElement).toBeTruthy()
    })

    it('uses token-based styling only', () => {
      const { container } = render(
        <FeatureSection background="dark" withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      
      const html = container.innerHTML
      // No arbitrary values like [#000000] or arbitrary-[value]
      expect(html).not.toMatch(/\[#[0-9a-fA-F]{3,6}\]/)
      expect(html).not.toMatch(/arbitrary-\[/)
    })

    it('follows mobile-first responsive pattern', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      // Section has responsive padding (px-4 sm:px-6 lg:px-8)
      expect(section?.className).toMatch(/(px-|sm:|lg:)/)
    })

    it('has relative positioning on section for blob containment', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('relative')
    })
  })

  describe('Accessibility', () => {
    it('supports aria-label prop', () => {
      const { container } = render(
        <FeatureSection aria-label="Features section">
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.getAttribute('aria-label')).toBe('Features section')
    })

    it('marks decorative blobs container as aria-hidden', () => {
      const { container } = render(
        <FeatureSection withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const blobContainer = container.querySelector('[aria-hidden="true"]')
      expect(blobContainer).toBeTruthy()
      expect(blobContainer?.getAttribute('aria-hidden')).toBe('true')
    })

    it('uses semantic section element', () => {
      const { container } = render(
        <FeatureSection>
          <div>Content</div>
        </FeatureSection>
      )
      expect(container.querySelector('section')).toBeTruthy()
    })
  })

  describe('Additional Props', () => {
    it('accepts and applies className prop to Container', () => {
      const { container } = render(
        <FeatureSection className="custom-class">
          <div>Content</div>
        </FeatureSection>
      )
      // className should be applied to Container (which has max-w-*)
      const containerElement = container.querySelector('[class*="max-w-"]')
      expect(containerElement?.className).toContain('custom-class')
    })

    it('className is applied to Container not Section', () => {
      const { container } = render(
        <FeatureSection className="custom-class">
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      // Section should have relative but not custom-class
      expect(section?.className).toContain('relative')
      expect(section?.className).not.toContain('custom-class')
    })
  })

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      const { container } = render(
        <FeatureSection>
          <></>
        </FeatureSection>
      )
      expect(container.querySelector('section')).toBeTruthy()
    })

    it('handles null children gracefully', () => {
      const { container } = render(
        <FeatureSection>
          {null}
        </FeatureSection>
      )
      expect(container.querySelector('section')).toBeTruthy()
    })

    it('combines dark background with blobs', () => {
      const { container } = render(
        <FeatureSection background="dark" withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-dark')
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeTruthy()
    })

    it('works with light background and blobs', () => {
      const { container } = render(
        <FeatureSection background="light" withBlobs>
          <div>Content</div>
        </FeatureSection>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-white')
      const blobContainer = container.querySelector('[aria-hidden="true"].absolute.inset-0')
      expect(blobContainer).toBeTruthy()
    })
  })
})
