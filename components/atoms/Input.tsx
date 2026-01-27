import type React from 'react';
import { css } from 'styled-system/css';
import { input } from 'styled-system/recipes';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
	errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
	label,
	error = false,
	errorMessage,
	className = '',
	id,
	...props
}) => {
	const inputId = id || props.name;

	return (
		<div>
			{label && (
				<label
					htmlFor={inputId}
					className={css({
						display: 'block',
						fontSize: 'xs',
						fontWeight: 'bold',
						textTransform: 'uppercase',
						color: 'gray.500',
						mb: '2',
					})}
				>
					{label}
				</label>
			)}
			<input
				id={inputId}
				className={`${input({ error })} ${className}`}
				{...props}
			/>
			{error && errorMessage && (
				<p
					className={css({
						mt: '1',
						fontSize: 'xs',
						color: 'red.500',
					})}
				>
					{errorMessage}
				</p>
			)}
		</div>
	);
};
