import type React from 'react';
import { vstack } from 'styled-system/patterns';
import { Text } from './text';

interface FormFieldProps {
	label: string;
	required?: boolean;
	children: React.ReactNode;
	className?: string;
}

export function FormField({
	label,
	required = false,
	children,
	className = '',
}: FormFieldProps) {
	return (
		<div
			className={`${vstack({ gap: '2', alignItems: 'stretch' })} ${className}`}
		>
			<Text as="label" variant="label" color="muted-light">
				{label}
				{required && '*'}
			</Text>
			{children}
		</div>
	);
}
