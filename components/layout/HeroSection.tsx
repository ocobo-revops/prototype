import { ChevronDown } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex } from 'styled-system/patterns';
import type { ThemeColor } from '../../types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

type LayoutVariant = 'centered' | 'split';

interface BadgeConfig {
	text: string;
	variant?: ThemeColor;
}

interface CtaConfig {
	text: string;
	to: string;
	variant?: 'primary' | 'outline' | 'white';
	className?: string;
}

interface HeroSectionProps {
	layout?: LayoutVariant;
	badge?: BadgeConfig;
	title: React.ReactNode;
	subtitle?: React.ReactNode;
	cta?: CtaConfig;
	illustration?: React.ReactNode;
	showScrollIndicator?: boolean;
	scrollIndicatorColor?: string;
	className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
	layout = 'centered',
	badge,
	title,
	subtitle,
	cta,
	illustration,
	showScrollIndicator = false,
	scrollIndicatorColor = 'gray.200',
	className = '',
}) => {
	const isCentered = layout === 'centered';

	return (
		<section
			className={`${css({
				pt: '40',
				pb: '16',
				maxW: '7xl',
				mx: 'auto',
				px: { base: '4', sm: '6', lg: '8' },
				position: 'relative',
				textAlign: isCentered ? 'center' : 'left',
			})} ${className}`}
		>
			<div
				className={`${isCentered ? css({ maxW: '4xl', mx: 'auto' }) : flex({ direction: { base: 'column', lg: 'row' }, align: 'center', gap: { base: '16', lg: '24' } })}`}
			>
				{/* Text content */}
				<div className={css(isCentered ? {} : { w: { lg: '1/2' } })}>
					{badge && (
						<Badge
							variant={badge.variant || 'yellow'}
							className={css({ mb: '10' })}
						>
							{badge.text}
						</Badge>
					)}

					<h1
						className={css({
							fontFamily: 'display',
							fontSize: { base: '5xl', md: '6xl' },
							fontWeight: 'bold',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '0.95',
							letterSpacing: 'tight',
						})}
					>
						{title}
					</h1>

					{subtitle && (
						<p
							className={css({
								fontSize: 'xl',
								color: 'gray.700',
								lineHeight: 'relaxed',
								fontWeight: 'medium',
								maxW: isCentered ? '2xl' : 'xl',
								mx: isCentered ? 'auto' : '0',
								mb: isCentered ? '8' : '12',
							})}
						>
							{subtitle}
						</p>
					)}

					{cta && (
						<Button
							variant={cta.variant || 'primary'}
							to={cta.to}
							className={cta.className}
						>
							{cta.text}
						</Button>
					)}
				</div>

				{/* Illustration (for split layout, positioned in flex) */}
				{!isCentered && illustration && (
					<div
						className={`${flex({ justify: { base: 'center', lg: 'flex-end' }, align: 'center' })} ${css({ w: { lg: '1/2' } })}`}
					>
						{illustration}
					</div>
				)}
			</div>

			{/* Illustration (for centered layout, below content) */}
			{isCentered && illustration && (
				<div className={`${center()} ${css({ mt: '10' })}`}>{illustration}</div>
			)}

			{/* Scroll indicator */}
			{showScrollIndicator && (
				<div
					className={`${center()} ${css({ mt: '16', w: 'full', animation: 'bounce-slow' })}`}
				>
					<ChevronDown
						className={css({ color: scrollIndicatorColor })}
						size={24}
						strokeWidth={1.5}
					/>
				</div>
			)}
		</section>
	);
};
