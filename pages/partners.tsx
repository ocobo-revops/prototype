import { css } from 'styled-system/css';
import { CtaSection } from '../components/sections/partners/cta-section';
import { EcosystemSection } from '../components/sections/partners/ecosystem-section';
import { HeroSection } from '../components/sections/partners/hero-section';
import { PartnerFormSection } from '../components/sections/partners/partner-form';
import { PhilosophySection } from '../components/sections/partners/philosophy-section';

export function Partners() {
	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			<HeroSection />
			<PhilosophySection />
			<EcosystemSection />
			<PartnerFormSection />
			<CtaSection />
		</div>
	);
}
