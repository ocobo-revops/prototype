export enum ThemeColor {
  YELLOW = 'yellow',
  MINT = 'mint',
  SKY = 'sky',
  CORAL = 'coral',
  DARK = 'dark'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  theme: ThemeColor;
  link?: string;
}

export interface StatItem {
  value: string;
  label: string;
}