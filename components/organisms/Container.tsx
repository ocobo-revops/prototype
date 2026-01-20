import type React from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	/** Use narrower max-w-5xl instead of max-w-7xl */
	narrow?: boolean;
}

const Container: React.FC<ContainerProps> = ({
	children,
	className = '',
	narrow = false,
}) => {
	const maxWidth = narrow ? 'max-w-5xl' : 'max-w-7xl';
	return (
		<div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
