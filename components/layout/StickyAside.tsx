import type React from 'react';
import { createContext, useContext } from 'react';

type GapSize = 6 | 8 | 10 | 12 | 16;
type AsideWidth = '1/3' | '4/12' | '5/12';

interface StickyAsideProps {
	children: React.ReactNode;
	gap?: GapSize;
	asideWidth?: AsideWidth;
	className?: string;
}

interface SubComponentProps {
	children: React.ReactNode;
	className?: string;
}

interface StickyAsideContextValue {
	asideWidth: AsideWidth;
}

const StickyAsideContext = createContext<StickyAsideContextValue>({
	asideWidth: '1/3',
});

const gapClasses: Record<GapSize, string> = {
	6: 'gap-6',
	8: 'gap-8',
	10: 'gap-10',
	12: 'gap-12',
	16: 'gap-16',
};

const sidebarWidthClasses: Record<AsideWidth, string> = {
	'1/3': 'lg:w-1/3',
	'4/12': 'lg:w-4/12',
	'5/12': 'lg:w-5/12',
};

const contentWidthClasses: Record<AsideWidth, string> = {
	'1/3': 'lg:w-2/3',
	'4/12': 'lg:w-8/12',
	'5/12': 'lg:w-7/12',
};

const StickyAsideRoot: React.FC<StickyAsideProps> = ({
	children,
	gap = 12,
	asideWidth = '1/3',
	className = '',
}) => {
	const classes = ['flex flex-col lg:flex-row', gapClasses[gap], className]
		.filter(Boolean)
		.join(' ');

	return (
		<StickyAsideContext.Provider value={{ asideWidth }}>
			<div className={classes}>{children}</div>
		</StickyAsideContext.Provider>
	);
};

const Sidebar: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const { asideWidth } = useContext(StickyAsideContext);
	const classes = [
		'lg:sticky lg:top-24 lg:self-start',
		sidebarWidthClasses[asideWidth],
		className,
	]
		.filter(Boolean)
		.join(' ');
	return <aside className={classes}>{children}</aside>;
};

const Content: React.FC<SubComponentProps> = ({ children, className = '' }) => {
	const { asideWidth } = useContext(StickyAsideContext);
	const classes = [contentWidthClasses[asideWidth], className]
		.filter(Boolean)
		.join(' ');
	return <div className={classes}>{children}</div>;
};

const StickyAside = Object.assign(StickyAsideRoot, {
	Sidebar,
	Content,
});

export default StickyAside;
