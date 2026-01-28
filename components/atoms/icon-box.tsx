import type React from 'react';
import type { IconBoxVariantProps } from 'styled-system/recipes';
import { iconBox } from 'styled-system/recipes';

interface IconBoxProps extends IconBoxVariantProps {
	children: React.ReactNode;
	className?: string;
}

export function IconBox({
	size,
	variant,
	color,
	children,
	className = '',
}: IconBoxProps) {
	const recipeClasses = iconBox({ size, variant, color });
	const classes = className ? `${recipeClasses} ${className}` : recipeClasses;

	return <div className={classes}>{children}</div>;
}
