import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Badge component for status indicators and labels.
 * Supports multiple color palettes for semantic meaning.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style: solid (filled), outline (border), subtle (light bg) */
  variant?: 'solid' | 'outline' | 'subtle'
  /** Size of the badge: normal or big */
  size?: 'normal' | 'big'
  /** Color theme for semantic meaning */
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
  /** Badge content */
  children: ReactNode
}

const sizeClasses = {
  normal: 'px-3 py-0.5 text-xs',
  big: 'px-4 py-1 text-sm',
} as const

// Static mappings for Tailwind purge
// Note: subtle variant uses base color for text (not dark)
const colorConfig = {
  yellow: {
    solid: 'bg-ocobo-yellow text-ocobo-dark',
    outline: 'border border-ocobo-yellow text-ocobo-yellow',
    subtle: 'bg-ocobo-yellow-light border border-ocobo-yellow text-ocobo-yellow',
  },
  mint: {
    solid: 'bg-ocobo-mint text-ocobo-dark',
    outline: 'border border-ocobo-mint text-ocobo-mint',
    subtle: 'bg-ocobo-mint-light border border-ocobo-mint text-ocobo-mint',
  },
  sky: {
    solid: 'bg-ocobo-sky text-ocobo-dark',
    outline: 'border border-ocobo-sky text-ocobo-sky',
    subtle: 'bg-ocobo-sky-light border border-ocobo-sky text-ocobo-sky',
  },
  coral: {
    solid: 'bg-ocobo-coral text-ocobo-dark',
    outline: 'border border-ocobo-coral text-ocobo-coral',
    subtle: 'bg-ocobo-coral-light border border-ocobo-coral text-ocobo-coral',
  },
  dark: {
    solid: 'bg-ocobo-dark text-white',
    outline: 'border border-ocobo-dark text-ocobo-dark',
    subtle: 'bg-ocobo-gray-100 border border-ocobo-dark text-ocobo-dark',
  },
} as const

/**
 * Badge component for tags, labels, and status indicators.
 * @example
 * <Badge colorPalette="mint" variant="subtle">Success</Badge>
 * <Badge colorPalette="coral" variant="solid">Warning</Badge>
 */
export function Badge({
  variant = 'subtle',
  size = 'normal',
  colorPalette = 'yellow',
  children,
  className,
  ...props
}: BadgeProps) {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-bold rounded-full uppercase',
  ]

  const classes = [
    ...baseClasses,
    sizeClasses[size],
    colorConfig[colorPalette][variant],
  ]
  if (className) classes.push(className)

  return (
    <span className={classes.join(' ')} {...props}>
      {children}
    </span>
  )
}
