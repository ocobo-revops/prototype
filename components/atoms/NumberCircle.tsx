import type React from 'react';
import { ThemeColor } from '../../types';

type NumberCircleVariant = ThemeColor | 'light';

interface NumberCircleProps {
	number: number;
	variant?: NumberCircleVariant;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const NumberCircle: React.FC<NumberCircleProps> = ({
	number,
	variant = ThemeColor.DARK,
	size = 'md',
	className = '',
}) => {
	const baseStyles =
		'rounded-full font-display font-black inline-flex items-center justify-center';

	const variants: Record<NumberCircleVariant, string> = {
		[ThemeColor.YELLOW]: 'text-ocobo-dark bg-ocobo-yellow',
		[ThemeColor.MINT]: 'text-ocobo-dark bg-ocobo-mint',
		[ThemeColor.SKY]: 'text-white bg-ocobo-sky',
		[ThemeColor.CORAL]: 'text-white bg-ocobo-coral',
		[ThemeColor.DARK]: 'text-white bg-ocobo-dark',
		light: 'text-ocobo-dark bg-gray-100',
	};

	const sizes = {
		sm: 'w-6 h-6 text-xs',
		md: 'w-8 h-8 text-sm',
		lg: 'w-10 h-10 text-base',
	};

	return (
		<span
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
		>
			{number}
		</span>
	);
};

export default NumberCircle;
