import { ChevronDown } from 'lucide-react';
import type React from 'react';
import { Badge, Button } from '../../atoms';
import { ArchitecturalGrid } from '../../illustrations';
import HeroSplit from '../../layout/HeroSplit';

const HeroSection: React.FC = () => {
	return (
		<section className="pt-40 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
			<HeroSplit gap={16} className="mb-16">
				<HeroSplit.Content className="lg:w-1/2">
					<Badge variant="yellow" className="mb-10">
						NOTRE OFFRE
					</Badge>
					<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
						Un système.
						<br />
						<span className="text-gray-400">Pas des rustines.</span>
					</h1>
					<p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-xl">
						Les entreprises qui passent à l'échelle ne misent pas sur
						l'empilement d'outils. Elles construisent un système de revenu
						clair, simple et pilotable.
					</p>
					<Button variant="cta" size="lg" to="/contact">
						Prendre RDV
					</Button>
				</HeroSplit.Content>
				<HeroSplit.Media className="lg:w-1/2 flex justify-center lg:justify-end items-center">
					<ArchitecturalGrid />
				</HeroSplit.Media>
			</HeroSplit>

			<div className="flex justify-center w-full animate-bounce-subtle">
				<ChevronDown
					className="text-ocobo-coral opacity-30"
					size={28}
					strokeWidth={1.5}
				/>
			</div>
		</section>
	);
};

export default HeroSection;
