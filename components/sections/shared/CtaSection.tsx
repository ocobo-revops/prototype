import type React from 'react';
import { Button } from '../../atoms';
import { Container, Section } from '../../organisms';

type CtaVariant = 'yellow' | 'sky' | 'dark';

interface CtaSectionProps {
	variant?: CtaVariant;
	title: string;
	subtitle?: string;
	ctaText: string;
	ctaLink: string;
}

const variantToSectionBg: Record<CtaVariant, 'yellow' | 'sky' | 'dark'> = {
	yellow: 'yellow',
	sky: 'sky',
	dark: 'dark',
};

const variantStyles: Record<
	CtaVariant,
	{ subtitleClass: string; buttonVariant: 'cta' | 'primary' }
> = {
	yellow: {
		subtitleClass: 'text-ocobo-dark/80',
		buttonVariant: 'cta',
	},
	sky: {
		subtitleClass: 'text-gray-600',
		buttonVariant: 'cta',
	},
	dark: {
		subtitleClass: 'text-white/80',
		buttonVariant: 'primary',
	},
};

const CtaSection: React.FC<CtaSectionProps> = ({
	variant = 'yellow',
	title,
	subtitle,
	ctaText,
	ctaLink,
}) => {
	const styles = variantStyles[variant];

	return (
		<Section bg={variantToSectionBg[variant]}>
			<Container narrow className="text-center">
				<h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
					{title}
				</h2>
				{subtitle && (
					<p
						className={`text-lg md:text-xl font-medium mb-10 ${styles.subtitleClass}`}
					>
						{subtitle}
					</p>
				)}
				<div className="flex justify-center">
					<Button variant={styles.buttonVariant} size="xl" to={ctaLink}>
						{ctaText}
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default CtaSection;
