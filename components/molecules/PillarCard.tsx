import type { LucideIcon } from 'lucide-react';
import type React from 'react';
import { ThemeColor } from '../../types';

interface Deliverable {
	title: string;
	description: string;
}

interface PillarCardProps {
	number: string;
	title: string;
	description: string;
	deliverables: Deliverable[];
	color?: ThemeColor;
	icon: LucideIcon;
	className?: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
	number,
	title,
	description,
	deliverables,
	color = ThemeColor.YELLOW,
	icon: Icon,
	className = '',
}) => {
	const borderColorStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'border-ocobo-yellow',
		[ThemeColor.MINT]: 'border-ocobo-mint',
		[ThemeColor.SKY]: 'border-ocobo-sky',
		[ThemeColor.CORAL]: 'border-ocobo-coral',
		[ThemeColor.DARK]: 'border-ocobo-dark',
	};

	const iconBgStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'bg-ocobo-yellow-light text-ocobo-yellow',
		[ThemeColor.MINT]: 'bg-ocobo-mint-light text-ocobo-mint',
		[ThemeColor.SKY]: 'bg-ocobo-sky-light text-ocobo-sky',
		[ThemeColor.CORAL]: 'bg-ocobo-coral-light text-ocobo-coral',
		[ThemeColor.DARK]: 'bg-gray-200 text-ocobo-dark',
	};

	const bulletStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'bg-ocobo-yellow ring-ocobo-yellow-light',
		[ThemeColor.MINT]: 'bg-ocobo-mint ring-ocobo-mint-light',
		[ThemeColor.SKY]: 'bg-ocobo-sky ring-ocobo-sky-light',
		[ThemeColor.CORAL]: 'bg-ocobo-coral ring-ocobo-coral-light',
		[ThemeColor.DARK]: 'bg-ocobo-dark ring-gray-200',
	};

	return (
		<div
			className={`bg-white p-10 border-t-8 ${borderColorStyles[color]} shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group ${className}`}
		>
			<div className="flex justify-between items-start mb-10">
				<div className={`p-4 rounded-full ${iconBgStyles[color]}`}>
					<Icon size={32} />
				</div>
				<span className="text-6xl font-display font-bold text-gray-100/60 leading-none select-none">
					{number}
				</span>
			</div>

			<h3 className="font-display text-3xl font-bold mb-6">{title}</h3>

			<p className="text-gray-600 mb-10 leading-relaxed font-medium">
				{description}
			</p>

			<div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
				<span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">
					LIVRABLES CLÉS
				</span>
				<div className="space-y-6">
					{deliverables.map((deliverable) => (
						<div
							key={deliverable.title}
							className="flex gap-4 items-start group/item"
						>
							<div
								className={`mt-1.5 w-2 h-2 rounded-full ring-4 shrink-0 ${bulletStyles[color]}`}
							/>
							<div>
								<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
									{deliverable.title}
								</h4>
								<p className="text-xs text-gray-500 leading-relaxed">
									{deliverable.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PillarCard;
