import {
	ArrowRight,
	BarChart3,
	CheckCircle2,
	ChevronDown,
	Cog,
	Cpu,
	GraduationCap,
	Layers,
	Layout,
	Search,
	Users,
} from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import { Badge, Button } from '../components/atoms';
import { ArchitecturalGrid, PyramidSection } from '../components/illustrations';
import Grid from '../components/layout/Grid';
import HeroSplit from '../components/layout/HeroSplit';
import { SectionHeader } from '../components/organisms';

const Services: React.FC = () => {
	return (
		<div className="w-full">
			{/* BLOC 1 - HERO OFFRE */}
			<section className="pt-40 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<HeroSplit gap={16} className="mb-16">
					<HeroSplit.Content className="lg:w-1/2">
						<Badge variant="yellow" className="mb-10">
							NOTRE OFFRE
						</Badge>
						<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
							Un système.
							<br />
							<span className="text-gray-400">Pas des rustines.</span>
						</h1>
						<p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-xl">
							Les entreprises qui passent à l'échelle ne misent pas sur
							l'empilement d'outils. Elles construisent un système de revenu
							clair, simple et pilotable.
						</p>
						<Button variant="cta" size="lg" to="/contact">
							Prendre RDV
						</Button>
					</HeroSplit.Content>
					<HeroSplit.Media className="lg:w-1/2 flex justify-center lg:justify-end items-center">
						<ArchitecturalGrid />
					</HeroSplit.Media>
				</HeroSplit>

				<div className="flex justify-center w-full animate-bounce-subtle">
					<ChevronDown
						className="text-ocobo-coral opacity-30"
						size={28}
						strokeWidth={1.5}
					/>
				</div>
			</section>

			{/* BLOC 2 - SYMPTOMES (REDESIGN PYRAMIDE PREMIUM) */}
			<section className="pt-12 md:pt-24 pb-0 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16 md:mb-24">
						<h2 className="font-display text-3xl md:text-5xl font-bold text-ocobo-dark mb-6 leading-tight">
							Quand la croissance s’accélère, <br className="hidden md:block" />{' '}
							la complexité arrive.
						</h2>
						<p className="text-lg md:text-xl text-gray-600 font-medium">
							Dans toutes les entreprises en mouvement, les mêmes symptômes sont
							légion :
						</p>
					</div>

					{/* MOBILE LAYOUT (List) */}
					<div className="md:hidden space-y-8 pb-12">
						<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-coral opacity-10 rounded-bl-full"></div>
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
									1
								</div>
								<h3 className="font-display text-xl font-bold text-ocobo-dark">
									CEO
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									• Manque de visibilité sur le business
								</li>
							</ul>
						</div>
						<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-yellow opacity-10 rounded-bl-full"></div>
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
									2
								</div>
								<h3 className="font-display text-xl font-bold text-ocobo-dark">
									Managers
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									• Prévisions instables
								</li>
							</ul>
						</div>
						<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-sky opacity-10 rounded-bl-full"></div>
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
									3
								</div>
								<h3 className="font-display text-xl font-bold text-ocobo-dark">
									Équipes terrain
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									• Trop d’outils, pas assez de clarté
								</li>
							</ul>
						</div>
						<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-mint opacity-10 rounded-bl-full"></div>
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
									4
								</div>
								<h3 className="font-display text-xl font-bold text-ocobo-dark">
									Clients
								</h3>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">• Expérience inégale</li>
							</ul>
						</div>
					</div>

					{/* DESKTOP LAYOUT (Pyramid Redesign) */}
					<div className="hidden md:block">
						<PyramidSection />
					</div>
				</div>
			</section>

			{/* BLOC 3 - TRANSITION (REDESIGN STYLE RECRUTEMENT) */}
			<section className="py-24 bg-ocobo-dark text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="border border-gray-700/50 p-12 md:p-20 relative">
						<h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-16 md:mb-20 text-center leading-tight">
							RevOps vient remettre de l’ordre.
						</h2>

						<Grid md={2} lg={4} gap={12}>
							<div className="space-y-4">
								<h3 className="font-display text-2xl font-bold text-ocobo-yellow">
									Alignement
								</h3>
								<p className="text-sm text-gray-400 leading-relaxed">
									Aligner Marketing, Sales, CS et Finance pour une vision
									commune et transverse du revenu.
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="font-display text-2xl font-bold text-ocobo-mint">
									Process
								</h3>
								<p className="text-sm text-gray-400 leading-relaxed">
									Fluidifier les parcours et supprimer les frictions
									opérationnelles à chaque étape du cycle de vie.
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="font-display text-2xl font-bold text-ocobo-coral">
									Data
								</h3>
								<p className="text-sm text-gray-400 leading-relaxed">
									Fiabiliser la donnée pour transformer les intuitions en
									décisions factuelles et pilotables.
								</p>
							</div>
							<div className="space-y-4">
								<h3 className="font-display text-2xl font-bold text-ocobo-sky">
									Performance
								</h3>
								<p className="text-sm text-gray-400 leading-relaxed">
									Améliorer la conversion et le revenu à chaque étape clé du
									parcours client.
								</p>
							</div>
						</Grid>
					</div>
				</div>
			</section>

			{/* BLOC OFFRES DETAILLEES */}
			<section className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title="Nous construisons et opérons les fondations RevOps"
						subtitle="Nous construisons et opérons les fondations RevOps de votre organisation : process, outils, data et équipes alignés pour une croissance durable et maîtrisée."
						className="mb-16 md:mb-24"
					/>

					<div className="space-y-24">
						{/* Service 1: Audit & Cadrage */}
						<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
							<div className="w-full md:w-5/12 sticky top-32">
								<div className="w-16 h-16 bg-ocobo-yellow text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-offset mb-8">
									1
								</div>
								<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
									Immersion, cadrage et plan d’action RevOps
								</h3>
								<p className="text-gray-600 text-lg leading-relaxed">
									La vision claire pour savoir où agir.
								</p>
							</div>
							<div className="w-full md:w-7/12">
								<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-yellow transition-all duration-300 group rounded-xl">
									<ul className="space-y-8">
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Diagnostic transversal
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Analyse en profondeur des interactions et frictions
													entre les départements.
												</p>
											</div>
										</li>
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Cartographie process / outils / data
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Audit complet de l'infrastructure existante et des
													flux de travail.
												</p>
											</div>
										</li>
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Priorisation et feuille de route
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Un plan d'attaque chiffré et priorisé pour les mois à
													venir.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="w-full h-px bg-gray-100"></div>

						{/* Service 2: Déploiement */}
						<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
							<div className="w-full md:w-5/12 sticky top-32">
								<div className="w-16 h-16 bg-ocobo-coral text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-offset mb-8">
									2
								</div>
								<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
									Déploiement RevOps (Agile)
								</h3>
								<p className="text-gray-600 text-lg leading-relaxed">
									Pour opérer et structurer la machine revenue en sprints de 2
									semaines.
								</p>
							</div>
							<div className="w-full md:w-7/12">
								<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-coral transition-all duration-300 group rounded-xl">
									<ul className="grid md:grid-cols-2 gap-y-6 gap-x-8">
										{[
											'Funnel complet : demand gen → closing → onboarding → expansion',
											'Process simples & adoptés',
											'CRM utile et utilisé',
											'Stack lisible et connectée',
											'Automatisations utiles',
											'Data fiable & pilotable',
											'Rémunération variable claire, juste et motivante',
										].map((item) => (
											<li key={item} className="flex items-start gap-4">
												<div className="mt-0.5 text-ocobo-coral">
													<CheckCircle2 size={18} />
												</div>
												<span className="font-medium text-gray-700 text-sm leading-snug">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						<div className="w-full h-px bg-gray-100"></div>

						{/* Service 3: Coaching */}
						<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
							<div className="w-full md:w-5/12 sticky top-32">
								<div className="w-16 h-16 bg-ocobo-mint text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-offset mb-8">
									3
								</div>
								<h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">
									Coaching & Formation
								</h3>
								<p className="text-gray-600 text-lg leading-relaxed">
									Rendre vos équipes autonomes et capables de faire vivre le
									système.
								</p>
							</div>
							<div className="w-full md:w-7/12">
								<div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-2xl hover:border-ocobo-mint transition-all duration-300 group rounded-xl">
									<ul className="space-y-8">
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Acculturation RevOps pour dirigeants
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Aligner la vision stratégique et donner les clés de
													lecture aux décideurs.
												</p>
											</div>
										</li>
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Coaching Heads (Sales / CS / RevOps)
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Accompagnement individuel des responsables pour
													piloter l'excellence opérationnelle.
												</p>
											</div>
										</li>
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Montée en compétence des équipes
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Formation pratique aux nouveaux rituels, outils et
													méthodes GTM.
												</p>
											</div>
										</li>
										<li className="flex gap-5 items-start">
											<div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
												<CheckCircle2 size={18} />
											</div>
											<div>
												<h4 className="font-bold text-lg text-ocobo-dark mb-2">
													Playbooks pratiques
												</h4>
												<p className="text-sm text-gray-600 leading-relaxed">
													Création de bibles opérationnelles pour ancrer
													durablement les process.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* BLOC 4 - NOS 3 LEVIERS D'ACCOMPAGNEMENT */}
			<section className="py-24 bg-white border-y border-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						badge="LEVIERS DE CROISSANCE"
						title="Nos 3 leviers d'accompagnement."
						subtitle="Pour mettre votre stratégie Revenue en mouvement, nous combinons méthode, technologie et expertise."
						centered={false}
						className="max-w-3xl mb-20"
					/>

					<Grid lg={3} gap={8} className="gap-12 lg:gap-8">
						{/* Levier 1: Méthode */}
						<Link to="/method" className="group flex flex-col h-full">
							<div className="relative p-10 bg-gray-50 rounded-3xl border border-gray-100 flex-grow transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
								<div className="mb-12 flex justify-between items-center">
									<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ocobo-yellow shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
										<Layers size={28} />
									</div>
									<ArrowRight
										className="text-gray-200 group-hover:text-ocobo-dark transition-colors"
										size={24}
									/>
								</div>
								<h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-yellow transition-colors">
									Notre méthode
								</h3>
								<p className="text-gray-400 font-display font-black text-xs uppercase tracking-widest mb-4">
									The Revenue Experience System™
								</p>
								<p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
									Une méthode vivante, opérée en sprints, conçue pour durer :
									alignement des équipes, stack utile, data fiable et équipes
									autonomes.
								</p>

								{/* Internal Colored Separator */}
								<div className="w-full h-1 bg-ocobo-yellow opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

								<div className="flex flex-wrap gap-2 h-[48px] content-start">
									{['Alignment', 'Technology', 'Performance', 'Enablement'].map(
										(tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-black uppercase tracking-wider text-gray-400"
											>
												{tag}
											</span>
										),
									)}
								</div>
							</div>
						</Link>

						{/* Levier 2: Technologie */}
						<Link to="/technology" className="group flex flex-col h-full">
							<div className="relative p-10 bg-gray-50 rounded-3xl border border-gray-100 flex-grow transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
								<div className="mb-12 flex justify-between items-center">
									<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ocobo-sky shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
										<Cpu size={28} />
									</div>
									<ArrowRight
										className="text-gray-200 group-hover:text-ocobo-dark transition-colors"
										size={24}
									/>
								</div>
								<h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-sky transition-colors">
									Notre technologie
								</h3>
								<p className="text-gray-400 font-display font-black text-xs uppercase tracking-widest mb-4">
									Infrastructure Unifiée
								</p>
								<p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
									Une stack rationalisée, co-conçue avec les leaders (HubSpot,
									Salesforce, Modjo...). Nous sommes des architectes
									agnostiques, chaque choix sert votre stratégie.
								</p>

								{/* Internal Colored Separator */}
								<div className="w-full h-1 bg-ocobo-sky opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

								<div className="h-[48px] flex flex-col justify-start gap-3">
									<div className="flex items-center gap-4 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
										<img
											src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg"
											className="h-4 w-auto"
											alt="Hubspot"
										/>
										<img
											src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
											className="h-4 w-auto"
											alt="Salesforce"
										/>
									</div>
									<div className="flex items-center grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
										<img
											src="https://dust.tt/static/logo_icon.png"
											className="h-4 w-auto"
											alt="Dust"
										/>
									</div>
								</div>
							</div>
						</Link>

						{/* Levier 3: Équipe */}
						<Link to="/studio" className="group flex flex-col h-full">
							<div className="relative p-10 bg-gray-50 rounded-3xl border border-gray-100 flex-grow transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
								<div className="mb-12 flex justify-between items-center">
									<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ocobo-mint shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
										<Users size={28} />
									</div>
									<ArrowRight
										className="text-gray-200 group-hover:text-ocobo-dark transition-colors"
										size={24}
									/>
								</div>
								<h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-mint transition-colors">
									Notre équipe
								</h3>
								<p className="text-gray-400 font-display font-black text-xs uppercase tracking-widest mb-4">
									Le RevOps Studio
								</p>
								<p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
									Votre squad d’experts seniors, issus des meilleures scale-ups
									: TheFork, Qonto, Payfit, Spendesk... Ils pensent comme une
									direction Revenue embarquée.
								</p>

								{/* Internal Colored Separator */}
								<div className="w-full h-1 bg-ocobo-mint opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

								<div className="h-[48px] flex flex-col justify-start">
									<div className="text-xs font-black text-gray-400 uppercase tracking-widest leading-relaxed">
										TheFork • Qonto • Payfit
									</div>
									<div className="text-xs font-black text-gray-400 uppercase tracking-widest leading-relaxed">
										Spendesk • Zenchef
									</div>
								</div>
							</div>
						</Link>
					</Grid>
				</div>
			</section>

			{/* BLOC METHODE */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader title="Notre méthode en 4 étapes" className="mb-16" />
					<Grid md={4} gap={6}>
						{[
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
						].map((step, i) => (
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

			{/* BLOC IMPLICATIONS CONCRETES */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16">
						<h2 className="font-display text-4xl font-bold mb-6">
							Ce que cela implique concrètement
						</h2>
						<p className="text-xl text-gray-600">
							Concrètement, voici ce que nous opérons avec vous :
						</p>
					</div>

					<Grid md={2} lg={3} gap={8}>
						{[
							{
								title: 'Diagnostiquer',
								color: 'coral',
								icon: <Search size={24} />,
								items: [
									'Analyse interactions Mkt/Sales/CS',
									'Cartographie process + CRM',
									'Analyse KPI, pipeline, variable',
								],
							},
							{
								title: 'Aligner',
								color: 'yellow',
								icon: <Layout size={24} />,
								items: [
									'ICP & buyer journey',
									'SLA Marketing ↔ Sales ↔ CS',
									'Organisation & rituels communs',
								],
							},
							{
								title: 'Outiller',
								color: 'sky',
								icon: <Cog size={24} />,
								items: [
									'Repenser / implémenter CRM',
									'Automatisations intelligentes',
									'Dashboards partagés',
								],
							},
							{
								title: 'Activer la performance',
								color: 'mint',
								icon: <BarChart3 size={24} />,
								items: [
									'Plans de variable',
									'Objectifs et KPIs',
									'Cockpit de pilotage',
								],
							},
							{
								title: "Intégrer l'IA",
								color: 'purple-500',
								icon: <Cpu size={24} />,
								items: [
									'Agents IA prospection',
									'Automatisation CRM after-call',
									'Scoring prédictif',
								],
							},
							{
								title: 'Former & Itérer',
								color: 'dark',
								icon: <GraduationCap size={24} />,
								items: [
									'Pipeline review, roleplay',
									'Playbooks et templates',
									'Roadmap d’itération',
								],
							},
						].map((block) => (
							<div
								key={block.title}
								className={`bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl group`}
							>
								<div
									className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${block.color === 'dark' ? 'bg-gray-100 text-ocobo-dark' : block.color === 'purple-500' ? 'bg-purple-50 text-purple-500' : `bg-ocobo-${block.color}-light text-ocobo-${block.color}`}`}
								>
									{block.icon}
								</div>
								<h3 className="font-display font-bold text-xl mb-4">
									{block.title}
								</h3>
								<ul className="space-y-3 text-sm text-gray-600">
									{block.items.map((item) => (
										<li key={item} className="flex items-center gap-3">
											<div
												className={`w-1.5 h-1.5 rounded-full shrink-0 ${block.color === 'dark' ? 'bg-ocobo-dark' : block.color === 'purple-500' ? 'bg-purple-500' : `bg-ocobo-${block.color}`}`}
											></div>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</Grid>
				</div>
			</section>

			{/* BLOC POURQUOI OCOBO */}
			<section className="py-24 bg-ocobo-dark text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title="Pourquoi choisir Ocobo"
						light
						className="mb-16"
					/>
					<Grid md={3} gap={12}>
						<div className="text-center">
							<div className="w-16 h-16 bg-ocobo-yellow rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
								<CheckCircle2 size={32} strokeWidth={4} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Profils seniors
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Aucun junior. Nous opérons comme une direction Revenue interne
								embarquée.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-ocobo-coral rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
								<CheckCircle2 size={32} strokeWidth={4} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Impact réel
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Pas de slides inutiles. Nous construisons, opérons et
								transmettons.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-ocobo-mint rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
								<CheckCircle2 size={32} strokeWidth={4} />
							</div>
							<h3 className="font-display text-xl font-bold mb-4">
								Système durable
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Nous laissons un système structuré et pilotable pour votre futur
								scale.
							</p>
						</div>
					</Grid>
				</div>
			</section>

			{/* CTA FINAL */}
			<section className="bg-ocobo-yellow py-24 text-ocobo-dark">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
						Prenez le contrôle de votre croissance.
					</h2>
					<div className="mb-10 space-y-2">
						<p className="text-lg md:text-xl font-medium opacity-90">
							30 minutes pour analyser votre machine revenue.
						</p>
						<p className="text-lg md:text-xl font-bold">Clarité garantie.</p>
					</div>
					<div className="flex justify-center">
						<Button variant="cta" size="xl" to="/contact">
							Prendre RDV
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
