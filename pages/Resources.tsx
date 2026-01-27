import { ArrowRight, BookOpen, Mic, Play, Video } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';
import { Button } from '../components/atoms';

export function Resources() {
	const [activeTab, setActiveTab] = useState<
		'all' | 'podcast' | 'webinar' | 'blog'
	>('all');

	const resources = [
		{
			id: 1,
			type: 'podcast',
			slug: 'scaler-equipe-sales',
			title: 'Ep. 42 : Comment scaler son équipe Sales sans chaos',
			guest: 'Jean de Qonto',
			duration: '45 min',
			image: 'https://picsum.photos/400/300?grayscale&random=10',
			date: '12 Oct 2024',
			tag: 'Stratégie',
		},
		{
			id: 2,
			type: 'blog',
			slug: 'comprendre-et-structurer-une-equipe-RevOps-modeles-stades-de-maturite',
			title:
				'Comprendre et structurer une équipe RevOps : modèles et stades de maturité',
			readTime: '12 min de lecture',
			image: 'https://picsum.photos/400/300?grayscale&random=11',
			date: '10 Oct 2024',
			tag: 'Organisation',
		},
		{
			id: 3,
			type: 'webinar',
			slug: 'nettoyer-crm-5-etapes',
			title: 'Masterclass : Nettoyer son CRM en 5 étapes',
			status: 'Replay disponible',
			image: 'https://picsum.photos/400/300?grayscale&random=12',
			date: '05 Oct 2024',
			tag: 'Data',
		},
		{
			id: 4,
			type: 'blog',
			slug: 'revops-vs-salesops',
			title: 'RevOps vs Sales Ops : Quelles différences ?',
			readTime: '5 min de lecture',
			image: 'https://picsum.photos/400/300?grayscale&random=13',
			date: '28 Sep 2024',
			tag: 'Organisation',
		},
		{
			id: 5,
			type: 'podcast',
			slug: 'alignement-marketing-sales-payfit',
			title: "Ep. 41 : L'alignement Marketing-Sales chez PayFit",
			guest: 'Marie de PayFit',
			duration: '38 min',
			image: 'https://picsum.photos/400/300?grayscale&random=14',
			date: '20 Sep 2024',
			tag: 'Alignement',
		},
		{
			id: 6,
			type: 'webinar',
			slug: 'live-qa-commissionnement',
			title: 'Live Q&A : Vos questions sur le commissionnement',
			status: 'Prochainement',
			image: 'https://picsum.photos/400/300?grayscale&random=15',
			date: '15 Nov 2024',
			tag: 'Compensation',
		},
	];

	const filteredResources =
		activeTab === 'all'
			? resources
			: resources.filter((r) => r.type === activeTab);

	return (
		<div className={css({ width: 'full', pt: '32', pb: '24', bg: 'white' })}>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				{/* Header */}
				<div
					className={`${flex({ direction: { base: 'column', md: 'row' }, gap: '8', justify: 'space-between', align: { md: 'flex-end' } })} ${css(
						{
							mb: '20',
							borderBottom: '1px solid',
							borderColor: 'gray.200',
							pb: '12',
						},
					)}`}
				>
					<div className={css({ maxW: '2xl' })}>
						<span
							className={css({
								fontFamily: 'display',
								fontWeight: 'bold',
								color: 'ocobo.coral',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								fontSize: 'sm',
								mb: '2',
								display: 'block',
							})}
						>
							RevOps Library
						</span>
						<h1
							className={css({
								fontFamily: 'display',
								fontSize: '5xl',
								fontWeight: 'bold',
								color: 'ocobo.dark',
								mb: '6',
							})}
						>
							Explorez la science du revenu.
						</h1>
						<p
							className={css({
								fontSize: 'xl',
								color: 'gray.600',
								fontWeight: 'medium',
							})}
						>
							Articles, interviews et masterclasses pour structurer votre
							croissance.
						</p>
					</div>

					{/* Tabs */}
					<div className={flex({ wrap: 'wrap', gap: '2' })}>
						{[
							{ id: 'all', label: 'Tout voir' },
							{
								id: 'podcast' as const,
								label: 'Podcast',
								icon: <Mic size={14} />,
							},
							{
								id: 'webinar' as const,
								label: 'Webinars',
								icon: <Video size={14} />,
							},
							{
								id: 'blog' as const,
								label: 'Articles',
								icon: <BookOpen size={14} />,
							},
						].map((tab) => (
							<button
								type="button"
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`${hstack({ gap: '2' })} ${css({
									px: '5',
									py: '2.5',
									rounded: 'full',
									fontSize: 'sm',
									fontWeight: 'bold',
									transition: 'all 200ms',
									border: '1px solid',
									cursor: 'pointer',
									bg: activeTab === tab.id ? 'ocobo.dark' : 'white',
									color: activeTab === tab.id ? 'white' : 'gray.600',
									borderColor: activeTab === tab.id ? 'ocobo.dark' : 'gray.200',
									_hover: {
										borderColor:
											activeTab === tab.id ? 'ocobo.dark' : 'gray.300',
										bg: activeTab === tab.id ? 'ocobo.dark' : 'gray.50',
									},
								})}`}
							>
								{tab.icon} {tab.label}
							</button>
						))}
					</div>
				</div>

				{/* Featured Resource */}
				{activeTab === 'all' && (
					<div className={css({ mb: '16' })}>
						<div
							className={`${grid({ columns: { md: 2 } })} ${css({
								position: 'relative',
								rounded: '3xl',
								overflow: 'hidden',
								bg: 'ocobo.dark',
								color: 'white',
								shadow: '2xl',
							})}`}
						>
							<div
								className={css({
									position: 'relative',
									overflow: 'hidden',
									height: { base: '16rem', md: 'auto' },
								})}
							>
								<img
									src="https://picsum.photos/800/600?grayscale&random=99"
									alt="Featured"
									className={css({
										position: 'absolute',
										inset: 0,
										width: 'full',
										height: 'full',
										objectFit: 'cover',
										transition: 'transform 700ms',
										opacity: 0.8,
										_groupHover: { transform: 'scale(1.05)' },
									})}
								/>
								<div
									className={css({
										position: 'absolute',
										inset: 0,
										bgGradient: { base: 'to-t', md: 'to-r' },
										gradientFrom: 'ocobo.dark/90',
										gradientTo: 'transparent',
									})}
								/>
							</div>
							<div
								className={`${flex({ direction: 'column', gap: '0', justify: 'center', align: 'flex-start' })} ${css(
									{
										p: { base: '10', md: '16' },
									},
								)}`}
							>
								<span
									className={css({
										bg: 'ocobo.yellow',
										color: 'ocobo.dark',
										px: '3',
										py: '1',
										rounded: 'base',
										fontSize: 'xs',
										fontWeight: 'bold',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										mb: '6',
									})}
								>
									À la une
								</span>
								<h2
									className={css({
										fontFamily: 'display',
										fontSize: { base: '3xl', md: '4xl' },
										fontWeight: 'bold',
										mb: '6',
										transition: 'color 200ms',
										_groupHover: { color: 'ocobo.yellow' },
									})}
								>
									The Revenue Experience System™ : Le Framework complet
								</h2>
								<p
									className={css({
										color: 'gray.400',
										mb: '8',
										lineHeight: 'relaxed',
									})}
								>
									Découvrez notre méthodologie propriétaire pour aligner vos
									équipes et scaler vos revenus. Un guide complet de 40 pages.
								</p>
								<Button variant="white">Télécharger le guide</Button>
							</div>
						</div>
					</div>
				)}

				{/* Grid */}
				<div
					className={`${grid({ columns: { md: 2, lg: 3 }, gap: '8' })} ${css({
						rowGap: '12',
					})}`}
				>
					{filteredResources.map((item) => (
						<Link
							key={item.id}
							to={
								item.type === 'blog'
									? `/blog/${item.slug}`
									: item.type === 'webinar'
										? `/webinar/${item.slug}`
										: '/resources'
							}
							className={`${vstack({ gap: '0' })} ${css({
								height: 'full',
								cursor: 'pointer',
								_hover: { '& .title': { color: 'ocobo.coral' } },
							})}`}
						>
							<div
								className={css({
									position: 'relative',
									overflow: 'hidden',
									mb: '5',
									border: '1px solid',
									borderColor: 'gray.100',
									aspectRatio: '4/3',
								})}
							>
								<img
									src={item.image}
									alt={item.title}
									className={css({
										width: 'full',
										height: 'full',
										objectFit: 'cover',
										transition: 'transform 700ms',
										_groupHover: { transform: 'scale(1.05)' },
									})}
								/>

								{/* Type Badge */}
								<div
									className={`${hstack({ gap: '2' })} ${css({
										position: 'absolute',
										top: '4',
										left: '4',
										bg: 'white/95',
										backdropFilter: 'blur(4px)',
										px: '3',
										py: '1.5',
										fontSize: 'xs',
										fontWeight: 'bold',
										textTransform: 'uppercase',
										letterSpacing: 'wider',
										color: 'ocobo.dark',
										shadow: 'sm',
									})}`}
								>
									{item.type === 'podcast' && <Mic size={12} />}
									{item.type === 'webinar' && <Video size={12} />}
									{item.type === 'blog' && <BookOpen size={12} />}
									{item.type}
								</div>

								{/* Play Button Overlay */}
								{(item.type === 'podcast' || item.type === 'webinar') && (
									<div
										className={`${center()} ${css({
											position: 'absolute',
											inset: 0,
											bg: 'ocobo.dark/20',
											opacity: 0,
											transition: 'opacity 300ms',
											_groupHover: { opacity: 1 },
										})}`}
									>
										<div
											className={`${center()} ${css({
												width: '16',
												height: '16',
												bg: 'white',
												rounded: 'full',
												color: 'ocobo.dark',
												shadow: 'xl',
												transform: 'translateY(1rem)',
												transition: 'transform 300ms',
												_groupHover: { transform: 'translateY(0)' },
											})}`}
										>
											<Play
												fill="currentColor"
												size={24}
												className={css({ ml: '1' })}
											/>
										</div>
									</div>
								)}
							</div>

							<div
								className={`${vstack()} ${css({
									flexGrow: 1,
								})}`}
							>
								<div
									className={`${flex({ align: 'center', justify: 'space-between' })} ${css(
										{
											fontSize: 'xs',
											fontWeight: 'bold',
											color: 'gray.400',
											mb: '3',
											textTransform: 'uppercase',
											letterSpacing: 'wider',
										},
									)}`}
								>
									<span>{item.tag}</span>
									<span>{item.date}</span>
								</div>

								<h3
									className={`title ${css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'bold',
										mb: '3',
										transition: 'color 200ms',
										lineHeight: 'tight',
									})}`}
								>
									{item.title}
								</h3>

								<div
									className={`${flex({ align: 'center' })} ${css({
										mt: 'auto',
										pt: '4',
										fontSize: 'sm',
										fontWeight: 'medium',
										color: 'gray.500',
										borderTop: '1px solid',
										borderColor: 'gray.100',
									})}`}
								>
									{item.guest ? (
										<span>
											Invité :{' '}
											<span className={css({ color: 'ocobo.dark' })}>
												{item.guest}
											</span>
										</span>
									) : (
										<span>{item.readTime || item.status}</span>
									)}
									<ArrowRight
										size={16}
										className={css({
											ml: 'auto',
											opacity: 0,
											transform: 'translateX(-8px)',
											transition: 'all 200ms',
											color: 'ocobo.dark',
											_groupHover: { opacity: 1, transform: 'translateX(0)' },
										})}
									/>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Newsletter Section */}
				<div
					className={css({
						mt: '32',
						borderTop: '2px solid',
						borderColor: 'ocobo.dark',
						pt: '20',
					})}
				>
					<div
						className={`${grid({ columns: { md: 2 }, gap: '16' })} ${css({
							alignItems: 'center',
						})}`}
					>
						<div>
							<h2
								className={css({
									fontFamily: 'display',
									fontSize: '4xl',
									fontWeight: 'bold',
									mb: '6',
								})}
							>
								Rejoignez le cercle des architectes RevOps.
							</h2>
							<p
								className={css({ fontSize: 'xl', color: 'gray.600', mb: '8' })}
							>
								Pas de spam. Juste des playbooks, des templates et des retours
								d'expérience concrets. Une fois par mois.
							</p>
							<div
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
										bg: 'gray.50',
										border: '1px solid',
										borderColor: 'gray.200',
										outline: 'none',
										transition: 'all 200ms',
										_placeholder: { color: 'gray.400' },
										_focus: { borderColor: 'ocobo.dark', bg: 'white' },
									})}
								/>
								<Button>S'inscrire</Button>
							</div>
						</div>
						<div
							className={css({
								bg: 'ocobo.yellow-light',
								p: '10',
								border: '1px solid',
								borderColor: 'ocobo.yellow/20',
								position: 'relative',
							})}
						>
							<div
								className={css({
									position: 'absolute',
									top: '-4',
									left: '-4',
									width: '8',
									height: '8',
									bg: 'ocobo.dark',
								})}
							/>
							<div
								className={css({
									position: 'absolute',
									bottom: '-4',
									right: '-4',
									width: '8',
									height: '8',
									bg: 'ocobo.dark',
								})}
							/>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									mb: '4',
								})}
							>
								Dernier playbook envoyé :
							</h3>
							<div
								className={`${flex({ align: 'flex-start', gap: '4' })} ${css({
									bg: 'white',
									p: '6',
									shadow: 'sm',
									border: '1px solid',
									borderColor: 'gray.100',
								})}`}
							>
								<div
									className={`${center()} ${css({
										width: '12',
										height: '12',
										bg: 'ocobo.mint/20',
										color: 'ocobo.mint',
										fontWeight: 'bold',
										fontSize: 'xl',
									})}`}
								>
									<span className={css({ fontFamily: 'display' })}>%</span>
								</div>
								<div>
									<h4
										className={css({ fontWeight: 'bold', color: 'ocobo.dark' })}
									>
										Modèle de Variable Sales 2024
									</h4>
									<p
										className={css({
											fontSize: 'sm',
											color: 'gray.500',
											mt: '1',
										})}
									>
										Template GSheet + Guide de calcul
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resources;
