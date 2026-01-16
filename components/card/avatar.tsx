import type { HTMLAttributes } from 'react'
import { useCardContext } from './context'

export type CardAvatarSize = 'sm' | 'md' | 'lg'

export type CardAvatarBorder = 'none' | 'light' | 'dark' | 'yellow' | 'mint' | 'sky' | 'coral'

export interface CardAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Image source URL */
  src?: string
  /** Image alt text */
  alt?: string
  /** Fallback initials when no image */
  initials?: string
  /** Avatar size */
  size?: CardAvatarSize
  /** Border style */
  border?: CardAvatarBorder
}

const avatarSizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
} as const

const avatarBorderClasses = {
  none: '',
  light: 'border-2 border-ocobo-gray-100',
  dark: 'border-2 border-ocobo-dark',
  yellow: 'border-2 border-ocobo-yellow',
  mint: 'border-2 border-ocobo-mint',
  sky: 'border-2 border-ocobo-sky',
  coral: 'border-2 border-ocobo-coral',
} as const

/**
 * Card.Avatar component - Circular avatar image.
 * Shows image if src provided, otherwise displays initials.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Avatar src="/avatar.jpg" alt="John Doe" size="md" />
 *     <Card.Title>John Doe</Card.Title>
 *   </Card.Header>
 * </Card.Root>
 * 
 * @example
 * // With initials fallback
 * <Card.Avatar initials="JD" size="lg" />
 */
export function CardAvatar({
  src,
  alt,
  initials,
  size = 'md',
  border = 'none',
  className,
  ...props
}: CardAvatarProps) {
  useCardContext() // validates within Card.Root

  const classes = [
    avatarSizeClasses[size],
    'rounded-full overflow-hidden flex-shrink-0',
    'flex items-center justify-center',
    'bg-ocobo-gray-100 text-ocobo-dark font-medium',
  ]
  if (border !== 'none') {
    classes.push(avatarBorderClasses[border])
  }
  // Larger avatars look better with thicker borders
  if (border !== 'none' && size === 'lg') {
    classes.push('border-4')
  }
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} {...props}>
      {src ? (
        <img src={src} alt={alt || ''} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}
