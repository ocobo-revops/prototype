import { Check, X } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';
import { Button } from '../../atoms/Button';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

const OCOBO_BENEFITS = [
	"Commence par la stratégie, pas par l'outil",
	"Conçoit l'architecture complète de votre croissance",
	'Travaille en immersion, en sprints courts',
	'Opère comme une direction revenue, pas comme un prestataire',
	"Mesure l'impact, pas les livrables",
];

const OTHERS_ISSUES = [
	'Pensent "outil" avant "système"',
	'Empilent les automatisations',
	'Reproduisent les silos (Sales Ops, Marketing Ops…)',
	'Livrent des dashboards illisibles',
	'Confondent complexité et performance',
];

export const ComparatifSection: React.FC = () => {
	return (
		<Section bg="dark">
			<Container>
				<div className={css({ textAlign: 'center', mb: '16' })}>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: '4xl',
							fontWeight: 'bold',
							mb: '4',
						})}
					>
						Pourquoi Ocobo n'est pas un intégrateur.
						<br />
						Ni un cabinet. Ni un freelance CRM.
					</h2>
					<p className={css({ color: 'gray.400' })}>
						Notre savoir-faire : transformer une machine commerciale grippée en
						mécanique de précision.
					</p>
				</div>

				<div
					className={`${grid({ columns: { base: 1, md: 2 }, gap: '8' })} ${css({ maxW: '5xl', mx: 'auto' })}`}
				>
					<div
						className={css({
							bg: 'white',
							color: 'ocobo.dark',
							p: '10',
							position: 'relative',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								left: '0',
								bg: 'ocobo.yellow',
								color: 'ocobo.dark',
								px: '4',
								py: '1',
								fontWeight: 'bold',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
							})}
						>
							Ocobo
						</div>
						<h3
							className={css({
								fontFamily: 'display',
								fontSize: '2xl',
								fontWeight: 'bold',
								mb: '8',
								mt: '4',
							})}
						>
							La Revenue Experience
						</h3>
						<ul className={css({ spaceY: '4' })}>
							{OCOBO_BENEFITS.map((item) => (
								<li
									key={item}
									className={flex({
										align: 'flex-start',
										gap: '3',
									})}
								>
									<Check
										className={css({
											color: 'ocobo.mint',
											flexShrink: '0',
											mt: '1',
										})}
										size={18}
									/>
									<span className={css({ fontWeight: 'medium' })}>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div
						className={css({
							bg: 'white/5',
							borderWidth: '1px',
							borderColor: 'white/10',
							p: '10',
							color: 'gray.300',
						})}
					>
						<h3
							className={css({
								fontFamily: 'display',
								fontSize: '2xl',
								fontWeight: 'bold',
								mb: '8',
								mt: '4',
								color: 'white',
							})}
						>
							Les autres acteurs
						</h3>
						<ul className={css({ spaceY: '4' })}>
							{OTHERS_ISSUES.map((item) => (
								<li
									key={item}
									className={flex({
										align: 'flex-start',
										gap: '3',
									})}
								>
									<X
										className={css({
											color: 'red.400',
											flexShrink: '0',
											mt: '1',
										})}
										size={18}
									/>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className={`${center()} ${css({ mt: '16' })}`}>
					<Button variant="white" to="/studio" size="lg">
						Découvrez le RevOps Studio
					</Button>
				</div>
			</Container>
		</Section>
	);
};
