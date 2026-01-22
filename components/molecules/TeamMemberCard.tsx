import { Linkedin } from 'lucide-react';
import type React from 'react';
import { ThemeColor } from '../../types';

interface TeamMemberCardProps {
	name: string;
	role: string;
	bio: string;
	imageSrc?: string;
	linkedInUrl?: string;
	color?: ThemeColor;
	className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
	name,
	role,
	bio,
	imageSrc = 'https://placehold.co/200x200/F3F4F6/F3F4F6',
	linkedInUrl,
	color = ThemeColor.YELLOW,
	className = '',
}) => {
	const borderColorStyles: Record<ThemeColor, string> = {
		[ThemeColor.YELLOW]: 'border-ocobo-yellow',
		[ThemeColor.MINT]: 'border-ocobo-mint',
		[ThemeColor.SKY]: 'border-ocobo-sky',
		[ThemeColor.CORAL]: 'border-ocobo-coral',
		[ThemeColor.DARK]: 'border-ocobo-dark',
	};

	return (
		<div
			className={`bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center ${className}`}
		>
			<div
				className={`w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 ${borderColorStyles[color]}`}
			>
				<img src={imageSrc} alt={name} className="w-full h-full object-cover" />
			</div>
			<h3 className="font-display text-2xl font-bold text-ocobo-dark mb-1">
				{name}
			</h3>
			<p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
				{role}
			</p>
			<p className="text-gray-600 text-sm mb-6 leading-relaxed">{bio}</p>
			{linkedInUrl && (
				<a
					href={linkedInUrl}
					className="inline-block text-gray-400 hover:text-ocobo-dark"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin size={20} />
				</a>
			)}
		</div>
	);
};

export default TeamMemberCard;
