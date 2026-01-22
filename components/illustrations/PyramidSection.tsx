export const PyramidSection = () => {
	return (
		<div className="relative w-full max-w-6xl mx-auto h-[620px]">
			<svg
				viewBox="0 0 1000 620"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full overflow-visible text-ocobo-dark"
			>
				{/* Background decorative blobs - Colors synchronized with sections */}
				<circle cx="580" cy="180" r="50" fill="#FE9C87" fillOpacity="0.25" />{' '}
				{/* 1. CEO -> Coral */}
				<circle cx="420" cy="250" r="45" fill="#F1CF25" fillOpacity="0.25" />{' '}
				{/* 2. Managers -> Yellow */}
				<circle cx="630" cy="400" r="48" fill="#99D1DF" fillOpacity="0.25" />{' '}
				{/* 3. Teams -> Blue */}
				<circle cx="370" cy="480" r="50" fill="#9ADBBA" fillOpacity="0.25" />{' '}
				{/* 4. Clients -> Mint */}
				{/* Decorative Sparkles (crosses) - Adjusted positions */}
				<g transform="translate(450, 200) rotate(15)">
					<path
						d="M-8 0 L8 0 M0 -8 L0 8"
						stroke="currentColor"
						strokeWidth="2.5"
					/>
				</g>
				<g transform="translate(680, 420)">
					<path
						d="M-6 0 L6 0 M0 -6 L0 6"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</g>
				<g transform="translate(340, 540) rotate(-15)">
					<path
						d="M-5 0 L5 0 M0 -5 L0 5"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</g>
				<g transform="translate(620, 310) rotate(45)">
					<path
						d="M-10 0 L10 0 M0 -10 L0 10"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
				</g>
				{/* --- Pyramid Levels --- */}
				{/* Level 1: CEO (Triangle) */}
				<path
					d="M500 150 L460 220 L540 220 Z"
					fill="white"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<path d="M540 220 L550 210 L510 140 L500 150" fill="currentColor" />
				{/* Level 2: Managers */}
				<path
					d="M455 235 L545 235 L570 305 L430 305 Z"
					fill="white"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<path d="M570 305 L580 295 L555 225 L545 235" fill="currentColor" />
				{/* Level 3: Équipes terrain */}
				<path
					d="M425 320 L575 320 L605 390 L395 390 Z"
					fill="white"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<path d="M605 390 L615 380 L585 310 L575 320" fill="currentColor" />
				{/* --- Dashed Line moved up (between Teams and Clients) --- */}
				<path
					d="M380 397.5 L630 397.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeDasharray="4 4"
					opacity="0.4"
				/>
				{/* Level 4: Clients */}
				<path
					d="M385 405 L615 405 L650 490 L350 490 Z"
					fill="white"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<path d="M650 490 L660 480 L625 395 L615 405" fill="currentColor" />
				{/* --- Connectors & Text Boxes --- */}
				{/* Label 1 (CEO) - Top Right */}
				<path
					d="M525 180 C 560 180, 575 100, 605 100"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
				<circle cx="605" cy="100" r="3.5" fill="currentColor" />
				<foreignObject x="625" y="40" width="350" height="200">
					<div className="flex flex-col items-start text-left">
						<div className="flex items-center gap-4 mb-3">
							<div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								1
							</div>
							<h3 className="font-display font-bold text-2xl text-ocobo-dark">
								CEO
							</h3>
						</div>
						<ul className="text-sm text-gray-500 font-medium space-y-1">
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-coral shrink-0 mt-1.5"></span>
								Manque de visibilité sur le business
							</li>
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-coral shrink-0 mt-1.5"></span>
								Vision difficile à traduire en actions
							</li>
						</ul>
					</div>
				</foreignObject>
				{/* Label 2 (Managers) - Mid Left */}
				<path
					d="M445 265 C 410 265, 410 210, 370 210"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
				<circle cx="370" cy="210" r="3.5" fill="currentColor" />
				<foreignObject x="30" y="140" width="320" height="200">
					<div className="flex flex-col items-end text-right pr-4">
						<div className="flex items-center gap-4 mb-3">
							<h3 className="font-display font-bold text-2xl text-ocobo-dark">
								Managers
							</h3>
							<div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								2
							</div>
						</div>
						<ul className="text-sm text-gray-500 font-medium space-y-1">
							<li className="flex items-start gap-2 justify-end">
								Prévisions instables
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
							</li>
							<li className="flex items-start gap-2 justify-end">
								Peu d'insights pour faire progresser les équipes
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
							</li>
							<li className="flex items-start gap-2 justify-end">
								Ressources mal allouées
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
							</li>
						</ul>
					</div>
				</foreignObject>
				{/* Label 3 (Équipes terrain) - Mid Right */}
				<path
					d="M590 355 C 640 355, 650 300, 695 300"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
				<circle cx="695" cy="300" r="3.5" fill="currentColor" />
				<foreignObject x="715" y="235" width="280" height="200">
					<div className="flex flex-col items-start text-left">
						<div className="flex items-center gap-4 mb-3">
							<div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								3
							</div>
							<h3 className="font-display font-bold text-2xl text-ocobo-dark">
								Équipes terrain
							</h3>
						</div>
						<ul className="text-sm text-gray-500 font-medium space-y-1">
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
								Trop d'outils, pas assez de clarté
							</li>
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
								Productivité en baisse
							</li>
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
								Difficulté à comprendre la stratégie
							</li>
						</ul>
					</div>
				</foreignObject>
				{/* Label 4 (Clients) - Bottom Left */}
				<path
					d="M370 445 C 330 445, 330 520, 280 520"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
				<circle cx="280" cy="520" r="3.5" fill="currentColor" />
				<foreignObject x="10" y="450" width="250" height="200">
					<div className="flex flex-col items-end text-right pr-4">
						<div className="flex items-center gap-4 mb-3">
							<h3 className="font-display text-2xl text-ocobo-dark">Clients</h3>
							<div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								4
							</div>
						</div>
						<ul className="text-sm text-gray-500 font-medium space-y-1">
							<li className="flex items-start gap-2 justify-end">
								Expérience inégale
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
							</li>
							<li className="flex items-start gap-2 justify-end">
								Informations dispersées
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
							</li>
							<li className="flex items-start gap-2 justify-end">
								Frictions dans le parcours
								<span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
							</li>
						</ul>
					</div>
				</foreignObject>
			</svg>
		</div>
	);
};
