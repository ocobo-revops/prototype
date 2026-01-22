import { BarChart3, Check, Layout, Target, X, Zap } from 'lucide-react';
import type React from 'react';
import { Button } from '../components/atoms';
import { DashboardIllustration } from '../components/illustrations';
import { ClientMarquee } from '../components/layout/ClientMarquee';
import { FeatureCard } from '../components/layout/FeatureCard';
import FlexPair from '../components/layout/FlexPair';
import Grid from '../components/layout/Grid';
import HeroSplit from '../components/layout/HeroSplit';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../components/layout/ModularStackGrid';
import { TestimonialCard } from '../components/molecules';
import { Container, Section } from '../components/organisms';
import { ThemeColor } from '../types';

const HOME_CLIENTS = [
	'TheFork',
	'ePack Hygiène',
	'Qonto',
	'PayFit',
	'Spendesk',
	'Qobra',
	'Tomorro',
	'Jus Mundi',
	'Vizzia',
	'Combo',
	'Sortlist',
	'Zenchef',
];

// Main Home component
const Home: React.FC = () => {
	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<Container className="pt-40 pb-24 relative overflow-hidden">
				<HeroSplit gap={16} className="relative z-10">
					<HeroSplit.Content>
						<h1 className="font-display text-4xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight opacity-0 animate-hero-reveal [animation-delay:0.1s]">
							L'architecture
							<br />
							qui fait tenir
							<br />
							<span className="text-gray-400">votre croissance.</span>
						</h1>

						<p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium max-w-xl opacity-0 animate-hero-reveal [animation-delay:0.2s]">
							Voici comment nous transformons la croissance en{' '}
							<span className="underline decoration-ocobo-yellow decoration-[3px] underline-offset-[6px]">
								expérience simple, fluide et pilotable.
							</span>
						</p>

						<div className="mb-14 py-1.5 opacity-0 animate-hero-reveal [animation-delay:0.3s]">
							<p className="font-display text-lg md:text-xl font-normal text-ocobo-dark leading-tight tracking-tight">
								Le RevOps n'est pas un outil : c'est{' '}
								<span className="font-bold">
									la science qui organise votre revenu.
								</span>
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-6 items-start opacity-0 animate-hero-reveal [animation-delay:0.4s]">
							<Button variant="primary" to="/contact">
								Rencontrer un architecte
							</Button>
						</div>
					</HeroSplit.Content>

					<HeroSplit.Media className="flex justify-center lg:justify-end items-center">
						<DashboardIllustration />
					</HeroSplit.Media>
				</HeroSplit>
			</Container>

			{/* BLOC 2 - LOGOS DÉFILANTS ET TÉMOIGNAGES - STYLE À PROPOS AFFINÉ */}
			<Section bg="dark" className="py-20 md:py-32 relative overflow-hidden">
				<div className="absolute inset-0 opacity-[0.02] bg-dots-light"></div>

				<div className="absolute top-1/2 left-0 w-64 h-64 bg-ocobo-yellow/5 rounded-full -translate-x-1/2 blur-3xl opacity-30"></div>

				<Container className="relative z-10">
					<div className="mb-16 text-center">
						<span className="font-display font-black text-white/40 text-xs uppercase tracking-[0.4em] mb-4 inline-block">
							Ils nous font confiance
						</span>
						<h3 className="text-white text-3xl md:text-5xl font-bold mb-8 tracking-tight">
							La preuve par l'expérience
						</h3>
					</div>

					<div className="mb-24">
						<ClientMarquee clients={HOME_CLIENTS} bordered />
					</div>

					<TestimonialCard
						quote="Nous avons fait appel à Ocobo dans notre seconde phase d'hypercroissance afin de réinventer notre modèle de commissionnement."
						authorName="Arnaud Meunier"
						authorRole="CSO @ ePack Hygiène"
						ctaText="Découvrir nos stories"
						ctaLink="/stories"
						className="max-w-4xl mx-auto"
					/>
				</Container>
			</Section>

			{/* BLOC 3 - PAIN POINT ET POSITIONNEMENT */}
			<Section bg="white" className="py-32 relative overflow-hidden">
				<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-dots-dark-sm"></div>

				<Container narrow className="text-center relative z-10">
					<h2 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
						Le RevOps est partout. <br />
						Mais personne ne comprend vraiment ce dont il s’agit.
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
						Pour que chaque organisation puisse faire l’expérience d’une
						croissance saine et maîtrisée.
					</p>
				</div>
			</Section>

			{/* BLOC 5 - CE QUI CHANGE AVEC OCOBO */}
			<Section bg="gray">
				<Container>
					<div className="flex flex-col md:flex-row items-center gap-16">
						<div className="md:w-1/2">
							<h2 className="font-display text-4xl font-bold text-ocobo-dark mb-6">
								On ne scale pas avec des outils. On scale avec un système.
							</h2>
							<p className="text-gray-600 text-lg mb-8 leading-relaxed">
								La plupart des organisations grandissent en empilant les outils.
								Nous préférons construire des fondations solides et un système
								qui tient la charge.
							</p>
							<ul className="space-y-6">
								<li>
									<FlexPair gap={4}>
										<FlexPair.Icon>
											<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
												1
											</div>
										</FlexPair.Icon>
										<FlexPair.Content>
											<h4 className="font-bold text-lg">Clarté radicale</h4>
											<p className="text-sm text-gray-600">
												Une vérité partagée entre équipes. Des décisions
												éclairées. La fin du pilotage à l'intuition.
											</p>
										</FlexPair.Content>
									</FlexPair>
								</li>
								<li>
									<FlexPair gap={4}>
										<FlexPair.Icon>
											<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
												2
											</div>
										</FlexPair.Icon>
										<FlexPair.Content>
											<h4 className="font-bold text-lg">
												Simplicité opérationnelle
											</h4>
											<p className="text-sm text-gray-600">
												Moins de friction, moins de complexité, moins d'outils.
												Des équipes concentrées sur le closing.
											</p>
										</FlexPair.Content>
									</FlexPair>
								</li>
								<li>
									<FlexPair gap={4}>
										<FlexPair.Icon>
											<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm font-bold border border-gray-100">
												3
											</div>
										</FlexPair.Icon>
										<FlexPair.Content>
											<h4 className="font-bold text-lg">
												Performance mesurable
											</h4>
											<p className="text-sm text-gray-600">
												Des conversions qui augmentent. Des cycles qui
												raccourcissent. Un revenu enfin prévisible.
											</p>
										</FlexPair.Content>
									</FlexPair>
								</li>
							</ul>
						</div>
						<div className="md:w-1/2 bg-white p-10 shadow-xl border border-gray-100 rounded-none relative">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>
							<h3 className="font-display text-2xl font-bold mb-8 text-center">
								Ce n’est pas un hasard.
								<br />
								C’est une méthode.
							</h3>
							<div className="space-y-4">
								<div className="p-4 bg-ocobo-yellow-light border-l-4 border-ocobo-yellow">
									<span className="font-bold text-ocobo-dark">Alignment</span>
									<p className="text-xs text-gray-600">
										Aligner les équipes qui font le revenu.
									</p>
								</div>
								<div className="p-4 bg-ocobo-sky-light border-l-4 border-ocobo-sky">
									<span className="font-bold text-ocobo-dark">Technology</span>
									<p className="text-xs text-gray-600">
										Une stack claire, connectée, utile.
									</p>
								</div>
								<div className="p-4 bg-ocobo-mint-light border-l-4 border-ocobo-mint">
									<span className="font-bold text-ocobo-dark">Performance</span>
									<p className="text-xs text-gray-600">
										Indicateurs fiables, pilotage, cockpit.
									</p>
								</div>
								<div className="p-4 bg-ocobo-coral-light border-l-4 border-ocobo-coral">
									<span className="font-bold text-ocobo-dark">Enablement</span>
									<p className="text-xs text-gray-600">
										Equipes formées et autonomes.
									</p>
								</div>
							</div>
							<div className="mt-8 text-center">
								<p className="font-display font-bold text-sm uppercase tracking-wider mb-4">
									The Revenue Experience System™
								</p>
								<Button to="/method" fullWidth>
									Découvrir notre méthode
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</Section>

			{/* BLOC 7 - CE QUE NOUS FAISONS (NOS INTERVENTIONS) */}
			<Section bg="white">
				<Container>
					<h2 className="font-display text-4xl font-bold text-ocobo-dark mb-4 text-center">
						Nos interventions
					</h2>
					<p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
						Nous vous aidons à construire les fondations RevOps dont dépend
						votre croissance.
					</p>

					<Grid md={3} gap={8}>
						<div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
							<div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">
								1
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Immersion, diagnostic et plan d'action RevOps
							</h3>
							<p className="text-gray-600 text-sm">
								Pour voir clair et savoir quoi faire. Dans cet ordre là.
							</p>
						</div>
						<div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
							<div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">
								2
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Déploiement RevOps (Agile)
							</h3>
							<p className="text-gray-600 text-sm">
								Pour (re)construire et opérer votre machine revenue en sprints
								de 2 semaines.
							</p>
						</div>
						<div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
							<div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">
								3
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Formation & Coaching
							</h3>
							<p className="text-gray-600 text-sm">
								Pour rendre vos équipes autonomes et pérennes.
							</p>
						</div>
					</Grid>

					<div className="flex justify-center mt-12">
						<Button variant="outline" to="/offer">
							Voir nos offres
						</Button>
					</div>
				</Container>
			</Section>

			{/* BLOC 7 - COMPARATIF */}
			<Section bg="dark">
				<Container>
					<div className="text-center mb-16">
						<h2 className="font-display text-4xl font-bold mb-4">
							Pourquoi Ocobo n’est pas un intégrateur.
							<br />
							Ni un cabinet. Ni un freelance CRM.
						</h2>
						<p className="text-gray-400">
							Notre savoir-faire : transformer une machine commerciale grippée
							en mécanique de précision.
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
								{[
									'Commence par la stratégie, pas par l’outil',
									'Conçoit l’architecture complète de votre croissance',
									'Travaille en immersion, en sprints courts',
									'Opère comme une direction revenue, pas comme un prestataire',
									'Mesure l’impact, pas les livrables',
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<Check
											className="text-ocobo-mint shrink-0 mt-1"
											size={18}
										/>
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
								{[
									'Pensent “outil” avant “système”',
									'Empilent les automatisations',
									'Reproduisent les silos (Sales Ops, Marketing Ops…)',
									'Livrent des dashboards illisibles',
									'Confondent complexité et performance',
								].map((item) => (
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

			{/* BLOC 8 - RÉASSURANCE / STACK */}
			<Section bg="white">
				<Container className="text-center">
					<h2 className="font-display text-4xl font-bold mb-6">
						La bonne technologie. Au bon moment. Pour les bonnes raisons.
					</h2>
					<p className="text-gray-500 mb-16 max-w-3xl mx-auto text-lg font-medium">
						Nous ne sommes pas là pour empiler les outils, but pour construire
						un écosystème cohérent. Nous certifions et implémentons les
						solutions leaders du marché.
					</p>

					<div className="mb-16">
						<ModularStackGrid items={DEFAULT_STACK_ITEMS} showLabels />
					</div>

					<div className="mt-8 flex flex-col items-center">
						<Button variant="outline" to="/technology" size="lg">
							Nos solutions partenaires
						</Button>
						<p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
							Notre rôle : démanteler les usines à gaz et rendre votre stack
							utile.
						</p>
					</div>
				</Container>
			</Section>

			{/* BLOC 9 - CTA FINAL */}
			<Section bg="yellow">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="font-display text-5xl font-bold text-ocobo-dark mb-6 tracking-tighter">
						Rencontrer un architecte RevOps
					</h2>
					<p className="text-xl text-ocobo-dark mb-10 font-medium">
						En 30 minutes, nous évaluons la maturité de votre machine revenue.
						<br />
						Vous repartez avec plus de clarté.
					</p>
					<div className="flex justify-center">
						<Button variant="primary" to="/contact">
							Prendre RDV
						</Button>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Home;
