import {
	BarChart3,
	Database,
	GraduationCap,
	Layers,
	RefreshCw,
	Target,
} from 'lucide-react';
import type React from 'react';
import { ThemeColor } from '../../../types';
import { UnifiedBowtie } from '../../illustrations';
import Grid from '../../layout/Grid';
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

const ScopeSection: React.FC = () => {
	return (
		<Section bg="white" className="overflow-hidden">
			<Container className="text-center">
				<h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">
					Notre périmètre d'action
				</h2>
				<p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
					Nous intervenons sur l'intégralité de la chaîne de valeur du revenu.
				</p>

				<UnifiedBowtie />

				<Grid md={2} lg={3} gap={8} className="text-left mt-24">
					{scopeData.map((scope) => (
						<ScopeCard
							key={scope.title}
							title={scope.title}
							items={scope.items}
							color={scope.color}
							icon={scope.icon}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	);
};

export default ScopeSection;
