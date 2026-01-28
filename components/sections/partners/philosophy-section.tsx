import { Link as LinkIcon, Lock, ShieldCheck } from 'lucide-react';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { grid } from 'styled-system/patterns';
import { IconBox } from '../../atoms/icon-box';
import { Text } from '../../atoms/text';
import { Container } from '../../organisms/Container';

// ===== LOCAL STYLE WRAPPER (non-exported) =====

const PhilosophyCardWrapper = styled('div', {
	base: {
		bg: 'white',
		p: '10',
		rounded: 'xl',
		shadow: 'xl',
		transition: 'transform',
		transitionDuration: '300ms',
		_hover: { transform: 'translateY(-4px)' },
		'& .icon-box': {
			transition: 'colors',
		},
	},
	variants: {
		hoverColor: {
			sky: { '&:hover .icon-box': { bg: 'ocobo.sky' } },
			mint: { '&:hover .icon-box': { bg: 'ocobo.mint' } },
			yellow: { '&:hover .icon-box': { bg: 'ocobo.yellow' } },
		},
	},
});

// ===== COMPONENTS =====

interface PhilosophyCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	hoverColor: 'sky' | 'mint' | 'yellow';
}

function PhilosophyCard({
	icon,
	title,
	description,
	hoverColor,
}: PhilosophyCardProps) {
	return (
		<PhilosophyCardWrapper hoverColor={hoverColor}>
			<IconBox
				size="lg"
				variant="solid"
				className={`icon-box ${css({ mb: '8' })}`}
			>
				{icon}
			</IconBox>
			<Text
				as="h3"
				variant="display-md"
				color="dark"
				className={css({ mb: '4' })}
			>
				{title}
			</Text>
			<p
				className={css({
					color: 'gray.600',
					lineHeight: 'relaxed',
					fontWeight: 'medium',
				})}
			>
				{description}
			</p>
		</PhilosophyCardWrapper>
	);
}

export function PhilosophySection() {
	return (
		<section
			className={css({
				bg: 'ocobo.dark',
				py: '32',
				color: 'white',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					position: 'absolute',
					inset: '0',
					opacity: 0.03,
					backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				})}
			/>

			<Container className={css({ position: 'relative', zIndex: 10 })}>
				<div
					className={css({
						maxW: '3xl',
						mb: '20',
						textAlign: { base: 'center', md: 'left' },
					})}
				>
					<Text
						as="h2"
						variant="display-lg"
						color="white"
						className={css({ mb: '6' })}
					>
						Le système avant l'outil.
					</Text>
					<p
						className={css({
							color: 'gray.400',
							fontSize: 'lg',
							fontWeight: 'medium',
							lineHeight: 'relaxed',
						})}
					>
						L'outil n'est qu'un moyen. Notre valeur réside dans l'architecture
						qui permet à ces technologies de communiquer et de produire de la
						donnée fiable.
					</p>
				</div>

				<div className={grid({ columns: { base: 1, md: 3 }, gap: '10' })}>
					<PhilosophyCard
						icon={<Lock size={28} />}
						title="Agnostique"
						description="On ne force pas un outil. On choisit celui qui sert votre stratégie de manière juste."
						hoverColor="sky"
					/>
					<PhilosophyCard
						icon={<LinkIcon size={28} />}
						title="Connectée"
						description="La donnée doit circuler fluidement. Nous supprimons les silos pour une vérité unique."
						hoverColor="mint"
					/>
					<PhilosophyCard
						icon={<ShieldCheck size={28} />}
						title="Certifiée"
						description="Nous sommes partenaires officiels et certifiés sur les solutions les plus puissantes du marché."
						hoverColor="yellow"
					/>
				</div>
			</Container>
		</section>
	);
}
