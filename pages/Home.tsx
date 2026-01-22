import type React from 'react';
import {
	ComparatifSection,
	HeroSection,
	InterventionsSection,
	PainPointSection,
	SocialProofSection,
	StackSection,
	TransformationSection,
} from '../components/sections/home';
import { CtaSection } from '../components/sections/shared';

const Home: React.FC = () => {
	return (
		<div className="w-full">
			<HeroSection />
			<SocialProofSection />
			<PainPointSection />
			<TransformationSection />
			<InterventionsSection />
			<ComparatifSection />
			<StackSection />
			<CtaSection
				variant="yellow"
				title="Rencontrer un architecte RevOps"
				subtitle="En 30 minutes, nous évaluons la maturité de votre machine revenue. Vous repartez avec plus de clarté."
				ctaText="Prendre RDV"
				ctaLink="/contact"
			/>
		</div>
	);
};

export default Home;
