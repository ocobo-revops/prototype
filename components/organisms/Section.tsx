import type React from 'react';
import { type SectionVariantProps, section } from 'styled-system/recipes';

type SectionProps = SectionVariantProps & {
	children: React.ReactNode;
	className?: string;
};

export function Section({
	children,
	bg = 'white',
	padding = 'lg',
	className = '',
}: SectionProps) {
	const sectionClass = section({ bg, padding });
	return (
		<section
			className={className ? `${sectionClass} ${className}` : sectionClass}
		>
			{children}
		</section>
	);
}
