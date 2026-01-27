import type React from 'react';
import { css } from 'styled-system/css';
import { ClientMarquee } from '../../layout/ClientMarquee';
import { TestimonialCard } from '../../molecules/TestimonialCard';
import { Container } from '../../organisms/Container';
import { Section } from '../../organisms/Section';

const HOME_CLIENTS = [
	'TheFork',
	'ePack Hygiène',
	'Qonto',
	'PayFit',
	'Spendesk',
	'Qobra',
	'Tomorro',
	'Jus Mundi',
	'Vizzia',
	'Combo',
	'Sortlist',
	'Zenchef',
];

export const SocialProofSection: React.FC = () => {
	return (
		<Section
			bg="dark"
			className={css({
				py: { base: '20', md: '32' },
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					position: 'absolute',
					inset: '0',
					opacity: '0.02',
					bg: 'dots-light',
				})}
			/>

			<div
				className={css({
					position: 'absolute',
					top: '50%',
					left: '0',
					w: '64',
					h: '64',
					bg: 'ocobo.yellow/5',
					rounded: 'full',
					transform: 'translateX(-50%)',
					filter: 'blur(48px)',
					opacity: '0.3',
				})}
			/>

			<Container className={css({ position: 'relative', zIndex: '10' })}>
				<div className={css({ mb: '16', textAlign: 'center' })}>
					<span
						className={css({
							fontFamily: 'display',
							fontWeight: 'black',
							color: 'white/40',
							fontSize: 'xs',
							textTransform: 'uppercase',
							letterSpacing: '0.4em',
							mb: '4',
							display: 'inline-block',
						})}
					>
						Ils nous font confiance
					</span>
					<h3
						className={css({
							color: 'white',
							fontSize: { base: '3xl', md: '5xl' },
							fontWeight: 'bold',
							mb: '8',
							letterSpacing: 'tight',
						})}
					>
						La preuve par l'expérience
					</h3>
				</div>

				<div className={css({ mb: '24' })}>
					<ClientMarquee clients={HOME_CLIENTS} bordered />
				</div>

				<TestimonialCard
					quote="Nous avons fait appel à Ocobo dans notre seconde phase d'hypercroissance afin de réinventer notre modèle de commissionnement."
					authorName="Arnaud Meunier"
					authorRole="CSO @ ePack Hygiène"
					ctaText="Découvrir nos stories"
					ctaLink="/stories"
					className={css({ maxW: '4xl', mx: 'auto' })}
				/>
			</Container>
		</Section>
	);
};
