import type React from 'react';
import { ThemeColor } from '../../types';

interface ValueCardProps {
	title: string;
	description: string;
	detail?: string;
	color?: ThemeColor;
	variant?: 'light' | 'dark';
	className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
	title,
	description,
	detail,
	color = ThemeColor.YELLOW,
	variant = 'light',
	className = '',
}) => {
	const titleColorStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'text-ocobo-yellow',
		[ThemeColor.MINT]: 'text-ocobo-mint',
		[ThemeColor.SKY]: 'text-ocobo-sky',
		[ThemeColor.CORAL]: 'text-ocobo-coral',
		[ThemeColor.DARK]: variant === 'dark' ? 'text-white' : 'text-ocobo-dark',
	};

	const descriptionClass =
		variant === 'dark' ? 'text-gray-300' : 'text-gray-600';

	return (
		<div className={`${className}`}>
			<h3
				className={`font-display font-bold text-2xl mb-4 ${titleColorStyles[color]}`}
			>
				{title}
			</h3>
			<p className={`${descriptionClass} leading-relaxed`}>{description}</p>
			{detail && (
				<p className="text-sm text-gray-500 mt-2 italic">→ {detail}</p>
			)}
		</div>
	);
};

export default ValueCard;
