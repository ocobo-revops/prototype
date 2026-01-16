import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GridSection } from './grid-section'

describe('GridSection', () => {
  describe('AC1: Grid Layout with Columns', () => {
    it('renders as a grid layout', () => {
      const { container } = render(
        <GridSection>
          <div>Item 1</div>
          <div>Item 2</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid).toBeTruthy()
      expect(grid.className).toContain('grid')
    })

    it('renders with 3 columns by default', () => {
      const { container } = render(
        <GridSection>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('lg:grid-cols-3')
    })

    it('renders with 2 columns when specified', () => {
      const { container } = render(
        <GridSection columns={2}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('lg:grid-cols-2')
    })

    it('renders with 3 columns when specified', () => {
      const { container } = render(
        <GridSection columns={3}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('lg:grid-cols-3')
    })

    it('renders with 4 columns when specified', () => {
      const { container } = render(
        <GridSection columns={4}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('lg:grid-cols-4')
    })
  })

  describe('AC2: Gap Spacing', () => {
    it('renders with md gap by default (gap-6)', () => {
      const { container } = render(
        <GridSection>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('gap-6')
    })

    it('renders with md gap when specified', () => {
      const { container } = render(
        <GridSection gap="md">
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('gap-6')
    })

    it('renders with lg gap when specified (gap-8)', () => {
      const { container } = render(
        <GridSection gap="lg">
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('gap-8')
    })
  })

  describe('AC3: Responsive Behavior', () => {
    it('uses mobile-first single column base', () => {
      const { container } = render(
        <GridSection columns={3}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid-cols-1')
    })

    it('has tablet breakpoint (md:) for 2 columns', () => {
      const { container } = render(
        <GridSection columns={3}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('md:grid-cols-2')
    })

    it('has desktop breakpoint (lg:) for full columns', () => {
      const { container } = render(
        <GridSection columns={4}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('lg:grid-cols-4')
    })

    it('columns=2 has responsive pattern: 1 -> 2 (skips md breakpoint)', () => {
      const { container } = render(
        <GridSection columns={2}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid-cols-1')
      expect(grid.className).toContain('lg:grid-cols-2')
      // No md breakpoint needed - stays 1 col until lg
    })

    it('columns=3 has responsive pattern: 1 -> 2 -> 3', () => {
      const { container } = render(
        <GridSection columns={3}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid-cols-1')
      expect(grid.className).toContain('md:grid-cols-2')
      expect(grid.className).toContain('lg:grid-cols-3')
    })

    it('columns=4 has responsive pattern: 1 -> 2 -> 4', () => {
      const { container } = render(
        <GridSection columns={4}>
          <div>Item</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid-cols-1')
      expect(grid.className).toContain('md:grid-cols-2')
      expect(grid.className).toContain('lg:grid-cols-4')
    })
  })

  describe('AC4: File Structure and TypeScript', () => {
    it('exports GridSectionProps interface', () => {
      const props: import('./grid-section').GridSectionProps = {
        columns: 3,
        gap: 'lg',
        children: <div>Test</div>
      }
      expect(props).toBeDefined()
    })

    it('has correct columns type constraint (2 | 3 | 4)', () => {
      // These should compile without errors
      render(<GridSection columns={2}><div>Test</div></GridSection>)
      render(<GridSection columns={3}><div>Test</div></GridSection>)
      render(<GridSection columns={4}><div>Test</div></GridSection>)
    })

    it('has correct gap type constraint (md | lg)', () => {
      // These should compile without errors
      render(<GridSection gap="md"><div>Test</div></GridSection>)
      render(<GridSection gap="lg"><div>Test</div></GridSection>)
    })
  })

  describe('AC5: Architecture Integration', () => {
    it('renders as div (not section)', () => {
      const { container } = render(
        <GridSection>
          <div>Content</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.tagName).toBe('DIV')
    })

    it('accepts children via composition', () => {
      render(
        <GridSection>
          <div data-testid="child-1">Item 1</div>
          <div data-testid="child-2">Item 2</div>
          <div data-testid="child-3">Item 3</div>
        </GridSection>
      )
      expect(screen.getByTestId('child-1')).toBeTruthy()
      expect(screen.getByTestId('child-2')).toBeTruthy()
      expect(screen.getByTestId('child-3')).toBeTruthy()
    })

    it('uses token-based styling only (no arbitrary values)', () => {
      const { container } = render(
        <GridSection columns={3} gap="lg">
          <div>Content</div>
        </GridSection>
      )
      const html = container.innerHTML
      // No arbitrary values like [#000000] or arbitrary-[value]
      expect(html).not.toMatch(/\[#[0-9a-fA-F]{3,6}\]/)
      expect(html).not.toMatch(/arbitrary-\[/)
    })

    it('does NOT wrap with Section component', () => {
      const { container } = render(
        <GridSection>
          <div>Content</div>
        </GridSection>
      )
      // Should not have section element
      expect(container.querySelector('section')).toBeFalsy()
    })
  })

  describe('className Composition', () => {
    it('accepts and applies className prop', () => {
      const { container } = render(
        <GridSection className="custom-class">
          <div>Content</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('custom-class')
    })

    it('merges className with default classes', () => {
      const { container } = render(
        <GridSection className="custom-class" columns={3} gap="lg">
          <div>Content</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid')
      expect(grid.className).toContain('gap-8')
      expect(grid.className).toContain('lg:grid-cols-3')
      expect(grid.className).toContain('custom-class')
    })

    it('handles empty className gracefully', () => {
      const { container } = render(
        <GridSection className="">
          <div>Content</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid')
    })
  })

  describe('Edge Cases', () => {
    it('handles single child', () => {
      const { container } = render(
        <GridSection>
          <div>Single item</div>
        </GridSection>
      )
      expect(screen.getByText('Single item')).toBeTruthy()
    })

    it('handles many children', () => {
      render(
        <GridSection columns={4}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i}>Item {i + 1}</div>
          ))}
        </GridSection>
      )
      expect(screen.getByText('Item 1')).toBeTruthy()
      expect(screen.getByText('Item 12')).toBeTruthy()
    })

    it('handles empty children gracefully', () => {
      const { container } = render(
        <GridSection>
          <></>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid).toBeTruthy()
      expect(grid.className).toContain('grid')
    })

    it('handles null children gracefully', () => {
      const { container } = render(
        <GridSection>
          {null}
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid).toBeTruthy()
    })

    it('combines all props correctly', () => {
      const { container } = render(
        <GridSection columns={4} gap="lg" className="extra-class">
          <div>Item 1</div>
          <div>Item 2</div>
        </GridSection>
      )
      const grid = container.firstChild as HTMLElement
      expect(grid.className).toContain('grid')
      expect(grid.className).toContain('grid-cols-1')
      expect(grid.className).toContain('md:grid-cols-2')
      expect(grid.className).toContain('lg:grid-cols-4')
      expect(grid.className).toContain('gap-8')
      expect(grid.className).toContain('extra-class')
    })
  })
})
