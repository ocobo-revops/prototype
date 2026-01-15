import React, { useState, FormEvent } from 'react'
import { Section } from './section'
import { Container } from '../container'
import { Button } from '../button'
import { Input } from '../input'

export interface CtaSectionProps {
  variant?: 'simple' | 'with-form'
  colorPalette?: 'yellow' | 'dark' | 'mint' | 'sky'
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
  inputPlaceholder?: string
  onFormSubmit?: (value: string) => void
  children?: React.ReactNode
  className?: string
  'aria-label'?: string
}

type ColorPalette = NonNullable<CtaSectionProps['colorPalette']>
type SectionBackground = 'white' | 'gray' | 'dark' | 'yellow' | 'mint' | 'sky'
type ButtonVariant = 'solid' | 'inverse' | 'outline'

// Map colorPalette to Section background
const backgroundMap: Record<ColorPalette, SectionBackground> = {
  yellow: 'yellow',
  dark: 'dark',
  mint: 'mint',
  sky: 'sky',
} as const

// Map colorPalette to text color
const textColorMap: Record<ColorPalette, string> = {
  yellow: 'text-ocobo-dark',
  dark: 'text-white',
  mint: 'text-ocobo-dark',
  sky: 'text-ocobo-dark',
} as const

// Map colorPalette to button variant - properly typed
const buttonVariantMap: Record<ColorPalette, ButtonVariant> = {
  yellow: 'solid',
  dark: 'inverse',
  mint: 'solid',
  sky: 'solid',
} as const

export function CtaSection({
  variant = 'simple',
  colorPalette = 'yellow',
  title,
  description,
  buttonText = 'Get Started',
  buttonHref,
  onButtonClick,
  inputPlaceholder = 'Enter your email',
  onFormSubmit,
  children,
  className = '',
  'aria-label': ariaLabel,
}: CtaSectionProps) {
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onFormSubmit && inputValue.trim()) {
      onFormSubmit(inputValue)
      setInputValue('') // Reset after submit
    }
  }

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
  }

  const textColor = textColorMap[colorPalette]
  const buttonVariant = buttonVariantMap[colorPalette]
  const background = backgroundMap[colorPalette]

  const classes = [
    'flex flex-col items-center text-center gap-6',
    textColor,
    className
  ].filter(Boolean).join(' ')

  return (
    <Section spacing="lg" background={background} aria-label={ariaLabel}>
      <Container size="md">
        <div className={classes}>
          {/* Title - explicitly inherits textColor from parent div via CSS cascade */}
          {title && (
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {title}
            </h2>
          )}

          {/* Description - explicitly inherits textColor from parent div via CSS cascade */}
          {description && (
            <p className="text-lg max-w-2xl">
              {description}
            </p>
          )}

          {/* Variant-specific content */}
          {variant === 'simple' && buttonHref ? (
            <a href={buttonHref} className="inline-block">
              <Button
                variant={buttonVariant}
                size="lg"
              >
                {buttonText}
              </Button>
            </a>
          ) : variant === 'simple' ? (
            <Button
              variant={buttonVariant}
              size="lg"
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          ) : null}

          {variant === 'with-form' && (
            <form 
              onSubmit={handleFormSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="submit"
                variant={buttonVariant}
                size="md"
              >
                {buttonText}
              </Button>
            </form>
          )}

          {/* Children for custom content */}
          {children}
        </div>
      </Container>
    </Section>
  )
}
