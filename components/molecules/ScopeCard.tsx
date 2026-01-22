import type { LucideIcon } from 'lucide-react';
import type React from 'react';
import { ThemeColor } from '../../types';

interface ScopeCardProps {
	title: string;
	items: string[];
	color?: ThemeColor;
	icon: LucideIcon;
	className?: string;
}

const ScopeCard: React.FC<ScopeCardProps> = ({
	title,
	items,
	color = ThemeColor.YELLOW,
	icon: Icon,
	className = '',
}) => {
	const iconBgStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'bg-ocobo-yellow-light text-ocobo-yellow',
		[ThemeColor.MINT]: 'bg-ocobo-mint-light text-ocobo-mint',
		[ThemeColor.SKY]: 'bg-ocobo-sky-light text-ocobo-sky',
		[ThemeColor.CORAL]: 'bg-ocobo-coral-light text-ocobo-coral',
		[ThemeColor.DARK]: 'bg-gray-200 text-ocobo-dark',
	};

	const bulletStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'bg-ocobo-yellow',
		[ThemeColor.MINT]: 'bg-ocobo-mint',
		[ThemeColor.SKY]: 'bg-ocobo-sky',
		[ThemeColor.CORAL]: 'bg-ocobo-coral',
		[ThemeColor.DARK]: 'bg-ocobo-dark',
	};

	const hoverBorderStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'hover:border-ocobo-yellow',
		[ThemeColor.MINT]: 'hover:border-ocobo-mint',
		[ThemeColor.SKY]: 'hover:border-ocobo-sky',
		[ThemeColor.CORAL]: 'hover:border-ocobo-coral',
		[ThemeColor.DARK]: 'hover:border-ocobo-dark',
	};

	return (
		<div
			className={`bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl ${hoverBorderStyles[color]} ${className}`}
		>
			<div
				className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${iconBgStyles[color]}`}
			>
				<Icon size={24} />
			</div>
			<h3 className="font-display text-xl font-bold mb-4">{title}</h3>
			<ul className="space-y-3 text-sm text-gray-600">
				{items.map((item) => (
					<li key={item} className="flex items-center gap-3">
						<div
							className={`w-1.5 h-1.5 rounded-full shrink-0 ${bulletStyles[color]}`}
						/>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ScopeCard;
