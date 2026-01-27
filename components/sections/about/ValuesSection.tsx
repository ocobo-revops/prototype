import type React from 'react';
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
import { ThemeColor } from '../../../types';
import ValueCard from '../../molecules/ValueCard';
import { Container, Section } from '../../organisms';

const VALUES = [
	{
		title: 'Clarté radicale',
		description: 'Nommer les problèmes. Rendre simple ce qui était obscur.',
		detail: 'Dire la vérité sur le revenu',
		color: ThemeColor.YELLOW,
	},
	{
		title: 'Simplicité pragmatique',
		description: "Moins de complexité. Moins d'outils. Moins de bruit.",
		detail: 'Une mécanique de précision, pas une usine à gaz',
		color: ThemeColor.MINT,
	},
	{
		title: 'Exigence senior',
		description:
			'Des profils qui ont vécu les enjeux, les crises, les restructurations.',
		detail: 'Parler C-level, agir opérationnel',
		color: ThemeColor.SKY,
	},
	{
		title: 'Architecture avant la maçonnerie',
		description:
			"Pas d'outil sans intention. Pas d'automatisation sans vision. Il ne suffit pas de connecter les tuyaux, encore faut-il que l'eau circule.",
		detail: "La tech suit la stratégie, jamais l'inverse",
		color: ThemeColor.CORAL,
	},
	{
		title: 'Expérience humaine',
		description: 'Concevoir pour les équipes. Fluidifier leur quotidien.',
		detail: "Si l'usage casse, tout trépasse",
		color: ThemeColor.DARK,
	},
	{
		title: 'Anti-bullshit technologique',
		description: "Pas de promesses miracles. Pas d'IA gadget.",
		detail: 'La technologie est un levier, pas un totem',
		color: ThemeColor.DARK,
	},
];

export const ValuesSection: React.FC = () => {
	return (
		<Section bg="dark">
			<Container>
				<h2
					className={css({
						fontFamily: 'display',
						fontSize: '4xl',
						fontWeight: 'bold',
						mb: '16',
						textAlign: 'center',
					})}
				>
					Ce qui nous lie
				</h2>

				<div className={grid({ columns: { base: 1, md: 2 }, gap: 12 })}>
					{VALUES.map((value) => (
						<ValueCard
							key={value.title}
							title={value.title}
							description={value.description}
							detail={value.detail}
							color={value.color}
							variant="dark"
						/>
					))}
				</div>
			</Container>
		</Section>
	);
};
