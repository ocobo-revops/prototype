import React from 'react'

export interface SectionProps {
  spacing?: 'sm' | 'md' | 'lg'
  background?: 'white' | 'gray' | 'dark' | 'yellow' | 'mint' | 'sky'
  children?: React.ReactNode
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

const spacingClasses = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
} as const

const backgroundClasses = {
  white: 'bg-white text-ocobo-dark',
  gray: 'bg-ocobo-gray-100',
  dark: 'bg-ocobo-dark text-white',
  yellow: 'bg-ocobo-yellow',
  mint: 'bg-ocobo-mint',
  sky: 'bg-ocobo-sky',
} as const

export function Section({
  spacing = 'md',
  background = 'white',
  children,
  className = '',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  const classes = [
    'w-full',
    spacingClasses[spacing],
    'px-4 sm:px-6 lg:px-8',
    backgroundClasses[background],
    className
  ].filter(Boolean).join(' ')

  return (
    <section
      className={classes}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  )
}
