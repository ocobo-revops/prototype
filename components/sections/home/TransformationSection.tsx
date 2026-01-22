import type React from 'react';
import { Button } from '../../atoms';
import FlexPair from '../../layout/FlexPair';
import { Container, Section } from '../../organisms';

const TransformationSection: React.FC = () => {
	return (
		<Section bg="gray">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-16">
					<div className="md:w-1/2">
						<h2 className="font-display text-4xl font-bold text-ocobo-dark mb-6">
							On ne scale pas avec des outils. On scale avec un système.
						</h2>
						<p className="text-gray-600 text-lg mb-8 leading-relaxed">
							La plupart des organisations grandissent en empilant les outils.
							Nous préférons construire des fondations solides et un système qui
							tient la charge.
						</p>
						<ul className="space-y-6">
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
											1
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className="font-bold text-lg">Clarté radicale</h4>
										<p className="text-sm text-gray-600">
											Une vérité partagée entre équipes. Des décisions
											éclairées. La fin du pilotage à l'intuition.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
											2
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className="font-bold text-lg">
											Simplicité opérationnelle
										</h4>
										<p className="text-sm text-gray-600">
											Moins de friction, moins de complexité, moins d'outils.
											Des équipes concentrées sur le closing.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
											3
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className="font-bold text-lg">Performance mesurable</h4>
										<p className="text-sm text-gray-600">
											Des conversions qui augmentent. Des cycles qui
											raccourcissent. Un revenu enfin prévisible.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
						</ul>
					</div>
					<div className="md:w-1/2 bg-white p-10 shadow-xl border border-gray-100 rounded-none relative">
						<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>
						<h3 className="font-display text-2xl font-bold mb-8 text-center">
							Ce n'est pas un hasard.
							<br />
							C'est une méthode.
						</h3>
						<div className="space-y-4">
							<div className="p-4 bg-ocobo-yellow-light border-l-4 border-ocobo-yellow">
								<span className="font-bold text-ocobo-dark">Alignment</span>
								<p className="text-xs text-gray-600">
									Aligner les équipes qui font le revenu.
								</p>
							</div>
							<div className="p-4 bg-ocobo-sky-light border-l-4 border-ocobo-sky">
								<span className="font-bold text-ocobo-dark">Technology</span>
								<p className="text-xs text-gray-600">
									Une stack claire, connectée, utile.
								</p>
							</div>
							<div className="p-4 bg-ocobo-mint-light border-l-4 border-ocobo-mint">
								<span className="font-bold text-ocobo-dark">Performance</span>
								<p className="text-xs text-gray-600">
									Indicateurs fiables, pilotage, cockpit.
								</p>
							</div>
							<div className="p-4 bg-ocobo-coral-light border-l-4 border-ocobo-coral">
								<span className="font-bold text-ocobo-dark">Enablement</span>
								<p className="text-xs text-gray-600">
									Equipes formées et autonomes.
								</p>
							</div>
						</div>
						<div className="mt-8 text-center">
							<p className="font-display font-bold text-sm uppercase tracking-wider mb-4">
								The Revenue Experience System™
							</p>
							<Button to="/method" fullWidth>
								Découvrir notre méthode
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default TransformationSection;
