import {
	ChevronDown,
	Linkedin,
	Sparkles,
	Target,
	Users,
	Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { css, cx } from 'styled-system/css';
import { Badge, Button } from '../components/atoms';
import { Grid } from '../components/layout/Grid';

function TeamPhotoIllustration() {
	return (
		<div
			className={css({
				position: 'relative',
				width: 'full',
				maxW: '4xl',
				mx: 'auto',
				py: '12',
				px: '4',
				_hover: {
					'& .corner-accent-tl': { borderColor: 'ocobo.yellow' },
					'& .corner-accent-br': { borderColor: 'ocobo.mint' },
				},
			})}
		>
			{/* Background decorative spheres */}
			<div
				className={css({
					position: 'absolute',
					inset: 0,
					zIndex: -1,
					pointerEvents: 'none',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						position: 'absolute',
						top: 0,
						left: '25%',
						width: '16rem',
						height: '16rem',
						bg: 'ocobo.yellow/30',
						rounded: 'full',
						filter: 'blur(48px)',
						animation: 'float-blob',
					})}
				/>
				<div
					className={css({
						position: 'absolute',
						bottom: '25%',
						right: '25%',
						width: '18rem',
						height: '18rem',
						bg: 'ocobo.mint/30',
						rounded: 'full',
						filter: 'blur(48px)',
						animation: 'float-blob',
						animationDelay: '-4s',
					})}
				/>
				<div
					className={css({
						position: 'absolute',
						top: '50%',
						left: '2.5rem',
						width: '12rem',
						height: '12rem',
						bg: 'ocobo.coral/20',
						rounded: 'full',
						filter: 'blur(48px)',
						animation: 'float-blob',
						animationDelay: '-8s',
					})}
				/>
				<div
					className={css({
						position: 'absolute',
						top: '25%',
						right: 0,
						width: '14rem',
						height: '14rem',
						bg: 'ocobo.sky/30',
						rounded: 'full',
						filter: 'blur(48px)',
						animation: 'float-blob',
						animationDelay: '-2s',
					})}
				/>
			</div>

			{/* Photo container */}
			<div className={css({ position: 'relative', zIndex: 10, mx: 'auto' })}>
				{/* Decorative corner accents */}
				<div
					className={`corner-accent-tl ${css({
						position: 'absolute',
						top: '-1.5rem',
						left: '-1.5rem',
						width: '4rem',
						height: '4rem',
						borderTop: '2px solid',
						borderLeft: '2px solid',
						borderColor: 'ocobo.dark/10',
						transition: 'border-color 700ms',
					})}`}
				/>
				<div
					className={`corner-accent-br ${css({
						position: 'absolute',
						bottom: '-1.5rem',
						right: '-1.5rem',
						width: '4rem',
						height: '4rem',
						borderBottom: '2px solid',
						borderRight: '2px solid',
						borderColor: 'ocobo.dark/10',
						transition: 'border-color 700ms',
					})}`}
				/>

				{/* Main Photo Card */}
				<div
					className={css({
						position: 'relative',
						bg: 'white',
						p: '2.5',
						rounded: '3xl',
						shadow: 'soft-lg',
						border: '1px solid',
						borderColor: 'gray.100',
						overflow: 'hidden',
						transition: 'transform 700ms',
						_hover: { transform: 'scale(1.01)' },
					})}
				>
					<img
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
						alt="L'équipe Ocobo"
						className={css({
							width: 'full',
							height: 'auto',
							rounded: '3xl',
							filter: 'grayscale(1) contrast(1.1) brightness(1.05)',
							transition: 'all 1000ms ease-in-out',
							_groupHover: { filter: 'grayscale(0)' },
						})}
					/>

					{/* Overlay Gradient */}
					<div
						className={css({
							position: 'absolute',
							inset: 0,
							bgGradient: 'to-t',
							gradientFrom: 'black/30',
							gradientTo: 'transparent',
							pointerEvents: 'none',
							opacity: 0,
							transition: 'opacity 700ms',
							_groupHover: { opacity: 1 },
						})}
					/>

					{/* Caption Badge */}
					<div
						className={css({
							position: 'absolute',
							bottom: '2.5rem',
							left: '2.5rem',
							bg: 'white/90',
							backdropFilter: 'blur(12px)',
							px: '6',
							py: '3.5',
							rounded: '2xl',
							shadow: '2xl',
							display: 'flex',
							alignItems: 'center',
							gap: '3',
							transform: 'translateY(1rem)',
							opacity: 0,
							transition: 'all 500ms',
							transitionDelay: '100ms',
							_groupHover: { transform: 'translateY(0)', opacity: 1 },
						})}
					>
						<div
							className={css({
								width: '2.5',
								height: '2.5',
								rounded: 'full',
								bg: 'ocobo.mint',
								animation: 'pulse',
							})}
						/>
						<span
							className={css({
								fontFamily: 'display',
								fontWeight: 'black',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: '0.25em',
								color: 'ocobo.dark',
							})}
						>
							La Squad Ocobo
						</span>
					</div>
				</div>

				{/* Floating Architectural Icons */}
				<div
					className={css({
						position: 'absolute',
						top: '-3rem',
						right: '3rem',
						p: '5',
						bg: 'white',
						rounded: '2xl',
						shadow: 'xl',
						transform: 'rotate(12deg)',
						animation: 'bounce-slow',
						display: { base: 'none', md: 'flex' },
						border: '1px solid',
						borderColor: 'gray.50',
					})}
				>
					<Sparkles className={css({ color: 'ocobo.yellow' })} size={28} />
				</div>
				<div
					className={css({
						position: 'absolute',
						bottom: '-2.5rem',
						left: '6rem',
						p: '5',
						bg: 'ocobo.dark',
						color: 'white',
						rounded: '2xl',
						shadow: 'xl',
						transform: 'rotate(-6deg)',
						animation: 'bounce-slow',
						animationDelay: '1s',
						display: { base: 'none', md: 'flex' },
					})}
				>
					<Users size={24} />
				</div>
			</div>
		</div>
	);
}

export function Studio() {
	const [activeFilter, setActiveFilter] = useState('TOUS');
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(false);
		const timer = setTimeout(() => setAnimate(true), 10);
		return () => clearTimeout(timer);
	}, []);

	const categories = ['TOUS', 'Architecte', 'Builder', 'Expert Engineer'];

	const team = [
		{
			name: 'Benjamin Boileux',
			category: 'Architecte',
			role: 'Associé',
			desc: '12+ ans en Ops, CRM, Product et Revenue Operations (TheFork, Tripadvisor, Yousign). Spécialiste des systèmes et du pilotage opérationnel.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.yellow',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Aude Cadiot',
			category: 'Architecte',
			role: 'Associée',
			desc: "Référence française du Revenue Operations (TheFork, Spendesk). Experte du customer journey, des organisations GTM, du scaling d'équipes RevOps.",
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.yellow',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Corentin Guérin',
			category: 'Architecte',
			role: 'Associée',
			desc: 'Finance, Deloitte, Business Ops (TheFork). Spécialiste du forecasting, de la performance, des rémunérations variables et du pricing.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.yellow',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Tony Chalencon',
			category: 'Architecte',
			role: 'Senior Manager',
			desc: 'Expert en alignement stratégique et pilotage de grands comptes. Orienté résultats et excellence opérationnelle.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.yellow',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Clara Lecarrie',
			category: 'Architecte',
			role: 'Manager',
			desc: "Spécialiste de l'expérience utilisateur et de l'optimisation des parcours de vente complexes.",
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.yellow',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Louis Strauss',
			category: 'Expert Engineer',
			role: 'RevOps Engineer',
			desc: 'Le cerveau technique derrière nos intégrations les plus poussées et nos outils propriétaires.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.mint',
			hoverText: 'ocobo.dark',
		},
		{
			name: 'Domitille Raimbault',
			category: 'Builder',
			role: 'Senior RevOps Manager',
			desc: 'Maîtrise les architectures CRM les plus complexes pour transformer la donnée en levier de croissance.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
		{
			name: 'Ethel Gosset',
			category: 'Builder',
			role: 'Senior RevOps Manager',
			desc: 'Experte en automatisation et fluidification des processus opérationnels Sales & Marketing.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
		{
			name: 'Dorian Cutullic',
			category: 'Builder',
			role: 'RevOps Manager',
			desc: "Accompagne les scale-ups dans la structuration de leur stack et l'adoption des rituels RevOps.",
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
		{
			name: 'Damien Robert',
			category: 'Builder',
			role: 'RevOps Manager',
			desc: 'Spécialiste de la performance commerciale et du pilotage par la donnée fiable.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
		{
			name: 'Mariette Baudras',
			category: 'Builder',
			role: 'RevOps Manager',
			desc: 'Experte en Customer Success Operations et optimisation de la rétention client.',
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
		{
			name: 'Yoann Boileux',
			category: 'Builder',
			role: 'RevOps Manager',
			desc: "Focus sur l'enablement des équipes et la création de playbooks d'exécution robustes.",
			img: 'https://placehold.co/200x200/F3F4F6/F3F4F6',
			hoverBg: 'ocobo.coral',
			hoverText: 'white',
		},
	];

	const filteredTeam =
		activeFilter === 'TOUS'
			? team
			: team.filter((member) => member.category === activeFilter);

	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			{/* Hero Studio */}
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
				<div className={css({ maxW: '4xl', mx: 'auto', mb: '16' })}>
					<Badge variant="mint" className={css({ mb: '10' })}>
						RevOps Studio
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
						Une direction Revenue Ops <br />
						<span className={css({ color: 'ocobo.mint', fontStyle: 'italic' })}>
							embarquée.
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
						Nous ne sommes pas une agence classique. Nous sommes{' '}
						<span className={css({ fontWeight: 'bold' })}>
							un studio d'experts seniors
						</span>{' '}
						qui s'intègrent à vos équipes pour opérer de l'intérieur.
					</p>
				</div>

				<TeamPhotoIllustration />

				<div
					className={css({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '12',
						mt: '16',
					})}
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
						"Nous rejoignons vos Slacks, vos rituels et nous construisons le
						système à vos côtés."
					</div>

					<Button variant="cta" size="xl" to="/contact">
						Discuter avec le Studio
					</Button>
				</div>

				<div
					className={css({
						mt: '16',
						display: 'flex',
						justifyContent: 'center',
						width: 'full',
						animation: 'bounce-slow',
					})}
				>
					<ChevronDown
						className={css({ color: 'ocobo.mint' })}
						size={24}
						strokeWidth={1.5}
					/>
				</div>
			</section>

			{/* Section Modèle Studio */}
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
						inset: 0,
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
					<div className={css({ maxW: '3xl', mb: '20' })}>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '5xl' },
								fontWeight: 'black',
								mb: '6',
								letterSpacing: 'tight',
							})}
						>
							Le modèle Studio Ocobo™
						</h2>
						<p
							className={css({
								color: 'gray.400',
								fontSize: 'lg',
								fontWeight: 'medium',
								lineHeight: 'relaxed',
							})}
						>
							L'agence traditionnelle est souvent trop lente et trop loin de la
							reality du terrain. Nous avons conçu une alternative pragmatique
							pour scaler vraiment.
						</p>
					</div>

					<Grid md={3} gap={10}>
						{[
							{
								icon: Users,
								title: 'Squad Immergée',
								desc: 'Nous déployons une squad pluridisciplinaire qui rejoint votre environnement de travail quotidien.',
								hoverColor: 'ocobo.mint',
							},
							{
								icon: Zap,
								title: '100% Impact',
								desc: "Pas de grands rapports théoriques. Nous délivrons des briques de système prêtes à l'emploi.",
								hoverColor: 'ocobo.sky',
							},
							{
								icon: Target,
								title: 'Zéro Junior',
								desc: 'Sur chaque compte, uniquement des profils seniors ayant déjà scalé des entreprises leaders.',
								hoverColor: 'ocobo.yellow',
							},
						].map((item) => (
							<div
								key={item.title}
								className={css({
									bg: 'white',
									p: '10',
									rounded: 'xl',
									shadow: 'xl',
									transition: 'transform 300ms',
									_hover: { transform: 'translateY(-4px)' },
								})}
							>
								<div
									className={css({
										width: '16',
										height: '16',
										bg: 'ocobo.dark',
										color: 'white',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										rounded: 'lg',
										mb: '8',
										transition: 'background 200ms',
										_groupHover: { bg: item.hoverColor },
									})}
								>
									<item.icon size={28} />
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
									{item.title}
								</h3>
								<p
									className={css({
										color: 'gray.600',
										lineHeight: 'relaxed',
										fontWeight: 'medium',
									})}
								>
									{item.desc}
								</p>
							</div>
						))}
					</Grid>
				</div>
			</section>

			{/* L'Équipe */}
			<section className={css({ py: '24', bg: 'white' })}>
				<div
					className={css({
						maxW: '7xl',
						mx: 'auto',
						px: { base: '4', sm: '6', lg: '8' },
					})}
				>
					<div
						className={css({
							display: 'flex',
							flexDirection: { base: 'column', md: 'row' },
							justifyContent: 'space-between',
							alignItems: { md: 'flex-end' },
							mb: '16',
							gap: '8',
						})}
					>
						<div>
							<h2
								className={css({
									fontFamily: 'display',
									fontSize: '4xl',
									fontWeight: 'black',
									mb: '4',
									color: 'ocobo.dark',
									letterSpacing: 'tight',
								})}
							>
								Votre équipe Studio
							</h2>
							<p className={css({ color: 'gray.500', fontWeight: 'medium' })}>
								Des experts seniors habitués à scaler ensemble des organisations
								complexes.
							</p>
						</div>

						<div
							className={css({ display: 'flex', flexWrap: 'wrap', gap: '2' })}
						>
							{categories.map((cat) => (
								<button
									type="button"
									key={cat}
									onClick={() => setActiveFilter(cat)}
									className={css({
										px: '6',
										py: '2.5',
										rounded: 'full',
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										transition: 'all 200ms',
										border: '1px solid',
										cursor: 'pointer',
										bg: activeFilter === cat ? 'ocobo.dark' : 'gray.50',
										color: activeFilter === cat ? 'white' : 'gray.500',
										borderColor:
											activeFilter === cat ? 'ocobo.dark' : 'gray.100',
										shadow: activeFilter === cat ? 'lg' : 'none',
										_hover: {
											borderColor: 'ocobo.dark',
											color: activeFilter === cat ? 'white' : 'ocobo.dark',
										},
									})}
								>
									{cat === 'TOUS' ? 'Tous les profils' : cat}
								</button>
							))}
						</div>
					</div>

					<Grid md={2} lg={3} gap={8}>
						{filteredTeam.map((member) => (
							<div
								key={`${member.name}-${activeFilter}`}
								className={cx(
									css({
										bg: 'white',
										border: '1px solid',
										borderColor: 'gray.100',
										p: '8',
										position: 'relative',
										overflow: 'hidden',
										rounded: 'xl',
										transition: 'all 300ms',
										_hover: { shadow: 'xl', transform: 'translateY(-4px)' },
									}),
									animate
										? css({ opacity: 0, animation: 'fade-in-up-small' })
										: css({ opacity: 0 }),
								)}
							>
								{/* Left trait */}
								<div
									className={css({
										position: 'absolute',
										top: 0,
										left: 0,
										width: '1.5',
										height: 'full',
										bg: 'gray.50',
										transition: 'all 300ms',
										_groupHover: {
											bg: member.hoverBg,
											color: member.hoverText,
										},
									})}
								/>

								{/* Category badge */}
								<div
									className={css({
										position: 'absolute',
										top: 0,
										right: 0,
										px: '4',
										py: '1.5',
										roundedBottomLeft: 'xl',
										fontFamily: 'display',
										fontWeight: 'black',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										shadow: 'sm',
										bg: 'gray.100',
										color: 'gray.400',
										transition: 'all 300ms',
									})}
								>
									{member.category}
								</div>

								<div
									className={css({
										width: '32',
										height: '32',
										mx: 'auto',
										mb: '6',
										rounded: 'full',
										overflow: 'hidden',
										border: '4px solid',
										borderColor: 'gray.50',
										transition: 'all 500ms',
										shadow: 'sm',
										bg: 'gray.50',
										_groupHover: { borderColor: 'ocobo.dark' },
									})}
								>
									<img
										src={member.img}
										alt={member.name}
										className={css({
											width: 'full',
											height: 'full',
											objectFit: 'cover',
											filter: 'grayscale(1)',
											transition: 'all 500ms',
											_groupHover: { filter: 'grayscale(0)' },
										})}
									/>
								</div>

								<div className={css({ textAlign: 'center' })}>
									<h3
										className={css({
											fontFamily: 'display',
											fontSize: 'xl',
											fontWeight: 'black',
											color: 'ocobo.dark',
											mb: '1',
										})}
									>
										{member.name}
									</h3>
									<p
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											color: 'gray.400',
											textTransform: 'uppercase',
											letterSpacing: '0.2em',
											mb: '4',
											height: '6',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										})}
									>
										{member.role}
									</p>

									<p
										className={css({
											color: 'gray.500',
											fontSize: 'sm',
											mb: '6',
											lineHeight: 'relaxed',
											minH: '4rem',
											fontWeight: 'medium',
										})}
									>
										{member.desc}
									</p>

									<div
										className={css({
											pt: '4',
											borderTop: '1px solid',
											borderColor: 'gray.50',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										})}
									>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className={css({
												color: 'gray.300',
												transition: 'color 200ms',
												_hover: { color: 'ocobo.dark' },
											})}
										>
											<Linkedin size={18} />
										</a>
									</div>
								</div>
							</div>
						))}
					</Grid>
				</div>
			</section>

			{/* CTA Final */}
			<section
				className={css({
					bg: 'ocobo.mint',
					py: '28',
					textAlign: 'center',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						px: '4',
						textAlign: 'center',
						position: 'relative',
						zIndex: 10,
					})}
				>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '5xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '0.9',
							letterSpacing: 'tight',
						})}
					>
						Envie d'une équipe qui agit vraiment ?
					</h2>
					<p
						className={css({
							fontSize: 'xl',
							color: 'ocobo.dark/70',
							mb: '12',
							fontWeight: 'bold',
						})}
					>
						Évaluons ensemble la squad dont vous avez besoin pour passer au
						niveau supérieur.
					</p>
					<div className={css({ display: 'flex', justifyContent: 'center' })}>
						<Button variant="cta" size="xl" to="/contact">
							Discuter avec le Studio
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Studio;
