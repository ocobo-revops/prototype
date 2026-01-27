import type React from 'react';
import { css } from 'styled-system/css';
import { ThemeColor } from '../../types';

interface AccentCardProps {
	title: string;
	description: string;
	color?: ThemeColor;
	className?: string;
}

const colorStyles: Record<ThemeColor, { borderColor: string; bg: string }> = {
	[ThemeColor.YELLOW]: {
		borderColor: 'ocobo.yellow',
		bg: 'ocobo.yellow.light',
	},
	[ThemeColor.MINT]: { borderColor: 'ocobo.mint', bg: 'ocobo.mint.light' },
	[ThemeColor.SKY]: { borderColor: 'ocobo.sky', bg: 'ocobo.sky.light' },
	[ThemeColor.CORAL]: { borderColor: 'ocobo.coral', bg: 'ocobo.coral.light' },
	[ThemeColor.DARK]: { borderColor: 'ocobo.dark', bg: 'gray.100' },
};

export const AccentCard: React.FC<AccentCardProps> = ({
	title,
	description,
	color = ThemeColor.YELLOW,
	className = '',
}) => {
	const style = colorStyles[color];

	return (
		<div
			className={`${css({
				borderLeftWidth: '4px',
				borderLeftColor: style.borderColor,
				rounded: 'lg',
				p: '6',
				bg: style.bg,
			})} ${className}`}
		>
			<h3
				className={css({
					fontFamily: 'display',
					fontWeight: 'bold',
					fontSize: 'lg',
					color: 'ocobo.dark',
					mb: '2',
				})}
			>
				{title}
			</h3>
			<p className={css({ color: 'gray.600' })}>{description}</p>
		</div>
	);
};
