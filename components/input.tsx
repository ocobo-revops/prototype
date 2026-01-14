import type { InputHTMLAttributes } from 'react'

/**
 * Input component with size variants.
 * Outline style with focus states using ocobo colors.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
} as const

/**
 * Text input with outline style and focus states.
 * @example
 * <Input size="md" placeholder="Enter your email" />
 */
export function Input({
  size = 'md',
  className,
  disabled,
  ...props
}: InputProps) {
  const baseClasses = [
    'w-full rounded-lg',
    'border border-ocobo-gray-300',
    'bg-white text-ocobo-dark',
    'placeholder:text-ocobo-gray-400',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-ocobo-yellow focus:border-ocobo-yellow',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-ocobo-gray-50',
  ]

  const classes = [
    ...baseClasses,
    sizeClasses[size],
  ]
  if (className) classes.push(className)

  return (
    <input
      className={classes.join(' ')}
      disabled={disabled}
      {...props}
    />
  )
}
