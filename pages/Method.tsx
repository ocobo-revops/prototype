import { css } from 'styled-system/css';
import {
	HeroSection,
	PillarsSection,
	ScopeSection,
} from '../components/sections/method';
import { CtaSection } from '../components/sections/shared';

export function Method() {
	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			<HeroSection />
			<PillarsSection />
			<ScopeSection />
			<CtaSection
				variant="yellow"
				title="Prêt à sortir du bricolage ?"
				subtitle="Notre méthode est le fruit de 10 ans d'expérience dans les scale-ups les plus performantes (TheFork, PayFit, Spendesk)."
				ctaText="Bâtir mon architecture"
				ctaLink="/contact"
			/>
		</div>
	);
}

export default Method;
