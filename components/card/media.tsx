import type { HTMLAttributes } from 'react'
import { useCardContext } from './context'

export type CardMediaAspectRatio = 'video' | 'square' | 'wide'

export interface CardMediaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Image source URL */
  src: string
  /** Image alt text */
  alt: string
  /** Aspect ratio variant */
  aspectRatio?: CardMediaAspectRatio
  /** Extend image to card edges with negative margin */
  bleed?: boolean
}

const aspectRatioClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
} as const

// Negative margins to bleed to card edges, matching Card.Root padding
const bleedClasses = {
  sm: '-mx-4 -mt-4 first:-mt-4',
  md: '-mx-6 -mt-6 first:-mt-6',
  lg: '-mx-8 -mt-8 first:-mt-8',
} as const

/**
 * Card.Media component - Image container with aspect ratio.
 * Supports bleed prop to extend image to card edges.
 * Must be used within Card.Root.
 * 
 * @example
 * <Card.Root>
 *   <Card.Media src="/image.jpg" alt="Description" bleed />
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 * </Card.Root>
 */
export function CardMedia({
  src,
  alt,
  aspectRatio = 'video',
  bleed = false,
  className,
  ...props
}: CardMediaProps) {
  const { size } = useCardContext()

  const classes = [
    aspectRatioClasses[aspectRatio],
    'overflow-hidden bg-ocobo-gray-100',
  ]

  if (bleed) {
    classes.push(bleedClasses[size])
    // No rounding when bleeding - card's overflow-hidden handles corners
  } else {
    classes.push('rounded-2xl')
  }

  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')} {...props}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
