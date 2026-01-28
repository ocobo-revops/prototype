import { Award, ExternalLink, Zap } from 'lucide-react';
import type React from 'react';
import { createContext, useContext } from 'react';
import { css } from 'styled-system/css';
import { center, flex, vstack } from 'styled-system/patterns';
import {
	type PartnerCardVariantProps,
	partnerCard,
} from 'styled-system/recipes';
import type { Partner } from '../../../data/partners-data';

// ===== CONTEXT =====

interface PartnerCardContextValue {
	animate: boolean;
}

const PartnerCardContext = createContext<PartnerCardContextValue | null>(null);

function _usePartnerCardContext() {
	const ctx = useContext(PartnerCardContext);
	if (!ctx)
		throw new Error(
			'PartnerCard compound components must be used within PartnerCard',
		);
	return ctx;
}

// ===== ROOT =====

interface PartnerCardRootProps extends PartnerCardVariantProps {
	children: React.ReactNode;
	className?: string;
}

function PartnerCardRoot({
	animate = false,
	children,
	className = '',
}: PartnerCardRootProps) {
	const recipeClasses = partnerCard({ animate });
	const classes = className ? `${recipeClasses} ${className}` : recipeClasses;

	return (
		<PartnerCardContext.Provider value={{ animate }}>
			<div className={classes}>{children}</div>
		</PartnerCardContext.Provider>
	);
}

// ===== HEADER =====

interface HeaderProps {
	logo: string;
	name: string;
	categories: string[];
}

function Header({ logo, name, categories }: HeaderProps) {
	return (
		<div
			className={`${flex({ justify: 'space-between', align: 'start' })} ${css({ mb: '8' })}`}
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
				})}`}
			>
				<img
					src={logo}
					alt={name}
					className={`logo-img ${css({
						maxW: 'full',
						maxH: 'full',
						objectFit: 'contain',
						filter: 'grayscale(100%)',
						opacity: 0.6,
					})}`}
				/>
			</div>
			<div className={flex({ direction: 'column', align: 'end', gap: '1' })}>
				{categories.map((cat) => (
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
	);
}

// ===== BODY =====

interface BodyProps {
	name: string;
	tags: string[];
	description: string;
}

function Body({ name, tags, description }: BodyProps) {
	return (
		<div className={`${vstack()} ${css({ mb: '6', flexGrow: 1 })}`}>
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
				{name}
			</h3>
			<div
				className={`${flex({ wrap: 'wrap', gap: '1.5' })} ${css({
					h: '48px',
					mb: '4',
					alignContent: 'start',
					overflow: 'hidden',
				})}`}
			>
				{tags.map((tag) => (
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
				{description}
			</p>
		</div>
	);
}

// ===== SEPARATOR =====

function Separator() {
	return (
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
	);
}

// ===== FOOTER =====

interface FooterProps {
	certificationLogo?: string;
	name: string;
	status: string;
}

function Footer({ certificationLogo, name, status }: FooterProps) {
	return (
		<div
			className={`${flex({ align: 'center', justify: 'space-between' })} ${css({
				mt: 'auto',
				h: '12',
			})}`}
		>
			<div className={css({ flex: 1 })}>
				{certificationLogo ? (
					<div className={flex({ align: 'center', gap: '2' })}>
						<img
							src={certificationLogo}
							alt={`${name} Platinum`}
							className={`cert-img ${css({
								h: '10',
								w: 'auto',
								objectFit: 'contain',
								filter: 'grayscale(100%)',
							})}`}
						/>
					</div>
				) : status === 'OFFICIAL' ? (
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
	);
}

// ===== COMPOUND EXPORT =====

export const PartnerCard = Object.assign(PartnerCardRoot, {
	Header,
	Body,
	Separator,
	Footer,
});

// ===== CONVENIENCE COMPONENT =====

interface PartnerCardFromDataProps {
	partner: Partner;
	animate?: boolean;
}

export function PartnerCardFromData({
	partner,
	animate = false,
}: PartnerCardFromDataProps) {
	return (
		<PartnerCard animate={animate}>
			<PartnerCard.Header
				logo={partner.logo}
				name={partner.name}
				categories={partner.category}
			/>
			<PartnerCard.Body
				name={partner.name}
				tags={partner.tags}
				description={partner.desc}
			/>
			<PartnerCard.Separator />
			<PartnerCard.Footer
				certificationLogo={partner.certificationLogo}
				name={partner.name}
				status={partner.status}
			/>
		</PartnerCard>
	);
}
