import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex } from 'styled-system/patterns';

interface TestimonialCardProps {
	quote: string;
	authorName: string;
	authorRole: string;
	authorInitials?: string;
	ctaText?: string;
	ctaLink?: string;
	className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
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
			className={`${css({
				position: 'relative',
				py: '16',
				px: { base: '8', md: '16' },
				bg: 'white/5',
				rounded: '3xl',
				borderWidth: '1px',
				borderColor: 'white/10',
				shadow: '2xl',
				overflow: 'hidden',
				backdropFilter: 'blur(4px)',
			})} group ${className}`}
		>
			{/* Yellow quote mark */}
			<div
				className={css({
					position: 'absolute',
					top: '12',
					left: '10',
					color: 'ocobo.yellow/40',
					fontFamily: 'display',
					fontWeight: 'black',
					fontSize: '6xl',
					lineHeight: 'none',
					userSelect: 'none',
					pointerEvents: 'none',
					transform: 'translateY(-25%)',
				})}
			>
				"
			</div>

			<div className={css({ position: 'relative', zIndex: '10' })}>
				<p
					className={css({
						color: 'white',
						fontFamily: 'display',
						fontSize: { base: 'lg', md: '2xl' },
						fontWeight: 'medium',
						mb: '12',
						lineHeight: 'relaxed',
						maxW: '2xl',
						mx: { base: 'auto', md: '0' },
					})}
				>
					{quote}
				</p>

				{/* Multi-colour separator */}
				<div
					className={css({
						w: 'full',
						h: '1',
						bgGradient: 'to-r',
						gradientFrom: 'ocobo.yellow',
						gradientVia: 'ocobo.coral',
						gradientTo: 'ocobo.sky',
						opacity: '0.4',
						mb: '10',
					})}
				/>

				<div
					className={flex({
						direction: { base: 'column', md: 'row' },
						align: { md: 'center' },
						justify: 'space-between',
						gap: '8',
					})}
				>
					<div className={flex({ align: 'center', gap: '6' })}>
						<div
							className={`${center({
								w: '14',
								h: '14',
								bg: 'ocobo.yellow',
								rounded: '2xl',
								color: 'ocobo.dark',
								fontFamily: 'display',
								fontWeight: 'black',
								fontSize: 'xl',
								shadow: 'xl',
								transform: 'rotate(3deg)',
								transition: 'transform',
								transitionDuration: '500ms',
								_groupHover: { transform: 'rotate(0deg)' },
							})}`}
						>
							{initials}
						</div>
						<div className={flex({ direction: 'column' })}>
							<p
								className={css({
									color: 'white',
									fontWeight: 'black',
									fontSize: 'lg',
									letterSpacing: 'tight',
								})}
							>
								{authorName}
							</p>
							<p
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									color: 'ocobo.yellow',
									textTransform: 'uppercase',
									letterSpacing: '0.25em',
									opacity: '0.7',
								})}
							>
								{authorRole}
							</p>
						</div>
					</div>

					{ctaText && ctaLink && (
						<Link
							to={ctaLink}
							className={`${flex({
								align: 'center',
								gap: '4',
								color: 'white/40',
								fontFamily: 'display',
								fontWeight: 'black',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: '0.3em',
								transition: 'colors',
								transitionDuration: '300ms',
								_hover: { color: 'ocobo.yellow' },
							})} group/btn`}
						>
							{ctaText}
							<ArrowRight
								size={14}
								className={css({
									transition: 'transform',
									transitionDuration: '300ms',
									_groupHover: { transform: 'translateX(8px)' },
								})}
							/>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
