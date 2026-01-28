import { ChevronDown } from 'lucide-react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/text';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../../layout/ModularStackGrid';
import { Container } from '../../organisms/Container';

export function HeroSection() {
	return (
		<section
			className={css({
				pt: '40',
				pb: '24',
				position: 'relative',
				textAlign: 'center',
			})}
		>
			<Container>
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						mb: '16',
						position: 'relative',
						zIndex: 10,
					})}
				>
					<Badge variant="sky" className={css({ mb: '10' })}>
						TECHNOLOGIE
					</Badge>

					<Text as="h1" variant="display-xl" className={css({ mb: '10' })}>
						Un écosystème <br />
						de solutions{' '}
						<span className={css({ color: 'ocobo.sky', fontStyle: 'italic' })}>
							connectées.
						</span>
					</Text>

					<Text
						as="p"
						variant="subtitle"
						color="muted"
						className={css({ maxW: '2xl', mx: 'auto', mb: '12' })}
					>
						Nous maîtrisons les architectures technologiques les plus avancées
						pour transformer vos outils en{' '}
						<span className={css({ fontWeight: 'bold' })}>
							véritable levier de croissance.
						</span>
					</Text>
				</div>

				<div
					className={`${flex({ justify: 'center' })} ${css({
						mb: '16',
						px: '4',
					})}`}
				>
					<ModularStackGrid
						items={DEFAULT_STACK_ITEMS}
						maxWidth="xl"
						animated
					/>
				</div>

				<div
					className={flex({ direction: 'column', gap: '12', align: 'center' })}
				>
					<Button variant="cta" size="xl" to="/contact">
						Auditer ma stack
					</Button>
				</div>

				<div
					className={`${flex({ justify: 'center' })} ${css({
						mt: '16',
						w: 'full',
						animation: 'bounce-slow',
					})}`}
				>
					<ChevronDown
						className={css({ color: 'ocobo.sky' })}
						size={24}
						strokeWidth={1.5}
					/>
				</div>
			</Container>
		</section>
	);
}
