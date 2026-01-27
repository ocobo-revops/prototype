import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex } from 'styled-system/patterns';
import { Button } from '../../atoms/Button';
import FlexPair from '../../layout/FlexPair';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

export const TransformationSection: React.FC = () => {
	return (
		<Section bg="gray">
			<Container>
				<div
					className={flex({
						direction: { base: 'column', md: 'row' },
						align: 'center',
						gap: '16',
					})}
				>
					<div className={css({ w: { md: '1/2' } })}>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: '4xl',
								fontWeight: 'bold',
								color: 'ocobo.dark',
								mb: '6',
							})}
						>
							On ne scale pas avec des outils. On scale avec un système.
						</h2>
						<p
							className={css({
								color: 'gray.600',
								fontSize: 'lg',
								mb: '8',
								lineHeight: 'relaxed',
							})}
						>
							La plupart des organisations grandissent en empilant les outils.
							Nous préférons construire des fondations solides et un système qui
							tient la charge.
						</p>
						<ul className={css({ spaceY: '6' })}>
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '12',
												h: '12',
												bg: 'white',
												rounded: 'full',
												color: 'ocobo.dark',
												shadow: 'sm',
												fontWeight: 'bold',
												borderWidth: '1px',
												borderColor: 'gray.100',
											})}`}
										>
											1
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className={css({ fontWeight: 'bold', fontSize: 'lg' })}>
											Clarté radicale
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Une vérité partagée entre équipes. Des décisions
											éclairées. La fin du pilotage à l'intuition.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '12',
												h: '12',
												bg: 'white',
												rounded: 'full',
												color: 'ocobo.dark',
												shadow: 'sm',
												fontWeight: 'bold',
												borderWidth: '1px',
												borderColor: 'gray.100',
											})}`}
										>
											2
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className={css({ fontWeight: 'bold', fontSize: 'lg' })}>
											Simplicité opérationnelle
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Moins de friction, moins de complexité, moins d'outils.
											Des équipes concentrées sur le closing.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
							<li>
								<FlexPair gap={4}>
									<FlexPair.Icon>
										<div
											className={`${center()} ${css({
												w: '12',
												h: '12',
												bg: 'white',
												rounded: 'full',
												color: 'ocobo.dark',
												shadow: 'sm',
												fontWeight: 'bold',
												borderWidth: '1px',
												borderColor: 'gray.100',
											})}`}
										>
											3
										</div>
									</FlexPair.Icon>
									<FlexPair.Content>
										<h4 className={css({ fontWeight: 'bold', fontSize: 'lg' })}>
											Performance mesurable
										</h4>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Des conversions qui augmentent. Des cycles qui
											raccourcissent. Un revenu enfin prévisible.
										</p>
									</FlexPair.Content>
								</FlexPair>
							</li>
						</ul>
					</div>
					<div
						className={css({
							w: { md: '1/2' },
							bg: 'white',
							p: '10',
							shadow: 'xl',
							borderWidth: '1px',
							borderColor: 'gray.100',
							rounded: 'none',
							position: 'relative',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								left: '0',
								w: 'full',
								h: '1',
								bgGradient: 'to-r',
								gradientFrom: 'ocobo.yellow',
								gradientVia: 'ocobo.coral',
								gradientTo: 'ocobo.sky',
							})}
						/>
						<h3
							className={css({
								fontFamily: 'display',
								fontSize: '2xl',
								fontWeight: 'bold',
								mb: '8',
								textAlign: 'center',
							})}
						>
							Ce n'est pas un hasard.
							<br />
							C'est une méthode.
						</h3>
						<div className={css({ spaceY: '4' })}>
							<div
								className={css({
									p: '4',
									bg: 'ocobo.yellow.light',
									borderLeftWidth: '4px',
									borderColor: 'ocobo.yellow',
								})}
							>
								<span
									className={css({ fontWeight: 'bold', color: 'ocobo.dark' })}
								>
									Alignment
								</span>
								<p className={css({ fontSize: 'xs', color: 'gray.600' })}>
									Aligner les équipes qui font le revenu.
								</p>
							</div>
							<div
								className={css({
									p: '4',
									bg: 'ocobo.sky.light',
									borderLeftWidth: '4px',
									borderColor: 'ocobo.sky',
								})}
							>
								<span
									className={css({ fontWeight: 'bold', color: 'ocobo.dark' })}
								>
									Technology
								</span>
								<p className={css({ fontSize: 'xs', color: 'gray.600' })}>
									Une stack claire, connectée, utile.
								</p>
							</div>
							<div
								className={css({
									p: '4',
									bg: 'ocobo.mint.light',
									borderLeftWidth: '4px',
									borderColor: 'ocobo.mint',
								})}
							>
								<span
									className={css({ fontWeight: 'bold', color: 'ocobo.dark' })}
								>
									Performance
								</span>
								<p className={css({ fontSize: 'xs', color: 'gray.600' })}>
									Indicateurs fiables, pilotage, cockpit.
								</p>
							</div>
							<div
								className={css({
									p: '4',
									bg: 'ocobo.coral.light',
									borderLeftWidth: '4px',
									borderColor: 'ocobo.coral',
								})}
							>
								<span
									className={css({ fontWeight: 'bold', color: 'ocobo.dark' })}
								>
									Enablement
								</span>
								<p className={css({ fontSize: 'xs', color: 'gray.600' })}>
									Equipes formées et autonomes.
								</p>
							</div>
						</div>
						<div className={css({ mt: '8', textAlign: 'center' })}>
							<p
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'sm',
									textTransform: 'uppercase',
									letterSpacing: 'wider',
									mb: '4',
								})}
							>
								The Revenue Experience System™
							</p>
							<Button to="/method" fullWidth>
								Découvrir notre méthode
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
