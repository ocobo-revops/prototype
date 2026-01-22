import type React from 'react';
import { ClientMarquee } from '../../layout/ClientMarquee';
import { TestimonialCard } from '../../molecules';
import { Container, Section } from '../../organisms';

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

const SocialProofSection: React.FC = () => {
	return (
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
	);
};

export default SocialProofSection;
