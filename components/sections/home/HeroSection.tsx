import type React from 'react';
import { css } from 'styled-system/css';
import { Button } from '../../atoms';
import { DashboardIllustration } from '../../illustrations';
import HeroSplit from '../../layout/HeroSplit';
import { Container } from '../../organisms';

export const HeroSection: React.FC = () => {
	return (
		<Container
			className={css({
				pt: '40',
				pb: '24',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<HeroSplit
				gap={16}
				className={css({ position: 'relative', zIndex: '10' })}
			>
				<HeroSplit.Content>
					<h1
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'bold',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '0.95',
							letterSpacing: 'tight',
							opacity: '0',
							animation: 'hero-reveal',
							animationDelay: '0.1s',
							animationFillMode: 'forwards',
						})}
					>
						L'architecture
						<br />
						qui fait tenir
						<br />
						<span className={css({ color: 'gray.400' })}>
							votre croissance.
						</span>
					</h1>

					<p
						className={css({
							fontSize: { base: 'xl', md: '2xl' },
							color: 'gray.700',
							mb: '10',
							lineHeight: 'relaxed',
							fontWeight: 'medium',
							maxW: 'xl',
							opacity: '0',
							animation: 'hero-reveal',
							animationDelay: '0.2s',
							animationFillMode: 'forwards',
						})}
					>
						Voici comment nous transformons la croissance en{' '}
						<span
							className={css({
								textDecorationLine: 'underline',
								textDecorationColor: 'ocobo.yellow',
								textDecorationThickness: '3px',
								textUnderlineOffset: '6px',
							})}
						>
							expérience simple, fluide et pilotable.
						</span>
					</p>

					<div
						className={css({
							mb: '14',
							py: '1.5',
							opacity: '0',
							animation: 'hero-reveal',
							animationDelay: '0.3s',
							animationFillMode: 'forwards',
						})}
					>
						<p
							className={css({
								fontFamily: 'display',
								fontSize: { base: 'lg', md: 'xl' },
								fontWeight: 'normal',
								color: 'ocobo.dark',
								lineHeight: 'tight',
								letterSpacing: 'tight',
							})}
						>
							Le RevOps n'est pas un outil : c'est{' '}
							<span className={css({ fontWeight: 'bold' })}>
								la science qui organise votre revenu.
							</span>
						</p>
					</div>

					<div
						className={css({
							display: 'flex',
							flexDir: { base: 'column', sm: 'row' },
							gap: '6',
							alignItems: 'flex-start',
							opacity: '0',
							animation: 'hero-reveal',
							animationDelay: '0.4s',
							animationFillMode: 'forwards',
						})}
					>
						<Button variant="primary" to="/contact">
							Rencontrer un architecte
						</Button>
					</div>
				</HeroSplit.Content>

				<HeroSplit.Media
					className={css({
						display: 'flex',
						justifyContent: { base: 'center', lg: 'flex-end' },
						alignItems: 'center',
					})}
				>
					<DashboardIllustration />
				</HeroSplit.Media>
			</HeroSplit>
		</Container>
	);
};
