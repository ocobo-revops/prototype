import type { ReactNode } from 'react'

export interface GridSectionProps {
  /** Number of columns in the grid (default: 3) */
  columns?: 2 | 3 | 4
  /** Gap between grid items (default: 'md') */
  gap?: 'md' | 'lg'
  /** Grid content */
  children: ReactNode
  /** Additional classes */
  className?: string
}

// Responsive column classes: mobile-first (1 col), then md/lg breakpoints
const columnClasses = {
  2: 'grid-cols-1 lg:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
} as const

const gapClasses = {
  md: 'gap-6',
  lg: 'gap-8',
} as const

/** Responsive grid layout utility component */
export function GridSection({
  columns = 3,
  gap = 'md',
  children,
  className = '',
}: GridSectionProps): JSX.Element {
  const classes = [
    'grid',
    columnClasses[columns],
    gapClasses[gap],
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

GridSection.displayName = 'GridSection'
