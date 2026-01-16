import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Card, useCardContext } from '../components/card'

describe('Card.Root', () => {
  // Default rendering
  it('renders children', () => {
    const { getByText } = render(<Card.Root>Content</Card.Root>)
    expect(getByText('Content')).toBeDefined()
  })

  it('renders as div element', () => {
    const { container } = render(<Card.Root>Content</Card.Root>)
    expect(container.querySelector('div')).toBeDefined()
  })

  // Default variant classes
  it('applies default variant classes', () => {
    const { container } = render(<Card.Root>Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('shadow-sm')
    expect(card.className).toContain('rounded-2xl')
  })

  // Variant tests
  it('applies outlined variant correctly', () => {
    const { container } = render(<Card.Root variant="outlined">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('border')
    expect(card.className).toContain('rounded-2xl')
    expect(card.className).toContain('shadow-none')
  })

  it('applies ghost variant correctly', () => {
    const { container } = render(<Card.Root variant="ghost">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-transparent')
    expect(card.className).toContain('rounded-2xl')
  })

  it('applies filled variant correctly', () => {
    const { container } = render(<Card.Root variant="filled">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('rounded-2xl')
    expect(card.className).toContain('shadow-none')
    expect(card.className).toContain('bg-ocobo-yellow-light') // default colorPalette
  })

  it('applies elevated variant correctly', () => {
    const { container } = render(<Card.Root variant="elevated">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-white')
    expect(card.className).toContain('shadow-lg')
    expect(card.className).toContain('rounded-2xl')
  })

  // Size tests
  it('applies sm size correctly', () => {
    const { container } = render(<Card.Root size="sm">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('p-4')
  })

  it('applies md size correctly (default)', () => {
    const { container } = render(<Card.Root>Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('p-6')
  })

  it('applies lg size correctly', () => {
    const { container } = render(<Card.Root size="lg">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('p-8')
  })

  // ColorPalette on outlined variant
  it('applies yellow border on outlined variant (default)', () => {
    const { container } = render(<Card.Root variant="outlined">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('border-ocobo-yellow')
  })

  it('applies mint border on outlined variant', () => {
    const { container } = render(<Card.Root variant="outlined" colorPalette="mint">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('border-ocobo-mint')
  })

  it('applies sky border on outlined variant', () => {
    const { container } = render(<Card.Root variant="outlined" colorPalette="sky">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('border-ocobo-sky')
  })

  it('applies coral border on outlined variant', () => {
    const { container } = render(<Card.Root variant="outlined" colorPalette="coral">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('border-ocobo-coral')
  })

  it('applies dark border on outlined variant', () => {
    const { container } = render(<Card.Root variant="outlined" colorPalette="dark">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('border-ocobo-dark')
  })

  // ColorPalette on filled variant
  it('applies yellow-light background on filled variant (default)', () => {
    const { container } = render(<Card.Root variant="filled">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-ocobo-yellow-light')
  })

  it('applies mint-light background on filled variant', () => {
    const { container } = render(<Card.Root variant="filled" colorPalette="mint">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-ocobo-mint-light')
  })

  it('applies sky-light background on filled variant', () => {
    const { container } = render(<Card.Root variant="filled" colorPalette="sky">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-ocobo-sky-light')
  })

  it('applies coral-light background on filled variant', () => {
    const { container } = render(<Card.Root variant="filled" colorPalette="coral">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-ocobo-coral-light')
  })

  it('applies gray-100 background on filled dark variant', () => {
    const { container } = render(<Card.Root variant="filled" colorPalette="dark">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('bg-ocobo-gray-100')
  })

  // ColorPalette does NOT affect default variant
  it('does not apply colorPalette border to default variant', () => {
    const { container } = render(<Card.Root colorPalette="mint">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).not.toContain('border-ocobo-mint')
    expect(card.className).not.toContain('bg-ocobo-mint-light')
  })

  // Custom className
  it('accepts custom className', () => {
    const { container } = render(<Card.Root className="custom-class">Content</Card.Root>)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain('custom-class')
  })

  // Context tests
  it('provides context values to children', () => {
    function ContextConsumer() {
      const { variant, size, colorPalette } = useCardContext()
      return <span data-testid="context">{`${variant}-${size}-${colorPalette}`}</span>
    }

    const { getByTestId } = render(
      <Card.Root variant="outlined" size="lg" colorPalette="coral">
        <ContextConsumer />
      </Card.Root>
    )

    expect(getByTestId('context').textContent).toBe('outlined-lg-coral')
  })

  it('provides default context values', () => {
    function ContextConsumer() {
      const { variant, size, colorPalette } = useCardContext()
      return <span data-testid="context">{`${variant}-${size}-${colorPalette}`}</span>
    }

    const { getByTestId } = render(
      <Card.Root>
        <ContextConsumer />
      </Card.Root>
    )

    expect(getByTestId('context').textContent).toBe('default-md-yellow')
  })

  // Error when used outside Card.Root
  it('throws error when useCardContext used outside Card.Root', () => {
    function OrphanConsumer() {
      useCardContext()
      return null
    }

    expect(() => render(<OrphanConsumer />)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Header', () => {
  it('renders children in flex container', () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>Header content</Card.Header>
      </Card.Root>
    )
    // Card.Root is first div, Card.Header is the child div with flex
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('flex')
    expect(header.className).toContain('flex-col')
  })

  it('applies size-aware gap (sm)', () => {
    const { container } = render(
      <Card.Root size="sm">
        <Card.Header>Header</Card.Header>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('gap-1')
  })

  it('applies size-aware gap (md - default)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>Header</Card.Header>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('gap-1.5')
  })

  it('applies size-aware gap (lg)', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Header>Header</Card.Header>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('gap-2')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Card.Root>
        <Card.Header className="custom-header">Header</Card.Header>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('custom-header')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Header>Header</Card.Header>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Title', () => {
  it('renders as h3 by default', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    expect(container.querySelector('h3')).toBeDefined()
    expect(container.querySelector('h3')?.textContent).toBe('Title')
  })

  it('renders as custom element with as prop (h2)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title as="h2">Title</Card.Title>
      </Card.Root>
    )
    expect(container.querySelector('h2')).toBeDefined()
    expect(container.querySelector('h3')).toBeNull()
  })

  it('renders as custom element with as prop (p)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title as="p">Title</Card.Title>
      </Card.Root>
    )
    expect(container.querySelector('p')).toBeDefined()
  })

  it('renders as custom element with as prop (span)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title as="span">Title</Card.Title>
      </Card.Root>
    )
    expect(container.querySelector('span')).toBeDefined()
  })

  it('applies text-ocobo-dark color', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-ocobo-dark')
  })

  it('applies size-aware text styling (sm)', () => {
    const { container } = render(
      <Card.Root size="sm">
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-base')
    expect(title.className).toContain('font-semibold')
  })

  it('applies size-aware text styling (md - default)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-lg')
    expect(title.className).toContain('font-semibold')
  })

  it('applies size-aware text styling (lg)', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-xl')
    expect(title.className).toContain('font-semibold')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Card.Root>
        <Card.Title className="custom-title">Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('custom-title')
  })

  it('applies default dark color without accent', () => {
    const { container } = render(
      <Card.Root colorPalette="mint">
        <Card.Title>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-ocobo-dark')
    expect(title.className).not.toContain('text-ocobo-mint')
  })

  it('applies colorPalette accent color with accent prop', () => {
    const { container } = render(
      <Card.Root colorPalette="mint">
        <Card.Title accent>Title</Card.Title>
      </Card.Root>
    )
    const title = container.querySelector('h3') as HTMLElement
    expect(title.className).toContain('text-ocobo-mint')
    expect(title.className).not.toContain('text-ocobo-dark')
  })

  it('applies different accent colors based on colorPalette', () => {
    const { container: c1 } = render(
      <Card.Root colorPalette="coral">
        <Card.Title accent>Title</Card.Title>
      </Card.Root>
    )
    expect((c1.querySelector('h3') as HTMLElement).className).toContain('text-ocobo-coral')

    const { container: c2 } = render(
      <Card.Root colorPalette="sky">
        <Card.Title accent>Title</Card.Title>
      </Card.Root>
    )
    expect((c2.querySelector('h3') as HTMLElement).className).toContain('text-ocobo-sky')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Title>Title</Card.Title>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Description', () => {
  it('renders as p element', () => {
    const { container } = render(
      <Card.Root>
        <Card.Description>Description text</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p')
    expect(desc).toBeDefined()
    expect(desc?.textContent).toBe('Description text')
  })

  it('applies muted text color', () => {
    const { container } = render(
      <Card.Root>
        <Card.Description>Description</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p') as HTMLElement
    expect(desc.className).toContain('text-ocobo-gray-600')
  })

  it('applies size-aware text styling (sm)', () => {
    const { container } = render(
      <Card.Root size="sm">
        <Card.Description>Description</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p') as HTMLElement
    expect(desc.className).toContain('text-xs')
  })

  it('applies size-aware text styling (md - default)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Description>Description</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p') as HTMLElement
    expect(desc.className).toContain('text-sm')
  })

  it('applies size-aware text styling (lg)', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Description>Description</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p') as HTMLElement
    expect(desc.className).toContain('text-base')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Card.Root>
        <Card.Description className="custom-desc">Description</Card.Description>
      </Card.Root>
    )
    const desc = container.querySelector('p') as HTMLElement
    expect(desc.className).toContain('custom-desc')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Description>Description</Card.Description>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card Header Composition', () => {
  it('renders complete header composition', () => {
    const { container, getByText } = render(
      <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card description text</Card.Description>
        </Card.Header>
      </Card.Root>
    )
    
    expect(getByText('Card Title')).toBeDefined()
    expect(getByText('Card description text')).toBeDefined()
    
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    expect(header.className).toContain('flex')
    expect(header.className).toContain('flex-col')
  })

  it('inherits size from Card.Root to all children', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
      </Card.Root>
    )
    
    const cardRoot = container.firstChild as HTMLElement
    const header = cardRoot.firstChild as HTMLElement
    const title = container.querySelector('h3') as HTMLElement
    const desc = container.querySelector('p') as HTMLElement
    
    expect(header.className).toContain('gap-2')
    expect(title.className).toContain('text-xl')
    expect(desc.className).toContain('text-base')
  })
})

describe('Card.Body', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Body>Body content</Card.Body>
      </Card.Root>
    )
    expect(getByText('Body content')).toBeDefined()
  })

  it('applies size-aware margin (sm)', () => {
    const { container } = render(
      <Card.Root size="sm">
        <Card.Body>Body</Card.Body>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const body = cardRoot.firstChild as HTMLElement
    expect(body.className).toContain('mt-2')
  })

  it('applies size-aware margin (md - default)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Body>Body</Card.Body>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const body = cardRoot.firstChild as HTMLElement
    expect(body.className).toContain('mt-3')
  })

  it('applies size-aware margin (lg)', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Body>Body</Card.Body>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const body = cardRoot.firstChild as HTMLElement
    expect(body.className).toContain('mt-4')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Card.Root>
        <Card.Body className="custom-body">Body</Card.Body>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const body = cardRoot.firstChild as HTMLElement
    expect(body.className).toContain('custom-body')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Body>Body</Card.Body>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })

  it('has first:mt-0 to remove margin when first child', () => {
    const { container } = render(
      <Card.Root>
        <Card.Body>Body as first child</Card.Body>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const body = cardRoot.firstChild as HTMLElement
    expect(body.className).toContain('first:mt-0')
  })
})

describe('Card.Footer', () => {
  it('renders children in flex container', () => {
    const { container, getByText } = render(
      <Card.Root>
        <Card.Footer>
          <span>Action 1</span>
          <span>Action 2</span>
        </Card.Footer>
      </Card.Root>
    )
    expect(getByText('Action 1')).toBeDefined()
    expect(getByText('Action 2')).toBeDefined()
    
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('flex')
    expect(footer.className).toContain('items-center')
  })

  it('applies size-aware margin and gap (sm)', () => {
    const { container } = render(
      <Card.Root size="sm">
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('mt-3')
    expect(footer.className).toContain('gap-2')
  })

  it('applies size-aware margin and gap (md - default)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('mt-4')
    expect(footer.className).toContain('gap-3')
  })

  it('applies size-aware margin and gap (lg)', () => {
    const { container } = render(
      <Card.Root size="lg">
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('mt-6')
    expect(footer.className).toContain('gap-4')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Card.Root>
        <Card.Footer className="custom-footer">Footer</Card.Footer>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('custom-footer')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Footer>Footer</Card.Footer>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })

  it('has first:mt-0 to remove margin when first child', () => {
    const { container } = render(
      <Card.Root>
        <Card.Footer>Footer as first child</Card.Footer>
      </Card.Root>
    )
    const cardRoot = container.firstChild as HTMLElement
    const footer = cardRoot.firstChild as HTMLElement
    expect(footer.className).toContain('first:mt-0')
  })
})

describe('Card Full Composition', () => {
  it('renders complete card with all primitives', () => {
    const { getByText, container } = render(
      <Card.Root variant="outlined" colorPalette="mint" size="md">
        <Card.Header>
          <Card.Title>Complete Card</Card.Title>
          <Card.Description>A fully composed card example</Card.Description>
        </Card.Header>
        <Card.Body>
          <p>This is the main content area.</p>
        </Card.Body>
        <Card.Footer>
          <span>Cancel</span>
          <span>Submit</span>
        </Card.Footer>
      </Card.Root>
    )
    
    expect(getByText('Complete Card')).toBeDefined()
    expect(getByText('A fully composed card example')).toBeDefined()
    expect(getByText('This is the main content area.')).toBeDefined()
    expect(getByText('Cancel')).toBeDefined()
    expect(getByText('Submit')).toBeDefined()
    
    // Verify Card.Root has outlined variant styling
    const cardRoot = container.firstChild as HTMLElement
    expect(cardRoot.className).toContain('border-ocobo-mint')
  })
})

describe('Card.Media', () => {
  it('renders image with default aspect ratio (video)', () => {
    const { container } = render(
      <Card.Root>
        <Card.Media src="/test.jpg" alt="Test image" />
      </Card.Root>
    )
    const img = container.querySelector('img') as HTMLImageElement
    const media = img.parentElement as HTMLElement
    expect(media.className).toContain('aspect-video')
    expect(img).toBeDefined()
  })

  it('applies square aspect ratio', () => {
    const { container } = render(
      <Card.Root>
        <Card.Media src="/test.jpg" alt="Test" aspectRatio="square" />
      </Card.Root>
    )
    const img = container.querySelector('img') as HTMLImageElement
    const media = img.parentElement as HTMLElement
    expect(media.className).toContain('aspect-square')
  })

  it('applies wide aspect ratio', () => {
    const { container } = render(
      <Card.Root>
        <Card.Media src="/test.jpg" alt="Test" aspectRatio="wide" />
      </Card.Root>
    )
    const img = container.querySelector('img') as HTMLImageElement
    const media = img.parentElement as HTMLElement
    expect(media.className).toContain('aspect-[21/9]')
  })

  it('applies bleed classes when bleed prop is true', () => {
    const { container } = render(
      <Card.Root size="md">
        <Card.Media src="/test.jpg" alt="Test" bleed />
      </Card.Root>
    )
    const img = container.querySelector('img') as HTMLImageElement
    const media = img.parentElement as HTMLElement
    expect(media.className).toContain('-mx-6')
    expect(media.className).toContain('-mt-6')
  })

  it('has rounded-lg when not bleed', () => {
    const { container } = render(
      <Card.Root>
        <Card.Media src="/test.jpg" alt="Test" />
      </Card.Root>
    )
    const img = container.querySelector('img') as HTMLImageElement
    const media = img.parentElement as HTMLElement
    expect(media.className).toContain('rounded-2xl')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Media src="/test.jpg" alt="Test" />)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Badge', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge>New</Card.Badge>
      </Card.Root>
    )
    expect(getByText('New')).toBeDefined()
  })

  it('applies default position (top-right)', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge><span>Badge</span></Card.Badge>
      </Card.Root>
    )
    const badge = getByText('Badge').parentElement as HTMLElement
    expect(badge.className).toContain('absolute')
    expect(badge.className).toContain('top-2')
    expect(badge.className).toContain('right-2')
  })

  it('applies top-left position', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge position="top-left"><span>Badge</span></Card.Badge>
      </Card.Root>
    )
    const badge = getByText('Badge').parentElement as HTMLElement
    expect(badge.className).toContain('top-2')
    expect(badge.className).toContain('left-2')
  })

  it('applies bottom-right position', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge position="bottom-right"><span>Badge</span></Card.Badge>
      </Card.Root>
    )
    const badge = getByText('Badge').parentElement as HTMLElement
    expect(badge.className).toContain('bottom-2')
    expect(badge.className).toContain('right-2')
  })

  it('applies bottom-left position', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge position="bottom-left"><span>Badge</span></Card.Badge>
      </Card.Root>
    )
    const badge = getByText('Badge').parentElement as HTMLElement
    expect(badge.className).toContain('bottom-2')
    expect(badge.className).toContain('left-2')
  })

  it('has z-10 for stacking', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Badge><span>Badge</span></Card.Badge>
      </Card.Root>
    )
    const badge = getByText('Badge').parentElement as HTMLElement
    expect(badge.className).toContain('z-10')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Badge>Badge</Card.Badge>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Avatar', () => {
  it('renders image when src provided', () => {
    const { container } = render(
      <Card.Root>
        <Card.Avatar src="/avatar.jpg" alt="John Doe" />
      </Card.Root>
    )
    const img = container.querySelector('img')
    expect(img).toBeDefined()
    expect(img?.getAttribute('src')).toBe('/avatar.jpg')
  })

  it('renders initials when no src', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Avatar initials="JD" />
      </Card.Root>
    )
    expect(getByText('JD')).toBeDefined()
  })

  it('applies default size (md)', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Avatar initials="JD" />
      </Card.Root>
    )
    const avatar = getByText('JD').parentElement as HTMLElement
    expect(avatar.className).toContain('w-12')
    expect(avatar.className).toContain('h-12')
  })

  it('applies sm size', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Avatar initials="JD" size="sm" />
      </Card.Root>
    )
    const avatar = getByText('JD').parentElement as HTMLElement
    expect(avatar.className).toContain('w-8')
    expect(avatar.className).toContain('h-8')
  })

  it('applies lg size', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Avatar initials="JD" size="lg" />
      </Card.Root>
    )
    const avatar = getByText('JD').parentElement as HTMLElement
    expect(avatar.className).toContain('w-16')
    expect(avatar.className).toContain('h-16')
  })

  it('has rounded-full for circular shape', () => {
    const { getByText } = render(
      <Card.Root>
        <Card.Avatar initials="JD" />
      </Card.Root>
    )
    const avatar = getByText('JD').parentElement as HTMLElement
    expect(avatar.className).toContain('rounded-full')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Avatar initials="JD" />)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})
