import {
	BarChart3,
	Cog,
	Cpu,
	GraduationCap,
	Layout,
	Search,
} from 'lucide-react';
import type React from 'react';
import { Grid } from '../../layout/Grid';

const BLOCKS = [
	{
		title: 'Diagnostiquer',
		color: 'coral',
		icon: <Search size={24} />,
		items: [
			'Analyse interactions Mkt/Sales/CS',
			'Cartographie process + CRM',
			'Analyse KPI, pipeline, variable',
		],
	},
	{
		title: 'Aligner',
		color: 'yellow',
		icon: <Layout size={24} />,
		items: [
			'ICP & buyer journey',
			'SLA Marketing ↔ Sales ↔ CS',
			'Organisation & rituels communs',
		],
	},
	{
		title: 'Outiller',
		color: 'sky',
		icon: <Cog size={24} />,
		items: [
			'Repenser / implémenter CRM',
			'Automatisations intelligentes',
			'Dashboards partagés',
		],
	},
	{
		title: 'Activer la performance',
		color: 'mint',
		icon: <BarChart3 size={24} />,
		items: ['Plans de variable', 'Objectifs et KPIs', 'Cockpit de pilotage'],
	},
	{
		title: "Intégrer l'IA",
		color: 'purple-500',
		icon: <Cpu size={24} />,
		items: [
			'Agents IA prospection',
			'Automatisation CRM after-call',
			'Scoring prédictif',
		],
	},
	{
		title: 'Former & Itérer',
		color: 'dark',
		icon: <GraduationCap size={24} />,
		items: [
			'Pipeline review, roleplay',
			'Playbooks et templates',
			"Roadmap d'itération",
		],
	},
];

const getIconBgClass = (color: string) => {
	if (color === 'dark') return 'bg-gray-100 text-ocobo-dark';
	if (color === 'purple-500') return 'bg-purple-50 text-purple-500';
	return `bg-ocobo-${color}-light text-ocobo-${color}`;
};

const getBulletClass = (color: string) => {
	if (color === 'dark') return 'bg-ocobo-dark';
	if (color === 'purple-500') return 'bg-purple-500';
	return `bg-ocobo-${color}`;
};

const ImplicationsSection: React.FC = () => {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-16">
					<h2 className="font-display text-4xl font-bold mb-6">
						Ce que cela implique concrètement
					</h2>
					<p className="text-xl text-gray-600">
						Concrètement, voici ce que nous opérons avec vous :
					</p>
				</div>

				<Grid md={2} lg={3} gap={8}>
					{BLOCKS.map((block) => (
						<div
							key={block.title}
							className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl group"
						>
							<div
								className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${getIconBgClass(block.color)}`}
							>
								{block.icon}
							</div>
							<h3 className="font-display font-bold text-xl mb-4">
								{block.title}
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								{block.items.map((item) => (
									<li key={item} className="flex items-center gap-3">
										<div
											className={`w-1.5 h-1.5 rounded-full shrink-0 ${getBulletClass(block.color)}`}
										></div>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</Grid>
			</div>
		</section>
	);
};

export default ImplicationsSection;
