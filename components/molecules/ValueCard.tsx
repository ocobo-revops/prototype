import type React from 'react';
import { ThemeColor } from '../../types';

interface ValueCardProps {
	title: string;
	description: string;
	color?: ThemeColor;
	className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
	title,
	description,
	color = ThemeColor.YELLOW,
	className = '',
}) => {
	const titleColorStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'text-ocobo-yellow',
		[ThemeColor.MINT]: 'text-ocobo-mint',
		[ThemeColor.SKY]: 'text-ocobo-sky',
		[ThemeColor.CORAL]: 'text-ocobo-coral',
		[ThemeColor.DARK]: 'text-ocobo-dark',
	};

	return (
		<div className={`${className}`}>
			<h3
				className={`font-display font-bold text-xl mb-3 ${titleColorStyles[color]}`}
			>
				{title}
			</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
};

export default ValueCard;
