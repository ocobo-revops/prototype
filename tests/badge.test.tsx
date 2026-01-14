import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Badge } from '../components/badge'

describe('Badge', () => {
  // Default props
  it('renders with default props', () => {
    const { getByText } = render(<Badge>Label</Badge>)
    expect(getByText('Label')).toBeDefined()
  })

  it('renders as span element', () => {
    const { container } = render(<Badge>Label</Badge>)
    expect(container.querySelector('span')).toBeDefined()
  })

  // Variants
  it('renders solid variant correctly', () => {
    const { container } = render(<Badge variant="solid">Solid</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-yellow')
  })

  it('renders outline variant correctly', () => {
    const { container } = render(<Badge variant="outline">Outline</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('border')
    expect(badge?.className).toContain('border-ocobo-yellow')
  })

  it('renders subtle variant correctly (default)', () => {
    const { container } = render(<Badge>Subtle</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-yellow-light')
    expect(badge?.className).toContain('text-ocobo-yellow')
  })

  // Sizes
  it('applies normal size correctly (default)', () => {
    const { container } = render(<Badge>Normal</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('px-3')
    expect(badge?.className).toContain('text-xs')
  })

  it('applies big size correctly', () => {
    const { container } = render(<Badge size="big">Big</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('px-4')
    expect(badge?.className).toContain('text-sm')
  })

  // Color palettes
  it('applies yellow colorPalette correctly (default)', () => {
    const { container } = render(<Badge>Yellow</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-yellow-light')
  })

  it('applies mint colorPalette correctly', () => {
    const { container } = render(<Badge colorPalette="mint">Mint</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-mint-light')
  })

  it('applies sky colorPalette correctly', () => {
    const { container } = render(<Badge colorPalette="sky">Sky</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-sky-light')
  })

  it('applies coral colorPalette correctly', () => {
    const { container } = render(<Badge colorPalette="coral">Coral</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-coral-light')
  })

  it('applies dark colorPalette correctly', () => {
    const { container } = render(<Badge colorPalette="dark">Dark</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-gray-100')
  })

  // Solid variant with different colors
  it('applies solid mint correctly', () => {
    const { container } = render(<Badge variant="solid" colorPalette="mint">Mint</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-mint')
  })

  it('applies solid dark correctly with white text', () => {
    const { container } = render(<Badge variant="solid" colorPalette="dark">Dark</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('bg-ocobo-dark')
    expect(badge?.className).toContain('text-white')
  })

  // Custom className
  it('accepts custom className', () => {
    const { container } = render(<Badge className="custom-class">Custom</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('custom-class')
  })

  // Base styles
  it('has rounded-full class', () => {
    const { container } = render(<Badge>Rounded</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('rounded-full')
  })

  it('has font-bold class', () => {
    const { container } = render(<Badge>Bold</Badge>)
    const badge = container.querySelector('span')
    expect(badge?.className).toContain('font-bold')
  })
})
