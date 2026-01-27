import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { ThemeColor } from '../types';

interface ServiceCardProps {
	title: string;
	description: string;
	theme: ThemeColor;
	icon?: React.ReactNode;
}

const themeStyles: Record<
	ThemeColor,
	{ bg: string; borderColor: string; hoverColor: string }
> = {
	[ThemeColor.YELLOW]: {
		bg: 'ocobo.yellow.light',
		borderColor: 'ocobo.yellow',
		hoverColor: 'ocobo.yellow',
	},
	[ThemeColor.MINT]: {
		bg: 'ocobo.mint.light',
		borderColor: 'ocobo.mint',
		hoverColor: 'ocobo.mint',
	},
	[ThemeColor.SKY]: {
		bg: 'ocobo.sky.light',
		borderColor: 'ocobo.sky',
		hoverColor: 'ocobo.sky',
	},
	[ThemeColor.CORAL]: {
		bg: 'ocobo.coral.light',
		borderColor: 'ocobo.coral',
		hoverColor: 'ocobo.coral',
	},
	[ThemeColor.DARK]: {
		bg: 'gray.100',
		borderColor: 'black',
		hoverColor: 'black',
	},
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	theme,
	icon,
}) => {
	const currentTheme = themeStyles[theme];

	return (
		<div
			className={`${flex({ direction: 'column', justify: 'space-between' })} ${css(
				{
					position: 'relative',
					p: '8',
					h: 'full',
					bg: currentTheme.bg,
					borderLeftWidth: '4px',
					borderLeftColor: currentTheme.borderColor,
					transition: 'all',
					transitionDuration: '300ms',
					_hover: { shadow: 'lg' },
				},
			)}`}
		>
			<div>
				<div className={css({ mb: '6' })}>
					{icon && (
						<div
							className={css({
								p: '3',
								bg: 'white',
								w: 'fit',
								rounded: 'lg',
								shadow: 'sm',
								color: 'ocobo.dark',
							})}
						>
							{icon}
						</div>
					)}
				</div>
				<h3
					className={css({
						fontFamily: 'display',
						fontSize: '2xl',
						fontWeight: 'bold',
						mb: '4',
						lineHeight: 'tight',
						color: 'ocobo.dark',
					})}
				>
					{title}
				</h3>
				<p
					className={css({
						color: 'gray.600',
						fontSize: 'sm',
						lineHeight: 'relaxed',
						mb: '6',
					})}
				>
					{description}
				</p>
			</div>

			<div className={css({ mt: 'auto' })}>
				<span
					className={`${flex({ gap: '0', align: 'center' })} ${css({
						display: 'inline-flex',
						fontSize: 'xs',
						fontWeight: 'bold',
						textTransform: 'uppercase',
						letterSpacing: 'wider',
						color: 'ocobo.dark',
						borderBottomWidth: '1px',
						borderBottomColor: 'transparent',
						transition: 'colors',
						_groupHover: { color: currentTheme.hoverColor },
					})}`}
				>
					En savoir plus{' '}
					<ArrowRight className={css({ ml: '2', w: '3', h: '3' })} />
				</span>
			</div>
		</div>
	);
};
