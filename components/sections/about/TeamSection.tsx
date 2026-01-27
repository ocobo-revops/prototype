import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';
import { ThemeColor } from '../../../types';
import { Button } from '../../atoms';
import { TeamMemberCard } from '../../molecules/TeamMemberCard';
import { Container, Section } from '../../organisms';

const IconSeparator = () => {
	return (
		<div
			className={`${center({ gap: { base: '10', md: '20' } })} ${css({
				pt: '16',
				pb: '0',
				bg: 'white',
			})}`}
		>
			{/* Left Star/Sparkle - Exactly like provided image */}
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				className={css({ color: 'ocobo.dark' })}
			>
				<title>Decorative illustration</title>
				<circle cx="24" cy="24" r="3.5" fill="currentColor" />
				{/* Horizontal & Vertical lines */}
				<line
					x1="24"
					y1="4"
					x2="24"
					y2="44"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<line
					x1="4"
					y1="24"
					x2="44"
					y2="24"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				{/* Diagonal lines */}
				<line
					x1="9.8"
					y1="9.8"
					x2="38.2"
					y2="38.2"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<line
					x1="38.2"
					y1="9.8"
					x2="9.8"
					y2="38.2"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
			</svg>

			{/* Smiley Face - Exactly like provided image */}
			<svg
				width="84"
				height="84"
				viewBox="0 0 84 84"
				fill="none"
				className={css({ color: 'ocobo.dark' })}
			>
				<title>Decorative illustration</title>
				<circle cx="42" cy="42" r="38" stroke="currentColor" strokeWidth="3" />
				{/* Eyes: Vertical Ovals */}
				<ellipse cx="32" cy="36" rx="4.5" ry="8" fill="currentColor" />
				<ellipse cx="52" cy="36" rx="4.5" ry="8" fill="currentColor" />
				{/* Smile Arc */}
				<path
					d="M26 55 C34 65, 50 65, 58 55"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				{/* Dimples/Terminal marks */}
				<line
					x1="24"
					y1="53"
					x2="27"
					y2="56"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<line
					x1="60"
					y1="53"
					x2="57"
					y2="56"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</svg>

			{/* Right Star/Sparkle - Exactly like provided image */}
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				className={css({ color: 'ocobo.dark' })}
			>
				<title>Decorative illustration</title>
				<circle cx="24" cy="24" r="3.5" fill="currentColor" />
				<line
					x1="24"
					y1="4"
					x2="24"
					y2="44"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<line
					x1="4"
					y1="24"
					x2="44"
					y2="24"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<line
					x1="9.8"
					y1="9.8"
					x2="38.2"
					y2="38.2"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
				<line
					x1="38.2"
					y1="9.8"
					x2="9.8"
					y2="38.2"
					stroke="currentColor"
					strokeWidth="2.5"
				/>
			</svg>
		</div>
	);
};

const TEAM_MEMBERS = [
	{
		name: 'Benjamin Boileux',
		role: 'Architecte RevOps & Associé',
		bio: '12+ ans en Ops, CRM, Product et Revenue Operations (TheFork, Tripadvisor, Yousign). Spécialiste des systèmes et du pilotage opérationnel.',
		linkedInUrl: '#',
		color: ThemeColor.YELLOW,
	},
	{
		name: 'Aude Cadiot',
		role: 'Architecte RevOps & Associée',
		bio: "Référence française du Revenue Operations (TheFork, Spendesk). Experte du customer journey, des organisations GTM, du scaling d'équipes RevOps.",
		linkedInUrl: '#',
		color: ThemeColor.CORAL,
	},
	{
		name: 'Corentin Guérin',
		role: 'Analyste & Stratège Revenue, Associé',
		bio: 'Finance, Deloitte, Business Ops (TheFork). Spécialiste du forecasting, de la performance, des rémunérations variables et du pricing.',
		linkedInUrl: '#',
		color: ThemeColor.SKY,
	},
];

export const TeamSection: React.FC = () => {
	return (
		<>
			<IconSeparator />
			<Section bg="white" className={css({ pt: '12', pb: '24' })}>
				<Container>
					<div
						className={css({
							textAlign: 'center',
							mb: '16',
							maxW: '3xl',
							mx: 'auto',
						})}
					>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: '4xl',
								fontWeight: 'bold',
								mb: '6',
							})}
						>
							L'équipe fondatrice
						</h2>
						<p
							className={css({
								fontSize: 'xl',
								fontWeight: 'medium',
								color: 'ocobo.dark',
								mb: '4',
							})}
						>
							Une équipe 100% senior. Issue des meilleures scale-ups. Construite
							pour l'impact.
						</p>
						<p className={css({ color: 'gray.600' })}>
							Nous ne sommes ni des juniors, ni des exécutants externes. Nous
							opérons comme une direction Revenue embarquée : exigeante,
							stratégique, opérationnelle.
						</p>
					</div>

					<div className={grid({ columns: { base: 1, md: 3 }, gap: '8' })}>
						{TEAM_MEMBERS.map((member) => (
							<TeamMemberCard
								key={member.name}
								name={member.name}
								role={member.role}
								bio={member.bio}
								linkedInUrl={member.linkedInUrl}
								color={member.color}
							/>
						))}
					</div>

					<div
						className={`${flex({ direction: 'column', align: 'center', gap: '8' })} ${css(
							{
								textAlign: 'center',
								mt: '12',
							},
						)}`}
					>
						<p className={css({ fontWeight: 'bold', fontSize: 'xl' })}>
							Trois parcours, une même conviction :{' '}
							<span className={css({ bg: 'ocobo.yellow.light', px: '2' })}>
								la croissance a besoin d'architectes, pas de techniciens.
							</span>
						</p>
						<Button variant="primary" size="lg" to="/studio">
							Rencontrez le reste de l'équipe
						</Button>
					</div>
				</Container>
			</Section>
		</>
	);
};
