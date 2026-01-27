import type React from 'react';
import { css } from 'styled-system/css';
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
	{ subtitleColor: string; buttonVariant: 'cta' | 'primary' }
> = {
	yellow: {
		subtitleColor: 'ocobo.dark/70',
		buttonVariant: 'cta',
	},
	sky: {
		subtitleColor: 'gray.600',
		buttonVariant: 'cta',
	},
	dark: {
		subtitleColor: 'white/80',
		buttonVariant: 'primary',
	},
};

export const CtaSection: React.FC<CtaSectionProps> = ({
	variant = 'yellow',
	title,
	subtitle,
	ctaText,
	ctaLink,
}) => {
	const styles = variantStyles[variant];

	return (
		<Section bg={variantToSectionBg[variant]} className={css({ py: '32' })}>
			<Container narrow className={css({ textAlign: 'center' })}>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: { base: '4xl', md: '5xl' },
						fontWeight: 'black',
						mb: '8',
						letterSpacing: 'tight',
					})}
				>
					{title}
				</h2>
				{subtitle && (
					<p
						className={css({
							fontSize: { base: 'lg', md: 'xl' },
							fontWeight: 'bold',
							mb: '12',
							color: styles.subtitleColor,
						})}
					>
						{subtitle}
					</p>
				)}
				<div className={css({ display: 'flex', justifyContent: 'center' })}>
					<Button variant={styles.buttonVariant} size="xl" to={ctaLink}>
						{ctaText}
					</Button>
				</div>
			</Container>
		</Section>
	);
};
