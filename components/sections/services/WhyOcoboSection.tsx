import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import Grid from '../../layout/Grid';
import { SectionHeader } from '../../organisms';

const REASONS = [
	{
		color: 'yellow',
		title: 'Profils seniors',
		description:
			'Aucun junior. Nous opérons comme une direction Revenue interne embarquée.',
	},
	{
		color: 'coral',
		title: 'Impact réel',
		description:
			'Pas de slides inutiles. Nous construisons, opérons et transmettons.',
	},
	{
		color: 'mint',
		title: 'Système durable',
		description:
			'Nous laissons un système structuré et pilotable pour votre futur scale.',
	},
];

const WhyOcoboSection: React.FC = () => {
	return (
		<section className="py-24 bg-ocobo-dark text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader title="Pourquoi choisir Ocobo" light className="mb-16" />
				<Grid md={3} gap={12}>
					{REASONS.map((reason) => (
						<div key={reason.title} className="text-center">
							<div
								className={`w-16 h-16 bg-ocobo-${reason.color} rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6`}
							>
								<CheckCircle2 size={32} strokeWidth={4} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								{reason.title}
							</h3>
							<p className="text-gray-300 leading-relaxed">
								{reason.description}
							</p>
						</div>
					))}
				</Grid>
			</div>
		</section>
	);
};

export default WhyOcoboSection;
