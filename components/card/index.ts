import { CardRoot, type CardRootProps } from './root'
import { CardHeader, type CardHeaderProps } from './header'
import { CardTitle, type CardTitleProps } from './title'
import { CardDescription, type CardDescriptionProps } from './description'
import { CardBody, type CardBodyProps } from './body'
import { CardFooter, type CardFooterProps } from './footer'
import { CardMedia, type CardMediaProps, type CardMediaAspectRatio } from './media'
import { CardBadge, type CardBadgeProps, type CardBadgePosition } from './card-badge'
import { CardAvatar, type CardAvatarProps, type CardAvatarSize, type CardAvatarBorder } from './avatar'
import { CardIconBox, type CardIconBoxProps, type CardIconBoxSize } from './icon-box'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
  Media: CardMedia,
  Badge: CardBadge,
  Avatar: CardAvatar,
  IconBox: CardIconBox,
}

export type {
  CardRootProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardBodyProps,
  CardFooterProps,
  CardMediaProps,
  CardMediaAspectRatio,
  CardBadgeProps,
  CardBadgePosition,
  CardAvatarProps,
  CardAvatarSize,
  CardAvatarBorder,
  CardIconBoxProps,
  CardIconBoxSize,
}
export type {
  CardContextValue,
  CardVariant,
  CardSize,
  CardColorPalette,
} from './context'
export { useCardContext } from './context'
