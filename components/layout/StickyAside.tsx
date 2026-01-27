import React from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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

const sidebarWidths: Record<AsideWidth, string> = {
	'1/3': '1/3',
	'5/12': '5/12',
};

const contentWidths: Record<AsideWidth, string> = {
	'1/3': '2/3',
	'5/12': '7/12',
};

const StickyAsideRoot: React.FC<StickyAsideProps> = ({
	children,
	gap = 12,
	asideWidth = '1/3',
	stickyTop = 24,
	className = '',
}) => {
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

	return (
		<div
			className={`${flex({
				direction: { base: 'column', lg: 'row' },
				gap: String(gap),
			})} ${className}`}
		>
			{enhancedChildren}
		</div>
	);
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
	return (
		<aside
			className={`${css({
				flexShrink: 0,
				position: { lg: 'sticky' },
				alignSelf: { lg: 'flex-start' },
				top: { lg: String(_stickyTop) },
				w: { lg: sidebarWidths[_asideWidth] },
			})} ${className}`}
		>
			{children}
		</aside>
	);
};

interface ContentInternalProps extends ContentProps {
	_asideWidth?: AsideWidth;
}

const Content: React.FC<ContentInternalProps> = ({
	children,
	className = '',
	_asideWidth = '1/3',
}) => {
	return (
		<div
			className={`${css({
				w: { lg: contentWidths[_asideWidth] },
			})} ${className}`}
		>
			{children}
		</div>
	);
};

const StickyAside = Object.assign(StickyAsideRoot, {
	Sidebar,
	Content,
});

export default StickyAside;
