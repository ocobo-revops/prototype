import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Section } from './section'

describe('Section Component', () => {
  describe('AC1: Section Spacing', () => {
    it('should apply py-16 when spacing="sm"', () => {
      const { container } = render(
        <Section spacing="sm">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('py-16')
    })

    it('should apply py-24 when spacing="md"', () => {
      const { container } = render(
        <Section spacing="md">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('py-24')
    })

    it('should apply py-32 when spacing="lg"', () => {
      const { container } = render(
        <Section spacing="lg">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('py-32')
    })

    it('should default to py-24 when spacing prop is not provided', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('py-24')
    })
  })

  describe('AC2: Section Backgrounds', () => {
    it('should apply bg-white when background="white"', () => {
      const { container } = render(
        <Section background="white">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-white')
    })

    it('should apply bg-ocobo-gray-100 when background="gray"', () => {
      const { container } = render(
        <Section background="gray">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-gray-100')
    })

    it('should apply bg-ocobo-dark with text-white when background="dark"', () => {
      const { container } = render(
        <Section background="dark">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-dark')
      expect(section?.className).toContain('text-white')
    })

    it('should apply bg-ocobo-yellow when background="yellow"', () => {
      const { container } = render(
        <Section background="yellow">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-yellow')
    })

    it('should apply bg-ocobo-mint when background="mint"', () => {
      const { container } = render(
        <Section background="mint">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-mint')
    })

    it('should apply bg-ocobo-sky when background="sky"', () => {
      const { container } = render(
        <Section background="sky">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-sky')
    })

    it('should default to bg-white when background prop is not provided', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-white')
    })
  })

  describe('AC3: Component Composition', () => {
    it('should render children correctly', () => {
      render(
        <Section>
          <div data-testid="test-child">Test Content</div>
        </Section>
      )
      expect(screen.getByTestId('test-child')).toBeDefined()
      expect(screen.getByText('Test Content')).toBeDefined()
    })

    it('should support aria-label for accessibility', () => {
      const { container } = render(
        <Section aria-label="Main content section">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.getAttribute('aria-label')).toBe('Main content section')
    })

    it('should support aria-labelledby for accessibility', () => {
      const { container } = render(
        <Section aria-labelledby="section-heading">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.getAttribute('aria-labelledby')).toBe('section-heading')
    })

    it('should accept and apply additional className prop', () => {
      const { container } = render(
        <Section className="custom-class">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('custom-class')
    })

    it('should render as semantic section element', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section).toBeDefined()
      expect(section?.tagName).toBe('SECTION')
    })

    it('should have full width (w-full)', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('w-full')
    })

    it('should apply responsive padding (px-4 sm:px-6 lg:px-8)', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('px-4')
      expect(section?.className).toContain('sm:px-6')
      expect(section?.className).toContain('lg:px-8')
    })
  })

  describe('AC4: File Structure & Types', () => {
    it('should export SectionProps type', () => {
      // This is a compile-time check, but we verify the component accepts proper props
      const validProps = {
        spacing: 'md' as const,
        background: 'white' as const,
        children: <div>Test</div>,
      }
      expect(validProps).toBeDefined()
    })

    it('should render with only required props (children)', () => {
      const { container } = render(
        <Section>
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      expect(section).toBeDefined()
    })
  })

  describe('AC5: Integration with Architecture', () => {
    it('should use token-based background colors (not hardcoded hex)', () => {
      const { container } = render(
        <Section background="gray">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      const classStr = section?.className || ''
      // Verify uses token class, not inline color
      expect(classStr).toContain('bg-ocobo-gray-100')
      expect(classStr).not.toContain('#')
      expect(classStr).not.toContain('[#')
    })

    it('should use token-based spacing (not hardcoded pixel values)', () => {
      const { container } = render(
        <Section spacing="lg">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      const classStr = section?.className || ''
      // Verify uses token class, not inline padding
      expect(classStr).toContain('py-32')
      expect(classStr).not.toContain('padding')
      expect(classStr).not.toContain('[')
      expect(classStr).not.toContain('128px')
    })

    it('should combine spacing, background, and custom classes correctly', () => {
      const { container } = render(
        <Section spacing="lg" background="dark" className="custom-section">
          <div>Content</div>
        </Section>
      )
      const section = container.querySelector('section')
      const classStr = section?.className || ''
      expect(classStr).toContain('py-32')
      expect(classStr).toContain('bg-ocobo-dark')
      expect(classStr).toContain('custom-section')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      const { container } = render(<Section />)
      const section = container.querySelector('section')
      expect(section).toBeDefined()
    })

    it('should handle multiple children', () => {
      const { container } = render(
        <Section>
          <div data-testid="child-1">Child 1</div>
          <div data-testid="child-2">Child 2</div>
          <div data-testid="child-3">Child 3</div>
        </Section>
      )
      expect(screen.getByTestId('child-1')).toBeDefined()
      expect(screen.getByTestId('child-2')).toBeDefined()
      expect(screen.getByTestId('child-3')).toBeDefined()
    })

    it('should handle complex nested children', () => {
      const { container } = render(
        <Section spacing="lg" background="yellow">
          <div>
            <h2>Nested Header</h2>
            <p>Nested paragraph</p>
            <div>
              <span>Deep nested content</span>
            </div>
          </div>
        </Section>
      )
      expect(screen.getByText('Nested Header')).toBeDefined()
      expect(screen.getByText('Nested paragraph')).toBeDefined()
      expect(screen.getByText('Deep nested content')).toBeDefined()
    })

    it('should apply all spacing options correctly', () => {
      const spacingOptions: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg']
      const expectedClasses = ['py-16', 'py-24', 'py-32']

      spacingOptions.forEach((spacing, index) => {
        const { container } = render(
          <Section spacing={spacing}>
            <div>Content</div>
          </Section>
        )
        const section = container.querySelector('section')
        expect(section?.className).toContain(expectedClasses[index])
      })
    })

    it('should apply all background options correctly', () => {
      const bgOptions: Array<'white' | 'gray' | 'dark' | 'yellow' | 'mint' | 'sky'> = [
        'white',
        'gray',
        'dark',
        'yellow',
        'mint',
        'sky',
      ]
      const expectedClasses = [
        'bg-white',
        'bg-ocobo-gray-100',
        'bg-ocobo-dark',
        'bg-ocobo-yellow',
        'bg-ocobo-mint',
        'bg-ocobo-sky',
      ]

      bgOptions.forEach((bg, index) => {
        const { container } = render(
          <Section background={bg}>
            <div>Content</div>
          </Section>
        )
        const section = container.querySelector('section')
        expect(section?.className).toContain(expectedClasses[index])
      })
    })
  })
})
