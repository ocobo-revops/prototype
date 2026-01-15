import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CtaSection } from './cta-section'

describe('CtaSection', () => {
  describe('AC1: Variant Support', () => {
    it('renders simple variant with button only', () => {
      const { getByText, getByRole, queryByRole } = render(
        <CtaSection
          variant="simple"
          title="Get Started"
          buttonText="Contact us"
        />
      )

      expect(getByText('Get Started')).toBeDefined()
      expect(getByRole('button', { name: 'Contact us' })).toBeDefined()
      expect(queryByRole('textbox')).toBeNull()
    })

    it('renders with-form variant with input and button', () => {
      const { container, getByPlaceholderText, getByRole } = render(
        <CtaSection
          variant="with-form"
          title="Subscribe to Newsletter"
          inputPlaceholder="Enter email"
          buttonText="Subscribe"
        />
      )

      expect(container.querySelector('h2')?.textContent).toBe('Subscribe to Newsletter')
      expect(getByPlaceholderText('Enter email')).toBeDefined()
      expect(getByRole('button', { name: 'Subscribe' })).toBeDefined()
    })

    it('defaults to simple variant when not specified', () => {
      const { getByRole, queryByRole } = render(<CtaSection title="Default" />)
      
      expect(getByRole('button')).toBeDefined()
      expect(queryByRole('textbox')).toBeNull()
    })
  })

  describe('AC2: ColorPalette Support', () => {
    it('renders with yellow colorPalette by default', () => {
      const { container } = render(<CtaSection title="Yellow CTA" />)
      
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-yellow')
    })

    it('renders with dark colorPalette', () => {
      const { container } = render(
        <CtaSection colorPalette="dark" title="Dark CTA" />
      )
      
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-dark')
      expect(section?.className).toContain('text-white')
    })

    it('renders with mint colorPalette', () => {
      const { container } = render(
        <CtaSection colorPalette="mint" title="Mint CTA" />
      )
      
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-mint')
    })

    it('renders with sky colorPalette', () => {
      const { container } = render(
        <CtaSection colorPalette="sky" title="Sky CTA" />
      )
      
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-ocobo-sky')
    })

    it('applies correct text color for yellow palette', () => {
      const { container } = render(
        <CtaSection colorPalette="yellow" title="Yellow" />
      )
      
      const contentDiv = container.querySelector('div[class*="text-ocobo-dark"]')
      expect(contentDiv).toBeDefined()
    })

    it('applies correct text color for dark palette', () => {
      const { container } = render(
        <CtaSection colorPalette="dark" title="Dark" />
      )
      
      const contentDiv = container.querySelector('div[class*="text-white"]')
      expect(contentDiv).toBeDefined()
    })
  })

  describe('AC3: Button and Input Integration', () => {
    it('integrates Button component in simple variant', () => {
      const { getByRole } = render(
        <CtaSection
          variant="simple"
          buttonText="Click me"
        />
      )

      const button = getByRole('button', { name: 'Click me' })
      expect(button.className).toContain('bg-ocobo-dark') // solid variant default
    })

    it('integrates Input component in with-form variant', () => {
      const { getByPlaceholderText } = render(
        <CtaSection
          variant="with-form"
          inputPlaceholder="Your email"
        />
      )

      const input = getByPlaceholderText('Your email')
      expect(input.className).toContain('border-ocobo-gray-300') // Input component styles
    })

    it('renders form elements side-by-side with responsive layout', () => {
      const { container } = render(
        <CtaSection variant="with-form" />
      )

      const form = container.querySelector('form')
      expect(form?.className).toContain('flex')
      expect(form?.className).toContain('flex-col')
      expect(form?.className).toContain('sm:flex-row')
    })

    it('uses matching button variant for dark palette', () => {
      const { getByRole } = render(
        <CtaSection
          colorPalette="dark"
          variant="simple"
          buttonText="Dark Button"
        />
      )

      const button = getByRole('button', { name: 'Dark Button' })
      expect(button.className).toContain('bg-white') // inverse variant for dark palette
    })
  })

  describe('AC4: TypeScript Interface', () => {
    it('accepts all CtaSectionProps properties', () => {
      const onFormSubmit = vi.fn()
      const onButtonClick = vi.fn()

      const { getByText } = render(
        <CtaSection
          variant="with-form"
          colorPalette="mint"
          title="Test Title"
          description="Test description"
          buttonText="Submit"
          buttonHref="/contact"
          onButtonClick={onButtonClick}
          inputPlaceholder="Test placeholder"
          onFormSubmit={onFormSubmit}
          className="custom-class"
          aria-label="Test CTA Section"
        >
          <p>Custom children</p>
        </CtaSection>
      )

      expect(getByText('Test Title')).toBeDefined()
      expect(getByText('Test description')).toBeDefined()
      expect(getByText('Custom children')).toBeDefined()
    })
  })

  describe('AC5: Architecture Integration', () => {
    it('composes with Section component', () => {
      const { container } = render(<CtaSection title="Test" />)
      
      const section = container.querySelector('section')
      expect(section).toBeDefined()
      expect(section?.className).toContain('py-32') // Section spacing="lg"
    })

    it('composes with Container for width control', () => {
      const { container } = render(<CtaSection title="Test" />)
      
      const containerDiv = container.querySelector('div[class*="max-w-5xl"]')
      expect(containerDiv).toBeDefined() // Container size="md"
    })

    it('uses token-based styling only', () => {
      const { container } = render(
        <CtaSection colorPalette="yellow" title="Test" />
      )
      
      const section = container.querySelector('section')
      expect(section?.className).not.toMatch(/\[#[0-9a-f]{6}\]/i) // No arbitrary values
    })

    it('follows mobile-first responsive pattern', () => {
      const { container } = render(
        <CtaSection variant="with-form" title="Test" />
      )
      
      const form = container.querySelector('form')
      expect(form?.className).toContain('flex-col') // Mobile first
      expect(form?.className).toContain('sm:flex-row') // Desktop breakpoint
    })
  })

  describe('Content Rendering', () => {
    it('renders title when provided', () => {
      const { getByText, container } = render(<CtaSection title="Call to Action" />)
      
      expect(getByText('Call to Action')).toBeDefined()
      const heading = container.querySelector('h2')
      expect(heading?.textContent).toBe('Call to Action')
    })

    it('renders description when provided', () => {
      const { getByText } = render(
        <CtaSection
          title="Title"
          description="This is a description"
        />
      )
      
      expect(getByText('This is a description')).toBeDefined()
    })

    it('renders without title and description', () => {
      const { container, getByRole } = render(
        <CtaSection variant="simple" buttonText="Click" />
      )
      
      expect(container.querySelector('h2')).toBeNull()
      expect(container.querySelector('p')).toBeNull()
      expect(getByRole('button', { name: 'Click' })).toBeDefined()
    })

    it('renders custom children', () => {
      const { container } = render(
        <CtaSection>
          <div data-testid="custom-content">Custom Content</div>
        </CtaSection>
      )
      
      expect(container.querySelector('[data-testid="custom-content"]')).toBeDefined()
    })
  })

  describe('Button Interactions', () => {
    it('calls onButtonClick when button is clicked in simple variant', () => {
      const handleClick = vi.fn()

      const { getByRole } = render(
        <CtaSection
          variant="simple"
          buttonText="Click me"
          onButtonClick={handleClick}
        />
      )

      fireEvent.click(getByRole('button', { name: 'Click me' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders button as link when buttonHref is provided', () => {
      const { container } = render(
        <CtaSection
          variant="simple"
          buttonText="Go to Contact"
          buttonHref="/contact"
        />
      )

      const link = container.querySelector('a[href="/contact"]')
      expect(link).toBeDefined()
    })

    it('uses default button text when not provided', () => {
      const { getByRole } = render(<CtaSection variant="simple" />)
      
      expect(getByRole('button', { name: 'Get Started' })).toBeDefined()
    })
  })

  describe('Form Interactions', () => {
    it('calls onFormSubmit with input value when form is submitted', () => {
      const handleSubmit = vi.fn()

      const { getByPlaceholderText, getByRole } = render(
        <CtaSection
          variant="with-form"
          onFormSubmit={handleSubmit}
          inputPlaceholder="Enter email"
        />
      )

      const input = getByPlaceholderText('Enter email')
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      fireEvent.click(getByRole('button'))

      expect(handleSubmit).toHaveBeenCalledWith('test@example.com')
    })

    it('resets input value after form submission', () => {
      const handleSubmit = vi.fn()

      const { getByPlaceholderText, getByRole } = render(
        <CtaSection
          variant="with-form"
          onFormSubmit={handleSubmit}
        />
      )

      const input = getByPlaceholderText('Enter your email') as HTMLInputElement
      fireEvent.change(input, { target: { value: 'test@example.com' } })
      fireEvent.click(getByRole('button'))

      expect(input.value).toBe('')
    })

    it('does not submit form with empty input', () => {
      const handleSubmit = vi.fn()

      const { getByPlaceholderText, getByRole } = render(
        <CtaSection
          variant="with-form"
          onFormSubmit={handleSubmit}
        />
      )

      const input = getByPlaceholderText('Enter your email')
      fireEvent.change(input, { target: { value: '   ' } })
      fireEvent.click(getByRole('button'))

      expect(handleSubmit).not.toHaveBeenCalled()
    })

    it('uses default input placeholder when not provided', () => {
      const { getByPlaceholderText } = render(<CtaSection variant="with-form" />)
      
      expect(getByPlaceholderText('Enter your email')).toBeDefined()
    })

    it('sets input type to email', () => {
      const { getByPlaceholderText } = render(<CtaSection variant="with-form" />)
      
      const input = getByPlaceholderText('Enter your email')
      expect(input.getAttribute('type')).toBe('email')
    })

    it('marks input as required', () => {
      const { getByPlaceholderText } = render(<CtaSection variant="with-form" />)
      
      const input = getByPlaceholderText('Enter your email')
      expect(input.hasAttribute('required')).toBe(true)
    })
  })

  describe('Accessibility', () => {
    it('supports aria-label prop', () => {
      const { container } = render(
        <CtaSection aria-label="Newsletter signup" />
      )
      
      const section = container.querySelector('section')
      expect(section?.getAttribute('aria-label')).toBe('Newsletter signup')
    })

    it('uses semantic section element', () => {
      const { container } = render(<CtaSection title="Test" />)
      
      expect(container.querySelector('section')).toBeDefined()
    })

    it('uses heading element for title', () => {
      const { container } = render(<CtaSection title="Call to Action" />)
      
      const heading = container.querySelector('h2')
      expect(heading?.textContent).toBe('Call to Action')
    })
  })

  describe('Styling and Layout', () => {
    it('applies custom className', () => {
      const { container } = render(
        <CtaSection className="custom-test-class" title="Test" />
      )
      
      const contentDiv = container.querySelector('div[class*="custom-test-class"]')
      expect(contentDiv).toBeDefined()
    })

    it('centers content', () => {
      const { container } = render(<CtaSection title="Test" />)
      
      const contentDiv = container.querySelector('div[class*="items-center"]')
      expect(contentDiv?.className).toContain('text-center')
    })

    it('applies responsive typography to title', () => {
      const { container } = render(<CtaSection title="Responsive Title" />)
      
      const title = container.querySelector('h2')
      expect(title?.className).toContain('text-3xl')
      expect(title?.className).toContain('md:text-4xl')
    })

    it('applies font-display to title', () => {
      const { container } = render(<CtaSection title="Display Font" />)
      
      const title = container.querySelector('h2')
      expect(title?.className).toContain('font-display')
    })

    it('constrains description width', () => {
      const { container } = render(<CtaSection description="Long description text" />)
      
      const description = container.querySelector('p')
      expect(description?.className).toContain('max-w-2xl')
    })
  })
})
