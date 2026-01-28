import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import { Fragment } from 'react';
import { css } from 'styled-system/css';
import { center, flex } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { SectionHeader } from '../../organisms/SectionHeader';

type ServiceColor = 'yellow' | 'sky' | 'mint';

interface ServiceItem {
	title: string;
	description: string;
}

interface Service {
	number: number;
	badge: string;
	badgeColor: ServiceColor;
	subtitle: string;
	title: string;
	description: string;
	items: ServiceItem[];
}

const SERVICES: Service[] = [
	{
		number: 1,
		badge: 'DESIGN',
		badgeColor: 'yellow',
		subtitle: "L'architecture",
		title: "Immersion, cadrage et plan d'action RevOps",
		description: 'La vision claire pour savoir où agir.',
		items: [
			{
				title: 'Diagnostic transversal',
				description:
					'Analyse en profondeur des interactions et frictions entre les départements.',
			},
			{
				title: 'Cartographie process / outils / data',
				description:
					"Audit complet de l'infrastructure existante et des flux de travail.",
			},
			{
				title: 'Priorisation et feuille de route',
				description:
					"Un plan d'attaque chiffré et priorisé pour les mois à venir.",
			},
		],
	},
	{
		number: 2,
		badge: 'OPERATE',
		badgeColor: 'sky',
		subtitle: 'La construction',
		title: 'Déploiement RevOps (Agile)',
		description:
			'Pour opérer et structurer la machine revenue en sprints de 2 semaines.',
		items: [
			{
				title: 'Architecture du Cycle Revenue',
				description:
					"Unifiez votre chaîne de valeur de bout en bout : de la génération de demande jusqu'à l'upsell et la facturation.",
			},
			{
				title: 'Design Organisationnel',
				description:
					'Restructurez vos équipes (Rôles & Responsabilités) et standardisez vos process pour une exécution sans faille.',
			},
			{
				title: 'Déploiement Stack & CRM',
				description:
					'Intégrez et connectez les leaders du marché (Salesforce, HubSpot) pour en faire de véritables moteurs de croissance.',
			},
			{
				title: 'Business Intelligence',
				description:
					'Transformez votre donnée en tableaux de bord fiables et actionnables pour stopper le pilotage à vue.',
			},
			{
				title: 'Ingénierie de la Rémunération',
				description:
					'Modélisez des plans de variables clairs et motivants, alignés sur vos objectifs de rentabilité.',
			},
		],
	},
	{
		number: 3,
		badge: 'GROW',
		badgeColor: 'mint',
		subtitle: 'Animation RevOps',
		title: 'GROW (Animation RevOps)',
		description:
			'Pour transformer votre investissement technique en revenus récurrents et durables.',
		items: [
			{
				title: 'Exploitation & Optimisation',
				description:
					'Tirer le meilleur parti de ce qui a été construit (Fine-tuning).',
			},
			{
				title: 'Pilotage de la Donnée',
				description:
					'Garantir que les chiffres (Forecast, MRR, Pipeline) restent justes mois après mois.',
			},
			{
				title: 'Support & Adoption',
				description:
					'S\'assurer que les Commerciaux utilisent vraiment les outils (Lutte contre le "Shadow IT").',
			},
			{
				title: 'Évolution de la Roadmap',
				description:
					'Anticiper les besoins de demain pour ne jamais freiner la croissance.',
			},
			{
				title: 'Acculturation RevOps pour dirigeants',
				description:
					'Aligner la vision stratégique et donner les clés de lecture aux décideurs.',
			},
		],
	},
];

const COLOR_TOKEN_MAP: Record<ServiceColor, string> = {
	yellow: 'ocobo.yellow',
	sky: 'ocobo.sky',
	mint: 'ocobo.mint',
};

const LIGHT_TOKEN_MAP: Record<ServiceColor, string> = {
	yellow: 'ocobo.yellow.light',
	sky: 'ocobo.sky.light',
	mint: 'ocobo.mint.light',
};

const iconWrapperStyle = (color: ServiceColor) =>
	css({
		mt: '1',
		bg: LIGHT_TOKEN_MAP[color],
		p: '2',
		rounded: 'full',
		color: COLOR_TOKEN_MAP[color],
		_groupHover: { bg: COLOR_TOKEN_MAP[color], color: 'white' },
		transition: 'colors',
	});

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
	const color = service.badgeColor;
	const colorToken = COLOR_TOKEN_MAP[color];

	return (
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
						bg: colorToken,
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
					{service.number}
				</div>
				<div className={css({ mb: '4' })}>
					<Badge variant={color} rounded="full">
						{service.badge}
					</Badge>
					<p
						className={css({
							fontSize: '2xs',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							mt: '3',
							ml: '1',
							opacity: '0.7',
							color: colorToken,
						})}
					>
						{service.subtitle}
					</p>
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
					{service.title}
				</h3>
				<p
					className={css({
						color: 'gray.600',
						fontSize: 'lg',
						lineHeight: 'relaxed',
					})}
				>
					{service.description}
				</p>
			</div>
			<div className={css({ w: { base: 'full', md: '7/12' } })}>
				<div
					className={`group ${css({
						bg: 'white',
						borderWidth: '1px',
						borderColor: 'gray.100',
						p: { base: '8', md: '10' },
						transition: 'all',
						transitionDuration: '300ms',
						rounded: 'xl',
						_hover: { shadow: '2xl', borderColor: colorToken },
					})}`}
				>
					<ul className={css({ spaceY: '8' })}>
						{service.items.map((item) => (
							<li
								key={item.title}
								className={flex({ gap: '5', align: 'flex-start' })}
							>
								<div className={iconWrapperStyle(color)}>
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
										{item.title}
									</h4>
									<p
										className={css({
											fontSize: 'sm',
											color: 'gray.600',
											lineHeight: 'relaxed',
										})}
									>
										{item.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
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
					{SERVICES.map((service, i) => (
						<Fragment key={service.number}>
							{i > 0 && (
								<div className={css({ w: 'full', h: '1px', bg: 'gray.100' })} />
							)}
							<ServiceCard service={service} />
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};
