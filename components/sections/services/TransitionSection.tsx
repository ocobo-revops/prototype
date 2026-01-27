import type React from 'react';
import { css } from 'styled-system/css';
import { Grid } from '../../layout/Grid';

export const TransitionSection: React.FC = () => {
	return (
		<section
			className={css({
				py: '24',
				bg: 'ocobo.dark',
				color: 'white',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<div
					className={css({
						borderWidth: '1px',
						borderColor: 'gray.700/50',
						p: { base: '12', md: '20' },
						position: 'relative',
					})}
				>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '3xl', md: '5xl' },
							fontWeight: 'bold',
							color: 'white',
							mb: { base: '16', md: '20' },
							textAlign: 'center',
							lineHeight: 'tight',
						})}
					>
						RevOps vient remettre de l'ordre.
					</h2>

					<Grid md={2} lg={4} gap={12}>
						<div className={css({ spaceY: '4' })}>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									color: 'ocobo.yellow',
								})}
							>
								Alignement
							</h3>
							<p
								className={css({
									fontSize: 'sm',
									color: 'gray.400',
									lineHeight: 'relaxed',
								})}
							>
								Aligner Marketing, Sales, CS et Finance pour une vision commune
								et transverse du revenu.
							</p>
						</div>
						<div className={css({ spaceY: '4' })}>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									color: 'ocobo.mint',
								})}
							>
								Process
							</h3>
							<p
								className={css({
									fontSize: 'sm',
									color: 'gray.400',
									lineHeight: 'relaxed',
								})}
							>
								Fluidifier les parcours et supprimer les frictions
								opérationnelles à chaque étape du cycle de vie.
							</p>
						</div>
						<div className={css({ spaceY: '4' })}>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									color: 'ocobo.coral',
								})}
							>
								Data
							</h3>
							<p
								className={css({
									fontSize: 'sm',
									color: 'gray.400',
									lineHeight: 'relaxed',
								})}
							>
								Fiabiliser la donnée pour transformer les intuitions en
								décisions factuelles et pilotables.
							</p>
						</div>
						<div className={css({ spaceY: '4' })}>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									color: 'ocobo.sky',
								})}
							>
								Performance
							</h3>
							<p
								className={css({
									fontSize: 'sm',
									color: 'gray.400',
									lineHeight: 'relaxed',
								})}
							>
								Améliorer la conversion et le revenu à chaque étape clé du
								parcours client.
							</p>
						</div>
					</Grid>
				</div>
			</div>
		</section>
	);
};
