import type React from 'react';
import { ThemeColor } from '../../types';

interface AccentCardProps {
	title: string;
	description: string;
	color?: ThemeColor;
	className?: string;
}

const AccentCard: React.FC<AccentCardProps> = ({
	title,
	description,
	color = ThemeColor.YELLOW,
	className = '',
}) => {
	const colorStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'border-l-ocobo-yellow bg-ocobo-yellow-light',
		[ThemeColor.MINT]: 'border-l-ocobo-mint bg-ocobo-mint-light',
		[ThemeColor.SKY]: 'border-l-ocobo-sky bg-ocobo-sky-light',
		[ThemeColor.CORAL]: 'border-l-ocobo-coral bg-ocobo-coral-light',
		[ThemeColor.DARK]: 'border-l-ocobo-dark bg-gray-100',
	};

	return (
		<div
			className={`border-l-4 rounded-lg p-6 ${colorStyles[color]} ${className}`}
		>
			<h3 className="font-display font-bold text-lg text-ocobo-dark mb-2">
				{title}
			</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default AccentCard;
