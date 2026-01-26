import type React from 'react';

type GapSize = 4 | 6 | 8 | 10 | 12;
type ColCount = 1 | 2 | 3 | 4 | 5 | 6;

interface GridProps {
	children: React.ReactNode;
	cols?: ColCount;
	md?: ColCount;
	lg?: ColCount;
	gap?: GapSize;
	className?: string;
}

const gapClasses: Record<GapSize, string> = {
	4: 'gap-4',
	6: 'gap-6',
	8: 'gap-8',
	10: 'gap-10',
	12: 'gap-12',
};

const colClasses: Record<ColCount, string> = {
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
};

const mdColClasses: Record<ColCount, string> = {
	1: 'md:grid-cols-1',
	2: 'md:grid-cols-2',
	3: 'md:grid-cols-3',
	4: 'md:grid-cols-4',
	5: 'md:grid-cols-5',
	6: 'md:grid-cols-6',
};

const lgColClasses: Record<ColCount, string> = {
	1: 'lg:grid-cols-1',
	2: 'lg:grid-cols-2',
	3: 'lg:grid-cols-3',
	4: 'lg:grid-cols-4',
	5: 'lg:grid-cols-5',
	6: 'lg:grid-cols-6',
};

export function Grid({
	children,
	cols = 1,
	md,
	lg,
	gap = 6,
	className = '',
}: GridProps) {
	const classes = [
		'grid',
		colClasses[cols],
		md && mdColClasses[md],
		lg && lgColClasses[lg],
		gapClasses[gap],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return <div className={classes}>{children}</div>;
}
