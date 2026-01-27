import type React from 'react';
import { css } from 'styled-system/css';
import { Button } from '../../atoms';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../../layout/ModularStackGrid';
import { Container, Section } from '../../organisms';

export const StackSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container className={css({ textAlign: 'center' })}>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: '4xl',
						fontWeight: 'bold',
						mb: '6',
					})}
				>
					La bonne technologie. Au bon moment. Pour les bonnes raisons.
				</h2>
				<p
					className={css({
						color: 'gray.500',
						mb: '16',
						maxW: '3xl',
						mx: 'auto',
						fontSize: 'lg',
						fontWeight: 'medium',
					})}
				>
					Nous ne sommes pas là pour empiler les outils, but pour construire un
					écosystème cohérent. Nous certifions et implémentons les solutions
					leaders du marché.
				</p>

				<div className={css({ mb: '16' })}>
					<ModularStackGrid items={DEFAULT_STACK_ITEMS} showLabels />
				</div>

				<div
					className={css({
						mt: '8',
						display: 'flex',
						flexDir: 'column',
						alignItems: 'center',
					})}
				>
					<Button variant="outline" to="/technology" size="lg">
						Nos solutions partenaires
					</Button>
					<p
						className={css({
							mt: '6',
							color: 'gray.400',
							fontSize: 'xs',
							fontWeight: 'bold',
							textTransform: 'uppercase',
							letterSpacing: '0.2em',
						})}
					>
						Notre rôle : démanteler les usines à gaz et rendre votre stack
						utile.
					</p>
				</div>
			</Container>
		</Section>
	);
};
