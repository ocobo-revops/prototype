import { ArrowRight } from 'lucide-react';
import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'outline' | 'white';
	size?: 'sm' | 'md' | 'lg';
	showArrow?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	showArrow = true,
	children,
	className = '',
	...props
}) => {
	const baseStyles =
		'rounded-full font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group';

	const variants = {
		primary:
			'bg-ocobo-dark text-white hover:bg-gray-800 border border-transparent',
		outline:
			'bg-transparent text-ocobo-dark border border-ocobo-dark hover:bg-ocobo-dark hover:text-white',
		white:
			'bg-white text-ocobo-dark hover:bg-gray-100 border border-transparent',
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

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
			{showArrow && (
				<ArrowRight
					className={`${iconSizes[size]} transition-transform duration-300 group-hover:translate-x-1`}
				/>
			)}
		</button>
	);
};

export default Button;
