import {
	BarChart3,
	Cog,
	Cpu,
	GraduationCap,
	Layout,
	Search,
} from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';

const BLOCKS = [
	{
		title: 'Diagnostiquer',
		color: 'coral' as const,
		icon: <Search size={24} />,
		items: [
			'Analyse interactions Mkt/Sales/CS',
			'Cartographie process + CRM',
			'Analyse KPI, pipeline, variable',
		],
	},
	{
		title: 'Aligner',
		color: 'yellow' as const,
		icon: <Layout size={24} />,
		items: [
			'ICP & buyer journey',
			'SLA Marketing ↔ Sales ↔ CS',
			'Organisation & rituels communs',
		],
	},
	{
		title: 'Outiller',
		color: 'sky' as const,
		icon: <Cog size={24} />,
		items: [
			'Repenser / implémenter CRM',
			'Automatisations intelligentes',
			'Dashboards partagés',
		],
	},
	{
		title: 'Activer la performance',
		color: 'mint' as const,
		icon: <BarChart3 size={24} />,
		items: ['Plans de variable', 'Objectifs et KPIs', 'Cockpit de pilotage'],
	},
	{
		title: "Intégrer l'IA",
		color: 'purple' as const,
		icon: <Cpu size={24} />,
		items: [
			'Agents IA prospection',
			'Automatisation CRM after-call',
			'Scoring prédictif',
		],
	},
	{
		title: 'Former & Itérer',
		color: 'dark' as const,
		icon: <GraduationCap size={24} />,
		items: [
			'Pipeline review, roleplay',
			'Playbooks et templates',
			"Roadmap d'itération",
		],
	},
];

const iconBgStyles = {
	coral: css({ bg: 'ocobo.coral.light', color: 'ocobo.coral' }),
	yellow: css({ bg: 'ocobo.yellow.light', color: 'ocobo.yellow' }),
	sky: css({ bg: 'ocobo.sky.light', color: 'ocobo.sky' }),
	mint: css({ bg: 'ocobo.mint.light', color: 'ocobo.mint' }),
	purple: css({ bg: 'purple.50', color: 'purple.500' }),
	dark: css({ bg: 'gray.100', color: 'ocobo.dark' }),
};

const bulletStyles = {
	coral: css({ bg: 'ocobo.coral' }),
	yellow: css({ bg: 'ocobo.yellow' }),
	sky: css({ bg: 'ocobo.sky' }),
	mint: css({ bg: 'ocobo.mint' }),
	purple: css({ bg: 'purple.500' }),
	dark: css({ bg: 'ocobo.dark' }),
};

export const ImplicationsSection: React.FC = () => {
	return (
		<section className={css({ py: '24', bg: 'white' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<div className={css({ mb: '16' })}>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: '4xl',
							fontWeight: 'bold',
							mb: '6',
						})}
					>
						Ce que cela implique concrètement
					</h2>
					<p className={css({ fontSize: 'xl', color: 'gray.600' })}>
						Concrètement, voici ce que nous opérons avec vous :
					</p>
				</div>

				<div className={grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '8' })}>
					{BLOCKS.map((block) => (
						<div
							key={block.title}
							className={css({
								bg: 'white',
								borderWidth: '1px',
								borderColor: 'gray.100',
								p: '8',
								transition: 'all',
								rounded: 'xl',
								_hover: { shadow: 'lg' },
							})}
						>
							<div
								className={`${css({
									w: '12',
									h: '12',
									mb: '6',
									rounded: 'lg',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								})} ${iconBgStyles[block.color]}`}
							>
								{block.icon}
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'xl',
									mb: '4',
								})}
							>
								{block.title}
							</h3>
							<ul
								className={css({
									spaceY: '3',
									fontSize: 'sm',
									color: 'gray.600',
								})}
							>
								{block.items.map((item) => (
									<li
										key={item}
										className={css({
											display: 'flex',
											alignItems: 'center',
											gap: '3',
										})}
									>
										<div
											className={`${css({
												w: '1.5',
												h: '1.5',
												rounded: 'full',
												flexShrink: '0',
											})} ${bulletStyles[block.color]}`}
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
