import { Link as LinkIcon, Lock, ShieldCheck } from 'lucide-react';
import { css } from 'styled-system/css';
import { center, grid } from 'styled-system/patterns';

interface PhilosophyCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	hoverColor: string;
}

function PhilosophyCard({
	icon,
	title,
	description,
	hoverColor,
}: PhilosophyCardProps) {
	return (
		<div
			className={css({
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
				'&:hover .icon-box': {
					bg: hoverColor,
				},
			})}
		>
			<div
				className={`icon-box ${center()} ${css({
					w: '16',
					h: '16',
					bg: 'ocobo.dark',
					color: 'white',
					rounded: 'lg',
					mb: '8',
				})}`}
			>
				{icon}
			</div>
			<h3
				className={css({
					fontFamily: 'display',
					fontSize: '2xl',
					fontWeight: 'black',
					mb: '4',
					color: 'ocobo.dark',
				})}
			>
				{title}
			</h3>
			<p
				className={css({
					color: 'gray.600',
					lineHeight: 'relaxed',
					fontWeight: 'medium',
				})}
			>
				{description}
			</p>
		</div>
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

			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					position: 'relative',
					zIndex: 10,
				})}
			>
				<div
					className={css({
						maxW: '3xl',
						mb: '20',
						textAlign: { base: 'center', md: 'left' },
					})}
				>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '5xl' },
							fontWeight: 'black',
							mb: '6',
							letterSpacing: 'tight',
						})}
					>
						Le système avant l'outil.
					</h2>
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
						hoverColor="ocobo.sky"
					/>
					<PhilosophyCard
						icon={<LinkIcon size={28} />}
						title="Connectée"
						description="La donnée doit circuler fluidement. Nous supprimons les silos pour une vérité unique."
						hoverColor="ocobo.mint"
					/>
					<PhilosophyCard
						icon={<ShieldCheck size={28} />}
						title="Certifiée"
						description="Nous sommes partenaires officiels et certifiés sur les solutions les plus puissantes du marché."
						hoverColor="ocobo.yellow"
					/>
				</div>
			</div>
		</section>
	);
}
