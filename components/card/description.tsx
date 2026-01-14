import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext } from './context'

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Description content */
  children: ReactNode
}

const descriptionSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const

/**
 * Card.Description component - Renders muted description text.
 * Size-aware text scaling based on Card.Root context.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *     <Card.Description>A brief description of the card content.</Card.Description>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  const { size } = useCardContext()

  const classes = [
    descriptionSizeClasses[size],
    'text-ocobo-gray-600',
  ]
  if (className) {
    classes.push(className)
  }

  return (
    <p className={classes.join(' ')} {...props}>
      {children}
    </p>
  )
}
