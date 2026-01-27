import { BarChart3, Layout, Target, Zap } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import { ThemeColor } from '../../../types';
import { FeatureCard } from '../../layout/FeatureCard';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

export const PainPointSection: React.FC = () => {
	return (
		<Section
			bg="white"
			className={css({ py: '32', position: 'relative', overflow: 'hidden' })}
		>
			<div
				className={css({
					position: 'absolute',
					inset: '0',
					opacity: '0.03',
					pointerEvents: 'none',
					bg: 'dots-dark-sm',
				})}
			/>

			<Container
				narrow
				className={css({
					textAlign: 'center',
					position: 'relative',
					zIndex: '10',
				})}
			>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: { base: '4xl', md: '6xl' },
						fontWeight: 'black',
						color: 'ocobo.dark',
						mb: '10',
						lineHeight: '0.95',
						letterSpacing: 'tight',
					})}
				>
					Le RevOps est partout. <br />
					Mais personne ne comprend vraiment ce dont il s'agit.
				</h2>
				<div
					className={css({
						mx: 'auto',
						color: 'gray.500',
						mb: '12',
						fontWeight: 'medium',
						fontSize: 'xl',
						'& p': { lineHeight: 'relaxed' },
					})}
				>
					<p>
						Le marché a transformer un métier essentiel en une discipline
						fourre-tout : CRM, intégration, automatisation, data, growth…
						Résultat : une cacophonie, des stacks qui débordent et des
						organisations qui avancent à tâtons.
					</p>
				</div>
				<div
					className={css({
						display: 'inline-flex',
						alignItems: 'center',
						gap: '3',
						px: '8',
						py: '3',
						bg: 'ocobo.dark',
						color: 'white',
						fontFamily: 'display',
						fontWeight: 'black',
						textTransform: 'uppercase',
						letterSpacing: '0.2em',
						fontSize: 'sm',
						rounded: 'full',
						transform: 'scale(1)',
						transition: 'transform',
						cursor: 'default',
						shadow: 'xl',
						_hover: { transform: 'scale(1.05)' },
					})}
				>
					Nous refusons ce flou
				</div>
			</Container>

			<Container
				className={css({ mt: '28', position: 'relative', zIndex: '10' })}
			>
				<div className={grid({ columns: { base: 1, md: 2, lg: 4 }, gap: '6' })}>
					<FeatureCard
						icon={<Layout size={28} />}
						title="Aligner"
						description="les équipes"
						colour={ThemeColor.CORAL}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<Zap size={28} />}
						title="Simplifier"
						description="les process"
						colour={ThemeColor.YELLOW}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<Target size={28} />}
						title="Fiabiliser"
						description="la donnée"
						colour={ThemeColor.SKY}
						label="Organiser ="
					/>
					<FeatureCard
						icon={<BarChart3 size={28} />}
						title="Piloter"
						description="la croissance"
						colour={ThemeColor.MINT}
						label="Organiser ="
					/>
				</div>
			</Container>

			<div
				className={css({
					textAlign: 'center',
					mt: '32',
					maxW: '4xl',
					mx: 'auto',
					px: '4',
				})}
			>
				<div
					className={css({
						display: 'inline-block',
						px: '5',
						py: '2',
						bg: 'ocobo.mint.light',
						color: 'ocobo.mint',
						fontFamily: 'display',
						fontWeight: 'black',
						textTransform: 'uppercase',
						letterSpacing: '0.3em',
						fontSize: 'xs',
						mb: '8',
						rounded: 'full',
						borderWidth: '1px',
						borderColor: 'ocobo.mint/20',
					})}
				>
					Notre Mission
				</div>
				<h3
					className={css({
						fontFamily: 'display',
						fontSize: { base: '4xl', md: '5xl' },
						fontWeight: 'black',
						mb: '6',
						letterSpacing: 'tight',
					})}
				>
					Démocratiser la science du revenu.
				</h3>
				<p
					className={css({
						fontSize: 'xl',
						color: 'gray.500',
						fontWeight: 'medium',
						lineHeight: 'relaxed',
					})}
				>
					Pour que chaque organisation puisse faire l'expérience d'une
					croissance saine et maîtrisée.
				</p>
			</div>
		</Section>
	);
};
