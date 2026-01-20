import type React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
	return (
		<div
			className={`bg-white border border-gray-100 rounded-2xl ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
