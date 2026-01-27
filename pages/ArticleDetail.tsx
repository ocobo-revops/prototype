import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	CheckCircle2,
	Clock,
	Layout,
	Linkedin,
	MessageSquare,
	Share2,
	Twitter,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';
import { Badge } from '../components/atoms';

export const ArticleDetail: React.FC = () => {
	const { slug: _slug } = useParams();
	const [activeSection, setActiveSection] = useState<string>('');

	// Simulation de données d'article basées sur l'URL fournie
	const article = {
		title:
			'Comprendre et structurer une équipe RevOps : modèles et stades de maturité',
		category: 'Organisation',
		date: '15 Janvier 2024',
		readTime: '12 min',
		author: {
			name: 'Aude Cadiot',
			role: 'Co-fondatrice @ Ocobo',
			image: 'https://placehold.co/100x100/F3F4F6/212323?text=AC',
		},
		intro:
			"Le Revenue Operations (RevOps) n'est plus une option pour les entreprises qui souhaitent scaler durablement. Mais comment passer d'un CRM géré 'au mieux' à une véritable direction de l'architecture revenue ?",
		sections: [
			{
				id: 'pourquoi-structurer',
				title: 'Pourquoi structurer le RevOps maintenant ?',
				content:
					"Dans les premières phases d'une startup, le CRM est souvent le jouet du fondateur ou du premier Sales. Mais dès que l'équipe dépasse 10-15 personnes, les silos s'installent. Le Marketing envoie des leads que les Sales ne traitent pas, et le CS découvre des promesses de vente intenables.",
			},
			{
				id: 'stades-maturite',
				title: 'Les 4 stades de maturité RevOps',
				content:
					'Nous avons identifié quatre grandes étapes par lesquelles passent les entreprises en croissance :',
				list: [
					"L'Ad-hoc : Réparation de bugs et gestion d'urgence.",
					'Le Tactique : Automatisation des process existants.',
					"L'Architecture : Refonte globale du système de donnée.",
					'Le Stratégique : Pilotage prédictif du revenu.',
				],
			},
			{
				id: 'modeles-organisationnels',
				title: 'Choisir son modèle organisationnel',
				content:
					"Il n'existe pas de structure unique. Selon votre business model (PLG vs SLG), votre équipe RevOps doit être rattachée soit au COO, soit au CRO, soit rester décentralisée dans chaque pôle avec une forte coordination.",
			},
		],
	};

	// Gestion du scroll pour le sommaire actif
	useEffect(() => {
		const handleScroll = () => {
			const sections = article.sections.map((s) =>
				document.getElementById(s.id),
			);
			const scrollPosition = window.scrollY + 200;

			const currentSection = sections.find((section, index) => {
				if (!section) return false;
				const nextSection = sections[index + 1];
				if (nextSection) {
					return (
						scrollPosition >= section.offsetTop &&
						scrollPosition < nextSection.offsetTop
					);
				}
				return scrollPosition >= section.offsetTop;
			});

			if (currentSection) setActiveSection(currentSection.id);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={css({ width: 'full', bg: 'white', pt: '32', pb: '24' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				{/* BREADCRUMBS & TOP NAV */}
				<div
					className={hstack({
						justify: 'space-between',
						mb: '12',
					})}
				>
					<Link
						to="/resources"
						className={css({
							display: 'inline-flex',
							alignItems: 'center',
							color: 'gray.400',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							fontSize: 'xs',
							transition: 'colors',
							_hover: { color: 'ocobo.dark' },
						})}
					>
						<ArrowLeft size={14} className={css({ mr: '2' })} /> Retour au blog
					</Link>
					<div
						className={hstack({
							gap: '4',
							color: 'gray.300',
						})}
					>
						<Share2 size={16} />
						<span className={css({ h: '4', w: 'px', bg: 'gray.200' })} />
						<button
							type="button"
							className={css({
								transition: 'colors',
								_hover: { color: 'ocobo.dark' },
							})}
						>
							<Linkedin size={16} />
						</button>
						<button
							type="button"
							className={css({
								transition: 'colors',
								_hover: { color: 'ocobo.dark' },
							})}
						>
							<Twitter size={16} />
						</button>
					</div>
				</div>

				{/* HERO ARTICLE */}
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						textAlign: 'center',
						mb: '20',
					})}
				>
					<Badge variant="coral" className={css({ mb: '8' })}>
						{article.category}
					</Badge>
					<h1
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '1.05',
							letterSpacing: 'tight',
						})}
					>
						{article.title}
					</h1>
					<div
						className={`${flex({ gap: '8', justify: 'center', wrap: 'wrap' })} ${css(
							{
								fontSize: 'sm',
								fontWeight: 'bold',
								color: 'gray.400',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
							},
						)}`}
					>
						<div className={hstack({ gap: '2' })}>
							<Calendar size={14} className={css({ color: 'ocobo.yellow' })} />
							<span>{article.date}</span>
						</div>
						<div className={hstack({ gap: '2' })}>
							<Clock size={14} className={css({ color: 'ocobo.sky' })} />
							<span>{article.readTime} de lecture</span>
						</div>
					</div>
				</div>

				{/* MAIN LAYOUT */}
				<div
					className={flex({
						direction: { base: 'column', lg: 'row' },
						gap: '16',
					})}
				>
					{/* SIDEBAR : SOMMAIRE */}
					<aside className={css({ lg: { w: '1/4' } })}>
						<div className={css({ position: 'sticky', top: '32' })}>
							<h4
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: '0.4em',
									color: 'ocobo.dark',
									mb: '8',
								})}
							>
								Sommaire
							</h4>
							<nav
								className={flex({
									direction: 'column',
									gap: '4',
									align: 'stretch',
								})}
							>
								{article.sections.map((section) => (
									<a
										key={section.id}
										href={`#${section.id}`}
										className={css({
											display: 'block',
											fontSize: 'sm',
											fontWeight: 'medium',
											transition: 'all',
											transitionDuration: '300ms',
											borderLeftWidth: '2px',
											pl: '4',
											borderColor:
												activeSection === section.id
													? 'ocobo.yellow'
													: 'gray.100',
											color:
												activeSection === section.id
													? 'ocobo.dark'
													: 'gray.400',
											transform:
												activeSection === section.id
													? 'translateX(4px)'
													: 'none',
											_hover: {
												borderColor:
													activeSection === section.id
														? 'ocobo.yellow'
														: 'gray.300',
												color:
													activeSection === section.id
														? 'ocobo.dark'
														: 'gray.600',
											},
										})}
									>
										{section.title}
									</a>
								))}
							</nav>

							<div
								className={css({
									mt: '20',
									p: '8',
									bg: 'ocobo.dark',
									rounded: '2xl',
									color: 'white',
									position: 'relative',
									overflow: 'hidden',
								})}
							>
								<div
									className={css({
										position: 'absolute',
										top: '0',
										right: '0',
										w: '24',
										h: '24',
										bg: 'ocobo.yellow/10',
										rounded: 'full',
										filter: 'blur(32px)',
									})}
								/>
								<h5
									className={css({
										fontFamily: 'display',
										fontSize: 'lg',
										fontWeight: 'bold',
										mb: '4',
									})}
								>
									Besoin d'aide pour structurer votre équipe ?
								</h5>
								<p
									className={css({
										fontSize: 'xs',
										color: 'gray.400',
										mb: '6',
										lineHeight: 'relaxed',
									})}
								>
									Nos architectes vous accompagnent dans la définition de votre
									modèle RevOps.
								</p>
								<Link to="/contact">
									<button
										type="button"
										className={css({
											w: 'full',
											py: '3',
											bg: 'ocobo.yellow',
											color: 'ocobo.dark',
											fontWeight: 'bold',
											fontSize: 'xs',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											rounded: 'lg',
											transition: 'colors',
											_hover: { bg: 'white' },
										})}
									>
										Discuter avec nous
									</button>
								</Link>
							</div>
						</div>
					</aside>

					{/* CONTENT AREA */}
					<article className={css({ lg: { w: '3/4' }, maxW: '3xl' })}>
						{/* Intro text */}
						<div
							className={css({
								fontSize: { base: 'xl', md: '2xl' },
								color: 'gray.600',
								fontWeight: 'medium',
								lineHeight: 'relaxed',
								mb: '16',
								fontStyle: 'italic',
								borderLeftWidth: '4px',
								borderColor: 'ocobo.yellow',
								pl: '8',
							})}
						>
							{article.intro}
						</div>

						{/* Content blocks */}
						<div
							className={flex({
								direction: 'column',
								gap: '16',
								align: 'stretch',
							})}
						>
							{article.sections.map((section) => (
								<section
									key={section.id}
									id={section.id}
									className={css({ scrollMarginTop: '40' })}
								>
									<h2
										className={css({
											fontFamily: 'display',
											fontSize: '3xl',
											fontWeight: 'black',
											color: 'ocobo.dark',
											mb: '8',
											letterSpacing: 'tight',
										})}
									>
										{section.title}
									</h2>
									<div
										className={css({
											maxW: 'none',
											color: 'gray.600',
											lineHeight: 'relaxed',
											fontWeight: 'medium',
										})}
									>
										<p className={css({ mb: '6' })}>{section.content}</p>
										{section.list && (
											<ul
												className={flex({
													direction: 'column',
													gap: '4',
													align: 'stretch',
													mt: '8',
												})}
											>
												{section.list.map((item) => (
													<li
														key={item}
														className={`${flex({ gap: '4', align: 'start' })} ${css(
															{
																p: '5',
																bg: 'gray.50',
																rounded: 'xl',
																borderWidth: '1px',
																borderColor: 'transparent',
																transition: 'all',
																_hover: { borderColor: 'ocobo.yellow/20' },
															},
														)}`}
													>
														<div
															className={css({
																mt: '1',
																color: 'ocobo.yellow',
															})}
														>
															<CheckCircle2 size={18} />
														</div>
														<span
															className={css({
																color: 'gray.800',
																fontWeight: 'bold',
															})}
														>
															{item}
														</span>
													</li>
												))}
											</ul>
										)}
									</div>
								</section>
							))}
						</div>

						{/* AUTHOR BIO */}
						<div
							className={`${flex({
								direction: { base: 'column', md: 'row' },
								align: 'center',
								gap: '8',
							})} ${css({
								mt: '24',
								pt: '12',
								borderTopWidth: '1px',
								borderColor: 'gray.100',
								bg: 'gray.50/50',
								p: '10',
								rounded: '3xl',
							})}`}
						>
							<div
								className={css({
									w: '24',
									h: '24',
									rounded: 'full',
									overflow: 'hidden',
									filter: 'grayscale(100%)',
									flexShrink: 0,
									borderWidth: '4px',
									borderColor: 'white',
									shadow: 'lg',
								})}
							>
								<img
									src={article.author.image}
									alt={article.author.name}
									className={css({
										w: 'full',
										h: 'full',
										objectFit: 'cover',
									})}
								/>
							</div>
							<div
								className={css({
									textAlign: { base: 'center', md: 'left' },
								})}
							>
								<h4
									className={css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										mb: '1',
									})}
								>
									{article.author.name}
								</h4>
								<p
									className={css({
										fontSize: 'sm',
										fontWeight: 'bold',
										color: 'gray.400',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										mb: '4',
									})}
								>
									{article.author.role}
								</p>
								<p
									className={css({
										color: 'gray.500',
										fontSize: 'sm',
										lineHeight: 'relaxed',
										maxW: 'md',
									})}
								>
									Experte en architecture de revenus et transformation
									opérationnelle. Aude accompagne les dirigeants à transformer
									leur vision en système pilotable.
								</p>
								<div
									className={`${flex({
										justify: { base: 'center', md: 'flex-start' },
										gap: '4',
									})} ${css({
										mt: '6',
									})}`}
								>
									<a
										href="#"
										className={css({
											color: 'gray.400',
											transition: 'colors',
											_hover: { color: 'ocobo.dark' },
										})}
									>
										<Linkedin size={20} />
									</a>
									<a
										href="#"
										className={css({
											color: 'gray.400',
											transition: 'colors',
											_hover: { color: 'ocobo.dark' },
										})}
									>
										<MessageSquare size={20} />
									</a>
								</div>
							</div>
						</div>

						{/* NEWSLETTER INTEGRATION */}
						<div
							className={css({
								mt: '20',
								bg: 'ocobo.yellow',
								p: { base: '10', md: '14' },
								rounded: '3xl',
								position: 'relative',
								overflow: 'hidden',
							})}
						>
							<div
								className={css({
									position: 'absolute',
									top: '0',
									right: '0',
									p: '4',
									opacity: 0.05,
								})}
							>
								<Layout size={200} strokeWidth={1} />
							</div>
							<div
								className={css({
									position: 'relative',
									zIndex: 10,
									maxW: 'xl',
								})}
							>
								<h3
									className={css({
										fontFamily: 'display',
										fontSize: '3xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										mb: '4',
										fontStyle: 'italic',
									})}
								>
									Le RevOps vous passionne ?
								</h3>
								<p
									className={css({
										color: 'ocobo.dark/70',
										fontWeight: 'bold',
										fontSize: 'lg',
										mb: '8',
									})}
								>
									Rejoignez 2 000+ décideurs qui revents nos meilleures
									méthodologies une fois par mois.
								</p>
								<form
									className={flex({
										direction: { base: 'column', sm: 'row' },
										gap: '4',
									})}
								>
									<input
										type="email"
										placeholder="votre@email.com"
										className={css({
											flexGrow: 1,
											px: '6',
											py: '4',
											bg: 'white/90',
											border: 'none',
											outline: 'none',
											color: 'ocobo.dark',
											fontWeight: 'bold',
											rounded: 'xl',
											_placeholder: { color: 'gray.400' },
											_focus: { bg: 'white' },
										})}
									/>
									<button
										type="submit"
										className={css({
											px: '8',
											py: '4',
											bg: 'ocobo.dark',
											color: 'white',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											fontSize: 'xs',
											rounded: 'xl',
											transition: 'all',
											_hover: { bg: 'black' },
										})}
									>
										S'inscrire
									</button>
								</form>
							</div>
						</div>
					</article>
				</div>

				{/* RELATED ARTICLES */}
				<div
					className={css({
						mt: '32',
						pt: '20',
						borderTopWidth: '1px',
						borderColor: 'gray.100',
					})}
				>
					<h3
						className={css({
							fontFamily: 'display',
							fontSize: '3xl',
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '12',
						})}
					>
						À lire ensuite
					</h3>
					<div
						className={grid({ columns: { base: 1, md: 2, lg: 3 }, gap: '8' })}
					>
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className={css({
									cursor: 'pointer',
									'& img': {
										transition: 'transform',
										transitionDuration: '700ms',
									},
									'&:hover img': {
										transform: 'scale(1.05)',
									},
									'&:hover h4': {
										color: 'ocobo.yellow',
									},
									'&:hover .read-more': {
										color: 'ocobo.dark',
									},
								})}
							>
								<div
									className={css({
										aspectRatio: '16/10',
										overflow: 'hidden',
										rounded: '2xl',
										mb: '6',
										bg: 'gray.100',
										borderWidth: '1px',
										borderColor: 'gray.100',
									})}
								>
									<img
										src={`https://picsum.photos/600/400?grayscale&random=${i + 20}`}
										className={css({
											w: 'full',
											h: 'full',
											objectFit: 'cover',
											opacity: 0.8,
										})}
										alt="Related"
									/>
								</div>
								<span
									className={css({
										fontFamily: 'display',
										fontWeight: 'bold',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										color: 'ocobo.coral',
										mb: '3',
										display: 'block',
									})}
								>
									Performance
								</span>
								<h4
									className={css({
										fontFamily: 'display',
										fontSize: 'xl',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										mb: '4',
										transition: 'colors',
										lineHeight: 'tight',
									})}
								>
									Comment réduire votre CAC via l'automatisation RevOps
								</h4>
								<div
									className={`${hstack({ gap: '2' })} ${css({
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										color: 'gray.400',
									})}`}
								>
									<span>8 MIN</span>
									<span
										className={css({
											w: '1',
											h: '1',
											bg: 'gray.200',
											rounded: 'full',
										})}
									/>
									<div
										className={`read-more ${hstack({ gap: '1' })} ${css({
											transition: 'colors',
										})}`}
									>
										Lire l'article <ArrowRight size={12} />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
