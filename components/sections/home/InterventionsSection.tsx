import type React from 'react';
import { Button } from '../../atoms';
import { Grid } from '../../layout/Grid';
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

const InterventionsSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container>
				<h2 className="font-display text-4xl font-bold text-ocobo-dark mb-4 text-center">
					Nos interventions
				</h2>
				<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
					Nous vous aidons à construire les fondations RevOps dont dépend votre
					croissance.
				</p>

				<Grid md={3} gap={8}>
					{INTERVENTIONS.map((intervention) => (
						<div
							key={intervention.number}
							className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group"
						>
							<div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">
								{intervention.number}
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								{intervention.title}
							</h3>
							<p className="text-gray-600 text-sm">
								{intervention.description}
							</p>
						</div>
					))}
				</Grid>

				<div className="flex justify-center mt-12">
					<Button variant="outline" to="/offer">
						Voir nos offres
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default InterventionsSection;
