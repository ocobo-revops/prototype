export const ArchitecturalGrid = () => {
	return (
		<div className="relative w-full max-w-[500px] animate-float-grid">
			<div className="flex items-stretch gap-4 relative">
				{/* Axe Ordonnée : ALIGNEMENT */}
				<div className="flex flex-col items-center justify-center py-4 shrink-0">
					<div className="[writing-mode:vertical-lr] rotate-180 font-display font-bold text-ocobo-dark/40 text-xs uppercase tracking-[0.6em] mb-4">
						Alignement
					</div>
					<div
						className="w-px bg-ocobo-dark/20 flex-grow origin-left animate-blueprint-in origin-top"
						style={{ animationDelay: '0.2s' }}
					></div>
				</div>

				{/* Grid Container */}
				<div className="relative z-10 bg-white border-2 border-ocobo-dark p-8 shadow-offset flex-grow">
					<div className="grid grid-cols-2 gap-4 mb-4">
						<div
							className="opacity-0 animate-box-pop h-24 bg-ocobo-yellow-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group"
							style={{ animationDelay: '0.4s' }}
						>
							<span className="font-display font-bold group-hover:text-ocobo-yellow transition-colors text-xs md:text-sm">
								MARKETING
							</span>
						</div>
						<div
							className="opacity-0 animate-box-pop h-24 bg-ocobo-sky-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group"
							style={{ animationDelay: '0.5s' }}
						>
							<span className="font-display font-bold group-hover:text-ocobo-sky transition-colors text-xs md:text-sm">
								SALES
							</span>
						</div>
						<div
							className="opacity-0 animate-box-pop h-24 bg-ocobo-mint-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group"
							style={{ animationDelay: '0.6s' }}
						>
							<span className="font-display font-bold group-hover:text-ocobo-mint transition-colors text-xs md:text-sm">
								CLIENT
							</span>
						</div>
						<div
							className="opacity-0 animate-box-pop h-24 bg-ocobo-coral-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group"
							style={{ animationDelay: '0.7s' }}
						>
							<span className="font-display font-bold group-hover:text-ocobo-coral transition-colors text-xs md:text-sm">
								FINANCE
							</span>
						</div>
					</div>

					{/* Foundation Line (X-Axis) */}
					<div className="h-2 bg-ocobo-dark w-full mb-4 origin-left animate-blueprint-in"></div>

					{/* Axe Abscisse labels */}
					<div className="flex justify-between text-xs md:text-xs font-bold uppercase tracking-widest text-ocobo-dark/60">
						<span
							className="opacity-0 animate-box-pop"
							style={{ animationDelay: '0.9s' }}
						>
							Technology
						</span>
						<span
							className="opacity-0 animate-box-pop"
							style={{ animationDelay: '1s' }}
						>
							Performance
						</span>
						<span
							className="opacity-0 animate-box-pop"
							style={{ animationDelay: '1.1s' }}
						>
							Enablement
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
