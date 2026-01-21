import { Plus } from 'lucide-react';

interface StackItem {
	type: 'logo' | 'empty';
	label?: string;
	logo?: string;
}

interface ModularStackGridProps {
	items: StackItem[];
	/** Container max width: 'lg' = max-w-lg, 'xl' = max-w-xl */
	maxWidth?: 'lg' | 'xl';
	/** Show label text below logos */
	showLabels?: boolean;
	/** Staggered fade-in animation */
	animated?: boolean;
}

const maxWidthMap = {
	lg: 'max-w-lg',
	xl: 'max-w-xl',
} as const;

export const ModularStackGrid = ({
	items,
	maxWidth = 'lg',
	showLabels = false,
	animated = false,
}: ModularStackGridProps) => {
	return (
		<div
			className={`relative w-full ${maxWidthMap[maxWidth]} mx-auto aspect-square p-4`}
		>
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage:
						'linear-gradient(#212323 1px, transparent 1px), linear-gradient(90deg, #212323 1px, transparent 1px)',
					backgroundSize: '25% 25%',
				}}
			/>

			<div className="grid grid-cols-4 gap-3 md:gap-4 relative z-10 h-full">
				{items.map((item, i) => (
					<div
						key={item.label ?? `empty-${i}`}
						className={`
							aspect-square rounded-xl md:rounded-2xl border transition-all duration-500 flex items-center justify-center
							${
								item.type === 'logo'
									? 'group bg-white border-gray-100 shadow-soft hover:shadow-xl hover:-translate-y-1 hover:border-ocobo-sky/30'
									: 'bg-gray-50/50 border-dashed border-gray-200 group/empty hover:bg-white hover:border-solid hover:border-ocobo-yellow/40'
							}
							${animated ? 'animate-fade-in-up' : ''}
						`}
						style={
							animated
								? {
										animationDelay: `${i * 0.05}s`,
										opacity: 0,
										animationFillMode: 'forwards',
									}
								: undefined
						}
					>
						{item.type === 'logo' ? (
							<div className="flex flex-col items-center gap-1.5">
								<img
									src={item.logo}
									alt={item.label}
									className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
								/>
								{showLabels && item.label && (
									<span className="text-xs font-black uppercase tracking-widest text-ocobo-dark opacity-30">
										{item.label}
									</span>
								)}
							</div>
						) : (
							<Plus
								size={16}
								className="text-gray-200 group-hover/empty:text-ocobo-yellow transition-colors"
							/>
						)}
					</div>
				))}
			</div>

			<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ocobo-yellow/5 rounded-full blur-2xl -z-10" />
		</div>
	);
};

/** Default stack items used across pages */
export const DEFAULT_STACK_ITEMS: StackItem[] = [
	{
		type: 'logo',
		label: 'HubSpot',
		logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
	},
	{ type: 'logo', label: 'Clay', logo: 'https://www.clay.com/favicon.ico' },
	{
		type: 'logo',
		label: 'Salesforce',
		logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
	},
	{
		type: 'logo',
		label: 'Notion',
		logo: 'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
	},
	{ type: 'logo', label: 'Vasco', logo: 'https://vasco.app/favicon.ico' },
	{
		type: 'logo',
		label: 'Aircall',
		logo: 'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
	},
	{ type: 'empty' },
	{ type: 'logo', label: 'Qobra', logo: 'https://qobra.co/favicon.ico' },
	{
		type: 'logo',
		label: 'Modjo',
		logo: 'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
	},
	{ type: 'empty' },
	{
		type: 'logo',
		label: 'Planhat',
		logo: 'https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg',
	},
	{
		type: 'logo',
		label: 'Dust',
		logo: 'https://dust.tt/static/logo_icon.png',
	},
	{ type: 'empty' },
	{
		type: 'logo',
		label: 'Hyperline',
		logo: 'https://www.hyperline.co/favicon.ico',
	},
	{
		type: 'logo',
		label: 'Lemlist',
		logo: 'https://www.lemlist.com/hubfs/lemlist-logo-2023.svg',
	},
	{ type: 'empty' },
];
