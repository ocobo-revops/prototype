import { ChevronDown } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { Badge, Button } from '../../atoms';
import { ArchitecturalGrid } from '../../illustrations';
import HeroSplit from '../../layout/HeroSplit';

export const HeroSection: React.FC = () => {
	return (
		<section
			className={css({
				pt: '40',
				pb: '4',
				maxW: '7xl',
				mx: 'auto',
				px: { base: '4', sm: '6', lg: '8' },
				position: 'relative',
			})}
		>
			<HeroSplit gap={16} className={css({ mb: '16' })}>
				<HeroSplit.Content className={css({ w: { lg: '1/2' } })}>
					<Badge variant="yellow" className={css({ mb: '10' })}>
						NOTRE OFFRE
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
						Un système.
						<br />
						<span className={css({ color: 'gray.400' })}>
							Pas des rustines.
						</span>
					</h1>
					<p
						className={css({
							fontSize: 'xl',
							color: 'gray.700',
							mb: '12',
							lineHeight: 'relaxed',
							fontWeight: 'medium',
							maxW: 'xl',
						})}
					>
						Les entreprises qui passent à l'échelle ne misent pas sur
						l'empilement d'outils. Elles construisent un système de revenu
						clair, simple et pilotable.
					</p>
					<Button variant="cta" size="lg" to="/contact">
						Prendre RDV
					</Button>
				</HeroSplit.Content>
				<HeroSplit.Media
					className={css({
						w: { lg: '1/2' },
						display: 'flex',
						justifyContent: { base: 'center', lg: 'flex-end' },
						alignItems: 'center',
					})}
				>
					<ArchitecturalGrid />
				</HeroSplit.Media>
			</HeroSplit>

			<div
				className={css({
					display: 'flex',
					justifyContent: 'center',
					w: 'full',
					animation: 'bounce-subtle',
				})}
			>
				<ChevronDown
					className={css({ color: 'ocobo.coral', opacity: '0.3' })}
					size={28}
					strokeWidth={1.5}
				/>
			</div>
		</section>
	);
};
