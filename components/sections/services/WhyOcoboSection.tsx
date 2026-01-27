import { CheckCircle2 } from 'lucide-react';
import type React from 'react';
import { css } from 'styled-system/css';
import { Grid } from '../../layout/Grid';
import { SectionHeader } from '../../organisms';

const REASONS = [
	{
		color: 'yellow' as const,
		title: 'Profils seniors',
		description:
			'Aucun junior. Nous opérons comme une direction Revenue interne embarquée.',
	},
	{
		color: 'coral' as const,
		title: 'Impact réel',
		description:
			'Pas de slides inutiles. Nous construisons, opérons et transmettons.',
	},
	{
		color: 'mint' as const,
		title: 'Système durable',
		description:
			'Nous laissons un système structuré et pilotable pour votre futur scale.',
	},
];

const colorMap = {
	yellow: 'ocobo.yellow',
	coral: 'ocobo.coral',
	mint: 'ocobo.mint',
} as const;

export const WhyOcoboSection: React.FC = () => {
	return (
		<section className={css({ py: '24', bg: 'ocobo.dark', color: 'white' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<SectionHeader
					title="Pourquoi choisir Ocobo"
					light
					className={css({ mb: '16' })}
				/>
				<Grid md={3} gap={12}>
					{REASONS.map((reason) => (
						<div key={reason.title} className={css({ textAlign: 'center' })}>
							<div
								className={css({
									w: '16',
									h: '16',
									bg: colorMap[reason.color],
									rounded: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'ocobo.dark',
									mx: 'auto',
									mb: '6',
								})}
							>
								<CheckCircle2 size={32} strokeWidth={4} />
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									mb: '4',
								})}
							>
								{reason.title}
							</h3>
							<p className={css({ color: 'gray.300', lineHeight: 'relaxed' })}>
								{reason.description}
							</p>
						</div>
					))}
				</Grid>
			</div>
		</section>
	);
};
