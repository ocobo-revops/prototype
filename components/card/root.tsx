import type { HTMLAttributes, ReactNode } from 'react'
import {
  CardProvider,
  type CardVariant,
  type CardSize,
  type CardColorPalette,
} from './context'

export interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant
  /** Size controlling padding */
  size?: CardSize
  /** Color palette for outlined/filled variants */
  colorPalette?: CardColorPalette
  /** Card content */
  children: ReactNode
}

const variantClasses = {
  default: 'relative bg-white shadow-sm rounded-2xl overflow-hidden',
  outlined: 'relative bg-white border shadow-none rounded-2xl overflow-hidden',
  ghost: 'relative bg-transparent rounded-2xl overflow-hidden',
  filled: 'relative shadow-none rounded-2xl overflow-hidden',
  elevated: 'relative bg-white shadow-lg rounded-2xl overflow-hidden',
} as const

const sizeClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const

const outlinedBorderClasses = {
  yellow: 'border-ocobo-yellow',
  mint: 'border-ocobo-mint',
  sky: 'border-ocobo-sky',
  coral: 'border-ocobo-coral',
  dark: 'border-ocobo-dark',
} as const

const filledBgClasses = {
  yellow: 'bg-ocobo-yellow-light',
  mint: 'bg-ocobo-mint-light',
  sky: 'bg-ocobo-sky-light',
  coral: 'bg-ocobo-coral-light',
  dark: 'bg-ocobo-gray-100',
} as const



/**
 * Card.Root component - Container for card composition system.
 * Provides context to child components for variant, size, and colorPalette.
 * Default colorPalette is 'yellow'.
 * 
 * @example
 * <Card.Root variant="outlined" colorPalette="mint">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card.Root>
 */
export function CardRoot({
  variant = 'default',
  size = 'md',
  colorPalette = 'yellow',
  children,
  className,
  ...props
}: CardRootProps) {
  const classes: string[] = [
    variantClasses[variant],
    sizeClasses[size],
  ]

  if (variant === 'outlined') {
    classes.push(outlinedBorderClasses[colorPalette])
  }
  if (variant === 'filled') {
    classes.push(filledBgClasses[colorPalette])
  }
  if (className) {
    classes.push(className)
  }

  return (
    <CardProvider value={{ variant, size, colorPalette }}>
      <div className={classes.join(' ')} {...props}>
        {children}
      </div>
    </CardProvider>
  )
}
