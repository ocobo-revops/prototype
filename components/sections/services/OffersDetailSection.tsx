import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';
import { SectionHeader } from '../../organisms';

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
