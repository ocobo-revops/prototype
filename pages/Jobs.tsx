import {
	ArrowRight,
	CheckCircle,
	Heart,
	Lightbulb,
	MapPin,
	Phone,
	Play,
	Settings,
	ShieldCheck,
	Sparkles,
	Star,
	Users,
	Video,
	Zap,
} from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import { css, cx } from 'styled-system/css';
import { Badge } from '../components/atoms';
import { Grid } from '../components/layout/Grid';

interface VideoStoryCardProps {
	episode: string;
	pitch: string;
	consultant: string;
	role: string;
	quote: string;
	icon: string;
	videoThumb: string;
}

const VideoStoryCard: React.FC<VideoStoryCardProps> = ({
	episode,
	pitch,
	consultant,
	role,
	quote,
	icon,
	videoThumb,
}) => {
	return (
		<div
			className={css({
				display: 'flex',
				flexDir: 'column',
				gap: '4',
				'& .play-btn': {
					transition: 'all',
					transitionDuration: '500ms',
				},
				'&:hover .play-btn': {
					transform: 'scale(1.1)',
					bg: 'white',
					color: 'ocobo.dark',
				},
				'& img': {
					transition: 'all',
					transitionDuration: '700ms',
				},
				'&:hover img': {
					filter: 'grayscale(0)',
					opacity: 1,
				},
			})}
		>
			{/* Title Header */}
			<div
				className={css({
					display: 'flex',
					alignItems: 'center',
					gap: '2',
					px: '1',
				})}
			>
				<span className={css({ color: 'white', fontSize: 'base' })}>🎬</span>
				<h4
					className={css({
						fontFamily: 'display',
						fontWeight: 'black',
						color: 'white',
						fontSize: { base: 'sm', md: 'base' },
						letterSpacing: 'tight',
					})}
				>
					Ocobo Stories — Épisode {episode}
				</h4>
			</div>

			{/* Pitch Box */}
			<div
				className={css({
					bg: '#2D2F2F',
					p: '5',
					rounded: '2xl',
					borderWidth: '1px',
					borderColor: 'white/5',
					minH: '90px',
					display: 'flex',
					alignItems: 'start',
					gap: '4',
				})}
			>
				<span className={css({ fontSize: 'xl', flexShrink: 0 })}>{icon}</span>
				<p
					className={css({
						color: 'gray.300',
						fontSize: { base: 'xs', md: 'sm' },
						fontWeight: 'medium',
						lineHeight: 'snug',
					})}
				>
					{pitch}
				</p>
			</div>

			{/* Video Placeholder Card */}
			<div
				className={css({
					position: 'relative',
					aspectRatio: '9/16',
					w: 'full',
					rounded: '3xl',
					overflow: 'hidden',
					bg: 'gray.800',
					borderWidth: '1px',
					borderColor: 'white/5',
					shadow: '2xl',
					_hover: { shadow: 'ocobo.yellow/10' },
					transition: 'all',
					transitionDuration: '500ms',
				})}
			>
				<img
					src={videoThumb}
					className={css({
						w: 'full',
						h: 'full',
						objectFit: 'cover',
						filter: 'grayscale(100%)',
						opacity: 0.6,
					})}
					alt={consultant}
				/>
				{/* Play Button Overlay */}
				<div
					className={css({
						position: 'absolute',
						inset: '0',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					})}
				>
					<div
						className={`play-btn ${css({
							w: '16',
							h: '16',
							bg: 'white/10',
							backdropFilter: 'blur(12px)',
							rounded: 'full',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'white',
							borderWidth: '1px',
							borderColor: 'white/20',
							shadow: '2xl',
						})}`}
					>
						<Play fill="currentColor" size={28} className={css({ ml: '1' })} />
					</div>
				</div>

				{/* Logo Overlay top left (as seen in screenshot) */}
				<div
					className={css({
						position: 'absolute',
						top: '6',
						left: '6',
						w: '10',
						h: '10',
						borderWidth: '2px',
						borderColor: 'white',
						rounded: 'full',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						opacity: 0.8,
					})}
				>
					<div
						className={css({
							w: '6',
							h: '6',
							borderRightWidth: '2px',
							borderColor: 'white',
							rounded: 'full',
						})}
					/>
				</div>
			</div>

			{/* Footer Info */}
			<div className={css({ px: '1', mt: '2' })}>
				<h5
					className={css({
						color: 'white',
						fontWeight: 'black',
						fontSize: 'base',
						mb: '1',
					})}
				>
					{consultant}
				</h5>
				<p
					className={css({
						color: 'gray.500',
						fontStyle: 'italic',
						fontSize: 'sm',
						mb: '4',
						fontWeight: 'medium',
					})}
				>
					{role}
				</p>

				<div
					className={css({
						position: 'relative',
						pl: '4',
						borderLeftWidth: '1px',
						borderColor: 'white/20',
					})}
				>
					<p
						className={css({
							color: 'gray.400',
							fontSize: 'sm',
							lineHeight: 'relaxed',
							fontWeight: 'medium',
						})}
					>
						"{quote}"
					</p>
				</div>
			</div>
		</div>
	);
};

export const Jobs: React.FC = () => {
	const stories = [
		{
			episode: '1',
			icon: '💡',
			pitch:
				'Pourquoi rejoindre Ocobo ? Un terrain de jeu, une méthode, une équipe.',
			consultant: 'Domitille',
			role: 'RevOps Manager',
			quote:
				"Un vrai gain de temps dans l'évolution de sa carrière grâce à la variété des sujets que l'on traite",
			videoThumb:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
		},
		{
			episode: '2',
			icon: '🧑‍💻',
			pitch:
				'À quoi ressemble une journée chez Ocobo quand on fait du RevOps "pour de vrai" ?',
			consultant: 'Dorian',
			role: 'RevOps Manager',
			quote:
				"On est en permanence challengé par la dimension premium que l'on vient délivrer chez nos clients",
			videoThumb:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
		},
		{
			episode: '3',
			icon: '💥',
			pitch:
				"De l'impact dès le début ! Cadrage clair & intégration a une squad avec des expert·e·s.",
			consultant: 'Ethel',
			role: 'RevOps Manager',
			quote:
				"Comment avoir de l'autonomie? Grâce à l'équilibre parfait entre cadre et autonomie ! On a également beaucoup de temps pour se former et s'entre aider",
			videoThumb:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
		},
	];

	const values = [
		{
			title: 'Excellence Senior',
			desc: "Ici, on ne bricole pas. On architecture des systèmes robustes avec l'exigence des meilleurs standards du marché.",
			icon: <Sparkles className={css({ color: 'ocobo.yellow' })} size={24} />,
			bg: 'ocobo.yellowLight',
			border: 'ocobo.yellow',
		},
		{
			title: 'Transparence Radicale',
			desc: 'Pas de politique, pas de non-dits. On progresse par le feedback honnête et la remise en question permanente.',
			icon: <ShieldCheck className={css({ color: 'ocobo.sky' })} size={24} />,
			bg: 'ocobo.skyLight',
			border: 'ocobo.sky',
		},
		{
			title: 'Impact Mesurable',
			desc: 'Chaque sprint, chaque ligne de process, chaque dashboard doit créer de la valeur concrète pour nos clients.',
			icon: <Zap className={css({ color: 'ocobo.mint' })} size={24} />,
			bg: 'ocobo.mintLight',
			border: 'ocobo.mint',
		},
		{
			title: 'Esprit de Squad',
			desc: 'On ne travaille jamais seul. On partage nos blocages, nos victoires et nos apprentissages en temps réel.',
			icon: <Heart className={css({ color: 'ocobo.coral' })} size={24} />,
			bg: 'ocobo.coralLight',
			border: 'ocobo.coral',
		},
	];

	const jobs = [
		{
			id: 1,
			title: 'Manager Conseil RevOps',
			type: 'CDI',
			location: 'Paris / Remote',
			exp: '> 7 ans',
			tag: 'Senior',
			highlightColor: 'ocobo.yellow',
		},
		{
			id: 2,
			title: 'Consultant RevOps Senior',
			type: 'CDI',
			location: 'Paris / Remote',
			exp: '4-6 ans',
			tag: 'Confirmé',
			highlightColor: 'ocobo.sky',
		},
		{
			id: 3,
			title: 'Data Analyst Revenue',
			type: 'CDI',
			location: 'Paris / Remote',
			exp: '> 3 ans',
			tag: 'Expert',
			highlightColor: 'ocobo.mint',
		},
	];

	const processSteps = [
		{
			title: 'RH, Fit et Motivation',
			duration: '30 min',
			desc: "Première discussion avec le référant RH sur l'expérience professionnelle du candidat, ses motivations sur le poste et Ocobo.",
			icon: <Phone size={24} strokeWidth={1.5} />,
		},
		{
			title: 'Hiring Manager Call',
			duration: '45 min',
			desc: "Première discussion avec son/sa manager RevOps pour un échange plus détaillé sur l'expérience professionnelle et les enjeux du poste.",
			icon: <Video size={24} strokeWidth={1.5} />,
		},
		{
			title: 'Entretien Technique',
			duration: '45 à 60 min',
			desc: 'Echange sur les compétences techniques et méthodologiques indispensables pour Ocobo.',
			icon: <Settings size={24} strokeWidth={1.5} />,
		},
		{
			title: 'Case Study',
			duration: '90 à 120 min',
			desc: 'Restitution du cas pratique préparé en amont auprès de tous les fondateurs afin de valider les compétences techniques.',
			icon: <Users size={24} strokeWidth={1.5} />,
		},
		{
			title: 'Cultural Fit',
			duration: '45 min',
			desc: "Échange avec un collaborateur pour valider le fit avec les valeurs et l'ambition d'Ocobo et permettre au candidat de poser ses questions à un consultant RevOps Ocobo.",
			icon: <Star size={24} strokeWidth={1.5} />,
		},
		{
			title: 'Prise de référence',
			duration: '15 min',
			desc: "Prise de référence auprès d'un ancien employeur.",
			icon: <CheckCircle size={24} strokeWidth={1.5} />,
		},
	];

	return (
		<div className={css({ width: 'full', pt: '32', pb: '24', bg: 'white' })}>
			{/* 1. Header & Intro */}
			<section
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					mb: '32',
				})}
			>
				<div
					className={css({
						display: 'flex',
						flexDir: { base: 'column', lg: 'row' },
						alignItems: 'start',
						gap: '20',
					})}
				>
					<div className={css({ lg: { w: '1/2' } })}>
						<Badge variant="mint" className={css({ mb: '10' })}>
							RECRUTEMENT
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
							Rejoignez les
							<br />
							architectes.
						</h1>
						<p
							className={css({
								fontSize: 'xl',
								color: 'gray.700',
								mb: '8',
								lineHeight: 'relaxed',
								fontWeight: 'medium',
							})}
						>
							Rejoindre Ocobo, c'est intégrer une équipe d'experts issus des
							plus belles scale-ups (TheFork, PayFit, Qonto).
						</p>
						<div
							className={css({
								color: 'gray.600',
								display: 'flex',
								flexDir: 'column',
								gap: '4',
								lineHeight: 'relaxed',
								borderLeftWidth: '4px',
								borderColor: 'ocobo.yellow',
								pl: '8',
								py: '2',
							})}
						>
							<p className={css({ fontWeight: 'medium' })}>
								Ici, pas de "juniors vendus comme des seniors". Nous cherchons
								l'excellence opérationnelle et la capacité à comprendre les
								enjeux business profonds de nos clients.
							</p>
							<p className={css({ color: 'gray.400', fontSize: 'sm' })}>
								C'est une occasion unique d'apprendre les meilleures
								méthodologies RevOps et de façonner le futur de la discipline en
								France.
							</p>
						</div>
					</div>
					<div
						className={css({
							lg: { w: '1/2' },
							position: 'relative',
							mt: { base: '12', lg: '0' },
						})}
					>
						<div
							className={css({
								display: 'grid',
								gridTemplateColumns: 'repeat(2, 1fr)',
								gap: '6',
							})}
						>
							<div
								className={css({
									display: 'flex',
									flexDir: 'column',
									gap: '6',
									mt: '12',
								})}
							>
								<div
									className={css({
										bg: 'ocobo.dark',
										color: 'white',
										p: '8',
										aspectRatio: '1',
										display: 'flex',
										flexDir: 'column',
										justifyContent: 'space-between',
										rounded: '3xl',
										shadow: 'xl',
									})}
								>
									<Lightbulb
										size={32}
										className={css({ color: 'ocobo.yellow' })}
									/>
									<span
										className={css({
											fontFamily: 'display',
											fontWeight: 'bold',
											fontSize: 'xl',
										})}
									>
										Intelligence Collective
									</span>
								</div>
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
									alt="Team collaboration"
									className={css({
										w: 'full',
										aspectRatio: '1',
										objectFit: 'cover',
										rounded: '3xl',
										filter: 'grayscale(100%)',
									})}
								/>
							</div>
							<div
								className={css({
									display: 'flex',
									flexDir: 'column',
									gap: '6',
								})}
							>
								<img
									src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80"
									alt="Team meeting"
									className={css({
										w: 'full',
										aspectRatio: '1',
										objectFit: 'cover',
										rounded: '3xl',
										filter: 'grayscale(100%)',
									})}
								/>
								<div
									className={css({
										bg: 'ocobo.yellow',
										p: '8',
										aspectRatio: '1',
										display: 'flex',
										flexDir: 'column',
										justifyContent: 'space-between',
										rounded: '3xl',
										shadow: 'xl',
									})}
								>
									<span
										className={css({
											fontFamily: 'display',
											fontWeight: 'bold',
											fontSize: '4xl',
											color: 'ocobo.dark',
										})}
									>
										100%
										<br />
										Impact
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. OCOBO STORIES (DARK MODE) */}
			<section
				className={css({
					bg: 'ocobo.dark',
					py: '32',
					mb: '24',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				{/* Subtle Background Pattern */}
				<div
					className={css({
						position: 'absolute',
						inset: '0',
						opacity: 0.03,
						pointerEvents: 'none',
						backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
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
						<span
							className={css({
								fontFamily: 'display',
								fontWeight: 'black',
								color: 'ocobo.yellow',
								bg: 'ocobo.yellow/10',
								px: '4',
								py: '1.5',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: '0.3em',
								mb: '8',
								display: 'inline-block',
								borderWidth: '1px',
								borderColor: 'ocobo.yellow/20',
								rounded: 'full',
							})}
						>
							SÉRIE ORIGINALE
						</span>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '6xl' },
								fontWeight: 'black',
								color: 'white',
								mb: '8',
								letterSpacing: 'tight',
							})}
						>
							Ocobo Stories
						</h2>
						<p
							className={css({
								color: 'gray.400',
								fontSize: 'xl',
								fontWeight: 'medium',
								lineHeight: 'relaxed',
							})}
						>
							Immersion totale. Nos consultants racontent la réalité du Studio,
							leurs défis et ce qui fait d'Ocobo une aventure à part.
						</p>
					</div>

					<Grid md={3} gap={12} className={css({ lg: { gap: '16' } })}>
						{stories.map((story) => (
							<VideoStoryCard
								key={story.episode}
								episode={story.episode}
								pitch={story.pitch}
								consultant={story.consultant}
								role={story.role}
								quote={story.quote}
								icon={story.icon}
								videoThumb={story.videoThumb}
							/>
						))}
					</Grid>
				</div>
			</section>

			{/* 3. NOS VALEURS / CULTURE (REINTEGRATED) */}
			<section
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					py: '24',
					mb: '16',
				})}
			>
				<div className={css({ textAlign: 'center', mb: '20' })}>
					<span
						className={css({
							fontFamily: 'display',
							fontWeight: 'black',
							color: 'ocobo.coral',
							bg: 'ocobo.coralLight',
							px: '4',
							py: '1.5',
							fontSize: 'xs',
							textTransform: 'uppercase',
							letterSpacing: '0.3em',
							mb: '6',
							display: 'inline-block',
							borderWidth: '1px',
							borderColor: 'ocobo.coral/20',
							rounded: 'full',
						})}
					>
						NOTRE ADN
					</span>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							letterSpacing: 'tight',
						})}
					>
						Ce qui définit notre culture
					</h2>
				</div>

				<Grid md={2} lg={4} gap={8}>
					{values.map((val) => (
						<div
							key={val.title}
							className={css({
								p: '10',
								rounded: '3xl',
								borderWidth: '1px',
								borderColor: val.border,
								bg: val.bg,
								display: 'flex',
								flexDir: 'column',
								gap: '6',
								transition: 'all',
								transitionDuration: '500ms',
								_hover: { shadow: 'xl' },
								'& .icon-box': {
									transition: 'transform',
									transitionDuration: '500ms',
								},
								'&:hover .icon-box': {
									transform: 'scale(1.1)',
								},
							})}
						>
							<div
								className={`icon-box ${css({
									w: '14',
									h: '14',
									bg: 'white',
									rounded: '2xl',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									shadow: 'sm',
									borderWidth: '1px',
									borderColor: 'black/5',
								})}`}
							>
								{val.icon}
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
									lineHeight: 'tight',
								})}
							>
								{val.title}
							</h3>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'sm',
									fontWeight: 'medium',
									lineHeight: 'relaxed',
								})}
							>
								{val.desc}
							</p>
						</div>
					))}
				</Grid>
			</section>

			{/* 4. Nos offres à pourvoir */}
			<section
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					mb: '40',
				})}
			>
				<div
					className={css({
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'end',
						mb: '16',
					})}
				>
					<div>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '5xl' },
								fontWeight: 'black',
								color: 'ocobo.dark',
								letterSpacing: 'tight',
							})}
						>
							Postes ouverts
						</h2>
						<p
							className={css({
								color: 'gray.500',
								fontWeight: 'medium',
								mt: '4',
							})}
						>
							Nous recherchons des architectes passionnés par la donnée et les
							systèmes.
						</p>
					</div>
					<div className={css({ display: { base: 'none', md: 'block' } })}>
						<span
							className={css({
								fontSize: 'xs',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								color: 'gray.300',
							})}
						>
							3 OPPORTUNITÉS DISPONIBLES
						</span>
					</div>
				</div>
				<div className={css({ display: 'flex', flexDir: 'column', gap: '6' })}>
					{jobs.map((job) => (
						<Link
							key={job.id}
							to={`/jobs/${job.id}`}
							className={css({
								'& .arrow-box': {
									transition: 'all',
									transitionDuration: '500ms',
								},
								'&:hover .arrow-box': {
									bg: 'ocobo.dark',
									color: 'white',
									shadow: 'xl',
									transform: 'rotate(-12deg)',
								},
								'&:hover .highlight-bar': {
									opacity: 1,
								},
								'&:hover h3': {
									color: 'black',
								},
							})}
						>
							<div
								className={css({
									display: 'flex',
									flexDir: { base: 'column', md: 'row' },
									justifyContent: 'space-between',
									alignItems: 'center',
									p: { base: '8', md: '12' },
									rounded: '3xl',
									borderWidth: '1px',
									borderColor: 'gray.100',
									bg: 'white',
									transition: 'all',
									transitionDuration: '500ms',
									position: 'relative',
									overflow: 'hidden',
									_hover: { bg: 'white', shadow: 'soft-lg' },
								})}
							>
								{/* Hover Highlight Bar */}
								<div
									className={`highlight-bar ${css({
										position: 'absolute',
										top: '0',
										left: '0',
										w: '1.5',
										h: 'full',
										transition: 'all',
										transitionDuration: '500ms',
										opacity: 0,
										bg: job.highlightColor,
									})}`}
								/>

								<div
									className={css({
										display: 'flex',
										flexDir: { base: 'column', md: 'row' },
										md: { alignItems: 'center' },
										gap: { base: '8', md: '16' },
										w: 'full',
									})}
								>
									<div className={css({ md: { w: '5/12' } })}>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: { base: '2xl', md: '3xl' },
												fontWeight: 'bold',
												color: 'ocobo.dark',
												transition: 'colors',
											})}
										>
											{job.title}
										</h3>
									</div>

									<div
										className={css({
											display: 'flex',
											flexWrap: 'wrap',
											gap: '6',
											fontSize: 'sm',
											fontWeight: 'bold',
											color: 'gray.500',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											md: { w: '4/12' },
										})}
									>
										<span
											className={css({
												display: 'flex',
												alignItems: 'center',
												gap: '2',
											})}
										>
											<MapPin
												size={16}
												className={css({ color: 'ocobo.coral' })}
											/>{' '}
											{job.location}
										</span>
										<span
											className={css({
												display: 'flex',
												alignItems: 'center',
												gap: '2',
												px: '3',
												py: '1',
												bg: 'gray.50',
												rounded: 'lg',
											})}
										>
											{job.type}
										</span>
									</div>

									<div
										className={css({
											md: { w: '3/12' },
											display: 'flex',
											justifyContent: 'end',
											alignItems: 'center',
											gap: '6',
										})}
									>
										<span
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												color: 'gray.400',
												textTransform: 'uppercase',
												letterSpacing: 'widest',
											})}
										>
											Exp : {job.exp}
										</span>
										<div
											className={`arrow-box ${css({
												w: '14',
												h: '14',
												bg: 'gray.50',
												rounded: '2xl',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: 'gray.300',
												shadow: 'sm',
											})}`}
										>
											<ArrowRight size={24} />
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* 5. Processus de recrutement */}
			<section
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
					mb: '40',
				})}
			>
				<div
					className={css({
						borderWidth: '1.5px',
						borderColor: 'gray.100',
						rounded: '3xl',
						p: { base: '8', md: '24' },
						bg: 'gray.50/30',
						position: 'relative',
						overflow: 'hidden',
					})}
				>
					<div
						className={css({
							textAlign: 'center',
							mb: '32',
							position: 'relative',
							zIndex: 10,
						})}
					>
						<span
							className={css({
								fontFamily: 'display',
								fontWeight: 'black',
								color: 'ocobo.sky',
								bg: 'ocobo.sky/10',
								px: '4',
								py: '1.5',
								fontSize: 'xs',
								textTransform: 'uppercase',
								letterSpacing: '0.3em',
								mb: '6',
								display: 'inline-block',
								borderWidth: '1px',
								borderColor: 'ocobo.sky/20',
								rounded: 'full',
							})}
						>
							TRANSPARENCE
						</span>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '6xl' },
								fontWeight: 'black',
								mb: '6',
								color: 'ocobo.dark',
								letterSpacing: 'tight',
							})}
						>
							Processus de recrutement
						</h2>
						<p
							className={css({
								color: 'gray.500',
								fontSize: 'xl',
								fontWeight: 'medium',
							})}
						>
							Simple, rigoureux et bienveillant.
						</p>
					</div>

					<div
						className={css({ position: 'relative', maxW: '5xl', mx: 'auto' })}
					>
						{/* Central Line (Desktop) */}
						<div
							className={css({
								position: 'absolute',
								left: '50%',
								top: '0',
								bottom: '0',
								w: '1.5px',
								bg: 'gray.200',
								transform: 'translateX(-50%)',
								display: { base: 'none', md: 'block' },
							})}
						/>
						{/* Left Line (Mobile) */}
						<div
							className={css({
								position: 'absolute',
								left: '6',
								top: '0',
								bottom: '0',
								w: '1.5px',
								bg: 'gray.200',
								md: { display: 'none' },
							})}
						/>

						<div
							className={css({
								display: 'flex',
								flexDir: 'column',
								gap: '24',
								position: 'relative',
								zIndex: 10,
							})}
						>
							{processSteps.map((step, idx) => {
								const isEven = idx % 2 === 0;

								return (
									<div
										key={step.title}
										className={css({
											position: 'relative',
											display: 'flex',
											flexDir: { base: 'column', md: 'row' },
											alignItems: 'center',
											w: 'full',
											md: { flexDir: isEven ? 'row-reverse' : 'row' },
										})}
									>
										{/* Center Circle */}
										<div
											className={css({
												position: 'absolute',
												left: { base: '6', md: '50%' },
												w: '4',
												h: '4',
												bg: 'white',
												borderWidth: '2.5px',
												borderColor: 'ocobo.dark',
												rounded: 'full',
												zIndex: 10,
												transform: 'translateX(-50%)',
												shadow: 'ring',
											})}
										/>

										{/* Content Half */}
										<div
											className={cx(
												css({
													w: { base: 'full', md: '1/2' },
													pl: { base: '16', md: '0' },
												}),
												isEven
													? css({ md: { pl: '24' } })
													: css({ md: { pr: '24' } }),
											)}
										>
											<div
												className={cx(
													css({
														display: 'flex',
														alignItems: 'start',
														gap: '8',
														flexDir: 'row',
													}),
													isEven
														? css({
																md: {
																	justifyContent: 'start',
																	textAlign: 'right',
																},
															})
														: css({
																md: {
																	justifyContent: 'end',
																	textAlign: 'left',
																},
															}),
												)}
											>
												{/* Icon Box */}
												<div
													className={cx(
														css({
															w: '16',
															h: '16',
															bg: 'white',
															rounded: '2xl',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															color: 'ocobo.dark',
															flexShrink: 0,
															shadow: 'lg',
															borderWidth: '1px',
															borderColor: 'gray.100',
															order: 1,
															transition: 'transform',
															_groupHover: { transform: 'scale(1.1)' },
														}),
														isEven
															? css({ md: { order: 2 } })
															: css({ md: { order: 1 } }),
													)}
												>
													{step.icon}
												</div>

												{/* Text */}
												<div
													className={cx(
														css({ order: 2 }),
														isEven
															? css({ md: { order: 1 } })
															: css({ md: { order: 2 } }),
													)}
												>
													<h3
														className={css({
															fontFamily: 'display',
															fontSize: '2xl',
															fontWeight: 'bold',
															color: 'ocobo.dark',
															mb: '2',
															letterSpacing: 'tight',
														})}
													>
														{step.title}
													</h3>
													<p
														className={css({
															fontSize: 'xs',
															fontWeight: 'black',
															color: 'ocobo.coral',
															mb: '3',
															textTransform: 'uppercase',
															letterSpacing: '0.2em',
														})}
													>
														{step.duration}
													</p>
													<p
														className={css({
															fontSize: 'base',
															color: 'gray.500',
															lineHeight: 'relaxed',
															maxW: 'sm',
															fontWeight: 'medium',
														})}
													>
														{step.desc}
													</p>
												</div>
											</div>
										</div>

										{/* Empty Half */}
										<div
											className={css({
												display: { base: 'none', md: 'block' },
												md: { w: '1/2' },
											})}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* 6. Nos Bureaux */}
			<section
				className={css({
					py: '24',
					borderTopWidth: '1px',
					borderColor: 'gray.100',
				})}
			>
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
							flexDir: { base: 'column', md: 'row' },
							justifyContent: 'space-between',
							alignItems: { base: 'start', md: 'end' },
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
									mb: '2',
									letterSpacing: 'tight',
								})}
							>
								Nos bureaux
							</h2>
							<p
								className={css({
									color: 'gray.500',
									fontWeight: 'medium',
									fontSize: 'lg',
									fontStyle: 'italic',
								})}
							>
								9ème arrondissement, Paris.
							</p>
						</div>
						<a
							href="https://maps.google.com"
							target="_blank"
							className={css({
								display: 'inline-flex',
								alignItems: 'center',
								gap: '3',
								fontSize: 'sm',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								color: 'ocobo.dark',
								borderBottomWidth: '2px',
								borderColor: 'ocobo.yellow',
								pb: '1',
								transition: 'all',
								_hover: { color: 'ocobo.coral', borderColor: 'ocobo.coral' },
							})}
							rel="noopener"
						>
							Voir sur Maps <ArrowRight size={14} />
						</a>
					</div>

					<div
						className={css({
							display: 'grid',
							gridTemplateColumns: {
								base: 'repeat(2, 1fr)',
								md: 'repeat(4, 1fr)',
							},
							gap: '6',
							h: '500px',
						})}
					>
						<div
							className={css({
								gridColumn: 'span 2',
								gridRow: 'span 2',
								position: 'relative',
								overflow: 'hidden',
								rounded: '3xl',
								'& img': {
									transition: 'transform',
									transitionDuration: '1000ms',
								},
								'&:hover img': {
									transform: 'scale(1.05)',
								},
								'&:hover .overlay': {
									bg: 'transparent',
								},
							})}
						>
							<img
								src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
								alt="Ocobo office space"
								className={css({
									w: 'full',
									h: 'full',
									objectFit: 'cover',
									filter: 'grayscale(100%)',
								})}
							/>
							<div
								className={`overlay ${css({
									position: 'absolute',
									inset: '0',
									bg: 'ocobo.dark/10',
									transition: 'colors',
								})}`}
							/>
						</div>
						<div
							className={css({
								position: 'relative',
								overflow: 'hidden',
								rounded: '3xl',
								'& img': {
									transition: 'transform',
									transitionDuration: '1000ms',
								},
								'&:hover img': {
									transform: 'scale(1.05)',
								},
							})}
						>
							<img
								src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400&q=80"
								alt="Office interior"
								className={css({
									w: 'full',
									h: 'full',
									objectFit: 'cover',
									filter: 'grayscale(100%)',
								})}
							/>
						</div>
						<div
							className={css({
								position: 'relative',
								overflow: 'hidden',
								rounded: '3xl',
								'& img': {
									transition: 'transform',
									transitionDuration: '1000ms',
								},
								'&:hover img': {
									transform: 'scale(1.05)',
								},
							})}
						>
							<img
								src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80"
								alt="Meeting room"
								className={css({
									w: 'full',
									h: 'full',
									objectFit: 'cover',
									filter: 'grayscale(100%)',
								})}
							/>
						</div>
						<div
							className={css({
								gridColumn: 'span 2',
								bg: 'ocobo.yellow',
								p: '12',
								display: 'flex',
								flexDir: 'column',
								justifyContent: 'center',
								alignItems: 'start',
								rounded: '3xl',
								shadow: 'xl',
							})}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: '3xl',
									color: 'ocobo.dark',
									mb: '6',
									letterSpacing: 'tight',
									lineHeight: 'tight',
								})}
							>
								Venez prendre <br />
								un café.
							</span>
							<p
								className={css({
									fontSize: 'lg',
									color: 'ocobo.dark/80',
									fontWeight: 'bold',
									lineHeight: 'relaxed',
								})}
							>
								On adore parler RevOps, même si vous ne cherchez pas de job tout
								de suite.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
