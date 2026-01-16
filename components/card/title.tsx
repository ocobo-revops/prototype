import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'
import { useCardContext } from './context'

export type CardTitleProps<T extends ElementType = 'h3'> = {
  /** Element type to render (h2, h3, h4, p, span) */
  as?: T
  /** Use colorPalette from context for accent color (optional) */
  accent?: boolean
  /** Title content */
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

const titleSizeClasses = {
  sm: 'text-base font-semibold leading-tight',
  md: 'text-lg font-semibold leading-tight',
  lg: 'text-xl font-semibold leading-tight',
} as const

const accentColorClasses = {
  yellow: 'text-ocobo-yellow',
  mint: 'text-ocobo-mint',
  sky: 'text-ocobo-sky',
  coral: 'text-ocobo-coral',
  dark: 'text-ocobo-dark',
} as const

/**
 * Card.Title component - Renders card title with size-aware styling.
 * Polymorphic component supporting different heading levels.
 * Supports optional accent color from Card.Root's colorPalette.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root colorPalette="mint">
 *   <Card.Header>
 *     <Card.Title>Default dark title</Card.Title>
 *     <Card.Title accent>Accent colored title (mint)</Card.Title>
 *     <Card.Title as="h2">Custom h2 title</Card.Title>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardTitle<T extends ElementType = 'h3'>({
  as,
  accent = false,
  children,
  className,
  ...props
}: CardTitleProps<T>) {
  const { size, colorPalette } = useCardContext()
  const Component = (as || 'h3') as ElementType

  const classes = [
    titleSizeClasses[size],
    accent ? accentColorClasses[colorPalette] : 'text-ocobo-dark',
  ]
  if (className) {
    classes.push(className)
  }

  return (
    <Component className={classes.join(' ')} {...props}>
      {children}
    </Component>
  )
}
