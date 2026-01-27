import type React from 'react';
import { css } from 'styled-system/css';

type GapSize = 6 | 8 | 10 | 12 | 16;

interface HeroSplitProps {
	children: React.ReactNode;
	gap?: GapSize;
	className?: string;
}

interface SubComponentProps {
	children: React.ReactNode;
	className?: string;
}

const HeroSplitRoot: React.FC<HeroSplitProps> = ({
	children,
	gap = 12,
	className = '',
}) => {
	return (
		<div
			className={`${css({
				display: 'flex',
				flexDir: { base: 'column', lg: 'row' },
				alignItems: { lg: 'center' },
				gap: { base: String(gap), lg: String(gap) },
			})} ${className}`}
		>
			{children}
		</div>
	);
};

const Content: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	return <div className={`${css({ flex: '1' })} ${className}`}>{children}</div>;
};

const Media: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	return <div className={`${css({ flex: '1' })} ${className}`}>{children}</div>;
};

const HeroSplit = Object.assign(HeroSplitRoot, {
	Content,
	Media,
});

export default HeroSplit;
