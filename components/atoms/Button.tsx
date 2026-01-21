import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';

interface BaseButtonProps {
	variant?: 'primary' | 'outline' | 'white';
	size?: 'sm' | 'md' | 'lg';
	showArrow?: boolean;
	children: React.ReactNode;
	className?: string;
}

interface ButtonAsButtonProps
	extends BaseButtonProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | undefined;
	href?: undefined;
	to?: undefined;
}

interface ButtonAsAnchorProps
	extends BaseButtonProps,
		React.AnchorHTMLAttributes<HTMLAnchorElement> {
	as?: 'a';
	href: string;
	to?: undefined;
}

interface ButtonAsLinkProps
	extends BaseButtonProps,
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	as?: 'link';
	to: string;
	href?: undefined;
}

type ButtonProps =
	| ButtonAsButtonProps
	| ButtonAsAnchorProps
	| ButtonAsLinkProps;

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	showArrow = true,
	children,
	className = '',
	...props
}: ButtonProps) => {
	const baseStyles =
		'rounded-full font-semibold tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 hover:[&>svg]:translate-x-1';

	const variants = {
		primary:
			'bg-ocobo-dark text-white hover:bg-gray focus-visible:outline-white border border-transparent',
		outline:
			'bg-transparent text-ocobo-dark border border-ocobo-dark hover:bg-ocobo-dark hover:text-white focus-visible:outline-ocobo-dark',
		white:
			'bg-white text-ocobo-dark hover:bg-gray-100 focus-visible:outline-ocobo-dark border border-transparent',
	};

	const sizes = {
		sm: 'px-4 py-2 text-xs',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base',
	};

	const iconSizes = {
		sm: 'w-3 h-3',
		md: 'w-4 h-4',
		lg: 'w-5 h-5',
	};

	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

	const arrowIcon = showArrow && (
		<ArrowRight
			className={`${iconSizes[size]} transition-transform duration-300`}
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

export default Button;
