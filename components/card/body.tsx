import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext } from './context'

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Body content */
  children: ReactNode
}

// Margin-top applied only when not first child (using first:mt-0 to override)
const bodyMarginClasses = {
  sm: 'mt-2 first:mt-0',
  md: 'mt-3 first:mt-0',
  lg: 'mt-4 first:mt-0',
} as const

/**
 * Card.Body component - Main content area for card.
 * Renders with size-aware top margin (removed if first child).
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Card content goes here.</p>
 *   </Card.Body>
 * </Card.Root>
 */
export function CardBody({
  children,
  className,
  ...props
}: CardBodyProps) {
  const { size } = useCardContext()

  const classes = [bodyMarginClasses[size]]
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} {...props}>
      {children}
    </div>
  )
}
