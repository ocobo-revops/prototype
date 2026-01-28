import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/text';
import { Container } from '../../organisms/Container';

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
			<Container
				narrow
				className={css({
					textAlign: 'center',
					position: 'relative',
					zIndex: 10,
				})}
			>
				<Text
					as="h2"
					variant="display-xl"
					color="dark"
					className={css({
						mb: '10',
						lineHeight: '0.9',
					})}
				>
					Besoin d'un architecte pour votre stack ?
				</Text>
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
			</Container>
		</section>
	);
}
