import { Award, ExternalLink, Zap } from 'lucide-react';
import { css } from 'styled-system/css';
import { center, flex, vstack } from 'styled-system/patterns';
import type { Partner } from '../../../data/partners-data';

interface PartnerCardProps {
	partner: Partner;
	animate: boolean;
}

export function PartnerCard({ partner, animate }: PartnerCardProps) {
	return (
		<div
			className={`${flex({ direction: 'column', align: 'stretch' })} ${css({
				bg: 'white',
				borderWidth: '1px',
				borderColor: 'gray.100',
				p: '8',
				transition: 'all',
				transitionDuration: '300ms',
				position: 'relative',
				overflow: 'hidden',
				rounded: 'xl',
				h: 'full',
				animation: animate ? 'fade-in-up-small' : 'none',
				opacity: animate ? 0 : 1,
				_hover: { shadow: 'xl', transform: 'translateY(-4px)' },
				'& .logo-img': {
					transition: 'all',
					transitionDuration: '500ms',
				},
				'&:hover .logo-img': {
					filter: 'grayscale(0)',
					opacity: 1,
				},
				'& .cat-badge': {
					transition: 'all',
				},
				'&:hover .cat-badge': {
					bg: 'ocobo.dark',
					color: 'white',
				},
				'& .tag': {
					transition: 'all',
				},
				'&:hover .tag': {
					borderColor: 'ocobo.dark/10',
					color: 'ocobo.dark',
				},
				'& .separator': {
					transition: 'opacity',
				},
				'&:hover .separator': {
					opacity: 1,
				},
				'& .cert-img': {
					transition: 'all',
					transitionDuration: '500ms',
				},
				'&:hover .cert-img': {
					filter: 'grayscale(0)',
				},
				'& .tech-label': {
					transition: 'colors',
				},
				'&:hover .tech-label': {
					color: 'ocobo.mint',
				},
				'& .tech-icon': {
					transition: 'opacity',
				},
				'&:hover .tech-icon': {
					opacity: 1,
				},
				'& .external-link': {
					transition: 'all',
					transitionDuration: '300ms',
				},
				'&:hover .external-link': {
					transform: 'translateX(4px)',
				},
			})}`}
		>
			<div
				className={`${flex({ justify: 'space-between', align: 'start' })} ${css(
					{
						mb: '8',
					},
				)}`}
			>
				<div
					className={`${center()} ${css({
						w: '16',
						h: '16',
						p: '3',
						bg: 'gray.50',
						rounded: 'xl',
						borderWidth: '1px',
						borderColor: 'transparent',
						shadow: 'inner',
						_groupHover: {
							bg: 'white',
							borderColor: 'gray.100',
							shadow: 'none',
						},
					})}`}
				>
					<img
						src={partner.logo}
						alt={partner.name}
						className={`logo-img ${css({
							maxW: 'full',
							maxH: 'full',
							objectFit: 'contain',
							filter: 'grayscale(100%)',
							opacity: 0.6,
						})}`}
					/>
				</div>
				<div
					className={flex({
						direction: 'column',
						align: 'end',
						gap: '1',
					})}
				>
					{partner.category.map((cat) => (
						<div
							key={cat}
							className={`cat-badge ${css({
								fontSize: 'xs',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								bg: 'gray.100',
								color: 'gray.400',
								px: '3',
								py: '1',
								rounded: 'md',
							})}`}
						>
							{cat === 'NO-CODE' ? 'No-Code & Automatisation' : cat}
						</div>
					))}
				</div>
			</div>

			<div
				className={`${vstack()} ${css({
					mb: '6',
					flexGrow: 1,
				})}`}
			>
				<h3
					className={css({
						fontFamily: 'display',
						fontSize: '2xl',
						fontWeight: 'black',
						color: 'ocobo.dark',
						mb: '4',
						letterSpacing: 'tight',
					})}
				>
					{partner.name}
				</h3>
				<div
					className={`${flex({ wrap: 'wrap', gap: '1.5' })} ${css({
						h: '48px',
						mb: '4',
						alignContent: 'start',
						overflow: 'hidden',
					})}`}
				>
					{partner.tags.map((tag) => (
						<span
							key={tag}
							className={`tag ${css({
								fontSize: 'xs',
								fontWeight: 'bold',
								bg: 'gray.50',
								color: 'gray.400',
								borderWidth: '1px',
								borderColor: 'gray.100',
								px: '2',
								py: '0.5',
								rounded: 'sm',
								whiteSpace: 'nowrap',
							})}`}
						>
							{tag}
						</span>
					))}
				</div>
				<p
					className={css({
						color: 'gray.500',
						fontSize: 'sm',
						lineHeight: 'relaxed',
						fontWeight: 'medium',
						minH: '4rem',
					})}
				>
					{partner.desc}
				</p>
			</div>

			{/* Horizontal Black Separator */}
			<div
				className={`separator ${css({
					w: 'full',
					h: '1',
					bg: 'ocobo.dark',
					opacity: 0.1,
					mb: '6',
					rounded: 'full',
				})}`}
			/>

			<div
				className={`${flex({ align: 'center', justify: 'space-between' })} ${css(
					{
						mt: 'auto',
						h: '12',
					},
				)}`}
			>
				<div className={css({ flex: 1 })}>
					{partner.certificationLogo ? (
						<div className={flex({ align: 'center', gap: '2' })}>
							<img
								src={partner.certificationLogo}
								alt={`${partner.name} Platinum`}
								className={`cert-img ${css({
									h: '10',
									w: 'auto',
									objectFit: 'contain',
									filter: 'grayscale(100%)',
								})}`}
							/>
						</div>
					) : partner.status === 'OFFICIAL' ? (
						<div
							className={`${flex({ align: 'center', gap: '1.5' })} ${css({
								fontSize: 'xs',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								color: 'ocobo.dark',
							})}`}
						>
							<Award size={12} className={css({ color: 'ocobo.yellow' })} />
							Partenaire Officiel
						</div>
					) : (
						<div
							className={`tech-label ${flex({ align: 'center', gap: '1.5' })} ${css(
								{
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									color: 'gray.400',
								},
							)}`}
						>
							<Zap size={12} className={`tech-icon ${css({ opacity: 0.5 })}`} />
							Maîtrise Technique
						</div>
					)}
				</div>

				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className={`external-link ${css({
						color: 'gray.300',
						p: '2',
						_hover: { color: 'ocobo.dark' },
					})}`}
				>
					<ExternalLink size={20} />
				</a>
			</div>
		</div>
	);
}
