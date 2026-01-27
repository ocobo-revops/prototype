import {
	ArrowRight,
	BarChart3,
	Filter,
	Plus,
	Smile,
	Star,
	TrendingUp,
	Zap,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';
import { Badge, Button } from '../components/atoms';
import { ClientMarquee } from '../components/layout/ClientMarquee';

const StoriesIllustration = () => {
	return (
		<div
			className={`${center()} ${css({
				position: 'relative',
				w: 'full',
				maxW: '540px',
				aspectRatio: '1',
				overflow: 'visible',
			})}`}
		>
			{/* BACKGROUND ARCHITECTURAL GRID */}
			<div
				className={css({
					position: 'absolute',
					inset: '0',
					opacity: 0.05,
					pointerEvents: 'none',
					backgroundImage:
						'radial-gradient(#212323 1px, transparent 1px), linear-gradient(rgba(33,35,35,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(33,35,35,0.1) 1px, transparent 1px)',
					backgroundSize: '40px 40px, 80px 80px, 80px 80px',
				})}
			/>

			<svg
				viewBox="0 0 600 600"
				className={css({
					w: 'full',
					h: 'full',
					overflow: 'visible',
					color: 'ocobo.dark',
				})}
				fill="none"
			>
				<defs>
					<linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#212323" stopOpacity="0.25" />
						<stop offset="100%" stopColor="#212323" stopOpacity="0" />
					</linearGradient>
				</defs>

				{/* RADIAL RADAR CIRCLES - DARKENED GRADIENT OF OPACITY */}
				<g stroke="currentColor" strokeWidth="0.5">
					<circle cx="300" cy="300" r="60" opacity="0.3" />
					<circle cx="300" cy="300" r="120" opacity="0.2" />
					<circle cx="300" cy="300" r="180" opacity="0.12" />
					<circle cx="300" cy="300" r="240" opacity="0.08" />
					<circle cx="300" cy="300" r="300" opacity="0.04" />
				</g>

				{/* RADAR SWEEP ANIMATION - DARKENED */}
				<g className="animate-radar-sweep origin-radar">
					<path
						d="M300,300 L300,0 A300,300 0 0,1 512,87 Z"
						fill="url(#radarGradient)"
						opacity="0.15"
					/>
					<line
						x1="300"
						y1="300"
						x2="300"
						y2="0"
						stroke="currentColor"
						strokeWidth="0.5"
						opacity="0.25"
					/>
				</g>

				{/* CENTRAL HUB - OCOBO CORE */}
				<g transform="translate(300, 300)">
					{/* Animated Ring */}
					<circle
						r="60"
						fill="none"
						stroke="#9ADBBA"
						strokeWidth="1"
						className="animate-pulse"
						opacity="0.25"
					/>

					{/* Core Box */}
					<rect
						x="-45"
						y="-45"
						width="90"
						height="90"
						rx="20"
						fill="currentColor"
						className={css({ shadow: '2xl' })}
					/>
					<Star
						x="-20"
						y="-20"
						size={40}
						fill="#9ADBBA"
						className={css({ color: 'ocobo.mint' })}
					/>

					{/* Decorative dots around core */}
					{[0, 60, 120, 180, 240, 300].map((angle) => (
						<circle
							key={angle}
							cx={Math.cos((angle * Math.PI) / 180) * 55}
							cy={Math.sin((angle * Math.PI) / 180) * 55}
							r="2.5"
							fill="#F1CF25"
						/>
					))}
				</g>

				{/* SATELLITE 1: ROI CARD (Coral) */}
				<foreignObject
					x="420"
					y="80"
					width="160"
					height="100"
					className="animate-float-gentle"
				>
					<div
						className={css({
							bg: 'white',
							borderWidth: '2px',
							borderColor: 'ocobo.dark',
							p: '4',
							rounded: '2xl',
							shadow: 'offset',
						})}
					>
						<div className={`${hstack({ gap: '2' })} ${css({ mb: '2' })}`}>
							<TrendingUp size={14} className={css({ color: 'ocobo.coral' })} />
							<span
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									color: 'ocobo.dark',
									opacity: 0.4,
								})}
							>
								Impact
							</span>
						</div>
						<div
							className={css({
								fontSize: '2xl',
								fontFamily: 'display',
								fontWeight: 'black',
								color: 'ocobo.dark',
								lineHeight: 'none',
							})}
						>
							+50%
						</div>
						<div
							className={css({
								fontSize: 'xs',
								fontWeight: 'bold',
								color: 'gray.400',
								mt: '1',
								textTransform: 'uppercase',
							})}
						>
							Efficacité GTM
						</div>
					</div>
				</foreignObject>

				{/* SATELLITE 2: AUTOMATION CARD (Sky) */}
				<foreignObject
					x="40"
					y="320"
					width="160"
					height="100"
					className="animate-float-gentle [animation-delay:1.2s]"
				>
					<div
						className={css({
							bg: 'white',
							borderWidth: '2px',
							borderColor: 'ocobo.dark',
							p: '4',
							rounded: '2xl',
							shadow: 'offset',
						})}
					>
						<div className={`${hstack({ gap: '2' })} ${css({ mb: '2' })}`}>
							<Zap size={14} className={css({ color: 'ocobo.sky' })} />
							<span
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									color: 'ocobo.dark',
									opacity: 0.4,
								})}
							>
								Process
							</span>
						</div>
						<div
							className={css({
								fontSize: '2xl',
								fontFamily: 'display',
								fontWeight: 'black',
								color: 'ocobo.dark',
								lineHeight: 'none',
							})}
						>
							100%
						</div>
						<div
							className={css({
								fontSize: 'xs',
								fontWeight: 'bold',
								color: 'gray.400',
								mt: '1',
								textTransform: 'uppercase',
							})}
						>
							Automatisé
						</div>
					</div>
				</foreignObject>

				{/* SATELLITE 3: DATA CARD (Yellow) */}
				<foreignObject
					x="350"
					y="440"
					width="160"
					height="100"
					className="animate-float-gentle [animation-delay:2.5s]"
				>
					<div
						className={css({
							bg: 'white',
							borderWidth: '2px',
							borderColor: 'ocobo.dark',
							p: '4',
							rounded: '2xl',
							shadow: 'offset',
						})}
					>
						<div className={`${hstack({ gap: '2' })} ${css({ mb: '2' })}`}>
							<BarChart3 size={14} className={css({ color: 'ocobo.yellow' })} />
							<span
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									color: 'ocobo.dark',
									opacity: 0.4,
								})}
							>
								Data
							</span>
						</div>
						<div
							className={css({
								fontSize: '2xl',
								fontFamily: 'display',
								fontWeight: 'black',
								color: 'ocobo.dark',
								lineHeight: 'none',
							})}
						>
							Clean
						</div>
						<div
							className={css({
								fontSize: 'xs',
								fontWeight: 'bold',
								color: 'gray.400',
								mt: '1',
								textTransform: 'uppercase',
							})}
						>
							Donnée fiable
						</div>
					</div>
				</foreignObject>

				{/* SATELLITE 4: USER EXPERIENCE (Mint) */}
				<foreignObject
					x="50"
					y="60"
					width="160"
					height="100"
					className="animate-float-gentle [animation-delay:0.6s]"
				>
					<div
						className={css({
							bg: 'white',
							borderWidth: '2px',
							borderColor: 'ocobo.dark',
							p: '4',
							rounded: '2xl',
							shadow: 'offset',
						})}
					>
						<div className={`${hstack({ gap: '2' })} ${css({ mb: '2' })}`}>
							<Smile size={14} className={css({ color: 'ocobo.mint' })} />
							<span
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									color: 'ocobo.dark',
									opacity: 0.4,
								})}
							>
								User Experience
							</span>
						</div>
						<div className={hstack({ gap: '3' })}>
							<div
								className={css({
									fontSize: '2xl',
									fontFamily: 'display',
									fontWeight: 'black',
									color: 'ocobo.dark',
									lineHeight: 'none',
								})}
							>
								Fluidité
							</div>
							<svg
								width="24"
								height="24"
								viewBox="0 0 84 84"
								fill="none"
								className={css({ color: 'ocobo.mint' })}
							>
								<circle
									cx="42"
									cy="42"
									r="38"
									stroke="currentColor"
									strokeWidth="6"
								/>
								<ellipse cx="32" cy="36" rx="4.5" ry="8" fill="currentColor" />
								<ellipse cx="52" cy="36" rx="4.5" ry="8" fill="currentColor" />
								<path
									d="M26 55 C34 65, 50 65, 58 55"
									stroke="currentColor"
									strokeWidth="6"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<div
							className={css({
								fontSize: 'xs',
								fontWeight: 'bold',
								color: 'gray.400',
								mt: '1',
								textTransform: 'uppercase',
							})}
						>
							Adoption & Engagement
						</div>
					</div>
				</foreignObject>

				{/* DECORATIVE ELEMENTS */}
				<g opacity="0.3">
					<circle
						cx="100"
						cy="100"
						r="4"
						fill="#9ADBBA"
						className="animate-pulse"
					/>
					<circle
						cx="500"
						cy="500"
						r="4"
						fill="#FE9C87"
						className="animate-pulse [animation-delay:1.5s]"
					/>
					<path
						d="M50,50 l10,0 m-5,-5 l0,10"
						stroke="currentColor"
						strokeWidth="2"
					/>
					<path
						d="M550,50 l10,0 m-5,-5 l0,10"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</g>
			</svg>
		</div>
	);
};

const STORIES_CLIENTS = [
	'YOUSIGN',
	'QONTO',
	'TOMORRO',
	'QARE',
	'COMBO',
	'STEEPLE',
	'CYBELANGEL',
	'CITRON',
	'CHR GROUPE',
	'VIBE',
	'JUS MUNDI',
	'VIZZIA',
	'RESILIENCE',
	'QOBRA',
];

export const Stories: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState('Tout');
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(false);
		const timer = setTimeout(() => setAnimate(true), 10);
		return () => clearTimeout(timer);
	}, []);

	const categories = ['Tout', 'Série A/B', 'Scale-up', 'Enterprise'];

	const cases = [
		{
			id: 'yousign',
			company: 'Yousign',
			name: 'Antoine S.',
			role: 'Head of RevOps',
			segment: 'Scale-up',
			headline: 'Scaling GTM Architecture & Global Strategy',
			roi: 'Efficacité GTM +50%',
			image:
				'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-yellow',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			],
		},
		{
			id: 'qonto',
			company: 'Qonto',
			name: 'Léa S.',
			role: 'RevOps Lead',
			segment: 'Enterprise',
			headline: 'Scaling Flux de Données & BI Revenue',
			roi: 'Reporting 100% Automatisé',
			image:
				'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-mint',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
				'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
			],
		},
		{
			id: 'tomorro',
			company: 'Tomorro',
			name: 'Jean de Tomorro',
			role: 'CEO & Co-founder',
			segment: 'Scale-up',
			headline: 'Architecture CRM & Sales Automation',
			roi: '+30% Velocité de deal',
			image:
				'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-yellow',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://dust.tt/static/logo_icon.png',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			],
		},
		{
			id: 'combo',
			company: 'Combo',
			name: 'Marie Piquemil',
			role: 'VP Operations',
			segment: 'Scale-up',
			headline: 'Optimisation Planhat & Productivité CS',
			roi: '+25% Temps gagné CS',
			image:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg',
			logo: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-combo-white.svg',
			color: 'ocobo-mint',
			tools: [
				'https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg',
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
			],
		},
		{
			id: 'qare',
			company: 'Qare',
			name: 'Thibault de Qare',
			role: 'Head of Sales Ops',
			segment: 'Scale-up',
			headline: 'HubSpot Core Model & Data Quality',
			roi: 'Données 100% fiables',
			image:
				'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-sky',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			],
		},
		{
			id: 'cybelangel',
			company: 'CybelAngel',
			name: 'Thomas R.',
			role: 'RevOps Director',
			segment: 'Enterprise',
			headline: 'Sales Operations Excellence & Forecasting',
			roi: 'Forecast Accuracy +20%',
			image:
				'https://images.unsplash.com/photo-1454165833767-131438967b21?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-coral',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
				'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			],
		},
		{
			id: 'citron',
			company: 'Citron',
			name: 'Maxime L.',
			role: 'Operations Manager',
			segment: 'Série A/B',
			headline: 'Architecture Data & Automatisation Flux',
			roi: 'Zéro Saisie Manuelle',
			image:
				'https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-yellow',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
				'https://dust.tt/static/logo_icon.png',
			],
		},
		{
			id: 'chr-groupe',
			company: 'CHR Groupe',
			name: 'Laurent B.',
			role: 'COO',
			segment: 'Enterprise',
			headline: 'Migration & Unification CRM Multi-Entités',
			roi: 'Centralisation 100%',
			image:
				'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-sky',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			],
		},
		{
			id: 'vibe',
			company: 'Vibe',
			name: 'Arnaud M.',
			role: 'Co-founder',
			segment: 'Série A/B',
			headline: 'HubSpot Custom Objects & Visibilité Pipeline',
			roi: 'Visibilité Pipeline x2',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-mint',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
				'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
			],
		},
		{
			id: 'steeple',
			company: 'Steeple',
			name: 'Jean-Baptiste de Steeple',
			role: 'CEO',
			segment: 'Série A/B',
			headline: 'Structuration Sales Ops & Pipeline',
			roi: '+40% Conv. Lead-to-SQL',
			image:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-coral',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
				'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			],
		},
		{
			id: 'jusmundi',
			company: 'Jus Mundi',
			name: 'Luciana Collinet',
			role: 'VP Revenue & Care',
			segment: 'Scale-up',
			headline: 'Data-driven Growth Série B',
			roi: 'Architecture Hubspot & CS',
			image:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Luciana%20Collinet.jpg',
			logo: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-jusmundi-white.svg',
			color: 'ocobo-sky',
			tools: [
				'https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg',
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
			],
		},
		{
			id: 'vizzia',
			company: 'Vizzia',
			name: 'Louis Vannereau',
			role: 'COO',
			segment: 'Série A/B',
			headline: 'Fondations RevOps post-Série A',
			roi: 'Pipeline x3 en 6 mois',
			image:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Louis%20Vannereau.jpg',
			logo: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-vizzia-white.svg',
			color: 'ocobo-yellow',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
				'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			],
		},
		{
			id: 'resilience',
			company: 'Resilience',
			name: 'Céline L.',
			role: 'Head of Sales Ops',
			segment: 'Série A/B',
			headline: 'Architecture CRM Santé (Compliance)',
			roi: '-15% Cycle de Vente',
			image:
				'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-coral',
			tools: [
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
				'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			],
		},
		{
			id: 'qobra',
			company: 'Qobra',
			name: 'Marine B.',
			role: 'Ops Manager',
			segment: 'Série A/B',
			headline: 'Automatisation du Commissionnement',
			roi: 'Gain de temps Ops x5',
			image:
				'https://images.unsplash.com/photo-1454165833767-131438967b21?auto=format&fit=crop&w=600&q=80',
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			color: 'ocobo-mint',
			tools: [
				'https://qobra.co/favicon.ico',
				'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
				'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
			],
		},
	];

	const filteredCases =
		activeFilter === 'Tout'
			? cases
			: cases.filter((c) => c.segment === activeFilter);

	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			{/* Hero Section */}
			<section
				className={css({
					pt: '40',
					pb: '20',
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<div
					className={flex({
						direction: { base: 'column', lg: 'row' },
						align: 'center',
						justify: 'space-between',
						gap: { base: '16', lg: '20' },
					})}
				>
					<div className={css({ lg: { w: '1/2' } })}>
						<Badge variant="yellow" className={css({ mb: '10' })}>
							SUCCESS STORIES
						</Badge>
						<h1
							className={css({
								fontFamily: 'display',
								fontSize: { base: '5xl', md: '6xl' },
								fontWeight: 'bold',
								color: 'ocobo.dark',
								mb: '10',
								lineHeight: '0.95',
								letterSpacing: 'tight',
							})}
						>
							Ils ont choisi
							<br />
							l'architecture.
						</h1>
						<p
							className={css({
								fontSize: 'xl',
								color: 'gray.700',
								lineHeight: 'relaxed',
								fontWeight: 'medium',
								maxW: 'md',
							})}
						>
							Découvrez comment nous accompagnons les plus belles scale-ups
							européennes dans leur quête d'excellence opérationnelle.
						</p>
					</div>
					<div
						className={`${flex({
							justify: { base: 'center', lg: 'end' },
							align: 'center',
						})} ${css({
							lg: { w: '1/2' },
							position: 'relative',
						})}`}
					>
						<StoriesIllustration />
					</div>
				</div>
			</section>

			{/* Black Marquee Banner */}
			<section
				className={css({
					bg: 'ocobo.dark',
					overflow: 'hidden',
					borderTopWidth: '1px',
					borderBottomWidth: '1px',
					borderColor: 'white/5',
				})}
			>
				<ClientMarquee clients={STORIES_CLIENTS} padding="md" textSize="md" />
			</section>

			{/* Filter Section */}
			<section className={css({ maxW: '7xl', mx: 'auto', px: '4', py: '12' })}>
				<div
					className={`${flex({
						direction: { base: 'column', md: 'row' },
						justify: 'space-between',
						align: 'center',
						gap: '6',
					})} ${css({
						borderTopWidth: '1px',
						borderBottomWidth: '1px',
						borderColor: 'gray.100',
						py: '8',
					})}`}
				>
					<div className={hstack({ gap: '3' })}>
						<Filter size={14} className={css({ color: 'gray.400' })} />
						<span
							className={css({
								fontSize: 'xs',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: '0.4em',
								color: 'gray.400',
							})}
						>
							Filtrer par segment
						</span>
					</div>
					<div className={flex({ wrap: 'wrap', justify: 'center', gap: '3' })}>
						{categories.map((cat) => (
							<button
								type="button"
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className={css({
									px: '8',
									py: '2.5',
									rounded: 'full',
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: '0.2em',
									transition: 'all',
									transitionDuration: '300ms',
									bg: activeFilter === cat ? 'ocobo.dark' : 'gray.50',
									color: activeFilter === cat ? 'white' : 'gray.400',
									shadow: activeFilter === cat ? 'xl' : 'none',
									transform: activeFilter === cat ? 'scale(1.05)' : 'none',
									_hover:
										activeFilter !== cat
											? { bg: 'gray.100', color: 'ocobo.dark' }
											: {},
								})}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Bento Grid Stories */}
			<section className={css({ maxW: '7xl', mx: 'auto', px: '4', pb: '40' })}>
				<div
					className={`${grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '8' })} stagger-fade`}
				>
					{filteredCases.map((item) => (
						<Link
							key={item.id}
							to={`/stories/${item.id}`}
							className={`${vstack()} ${css({
								position: 'relative',
								bg: 'white',
								borderWidth: '1px',
								borderColor: 'gray.100',
								rounded: '3xl',
								p: '6',
								transition: 'all',
								transitionDuration: '500ms',
								overflow: 'hidden',
								h: 'full',
								animation: animate ? 'fade-in-up' : 'none',
								opacity: animate ? 0 : 1,
								_hover: { shadow: 'soft-lg', transform: 'translateY(-8px)' },
								'& .color-blur': {
									transition: 'opacity',
								},
								'&:hover .color-blur': {
									opacity: 0.05,
								},
								'& img.main-img': {
									transition: 'all',
									transitionDuration: '700ms',
								},
								'&:hover img.main-img': {
									filter: 'grayscale(0)',
									opacity: 1,
									transform: 'scale(1.05)',
								},
								'& .logo-overlay': {
									transition: 'all',
									transitionDuration: '500ms',
								},
								'&:hover .logo-overlay': {
									opacity: 1,
									transform: 'translateY(0)',
								},
								'& h3': {
									transition: 'colors',
								},
								'&:hover h3': {
									color: 'black',
								},
								'& .arrow': {
									transition: 'all',
								},
								'&:hover .arrow': {
									color: 'ocobo.dark',
									transform: 'translateX(4px)',
								},
								'& .tools': {
									transition: 'all',
								},
								'&:hover .tools': {
									opacity: 1,
								},
							})}`}
						>
							<div
								className={`color-blur ${css({
									position: 'absolute',
									top: '0',
									right: '0',
									w: '32',
									h: '32',
									opacity: 0,
									filter: 'blur(48px)',
									bg:
										item.color === 'ocobo-yellow'
											? 'ocobo.yellow'
											: item.color === 'ocobo-mint'
												? 'ocobo.mint'
												: item.color === 'ocobo-sky'
													? 'ocobo.sky'
													: 'ocobo.coral',
								})}`}
							/>

							<div
								className={css({
									position: 'relative',
									aspectRatio: '16/10',
									overflow: 'hidden',
									rounded: '2xl',
									bg: 'gray.50',
									mb: '8',
								})}
							>
								<img
									src={item.image}
									alt={item.company}
									className={`main-img ${css({
										w: 'full',
										h: 'full',
										objectFit: 'cover',
										filter: 'grayscale(100%)',
										opacity: 0.8,
									})}`}
								/>
								<div
									className={`logo-overlay ${css({
										position: 'absolute',
										bottom: '4',
										right: '4',
										bg: 'ocobo.dark',
										p: '3',
										rounded: 'xl',
										shadow: '2xl',
										opacity: 0,
										transform: 'translateY(8px)',
									})}`}
								>
									<img
										src={item.logo}
										alt={item.company}
										className={css({ h: '4', w: 'auto', objectFit: 'contain' })}
									/>
								</div>
							</div>

							<div
								className={`${flex({ direction: 'column' })} ${css({ flexGrow: 1 })}`}
							>
								<div className={`${hstack({ gap: '2' })} ${css({ mb: '4' })}`}>
									<span
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: '0.2em',
											color: 'gray.400',
										})}
									>
										{item.segment}
									</span>
									<span
										className={css({
											w: '1',
											h: '1',
											bg: 'gray.200',
											rounded: 'full',
										})}
									/>
									<span
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: '0.2em',
											color: 'ocobo.dark',
										})}
									>
										{item.company}
									</span>
								</div>

								<h3
									className={css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										lineHeight: 'tight',
										mb: '2',
										letterSpacing: 'tight',
									})}
								>
									{item.headline}
								</h3>

								<div className={css({ mb: '6' })}>
									<span
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											color: 'ocobo.dark',
											opacity: 0.6,
											display: 'block',
										})}
									>
										{item.name}
									</span>
									<span
										className={css({
											fontSize: 'xs',
											fontWeight: 'medium',
											color: 'gray.400',
										})}
									>
										{item.role}
									</span>
								</div>

								<div
									className={`${vstack({ gap: '4' })} ${css({ mt: 'auto' })}`}
								>
									{/* ROI Section */}
									<div
										className={css({
											bg: 'gray.50',
											borderWidth: '1px',
											borderColor: 'gray.100',
											p: '5',
											rounded: '2xl',
											transition: 'all',
											_groupHover: { bg: 'white' },
										})}
									>
										<span
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: '0.3em',
												color: 'gray.400',
												display: 'block',
												mb: '1',
											})}
										>
											Impact mesuré
										</span>
										<div
											className={`${hstack({ gap: '3' })} ${css({
												fontFamily: 'display',
												fontSize: 'xl',
												fontWeight: 'black',
												color: 'ocobo.dark',
											})}`}
										>
											{item.roi}
											<ArrowRight
												size={18}
												className={`arrow ${css({ color: 'gray.300' })}`}
											/>
										</div>
									</div>

									{/* Tools Section */}
									<div
										className={`${flex({ align: 'center', justify: 'space-between' })} ${css(
											{
												px: '5',
												py: '3',
												borderTopWidth: '1px',
												borderColor: 'gray.100',
											},
										)}`}
									>
										<span
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: '0.3em',
												color: 'gray.400',
											})}
										>
											Stack Opérée
										</span>
										<div
											className={`tools ${hstack({ gap: '3' })} ${css({
												filter: 'grayscale(100%)',
												opacity: 0.4,
											})}`}
										>
											{item.tools.map((tool) => (
												<img
													key={tool}
													src={tool}
													className={css({
														h: '3.5',
														w: 'auto',
														objectFit: 'contain',
													})}
													alt="tool"
												/>
											))}
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section
				className={css({
					bg: 'ocobo.yellow',
					py: '32',
					textAlign: 'center',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						position: 'absolute',
						top: '50%',
						left: '10',
						transform: 'translateY(-50%)',
						opacity: 0.1,
					})}
				>
					<Plus size={120} strokeWidth={1} />
				</div>
				<div
					className={css({
						position: 'absolute',
						top: '50%',
						right: '10',
						transform: 'translateY(-50%)',
						opacity: 0.1,
					})}
				>
					<Plus size={120} strokeWidth={1} />
				</div>

				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						px: '4',
						position: 'relative',
						zIndex: 10,
					})}
				>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '5xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '0.9',
							letterSpacing: 'tighter',
						})}
					>
						Prêt à devenir la prochaine
						<br />
						success story ?
					</h2>
					<div className={center()}>
						<Button variant="cta" size="xl" to="/contact">
							Discutons de votre architecture
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};
