import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext } from './context'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Footer content (typically buttons/actions) */
  children: ReactNode
}

// Margin-top applied only when not first child (using first:mt-0 to override)
const footerMarginClasses = {
  sm: 'mt-3 first:mt-0',
  md: 'mt-4 first:mt-0',
  lg: 'mt-6 first:mt-0',
} as const

const footerGapClasses = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
} as const

/**
 * Card.Footer component - Action area for card.
 * Renders flex container with size-aware margin and gap (margin removed if first child).
 * Typically contains Button components.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>
 *     <Button>Cancel</Button>
 *     <Button variant="solid">Submit</Button>
 *   </Card.Footer>
 * </Card.Root>
 */
export function CardFooter({
  children,
  className,
  ...props
}: CardFooterProps) {
  const { size } = useCardContext()

  const classes = [
    'flex items-center',
    footerMarginClasses[size],
    footerGapClasses[size],
  ]
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} {...props}>
      {children}
    </div>
  )
}
