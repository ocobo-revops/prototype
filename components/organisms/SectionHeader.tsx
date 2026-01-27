import type React from 'react';
import { css } from 'styled-system/css';
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

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	badge,
	badgeVariant = 'yellow',
	title,
	subtitle,
	centered = true,
	className = '',
	light = false,
}) => {
	const titleColour = light ? 'white' : 'ocobo.dark';
	const subtitleColour = light ? 'gray.300' : 'gray.600';

	return (
		<div
			className={`${css({
				textAlign: centered ? 'center' : 'left',
			})} ${className}`}
		>
			{badge && (
				<Badge variant={badgeVariant} className={css({ mb: '8' })}>
					{badge}
				</Badge>
			)}
			<h2
				className={css({
					fontFamily: 'display',
					fontSize: { base: '3xl', md: '5xl' },
					fontWeight: 'bold',
					color: titleColour,
					mb: '6',
					lineHeight: 'tight',
				})}
			>
				{title}
			</h2>
			{subtitle && (
				<p
					className={css({
						fontSize: { base: 'lg', md: 'xl' },
						color: subtitleColour,
						fontWeight: 'medium',
					})}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
};
