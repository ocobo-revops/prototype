import {
	BarChart3,
	ChevronDown,
	Database,
	GraduationCap,
	Layers,
	Layout,
	LineChart,
	RefreshCw,
	Sliders,
	Target,
} from 'lucide-react';
import type React from 'react';
import { Badge, Button } from '../components/atoms';
import {
	AttioPillarsIllustration,
	UnifiedBowtie,
} from '../components/illustrations';

const Method: React.FC = () => {
	return (
		<div className="w-full bg-white">
			{/* HERO METHODE - UNIFORMISÉ & CENTRÉ AVEC ANIMATION LIGHT ET ESPACES RÉDUITS */}
			<section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center overflow-hidden">
				<div className="max-w-4xl mx-auto mb-8 relative z-10">
					<Badge variant="yellow" className="mb-10">
						NOTRE MÉTHODE
					</Badge>

					<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
						4 piliers pour <br />
						une architecture{' '}
						<span className="text-ocobo-yellow italic">solide.</span>
					</h1>

					<p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
						<span className="font-bold">The Revenue Experience System™</span>{' '}
						est notre framework propriétaire conçu pour transformer le chaos
						opérationnel en une machine de revenu pilotable.
					</p>
				</div>

				<div className="flex justify-center mb-10 relative z-10 px-4">
					<AttioPillarsIllustration />
				</div>

				<div className="flex flex-col items-center gap-12 relative z-10">
					<div className="italic font-medium text-gray-400 text-sm leading-relaxed max-w-md">
						"Une croissance saine n'est jamais le fruit du hasard, c'est le
						résultat d'un système pensé pour durer et pour favoriser l'usage."
					</div>

					<Button
						variant="primary"
						className="px-16 py-5 text-xs font-bold uppercase tracking-[0.25em] shadow-xl bg-ocobo-dark hover:bg-black transition-all hover:-translate-y-1"
						to="/contact"
					>
						Auditer mon système
					</Button>
				</div>

				<div className="mt-16 flex justify-center w-full animate-bounce-slow">
					<ChevronDown className="text-gray-200" size={24} strokeWidth={1.5} />
				</div>
			</section>

			{/* THE REVENUE EXPERIENCE SYSTEM™ */}
			<section className="bg-gray-50 py-32 border-y border-gray-100 relative overflow-hidden">
				{/* Subtle Background Pattern */}
				<div
					className="absolute inset-0 opacity-[0.03] pointer-events-none"
					style={{
						backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="mb-24 text-center">
						<h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight">
							The Revenue Experience System™
						</h2>
						<p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium">
							Nous n'intervenons jamais au hasard. Nous suivons un ordre logique
							pour garantir la stabilité de l'édifice.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-10">
						{/* Card 1: Alignment */}
						<div className="bg-white p-10 border-t-8 border-ocobo-yellow shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
							<div className="flex justify-between items-start mb-10">
								<div className="bg-ocobo-yellow-light p-4 rounded-full text-ocobo-yellow">
									<Layout size={32} />
								</div>
								<span className="text-6xl font-display font-bold text-gray-100/60 leading-none select-none">
									01
								</span>
							</div>
							<h3 className="font-display text-3xl font-bold mb-6">
								Alignement
							</h3>
							<p className="text-gray-600 mb-10 leading-relaxed font-medium">
								Avant de toucher aux outils, nous alignons les hommes. Nous
								cassons les silos entre Marketing, Sales et CS pour créer une
								seule équipe Revenue avec des objectifs communs.
							</p>

							<div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
								<span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">
									LIVRABLES CLÉS
								</span>
								<div className="space-y-6">
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellow-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Cartographie du cycle de vie (Lifecycle Map)
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Visualisation précise du parcours client et des points
												de friction.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellow-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Protocoles de "Handover" & SLAs
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Règles strictes de passage de relais entre équipes (fini
												les zones grises).
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellow-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Dictionnaire de données (KPIS clés)
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Définitions partagées par toute l'entreprise pour
												garantir l'intégrité de la donnée.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Card 2: Technologie */}
						<div className="bg-white p-10 border-t-8 border-ocobo-sky shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
							<div className="flex justify-between items-start mb-10">
								<div className="bg-ocobo-sky-light p-4 rounded-full text-ocobo-sky">
									<Sliders size={32} />
								</div>
								<span className="text-6xl font-display font-bold text-gray-100/60 leading-none select-none">
									02
								</span>
							</div>
							<h3 className="font-display text-3xl font-bold mb-6">
								Technologie
							</h3>
							<p className="text-gray-600 mb-10 leading-relaxed font-medium">
								Nous construisons une stack connectée et épurée. Pas d'usine à
								gaz. Juste les bons outils, connectés au bon moment, pour servir
								les process.
							</p>

							<div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
								<span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">
									LIVRABLES CLÉS
								</span>
								<div className="space-y-6">
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-sky-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Audit & assainissement de la Stack
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Nettoyage des dettes techniques et suppression des
												outils redondants.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-sky-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Architecture de données scalable (Core Model)
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Structure CRM prête pour le multi-segment et
												l'hyper-croissance.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-sky-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Flux d'enrichissement & routage automatisé
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Mécanismes pour livrer la bonne info au bon commercial,
												au bon moment.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Card 3: Performance */}
						<div className="bg-white p-10 border-t-8 border-ocobo-mint shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
							<div className="flex justify-between items-start mb-10">
								<div className="bg-ocobo-mint-light p-4 rounded-full text-ocobo-mint">
									<LineChart size={32} />
								</div>
								<span className="text-6xl font-display font-bold text-gray-100/60 leading-none select-none">
									03
								</span>
							</div>
							<h3 className="font-display text-3xl font-bold mb-6">
								Performance
							</h3>
							<p className="text-gray-600 mb-10 leading-relaxed font-medium">
								On ne pilote pas ce qu'on ne mesure pas. Nous alignons les
								indicateurs et les incitations (rémunération) sur vos objectifs
								stratégiques.
							</p>

							<div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
								<span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">
									LIVRABLES CLÉS
								</span>
								<div className="space-y-6">
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mint-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Dashboards COMEX & Investisseurs
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Vues macro pour le pilotage stratégique (CAC, LTV,
												Churn) et reporting financier.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mint-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Plans de commissionnement (Comp Plans)
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Modèles de variable qui orientent les comportements vers
												la valeur réelle.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mint-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Fiabilisation du Forecast
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Routines pour passer de la "devinette" à une prévision
												fiable (+/- 10%).
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Card 4: Enablement */}
						<div className="bg-white p-10 border-t-8 border-ocobo-coral shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
							<div className="flex justify-between items-start mb-10">
								<div className="bg-ocobo-coral-light p-4 rounded-full text-ocobo-coral">
									<GraduationCap size={32} />
								</div>
								<span className="text-6xl font-display font-bold text-gray-100/60 leading-none select-none">
									04
								</span>
							</div>
							<h3 className="font-display text-3xl font-bold mb-6">
								Enablement
							</h3>
							<p className="text-gray-600 mb-10 leading-relaxed font-medium">
								Le meilleur système ne vaut rien s'il n'est pas utilisé. Nous
								formons, coachons et documentons pour assurer l'adoption
								durable.
							</p>

							<div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
								<span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">
									LIVRABLES CLÉS
								</span>
								<div className="space-y-6">
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coral-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Playbooks d'exécution
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Guides pratiques (Sales & Ops) pour standardiser les
												méthodes de travail.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coral-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Documentation technique pérenne
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Wiki complet pour ne plus dépendre de la connaissance
												individuelle.
											</p>
										</div>
									</div>
									<div className="flex gap-4 items-start group/item">
										<div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coral-light shrink-0"></div>
										<div>
											<h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">
												Routines d'onboarding CRM
											</h4>
											<p className="text-xs text-gray-500 leading-relaxed">
												Parcours de formation pour rendre les nouveaux entrants
												opérationnels vite.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NOTRE PERIMETRE D'ACTION (BOWTIE INTEGRATED) */}
			<section className="py-32 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">
						Notre périmètre d'action
					</h2>
					<p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
						Nous intervenons sur l'intégralité de la chaîne de valeur du revenu.
					</p>

					{/* THE RE-ENGINEERED BOWTIE */}
					<UnifiedBowtie />

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-24">
						{/* Card 1 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-yellow">
							<div className="w-12 h-12 bg-ocobo-yellow-light text-ocobo-yellow rounded-lg flex items-center justify-center mb-6">
								<Target size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Génération de Revenu
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Lead Gen & Scoring
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Pipeline Management
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Account Based Marketing
								</li>
							</ul>
						</div>

						{/* Card 2 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-sky">
							<div className="w-12 h-12 bg-ocobo-sky-light text-ocobo-sky rounded-lg flex items-center justify-center mb-6">
								<Database size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Architecture & Data
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									CRM Setup (HubSpot/SFDC)
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									Data Quality & Enrichment
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									Integrations & Stack
								</li>
							</ul>
						</div>

						{/* Card 3 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-mint">
							<div className="w-12 h-12 bg-ocobo-mint-light text-ocobo-mint rounded-lg flex items-center justify-center mb-6">
								<BarChart3 size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Pilotage & Performance
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>
									Forecasting & Reporting
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>
									Plan de Commissionnement
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>
									Territory Planning
								</li>
							</ul>
						</div>

						{/* Card 4 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-coral">
							<div className="w-12 h-12 bg-ocobo-coral-light text-ocobo-coral rounded-lg flex items-center justify-center mb-6">
								<RefreshCw size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Customer Success & Expansion
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>
									Churn Management & Health Score
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>
									Upsell & Cross-sell Routines
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>
									Onboarding & CS Ops Strategy
								</li>
							</ul>
						</div>

						{/* Card 5 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-yellow">
							<div className="w-12 h-12 bg-ocobo-yellow-light text-ocobo-yellow rounded-lg flex items-center justify-center mb-6">
								<GraduationCap size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Sales Enablement
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Playbooks & Sales Methodology
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Onboarding & Continuous Training
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>
									Sales Content & Tool Adoption
								</li>
							</ul>
						</div>

						{/* Card 6 */}
						<div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-sky">
							<div className="w-12 h-12 bg-ocobo-sky-light text-ocobo-sky rounded-lg flex items-center justify-center mb-6">
								<Layers size={24} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Gouvernance & Stratégie
							</h3>
							<ul className="space-y-3 text-sm text-gray-600">
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									Go-to-Market Strategy Review
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									Revenue Planning & Board Reporting
								</li>
								<li className="flex items-center gap-3">
									<div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>
									Revenue Management & Leadership
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA BRIDGE - UNIFIED AND NON-ITALIC */}
			<section className="bg-ocobo-yellow py-32 text-center text-ocobo-dark relative overflow-hidden">
				<div className="max-w-3xl mx-auto px-4 relative z-10">
					<h2 className="font-display text-4xl md:text-5xl font-black mb-8">
						Prêt à sortir du bricolage ?
					</h2>
					<p className="text-ocobo-dark/70 mb-12 text-xl font-bold leading-relaxed">
						Notre méthode est le fruit de 10 ans d'expérience dans les scale-ups
						les plus performantes (TheFork, PayFit, Spendesk).
					</p>
					<div className="flex justify-center">
						<Button
							variant="primary"
							className="px-12 py-5 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 border-none bg-ocobo-dark text-white"
							to="/contact"
						>
							Bâtir mon architecture
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Method;
