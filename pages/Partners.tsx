import {
	Award,
	CheckCircle2,
	ChevronDown,
	ExternalLink,
	Handshake,
	Layers,
	Link as LinkIcon,
	Lock,
	Send,
	ShieldCheck,
	Sparkles,
	Zap,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid, vstack } from 'styled-system/patterns';
import { Badge, Button } from '../components/atoms';
import FlexPair from '../components/layout/FlexPair';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../components/layout/ModularStackGrid';

export const Partners: React.FC = () => {
	const [filter, setFilter] = useState('TOUS');
	const [animate, setAnimate] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		setAnimate(false);
		const timer = setTimeout(() => setAnimate(true), 10);
		return () => clearTimeout(timer);
	}, []);

	const partners = [
		{
			name: 'HubSpot',
			category: ['CRM'],
			color: 'ocobo-yellow',
			tags: ['Intégration', 'CRM', 'Marketing Automation'],
			logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
			desc: 'Plateforme complète de CRM & Marketing Automation.',
			status: 'OFFICIAL',
			certificationLogo:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/hubspot-platinum-partner-badge.png',
		},
		{
			name: 'Vasco',
			category: ['FINANCE'],
			color: 'ocobo-sky',
			tags: ['Vertical SaaS', 'Billing', 'SaaS Ops'],
			logo: 'https://vasco.app/favicon.ico',
			desc: "Le système d'exploitation pour bâtir et gérer votre Vertical SaaS.",
			status: 'OFFICIAL',
		},
		{
			name: 'Qobra',
			category: ['COMP'],
			color: 'ocobo-coral',
			tags: ['Intégration', "Apporteur d'affaires", 'Commission Plan'],
			logo: 'https://qobra.co/favicon.ico',
			desc: 'Automatisation des commissions pour motiver vos équipes de vente.',
			status: 'OFFICIAL',
		},
		{
			name: 'Hyperline',
			category: ['FINANCE'],
			color: 'ocobo-mint',
			tags: ['Intégration', "Apporteur d'affaires", 'Quote2Cash'],
			logo: 'https://www.hyperline.co/favicon.ico',
			desc: 'Billing moderne pour les modèles de revenus récurrents.',
			status: 'OFFICIAL',
		},
		{
			name: 'Folk',
			category: ['CRM'],
			color: 'ocobo-yellow',
			tags: ['Intégration', 'CRM'],
			logo: 'https://www.folk.app/apple-touch-icon.png',
			desc: 'Le CRM intelligent et collaboratif pour centraliser vos relations.',
			status: 'OFFICIAL',
		},
		{
			name: 'Vitally',
			category: ['CS'],
			color: 'ocobo-sky',
			tags: ['Intégration', 'CS Platform'],
			logo: 'https://framerusercontent.com/images/kQ9rX6H7m0m2mY3V1W1N8U.svg',
			desc: 'Customer Success Platform pour piloter la rétention.',
			status: 'OFFICIAL',
		},
		{
			name: 'Modjo',
			category: ['SALES', 'AI'],
			color: 'ocobo-mint',
			tags: ['Intégration', 'Enablement', 'AI'],
			logo: 'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Analyse conversationnelle pour coacher vos équipes.',
			status: 'OFFICIAL',
		},
		{
			name: 'Planhat',
			category: ['CS'],
			color: 'ocobo-sky',
			tags: ['Intégration', 'CS Platform'],
			logo: 'https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg',
			desc: "Plateforme CS entreprise pour scaler l'expansion.",
			status: 'OFFICIAL',
		},
		{
			name: 'Dust',
			category: ['AI'],
			color: 'ocobo-dark',
			tags: ['Intégration', 'AI'],
			logo: 'https://dust.tt/static/logo_icon.png',
			desc: "Moteur d'IA interne pour la productivité d'équipe.",
			status: 'OFFICIAL',
		},
		{
			name: 'Notion',
			category: ['ENABLEMENT'],
			color: 'ocobo-yellow',
			tags: ['Documentation', 'Enablement'],
			logo: 'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
			desc: "L'outil central pour vos playbooks et process.",
			status: 'OFFICIAL',
		},
		{
			name: 'AGO',
			category: ['AI'],
			color: 'ocobo-sky',
			tags: ['Intégration', 'AI'],
			logo: 'https://framerusercontent.com/images/3m8i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Intelligence Artificielle au service du Revenue.',
			status: 'OFFICIAL',
		},
		{
			name: 'Surfe',
			category: ['SALES'],
			color: 'ocobo-sky',
			tags: ['Enrichment', 'Sales Automation'],
			logo: 'https://framerusercontent.com/images/5r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Connectez LinkedIn à votre CRM en un clic.',
			status: 'OFFICIAL',
		},
		{
			name: 'Full Enrich',
			category: ['SALES'],
			color: 'ocobo-sky',
			tags: ['Enrichment', 'Intégration'],
			logo: 'https://framerusercontent.com/images/2r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Multi-enrichissement de données de contact.',
			status: 'OFFICIAL',
		},
		{
			name: 'Claap',
			category: ['SALES'],
			color: 'ocobo-coral',
			tags: ['CRM Fillings', 'AI'],
			logo: 'https://framerusercontent.com/images/6r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Vidéo asynchrone et enregistrement de calls.',
			status: 'OFFICIAL',
		},
		{
			name: 'Chargebee',
			category: ['FINANCE'],
			color: 'ocobo-coral',
			tags: ['Quote2Cash'],
			logo: 'https://www.vectorlogo.zone/logos/chargebee/chargebee-icon.svg',
			desc: 'Gestion des abonnements et facturation récurrente.',
			status: 'OFFICIAL',
		},
		{
			name: 'Aircall',
			category: ['SALES'],
			color: 'ocobo-mint',
			tags: ['Intégration', 'Téléphonie'],
			logo: 'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
			desc: 'Téléphonie cloud intégrée nativement à vos outils.',
			status: 'OFFICIAL',
		},
		{
			name: 'Lemlist',
			category: ['SALES'],
			color: 'ocobo-sky',
			tags: ['Sales Automation', 'Enrichment'],
			logo: 'https://www.lemlist.com/hubfs/lemlist-logo-2023.svg',
			desc: 'Prospection multicanale hautement personnalisée.',
			status: 'OFFICIAL',
		},
		{
			name: 'Oneflow',
			category: ['CONTRAT'],
			color: 'ocobo-dark',
			tags: ['Contract Management'],
			logo: 'https://framerusercontent.com/images/1r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
			desc: 'Gestion de contrats digitaux et signature.',
			status: 'OFFICIAL',
		},
		{
			name: 'Salesforce',
			category: ['CRM'],
			color: 'ocobo-sky',
			tags: ['Intégration', 'CRM'],
			logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
			desc: 'Le CRM entreprise de référence pour les stacks complexes.',
			status: 'OFFICIAL',
		},
		// EXPERTISE TOOLS
		{
			name: 'Clay',
			category: ['SALES', 'AI'],
			color: 'ocobo-dark',
			tags: ['Enrichment', 'Prospecting', 'AI'],
			logo: 'https://www.clay.com/favicon.ico',
			desc: "L'outil leader pour l'enrichissement de données et la prospection hyper-personnalisée via l'IA.",
			status: 'EXPERTISE',
		},
		{
			name: 'Attio',
			category: ['CRM'],
			color: 'ocobo-dark',
			tags: ['CRM', 'Data-driven', 'Relationship'],
			logo: 'https://attio.com/favicon.ico',
			desc: 'Le CRM de nouvelle génération construit pour la flexibilité et la donnée.',
			status: 'EXPERTISE',
		},
		{
			name: 'Cargo',
			category: ['SALES', 'NO-CODE'],
			color: 'ocobo-coral',
			tags: ['Revenue Workflow', 'Sales Automation', 'AI'],
			logo: 'https://getcargo.ai/favicon.ico',
			desc: "L'infrastructure de revenus pour orchestrer vos workflows Sales & Marketing via l'IA.",
			status: 'EXPERTISE',
		},
		{
			name: 'N8N',
			category: ['NO-CODE'],
			color: 'ocobo-coral',
			tags: ['Automation', 'Workflow', 'Self-hosted'],
			logo: 'https://n8n.io/favicon.ico',
			desc: "Solution d'automatisation flexible et puissante pour les flux techniques.",
			status: 'EXPERTISE',
		},
		{
			name: 'Make',
			category: ['NO-CODE'],
			color: 'ocobo-sky',
			tags: ['Automation', 'iPaaS', 'Workflow'],
			logo: 'https://www.make.com/favicon.ico',
			desc: 'Plateforme visuelle pour connecter vos applications et automatiser vos process.',
			status: 'EXPERTISE',
		},
		{
			name: 'Pipedrive',
			category: ['CRM'],
			color: 'ocobo-mint',
			tags: ['CRM', 'Sales Management', 'SME'],
			logo: 'https://www.pipedrive.com/favicon.ico',
			desc: 'Le CRM pensé par des commerciaux pour la gestion simplifiée du pipeline.',
			status: 'EXPERTISE',
		},
		{
			name: 'Ringover',
			category: ['SALES'],
			color: 'ocobo-coral',
			tags: ['Téléphonie', 'Call Center', 'SMS'],
			logo: 'https://www.ringover.fr/favicon.ico',
			desc: 'Solution de téléphonie cloud française intégrée à vos outils métiers.',
			status: 'EXPERTISE',
		},
		{
			name: 'Tomorro',
			category: ['CONTRAT'],
			color: 'ocobo-sky',
			tags: ['CLM', 'Contract automation', 'LegalOps'],
			logo: 'https://www.tomorro.com/favicon.ico',
			desc: 'Simplifiez la gestion et le cycle de vie de vos contrats commerciaux.',
			status: 'EXPERTISE',
		},
		{
			name: 'Yousign',
			category: ['CONTRAT'],
			color: 'ocobo-mint',
			tags: ['e-Signature', 'Legal Compliance', 'API'],
			logo: 'https://yousign.com/favicon.ico',
			desc: 'La solution française de signature électronique sécurisée et intuitive.',
			status: 'EXPERTISE',
		},
		{
			name: 'Pandadoc',
			category: ['CONTRAT'],
			color: 'ocobo-mint',
			tags: ['Proposal', 'e-Signature', 'Quotes'],
			logo: 'https://www.pandadoc.com/favicon.ico',
			desc: 'Automatisation de la création, du suivi et de la signature de documents.',
			status: 'EXPERTISE',
		},
		{
			name: 'Docusign',
			category: ['CONTRAT'],
			color: 'ocobo-sky',
			tags: ['e-Signature', 'Agreement Cloud'],
			logo: 'https://www.docusign.com/favicon.ico',
			desc: "Leader mondial de la signature électronique et de la gestion d'accords.",
			status: 'EXPERTISE',
		},
	];

	const categories = [
		'TOUS',
		'CRM',
		'AI',
		'NO-CODE',
		'ENABLEMENT',
		'COMP',
		'CS',
		'SALES',
		'FINANCE',
		'CONTRAT',
	];

	const filtered = (
		filter === 'TOUS'
			? partners
			: partners.filter((p) => p.category.includes(filter))
	).sort((a, b) => {
		if (a.status === 'OFFICIAL' && b.status !== 'OFFICIAL') return -1;
		if (a.status !== 'OFFICIAL' && b.status === 'OFFICIAL') return 1;
		return 0;
	});

	const handlePartnerSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			{/* HERO TECHNOLOGIE */}
			<section
				className={css({
					pt: '40',
					pb: '24',
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					position: 'relative',
					textAlign: 'center',
				})}
			>
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						mb: '16',
						position: 'relative',
						zIndex: 10,
					})}
				>
					<Badge variant="sky" className={css({ mb: '10' })}>
						TECHNOLOGIE
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
						Un écosystème <br />
						de solutions{' '}
						<span className={css({ color: 'ocobo.sky', fontStyle: 'italic' })}>
							connectées.
						</span>
					</h1>

					<p
						className={css({
							fontSize: 'xl',
							color: 'gray.700',
							mb: '12',
							lineHeight: 'relaxed',
							fontWeight: 'medium',
							maxW: '2xl',
							mx: 'auto',
						})}
					>
						Nous maîtrisons les architectures technologiques les plus avancées
						pour transformer vos outils en{' '}
						<span className={css({ fontWeight: 'bold' })}>
							véritable levier de croissance.
						</span>
					</p>
				</div>

				<div
					className={`${flex({ justify: 'center' })} ${css({
						mb: '16',
						px: '4',
					})}`}
				>
					<ModularStackGrid
						items={DEFAULT_STACK_ITEMS}
						maxWidth="xl"
						animated
					/>
				</div>

				<div
					className={flex({ direction: 'column', gap: '12', align: 'center' })}
				>
					<Button variant="cta" size="xl" to="/contact">
						Auditer ma stack
					</Button>
				</div>

				<div
					className={`${flex({ justify: 'center' })} ${css({
						mt: '16',
						w: 'full',
						animation: 'bounce-slow',
					})}`}
				>
					<ChevronDown
						className={css({ color: 'ocobo.sky' })}
						size={24}
						strokeWidth={1.5}
					/>
				</div>
			</section>

			{/* SECTION PHILOSOPHIE */}
			<section
				className={css({
					bg: 'ocobo.dark',
					py: '32',
					color: 'white',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						position: 'absolute',
						inset: '0',
						opacity: 0.03,
						backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					})}
				/>

				<div
					className={css({
						maxW: '7xl',
						mx: 'auto',
						px: { base: '4', sm: '6', lg: '8' },
						position: 'relative',
						zIndex: 10,
					})}
				>
					<div
						className={css({
							maxW: '3xl',
							mb: '20',
							textAlign: { base: 'center', md: 'left' },
						})}
					>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '5xl' },
								fontWeight: 'black',
								mb: '6',
								letterSpacing: 'tight',
							})}
						>
							Le système avant l'outil.
						</h2>
						<p
							className={css({
								color: 'gray.400',
								fontSize: 'lg',
								fontWeight: 'medium',
								lineHeight: 'relaxed',
							})}
						>
							L'outil n'est qu'un moyen. Notre valeur réside dans l'architecture
							qui permet à ces technologies de communiquer et de produire de la
							donnée fiable.
						</p>
					</div>

					<div className={grid({ columns: { base: 1, md: 3 }, gap: '10' })}>
						<div
							className={css({
								bg: 'white',
								p: '10',
								rounded: 'xl',
								shadow: 'xl',
								transition: 'transform',
								transitionDuration: '300ms',
								_hover: { transform: 'translateY(-4px)' },
								'& .icon-box': {
									transition: 'colors',
								},
								'&:hover .icon-box': {
									bg: 'ocobo.sky',
								},
							})}
						>
							<div
								className={`icon-box ${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.dark',
									color: 'white',
									rounded: 'lg',
									mb: '8',
								})}`}
							>
								<Lock size={28} />
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'black',
									mb: '4',
									color: 'ocobo.dark',
								})}
							>
								Agnostique
							</h3>
							<p
								className={css({
									color: 'gray.600',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								On ne force pas un outil. On choisit celui qui sert votre
								stratégie de manière juste.
							</p>
						</div>
						<div
							className={css({
								bg: 'white',
								p: '10',
								rounded: 'xl',
								shadow: 'xl',
								transition: 'transform',
								transitionDuration: '300ms',
								_hover: { transform: 'translateY(-4px)' },
								'& .icon-box': {
									transition: 'colors',
								},
								'&:hover .icon-box': {
									bg: 'ocobo.mint',
								},
							})}
						>
							<div
								className={`icon-box ${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.dark',
									color: 'white',
									rounded: 'lg',
									mb: '8',
								})}`}
							>
								<LinkIcon size={28} />
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'black',
									mb: '4',
									color: 'ocobo.dark',
								})}
							>
								Connectée
							</h3>
							<p
								className={css({
									color: 'gray.600',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								La donnée doit circuler fluidement. Nous supprimons les silos
								pour une vérité unique.
							</p>
						</div>
						<div
							className={css({
								bg: 'white',
								p: '10',
								rounded: 'xl',
								shadow: 'xl',
								transition: 'transform',
								transitionDuration: '300ms',
								_hover: { transform: 'translateY(-4px)' },
								'& .icon-box': {
									transition: 'colors',
								},
								'&:hover .icon-box': {
									bg: 'ocobo.yellow',
								},
							})}
						>
							<div
								className={`icon-box ${center()} ${css({
									w: '16',
									h: '16',
									bg: 'ocobo.dark',
									color: 'white',
									rounded: 'lg',
									mb: '8',
								})}`}
							>
								<ShieldCheck size={28} />
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'black',
									mb: '4',
									color: 'ocobo.dark',
								})}
							>
								Certifiée
							</h3>
							<p
								className={css({
									color: 'gray.600',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								Nous sommes partenaires officiels et certifiés sur les solutions
								les plus puissantes du marché.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ECOSYSTEME TECH */}
			<section className={css({ py: '24', bg: 'white' })}>
				<div
					className={css({
						maxW: '7xl',
						mx: 'auto',
						px: { base: '4', sm: '6', lg: '8' },
					})}
				>
					<div
						className={`${flex({ direction: { base: 'column', md: 'row' }, justify: 'space-between', align: 'end', gap: '8' })} ${css(
							{
								mb: '20',
							},
						)}`}
					>
						<div>
							<h2
								className={css({
									fontFamily: 'display',
									fontSize: '4xl',
									fontWeight: 'black',
									mb: '4',
									color: 'ocobo.dark',
									letterSpacing: 'tight',
								})}
							>
								Notre Ecosystème Tech
							</h2>
							<p className={css({ color: 'gray.500', fontWeight: 'medium' })}>
								Les solutions que nous implémentons, des partenariats officiels
								aux maîtrises techniques d'experts.
							</p>
						</div>
						<div className={flex({ wrap: 'wrap', gap: '2' })}>
							{categories.map((cat) => (
								<button
									type="button"
									key={cat}
									onClick={() => setFilter(cat)}
									className={css({
										px: '6',
										py: '2.5',
										rounded: 'full',
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										transition: 'all',
										borderWidth: '1px',
										bg: filter === cat ? 'ocobo.dark' : 'gray.50',
										color: filter === cat ? 'white' : 'gray.500',
										borderColor: filter === cat ? 'ocobo.dark' : 'gray.100',
										shadow: filter === cat ? 'lg' : 'none',
										_hover: filter !== cat ? { borderColor: 'ocobo.dark' } : {},
									})}
								>
									{cat === 'TOUS'
										? 'Tous les outils'
										: cat === 'NO-CODE'
											? 'No Code & Automatisation'
											: cat}
								</button>
							))}
						</div>
					</div>

					<div
						className={`${grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '8' })} ${css({ transition: 'all', transitionDuration: '500ms' })}`}
					>
						{filtered.map((partner) => (
							<div
								key={`${partner.name}-${filter}`}
								className={`${flex({ direction: 'column', align: 'stretch' })} ${css(
									{
										bg: 'white',
										borderWidth: '1px',
										borderColor: 'gray.100',
										p: '8',
										transition: 'all',
										transitionDuration: '300ms',
										position: 'relative',
										overflow: 'hidden',
										rounded: 'xl',
										h: 'full',
										animation: animate ? 'fade-in-up-small' : 'none',
										opacity: animate ? 0 : 1,
										_hover: { shadow: 'xl', transform: 'translateY(-4px)' },
										'& .logo-img': {
											transition: 'all',
											transitionDuration: '500ms',
										},
										'&:hover .logo-img': {
											filter: 'grayscale(0)',
											opacity: 1,
										},
										'& .cat-badge': {
											transition: 'all',
										},
										'&:hover .cat-badge': {
											bg: 'ocobo.dark',
											color: 'white',
										},
										'& .tag': {
											transition: 'all',
										},
										'&:hover .tag': {
											borderColor: 'ocobo.dark/10',
											color: 'ocobo.dark',
										},
										'& .separator': {
											transition: 'opacity',
										},
										'&:hover .separator': {
											opacity: 1,
										},
										'& .cert-img': {
											transition: 'all',
											transitionDuration: '500ms',
										},
										'&:hover .cert-img': {
											filter: 'grayscale(0)',
										},
										'& .tech-label': {
											transition: 'colors',
										},
										'&:hover .tech-label': {
											color: 'ocobo.mint',
										},
										'& .tech-icon': {
											transition: 'opacity',
										},
										'&:hover .tech-icon': {
											opacity: 1,
										},
										'& .external-link': {
											transition: 'all',
											transitionDuration: '300ms',
										},
										'&:hover .external-link': {
											transform: 'translateX(4px)',
										},
									},
								)}`}
							>
								<div
									className={`${flex({ justify: 'space-between', align: 'start' })} ${css(
										{
											mb: '8',
										},
									)}`}
								>
									<div
										className={`${center()} ${css({
											w: '16',
											h: '16',
											p: '3',
											bg: 'gray.50',
											rounded: 'xl',
											borderWidth: '1px',
											borderColor: 'transparent',
											shadow: 'inner',
											_groupHover: {
												bg: 'white',
												borderColor: 'gray.100',
												shadow: 'none',
											},
										})}`}
									>
										<img
											src={partner.logo}
											alt={partner.name}
											className={`logo-img ${css({
												maxW: 'full',
												maxH: 'full',
												objectFit: 'contain',
												filter: 'grayscale(100%)',
												opacity: 0.6,
											})}`}
										/>
									</div>
									<div
										className={flex({
											direction: 'column',
											align: 'end',
											gap: '1',
										})}
									>
										{partner.category.map((cat) => (
											<div
												key={cat}
												className={`cat-badge ${css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
													bg: 'gray.100',
													color: 'gray.400',
													px: '3',
													py: '1',
													rounded: 'md',
												})}`}
											>
												{cat === 'NO-CODE' ? 'No-Code & Automatisation' : cat}
											</div>
										))}
									</div>
								</div>

								<div
									className={`${vstack()} ${css({
										mb: '6',
										flexGrow: 1,
									})}`}
								>
									<h3
										className={css({
											fontFamily: 'display',
											fontSize: '2xl',
											fontWeight: 'black',
											color: 'ocobo.dark',
											mb: '4',
											letterSpacing: 'tight',
										})}
									>
										{partner.name}
									</h3>
									<div
										className={`${flex({ wrap: 'wrap', gap: '1.5' })} ${css({
											h: '48px',
											mb: '4',
											alignContent: 'start',
											overflow: 'hidden',
										})}`}
									>
										{partner.tags.map((tag) => (
											<span
												key={tag}
												className={`tag ${css({
													fontSize: 'xs',
													fontWeight: 'bold',
													bg: 'gray.50',
													color: 'gray.400',
													borderWidth: '1px',
													borderColor: 'gray.100',
													px: '2',
													py: '0.5',
													rounded: 'sm',
													whiteSpace: 'nowrap',
												})}`}
											>
												{tag}
											</span>
										))}
									</div>
									<p
										className={css({
											color: 'gray.500',
											fontSize: 'sm',
											lineHeight: 'relaxed',
											fontWeight: 'medium',
											minH: '4rem',
										})}
									>
										{partner.desc}
									</p>
								</div>

								{/* Horizontal Black Separator */}
								<div
									className={`separator ${css({
										w: 'full',
										h: '1',
										bg: 'ocobo.dark',
										opacity: 0.1,
										mb: '6',
										rounded: 'full',
									})}`}
								/>

								<div
									className={`${flex({ align: 'center', justify: 'space-between' })} ${css(
										{
											mt: 'auto',
											h: '12',
										},
									)}`}
								>
									<div className={css({ flex: 1 })}>
										{partner.certificationLogo ? (
											<div className={flex({ align: 'center', gap: '2' })}>
												<img
													src={partner.certificationLogo}
													alt={`${partner.name} Platinum`}
													className={`cert-img ${css({
														h: '10',
														w: 'auto',
														objectFit: 'contain',
														filter: 'grayscale(100%)',
													})}`}
												/>
											</div>
										) : partner.status === 'OFFICIAL' ? (
											<div
												className={`${flex({ align: 'center', gap: '1.5' })} ${css(
													{
														fontSize: 'xs',
														fontWeight: 'black',
														textTransform: 'uppercase',
														letterSpacing: 'widest',
														color: 'ocobo.dark',
													},
												)}`}
											>
												<Award
													size={12}
													className={css({ color: 'ocobo.yellow' })}
												/>
												Partenaire Officiel
											</div>
										) : (
											<div
												className={`tech-label ${flex({ align: 'center', gap: '1.5' })} ${css(
													{
														fontSize: 'xs',
														fontWeight: 'black',
														textTransform: 'uppercase',
														letterSpacing: 'widest',
														color: 'gray.400',
													},
												)}`}
											>
												<Zap
													size={12}
													className={`tech-icon ${css({ opacity: 0.5 })}`}
												/>
												Maîtrise Technique
											</div>
										)}
									</div>

									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className={`external-link ${css({
											color: 'gray.300',
											p: '2',
											_hover: { color: 'ocobo.dark' },
										})}`}
									>
										<ExternalLink size={20} />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SECTION DEVENIR PARTENAIRE */}
			<section
				className={css({
					py: '32',
					bg: 'gray.50',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						position: 'absolute',
						top: '0',
						right: '0',
						w: '1/3',
						h: 'full',
						bg: 'white',
						transform: 'skewX(12deg) translateX(50%)',
						zIndex: -10,
					})}
				/>

				<div
					className={css({
						maxW: '7xl',
						mx: 'auto',
						px: { base: '4', sm: '6', lg: '8' },
					})}
				>
					<div
						className={flex({
							direction: { base: 'column', lg: 'row' },
							gap: '20',
							align: 'center',
						})}
					>
						<div className={css({ lg: { w: '1/2' } })}>
							<Badge variant="sky" className={css({ mb: '10' })}>
								CO-CONSTRUCTION
							</Badge>
							<h2
								className={css({
									fontFamily: 'display',
									fontSize: { base: '4xl', md: '6xl' },
									fontWeight: 'black',
									color: 'ocobo.dark',
									mb: '8',
									lineHeight: '0.95',
									letterSpacing: 'tight',
								})}
							>
								Rejoignez <br />
								l'écosystème{' '}
								<span className={css({ color: 'ocobo.sky' })}>Ocobo.</span>
							</h2>
							<p
								className={css({
									fontSize: 'xl',
									color: 'gray.600',
									mb: '10',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								Vous développez une solution logicielle qui transforme la
								croissance des entreprises B2B ? Intégrez notre écosystème
								d'architectes.
							</p>

							<div
								className={`${vstack({ gap: '6' })} ${css({
									mb: '12',
								})}`}
							>
								<FlexPair gap={5}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'white',
												shadow: 'sm',
												borderWidth: '1px',
												borderColor: 'gray.100',
												rounded: 'xl',
												color: 'ocobo.sky',
											})}`}
										>
											<Handshake size={20} />
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4
											className={css({
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Partenariat Stratégique
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.500' })}>
											Accès privilégié à notre Studio pour le déploiement de
											votre solution chez nos clients.
										</p>
									</FlexPair.Content>
								</FlexPair>
								<FlexPair gap={5}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'white',
												shadow: 'sm',
												borderWidth: '1px',
												borderColor: 'gray.100',
												rounded: 'xl',
												color: 'ocobo.yellow',
											})}`}
										>
											<Sparkles size={20} />
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4
											className={css({
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Co-Marketing & Events
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.500' })}>
											Webinars, podcasts et masterclasses en commun pour
											évangéliser le marché.
										</p>
									</FlexPair.Content>
								</FlexPair>
								<FlexPair gap={5}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '10',
												h: '10',
												bg: 'white',
												shadow: 'sm',
												borderWidth: '1px',
												borderColor: 'gray.100',
												rounded: 'xl',
												color: 'ocobo.mint',
											})}`}
										>
											<Layers size={20} />
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4
											className={css({
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Expertise Produit
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.500' })}>
											Feedback opérationnel de nos architectes seniors pour
											optimiser vos intégrations.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</div>
						</div>

						<div className={css({ lg: { w: '1/2' }, w: 'full' })}>
							<div
								className={css({
									bg: 'white',
									p: { base: '8', md: '12' },
									rounded: '3xl',
									shadow: '2xl',
									borderWidth: '1px',
									borderColor: 'gray.100',
									position: 'relative',
									overflow: 'hidden',
								})}
							>
								{/* Multi-color top bar */}
								<div
									className={css({
										position: 'absolute',
										top: '0',
										left: '0',
										w: 'full',
										h: '1.5',
										background:
											'linear-gradient(to right, token(colors.ocobo.yellow), token(colors.ocobo.sky), token(colors.ocobo.mint))',
									})}
								/>

								{formSubmitted ? (
									<div
										className={css({
											py: '12',
											textAlign: 'center',
											animation: 'fade-in-up',
										})}
									>
										<div
											className={`${center()} ${css({
												w: '20',
												h: '20',
												bg: 'ocobo.mintLight',
												color: 'ocobo.mint',
												rounded: 'full',
												mx: 'auto',
												mb: '6',
											})}`}
										>
											<CheckCircle2 size={40} />
										</div>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: '2xl',
												fontWeight: 'black',
												color: 'ocobo.dark',
												mb: '4',
											})}
										>
											Demande reçue !
										</h3>
										<p className={css({ color: 'gray.500', mb: '8' })}>
											Notre équipe étudiera votre solution et vous recontactera
											sous 48h.
										</p>
										<button
											type="button"
											onClick={() => setFormSubmitted(false)}
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: 'widest',
												color: 'gray.400',
												transition: 'colors',
												_hover: { color: 'ocobo.dark' },
											})}
										>
											Envoyer une autre demande
										</button>
									</div>
								) : (
									<form
										onSubmit={handlePartnerSubmit}
										className={vstack({ gap: '6', alignItems: 'stretch' })}
									>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: '2xl',
												fontWeight: 'black',
												color: 'ocobo.dark',
												mb: '8',
											})}
										>
											Devenez partenaire
										</h3>
										<div
											className={grid({
												columns: { base: 1, md: 2 },
												gap: '6',
											})}
										>
											<div
												className={vstack({ gap: '2', alignItems: 'stretch' })}
											>
												{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
												<label
													className={css({
														fontSize: 'xs',
														fontWeight: 'black',
														textTransform: 'uppercase',
														letterSpacing: '0.2em',
														color: 'gray.400',
													})}
												>
													Nom de la solution*
												</label>
												<input
													required
													type="text"
													placeholder="ex: HubSpot"
													className={css({
														w: 'full',
														bg: 'gray.50',
														borderWidth: '1px',
														borderColor: 'gray.100',
														outline: 'none',
														p: '4',
														rounded: 'none',
														fontSize: 'sm',
														fontWeight: 'bold',
														_placeholder: { color: 'gray.300' },
														_focus: {
															borderColor: 'ocobo.dark',
															bg: 'white',
														},
													})}
												/>
											</div>
											<div
												className={vstack({ gap: '2', alignItems: 'stretch' })}
											>
												{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
												<label
													className={css({
														fontSize: 'xs',
														fontWeight: 'black',
														textTransform: 'uppercase',
														letterSpacing: '0.2em',
														color: 'gray.400',
													})}
												>
													Site Web*
												</label>
												<input
													required
													type="url"
													placeholder="https://..."
													className={css({
														w: 'full',
														bg: 'gray.50',
														borderWidth: '1px',
														borderColor: 'gray.100',
														outline: 'none',
														p: '4',
														rounded: 'none',
														fontSize: 'sm',
														fontWeight: 'bold',
														_placeholder: { color: 'gray.300' },
														_focus: {
															borderColor: 'ocobo.dark',
															bg: 'white',
														},
													})}
												/>
											</div>
										</div>
										<div
											className={vstack({ gap: '2', alignItems: 'stretch' })}
										>
											{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
											<label
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.2em',
													color: 'gray.400',
												})}
											>
												E-mail pro*
											</label>
											<input
												required
												type="email"
												placeholder="nom@solution.com"
												className={css({
													w: 'full',
													bg: 'gray.50',
													borderWidth: '1px',
													borderColor: 'gray.100',
													outline: 'none',
													p: '4',
													rounded: 'none',
													fontSize: 'sm',
													fontWeight: 'bold',
													_placeholder: { color: 'gray.300' },
													_focus: {
														borderColor: 'ocobo.dark',
														bg: 'white',
													},
												})}
											/>
										</div>
										<div
											className={vstack({ gap: '2', alignItems: 'stretch' })}
										>
											{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
											<label
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.2em',
													color: 'gray.400',
												})}
											>
												Votre message
											</label>
											<textarea
												rows={4}
												placeholder="Parlez-nous de votre vision et de vos envies de partenariat..."
												className={css({
													w: 'full',
													bg: 'gray.50',
													borderWidth: '1px',
													borderColor: 'gray.100',
													outline: 'none',
													p: '4',
													rounded: 'none',
													fontSize: 'sm',
													fontWeight: 'bold',
													resize: 'none',
													_placeholder: { color: 'gray.300' },
													_focus: {
														borderColor: 'ocobo.dark',
														bg: 'white',
													},
												})}
											/>
										</div>
										<button
											type="submit"
											className={`${center()} ${css({
												w: 'full',
												py: '5',
												bg: 'ocobo.dark',
												color: 'white',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: '0.25em',
												fontSize: 'xs',
												rounded: 'none',
												transition: 'all',
												shadow: 'xl',
												gap: '3',
												_hover: { bg: 'black' },
												'& svg': {
													transition: 'transform',
												},
												'&:hover svg': {
													transform: 'translateX(4px) translateY(-4px)',
												},
											})}`}
										>
											Soumettre ma solution <Send size={16} />
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA FINAL */}
			<section
				className={css({
					bg: 'ocobo.sky',
					py: '28',
					textAlign: 'center',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						px: '4',
						textAlign: 'center',
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
							letterSpacing: 'tight',
						})}
					>
						Besoin d'un architecte pour votre stack ?
					</h2>
					<p
						className={css({
							fontSize: 'xl',
							color: 'ocobo.dark/70',
							mb: '12',
							fontWeight: 'bold',
						})}
					>
						Évaluons ensemble l'interconnexion de vos outils pour supprimer les
						silos.
					</p>
					<div className={flex({ justify: 'center' })}>
						<Button variant="cta" size="xl" to="/contact">
							Prendre RDV
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};
