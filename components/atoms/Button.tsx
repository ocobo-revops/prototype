import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import type { ButtonVariantProps } from 'styled-system/recipes';
import { button } from 'styled-system/recipes';

interface BaseButtonProps extends ButtonVariantProps {
	showArrow?: boolean;
	children: React.ReactNode;
	className?: string;
}

interface ButtonAsButtonProps
	extends BaseButtonProps,
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
	as?: 'button' | undefined;
	href?: undefined;
	to?: undefined;
}

interface ButtonAsAnchorProps
	extends BaseButtonProps,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
	as?: 'a';
	href: string;
	to?: undefined;
}

interface ButtonAsLinkProps
	extends BaseButtonProps,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'color'> {
	as?: 'link';
	to: string;
	href?: undefined;
}

type ButtonProps =
	| ButtonAsButtonProps
	| ButtonAsAnchorProps
	| ButtonAsLinkProps;

type SizeKey = 'sm' | 'md' | 'lg' | 'xl';

const iconSizes: Record<SizeKey, string> = {
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6',
};

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	showArrow = true,
	fullWidth = false,
	children,
	className = '',
	...props
}: ButtonProps) => {
	const recipeClasses = button({ variant, size, fullWidth });
	const classes = className ? `${recipeClasses} ${className}` : recipeClasses;

	// Ensure size is a valid key for icon lookup
	const iconSize =
		typeof size === 'string' && size in iconSizes ? (size as SizeKey) : 'md';
	const arrowIcon = showArrow && (
		<ArrowRight
			className={`${iconSizes[iconSize]} transition-transform duration-300`}
		/>
	);

	// Filter out component-specific props
	// biome-ignore lint/suspicious/noExplicitAny: polymorphic props require type assertion
	const { to, href, ...htmlProps } = props as any;

	if (to) {
		return (
			<Link to={to} className={classes} {...htmlProps}>
				{children}
				{arrowIcon}
			</Link>
		);
	}

	if (href) {
		return (
			<a href={href} className={classes} {...htmlProps}>
				{children}
				{arrowIcon}
			</a>
		);
	}

	return (
		<button className={classes} {...htmlProps}>
			{children}
			{arrowIcon}
		</button>
	);
};
