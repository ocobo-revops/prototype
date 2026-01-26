import type React from 'react';
import { ThemeColor } from '../../../types';
import { Button } from '../../atoms';
import { Grid } from '../../layout/Grid';
import TeamMemberCard from '../../molecules/TeamMemberCard';
import { Container, Section } from '../../organisms';

const IconSeparator = () => {
	return (
		<div className="flex justify-center items-center gap-10 md:gap-20 pt-16 pb-0 bg-white">
			{/* Left Star/Sparkle - Exactly like provided image */}
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				className="text-ocobo-dark"
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
				className="text-ocobo-dark"
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
				className="text-ocobo-dark"
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

const TeamSection: React.FC = () => {
	return (
		<>
			<IconSeparator />
			<Section bg="white" className="pt-12 pb-24">
				<Container>
					<div className="text-center mb-16 max-w-3xl mx-auto">
						<h2 className="font-display text-4xl font-bold mb-6">
							L'équipe fondatrice
						</h2>
						<p className="text-xl font-medium text-ocobo-dark mb-4">
							Une équipe 100% senior. Issue des meilleures scale-ups. Construite
							pour l'impact.
						</p>
						<p className="text-gray-600">
							Nous ne sommes ni des juniors, ni des exécutants externes. Nous
							opérons comme une direction Revenue embarquée : exigeante,
							stratégique, opérationnelle.
						</p>
					</div>

					<Grid md={3} gap={8}>
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
					</Grid>

					<div className="text-center mt-12 flex flex-col items-center gap-8">
						<p className="font-bold text-xl">
							Trois parcours, une même conviction :{' '}
							<span className="bg-ocobo-yellow-light px-2">
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

export default TeamSection;
