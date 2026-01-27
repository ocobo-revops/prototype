import { BarChart3, Cog, GraduationCap, Layout } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { Grid } from '../../layout/Grid';
import { SectionHeader } from '../../organisms';

const STEPS = [
	{
		title: 'Aligner',
		icon: <Layout size={20} />,
		deliverable: 'Playbooks, rituels',
	},
	{
		title: 'Outiller',
		icon: <Cog size={20} />,
		deliverable: 'Roadmap tech',
	},
	{
		title: 'Piloter',
		icon: <BarChart3 size={20} />,
		deliverable: 'Tableaux de bord',
	},
	{
		title: 'Former',
		icon: <GraduationCap size={20} />,
		deliverable: 'Kits formation',
	},
];

export const MethodeSection: React.FC = () => {
	return (
		<section className={css({ py: '24', bg: 'gray.50' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<SectionHeader
					title="Notre méthode en 4 étapes"
					className={css({ mb: '16' })}
				/>
				<Grid md={4} gap={6}>
					{STEPS.map((step, i) => (
						<div
							key={step.title}
							className={css({
								bg: 'white',
								p: '8',
								borderWidth: '1px',
								borderColor: 'gray.100',
								transition: 'all',
								_hover: { shadow: 'lg' },
							})}
						>
							<div
								className={css({
									w: '10',
									h: '10',
									bg: 'ocobo.dark',
									color: 'white',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: 'sm',
									fontWeight: 'bold',
									mb: '6',
									_groupHover: { bg: 'ocobo.yellow', color: 'ocobo.dark' },
									transition: 'colors',
								})}
							>
								{i + 1}
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
									mb: '3',
								})}
							>
								{step.title}
							</h3>
							<div
								className={css({
									pt: '4',
									borderTopWidth: '1px',
									borderColor: 'gray.50',
								})}
							>
								<span
									className={css({
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										color: 'gray.400',
									})}
								>
									Livrables :
								</span>
								<p
									className={css({
										fontSize: 'xs',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										mt: '1',
									})}
								>
									{step.deliverable}
								</p>
							</div>
						</div>
					))}
				</Grid>
			</div>
		</section>
	);
};
