import { css } from 'styled-system/css';
import {
	HeroSection,
	ManifestoSection,
	TeamSection,
	ValuesSection,
} from '../components/sections/about';
import { CtaSection } from '../components/sections/shared';

export function About() {
	return (
		<div className={css({ width: 'full' })}>
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
}

export default About;
