import type React from 'react';
import { PyramidSection } from '../../illustrations';

const SymptomsSection: React.FC = () => {
	return (
		<section className="pt-12 md:pt-24 pb-0 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16 md:mb-24">
					<h2 className="font-display text-3xl md:text-5xl font-bold text-ocobo-dark mb-6 leading-tight">
						Quand la croissance s'accélère, <br className="hidden md:block" />{' '}
						la complexité arrive.
					</h2>
					<p className="text-lg md:text-xl text-gray-600 font-medium">
						Dans toutes les entreprises en mouvement, les mêmes symptômes sont
						légion :
					</p>
				</div>

				{/* MOBILE LAYOUT (List) */}
				<div className="md:hidden space-y-8 pb-12">
					<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-coral opacity-10 rounded-bl-full"></div>
						<div className="flex items-center gap-4 mb-4">
							<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								1
							</div>
							<h3 className="font-display text-xl font-bold text-ocobo-dark">
								CEO
							</h3>
						</div>
						<ul className="space-y-2 text-sm text-gray-600">
							<li className="flex items-start gap-2">
								• Manque de visibilité sur le business
							</li>
						</ul>
					</div>
					<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-yellow opacity-10 rounded-bl-full"></div>
						<div className="flex items-center gap-4 mb-4">
							<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								2
							</div>
							<h3 className="font-display text-xl font-bold text-ocobo-dark">
								Managers
							</h3>
						</div>
						<ul className="space-y-2 text-sm text-gray-600">
							<li className="flex items-start gap-2">• Prévisions instables</li>
						</ul>
					</div>
					<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-sky opacity-10 rounded-bl-full"></div>
						<div className="flex items-center gap-4 mb-4">
							<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								3
							</div>
							<h3 className="font-display text-xl font-bold text-ocobo-dark">
								Équipes terrain
							</h3>
						</div>
						<ul className="space-y-2 text-sm text-gray-600">
							<li className="flex items-start gap-2">
								• Trop d'outils, pas assez de clarté
							</li>
						</ul>
					</div>
					<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-mint opacity-10 rounded-bl-full"></div>
						<div className="flex items-center gap-4 mb-4">
							<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
								4
							</div>
							<h3 className="font-display text-xl font-bold text-ocobo-dark">
								Clients
							</h3>
						</div>
						<ul className="space-y-2 text-sm text-gray-600">
							<li className="flex items-start gap-2">• Expérience inégale</li>
						</ul>
					</div>
				</div>

				{/* DESKTOP LAYOUT (Pyramid Redesign) */}
				<div className="hidden md:block">
					<PyramidSection />
				</div>
			</div>
		</section>
	);
};

export default SymptomsSection;
