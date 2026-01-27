import { css } from 'styled-system/css';
import { CtaSection } from '../components/sections';
import {
	HeroSection,
	ImplicationsSection,
	LeviersSection,
	MethodeSection,
	OffersDetailSection,
	SymptomsSection,
	TransitionSection,
	WhyOcoboSection,
} from '../components/sections/services';

export function Services() {
	return (
		<div className={css({ width: 'full' })}>
			<HeroSection />
			<SymptomsSection />
			<TransitionSection />
			<OffersDetailSection />
			<LeviersSection />
			<MethodeSection />
			<ImplicationsSection />
			<WhyOcoboSection />
			<CtaSection
				variant="yellow"
				title="Prenez le contrôle de votre croissance."
				subtitle="30 minutes pour analyser votre machine revenue. Clarité garantie."
				ctaText="Prendre RDV"
				ctaLink="/contact"
			/>
		</div>
	);
}

export default Services;
