import {
	ArrowLeft,
	ArrowRight,
	BarChart3,
	Check,
	Clock,
	Compass,
	Cpu,
	Quote,
	Users,
	Zap,
} from 'lucide-react';
import type React from 'react';
import { Link, useParams } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, vstack } from 'styled-system/patterns';
import { Button } from '../components/atoms/Button';

// biome-ignore lint/suspicious/noExplicitAny: complex story data structure
const STORY_DATA: Record<string, any> = {
	yousign: {
		company: 'Yousign',
		title:
			"Yousign : Bâtir une architecture GTM scalable pour conquérir l'Europe.",
		name: 'Antoine S.',
		role: 'Head of RevOps @ Yousign',
		segment: 'Scale-up',
		duration: '6 mois',
		team: 'Benjamin & Ocobo',
		image:
			'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
		logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
		color: 'ocobo-yellow',
		tools: ['HubSpot', 'Salesforce', 'Notion', 'Aircall'],
		results: [
			{
				label: 'Efficacité GTM',
				value: '+50%',
				icon: <Zap size={24} className={css({ color: 'ocobo.yellow' })} />,
			},
			{
				label: 'Fiabilité Data',
				value: '99%',
				icon: <BarChart3 size={24} className={css({ color: 'ocobo.mint' })} />,
			},
			{
				label: 'Pays couverts',
				value: '5',
				icon: <Compass size={24} className={css({ color: 'ocobo.sky' })} />,
			},
		],
		mission: {
			intro:
				'Yousign souhaitait unifier son infrastructure GTM après une phase de croissance organique rapide, afin de préparer son expansion internationale massive.',
			objectives: [
				'Unification des instances CRM Sales & Marketing',
				"Mise en place d'un Core Model de donnée unique",
				'Automatisation du cycle de vente international',
			],
		},
		phases: [
			{
				title: 'Phase 1 - Diagnostic & Core Model',
				desc: 'Définition de la structure de donnée cible pour supporter le multi-pays.',
				items: [
					'Audit des processus commerciaux FR, IT, DE, ES',
					'Définition du dictionnaire de donnée global',
					'Cadrage de la stack technologique cible',
				],
			},
			{
				title: 'Phase 2 - Implémentation GTM',
				desc: "Refonte de l'instance HubSpot et déploiement des automatisations.",
				items: [
					'Migration et nettoyage des bases de données',
					"Mise en place des flux d'enrichissement automatique",
					'Création des dashboards de pilotage global',
				],
			},
		],
		livrables: [
			'Core Model de donnée',
			'Playbook GTM International',
			'Dashboards COMEX',
			"Architecture d'enrichissement",
		],
		interview: [
			{
				q: 'Pourquoi avoir choisi Ocobo ?',
				a: 'Nous avions besoin de profils seniors capables de comprendre nos enjeux business complexes avant de parler technique. Ocobo a su apporter cette vision architecturale.',
			},
		],
	},
	combo: {
		company: 'Combo',
		title:
			'Combo libère ses équipes Customer Success : comment optimiser Planhat pour gagner en productivité.',
		name: 'Marie Piquemil',
		role: 'VP Operations @ Combo',
		segment: 'Scale-up',
		duration: '3 mois',
		team: 'Clara & Ocobo',
		image:
			'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg',
		logo: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-combo-white.svg',
		color: 'ocobo-mint',
		tools: ['Planhat', 'HubSpot', 'Salesforce', 'Notion'],
		results: [
			{
				label: 'Productivité CS',
				value: '+25%',
				icon: <Zap size={24} className={css({ color: 'ocobo.mint' })} />,
			},
			{
				label: 'Adoption Outils',
				value: '100%',
				icon: <Users size={24} className={css({ color: 'ocobo.yellow' })} />,
			},
			{
				label: 'Délai de migration',
				value: '3 mois',
				icon: <Clock size={24} className={css({ color: 'ocobo.sky' })} />,
			},
		],
		mission: {
			intro:
				"Les enjeux de Combo étaient de remettre à plat l'instance Planhat actuelle pour en faire l'unique outil de référence des équipes Customer Success.",
			objectives: [
				"En faire l'unique outil de référence des équipes CS",
				'Soulage les équipes Ops et CS en termes de bande passante',
				"Transmettre l'expertise Planhat et former les futurs admins",
			],
		},
		phases: [
			{
				title: 'Phase 1 - Audit & Roadmap',
				desc: 'Audit et recommandations sur Planhat et les processus métiers associés.',
				items: [
					'Cartographie du Customer Journey actuel',
					'Analyse des instances Planhat et Salesforce et de leurs intégrations',
					'Dimensionnement du projet et définition de la roadmap',
				],
			},
			{
				title: 'Phase 2 - Déploiement Cible',
				desc: "Définition et déploiement de la version cible de l'outil Planhat.",
				items: [
					'Mise à plat du modèle de donnée cible',
					'Définition des processus via des ateliers métiers',
					'Implémentation du modèle, intégrations et automatisations',
					'Documentation et formations admin',
				],
			},
		],
		livrables: [
			"Restitution d'audit",
			'Cartographie Customer Journey',
			'Instance Planhat MVP',
			'Documentation technique Notion',
		],
		interview: [
			{
				q: 'Quelle problématique Ocobo est venue adresser ?',
				a: 'Le manque de ressources et de disponibilité en interne freinait le déploiement de Planhat. Ocobo a permis de réussir la migration complète en 3 mois.',
			},
		],
	},
	qonto: {
		company: 'Qonto',
		title:
			"Qonto : Scaling de l'architecture Data & BI pour le leader de la FinTech.",
		name: 'Léa S.',
		role: 'RevOps Lead @ Qonto',
		segment: 'Enterprise',
		duration: '8 mois',
		team: 'Corentin & Ocobo',
		image:
			'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
		logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
		color: 'ocobo-mint',
		tools: ['Snowflake', 'dbt', 'HubSpot', 'Tableau'],
		results: [
			{
				label: 'Automatisation Report',
				value: '100%',
				icon: <Zap size={24} className={css({ color: 'ocobo.mint' })} />,
			},
			{
				label: 'Data Accuracy',
				value: '+40%',
				icon: (
					<BarChart3 size={24} className={css({ color: 'ocobo.yellow' })} />
				),
			},
			{
				label: 'Utilisateurs BI',
				value: '500+',
				icon: <Users size={24} className={css({ color: 'ocobo.sky' })} />,
			},
		],
		mission: {
			intro:
				'Qonto avait besoin de fiabiliser ses flux de données entre son CRM et ses outils de BI pour piloter son revenu en temps réel.',
			objectives: [
				'Fiabilisation des flux de données CRM → Data Warehouse',
				'Mise en place de dashboards de Revenue Intelligence',
				'Formation des équipes Ops à la maintenance des flux',
			],
		},
		phases: [
			{
				title: 'Phase 1 - Data Audit',
				desc: "Analyse des écarts de données et des goulots d'étranglement.",
				items: [
					'Audit des pipelines dbt',
					'Réconciliation de donnée CRM vs Finance',
					'Mapping des objets custom',
				],
			},
		],
		livrables: [
			'Pipelines data optimisés',
			'Dashboard de pilotage Revenue',
			'Documentation dbt',
		],
		interview: [
			{
				q: "L'apport d'Ocobo ?",
				a: "Une expertise technique rare couplée à une compréhension fine des enjeux business d'une FinTech à cette échelle.",
			},
		],
	},
	vizzia: {
		company: 'Vizzia',
		title: 'Vizzia : Fondations RevOps post-Série A pour tripler le pipeline.',
		name: 'Louis Vannereau',
		role: 'COO @ Vizzia',
		segment: 'Série A/B',
		duration: '4 mois',
		team: 'Aude & Ocobo',
		image:
			'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Louis%20Vannereau.jpg',
		logo: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-vizzia-white.svg',
		color: 'ocobo-yellow',
		tools: ['HubSpot', 'Salesforce', 'Modjo'],
		results: [
			{
				label: 'Pipeline Growth',
				value: 'x3',
				icon: (
					<BarChart3 size={24} className={css({ color: 'ocobo.yellow' })} />
				),
			},
			{
				label: 'Sales Velocity',
				value: '+30%',
				icon: <Zap size={24} className={css({ color: 'ocobo.coral' })} />,
			},
			{
				label: 'Data Integrity',
				value: '95%',
				icon: <Check size={24} className={css({ color: 'ocobo.mint' })} />,
			},
		],
		mission: {
			intro:
				'Après une levée de fonds en Série A, Vizzia devait structurer ses équipes Sales et CS pour soutenir une croissance agressive.',
			objectives: [
				"Mise en place d'un système de prospection industrialisé",
				'Unification du cycle de vie client',
				'Visibilité totale sur le Forecast',
			],
		},
		phases: [
			{
				title: 'Phase 1 - GTM Setup',
				desc: 'Construction des fondations sur HubSpot.',
				items: [
					'Définition des étapes de pipeline',
					'Automatisation du suivi des leads',
					'Setup des séquences de prospection',
				],
			},
		],
		livrables: [
			'Playbook Sales',
			'Configuration HubSpot complète',
			'Dashboard Forecast',
		],
		interview: [
			{
				q: 'Verdict ?',
				a: 'Ocobo nous a permis de gagner 1 an de maturité opérationnelle en seulement 4 mois.',
			},
		],
	},
	citron: {
		company: 'Citron',
		title:
			'Citron : Automatisation des flux Data pour une efficacité Ops maximale.',
		name: 'Maxime L.',
		role: 'Operations Manager @ Citron',
		segment: 'Série A/B',
		duration: '3 mois',
		team: 'Dorian & Ocobo',
		image:
			'https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&w=600&q=80',
		logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
		color: 'ocobo-yellow',
		tools: ['HubSpot', 'Make', 'Aircall'],
		results: [
			{
				label: 'Saisie manuelle',
				value: '0',
				icon: <Zap size={24} className={css({ color: 'ocobo.yellow' })} />,
			},
			{
				label: 'Lead response time',
				value: '-80%',
				icon: <Clock size={24} className={css({ color: 'ocobo.mint' })} />,
			},
			{
				label: 'Conversion SQL',
				value: '+15%',
				icon: <BarChart3 size={24} className={css({ color: 'ocobo.sky' })} />,
			},
		],
		mission: {
			intro:
				'Citron perdait une part importante de sa productivité dans des tâches de saisie manuelle répétitives entre ses outils.',
			objectives: [
				'Automatisation totale de la chaîne de prospection',
				'Synchronisation bidirectionnelle des données',
				'Optimisation du temps des SDR',
			],
		},
		phases: [
			{
				title: 'Phase 1 - Automation Audit',
				desc: 'Mapping des process manuels chronophages.',
				items: [
					'Identification des sources de friction',
					'Cadrage des flux Make',
					'Tests de charge sur HubSpot',
				],
			},
		],
		livrables: [
			"Flux d'automatisation Make",
			"Playbook d'onboarding SDR",
			'Reporting productivité',
		],
		interview: [
			{
				q: 'Le bénéfice principal ?',
				a: 'Mes équipes ne passent plus 2h par jour à copier-coller des données. Elles vendent.',
			},
		],
	},
};

export const StoryDetail: React.FC = () => {
	const { id } = useParams();

	// Fallback sur Combo si l'ID n'est pas trouvé
	const story = id && STORY_DATA[id] ? STORY_DATA[id] : STORY_DATA.combo;

	if (!story) return null;

	return (
		<div className={css({ width: 'full', bg: 'white', pt: '32', pb: '40' })}>
			<div
				className={css({
					position: 'fixed',
					inset: '0',
					opacity: 0.02,
					pointerEvents: 'none',
					zIndex: -10,
					bg: 'dots-dark',
				})}
			/>

			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<div className={css({ mb: '12' })}>
					<Link
						to="/stories"
						className={`${flex({ gap: '2', align: 'center' })} ${css({
							display: 'inline-flex',
							color: 'gray.400',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							fontSize: 'xs',
							transition: 'colors',
							_hover: { color: 'ocobo.dark' },
						})}`}
					>
						<ArrowLeft size={14} className={css({ mr: '2' })} /> Retour aux
						Success Stories
					</Link>
				</div>

				<div
					className={`${flex({ direction: { base: 'column', lg: 'row' }, gap: '16', align: 'start' })} ${css({ mb: '24' })}`}
				>
					<div className={css({ lg: { w: '2/3' } })}>
						<div
							className={`${flex({ gap: '4', align: 'center' })} ${css({ mb: '8' })}`}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: '0.3em',
									color: 'ocobo.dark',
									bg: 'ocobo.mintLight',
									px: '4',
									py: '1.5',
									borderWidth: '1px',
									borderColor: 'ocobo.mint/20',
									rounded: 'full',
								})}
							>
								{story.segment}
							</span>
							<span
								className={css({
									w: '1.5',
									h: '1.5',
									rounded: 'full',
									bg: 'ocobo.yellow',
								})}
							/>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: '0.3em',
									color: 'gray.400',
								})}
							>
								Mission Architecture
							</span>
						</div>
						<h1
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '6xl' },
								fontWeight: 'black',
								color: 'ocobo.dark',
								mb: '0',
								lineHeight: '0.95',
								letterSpacing: 'tight',
							})}
						>
							{story.title}
						</h1>
					</div>
					<div
						className={`${flex()} ${css({ lg: { w: '1/3', justifyContent: 'end', pt: '20' } })}`}
					>
						<div
							className={css({
								bg: 'ocobo.dark',
								p: '8',
								rounded: '3xl',
								shadow: '2xl',
								transform: 'rotate(2deg)',
								transition: 'transform',
								transitionDuration: '500ms',
								_hover: { transform: 'rotate(0deg)' },
							})}
						>
							<img
								src={story.logo}
								alt={story.company}
								className={css({ h: '10', w: 'auto', objectFit: 'contain' })}
							/>
						</div>
					</div>
				</div>

				<div
					className={`${grid({ columns: { base: 1, md: 3 }, gap: '0' })} ${css({
						mb: '32',
						borderWidth: '1px',
						borderColor: 'gray.100',
						bg: 'gray.50/30',
						rounded: '3xl',
						overflow: 'hidden',
					})}`}
				>
					{/* biome-ignore lint/suspicious/noExplicitAny: story data */}
					{story.results.map((res: any, idx: number) => (
						<div
							key={res.label}
							className={`${flex({ direction: 'column', align: 'center' })} ${css(
								{
									textAlign: 'center',
									p: '12',
									borderBottomWidth: idx !== 2 ? '1px' : '0',
									md: { borderBottomWidth: '0' },
									borderRightWidth: idx !== 2 ? { base: '0', md: '1px' } : '0',
									borderColor: 'gray.100',
								},
							)}`}
						>
							<div
								className={css({
									mb: '6',
									bg: 'white',
									p: '4',
									rounded: '2xl',
									shadow: 'sm',
								})}
							>
								{res.icon}
							</div>
							<div
								className={css({
									fontFamily: 'display',
									fontSize: '5xl',
									fontWeight: 'black',
									color: 'ocobo.dark',
									mb: '2',
									letterSpacing: 'tighter',
								})}
							>
								{res.value}
							</div>
							<div
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: '0.3em',
									color: 'gray.400',
								})}
							>
								{res.label}
							</div>
						</div>
					))}
				</div>

				<div
					className={`${grid({ columns: { base: 1, lg: 12 }, gap: { base: '16', md: '24' } })} ${css(
						{
							mb: '40',
						},
					)}`}
				>
					<div
						className={`${vstack({ gap: '24' })} ${css({ lg: { gridColumn: 'span 8' } })}`}
					>
						<section>
							<div
								className={`${flex({ gap: '4', align: 'center' })} ${css({ mb: '10' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '10',
										h: '10',
										bg: 'ocobo.dark',
										color: 'white',
										rounded: 'lg',
										fontFamily: 'display',
										fontWeight: 'bold',
									})}`}
								>
									1
								</div>
								<h2
									className={css({
										fontFamily: 'display',
										fontSize: '3xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										letterSpacing: 'tight',
										textTransform: 'uppercase',
									})}
								>
									La Mission
								</h2>
							</div>
							<div
								className={css({
									fontSize: { base: 'xl', md: '2xl' },
									color: 'gray.600',
									fontWeight: 'medium',
									lineHeight: 'relaxed',
									mb: '12',
									borderLeftWidth: '4px',
									borderColor: 'ocobo.mint',
									pl: '8',
								})}
							>
								{story.mission.intro}
							</div>
							<div className={grid({ columns: { base: 1, sm: 2 }, gap: '6' })}>
								{story.mission.objectives.map((obj: string) => (
									<div
										key={obj}
										className={`${flex({ gap: '4', align: 'start' })} ${css({
											p: '6',
											bg: 'white',
											borderWidth: '1px',
											borderColor: 'gray.100',
											rounded: '2xl',
										})}`}
									>
										<Check
											size={18}
											className={css({
												color: 'ocobo.mint',
												flexShrink: 0,
												mt: '1',
											})}
										/>
										<p
											className={css({
												fontSize: 'sm',
												fontWeight: 'bold',
												color: 'gray.700',
											})}
										>
											{obj}
										</p>
									</div>
								))}
							</div>
						</section>

						<section>
							<div
								className={`${flex({ gap: '4', align: 'center' })} ${css({ mb: '10' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '10',
										h: '10',
										bg: 'ocobo.dark',
										color: 'white',
										rounded: 'lg',
										fontFamily: 'display',
										fontWeight: 'bold',
									})}`}
								>
									2
								</div>
								<h2
									className={css({
										fontFamily: 'display',
										fontSize: '3xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										letterSpacing: 'tight',
										textTransform: 'uppercase',
									})}
								>
									L'Architecture du projet
								</h2>
							</div>

							<div
								className={`${vstack({ gap: '10' })} ${css({ position: 'relative' })}`}
							>
								<div
									className={css({
										position: 'absolute',
										left: '9.6',
										top: '10',
										bottom: '10',
										w: 'px',
										borderLeftWidth: '2px',
										borderStyle: 'dashed',
										borderColor: 'gray.200',
									})}
								/>

								{/* biome-ignore lint/suspicious/noExplicitAny: story data */}
								{story.phases.map((phase: any, idx: number) => (
									<div
										key={phase.title}
										className={css({
											position: 'relative',
											pl: '24',
											'& .phase-box': {
												transition: 'all',
												transitionDuration: '500ms',
											},
											'& .phase-card': {
												transition: 'all',
												transitionDuration: '500ms',
											},
											'&:hover .phase-box': {
												bg: 'ocobo.dark',
												color: 'white',
											},
											'&:hover .phase-card': {
												borderColor: 'ocobo.dark',
												shadow: '2xl',
											},
										})}
									>
										<div
											className={`phase-box ${center()} ${css({
												position: 'absolute',
												left: '0',
												top: '0',
												w: '20',
												h: '20',
												bg: 'white',
												borderWidth: '2px',
												borderColor: 'ocobo.dark',
												rounded: '3xl',
												fontFamily: 'display',
												fontSize: '3xl',
												fontWeight: 'black',
												shadow: 'xl',
												zIndex: 10,
											})}`}
										>
											0{idx + 1}
										</div>
										<div
											className={`phase-card ${css({
												p: '10',
												bg: 'white',
												borderWidth: '1px',
												borderColor: 'gray.100',
												rounded: '3xl',
											})}`}
										>
											<h3
												className={css({
													fontFamily: 'display',
													fontSize: '2xl',
													fontWeight: 'bold',
													mb: '4',
												})}
											>
												{phase.title}
											</h3>
											<p
												className={css({
													color: 'gray.400',
													fontWeight: 'bold',
													fontSize: 'xs',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
													mb: '8',
												})}
											>
												{phase.desc}
											</p>
											<ul className={vstack({ gap: '4' })}>
												{phase.items.map((item: string) => (
													<li
														key={item}
														className={flex({ gap: '3', align: 'start' })}
													>
														<div
															className={css({
																w: '1.5',
																h: '1.5',
																rounded: 'full',
																bg: 'ocobo.mint',
																mt: '1.5',
																flexShrink: 0,
															})}
														/>
														<span
															className={css({
																color: 'gray.600',
																fontSize: 'sm',
																fontWeight: 'medium',
															})}
														>
															{item}
														</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</section>

						<section
							id="feedback"
							className={css({
								pt: '20',
								borderTopWidth: '1px',
								borderColor: 'gray.100',
							})}
						>
							<div
								className={`${flex({ gap: '4', align: 'center' })} ${css({ mb: '16' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '10',
										h: '10',
										bg: 'ocobo.dark',
										color: 'white',
										rounded: 'lg',
										fontFamily: 'display',
										fontWeight: 'bold',
									})}`}
								>
									3
								</div>
								<h2
									className={css({
										fontFamily: 'display',
										fontSize: '3xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										letterSpacing: 'tight',
										textTransform: 'uppercase',
									})}
								>
									Le Retour d'Expérience
								</h2>
							</div>

							<div className={vstack({ gap: '20' })}>
								{/* biome-ignore lint/suspicious/noExplicitAny: story data */}
								{story.interview.map((item: any) => (
									<div key={item.q} className={css({ position: 'relative' })}>
										<div
											className={`${flex({ gap: '3', align: 'center' })} ${css({ mb: '6' })}`}
										>
											<div
												className={css({ w: '8', h: 'px', bg: 'ocobo.yellow' })}
											/>
											<h4
												className={css({
													fontFamily: 'display',
													fontSize: 'xl',
													fontWeight: 'bold',
													color: 'ocobo.dark',
													lineHeight: 'tight',
													maxW: 'xl',
												})}
											>
												{item.q}
											</h4>
										</div>
										<div className={css({ position: 'relative', pl: '12' })}>
											<Quote
												size={24}
												className={css({
													position: 'absolute',
													left: '0',
													top: '0',
													color: 'ocobo.yellow',
													opacity: 0.4,
												})}
											/>
											<p
												className={css({
													fontSize: 'lg',
													color: 'gray.500',
													lineHeight: 'relaxed',
													fontWeight: 'medium',
													fontStyle: 'italic',
												})}
											>
												{item.a}
											</p>
										</div>
									</div>
								))}
							</div>

							<div
								className={`${flex({ direction: { base: 'column', md: 'row' }, align: 'center', gap: '10' })} ${css(
									{
										mt: '24',
										p: '10',
										bg: 'gray.50',
										rounded: '3xl',
										borderWidth: '1px',
										borderColor: 'gray.100',
									},
								)}`}
							>
								<div
									className={css({
										w: '32',
										h: '32',
										rounded: '3xl',
										overflow: 'hidden',
										filter: 'grayscale(100%)',
										borderWidth: '4px',
										borderColor: 'white',
										shadow: 'xl',
										transform: 'rotate(3deg)',
									})}
								>
									<img
										src={story.image}
										alt={story.name}
										className={css({
											w: 'full',
											h: 'full',
											objectFit: 'cover',
										})}
									/>
								</div>
								<div
									className={css({ textAlign: { base: 'center', md: 'left' } })}
								>
									<p
										className={css({
											fontFamily: 'display',
											fontSize: '2xl',
											fontWeight: 'black',
											color: 'ocobo.dark',
											mb: '1',
										})}
									>
										{story.name}
									</p>
									<p
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											color: 'ocobo.mint',
											textTransform: 'uppercase',
											letterSpacing: '0.3em',
											mb: '4',
										})}
									>
										{story.role}
									</p>
									<p
										className={css({
											color: 'gray.500',
											fontSize: 'sm',
											lineHeight: 'relaxed',
											maxW: 'md',
										})}
									>
										"La collaboration avec Ocobo nous a permis de franchir un
										cap critique dans notre architecture revenue."
									</p>
								</div>
							</div>
						</section>
					</div>

					<div className={css({ lg: { gridColumn: 'span 4' } })}>
						<div
							className={`${vstack({ gap: '10' })} ${css({ position: 'sticky', top: '32' })}`}
						>
							<div
								className={css({
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'gray.100',
									p: '10',
									rounded: '3xl',
									shadow: 'sm',
								})}
							>
								<h4
									className={css({
										fontFamily: 'display',
										fontWeight: 'black',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: '0.4em',
										color: 'ocobo.dark',
										mb: '8',
									})}
								>
									Process & Outils
								</h4>

								<div className={vstack({ gap: '8' })}>
									<div className={flex({ gap: '5', align: 'center' })}>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'gray.50',
												rounded: 'xl',
												color: 'ocobo.dark',
											})}`}
										>
											<Clock size={18} />
										</div>
										<div>
											<p
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													color: 'gray.400',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
												})}
											>
												DURÉE
											</p>
											<p
												className={css({
													fontSize: 'sm',
													fontWeight: 'bold',
													color: 'ocobo.dark',
												})}
											>
												{story.duration}
											</p>
										</div>
									</div>
									<div className={flex({ gap: '5', align: 'center' })}>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'gray.50',
												rounded: 'xl',
												color: 'ocobo.dark',
											})}`}
										>
											<Users size={18} />
										</div>
										<div>
											<p
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													color: 'gray.400',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
												})}
											>
												ÉQUIPE
											</p>
											<p
												className={css({
													fontSize: 'sm',
													fontWeight: 'bold',
													color: 'ocobo.dark',
												})}
											>
												{story.team}
											</p>
										</div>
									</div>
									<div className={flex({ gap: '5', align: 'center' })}>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'gray.50',
												rounded: 'xl',
												color: 'ocobo.dark',
											})}`}
										>
											<Cpu size={18} />
										</div>
										<div>
											<p
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													color: 'gray.400',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
												})}
											>
												TECH STACK
											</p>
											<div
												className={`${flex({ wrap: 'wrap', gap: '2' })} ${css({ mt: '1' })}`}
											>
												{story.tools.map((tool: string) => (
													<span
														key={tool}
														className={css({
															fontSize: 'xs',
															fontWeight: 'bold',
															bg: 'white',
															borderWidth: '1px',
															borderColor: 'gray.100',
															px: '2',
															py: '0.5',
															rounded: 'sm',
															color: 'gray.500',
														})}
													>
														{tool}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={css({
									bg: 'ocobo.dark',
									p: '10',
									rounded: '3xl',
									color: 'white',
									position: 'relative',
									overflow: 'hidden',
									shadow: '2xl',
								})}
							>
								<div
									className={css({
										position: 'absolute',
										top: '0',
										right: '0',
										w: '32',
										h: '32',
										bg: 'ocobo.mint/10',
										rounded: 'full',
										filter: 'blur(48px)',
									})}
								/>
								<h4
									className={css({
										fontFamily: 'display',
										fontWeight: 'black',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: '0.4em',
										color: 'white/40',
										mb: '8',
									})}
								>
									Livrables de la mission
								</h4>

								<ul className={vstack({ gap: '5' })}>
									{story.livrables.map((item: string) => (
										<li
											key={item}
											className={`${flex({ gap: '4', align: 'start' })} ${css({
												'& .check-bg': {
													transition: 'colors',
												},
												'& .check-icon': {
													transition: 'colors',
												},
												'& span': {
													transition: 'colors',
												},
												'&:hover .check-bg': {
													bg: 'ocobo.mint',
												},
												'&:hover .check-icon': {
													color: 'ocobo.dark',
												},
												'&:hover span': {
													color: 'white',
												},
											})}`}
										>
											<div
												className={`check-bg ${css({
													mt: '1',
													bg: 'white/10',
													p: '1',
													rounded: 'sm',
												})}`}
											>
												<Check
													size={12}
													className={`check-icon ${css({ color: 'ocobo.mint' })}`}
												/>
											</div>
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'bold',
													color: 'gray.300',
													lineHeight: 'snug',
												})}
											>
												{item}
											</span>
										</li>
									))}
								</ul>

								<div
									className={css({
										mt: '10',
										pt: '8',
										borderTopWidth: '1px',
										borderColor: 'white/10',
									})}
								>
									<p
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											color: 'gray.400',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											mb: '4',
										})}
									>
										Parlons de vos projets
									</p>
									<Link to="/contact">
										<button
											type="button"
											className={`${center({ inline: true })} ${css({
												w: 'full',
												py: '4',
												bg: 'white',
												color: 'ocobo.dark',
												fontWeight: 'black',
												fontSize: 'xs',
												textTransform: 'uppercase',
												letterSpacing: '0.2em',
												rounded: 'xl',
												transition: 'all',
												shadow: 'xl',
												gap: '2',
												'& .arrow': {
													transition: 'transform',
												},
												_hover: {
													bg: 'ocobo.mint',
												},
												'&:hover .arrow': {
													transform: 'translateX(4px)',
												},
											})}`}
										>
											Prendre RDV <ArrowRight size={14} className={`arrow`} />
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className={css({
						bg: 'ocobo.yellow',
						p: { base: '12', md: '24' },
						rounded: '3xl',
						textAlign: 'center',
						color: 'ocobo.dark',
						position: 'relative',
						overflow: 'hidden',
					})}
				>
					<div
						className={css({
							position: 'absolute',
							inset: '0',
							opacity: 0.1,
							bg: 'dots-dark-sm',
						})}
					/>
					<div
						className={css({
							position: 'relative',
							zIndex: 10,
							maxW: '3xl',
							mx: 'auto',
						})}
					>
						<span
							className={css({
								fontFamily: 'display',
								fontWeight: 'black',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: '0.4em',
								mb: '8',
								display: 'inline-block',
								opacity: 0.4,
							})}
						>
							Votre futur système
						</span>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '6xl' },
								fontWeight: 'black',
								mb: '10',
								lineHeight: 'tight',
								letterSpacing: 'tight',
							})}
						>
							Votre machine revenue mérite une architecture d'élite.
						</h2>
						<div className={flex({ justify: 'center' })}>
							<Button
								variant="primary"
								className={css({
									px: '14',
									py: '6',
									fontSize: 'lg',
									bg: 'ocobo.dark',
									color: 'white',
									border: 'none',
									shadow: '2xl',
									transition: 'transform',
									_hover: { transform: 'scale(1.05)' },
								})}
								to="/contact"
							>
								Démarrer mon audit RevOps
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
