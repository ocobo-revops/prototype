import { Check, X } from 'lucide-react';
import type React from 'react';
import { Button } from '../../atoms';
import Grid from '../../layout/Grid';
import { Container, Section } from '../../organisms';

const OCOBO_BENEFITS = [
	"Commence par la stratégie, pas par l'outil",
	"Conçoit l'architecture complète de votre croissance",
	'Travaille en immersion, en sprints courts',
	'Opère comme une direction revenue, pas comme un prestataire',
	"Mesure l'impact, pas les livrables",
];

const OTHERS_ISSUES = [
	'Pensent "outil" avant "système"',
	'Empilent les automatisations',
	'Reproduisent les silos (Sales Ops, Marketing Ops…)',
	'Livrent des dashboards illisibles',
	'Confondent complexité et performance',
];

const ComparatifSection: React.FC = () => {
	return (
		<Section bg="dark">
			<Container>
				<div className="text-center mb-16">
					<h2 className="font-display text-4xl font-bold mb-4">
						Pourquoi Ocobo n'est pas un intégrateur.
						<br />
						Ni un cabinet. Ni un freelance CRM.
					</h2>
					<p className="text-gray-400">
						Notre savoir-faire : transformer une machine commerciale grippée en
						mécanique de précision.
					</p>
				</div>

				<Grid md={2} gap={8} className="max-w-5xl mx-auto">
					<div className="bg-white text-ocobo-dark p-10 relative">
						<div className="absolute top-0 left-0 bg-ocobo-yellow text-ocobo-dark px-4 py-1 font-bold text-xs uppercase tracking-widest">
							Ocobo
						</div>
						<h3 className="font-display text-2xl font-bold mb-8 mt-4">
							La Revenue Experience
						</h3>
						<ul className="space-y-4">
							{OCOBO_BENEFITS.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<Check className="text-ocobo-mint shrink-0 mt-1" size={18} />
									<span className="font-medium">{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="bg-white/5 border border-white/10 p-10 text-gray-300">
						<h3 className="font-display text-2xl font-bold mb-8 mt-4 text-white">
							Les autres acteurs
						</h3>
						<ul className="space-y-4">
							{OTHERS_ISSUES.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<X className="text-red-400 shrink-0 mt-1" size={18} />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</Grid>

				<div className="flex justify-center mt-16">
					<Button variant="white" to="/studio" size="lg">
						Découvrez le RevOps Studio
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default ComparatifSection;
