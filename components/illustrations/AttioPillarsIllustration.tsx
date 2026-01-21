import { GraduationCap, Layout, LineChart, Sliders } from 'lucide-react';

export const AttioPillarsIllustration = () => {
	return (
		<div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center overflow-visible">
			{/* ATTIO-STYLE FINE DOTS BACKGROUND - RESTRAINED AREA */}
			<div
				className="absolute inset-4 opacity-[0.12]"
				style={{
					backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)',
					backgroundSize: '24px 24px',
				}}
			></div>

			{/* CENTRAL ARCHITECTURAL GRID */}
			<div className="relative z-10 w-full h-full flex items-center justify-center">
				<svg
					viewBox="0 0 500 500"
					className="w-full h-full overflow-visible text-ocobo-dark"
				>
					{/* MAIN CONNECTING LINES (Subtle) */}
					<g
						stroke="currentColor"
						strokeWidth="0.5"
						strokeDasharray="4 4"
						opacity="0.1"
					>
						<line x1="250" y1="50" x2="250" y2="450" />
						<line x1="50" y1="250" x2="450" y2="250" />
						<circle cx="250" cy="250" r="100" fill="none" />
						<circle cx="250" cy="250" r="180" fill="none" />
					</g>

					{/* PILLAR 1: ALIGNEMENT (Yellow) */}
					<g
						className="group/p1 cursor-default opacity-0 animate-gentle-reveal"
						style={{ animationDelay: '0.2s' }}
					>
						<rect
							x="70"
							y="70"
							width="160"
							height="160"
							fill="white"
							stroke="currentColor"
							strokeWidth="1.5"
							className="transition-all duration-500 group-hover/p1:-translate-y-1 shadow-sm"
						/>
						<rect x="70" y="70" width="160" height="4" fill="#F1CF25" />
						<g className="opacity-40 group-hover/p1:opacity-100 transition-opacity">
							<Layout x="135" y="130" size={32} className="text-ocobo-dark" />
						</g>
						<text
							x="150"
							y="210"
							textAnchor="middle"
							fill="currentColor"
							fontSize="10"
							fontWeight="900"
							className="font-display uppercase tracking-[0.2em]"
						>
							Alignement
						</text>
						<circle
							cx="230"
							cy="230"
							r="3"
							fill="#F1CF25"
							className="animate-pulse"
						/>
					</g>

					{/* PILLAR 2: TECHNOLOGIE (Sky) */}
					<g
						className="group/p2 cursor-default opacity-0 animate-gentle-reveal"
						style={{ animationDelay: '0.35s' }}
					>
						<rect
							x="270"
							y="70"
							width="160"
							height="160"
							fill="white"
							stroke="currentColor"
							strokeWidth="1.5"
							className="transition-all duration-500 group-hover/p2:-translate-y-1 shadow-sm"
						/>
						<rect x="270" y="70" width="160" height="4" fill="#99D1DF" />
						<g className="opacity-40 group-hover/p2:opacity-100 transition-opacity">
							<Sliders x="335" y="130" size={32} className="text-ocobo-dark" />
						</g>
						<text
							x="350"
							y="210"
							textAnchor="middle"
							fill="currentColor"
							fontSize="10"
							fontWeight="900"
							className="font-display uppercase tracking-[0.2em]"
						>
							Technologie
						</text>
						<circle
							cx="270"
							cy="230"
							r="3"
							fill="#99D1DF"
							className="animate-pulse"
						/>
					</g>

					{/* PILLAR 3: PERFORMANCE (Mint) */}
					<g
						className="group/p3 cursor-default opacity-0 animate-gentle-reveal"
						style={{ animationDelay: '0.5s' }}
					>
						<rect
							x="70"
							y="270"
							width="160"
							height="160"
							fill="white"
							stroke="currentColor"
							strokeWidth="1.5"
							className="transition-all duration-500 group-hover/p3:translate-y-1 shadow-sm"
						/>
						<rect x="70" y="270" width="160" height="4" fill="#9ADBBA" />
						<g className="opacity-40 group-hover/p3:opacity-100 transition-opacity">
							<LineChart
								x="135"
								y="330"
								size={32}
								className="text-ocobo-dark"
							/>
						</g>
						<text
							x="150"
							y="410"
							textAnchor="middle"
							fill="currentColor"
							fontSize="10"
							fontWeight="900"
							className="font-display uppercase tracking-[0.2em]"
						>
							Performance
						</text>
						<circle
							cx="230"
							cy="270"
							r="3"
							fill="#9ADBBA"
							className="animate-pulse"
						/>
					</g>

					{/* PILLAR 4: ENABLEMENT (Coral) */}
					<g
						className="group/p4 cursor-default opacity-0 animate-gentle-reveal"
						style={{ animationDelay: '0.65s' }}
					>
						<rect
							x="270"
							y="270"
							width="160"
							height="160"
							fill="white"
							stroke="currentColor"
							strokeWidth="1.5"
							className="transition-all duration-500 group-hover/p4:translate-y-1 shadow-sm"
						/>
						<rect x="270" y="270" width="160" height="4" fill="#FE9C87" />
						<g className="opacity-40 group-hover/p4:opacity-100 transition-opacity">
							<GraduationCap
								x="335"
								y="330"
								size={32}
								className="text-ocobo-dark"
							/>
						</g>
						<text
							x="350"
							y="410"
							textAnchor="middle"
							fill="currentColor"
							fontSize="10"
							fontWeight="900"
							className="font-display uppercase tracking-[0.2em]"
						>
							Enablement
						</text>
						<circle
							cx="270"
							cy="270"
							r="3"
							fill="#FE9C87"
							className="animate-pulse"
						/>
					</g>

					{/* CENTRAL CORE NODE */}
					<g
						className="opacity-0 animate-gentle-reveal"
						style={{ animationDelay: '0.9s' }}
					>
						<circle cx="250" cy="250" r="25" fill="currentColor" />
						<path
							d="M242,250 L258,250 M250,242 L250,258"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<circle
							cx="250"
							cy="250"
							r="35"
							fill="none"
							stroke="currentColor"
							strokeWidth="0.5"
							strokeDasharray="2 4"
							className="animate-spin-slow"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
};
