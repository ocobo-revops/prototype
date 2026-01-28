import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { flex, grid } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

type InterventionColor = 'yellow' | 'sky' | 'mint';

interface Intervention {
	badge: string;
	badgeColor: InterventionColor;
	subtitle: string;
	title: string;
	description: string;
}

const INTERVENTIONS: Intervention[] = [
	{
		badge: 'DESIGN',
		badgeColor: 'yellow',
		subtitle: "L'architecture",
		title: "Immersion, diagnostic et plan d'action RevOps",
		description:
			"Ne construisez pas à l'aveugle. Nous auditons votre GTM (équipes, systèmes, données) et livrons la roadmap précise (Budget & Planning) pour sécuriser l'année.",
	},
	{
		badge: 'OPERATE',
		badgeColor: 'sky',
		subtitle: 'La construction',
		title: 'La phase de transformation intensive.',
		description:
			'Une Squad complète déploie votre infrastructure en sprints de 2 semaines. On priorise, on construit, on teste, on livre.',
	},
	{
		badge: 'GROW',
		badgeColor: 'mint',
		subtitle: 'La croissance',
		title: 'Le passage de témoin vers la performance durable.',
		description:
			'Nous pilotons votre "Run" au quotidien pour maximiser le ROI et récolter les fruits du travail accompli.',
	},
];

const COLOR_MAP: Record<InterventionColor, string> = {
	yellow: 'ocobo.yellow',
	sky: 'ocobo.sky',
	mint: 'ocobo.mint',
} as const;

const cardStyle = css({
	bg: 'white',
	borderWidth: '1px',
	borderColor: 'gray.100',
	p: '10',
	rounded: '2xl',
	display: 'flex',
	flexDirection: 'column',
	h: 'full',
	position: 'relative',
	overflow: 'hidden',
	transition: 'all',
	transitionDuration: '300ms',
	_hover: {
		shadow: '2xl',
		translateY: '-1',
	},
});

export const InterventionsSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: '4xl',
						fontWeight: 'bold',
						color: 'ocobo.dark',
						mb: '4',
						textAlign: 'center',
					})}
				>
					Nos interventions
				</h2>
				<p
					className={css({
						textAlign: 'center',
						color: 'gray.600',
						maxW: '2xl',
						mx: 'auto',
						mb: '20',
					})}
				>
					Nous vous aidons à construire les fondations RevOps dont dépend votre
					croissance.
				</p>

				<div
					className={grid({
						columns: { base: 1, md: 3 },
						gap: { base: '8', md: '10' },
					})}
				>
					{INTERVENTIONS.map((item) => {
						const color = COLOR_MAP[item.badgeColor];
						return (
							<div key={item.badge} className={`group ${cardStyle}`}>
								<div className={css({ mb: '8' })}>
									<Badge variant={item.badgeColor} rounded="full">
										{item.badge}
									</Badge>
									<p
										className={css({
											fontSize: '2xs',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											mt: '3',
											ml: '1',
											opacity: '0.7',
											color,
										})}
									>
										{item.subtitle}
									</p>
								</div>
								<h3
									className={css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'bold',
										mb: '6',
										color: 'ocobo.dark',
										lineHeight: 'tight',
										transition: 'colors',
										_groupHover: { color: 'black' },
									})}
								>
									{item.title}
								</h3>
								<p
									className={css({
										color: 'gray.600',
										fontSize: 'sm',
										lineHeight: 'relaxed',
										flex: '1',
										fontWeight: 'medium',
									})}
								>
									{item.description}
								</p>

								<div
									className={css({
										mt: '10',
										pt: '6',
										borderTopWidth: '1px',
										borderTopColor: 'gray.50',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										color,
										opacity: '0',
										transition: 'opacity',
										transitionDuration: '300ms',
										_groupHover: { opacity: '1' },
									})}
								>
									<span
										className={css({
											fontSize: '2xs',
											fontWeight: 'bold',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
										})}
									>
										Voir le détail
									</span>
									<ArrowRight size={16} />
								</div>
							</div>
						);
					})}
				</div>

				<div className={`${flex({ justify: 'center' })} ${css({ mt: '20' })}`}>
					<Button variant="outline" to="/offer">
						Voir toutes nos interventions
					</Button>
				</div>
			</Container>
		</Section>
	);
};
