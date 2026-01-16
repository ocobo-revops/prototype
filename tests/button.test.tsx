import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../components/button'

describe('Button', () => {
  // Default props
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole('button')
    expect(button).toBeDefined()
    expect(button.textContent).toBe('Click me')
  })

  // Variants
  it('renders solid variant correctly', () => {
    const { container } = render(<Button variant="solid">Solid</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('bg-ocobo-dark')
    expect(button?.className).toContain('text-white')
  })

  it('renders inverse variant correctly', () => {
    const { container } = render(<Button variant="inverse">Inverse</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('bg-white')
    expect(button?.className).toContain('text-ocobo-dark')
  })

  it('renders outline variant correctly', () => {
    const { container } = render(<Button variant="outline">Outline</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('border')
    expect(button?.className).toContain('border-ocobo-dark')
  })

  // Sizes
  it('applies sm size correctly', () => {
    const { container } = render(<Button size="sm">Small</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('px-4')
    expect(button?.className).toContain('py-2')
  })

  it('applies md size correctly', () => {
    const { container } = render(<Button size="md">Medium</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('px-6')
    expect(button?.className).toContain('py-3')
  })

  it('applies lg size correctly', () => {
    const { container } = render(<Button size="lg">Large</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('px-8')
    expect(button?.className).toContain('py-4')
  })

  // Arrow icon
  it('shows arrow when showArrow is true', () => {
    const { container } = render(<Button showArrow>With Arrow</Button>)
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
  })

  it('hides arrow when showArrow is false', () => {
    const { container } = render(<Button showArrow={false}>No Arrow</Button>)
    const svg = container.querySelector('svg')
    expect(svg).toBeNull()
  })

  it('hides arrow by default', () => {
    const { container } = render(<Button>Default</Button>)
    const svg = container.querySelector('svg')
    expect(svg).toBeNull()
  })

  // Left icon
  it('renders leftIcon when provided', () => {
    const { container } = render(
      <Button leftIcon={<span data-testid="left-icon">L</span>}>With Icon</Button>
    )
    expect(container.querySelector('[data-testid="left-icon"]')).toBeDefined()
  })

  // Hover animation
  it('has hover translate animation class', () => {
    const { container } = render(<Button>Hover</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('hover:-translate-y-0.5')
  })

  it('has group class for icon animation', () => {
    const { container } = render(<Button>Group</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('group')
  })

  // Native attributes
  it('handles disabled state', () => {
    const { container } = render(<Button disabled>Disabled</Button>)
    const button = container.querySelector('button')
    expect(button?.disabled).toBe(true)
    expect(button?.className).toContain('disabled:opacity-50')
  })

  it('fires onClick handler', () => {
    const handleClick = vi.fn()
    const { getByRole } = render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('accepts custom className', () => {
    const { container } = render(<Button className="custom-class">Custom</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('custom-class')
  })

  it('defaults to type="button"', () => {
    const { container } = render(<Button>Default Type</Button>)
    const button = container.querySelector('button')
    expect(button?.type).toBe('button')
  })

  it('allows type override', () => {
    const { container } = render(<Button type="submit">Submit</Button>)
    const button = container.querySelector('button')
    expect(button?.type).toBe('submit')
  })
})
