import { ChevronDown } from 'lucide-react';
import type React from 'react';
import type { ThemeColor } from '../../types';
import { Badge, Button } from '../atoms';

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

const HeroSection: React.FC<HeroSectionProps> = ({
	layout = 'centered',
	badge,
	title,
	subtitle,
	cta,
	illustration,
	showScrollIndicator = false,
	scrollIndicatorColor = 'text-gray-200',
	className = '',
}) => {
	const isCentered = layout === 'centered';

	const containerClasses = [
		'pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative',
		isCentered ? 'text-center' : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	const contentWrapperClasses = isCentered
		? 'max-w-4xl mx-auto'
		: 'flex flex-col lg:flex-row items-center gap-16 lg:gap-24';

	const textContentClasses = isCentered ? '' : 'lg:w-1/2';

	const illustrationClasses = isCentered
		? 'flex justify-center mt-10'
		: 'lg:w-1/2 flex justify-center lg:justify-end items-center';

	return (
		<section className={containerClasses}>
			<div className={contentWrapperClasses}>
				{/* Text content */}
				<div className={textContentClasses}>
					{badge && (
						<Badge variant={badge.variant || 'yellow'} className="mb-10">
							{badge.text}
						</Badge>
					)}

					<h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
						{title}
					</h1>

					{subtitle && (
						<p
							className={[
								'text-xl text-gray-700 leading-relaxed font-medium',
								isCentered ? 'max-w-2xl mx-auto mb-8' : 'max-w-xl mb-12',
							].join(' ')}
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
					<div className={illustrationClasses}>{illustration}</div>
				)}
			</div>

			{/* Illustration (for centered layout, below content) */}
			{isCentered && illustration && (
				<div className={illustrationClasses}>{illustration}</div>
			)}

			{/* Scroll indicator */}
			{showScrollIndicator && (
				<div className="mt-16 flex justify-center w-full animate-bounce-slow">
					<ChevronDown
						className={scrollIndicatorColor}
						size={24}
						strokeWidth={1.5}
					/>
				</div>
			)}
		</section>
	);
};

export default HeroSection;
