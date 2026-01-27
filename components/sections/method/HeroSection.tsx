import { ChevronDown } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { center, flex } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { AttioPillarsIllustration } from '../../illustrations';

export const HeroSection: React.FC = () => {
	return (
		<section
			className={css({
				pt: '40',
				pb: '16',
				maxW: '7xl',
				mx: 'auto',
				px: { base: '4', sm: '6', lg: '8' },
				position: 'relative',
				textAlign: 'center',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					maxW: '4xl',
					mx: 'auto',
					mb: '8',
					position: 'relative',
					zIndex: '10',
				})}
			>
				<Badge variant="yellow" className={css({ mb: '10' })}>
					NOTRE MÉTHODE
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
					4 piliers pour <br />
					une architecture{' '}
					<span className={css({ color: 'ocobo.yellow', fontStyle: 'italic' })}>
						solide.
					</span>
				</h1>

				<p
					className={css({
						fontSize: 'xl',
						color: 'gray.700',
						mb: '8',
						lineHeight: 'relaxed',
						fontWeight: 'medium',
						maxW: '2xl',
						mx: 'auto',
					})}
				>
					<span className={css({ fontWeight: 'bold' })}>
						The Revenue Experience System™
					</span>{' '}
					est notre framework propriétaire conçu pour transformer le chaos
					opérationnel en une machine de revenu pilotable.
				</p>
			</div>

			<div
				className={`${center()} ${css({
					mb: '10',
					position: 'relative',
					zIndex: '10',
					px: '4',
				})}`}
			>
				<AttioPillarsIllustration />
			</div>

			<div
				className={`${flex({ direction: 'column', align: 'center', gap: '12' })} ${css(
					{
						position: 'relative',
						zIndex: '10',
					},
				)}`}
			>
				<div
					className={css({
						fontStyle: 'italic',
						fontWeight: 'medium',
						color: 'gray.400',
						fontSize: 'sm',
						lineHeight: 'relaxed',
						maxW: 'md',
					})}
				>
					"Une croissance saine n'est jamais le fruit du hasard, c'est le
					résultat d'un système pensé pour durer et pour favoriser l'usage."
				</div>

				<Button
					variant="cta"
					size="xl"
					to="/contact"
					className={css({
						textTransform: 'uppercase',
						letterSpacing: '0.25em',
						fontWeight: 'bold',
					})}
				>
					Auditer mon système
				</Button>
			</div>

			<div
				className={`${center()} ${css({
					mt: '16',
					w: 'full',
					animation: 'bounce-slow',
				})}`}
			>
				<ChevronDown
					className={css({ color: 'gray.200' })}
					size={24}
					strokeWidth={1.5}
				/>
			</div>
		</section>
	);
};
