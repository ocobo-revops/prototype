import type React from 'react';
import { css } from 'styled-system/css';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	/** Use narrower max-w-5xl instead of max-w-7xl */
	narrow?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className = '',
	narrow = false,
}) => {
	return (
		<div
			className={`${css({
				maxW: narrow ? '5xl' : '7xl',
				mx: 'auto',
				px: { base: '4', sm: '6', lg: '8' },
			})} ${className}`}
		>
			{children}
		</div>
	);
};
