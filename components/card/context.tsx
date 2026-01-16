import { createContext, useContext, type ReactNode } from 'react'

export type CardVariant = 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
export type CardSize = 'sm' | 'md' | 'lg'
export type CardColorPalette = 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'

export interface CardContextValue {
  variant: CardVariant
  size: CardSize
  colorPalette: CardColorPalette
}

const CardContext = createContext<CardContextValue | null>(null)

export function CardProvider({
  children,
  value,
}: {
  children: ReactNode
  value: CardContextValue
}) {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export function useCardContext(): CardContextValue {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('Card components must be used within a Card.Root')
  }
  return context
}
