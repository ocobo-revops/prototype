import type React from 'react';
import { ThemeColor } from '../../types';

type BadgeVariant = ThemeColor | 'gray';

interface BadgeProps {
	variant?: BadgeVariant;
	size?: 'sm' | 'md';
	rounded?: 'sm' | 'full';
	children: React.ReactNode;
	className?: string;
}

const Badge: React.FC<BadgeProps> = ({
	variant = 'yellow',
	size = 'sm',
	rounded = 'sm',
	children,
	className = '',
}) => {
	const baseStyles = 'font-display font-black uppercase inline-block border';

	const variants: Record<BadgeVariant, string> = {
		[ThemeColor.YELLOW]:
			'text-ocobo-dark bg-ocobo-yellow-light border-ocobo-yellow/20',
		[ThemeColor.MINT]:
			'text-ocobo-dark bg-ocobo-mint-light border-ocobo-mint/20',
		[ThemeColor.SKY]: 'text-ocobo-sky bg-ocobo-sky-light border-ocobo-sky/20',
		[ThemeColor.CORAL]:
			'text-ocobo-coral bg-ocobo-coral-light border-ocobo-coral/20',
		[ThemeColor.DARK]: 'text-white bg-ocobo-dark border-ocobo-dark/20',
		gray: 'text-gray-400 bg-gray-100 border-gray-200',
	};

	const sizes = {
		sm: 'px-4 py-1.5 text-xs tracking-[0.3em]',
		md: 'px-6 py-2 text-xs tracking-[0.3em]',
	};

	const roundedStyles = {
		sm: 'rounded-sm',
		full: 'rounded-full',
	};

	return (
		<span
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]} ${className}`}
		>
			{children}
		</span>
	);
};

export default Badge;
