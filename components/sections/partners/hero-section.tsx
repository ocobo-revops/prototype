import { ChevronDown } from 'lucide-react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../../layout/ModularStackGrid';

export function HeroSection() {
	return (
		<section
			className={css({
				pt: '40',
				pb: '24',
				maxW: '7xl',
				mx: 'auto',
				px: { base: '4', sm: '6', lg: '8' },
				position: 'relative',
				textAlign: 'center',
			})}
		>
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

				<h1
					className={css({
						fontFamily: 'display',
						fontSize: { base: '5xl', md: '6xl' },
						fontWeight: 'bold',
						color: 'ocobo.dark',
						mb: '10',
						lineHeight: '0.95',
						letterSpacing: 'tight',
					})}
				>
					Un écosystème <br />
					de solutions{' '}
					<span className={css({ color: 'ocobo.sky', fontStyle: 'italic' })}>
						connectées.
					</span>
				</h1>

				<p
					className={css({
						fontSize: 'xl',
						color: 'gray.700',
						mb: '12',
						lineHeight: 'relaxed',
						fontWeight: 'medium',
						maxW: '2xl',
						mx: 'auto',
					})}
				>
					Nous maîtrisons les architectures technologiques les plus avancées
					pour transformer vos outils en{' '}
					<span className={css({ fontWeight: 'bold' })}>
						véritable levier de croissance.
					</span>
				</p>
			</div>

			<div
				className={`${flex({ justify: 'center' })} ${css({
					mb: '16',
					px: '4',
				})}`}
			>
				<ModularStackGrid items={DEFAULT_STACK_ITEMS} maxWidth="xl" animated />
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
		</section>
	);
}
