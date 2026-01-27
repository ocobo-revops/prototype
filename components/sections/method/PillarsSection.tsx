import { GraduationCap, Layout, LineChart, Sliders } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { ThemeColor } from '../../../types';
import { Grid } from '../../layout/Grid';
import { PillarCard } from '../../molecules';
import { Container, Section } from '../../organisms';

const pillarsData = [
	{
		number: '01',
		title: 'Alignement',
		description:
			'Avant de toucher aux outils, nous alignons les hommes. Nous cassons les silos entre Marketing, Sales et CS pour créer une seule équipe Revenue avec des objectifs communs.',
		color: ThemeColor.YELLOW,
		icon: Layout,
		deliverables: [
			{
				title: 'Cartographie du cycle de vie (Lifecycle Map)',
				description:
					'Visualisation précise du parcours client et des points de friction.',
			},
			{
				title: 'Protocoles de "Handover" & SLAs',
				description:
					'Règles strictes de passage de relais entre équipes (fini les zones grises).',
			},
			{
				title: 'Dictionnaire de données (KPIS clés)',
				description:
					"Définitions partagées par toute l'entreprise pour garantir l'intégrité de la donnée.",
			},
		],
	},
	{
		number: '02',
		title: 'Technologie',
		description:
			"Nous construisons une stack connectée et épurée. Pas d'usine à gaz. Juste les bons outils, connectés au bon moment, pour servir les process.",
		color: ThemeColor.SKY,
		icon: Sliders,
		deliverables: [
			{
				title: 'Audit & assainissement de la Stack',
				description:
					'Nettoyage des dettes techniques et suppression des outils redondants.',
			},
			{
				title: 'Architecture de données scalable (Core Model)',
				description:
					"Structure CRM prête pour le multi-segment et l'hyper-croissance.",
			},
			{
				title: "Flux d'enrichissement & routage automatisé",
				description:
					'Mécanismes pour livrer la bonne info au bon commercial, au bon moment.',
			},
		],
	},
	{
		number: '03',
		title: 'Performance',
		description:
			"On ne pilote pas ce qu'on ne mesure pas. Nous alignons les indicateurs et les incitations (rémunération) sur vos objectifs stratégiques.",
		color: ThemeColor.MINT,
		icon: LineChart,
		deliverables: [
			{
				title: 'Dashboards COMEX & Investisseurs',
				description:
					'Vues macro pour le pilotage stratégique (CAC, LTV, Churn) et reporting financier.',
			},
			{
				title: 'Plans de commissionnement (Comp Plans)',
				description:
					'Modèles de variable qui orientent les comportements vers la valeur réelle.',
			},
			{
				title: 'Fiabilisation du Forecast',
				description:
					'Routines pour passer de la "devinette" à une prévision fiable (+/- 10%).',
			},
		],
	},
	{
		number: '04',
		title: 'Enablement',
		description:
			"Le meilleur système ne vaut rien s'il n'est pas utilisé. Nous formons, coachons et documentons pour assurer l'adoption durable.",
		color: ThemeColor.CORAL,
		icon: GraduationCap,
		deliverables: [
			{
				title: "Playbooks d'exécution",
				description:
					'Guides pratiques (Sales & Ops) pour standardiser les méthodes de travail.',
			},
			{
				title: 'Documentation technique pérenne',
				description:
					'Wiki complet pour ne plus dépendre de la connaissance individuelle.',
			},
			{
				title: "Routines d'onboarding CRM",
				description:
					'Parcours de formation pour rendre les nouveaux entrants opérationnels vite.',
			},
		],
	},
];

export const PillarsSection: React.FC = () => {
	return (
		<Section
			bg="gray"
			className={css({
				borderTopWidth: '1px',
				borderBottomWidth: '1px',
				borderColor: 'gray.100',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					position: 'absolute',
					inset: '0',
					opacity: '0.03',
					pointerEvents: 'none',
					bg: 'dots-dark',
				})}
			/>

			<Container className={css({ position: 'relative', zIndex: '10' })}>
				<div className={css({ mb: '24', textAlign: 'center' })}>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'black',
							mb: '8',
							letterSpacing: 'tight',
						})}
					>
						The Revenue Experience System™
					</h2>
					<p
						className={css({
							color: 'gray.500',
							maxW: '2xl',
							mx: 'auto',
							fontSize: 'xl',
							fontWeight: 'medium',
						})}
					>
						Nous n'intervenons jamais au hasard. Nous suivons un ordre logique
						pour garantir la stabilité de l'édifice.
					</p>
				</div>

				<Grid lg={2} gap={10}>
					{pillarsData.map((pillar) => (
						<PillarCard
							key={pillar.number}
							number={pillar.number}
							title={pillar.title}
							description={pillar.description}
							deliverables={pillar.deliverables}
							color={pillar.color}
							icon={pillar.icon}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	);
};
