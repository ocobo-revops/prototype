import { Plus } from 'lucide-react';
import type React from 'react';
import type { ThemeColor } from '../../types';

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	colour: ThemeColor;
	label?: string;
	className?: string;
}

const colourStyles: Record<ThemeColor, { bg: string; text: string }> = {
	yellow: { bg: 'bg-ocobo-yellowLight', text: 'text-ocobo-yellow' },
	mint: { bg: 'bg-ocobo-mintLight', text: 'text-ocobo-mint' },
	sky: { bg: 'bg-ocobo-skyLight', text: 'text-ocobo-sky' },
	coral: { bg: 'bg-ocobo-coralLight', text: 'text-ocobo-coral' },
	dark: { bg: 'bg-gray-100', text: 'text-ocobo-dark' },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
	colour,
	label,
	className = '',
}) => {
	const styles = colourStyles[colour];

	return (
		<div
			className={`group relative bg-white border border-gray-100 p-12 aspect-square rounded-2xl transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 flex flex-col items-center justify-center text-center ${className}`}
		>
			<div
				className={`absolute inset-0 ${styles.bg} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
			/>

			<div
				className={`mb-8 ${styles.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
			>
				{icon}
			</div>

			{label && (
				<span className="font-display font-black text-ocobo-dark/30 text-2xs uppercase tracking-[0.5em] mb-4">
					{label}
				</span>
			)}

			<h3
				className={`font-display text-4xl font-black text-ocobo-dark group-hover:${styles.text} mb-3 tracking-tighter transition-colors`}
			>
				{title}
			</h3>

			<p className="text-gray-400 font-bold text-2xs uppercase tracking-[0.2em]">
				{description}
			</p>

			<div className="absolute bottom-6 opacity-0 group-hover:opacity-20 transition-opacity">
				<Plus size={20} className="text-ocobo-dark" />
			</div>
		</div>
	);
};

export default FeatureCard;
