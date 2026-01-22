import type React from 'react';

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

const gapClasses: Record<GapSize, string> = {
	6: 'gap-6 lg:gap-6',
	8: 'gap-8 lg:gap-8',
	10: 'gap-10 lg:gap-10',
	12: 'gap-12 lg:gap-12',
	16: 'gap-16 lg:gap-16',
};

const HeroSplitRoot: React.FC<HeroSplitProps> = ({
	children,
	gap = 12,
	className = '',
}) => {
	const classes = [
		'flex flex-col lg:flex-row lg:items-center',
		gapClasses[gap],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return <div className={classes}>{children}</div>;
};

const Content: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const classes = ['flex-1', className].filter(Boolean).join(' ');
	return <div className={classes}>{children}</div>;
};

const Media: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const classes = ['flex-1', className].filter(Boolean).join(' ');
	return <div className={classes}>{children}</div>;
};

const HeroSplit = Object.assign(HeroSplitRoot, {
	Content,
	Media,
});

export default HeroSplit;
