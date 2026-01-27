import type React from 'react';
import { css } from 'styled-system/css';
import { ThemeColor } from '../../types';
import NumberCircle from '../atoms/NumberCircle';

interface ServiceCardProps {
	number: number;
	title: string;
	description: string;
	color?: ThemeColor;
	className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
	number,
	title,
	description,
	color = ThemeColor.DARK,
	className = '',
}) => {
	return (
		<div
			className={`${css({
				bg: 'white',
				borderWidth: '1px',
				borderColor: 'gray.100',
				rounded: '2xl',
				p: '6',
				transition: 'all',
				transitionDuration: '300ms',
				_hover: { borderColor: 'ocobo.dark' },
			})} ${className}`}
		>
			<NumberCircle number={number} variant={color} size="md" />
			<h3
				className={css({
					fontFamily: 'display',
					fontWeight: 'bold',
					fontSize: 'lg',
					color: 'ocobo.dark',
					mt: '4',
					mb: '2',
				})}
			>
				{title}
			</h3>
			<p className={css({ color: 'gray.600', fontSize: 'sm' })}>
				{description}
			</p>
		</div>
	);
};
