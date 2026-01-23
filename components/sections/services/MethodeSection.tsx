import { BarChart3, Cog, GraduationCap, Layout } from 'lucide-react';
import type React from 'react';
import Grid from '../../layout/Grid';
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

const MethodeSection: React.FC = () => {
	return (
		<section className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader title="Notre méthode en 4 étapes" className="mb-16" />
				<Grid md={4} gap={6}>
					{STEPS.map((step, i) => (
						<div
							key={step.title}
							className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-all group"
						>
							<div className="w-10 h-10 bg-ocobo-dark text-white flex items-center justify-center text-sm font-bold mb-6 group-hover:bg-ocobo-yellow group-hover:text-ocobo-dark transition-colors">
								{i + 1}
							</div>
							<h3 className="font-display text-xl font-bold text-ocobo-dark mb-3">
								{step.title}
							</h3>
							<div className="pt-4 border-t border-gray-50">
								<span className="text-xs font-black uppercase text-gray-400">
									Livrables :
								</span>
								<p className="text-xs font-bold text-ocobo-dark mt-1">
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

export default MethodeSection;
