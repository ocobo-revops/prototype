import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';
import { Button } from '../../atoms/Button';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

// new section from the studio

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const _NewInterventionsSection = () => {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-display text-4xl font-bold text-ocobo-dark mb-4 text-center">
					Nos interventions
				</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
					Nous vous aidons à construire les fondations RevOps dont dépend votre
					croissance.
				</p>

				<div className="grid md:grid-cols-3 gap-8 md:gap-10">
					{/* DESIGN */}
					<div className="bg-white border border-gray-100 p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full rounded-2xl relative overflow-hidden">
						<div className="mb-8">
							<span className="inline-block bg-ocobo-yellow text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
								DESIGN
							</span>
							<p className="text-[10px] font-black text-ocobo-yellow uppercase tracking-widest mt-3 ml-1 opacity-70">
								L'architecture
							</p>
						</div>
						<h3 className="font-display text-2xl font-bold mb-6 text-ocobo-dark group-hover:text-black transition-colors leading-tight">
							Immersion, diagnostic et plan d’action RevOps
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed flex-grow font-medium">
							Ne construisez pas à l'aveugle. Nous auditons votre GTM (équipes,
							systèmes, données) et livrons la roadmap précise (Budget &
							Planning) pour sécuriser l'année.
						</p>

						<div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between text-ocobo-yellow opacity-0 group-hover:opacity-100 transition-opacity">
							<span className="text-[10px] font-bold uppercase tracking-widest">
								Voir le détail
							</span>
							<ArrowRight size={16} />
						</div>
					</div>

					{/* OPERATE */}
					<div className="bg-white border border-gray-100 p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full rounded-2xl relative overflow-hidden">
						<div className="mb-8">
							<span className="inline-block bg-ocobo-sky text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
								OPERATE
							</span>
							<p className="text-[10px] font-black text-ocobo-sky uppercase tracking-widest mt-3 ml-1 opacity-70">
								La construction
							</p>
						</div>
						<h3 className="font-display text-2xl font-bold mb-6 text-ocobo-dark group-hover:text-black transition-colors leading-tight">
							La phase de transformation intensive.
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed flex-grow font-medium">
							Une Squad complète déploie votre infrastructure en sprints de 2
							semaines. On priorise, on construit, on teste, on livre.
						</p>

						<div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between text-ocobo-sky opacity-0 group-hover:opacity-100 transition-opacity">
							<span className="text-[10px] font-bold uppercase tracking-widest">
								Voir le détail
							</span>
							<ArrowRight size={16} />
						</div>
					</div>

					{/* GROW */}
					<div className="bg-white border border-gray-100 p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full rounded-2xl relative overflow-hidden">
						<div className="mb-8">
							<span className="inline-block bg-ocobo-mint text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
								GROW
							</span>
							<p className="text-[10px] font-black text-ocobo-mint uppercase tracking-widest mt-3 ml-1 opacity-70">
								La croissance
							</p>
						</div>
						<h3 className="font-display text-2xl font-bold mb-6 text-ocobo-dark group-hover:text-black transition-colors leading-tight">
							Le passage de témoin vers la performance durable.
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed flex-grow font-medium">
							Nous pilotons votre "Run" au quotidien pour maximiser le ROI et
							récolter les fruits du travail accompli.
						</p>

						<div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between text-ocobo-mint opacity-0 group-hover:opacity-100 transition-opacity">
							<span className="text-[10px] font-bold uppercase tracking-widest">
								Voir le détail
							</span>
							<ArrowRight size={16} />
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-20">
					<Link to="/offer">
						<Button
							variant="outline"
							className="px-12 py-4 text-xs font-black uppercase tracking-widest border-2"
						>
							Voir toutes nos interventions
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

const INTERVENTIONS = [
	{
		number: 1,
		title: "Immersion, diagnostic et plan d'action RevOps",
		description: 'Pour voir clair et savoir quoi faire. Dans cet ordre là.',
	},
	{
		number: 2,
		title: 'Déploiement RevOps (Agile)',
		description:
			'Pour (re)construire et opérer votre machine revenue en sprints de 2 semaines.',
	},
	{
		number: 3,
		title: 'Formation & Coaching',
		description: 'Pour rendre vos équipes autonomes et pérennes.',
	},
];

export const InterventionsSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: '4xl',
						fontWeight: 'bold',
						color: 'ocobo.dark',
						mb: '4',
						textAlign: 'center',
					})}
				>
					Nos interventions
				</h2>
				<p
					className={css({
						textAlign: 'center',
						color: 'gray.600',
						maxW: '2xl',
						mx: 'auto',
						mb: '16',
					})}
				>
					Nous vous aidons à construire les fondations RevOps dont dépend votre
					croissance.
				</p>

				<div className={grid({ columns: { base: 1, md: 3 }, gap: '8' })}>
					{INTERVENTIONS.map((intervention) => (
						<div
							key={intervention.number}
							className={css({
								bg: 'white',
								borderWidth: '1px',
								borderColor: 'gray.200',
								p: '8',
								transition: 'colors',
								_hover: { borderColor: 'ocobo.dark' },
							})}
						>
							<div
								className={`${center()} ${css({
									w: '12',
									h: '12',
									bg: 'ocobo.dark',
									color: 'white',
									mb: '6',
								})}`}
							>
								{intervention.number}
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									mb: '4',
								})}
							>
								{intervention.title}
							</h3>
							<p className={css({ color: 'gray.600', fontSize: 'sm' })}>
								{intervention.description}
							</p>
						</div>
					))}
				</div>

				<div className={`${flex({ justify: 'center' })} ${css({ mt: '12' })}`}>
					<Button variant="outline" to="/offer">
						Voir nos offres
					</Button>
				</div>
			</Container>
		</Section>
	);
};
