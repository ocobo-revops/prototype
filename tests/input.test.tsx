import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Input } from '../components/input'

describe('Input', () => {
  // Default props
  it('renders with default props', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input).toBeDefined()
  })

  // Sizes
  it('applies sm size correctly', () => {
    const { container } = render(<Input size="sm" />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('px-3')
    expect(input?.className).toContain('text-sm')
  })

  it('applies md size correctly (default)', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('px-4')
    expect(input?.className).toContain('text-base')
  })

  it('applies lg size correctly', () => {
    const { container } = render(<Input size="lg" />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('px-5')
    expect(input?.className).toContain('text-lg')
  })

  // Base styles
  it('has border styles', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('border')
    expect(input?.className).toContain('rounded-lg')
  })

  it('has focus ring styles', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('focus:ring-2')
    expect(input?.className).toContain('focus:ring-ocobo-yellow')
  })

  // Native attributes
  it('supports placeholder', () => {
    const { container } = render(<Input placeholder="Enter text" />)
    const input = container.querySelector('input')
    expect(input?.placeholder).toBe('Enter text')
  })

  it('supports type attribute', () => {
    const { container } = render(<Input type="email" />)
    const input = container.querySelector('input')
    expect(input?.type).toBe('email')
  })

  it('handles disabled state', () => {
    const { container } = render(<Input disabled />)
    const input = container.querySelector('input')
    expect(input?.disabled).toBe(true)
    expect(input?.className).toContain('disabled:opacity-50')
  })

  it('fires onChange handler', () => {
    const handleChange = vi.fn()
    const { container } = render(<Input onChange={handleChange} />)
    const input = container.querySelector('input')
    fireEvent.change(input!, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    const { container } = render(<Input className="custom-class" />)
    const input = container.querySelector('input')
    expect(input?.className).toContain('custom-class')
  })

  it('supports value attribute', () => {
    const { container } = render(<Input value="test value" onChange={() => {}} />)
    const input = container.querySelector('input')
    expect(input?.value).toBe('test value')
  })
})
