import { ArrowRight, Cpu, Layers, Users } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import Grid from '../../layout/Grid';
import { SectionHeader } from '../../organisms';

const LeviersSection: React.FC = () => {
	return (
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
								Salesforce, Modjo...). Nous sommes des architectes agnostiques,
								chaque choix sert votre stratégie.
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
								Votre squad d'experts seniors, issus des meilleures scale-ups :
								TheFork, Qonto, Payfit, Spendesk... Ils pensent comme une
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
	);
};

export default LeviersSection;
