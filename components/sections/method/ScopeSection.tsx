import {
	BarChart3,
	Database,
	GraduationCap,
	Layers,
	RefreshCw,
	Target,
} from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import { ThemeColor } from '../../../types';
import { UnifiedBowtie } from '../../illustrations';
import { ScopeCard } from '../../molecules';
import { Container, Section } from '../../organisms';

const scopeData = [
	{
		title: 'Génération de Revenu',
		color: ThemeColor.YELLOW,
		icon: Target,
		items: [
			'Lead Gen & Scoring',
			'Pipeline Management',
			'Account Based Marketing',
		],
	},
	{
		title: 'Architecture & Data',
		color: ThemeColor.SKY,
		icon: Database,
		items: [
			'CRM Setup (HubSpot/SFDC)',
			'Data Quality & Enrichment',
			'Integrations & Stack',
		],
	},
	{
		title: 'Pilotage & Performance',
		color: ThemeColor.MINT,
		icon: BarChart3,
		items: [
			'Forecasting & Reporting',
			'Plan de Commissionnement',
			'Territory Planning',
		],
	},
	{
		title: 'Customer Success & Expansion',
		color: ThemeColor.CORAL,
		icon: RefreshCw,
		items: [
			'Churn Management & Health Score',
			'Upsell & Cross-sell Routines',
			'Onboarding & CS Ops Strategy',
		],
	},
	{
		title: 'Sales Enablement',
		color: ThemeColor.YELLOW,
		icon: GraduationCap,
		items: [
			'Playbooks & Sales Methodology',
			'Onboarding & Continuous Training',
			'Sales Content & Tool Adoption',
		],
	},
	{
		title: 'Gouvernance & Stratégie',
		color: ThemeColor.SKY,
		icon: Layers,
		items: [
			'Go-to-Market Strategy Review',
			'Revenue Planning & Board Reporting',
			'Revenue Management & Leadership',
		],
	},
];

export const ScopeSection: React.FC = () => {
	return (
		<Section bg="white" className={css({ overflow: 'hidden' })}>
			<Container className={css({ textAlign: 'center' })}>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: { base: '4xl', md: '5xl' },
						fontWeight: 'black',
						mb: '6',
						letterSpacing: 'tight',
					})}
				>
					Notre périmètre d'action
				</h2>
				<p
					className={css({
						fontSize: 'xl',
						color: 'gray.500',
						mb: '12',
						maxW: '2xl',
						mx: 'auto',
						fontWeight: 'medium',
					})}
				>
					Nous intervenons sur l'intégralité de la chaîne de valeur du revenu.
				</p>

				<UnifiedBowtie />

				<div
					className={`${grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '8' })} ${css({ textAlign: 'left', mt: '24' })}`}
				>
					{scopeData.map((scope) => (
						<ScopeCard
							key={scope.title}
							title={scope.title}
							items={scope.items}
							color={scope.color}
							icon={scope.icon}
						/>
					))}
				</div>
			</Container>
		</Section>
	);
};
