import type { HTMLAttributes, ReactNode } from 'react'
import { useCardContext, type CardColorPalette } from './context'

export type CardIconBoxSize = 'sm' | 'md' | 'lg'

export interface CardIconBoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon content */
  children: ReactNode
  /** Size of the icon box */
  size?: CardIconBoxSize
  /** Color palette - defaults to Card.Root colorPalette */
  colorPalette?: CardColorPalette
  /** Use solid background (true) or light background (false, default) */
  solid?: boolean
}

const iconBoxSizeClasses = {
  sm: 'w-10 h-10 text-lg',
  md: 'w-12 h-12 text-xl',
  lg: 'w-14 h-14 text-2xl',
} as const

const iconBoxBgLightClasses = {
  yellow: 'bg-ocobo-yellow-light text-ocobo-yellow',
  mint: 'bg-ocobo-mint-light text-ocobo-mint',
  sky: 'bg-ocobo-sky-light text-ocobo-sky',
  coral: 'bg-ocobo-coral-light text-ocobo-coral',
  dark: 'bg-ocobo-gray-100 text-ocobo-dark',
} as const

const iconBoxBgSolidClasses = {
  yellow: 'bg-ocobo-yellow text-ocobo-dark',
  mint: 'bg-ocobo-mint text-ocobo-dark',
  sky: 'bg-ocobo-sky text-ocobo-dark',
  coral: 'bg-ocobo-coral text-white',
  dark: 'bg-ocobo-dark text-white',
} as const

/**
 * Card.IconBox component - Container for icons in cards.
 * Displays an icon with a colored background.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.IconBox colorPalette="mint">
 *     <Zap size={24} />
 *   </Card.IconBox>
 *   <Card.Header>
 *     <Card.Title>Feature</Card.Title>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardIconBox({
  children,
  size = 'md',
  colorPalette,
  solid = false,
  className,
  ...props
}: CardIconBoxProps) {
  const context = useCardContext()
  const palette = colorPalette || context.colorPalette

  const classes = [
    iconBoxSizeClasses[size],
    'rounded-xl flex items-center justify-center flex-shrink-0',
  ]

  if (solid) {
    classes.push(iconBoxBgSolidClasses[palette])
  } else {
    classes.push(iconBoxBgLightClasses[palette])
  }

  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} {...props}>
      {children}
    </div>
  )
}
