import type React from 'react';
import { css } from 'styled-system/css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
	children,
	className = '',
	...props
}) => {
	return (
		<div
			className={`${css({
				bg: 'white',
				borderWidth: '1px',
				borderColor: 'gray.100',
				rounded: '2xl',
			})} ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};
