import type React from 'react';
import type { BadgeVariantProps } from 'styled-system/recipes';
import { badge } from 'styled-system/recipes';

interface BadgeProps extends BadgeVariantProps {
	children: React.ReactNode;
	className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
	variant,
	size,
	rounded,
	children,
	className = '',
}) => {
	const recipeClasses = badge({ variant, size, rounded });
	const classes = className ? `${recipeClasses} ${className}` : recipeClasses;

	return <span className={classes}>{children}</span>;
};
