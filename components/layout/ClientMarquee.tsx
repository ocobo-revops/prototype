interface ClientMarqueeProps {
	clients: string[];
	/** Vertical padding: 'sm' = py-3, 'md' = py-8 */
	padding?: 'sm' | 'md';
	/** Text size: 'sm' = text-base md:text-lg, 'md' = text-base md:text-xl */
	textSize?: 'sm' | 'md';
	/** Show border-y */
	bordered?: boolean;
}

const paddingMap = {
	sm: 'py-3',
	md: 'py-8',
} as const;

const textSizeMap = {
	sm: 'text-base md:text-lg',
	md: 'text-base md:text-xl',
} as const;

export const ClientMarquee = ({
	clients,
	padding = 'sm',
	textSize = 'sm',
	bordered = false,
}: ClientMarqueeProps) => {
	const extendedClients = [...clients, ...clients, ...clients];

	return (
		<div
			className={`relative w-full overflow-hidden ${paddingMap[padding]} ${bordered ? 'border-y border-white/5' : ''}`}
		>
			<div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-ocobo-dark to-transparent z-10 pointer-events-none" />
			<div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-ocobo-dark to-transparent z-10 pointer-events-none" />

			<div className="flex w-max animate-marquee-ultra-slow whitespace-nowrap">
				{extendedClients.map((client, idx) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: marquee animation requires duplicate elements
						key={`${client}-${idx}`}
						className="flex items-center justify-center px-10 md:px-14"
					>
						<span
							className={`font-display font-black text-white/20 ${textSizeMap[textSize]} tracking-[0.25em] uppercase hover:text-ocobo-yellow transition-colors cursor-default select-none`}
						>
							{client}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
