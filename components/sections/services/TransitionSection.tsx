import type React from 'react';
import Grid from '../../layout/Grid';

const TransitionSection: React.FC = () => {
	return (
		<section className="py-24 bg-ocobo-dark text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="border border-gray-700/50 p-12 md:p-20 relative">
					<h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-16 md:mb-20 text-center leading-tight">
						RevOps vient remettre de l'ordre.
					</h2>

					<Grid md={2} lg={4} gap={12}>
						<div className="space-y-4">
							<h3 className="font-display text-2xl font-bold text-ocobo-yellow">
								Alignement
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Aligner Marketing, Sales, CS et Finance pour une vision commune
								et transverse du revenu.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="font-display text-2xl font-bold text-ocobo-mint">
								Process
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Fluidifier les parcours et supprimer les frictions
								opérationnelles à chaque étape du cycle de vie.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="font-display text-2xl font-bold text-ocobo-coral">
								Data
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Fiabiliser la donnée pour transformer les intuitions en
								décisions factuelles et pilotables.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="font-display text-2xl font-bold text-ocobo-sky">
								Performance
							</h3>
							<p className="text-sm text-gray-400 leading-relaxed">
								Améliorer la conversion et le revenu à chaque étape clé du
								parcours client.
							</p>
						</div>
					</Grid>
				</div>
			</div>
		</section>
	);
};

export default TransitionSection;
