import type React from 'react';
import { Button } from '../../atoms';
import {
	DEFAULT_STACK_ITEMS,
	ModularStackGrid,
} from '../../layout/ModularStackGrid';
import { Container, Section } from '../../organisms';

const StackSection: React.FC = () => {
	return (
		<Section bg="white">
			<Container className="text-center">
				<h2 className="font-display text-4xl font-bold mb-6">
					La bonne technologie. Au bon moment. Pour les bonnes raisons.
				</h2>
				<p className="text-gray-500 mb-16 max-w-3xl mx-auto text-lg font-medium">
					Nous ne sommes pas là pour empiler les outils, but pour construire un
					écosystème cohérent. Nous certifions et implémentons les solutions
					leaders du marché.
				</p>

				<div className="mb-16">
					<ModularStackGrid items={DEFAULT_STACK_ITEMS} showLabels />
				</div>

				<div className="mt-8 flex flex-col items-center">
					<Button variant="outline" to="/technology" size="lg">
						Nos solutions partenaires
					</Button>
					<p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
						Notre rôle : démanteler les usines à gaz et rendre votre stack
						utile.
					</p>
				</div>
			</Container>
		</Section>
	);
};

export default StackSection;
