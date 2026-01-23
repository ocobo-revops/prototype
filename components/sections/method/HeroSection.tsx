import { ChevronDown } from 'lucide-react';
import type React from 'react';
import { Badge, Button } from '../../atoms';
import { AttioPillarsIllustration } from '../../illustrations';

const HeroSection: React.FC = () => {
	return (
		<section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center overflow-hidden">
			<div className="max-w-4xl mx-auto mb-8 relative z-10">
				<Badge variant="yellow" className="mb-10">
					NOTRE MÉTHODE
				</Badge>

				<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
					4 piliers pour <br />
					une architecture{' '}
					<span className="text-ocobo-yellow italic">solide.</span>
				</h1>

				<p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
					<span className="font-bold">The Revenue Experience System™</span> est
					notre framework propriétaire conçu pour transformer le chaos
					opérationnel en une machine de revenu pilotable.
				</p>
			</div>

			<div className="flex justify-center mb-10 relative z-10 px-4">
				<AttioPillarsIllustration />
			</div>

			<div className="flex flex-col items-center gap-12 relative z-10">
				<div className="italic font-medium text-gray-400 text-sm leading-relaxed max-w-md">
					"Une croissance saine n'est jamais le fruit du hasard, c'est le
					résultat d'un système pensé pour durer et pour favoriser l'usage."
				</div>

				<Button
					variant="cta"
					size="xl"
					to="/contact"
					className="uppercase tracking-[0.25em] font-bold"
				>
					Auditer mon système
				</Button>
			</div>

			<div className="mt-16 flex justify-center w-full animate-bounce-slow">
				<ChevronDown className="text-gray-200" size={24} strokeWidth={1.5} />
			</div>
		</section>
	);
};

export default HeroSection;
