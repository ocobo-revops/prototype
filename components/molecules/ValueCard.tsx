import type React from 'react';
import { css } from 'styled-system/css';
import { ThemeColor } from '../../types';

interface ValueCardProps {
	title: string;
	description: string;
	detail?: string;
	color?: ThemeColor;
	variant?: 'light' | 'dark';
	className?: string;
}

const titleColorMap: Record<ThemeColor, string> = {
	[ThemeColor.YELLOW]: 'ocobo.yellow',
	[ThemeColor.MINT]: 'ocobo.mint',
	[ThemeColor.SKY]: 'ocobo.sky',
	[ThemeColor.CORAL]: 'ocobo.coral',
	[ThemeColor.DARK]: 'ocobo.dark',
};

export const ValueCard: React.FC<ValueCardProps> = ({
	title,
	description,
	detail,
	color = ThemeColor.YELLOW,
	variant = 'light',
	className = '',
}) => {
	const titleColor =
		color === ThemeColor.DARK && variant === 'dark'
			? 'white'
			: titleColorMap[color];
	const descriptionColor = variant === 'dark' ? 'gray.300' : 'gray.600';

	return (
		<div className={className}>
			<h3
				className={css({
					fontFamily: 'display',
					fontWeight: 'bold',
					fontSize: '2xl',
					mb: '4',
					color: titleColor,
				})}
			>
				{title}
			</h3>
			<p className={css({ color: descriptionColor, lineHeight: 'relaxed' })}>
				{description}
			</p>
			{detail && (
				<p
					className={css({
						fontSize: 'sm',
						color: 'gray.500',
						mt: '2',
						fontStyle: 'italic',
					})}
				>
					→ {detail}
				</p>
			)}
		</div>
	);
};
