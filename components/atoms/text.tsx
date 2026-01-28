import type React from 'react';
import type { TextVariantProps } from 'styled-system/recipes';
import { text } from 'styled-system/recipes';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';

interface TextProps extends TextVariantProps {
	as?: TextElement;
	children: React.ReactNode;
	className?: string;
	htmlFor?: string;
}

export function Text({
	as: Component = 'p',
	variant,
	color,
	children,
	className = '',
	htmlFor,
}: TextProps) {
	const recipeClasses = text({ variant, color });
	const classes = className ? `${recipeClasses} ${className}` : recipeClasses;

	return (
		<Component className={classes} htmlFor={htmlFor}>
			{children}
		</Component>
	);
}
