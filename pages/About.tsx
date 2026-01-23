import type React from 'react';
import {
	HeroSection,
	ManifestoSection,
	TeamSection,
	ValuesSection,
} from '../components/sections/about';
import { CtaSection } from '../components/sections/shared';

const About: React.FC = () => {
	return (
		<div className="w-full">
			<HeroSection />
			<ManifestoSection />
			<TeamSection />
			<ValuesSection />
			<CtaSection
				variant="sky"
				title="Parlons de votre machine revenue."
				subtitle="30 minutes pour éclairer, diagnostiquer, orienter. Zéro détour. Zéro jargon. Rien que la vérité sur votre croissance et vos options."
				ctaText="Rencontrer un architecte RevOps"
				ctaLink="/contact"
			/>
		</div>
	);
};

export default About;
