import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';

interface TestimonialCardProps {
	quote: string;
	authorName: string;
	authorRole: string;
	authorInitials?: string;
	ctaText?: string;
	ctaLink?: string;
	className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	quote,
	authorName,
	authorRole,
	authorInitials,
	ctaText,
	ctaLink,
	className = '',
}) => {
	const initials =
		authorInitials ||
		authorName
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase();

	return (
		<div
			className={`relative py-16 px-8 md:px-16 bg-white/5 rounded-6xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm group/card ${className}`}
		>
			{/* Yellow quote mark */}
			<div className="absolute top-12 left-10 text-ocobo-yellow/40 font-display font-black text-9xl leading-none select-none pointer-events-none transform -translate-y-1/4">
				"
			</div>

			<div className="relative z-10">
				<p className="text-white font-display text-lg md:text-2xl font-medium mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0">
					{quote}
				</p>

				{/* Multi-colour separator */}
				<div className="w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky opacity-40 mb-10" />

				<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
					<div className="flex items-center gap-6">
						<div className="w-14 h-14 bg-ocobo-yellow rounded-2xl flex items-center justify-center text-ocobo-dark font-display font-black text-xl shadow-xl transform rotate-3 group-hover/card:rotate-0 transition-transform duration-500">
							{initials}
						</div>
						<div className="flex flex-col">
							<p className="text-white font-black text-lg tracking-tight">
								{authorName}
							</p>
							<p className="text-2xs font-black text-ocobo-yellow uppercase tracking-[0.25em] opacity-70">
								{authorRole}
							</p>
						</div>
					</div>

					{ctaText && ctaLink && (
						<Link
							to={ctaLink}
							className="group/btn flex items-center gap-4 text-white/40 hover:text-ocobo-yellow transition-colors font-display font-black text-2xs uppercase tracking-[0.3em]"
						>
							{ctaText}
							<ArrowRight
								size={14}
								className="group-hover/btn:translate-x-2 transition-transform"
							/>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
