import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * Button component with variant, size, and optional arrow icon.
 * Supports all native button attributes.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style: solid (dark bg), inverse (white bg), outline (transparent) */
  variant?: 'solid' | 'inverse' | 'outline'
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** Show arrow icon on the right */
  showArrow?: boolean
  /** Icon to display before children */
  leftIcon?: ReactNode
  /** Button content */
  children: ReactNode
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
} as const

const variantClasses = {
  solid: 'bg-ocobo-dark text-white hover:bg-ocobo-dark/90',
  inverse: 'bg-white text-ocobo-dark hover:bg-ocobo-gray-50',
  outline: 'bg-transparent text-ocobo-dark border border-ocobo-dark hover:bg-ocobo-dark hover:text-white',
} as const

/**
 * Button component with hover animations.
 * @example
 * <Button variant="solid" showArrow>
 *   Contact us
 * </Button>
 */
export function Button({
  variant = 'solid',
  size = 'md',
  showArrow = false,
  leftIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = [
    'group',
    'inline-flex items-center justify-center',
    'font-semibold rounded-full tracking-wide',
    'transition-all duration-300',
    'hover:-translate-y-0.5',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocobo-gray-400',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
  ]

  const classes = [
    ...baseClasses,
    sizeClasses[size],
    variantClasses[variant],
  ]
  if (className) classes.push(className)

  return (
    <button
      type="button"
      className={classes.join(' ')}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  )
}
