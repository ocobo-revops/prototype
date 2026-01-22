import type React from 'react';
import { Container } from '../../organisms';

const DataIllustration = () => {
	return (
		<div className="w-full overflow-hidden">
			<div className="relative w-full max-w-3xl h-[280px] md:h-[420px] mx-auto p-4 flex flex-col items-center">
				{/* Illustration Container */}
				<div className="relative w-full h-full bg-[#FCFAF5] rounded-3xl p-6 md:p-8 shadow-soft-lg border border-gray-100 group/svg overflow-hidden">
					<svg
						viewBox="0 0 800 500"
						className="w-full h-full text-ocobo-dark"
						preserveAspectRatio="xMidYMid meet"
					>
						{/* Background Bars (Grey/Black) - Following the image structure */}
						<g className="bars">
							{[
								{ x: 40, h: 140 },
								{ x: 70, h: 180 },
								{ x: 100, h: 160 },
								{ x: 130, h: 220 },
								{ x: 160, h: 200 },
								{ x: 190, h: 240 },
								{ x: 220, h: 190 },
								{ x: 250, h: 280 },
								{ x: 280, h: 320 },
								{ x: 310, h: 300 },
								{ x: 340, h: 350 },
								{ x: 370, h: 330 },
								{ x: 400, h: 380 },
								{ x: 430, h: 360 },
								{ x: 460, h: 400 },
								{ x: 490, h: 340 },
								{ x: 520, h: 320 },
								{ x: 550, h: 280 },
								{ x: 580, h: 300 },
								{ x: 610, h: 260 },
								{ x: 640, h: 320 },
								{ x: 670, h: 340 },
								{ x: 700, h: 300 },
								{ x: 730, h: 360 },
							].map((bar) => {
								return (
									<g key={bar.x}>
										{/* Bottom part of bar (filled) */}
										<rect
											x={bar.x}
											y={450 - bar.h}
											width="14"
											height={bar.h}
											fill="currentColor"
											className="bar-transition"
										/>
										{/* Inner detail (white segment) */}
										<rect
											x={bar.x + 1}
											y={450 - bar.h * 0.7}
											width="12"
											height={bar.h * 0.3}
											fill="white"
										/>
										{/* Top segment border */}
										<rect
											x={bar.x}
											y={450 - bar.h}
											width="14"
											height={bar.h}
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</g>
								);
							})}
						</g>

						{/* Selection Highlight (Yellow Zone) with Slow Appearing/Disappearing Animation */}
						<g>
							<rect
								x="270"
								y="60"
								width="205"
								height="400"
								fill="#F1CF25"
								className="animate-slow-fade"
							/>
							<rect
								x="270"
								y="60"
								width="205"
								height="400"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeDasharray="4 4"
							/>
						</g>

						{/* Sparkles / Crosses (Static as requested) */}
						<path
							d="M110,410 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z"
							fill="currentColor"
						/>
						<path
							d="M180,120 l3,6 l6,3 l-6,3 l-3,6 l-3,-6 l-6,-3 l6,-3 Z"
							fill="currentColor"
						/>
						<path
							d="M520,30 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z"
							fill="currentColor"
						/>
						<path
							d="M750,150 l3,6 l6,3 l-6,3 l-3,6 l-3,-6 l-6,-3 l6,-3 Z"
							fill="currentColor"
						/>
						<path
							d="M620,400 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z"
							fill="currentColor"
						/>

						{/* Logo Spinner Icon (Bottom Right of yellow zone) */}
						<g transform="translate(485, 460)" className="animate-float-cursor">
							<circle
								cx="0"
								cy="0"
								r="18"
								fill="white"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M-8,-8 C-4,-12 4,-12 8,-8 M-8,8 C-4,12 4,12 8,8 M-12,0 C-12,-4 -12,4 -12,0 M12,0 C12,-4 12,4 12,0"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							<path
								d="M-5,-5 L5,5 M-5,5 L5,-5"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</g>

						{/* Mouse Cursor (Black Arrow) */}
						<path
							transform="translate(470, 455) scale(1.2)"
							d="M0,0 L25,40 L10,35 L0,55 Z"
							fill="currentColor"
							className="animate-float-cursor"
						/>
					</svg>
				</div>
				<div className="mt-10 text-center max-w-lg mx-auto">
					<h3 className="font-display text-xl md:text-2xl font-bold text-ocobo-dark mb-3 uppercase tracking-[0.2em]">
						Transformer le bruit en signal.
					</h3>
					<p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed px-4">
						L'architecture n'est pas qu'une question de structure, c'est une
						question de vision. Savoir où regarder pour trouver la croissance.
					</p>
				</div>
			</div>
		</div>
	);
};

const HeroSection: React.FC = () => {
	return (
		<section className="pt-40 pb-10">
			<Container>
				<div className="text-center max-w-4xl mx-auto mb-20">
					<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-8 leading-[0.9] tracking-tight">
						Notre mission : <br />
						démocratiser la{' '}
						<span className="text-ocobo-yellow">science du revenu.</span>
					</h1>
					<p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
						Rendre accessible à toutes les organisations B2B une discipline
						réservée, jusqu'ici, aux scale-ups les plus avancées.
					</p>
					<p className="text-gray-500 leading-relaxed text-lg">
						Parce qu'une croissance fiable n'est jamais un hasard : c'est le
						résultat d'une architecture solide, d'équipes alignées, et d'un
						système qui respire la simplicité.
					</p>
				</div>
				<DataIllustration />
			</Container>
		</section>
	);
};

export default HeroSection;
