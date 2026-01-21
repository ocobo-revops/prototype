import type React from 'react';

type SectionBg =
	| 'white'
	| 'gray'
	| 'dark'
	| 'yellow'
	| 'sky'
	| 'mint'
	| 'coral';

interface SectionProps {
	children: React.ReactNode;
	bg?: SectionBg;
	className?: string;
	/** Vertical padding - default py-24 */
	padding?: 'sm' | 'md' | 'lg';
}

const bgClasses: Record<SectionBg, string> = {
	white: 'bg-white',
	gray: 'bg-gray-50',
	dark: 'bg-ocobo-dark text-white',
	yellow: 'bg-ocobo-yellow text-ocobo-dark',
	sky: 'bg-ocobo-sky-light',
	mint: 'bg-ocobo-mint-light',
	coral: 'bg-ocobo-coral-light',
};

const paddingClasses = {
	sm: 'py-12 md:py-16',
	md: 'py-16 md:py-24',
	lg: 'py-24',
};

const Section: React.FC<SectionProps> = ({
	children,
	bg = 'white',
	className = '',
	padding = 'lg',
}) => {
	return (
		<section
			className={`${bgClasses[bg]} ${paddingClasses[padding]} ${className}`}
		>
			{children}
		</section>
	);
};

export default Section;
