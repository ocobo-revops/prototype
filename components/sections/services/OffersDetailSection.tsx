import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import { SectionHeader } from '../../organisms';

const OffersDetailSection: React.FC = () => {
	return (
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
								Immersion, cadrage et plan d'action RevOps
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
												Audit complet de l'infrastructure existante et des flux
												de travail.
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
												Accompagnement individuel des responsables pour piloter
												l'excellence opérationnelle.
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
	);
};

export default OffersDetailSection;
