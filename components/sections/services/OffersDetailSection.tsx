import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';
import { SectionHeader } from '../../organisms/SectionHeader';

const _NewOffersDetailSection = () => {
	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16 md:mb-24">
					<h2 className="font-display text-3xl md:text-5xl font-bold text-ocobo-dark mb-4 md:mb-6">
						Nous construisons et opérons les fondations RevOps
					</h2>
					<p className="text-gray-600 text-lg">
						Nous construisons et opérons les fondations RevOps de votre
						organisation : process, outils, data et équipes alignés pour une
						croissance durable et maîtrisée.
					</p>
				</div>

				<div className="space-y-24">
					{/* Service 1: DESIGN */}
					<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
						<div className="w-full md:w-5/12 sticky top-32">
							<div className="w-16 h-16 bg-ocobo-yellow text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-[4px_4px_0px_0px_rgba(33,35,35,1)] mb-8">
								1
							</div>
							<div className="mb-4">
								<span className="inline-block bg-ocobo-yellow text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
									DESIGN
								</span>
								<p className="text-[10px] font-black text-ocobo-yellow uppercase tracking-widest mt-3 ml-1 opacity-70">
									L'architecture
								</p>
							</div>
							<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
								Immersion, cadrage et plan d’action RevOps
							</h3>
							<p className="text-gray-600 text-lg leading-relaxed">
								La vision claire pour savoir où agir.
							</p>
						</div>
						<div className="w-full md:w-7/12">
							<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-yellow transition-all duration-300 group rounded-xl">
								<ul className="space-y-8">
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-yellowLight p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Diagnostic transversal
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Analyse en profondeur des interactions et frictions
												entre les départements.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-yellowLight p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Cartographie process / outils / data
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Audit complet de l'infrastructure existante et des flux
												de travail.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-yellowLight p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Priorisation et feuille de route
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Un plan d'attaque chiffré et priorisé pour les mois à
												venir.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="w-full h-px bg-gray-100"></div>

					{/* Service 2: OPERATE */}
					<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
						<div className="w-full md:w-5/12 sticky top-32">
							<div className="w-16 h-16 bg-ocobo-sky text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-[4px_4px_0px_0px_rgba(33,35,35,1)] mb-8">
								2
							</div>
							<div className="mb-4">
								<span className="inline-block bg-ocobo-sky text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
									OPERATE
								</span>
								<p className="text-[10px] font-black text-ocobo-sky uppercase tracking-widest mt-3 ml-1 opacity-70">
									La construction
								</p>
							</div>
							<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
								Déploiement RevOps (Agile)
							</h3>
							<p className="text-gray-600 text-lg leading-relaxed">
								Pour opérer et structurer la machine revenue en sprints de 2
								semaines.
							</p>
						</div>
						<div className="w-full md:w-7/12">
							<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-sky transition-all duration-300 group rounded-xl">
								<ul className="space-y-8">
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-skyLight p-2 rounded-full text-ocobo-sky group-hover:bg-ocobo-sky group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Architecture du Cycle Revenue
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Unifiez votre chaîne de valeur de bout en bout : de la
												génération de demande jusqu'à l'upsell et la
												facturation.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-skyLight p-2 rounded-full text-ocobo-sky group-hover:bg-ocobo-sky group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Design Organisationnel
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Restructurez vos équipes (Rôles & Responsabilités) et
												standardisez vos process pour une exécution sans faille.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-skyLight p-2 rounded-full text-ocobo-sky group-hover:bg-ocobo-sky group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Déploiement Stack & CRM
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Intégrez et connectez les leaders du marché (Salesforce,
												HubSpot) pour en faire de véritables moteurs de
												croissance.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-skyLight p-2 rounded-full text-ocobo-sky group-hover:bg-ocobo-sky group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Business Intelligence
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Transformez votre donnée en tableaux de bord fiables et
												actionnables pour stopper le pilotage à vue.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-skyLight p-2 rounded-full text-ocobo-sky group-hover:bg-ocobo-sky group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Ingénierie de la Rémunération
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Modélisez des plans de variables clairs et motivants,
												alignés sur vos objectifs de rentabilité.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="w-full h-px bg-gray-100"></div>

					{/* Service 3: GROW (UPDATED) */}
					<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
						<div className="w-full md:w-5/12 sticky top-32">
							<div className="w-16 h-16 bg-ocobo-mint text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-[4px_4px_0px_0px_rgba(33,35,35,1)] mb-8">
								3
							</div>
							<div className="mb-4">
								<span className="inline-block bg-ocobo-mint text-ocobo-dark px-6 py-2 rounded-full font-display font-black text-xs uppercase tracking-[0.25em] shadow-sm">
									GROW
								</span>
								<p className="text-[10px] font-black text-ocobo-mint uppercase tracking-widest mt-3 ml-1 opacity-70">
									Animation RevOps
								</p>
							</div>
							<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
								GROW (Animation RevOps)
							</h3>
							<p className="text-gray-600 text-lg leading-relaxed">
								Pour transformer votre investissement technique en revenus
								récurrents et durables.
							</p>
						</div>
						<div className="w-full md:w-7/12">
							<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-mint transition-all duration-300 group rounded-xl">
								<ul className="space-y-8">
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-mintLight p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Exploitation & Optimisation
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Tirer le meilleur parti de ce qui a été construit
												(Fine-tuning).
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-mintLight p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Pilotage de la Donnée
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Garantir que les chiffres (Forecast, MRR, Pipeline)
												restent justes mois après mois.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-mintLight p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Support & Adoption
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												S'assurer que les Commerciaux utilisent vraiment les
												outils (Lutte contre le "Shadow IT").
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-mintLight p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Évolution de la Roadmap
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Anticiper les besoins de demain pour ne jamais freiner
												la croissance.
											</p>
										</div>
									</li>
									<li className="flex gap-5 items-start">
										<div className="mt-1 bg-ocobo-mintLight p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4 className="font-bold text-lg text-ocobo-dark mb-2">
												Acculturation RevOps pour dirigeants
											</h4>
											<p className="text-sm text-gray-600 leading-relaxed">
												Aligner la vision stratégique et donner les clés de
												lecture aux décideurs.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const OffersDetailSection: React.FC = () => {
	return (
		<section className={css({ py: { base: '16', md: '24' }, bg: 'white' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<SectionHeader
					title="Nous construisons et opérons les fondations RevOps"
					subtitle="Nous construisons et opérons les fondations RevOps de votre organisation : process, outils, data et équipes alignés pour une croissance durable et maîtrisée."
					className={css({ mb: { base: '16', md: '24' } })}
				/>

				<div className={css({ spaceY: '24' })}>
					{/* Service 1: Audit & Cadrage */}
					<div
						className={flex({
							direction: { base: 'column', md: 'row' },
							gap: { base: '12', md: '24' },
							align: 'flex-start',
						})}
					>
						<div
							className={css({
								w: { base: 'full', md: '5/12' },
								position: { md: 'sticky' },
								top: '32',
							})}
						>
							<div
								className={`${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.yellow',
									color: 'ocobo.dark',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: '2xl',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									shadow: 'offset',
									mb: '8',
								})}`}
							>
								1
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: { base: '3xl', md: '4xl' },
									fontWeight: 'bold',
									color: 'ocobo.dark',
									mb: '4',
									lineHeight: 'tight',
								})}
							>
								Immersion, cadrage et plan d'action RevOps
							</h3>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'lg',
									lineHeight: 'relaxed',
								})}
							>
								La vision claire pour savoir où agir.
							</p>
						</div>
						<div className={css({ w: { base: 'full', md: '7/12' } })}>
							<div
								className={css({
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'gray.100',
									p: { base: '8', md: '10' },
									transition: 'all',
									transitionDuration: '300ms',
									rounded: 'xl',
									_hover: { shadow: '2xl', borderColor: 'ocobo.yellow' },
								})}
							>
								<ul className={css({ spaceY: '8' })}>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.yellow.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.yellow',
												_groupHover: { bg: 'ocobo.yellow', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Diagnostic transversal
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Analyse en profondeur des interactions et frictions
												entre les départements.
											</p>
										</div>
									</li>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.yellow.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.yellow',
												_groupHover: { bg: 'ocobo.yellow', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Cartographie process / outils / data
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Audit complet de l'infrastructure existante et des flux
												de travail.
											</p>
										</div>
									</li>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.yellow.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.yellow',
												_groupHover: { bg: 'ocobo.yellow', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Priorisation et feuille de route
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Un plan d'attaque chiffré et priorisé pour les mois à
												venir.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={css({ w: 'full', h: '1px', bg: 'gray.100' })} />

					{/* Service 2: Déploiement */}
					<div
						className={flex({
							direction: { base: 'column', md: 'row' },
							gap: { base: '12', md: '24' },
							align: 'flex-start',
						})}
					>
						<div
							className={css({
								w: { base: 'full', md: '5/12' },
								position: { md: 'sticky' },
								top: '32',
							})}
						>
							<div
								className={`${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.coral',
									color: 'ocobo.dark',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: '2xl',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									shadow: 'offset',
									mb: '8',
								})}`}
							>
								2
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: { base: '3xl', md: '4xl' },
									fontWeight: 'bold',
									color: 'ocobo.dark',
									mb: '4',
									lineHeight: 'tight',
								})}
							>
								Déploiement RevOps (Agile)
							</h3>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'lg',
									lineHeight: 'relaxed',
								})}
							>
								Pour opérer et structurer la machine revenue en sprints de 2
								semaines.
							</p>
						</div>
						<div className={css({ w: { base: 'full', md: '7/12' } })}>
							<div
								className={css({
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'gray.100',
									p: { base: '8', md: '10' },
									transition: 'all',
									transitionDuration: '300ms',
									rounded: 'xl',
									_hover: { shadow: '2xl', borderColor: 'ocobo.coral' },
								})}
							>
								<ul
									className={grid({
										columns: { md: 2 },
										gap: 6,
										rowGap: 6,
										columnGap: 8,
									})}
								>
									{[
										'Funnel complet : demand gen → closing → onboarding → expansion',
										'Process simples & adoptés',
										'CRM utile et utilisé',
										'Stack lisible et connectée',
										'Automatisations utiles',
										'Data fiable & pilotable',
										'Rémunération variable claire, juste et motivante',
									].map((item) => (
										<li
											key={item}
											className={flex({ align: 'flex-start', gap: '4' })}
										>
											<div className={css({ mt: '0.5', color: 'ocobo.coral' })}>
												<CheckCircle2 size={18} />
											</div>
											<span
												className={css({
													fontWeight: 'medium',
													color: 'gray.700',
													fontSize: 'sm',
													lineHeight: 'snug',
												})}
											>
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className={css({ w: 'full', h: '1px', bg: 'gray.100' })} />

					{/* Service 3: Coaching */}
					<div
						className={flex({
							direction: { base: 'column', md: 'row' },
							gap: { base: '12', md: '24' },
							align: 'flex-start',
						})}
					>
						<div
							className={css({
								w: { base: 'full', md: '5/12' },
								position: { md: 'sticky' },
								top: '32',
							})}
						>
							<div
								className={`${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.mint',
									color: 'ocobo.dark',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: '2xl',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									shadow: 'offset',
									mb: '8',
								})}`}
							>
								3
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: { base: '3xl', md: '4xl' },
									fontWeight: 'bold',
									color: 'ocobo.dark',
									mb: '4',
									lineHeight: 'tight',
								})}
							>
								Coaching & Formation
							</h3>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'lg',
									lineHeight: 'relaxed',
								})}
							>
								Rendre vos équipes autonomes et capables de faire vivre le
								système.
							</p>
						</div>
						<div className={css({ w: { base: 'full', md: '7/12' } })}>
							<div
								className={css({
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'gray.100',
									p: { base: '8', md: '10' },
									transition: 'all',
									transitionDuration: '300ms',
									rounded: 'xl',
									_hover: { shadow: '2xl', borderColor: 'ocobo.mint' },
								})}
							>
								<ul className={css({ spaceY: '8' })}>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.mint.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.mint',
												_groupHover: { bg: 'ocobo.mint', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Acculturation RevOps pour dirigeants
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Aligner la vision stratégique et donner les clés de
												lecture aux décideurs.
											</p>
										</div>
									</li>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.mint.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.mint',
												_groupHover: { bg: 'ocobo.mint', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Coaching Heads (Sales / CS / RevOps)
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Accompagnement individuel des responsables pour piloter
												l'excellence opérationnelle.
											</p>
										</div>
									</li>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.mint.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.mint',
												_groupHover: { bg: 'ocobo.mint', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Montée en compétence des équipes
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Formation pratique aux nouveaux rituels, outils et
												méthodes GTM.
											</p>
										</div>
									</li>
									<li className={flex({ gap: '5', align: 'flex-start' })}>
										<div
											className={css({
												mt: '1',
												bg: 'ocobo.mint.light',
												p: '2',
												rounded: 'full',
												color: 'ocobo.mint',
												_groupHover: { bg: 'ocobo.mint', color: 'white' },
												transition: 'colors',
											})}
										>
											<CheckCircle2 size={18} />
										</div>
										<div>
											<h4
												className={css({
													fontWeight: 'bold',
													fontSize: 'lg',
													color: 'ocobo.dark',
													mb: '2',
												})}
											>
												Playbooks pratiques
											</h4>
											<p
												className={css({
													fontSize: 'sm',
													color: 'gray.600',
													lineHeight: 'relaxed',
												})}
											>
												Création de bibles opérationnelles pour ancrer
												durablement les process.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
