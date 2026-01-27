import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Button } from '../../atoms/Button';

export function CtaSection() {
	return (
		<section
			className={css({
				bg: 'ocobo.sky',
				py: '28',
				textAlign: 'center',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					maxW: '4xl',
					mx: 'auto',
					px: '4',
					textAlign: 'center',
					position: 'relative',
					zIndex: 10,
				})}
			>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: { base: '5xl', md: '6xl' },
						fontWeight: 'black',
						color: 'ocobo.dark',
						mb: '10',
						lineHeight: '0.9',
						letterSpacing: 'tight',
					})}
				>
					Besoin d'un architecte pour votre stack ?
				</h2>
				<p
					className={css({
						fontSize: 'xl',
						color: 'ocobo.dark/70',
						mb: '12',
						fontWeight: 'bold',
					})}
				>
					Évaluons ensemble l'interconnexion de vos outils pour supprimer les
					silos.
				</p>
				<div className={flex({ justify: 'center' })}>
					<Button variant="cta" size="xl" to="/contact">
						Prendre RDV
					</Button>
				</div>
			</div>
		</section>
	);
}
