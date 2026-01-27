import type React from 'react';
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import { Button } from '../../atoms';
import { Container, Section } from '../../organisms';

const INTERVENTIONS = [
	{
		number: 1,
		title: "Immersion, diagnostic et plan d'action RevOps",
		description: 'Pour voir clair et savoir quoi faire. Dans cet ordre là.',
	},
	{
		number: 2,
		title: 'Déploiement RevOps (Agile)',
		description:
			'Pour (re)construire et opérer votre machine revenue en sprints de 2 semaines.',
	},
	{
		number: 3,
		title: 'Formation & Coaching',
		description: 'Pour rendre vos équipes autonomes et pérennes.',
	},
];

export const InterventionsSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: '4xl',
						fontWeight: 'bold',
						color: 'ocobo.dark',
						mb: '4',
						textAlign: 'center',
					})}
				>
					Nos interventions
				</h2>
				<p
					className={css({
						textAlign: 'center',
						color: 'gray.600',
						maxW: '2xl',
						mx: 'auto',
						mb: '16',
					})}
				>
					Nous vous aidons à construire les fondations RevOps dont dépend votre
					croissance.
				</p>

				<div className={grid({ columns: { base: 1, md: 3 }, gap: '8' })}>
					{INTERVENTIONS.map((intervention) => (
						<div
							key={intervention.number}
							className={css({
								bg: 'white',
								borderWidth: '1px',
								borderColor: 'gray.200',
								p: '8',
								transition: 'colors',
								_hover: { borderColor: 'ocobo.dark' },
							})}
						>
							<div
								className={css({
									w: '12',
									h: '12',
									bg: 'ocobo.dark',
									color: 'white',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									mb: '6',
								})}
							>
								{intervention.number}
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									mb: '4',
								})}
							>
								{intervention.title}
							</h3>
							<p className={css({ color: 'gray.600', fontSize: 'sm' })}>
								{intervention.description}
							</p>
						</div>
					))}
				</div>

				<div
					className={css({
						display: 'flex',
						justifyContent: 'center',
						mt: '12',
					})}
				>
					<Button variant="outline" to="/offer">
						Voir nos offres
					</Button>
				</div>
			</Container>
		</Section>
	);
};
