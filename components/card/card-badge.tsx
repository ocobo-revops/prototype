import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext } from './context'

export type CardBadgePosition = 
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  | 'flush-top-left' | 'flush-top-right' | 'flush-bottom-left' | 'flush-bottom-right'

export interface CardBadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Badge content */
  children: ReactNode
  /** Position of badge overlay */
  position?: CardBadgePosition
}

const badgePositionClasses = {
  'top-left': 'absolute top-2 left-2',
  'top-right': 'absolute top-2 right-2',
  'bottom-left': 'absolute bottom-2 left-2',
  'bottom-right': 'absolute bottom-2 right-2',
  'flush-top-left': 'absolute top-0 left-0',
  'flush-top-right': 'absolute top-0 right-0',
  'flush-bottom-left': 'absolute bottom-0 left-0',
  'flush-bottom-right': 'absolute bottom-0 right-0',
} as const

/**
 * Card.Badge component - Positioned badge overlay.
 * Renders children in an absolute positioned container.
 * Parent Card.Root should have relative positioning.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root className="relative">
 *   <Card.Badge position="top-right">
 *     <Badge colorPalette="coral">New</Badge>
 *   </Card.Badge>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardBadge({
  children,
  position = 'top-right',
  className,
  ...props
}: CardBadgeProps) {
  useCardContext() // validates within Card.Root

  const classes = [
    badgePositionClasses[position],
    'z-10',
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
