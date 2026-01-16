import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext } from './context'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Header content (typically Card.Title and Card.Description) */
  children: ReactNode
}

const headerGapClasses = {
  sm: 'gap-1',
  md: 'gap-1.5',
  lg: 'gap-2',
} as const

/**
 * Card.Header component - Container for card header content.
 * Renders a flex column container with size-aware gap spacing.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *     <Card.Description>Description</Card.Description>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardHeader({
  children,
  className,
  ...props
}: CardHeaderProps) {
  const { size } = useCardContext()

  const classes = [
    'flex flex-col',
    headerGapClasses[size],
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
