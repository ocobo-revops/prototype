import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Container } from '../components/container'

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Container>Test content</Container>)
    expect(getByText('Test content')).toBeDefined()
  })

  it('applies default size (md) classes', () => {
    const { container } = render(<Container>Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('max-w-5xl')
    expect(div.className).toContain('mx-auto')
  })

  it('applies sm size correctly', () => {
    const { container } = render(<Container size="sm">Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('max-w-3xl')
  })

  it('applies lg size correctly', () => {
    const { container } = render(<Container size="lg">Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('max-w-7xl')
  })

  it('applies full size correctly', () => {
    const { container } = render(<Container size="full">Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('max-w-full')
  })

  it('includes responsive padding classes', () => {
    const { container } = render(<Container>Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('px-4')
    expect(div.className).toContain('sm:px-6')
    expect(div.className).toContain('lg:px-8')
  })

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    )
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('custom-class')
  })

  it('renders as different element when as prop provided', () => {
    const { container } = render(
      <Container as="section">Content</Container>
    )
    expect(container.firstChild?.nodeName).toBe('SECTION')
  })

  it('renders as main element', () => {
    const { container } = render(
      <Container as="main">Content</Container>
    )
    expect(container.firstChild?.nodeName).toBe('MAIN')
  })

  it('defaults to div element', () => {
    const { container } = render(<Container>Content</Container>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })
})
