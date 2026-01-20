import type React from 'react';
import type { ThemeColor } from '../../types';
import { Badge } from '../atoms';

interface SectionHeaderProps {
	badge?: string;
	badgeVariant?: ThemeColor | 'gray';
	title: string;
	subtitle?: string;
	centered?: boolean;
	className?: string;
	/** Light mode (white text) for dark backgrounds */
	light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	badge,
	badgeVariant = 'yellow',
	title,
	subtitle,
	centered = true,
	className = '',
	light = false,
}) => {
	const alignmentClasses = centered ? 'text-center' : '';
	const titleColour = light ? 'text-white' : 'text-ocobo-dark';
	const subtitleColour = light ? 'text-gray-300' : 'text-gray-600';

	return (
		<div className={`${alignmentClasses} ${className}`}>
			{badge && (
				<Badge variant={badgeVariant} className="mb-8">
					{badge}
				</Badge>
			)}
			<h2
				className={`font-display text-3xl md:text-5xl font-bold ${titleColour} mb-6 leading-tight`}
			>
				{title}
			</h2>
			{subtitle && (
				<p className={`text-lg md:text-xl ${subtitleColour} font-medium`}>
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default SectionHeader;
