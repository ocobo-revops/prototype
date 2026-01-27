import type React from 'react';
import { css } from 'styled-system/css';
import { ThemeColor } from '../../types';

type NumberCircleVariant = ThemeColor | 'light';

interface NumberCircleProps {
	number: number;
	variant?: NumberCircleVariant;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const variantStyles: Record<
	NumberCircleVariant,
	{ color: string; bg: string }
> = {
	[ThemeColor.YELLOW]: { color: 'ocobo.dark', bg: 'ocobo.yellow' },
	[ThemeColor.MINT]: { color: 'ocobo.dark', bg: 'ocobo.mint' },
	[ThemeColor.SKY]: { color: 'white', bg: 'ocobo.sky' },
	[ThemeColor.CORAL]: { color: 'white', bg: 'ocobo.coral' },
	[ThemeColor.DARK]: { color: 'white', bg: 'ocobo.dark' },
	light: { color: 'ocobo.dark', bg: 'gray.100' },
};

const sizeStyles: Record<
	'sm' | 'md' | 'lg',
	{ w: string; h: string; fontSize: string }
> = {
	sm: { w: '6', h: '6', fontSize: 'xs' },
	md: { w: '8', h: '8', fontSize: 'sm' },
	lg: { w: '10', h: '10', fontSize: 'base' },
};

const NumberCircle: React.FC<NumberCircleProps> = ({
	number,
	variant = ThemeColor.DARK,
	size = 'md',
	className = '',
}) => {
	const variantStyle = variantStyles[variant];
	const sizeStyle = sizeStyles[size];

	return (
		<span
			className={`${css({
				rounded: 'full',
				fontFamily: 'display',
				fontWeight: 'black',
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: variantStyle.color,
				bg: variantStyle.bg,
				w: sizeStyle.w,
				h: sizeStyle.h,
				fontSize: sizeStyle.fontSize,
			})} ${className}`}
		>
			{number}
		</span>
	);
};

export default NumberCircle;
