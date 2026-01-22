import type React from 'react';
import { ThemeColor } from '../../types';
import { NumberCircle } from '../atoms';

interface ServiceCardProps {
	number: number;
	title: string;
	description: string;
	color?: ThemeColor;
	className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	number,
	title,
	description,
	color = ThemeColor.DARK,
	className = '',
}) => {
	return (
		<div
			className={`bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-ocobo-dark ${className}`}
		>
			<NumberCircle number={number} variant={color} size="md" />
			<h3 className="font-display font-bold text-lg text-ocobo-dark mt-4 mb-2">
				{title}
			</h3>
			<p className="text-gray-600 text-sm">{description}</p>
		</div>
	);
};

export default ServiceCard;
