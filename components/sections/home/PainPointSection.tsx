import { BarChart3, Layout, Target, Zap } from 'lucide-react';
import type React from 'react';
import { ThemeColor } from '../../../types';
import { FeatureCard } from '../../layout/FeatureCard';
import { Grid } from '../../layout/Grid';
import { Container, Section } from '../../organisms';

const PainPointSection: React.FC = () => {
	return (
		<Section bg="white" className="py-32 relative overflow-hidden">
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-dots-dark-sm"></div>

			<Container narrow className="text-center relative z-10">
				<h2 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
					Le RevOps est partout. <br />
					Mais personne ne comprend vraiment ce dont il s'agit.
				</h2>
				<div className="prose prose-xl mx-auto text-gray-500 mb-12 font-medium">
					<p>
						Le marché a transformer un métier essentiel en une discipline
						fourre-tout : CRM, intégration, automatisation, data, growth…
						Résultat : une cacophonie, des stacks qui débordent et des
						organisations qui avancent à tâtons.
					</p>
				</div>
				<div className="inline-flex items-center gap-3 px-8 py-3 bg-ocobo-dark text-white font-display font-black uppercase tracking-[0.2em] text-sm rounded-full transform hover:scale-105 transition-transform cursor-default shadow-xl">
					Nous refusons ce flou
				</div>
			</Container>

			<Container className="mt-28 relative z-10">
				<Grid md={2} lg={4} gap={6}>
					<FeatureCard
						icon={<Layout size={28} />}
						title="Aligner"
						description="les équipes"
						colour={ThemeColor.CORAL}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<Zap size={28} />}
						title="Simplifier"
						description="les process"
						colour={ThemeColor.YELLOW}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<Target size={28} />}
						title="Fiabiliser"
						description="la donnée"
						colour={ThemeColor.SKY}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<BarChart3 size={28} />}
						title="Piloter"
						description="la croissance"
						colour={ThemeColor.MINT}
						label="Organiser ="
					/>
				</Grid>
			</Container>

			<div className="text-center mt-32 max-w-4xl mx-auto px-4">
				<div className="inline-block px-5 py-2 bg-ocobo-mint-light text-ocobo-mint font-display font-black uppercase tracking-[0.3em] text-xs mb-8 rounded-full border border-ocobo-mint/20">
					Notre Mission
				</div>
				<h3 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">
					Démocratiser la science du revenu.
				</h3>
				<p className="text-xl text-gray-500 font-medium MI-6 leading-relaxed">
					Pour que chaque organisation puisse faire l'expérience d'une
					croissance saine et maîtrisée.
				</p>
			</div>
		</Section>
	);
};

export default PainPointSection;
