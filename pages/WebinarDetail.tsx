import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	CheckCircle2,
	Clock,
	Play,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { css } from 'styled-system/css';
import { Badge, Button } from '../components/atoms';

export function WebinarDetail() {
	const { slug } = useParams();

	// biome-ignore lint/suspicious/noExplicitAny: mock data structure
	const webinars: Record<string, any> = {
		'nettoyer-crm-5-etapes': {
			title: 'Masterclass : Nettoyer son CRM en 5 étapes',
			category: 'DATA',
			date: '05 OCT 2024',
			duration: '45 min',
			youtubeId: 'dQw4w9WgXcQ',
			description:
				'La donnée est le carburant de votre machine revenue. Un CRM pollué par des doublons, des champs vides et des process obsolètes freine votre croissance. Dans ce webinar, nous vous montrons comment reprendre le contrôle et transformer votre CRM en actif stratégique.',
			topics: [
				'Identifier les zones de pollution de votre CRM',
				'Le dictionnaire de données : votre boussole',
				'Automatiser le nettoyage sans risque de perte',
				'Les rituels pour maintenir la qualité sur le long terme',
				"Reporting : comment mesurer l'impact de la data quality",
			],
		},
		'live-qa-commissionnement': {
			title: 'Live Q&A : Vos questions sur le commissionnement',
			category: 'COMPENSATION',
			date: '15 NOV 2024',
			duration: '60 min',
			youtubeId: 'dQw4w9WgXcQ',
			description:
				"Le plan de commissionnement est l'un des leviers les plus puissants pour orienter les comportements vers la valeur. Découvrez les réponses aux questions les plus fréquentes sur la structuration du variable.",
			topics: [
				'Choisir les bons accélérateurs',
				'Gérer les commissions sur le multi-year',
				"Aligner Sales et CS sur l'expansion",
				'Automatiser le calcul pour plus de transparence',
			],
		},
	};

	const webinar = webinars[slug || ''] || webinars['nettoyer-crm-5-etapes'];

	return (
		<div
			className={css({
				width: 'full',
				pt: '40',
				pb: '24',
				bg: 'white',
				fontFamily: 'sans',
			})}
		>
			{/* Background Pattern */}
			<div
				className={css({
					position: 'fixed',
					inset: 0,
					opacity: 0.02,
					pointerEvents: 'none',
					zIndex: -1,
					backgroundImage: 'radial-gradient(ocobo.dark 1px, transparent 1px)',
					backgroundSize: '20px 20px',
				})}
			/>

			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				{/* Back Button */}
				<div className={css({ mb: '12' })}>
					<Link
						to="/resources"
						className={css({
							display: 'inline-flex',
							alignItems: 'center',
							color: 'gray.400',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: '0.2em',
							fontSize: 'xs',
							transition: 'color 200ms',
							_hover: { color: 'ocobo.dark' },
						})}
					>
						<ArrowLeft size={14} className={css({ mr: '2' })} /> Retour à la
						librairie
					</Link>
				</div>

				{/* Header */}
				<div className={css({ maxW: '4xl', mb: '16' })}>
					<Badge variant="sky" className={css({ mb: '8' })}>
						WEBINAR / {webinar.category}
					</Badge>
					<h1
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '8',
							lineHeight: 'tight',
							letterSpacing: 'tight',
						})}
					>
						{webinar.title}
					</h1>
					<div
						className={css({
							display: 'flex',
							gap: '8',
							fontSize: 'xs',
							fontWeight: 'black',
							color: 'gray.400',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
						})}
					>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '2',
							})}
						>
							<Calendar size={14} className={css({ color: 'ocobo.yellow' })} />{' '}
							{webinar.date}
						</div>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '2',
							})}
						>
							<Clock size={14} className={css({ color: 'ocobo.sky' })} />{' '}
							{webinar.duration}
						</div>
					</div>
				</div>

				{/* Video Player */}
				<div className={css({ mb: '20' })}>
					<div
						className={css({
							position: 'relative',
							aspectRatio: '16/9',
							width: 'full',
							rounded: '3xl',
							overflow: 'hidden',
							shadow: 'soft-lg',
							bg: 'ocobo.dark',
						})}
					>
						<iframe
							src={`https://www.youtube.com/embed/${webinar.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
							title={webinar.title}
							className={css({
								position: 'absolute',
								inset: 0,
								width: 'full',
								height: 'full',
								border: 'none',
							})}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>
				</div>

				{/* Main Content */}
				<div
					className={css({
						display: 'grid',
						gridTemplateColumns: { lg: 'repeat(12, 1fr)' },
						gap: { base: '16', md: '24' },
					})}
				>
					{/* Content Body */}
					<div
						className={css({
							lg: { gridColumn: 'span 8' },
							display: 'flex',
							flexDirection: 'column',
							gap: '16',
						})}
					>
						<div>
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
								Résumé du webinar
							</h2>
							<p
								className={css({
									fontSize: 'xl',
									color: 'gray.600',
									fontWeight: 'medium',
									lineHeight: 'relaxed',
									mb: '10',
								})}
							>
								{webinar.description}
							</p>
						</div>

						<div
							className={css({
								bg: 'gray.50',
								p: '10',
								rounded: '3xl',
								border: '1px solid',
								borderColor: 'gray.100',
							})}
						>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'black',
									color: 'ocobo.dark',
									mb: '8',
								})}
							>
								Au programme :
							</h3>
							<ul
								className={css({
									display: 'flex',
									flexDirection: 'column',
									gap: '6',
								})}
							>
								{webinar.topics.map((topic: string) => (
									<li
										key={topic}
										className={css({
											display: 'flex',
											alignItems: 'flex-start',
											gap: '5',
											_hover: {
												'& .icon-wrapper': { bg: 'ocobo.sky', color: 'white' },
												'& .topic-text': { color: 'black' },
											},
										})}
									>
										<div
											className={`icon-wrapper ${css({
												mt: '1',
												width: '6',
												height: '6',
												rounded: 'full',
												bg: 'white',
												border: '1px solid',
												borderColor: 'gray.200',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: 'ocobo.sky',
												flexShrink: 0,
												shadow: 'sm',
												transition: 'all 200ms',
											})}`}
										>
											<CheckCircle2 size={14} />
										</div>
										<span
											className={`topic-text ${css({
												fontSize: 'lg',
												fontWeight: 'bold',
												color: 'ocobo.dark',
												transition: 'color 200ms',
											})}`}
										>
											{topic}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Sidebar */}
					<div className={css({ lg: { gridColumn: 'span 4' } })}>
						<div className={css({ position: 'sticky', top: '32' })}>
							<div
								className={css({
									p: '10',
									bg: 'ocobo.dark',
									rounded: '3xl',
									color: 'white',
									shadow: '2xl',
									position: 'relative',
									overflow: 'hidden',
								})}
							>
								{/* Decorative */}
								<div
									className={css({
										position: 'absolute',
										top: 0,
										right: 0,
										width: '24',
										height: '24',
										bg: 'ocobo.sky/10',
										rounded: 'full',
										filter: 'blur(48px)',
										transform: 'translate(50%, -50%)',
									})}
								/>

								<h4
									className={css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'black',
										mb: '6',
										lineHeight: 'tight',
									})}
								>
									Prêt à transformer votre machine revenue ?
								</h4>
								<p
									className={css({
										color: 'gray.400',
										fontWeight: 'medium',
										mb: '10',
										lineHeight: 'relaxed',
										fontSize: 'sm',
									})}
								>
									Nos architectes RevOps vous accompagnent dans l'audit et
									l'assainissement de vos systèmes pour libérer votre
									croissance.
								</p>
								<Button
									variant="white"
									size="lg"
									className={css({
										width: 'full',
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										border: 'none',
										transition: 'all 200ms',
										_hover: { bg: 'ocobo.sky', color: 'white' },
									})}
									to="/contact"
								>
									Réserver mon audit flash
								</Button>

								<div
									className={css({
										mt: '10',
										pt: '8',
										borderTop: '1px solid',
										borderColor: 'white/10',
										display: 'flex',
										alignItems: 'center',
										gap: '4',
									})}
								>
									<div className={css({ display: 'flex' })}>
										{[1, 2, 3].map((i) => (
											<div
												key={i}
												className={css({
													width: '8',
													height: '8',
													rounded: 'full',
													border: '2px solid',
													borderColor: 'ocobo.dark',
													bg: 'gray.600',
													overflow: 'hidden',
													ml: i > 1 ? '-2' : '0',
												})}
											>
												<img
													src={`https://i.pravatar.cc/100?img=${i + 10}`}
													alt="Expert"
												/>
											</div>
										))}
									</div>
									<span
										className={css({
											fontSize: 'xs',
											fontWeight: 'black',
											color: 'gray.500',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											lineHeight: 'none',
										})}
									>
										+100 architectes <br /> déjà engagés
									</span>
								</div>
							</div>

							{/* Related Resource */}
							<div
								className={css({
									mt: '8',
									p: '8',
									border: '1px solid',
									borderColor: 'gray.100',
									rounded: '3xl',
									bg: 'white',
									shadow: 'sm',
									transition: 'shadow 200ms',
									cursor: 'pointer',
									_hover: {
										shadow: 'md',
										'& .title': { color: 'ocobo.yellow' },
										'& .link': { color: 'ocobo.dark' },
									},
								})}
							>
								<span
									className={css({
										fontSize: 'xs',
										fontWeight: 'black',
										color: 'ocobo.coral',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										mb: '2',
										display: 'block',
									})}
								>
									Dernier Article
								</span>
								<h5
									className={`title ${css({
										fontFamily: 'display',
										fontSize: 'lg',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										transition: 'color 200ms',
										lineHeight: 'tight',
									})}`}
								>
									Pourquoi votre reporting HubSpot est faux (et comment le
									réparer)
								</h5>
								<div
									className={`link ${css({
										mt: '4',
										display: 'flex',
										alignItems: 'center',
										fontSize: 'xs',
										fontWeight: 'black',
										color: 'gray.300',
										transition: 'color 200ms',
										textTransform: 'uppercase',
										letterSpacing: '0.2em',
									})}`}
								>
									Lire l'article{' '}
									<ArrowRight size={14} className={css({ ml: '2' })} />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* More Webinars */}
				<div
					className={css({
						mt: '40',
						pt: '20',
						borderTop: '1px solid',
						borderColor: 'gray.100',
					})}
				>
					<div
						className={css({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							mb: '12',
						})}
					>
						<h3
							className={css({
								fontFamily: 'display',
								fontSize: '3xl',
								fontWeight: 'black',
								color: 'ocobo.dark',
							})}
						>
							Autres masterclasses
						</h3>
						<Link
							to="/resources"
							className={css({
								fontSize: 'xs',
								fontWeight: 'black',
								textTransform: 'uppercase',
								letterSpacing: '0.3em',
								color: 'gray.400',
								transition: 'color 200ms',
								display: 'flex',
								alignItems: 'center',
								gap: '2',
								_hover: { color: 'ocobo.dark' },
							})}
						>
							Tout voir <ArrowRight size={14} />
						</Link>
					</div>

					<div
						className={css({
							display: 'grid',
							gridTemplateColumns: {
								md: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)',
							},
							gap: '10',
						})}
					>
						{[1, 2].map((i) => (
							<div
								key={i}
								className={css({
									cursor: 'pointer',
									_hover: {
										'& img': {
											filter: 'grayscale(0)',
											transform: 'scale(1.05)',
										},
										'& .play-btn': { opacity: 1, transform: 'translateY(0)' },
										'& .title': { color: 'ocobo.sky' },
										'& .link': { color: 'ocobo.dark' },
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
										position: 'relative',
										shadow: 'sm',
									})}
								>
									<img
										src={`https://picsum.photos/600/400?grayscale&random=${i + 60}`}
										className={css({
											width: 'full',
											height: 'full',
											objectFit: 'cover',
											filter: 'grayscale(1)',
											transition: 'all 700ms',
										})}
										alt="Related"
									/>
									<div
										className={css({
											position: 'absolute',
											inset: 0,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										})}
									>
										<div
											className={`play-btn ${css({
												width: '12',
												height: '12',
												bg: 'white/90',
												rounded: 'full',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: 'ocobo.dark',
												opacity: 0,
												transform: 'translateY(1rem)',
												transition: 'all 200ms',
											})}`}
										>
											<Play fill="currentColor" size={16} />
										</div>
									</div>
								</div>
								<span
									className={css({
										fontFamily: 'display',
										fontWeight: 'black',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: '0.2em',
										color: 'ocobo.sky',
										mb: '3',
										display: 'block',
									})}
								>
									WEBINAR
								</span>
								<h4
									className={`title ${css({
										fontFamily: 'display',
										fontSize: 'xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										mb: '4',
										transition: 'color 200ms',
										lineHeight: 'tight',
									})}`}
								>
									Scaling des flux Data : les secrets des leaders SaaS
								</h4>
								<div
									className={`link ${css({
										display: 'flex',
										alignItems: 'center',
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										color: 'gray.400',
										gap: '2',
										transition: 'color 200ms',
									})}`}
								>
									Voir le replay <ArrowRight size={12} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default WebinarDetail;
