import type { ElementType, ReactNode } from 'react'

/**
 * Container component for consistent page width and centering.
 * Provides responsive horizontal padding and max-width constraints.
 */
export interface ContainerProps {
  /** Max-width variant: sm (768px), md (1024px), lg (1280px), full (100%) */
  size?: 'sm' | 'md' | 'lg' | 'full'
  /** Content to render inside the container */
  children: ReactNode
  /** Additional CSS classes to apply */
  className?: string
  /** HTML element to render as (default: div) */
  as?: ElementType
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
} as const

/**
 * Layout container with responsive padding and max-width constraints.
 * @example
 * <Container size="lg" as="main">
 *   <h1>Page content</h1>
 * </Container>
 */
export function Container({
  size = 'md',
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  const classes = ['mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', sizeClasses[size]]
  if (className) classes.push(className)

  return <Component className={classes.join(' ')}>{children}</Component>
}
