import type React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
	errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
	label,
	error = false,
	errorMessage,
	className = '',
	id,
	...props
}) => {
	const inputId = id || props.name;

	const baseStyles =
		'w-full px-4 py-4 bg-gray-50 border focus:bg-white focus:ring-0 outline-none transition-all';

	const borderStyles = error
		? 'border-red-500 focus:border-red-500'
		: 'border-gray-100 focus:border-ocobo-dark';

	return (
		<div>
			{label && (
				<label
					htmlFor={inputId}
					className="block text-xs font-bold uppercase text-gray-500 mb-2"
				>
					{label}
				</label>
			)}
			<input
				id={inputId}
				className={`${baseStyles} ${borderStyles} ${className}`}
				{...props}
			/>
			{error && errorMessage && (
				<p className="mt-1 text-xs text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};

export default Input;
