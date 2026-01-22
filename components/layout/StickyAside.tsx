import React from 'react';

type GapSize = 6 | 8 | 10 | 12 | 16;
type AsideWidth = '1/3' | '5/12';
type StickyTop = 20 | 24 | 28 | 32;

interface StickyAsideProps {
	children: React.ReactNode;
	gap?: GapSize;
	asideWidth?: AsideWidth;
	stickyTop?: StickyTop;
	className?: string;
}

interface SidebarProps {
	children: React.ReactNode;
	className?: string;
}

interface ContentProps {
	children: React.ReactNode;
	className?: string;
}

const gapClasses: Record<GapSize, string> = {
	6: 'gap-6',
	8: 'gap-8',
	10: 'gap-10',
	12: 'gap-12',
	16: 'gap-16',
};

const sidebarWidthClasses: Record<AsideWidth, string> = {
	'1/3': 'lg:w-1/3',
	'5/12': 'lg:w-5/12',
};

const contentWidthClasses: Record<AsideWidth, string> = {
	'1/3': 'lg:w-2/3',
	'5/12': 'lg:w-7/12',
};

const stickyTopClasses: Record<StickyTop, string> = {
	20: 'lg:top-20',
	24: 'lg:top-24',
	28: 'lg:top-28',
	32: 'lg:top-32',
};

const StickyAsideRoot: React.FC<StickyAsideProps> = ({
	children,
	gap = 12,
	asideWidth = '1/3',
	stickyTop = 24,
	className = '',
}) => {
	const classes = ['flex flex-col lg:flex-row', gapClasses[gap], className]
		.filter(Boolean)
		.join(' ');

	// Clone children to inject width/stickyTop props
	const enhancedChildren = React.Children.map(children, (child) => {
		if (!React.isValidElement(child)) return child;
		if (child.type === Sidebar) {
			return React.cloneElement(child, {
				_asideWidth: asideWidth,
				_stickyTop: stickyTop,
			} as Partial<SidebarInternalProps>);
		}
		if (child.type === Content) {
			return React.cloneElement(child, {
				_asideWidth: asideWidth,
			} as Partial<ContentInternalProps>);
		}
		return child;
	});

	return <div className={classes}>{enhancedChildren}</div>;
};

interface SidebarInternalProps extends SidebarProps {
	_asideWidth?: AsideWidth;
	_stickyTop?: StickyTop;
}

const Sidebar: React.FC<SidebarInternalProps> = ({
	children,
	className = '',
	_asideWidth = '1/3',
	_stickyTop = 24,
}) => {
	const classes = [
		'shrink-0 lg:sticky lg:self-start',
		stickyTopClasses[_stickyTop],
		sidebarWidthClasses[_asideWidth],
		className,
	]
		.filter(Boolean)
		.join(' ');
	return <aside className={classes}>{children}</aside>;
};

interface ContentInternalProps extends ContentProps {
	_asideWidth?: AsideWidth;
}

const Content: React.FC<ContentInternalProps> = ({
	children,
	className = '',
	_asideWidth = '1/3',
}) => {
	const classes = [contentWidthClasses[_asideWidth], className]
		.filter(Boolean)
		.join(' ');
	return <div className={classes}>{children}</div>;
};

const StickyAside = Object.assign(StickyAsideRoot, {
	Sidebar,
	Content,
});

export default StickyAside;
