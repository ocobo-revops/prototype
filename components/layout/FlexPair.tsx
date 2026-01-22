import type React from 'react';

type GapSize = 2 | 3 | 4 | 5 | 6 | 8;
type AlignItems = 'start' | 'center' | 'end';

interface FlexPairProps {
	children: React.ReactNode;
	gap?: GapSize;
	align?: AlignItems;
	className?: string;
}

interface SubComponentProps {
	children: React.ReactNode;
	className?: string;
}

const gapClasses: Record<GapSize, string> = {
	2: 'gap-2',
	3: 'gap-3',
	4: 'gap-4',
	5: 'gap-5',
	6: 'gap-6',
	8: 'gap-8',
};

const alignClasses: Record<AlignItems, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
};

const FlexPairRoot: React.FC<FlexPairProps> = ({
	children,
	gap = 4,
	align = 'start',
	className = '',
}) => {
	const classes = ['flex', gapClasses[gap], alignClasses[align], className]
		.filter(Boolean)
		.join(' ');

	return <div className={classes}>{children}</div>;
};

const Icon: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const classes = ['shrink-0', className].filter(Boolean).join(' ');
	return <div className={classes}>{children}</div>;
};

const Content: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const classes = ['flex-1 min-w-0', className].filter(Boolean).join(' ');
	return <div className={classes}>{children}</div>;
};

const FlexPair = Object.assign(FlexPairRoot, {
	Icon,
	Content,
});

export default FlexPair;
