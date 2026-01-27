import type { LucideIcon } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, hstack } from 'styled-system/patterns';
import { ThemeColor } from '../../types';

interface ScopeCardProps {
	title: string;
	items: string[];
	color?: ThemeColor;
	icon: LucideIcon;
	className?: string;
}

const iconBgStyles: Record<ThemeColor, { bg: string; color: string }> = {
	[ThemeColor.YELLOW]: { bg: 'ocobo.yellow.light', color: 'ocobo.yellow' },
	[ThemeColor.MINT]: { bg: 'ocobo.mint.light', color: 'ocobo.mint' },
	[ThemeColor.SKY]: { bg: 'ocobo.sky.light', color: 'ocobo.sky' },
	[ThemeColor.CORAL]: { bg: 'ocobo.coral.light', color: 'ocobo.coral' },
	[ThemeColor.DARK]: { bg: 'gray.200', color: 'ocobo.dark' },
};

const bulletStyles: Record<ThemeColor, string> = {
	[ThemeColor.YELLOW]: 'ocobo.yellow',
	[ThemeColor.MINT]: 'ocobo.mint',
	[ThemeColor.SKY]: 'ocobo.sky',
	[ThemeColor.CORAL]: 'ocobo.coral',
	[ThemeColor.DARK]: 'ocobo.dark',
};

const hoverBorderStyles: Record<ThemeColor, string> = {
	[ThemeColor.YELLOW]: 'ocobo.yellow',
	[ThemeColor.MINT]: 'ocobo.mint',
	[ThemeColor.SKY]: 'ocobo.sky',
	[ThemeColor.CORAL]: 'ocobo.coral',
	[ThemeColor.DARK]: 'ocobo.dark',
};

export const ScopeCard: React.FC<ScopeCardProps> = ({
	title,
	items,
	color = ThemeColor.YELLOW,
	icon: Icon,
	className = '',
}) => {
	const iconStyle = iconBgStyles[color];

	return (
		<div
			className={`${css({
				bg: 'white',
				borderWidth: '1px',
				borderColor: 'gray.100',
				p: '8',
				transition: 'all',
				transitionDuration: '300ms',
				rounded: 'xl',
				_hover: { shadow: 'lg', borderColor: hoverBorderStyles[color] },
			})} ${className}`}
		>
			<div
				className={`${center()} ${css({
					w: '12',
					h: '12',
					rounded: 'lg',
					mb: '6',
					bg: iconStyle.bg,
					color: iconStyle.color,
				})}`}
			>
				<Icon size={24} />
			</div>
			<h3
				className={css({
					fontFamily: 'display',
					fontSize: 'xl',
					fontWeight: 'bold',
					mb: '4',
				})}
			>
				{title}
			</h3>
			<ul className={css({ spaceY: '3', fontSize: 'sm', color: 'gray.600' })}>
				{items.map((item) => (
					<li key={item} className={hstack({ gap: '3' })}>
						<div
							className={css({
								w: '1.5',
								h: '1.5',
								rounded: 'full',
								flexShrink: 0,
								bg: bulletStyles[color],
							})}
						/>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
