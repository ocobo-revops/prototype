import { ArrowRight } from 'lucide-react';
import type React from 'react';
import FlexPair from '../../layout/FlexPair';

const ManifestoSection: React.FC = () => {
	return (
		<section className="py-32 bg-ocobo-dark text-white relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
			<div className="absolute top-1/2 left-0 w-32 h-32 bg-ocobo-yellow/10 rounded-full -translate-x-1/2 blur-3xl opacity-50"></div>
			<div className="absolute top-1/4 right-0 w-40 h-40 bg-ocobo-sky/10 rounded-full translate-x-1/2 blur-3xl opacity-50"></div>

			<div className="max-w-4xl mx-auto px-6 text-left relative z-10">
				<div className="flex justify-center md:justify-start mb-24">
					<span className="font-display font-bold text-ocobo-dark bg-ocobo-yellow px-6 py-2 text-xs uppercase tracking-[0.3em] inline-block rounded-full shadow-lg">
						Manifeste
					</span>
				</div>

				<div className="space-y-12 md:space-y-20 max-w-3xl">
					{/* Stanza 1 */}
					<div className="space-y-4">
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Nous ne sommes pas là pour configurer des outils.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Mais pour remettre, dans la croissance, de l'ordre et de la
							philosophie.
						</p>
						<p className="text-xl md:text-3xl font-medium text-gray-400 leading-tight">
							Le marché a transformé le RevOps en un labyrinthe de jargon,
							d'automatisations décoratives et de stacks toujours plus lourdes
							et éclatées.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Tout le monde promet de la performance.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Très peu savent la penser et la structurer.
						</p>
					</div>

					{/* Stanza 2 - Strong statement */}
					<div className="space-y-4 border-l-4 border-ocobo-yellow pl-8 py-2">
						<p className="text-xl md:text-3xl font-bold text-white leading-tight">
							Chez Ocobo, nous refusons la confusion, le bruit, les mirages
							technologiques.
						</p>
						<p className="text-xl md:text-3xl font-bold text-white leading-tight">
							Pour nous, le RevOps n'est pas un métier technique.
						</p>
						<p className="text-xl md:text-3xl font-bold text-ocobo-yellow leading-tight italic">
							C'est une discipline stratégique : l'architecture de votre revenu.
						</p>
					</div>

					{/* Stanza 3 */}
					<div className="space-y-4">
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Aligner les équipes, réparer les silos.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Simplifier les process jusqu'à l'usage et jusqu'à la moelle s'il
							le faut.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Rendre la donnée fiable, lisible et actionnable.
						</p>
					</div>

					{/* Stanza 4 */}
					<div className="space-y-4">
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Nous existons pour appeler les choses par leur nom,
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							ramener de la clarté dans un monde de jargon
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							et offrir aux organisations un privilège rare :
						</p>
						<p className="text-xl md:text-3xl font-bold text-ocobo-yellow leading-tight">
							l'expérience d'une croissance simple, saine et maîtrisée.
						</p>
					</div>

					{/* Stanza 5 - The Invitation */}
					<div className="relative pt-20 pb-16 px-8 md:px-12 bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
						{/* Top multi-color line */}
						<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>

						<p className="text-xl md:text-3xl font-bold text-white leading-tight mb-12">
							Ocobo est notre invitation
						</p>

						<div className="space-y-8">
							<FlexPair gap={5}>
								<FlexPair.Icon className="mt-1.5">
									<div className="bg-ocobo-yellow rounded-full p-1">
										<ArrowRight size={16} className="text-ocobo-dark" />
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">
										à regarder votre machine revenue en face,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className="mt-1.5">
									<div className="bg-ocobo-yellow rounded-full p-1">
										<ArrowRight size={16} className="text-ocobo-dark" />
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">
										à préférer la vérité opérationnelle aux illusions de
										performance,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className="mt-1.5">
									<div className="bg-ocobo-yellow rounded-full p-1">
										<ArrowRight size={16} className="text-ocobo-dark" />
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">
										à faire primer la stratégie sur l'urgence,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className="mt-1.5">
									<div className="bg-ocobo-yellow rounded-full p-1">
										<ArrowRight size={16} className="text-ocobo-dark" />
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">
										à construire votre revenu non comme un empilement,{' '}
										<br className="hidden md:block" />
										mais comme un système pensé, durable et vivant.
									</p>
								</FlexPair.Content>
							</FlexPair>
						</div>
					</div>

					{/* Stanza 6 */}
					<div className="space-y-4 pt-10">
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Nous croyons que la croissance n'est jamais un accident.
						</p>
						<p className="text-xl md:text-3xl font-medium text-white leading-tight">
							Mais le résultat d'une architecture juste, d'une mécanique revenue
							qui respire et d'une exigence d'alignement.
						</p>
					</div>

					{/* Conclusion Signature - White Logo */}
					<div className="pt-24">
						<div className="flex flex-col items-start text-left">
							<img
								src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg"
								alt="Ocobo Logo"
								className="h-16 md:h-20 w-auto mb-8 object-contain"
							/>
							<p className="font-display text-xl md:text-3xl text-ocobo-yellow uppercase tracking-[0.3em] font-bold leading-tight">
								La clarté au service du revenu.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManifestoSection;
