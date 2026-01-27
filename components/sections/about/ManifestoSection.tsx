import { ArrowRight } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import FlexPair from '../../layout/FlexPair';

export const ManifestoSection: React.FC = () => {
	return (
		<section
			className={css({
				py: '32',
				bg: 'ocobo.dark',
				color: 'white',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					position: 'absolute',
					top: '0',
					left: '0',
					w: 'full',
					h: '1px',
					bgGradient: 'to-r',
					gradientFrom: 'transparent',
					gradientVia: 'white/10',
					gradientTo: 'transparent',
				})}
			/>
			<div
				className={css({
					position: 'absolute',
					bottom: '0',
					left: '0',
					w: 'full',
					h: '1px',
					bgGradient: 'to-r',
					gradientFrom: 'transparent',
					gradientVia: 'white/10',
					gradientTo: 'transparent',
				})}
			/>
			<div
				className={css({
					position: 'absolute',
					top: '50%',
					left: '0',
					w: '32',
					h: '32',
					bg: 'ocobo.yellow/10',
					rounded: 'full',
					transform: 'translateX(-50%)',
					filter: 'blur(48px)',
					opacity: '0.5',
				})}
			/>
			<div
				className={css({
					position: 'absolute',
					top: '25%',
					right: '0',
					w: '40',
					h: '40',
					bg: 'ocobo.sky/10',
					rounded: 'full',
					transform: 'translateX(50%)',
					filter: 'blur(48px)',
					opacity: '0.5',
				})}
			/>

			<div
				className={css({
					maxW: '4xl',
					mx: 'auto',
					px: '6',
					textAlign: 'left',
					position: 'relative',
					zIndex: '10',
				})}
			>
				<div
					className={`${flex({ justify: { base: 'center', md: 'flex-start' } })} ${css(
						{
							mb: '24',
						},
					)}`}
				>
					<span
						className={css({
							fontFamily: 'display',
							fontWeight: 'bold',
							color: 'ocobo.dark',
							bg: 'ocobo.yellow',
							px: '6',
							py: '2',
							fontSize: 'xs',
							textTransform: 'uppercase',
							letterSpacing: '0.3em',
							display: 'inline-block',
							rounded: 'full',
							shadow: 'lg',
						})}
					>
						Manifeste
					</span>
				</div>

				<div className={css({ spaceY: { base: '12', md: '20' }, maxW: '3xl' })}>
					{/* Stanza 1 */}
					<div className={css({ spaceY: '4' })}>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Nous ne sommes pas là pour configurer des outils.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Mais pour remettre, dans la croissance, de l'ordre et de la
							philosophie.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'gray.400',
								lineHeight: 'tight',
							})}
						>
							Le marché a transformé le RevOps en un labyrinthe de jargon,
							d'automatisations décoratives et de stacks toujours plus lourdes
							et éclatées.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Tout le monde promet de la performance.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Très peu savent la penser et la structurer.
						</p>
					</div>

					{/* Stanza 2 - Strong statement */}
					<div
						className={css({
							spaceY: '4',
							borderLeftWidth: '4px',
							borderColor: 'ocobo.yellow',
							pl: '8',
							py: '2',
						})}
					>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'bold',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Chez Ocobo, nous refusons la confusion, le bruit, les mirages
							technologiques.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'bold',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Pour nous, le RevOps n'est pas un métier technique.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'bold',
								color: 'ocobo.yellow',
								lineHeight: 'tight',
								fontStyle: 'italic',
							})}
						>
							C'est une discipline stratégique : l'architecture de votre revenu.
						</p>
					</div>

					{/* Stanza 3 */}
					<div className={css({ spaceY: '4' })}>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Aligner les équipes, réparer les silos.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Simplifier les process jusqu'à l'usage et jusqu'à la moelle s'il
							le faut.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Rendre la donnée fiable, lisible et actionnable.
						</p>
					</div>

					{/* Stanza 4 */}
					<div className={css({ spaceY: '4' })}>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Nous existons pour appeler les choses par leur nom,
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							ramener de la clarté dans un monde de jargon
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							et offrir aux organisations un privilège rare :
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'bold',
								color: 'ocobo.yellow',
								lineHeight: 'tight',
							})}
						>
							l'expérience d'une croissance simple, saine et maîtrisée.
						</p>
					</div>

					{/* Stanza 5 - The Invitation */}
					<div
						className={css({
							position: 'relative',
							pt: '20',
							pb: '16',
							px: { base: '8', md: '12' },
							bg: 'white/5',
							rounded: '3xl',
							borderWidth: '1px',
							borderColor: 'white/10',
							shadow: '2xl',
							overflow: 'hidden',
							backdropFilter: 'blur(4px)',
						})}
					>
						{/* Top multi-color line */}
						<div
							className={css({
								position: 'absolute',
								top: '0',
								left: '0',
								w: 'full',
								h: '2',
								bgGradient: 'to-r',
								gradientFrom: 'ocobo.yellow',
								gradientVia: 'ocobo.coral',
								gradientTo: 'ocobo.sky',
							})}
						/>

						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'bold',
								color: 'white',
								lineHeight: 'tight',
								mb: '12',
							})}
						>
							Ocobo est notre invitation
						</p>

						<div className={css({ spaceY: '8' })}>
							<FlexPair gap={5}>
								<FlexPair.Icon className={css({ mt: '1.5' })}>
									<div
										className={css({
											bg: 'ocobo.yellow',
											rounded: 'full',
											p: '1',
										})}
									>
										<ArrowRight
											size={16}
											className={css({ color: 'ocobo.dark' })}
										/>
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p
										className={css({
											fontSize: { base: 'xl', md: '3xl' },
											fontWeight: 'medium',
											color: 'gray.300',
											lineHeight: 'tight',
										})}
									>
										à regarder votre machine revenue en face,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className={css({ mt: '1.5' })}>
									<div
										className={css({
											bg: 'ocobo.yellow',
											rounded: 'full',
											p: '1',
										})}
									>
										<ArrowRight
											size={16}
											className={css({ color: 'ocobo.dark' })}
										/>
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p
										className={css({
											fontSize: { base: 'xl', md: '3xl' },
											fontWeight: 'medium',
											color: 'gray.300',
											lineHeight: 'tight',
										})}
									>
										à préférer la vérité opérationnelle aux illusions de
										performance,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className={css({ mt: '1.5' })}>
									<div
										className={css({
											bg: 'ocobo.yellow',
											rounded: 'full',
											p: '1',
										})}
									>
										<ArrowRight
											size={16}
											className={css({ color: 'ocobo.dark' })}
										/>
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p
										className={css({
											fontSize: { base: 'xl', md: '3xl' },
											fontWeight: 'medium',
											color: 'gray.300',
											lineHeight: 'tight',
										})}
									>
										à faire primer la stratégie sur l'urgence,
									</p>
								</FlexPair.Content>
							</FlexPair>
							<FlexPair gap={5}>
								<FlexPair.Icon className={css({ mt: '1.5' })}>
									<div
										className={css({
											bg: 'ocobo.yellow',
											rounded: 'full',
											p: '1',
										})}
									>
										<ArrowRight
											size={16}
											className={css({ color: 'ocobo.dark' })}
										/>
									</div>
								</FlexPair.Icon>
								<FlexPair.Content>
									<p
										className={css({
											fontSize: { base: 'xl', md: '3xl' },
											fontWeight: 'medium',
											color: 'gray.300',
											lineHeight: 'tight',
										})}
									>
										à construire votre revenu non comme un empilement,{' '}
										<br
											className={css({
												display: { base: 'none', md: 'block' },
											})}
										/>
										mais comme un système pensé, durable et vivant.
									</p>
								</FlexPair.Content>
							</FlexPair>
						</div>
					</div>

					{/* Stanza 6 */}
					<div className={css({ spaceY: '4', pt: '10' })}>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Nous croyons que la croissance n'est jamais un accident.
						</p>
						<p
							className={css({
								fontSize: { base: 'xl', md: '3xl' },
								fontWeight: 'medium',
								color: 'white',
								lineHeight: 'tight',
							})}
						>
							Mais le résultat d'une architecture juste, d'une mécanique revenue
							qui respire et d'une exigence d'alignement.
						</p>
					</div>

					{/* Conclusion Signature - White Logo */}
					<div className={css({ pt: '24' })}>
						<div
							className={`${flex({ direction: 'column', align: 'flex-start' })} ${css(
								{
									textAlign: 'left',
								},
							)}`}
						>
							<img
								src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg"
								alt="Ocobo Logo"
								className={css({
									h: { base: '16', md: '20' },
									w: 'auto',
									mb: '8',
									objectFit: 'contain',
								})}
							/>
							<p
								className={css({
									fontFamily: 'display',
									fontSize: { base: 'xl', md: '3xl' },
									color: 'ocobo.yellow',
									textTransform: 'uppercase',
									letterSpacing: '0.3em',
									fontWeight: 'bold',
									lineHeight: 'tight',
								})}
							>
								La clarté au service du revenu.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
