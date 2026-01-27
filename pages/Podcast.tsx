import {
	Clock,
	Headphones,
	Linkedin,
	Pause,
	Play,
	Search,
	Share2,
	SkipBack,
	SkipForward,
	Star,
} from 'lucide-react';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { center, flex, hstack, vstack } from 'styled-system/patterns';
import { Button } from '../components/atoms/Button';

export function Podcast() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const episodes = [
		{
			id: 1,
			number: '42',
			title: "L'art de l'architecture RevOps : Scaler sans casser",
			guest: 'Benjamin Boileux',
			role: 'CEO @ Ocobo',
			duration: '45 min',
			date: '15 Jan 2024',
			description:
				"Comment passer d'un CRM 'poubelle' à une infrastructure de données qui soutient réellement la croissance. Pourquoi l'architecture doit précéder l'outil.",
			image:
				'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
			category: 'Architecture',
		},
		{
			id: 2,
			number: '41',
			title: "Le Customer Success Ops : L'arme secrète de la rétention",
			guest: 'Marie Piquemil',
			role: 'VP Operations @ Combo',
			duration: '38 min',
			date: '02 Jan 2024',
			description:
				"Pourquoi le RevOps ne s'arrête pas au closing. Focus sur l'onboarding et l'expansion. Comment structurer la donnée post-sale.",
			image:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg',
			category: 'CS Ops',
		},
		{
			id: 3,
			number: '40',
			title: 'Aligner Marketing & Sales : Mythe ou réalité ?',
			guest: 'Arnaud Meunier',
			role: 'CSO @ ePack Hygiène',
			duration: '42 min',
			date: '18 Dec 2023',
			description:
				"Retour d'expérience sur une transformation RevOps complète après une phase d'hypercroissance. Les clés de l'alignement stratégique.",
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
			category: 'Alignement',
		},
		{
			id: 4,
			number: '39',
			title: 'La Data Revenue : Du chaos au cockpit de pilotage',
			guest: 'Luciana Collinet',
			role: 'VP Revenue @ Jus Mundi',
			duration: '52 min',
			date: '05 Dec 2023',
			description:
				"Comment construire des dashboards que le board utilise vraiment pour prendre des décisions. L'importance de la Single Source of Truth.",
			image:
				'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Luciana%20Collinet.jpg',
			category: 'Data',
		},
	];

	const filteredEpisodes = episodes.filter(
		(e) =>
			e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			e.guest.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className={css({ width: 'full', bg: 'white' })}>
			{/* Hero Section */}
			<section
				className={css({
					pt: { base: '48', md: '64' },
					pb: { base: '24', md: '32' },
					bg: 'ocobo.dark',
					position: 'relative',
					overflow: 'hidden',
				})}
			>
				<div
					className={css({
						position: 'absolute',
						inset: 0,
						opacity: 0.05,
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
					<div
						className={flex({
							direction: { base: 'column', lg: 'row' },
							align: 'center',
							gap: '16',
						})}
					>
						<div className={css({ lg: { width: '50%' } })}>
							<div
								className={`${flex({ gap: '3', align: 'center' })} ${css({ mb: '8' })}`}
							>
								<span
									className={css({
										width: '12',
										height: 'px',
										bg: 'ocobo.yellow',
									})}
								/>
								<span
									className={css({
										fontFamily: 'display',
										fontWeight: 'black',
										color: 'ocobo.yellow',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: '0.4em',
									})}
								>
									Ocobo Originals
								</span>
							</div>
							<h1
								className={css({
									fontFamily: 'display',
									fontSize: '6xl',
									fontWeight: 'black',
									color: 'white',
									mb: '8',
									lineHeight: '0.9',
									letterSpacing: 'tighter',
								})}
							>
								Revenue
								<br />
								<span
									className={css({
										color: 'transparent',
										WebkitTextStroke: '1px white',
									})}
								>
									Echoes.
								</span>
							</h1>
							<p
								className={css({
									fontSize: 'xl',
									color: 'gray.400',
									mb: '12',
									maxW: 'lg',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								Le podcast qui déconstruit la science du revenu avec ceux qui la
								bâtissent au quotidien.
							</p>

							<div
								className={`${hstack({ gap: '4' })} ${css({ flexWrap: 'wrap' })}`}
							>
								<button
									type="button"
									className={`${flex({ gap: '3', align: 'center' })} ${css({
										px: '6',
										py: '3',
										bg: 'white',
										color: 'ocobo.dark',
										rounded: 'full',
										fontWeight: 'bold',
										fontSize: 'xs',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										transition: 'background 200ms',
										cursor: 'pointer',
										_hover: { bg: 'ocobo.yellow' },
									})}`}
								>
									<Headphones size={18} /> S'abonner
								</button>
								<div
									className={`${flex({ gap: '4', align: 'center' })} ${css({
										px: '6',
										py: '3',
										bg: 'white/5',
										border: '1px solid',
										borderColor: 'white/10',
										rounded: 'full',
										filter: 'grayscale(1)',
										opacity: 0.5,
									})}`}
								>
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
										className={css({ height: '5', width: 'auto' })}
										alt="Spotify"
									/>
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
										className={css({
											height: '5',
											width: 'auto',
											filter: 'invert(1)',
										})}
										alt="Apple"
									/>
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/d/df/Deezer_logo.svg"
										className={css({
											height: '4',
											width: 'auto',
											filter: 'invert(1)',
										})}
										alt="Deezer"
									/>
								</div>
							</div>
						</div>

						{/* Spotlight Player Card */}
						<div className={css({ lg: { width: '50%' } })}>
							<div
								className={css({
									bg: 'white/5',
									backdropFilter: 'blur(16px)',
									border: '1px solid',
									borderColor: 'white/10',
									p: { base: '8', md: '12' },
									rounded: '3xl',
									shadow: '2xl',
									position: 'relative',
								})}
							>
								<div
									className={css({
										position: 'absolute',
										top: 0,
										right: 0,
										width: '32',
										height: '32',
										bg: 'ocobo.yellow/10',
										rounded: 'full',
										filter: 'blur(48px)',
									})}
								/>

								<div
									className={`${flex({ gap: '6', align: 'center' })} ${css({ mb: '10' })}`}
								>
									<div
										className={css({
											width: '24',
											height: '24',
											rounded: '2xl',
											overflow: 'hidden',
											shadow: '2xl',
											flexShrink: 0,
											border: '2px solid',
											borderColor: 'white/10',
										})}
									>
										<img
											src={episodes[0].image}
											className={css({
												width: 'full',
												height: 'full',
												objectFit: 'cover',
											})}
											alt="Current Episode"
										/>
									</div>
									<div>
										<span
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												color: 'ocobo.yellow',
												textTransform: 'uppercase',
												letterSpacing: '0.3em',
												display: 'block',
												mb: '2',
											})}
										>
											Dernier Épisode — #{episodes[0].number}
										</span>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: '2xl',
												fontWeight: 'bold',
												color: 'white',
												lineHeight: 'tight',
											})}
										>
											{episodes[0].title}
										</h3>
									</div>
								</div>

								{/* Player Controls */}
								<div className={vstack({ gap: '8' })}>
									<div className={vstack({ gap: '2' })}>
										<div
											className={css({
												height: '1.5',
												width: 'full',
												bg: 'white/10',
												rounded: 'full',
												position: 'relative',
												overflow: 'hidden',
											})}
										>
											<div
												className={css({
													position: 'absolute',
													left: 0,
													top: 0,
													bottom: 0,
													width: '33%',
													bg: 'ocobo.yellow',
												})}
											/>
										</div>
										<div
											className={`${hstack({ justify: 'space-between' })} ${css(
												{
													fontSize: 'xs',
													fontWeight: 'bold',
													color: 'gray.500',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
												},
											)}`}
										>
											<span>12:45</span>
											<span>{episodes[0].duration}</span>
										</div>
									</div>

									<div
										className={flex({
											gap: '10',
											align: 'center',
											justify: 'center',
										})}
									>
										<button
											type="button"
											className={css({
												color: 'white/40',
												transition: 'color 200ms',
												cursor: 'pointer',
												_hover: { color: 'white' },
											})}
										>
											<SkipBack size={24} />
										</button>
										<button
											type="button"
											onClick={() => setIsPlaying(!isPlaying)}
											className={`${center()} ${css({
												width: '20',
												height: '20',
												bg: 'ocobo.yellow',
												color: 'ocobo.dark',
												rounded: 'full',
												shadow: 'xl',
												transition: 'transform 200ms',
												cursor: 'pointer',
												_hover: { transform: 'scale(1.05)' },
											})}`}
										>
											{isPlaying ? (
												<Pause size={32} fill="currentColor" />
											) : (
												<Play
													size={32}
													fill="currentColor"
													className={css({ ml: '1' })}
												/>
											)}
										</button>
										<button
											type="button"
											className={css({
												color: 'white/40',
												transition: 'color 200ms',
												cursor: 'pointer',
												_hover: { color: 'white' },
											})}
										>
											<SkipForward size={24} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Filter Bar */}
			<section
				className={css({
					position: 'sticky',
					top: '80px',
					zIndex: 50,
					bg: 'white/90',
					backdropFilter: 'blur(12px)',
					borderBottom: '1px solid',
					borderColor: 'gray.100',
					py: '6',
				})}
			>
				<div
					className={`${flex({
						direction: { base: 'column', md: 'row' },
						align: 'center',
						justify: 'center',
						gap: '6',
					})} ${css({
						maxW: '3xl',
						mx: 'auto',
						px: '4',
					})}`}
				>
					<div className={css({ position: 'relative', width: 'full' })}>
						<input
							type="text"
							placeholder="Rechercher un épisode, un invité, un sujet..."
							className={css({
								width: 'full',
								pl: '12',
								pr: '6',
								py: '4',
								bg: 'gray.50',
								border: '1px solid',
								borderColor: 'gray.100',
								rounded: 'full',
								fontSize: 'base',
								outline: 'none',
								transition: 'all 200ms',
								shadow: 'sm',
								_focus: { borderColor: 'ocobo.dark', bg: 'white' },
							})}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Search
							size={20}
							className={css({
								position: 'absolute',
								left: '4',
								top: '50%',
								transform: 'translateY(-50%)',
								color: 'gray.400',
							})}
						/>
					</div>
				</div>
			</section>

			{/* Episodes List */}
			<section className={css({ maxW: '5xl', mx: 'auto', px: '4', py: '24' })}>
				<div className={vstack({ gap: '10' })}>
					{filteredEpisodes.length > 0 ? (
						filteredEpisodes.map((ep) => (
							<div
								key={ep.id}
								className={`${flex({
									direction: { base: 'column', md: 'row' },
									gap: '10',
								})} ${css({
									position: 'relative',
									p: '8',
									bg: 'white',
									border: '1px solid',
									borderColor: 'gray.100',
									rounded: '3xl',
									transition: 'all 500ms',
									_hover: { shadow: 'soft-lg', transform: 'translateY(-8px)' },
								})}`}
							>
								{/* Episode Number */}
								<div
									className={`${center()} ${css({
										position: 'absolute',
										top: '-4',
										left: '-4',
										width: '12',
										height: '12',
										bg: 'white',
										border: '1px solid',
										borderColor: 'gray.100',
										rounded: 'xl',
										shadow: 'lg',
										fontFamily: 'display',
										fontWeight: 'black',
										color: 'ocobo.dark/20',
										fontSize: 'xl',
										zIndex: 20,
									})}`}
								>
									{ep.number}
								</div>

								<div
									className={css({
										md: { width: '33%' },
										aspectRatio: '4/3',
										position: 'relative',
										overflow: 'hidden',
										rounded: '3xl',
										flexShrink: 0,
									})}
								>
									<img
										src={ep.image}
										alt={ep.guest}
										className={css({
											width: 'full',
											height: 'full',
											objectFit: 'cover',
											filter: 'grayscale(1)',
											opacity: 0.8,
											transition: 'all 700ms',
											_groupHover: {
												filter: 'grayscale(0)',
												opacity: 1,
												transform: 'scale(1.05)',
											},
										})}
									/>
									<div
										className={`${center()} ${css({
											position: 'absolute',
											inset: 0,
											bg: 'ocobo.dark/20',
											opacity: 0,
											transition: 'opacity 200ms',
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
												transform: 'scale(0.9)',
												transition: 'transform 500ms',
												_groupHover: { transform: 'scale(1)' },
											})}`}
										>
											<Play
												size={24}
												fill="currentColor"
												className={css({ ml: '1' })}
											/>
										</div>
									</div>
								</div>

								<div
									className={`${vstack({ justify: 'space-between' })} ${css({
										py: '2',
										flexGrow: 1,
									})}`}
								>
									<div>
										<div
											className={`${hstack({ gap: '3' })} ${css({ mb: '4' })}`}
										>
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.2em',
													color: 'ocobo.yellow',
												})}
											>
												{ep.category}
											</span>
											<span
												className={css({
													width: '1',
													height: '1',
													bg: 'gray.200',
													rounded: 'full',
												})}
											/>
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.2em',
													color: 'gray.400',
												})}
											>
												{ep.date}
											</span>
										</div>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: '3xl',
												fontWeight: 'bold',
												color: 'ocobo.dark',
												mb: '4',
												lineHeight: 'tight',
												transition: 'color 200ms',
												_groupHover: { color: 'black' },
											})}
										>
											{ep.title}
										</h3>
										<p
											className={css({
												fontSize: 'base',
												color: 'gray.500',
												mb: '8',
												fontWeight: 'medium',
												lineHeight: 'relaxed',
												maxW: '2xl',
											})}
										>
											{ep.description}
										</p>
									</div>

									<div
										className={`${flex({ align: 'center', justify: 'space-between' })} ${css(
											{
												borderTop: '1px solid',
												borderColor: 'gray.50',
												pt: '6',
												mt: 'auto',
											},
										)}`}
									>
										<div className={hstack({ gap: '4' })}>
											<div
												className={css({
													width: '10',
													height: '10',
													rounded: 'full',
													overflow: 'hidden',
													filter: 'grayscale(1)',
													opacity: 0.8,
													transition: 'all 200ms',
													border: '1px solid',
													borderColor: 'gray.100',
													_groupHover: { opacity: 1, filter: 'grayscale(0)' },
												})}
											>
												<img
													src={ep.image}
													alt={ep.guest}
													className={css({
														width: 'full',
														height: 'full',
														objectFit: 'cover',
													})}
												/>
											</div>
											<div>
												<p
													className={css({
														fontSize: 'xs',
														fontWeight: 'black',
														color: 'ocobo.dark',
														textTransform: 'uppercase',
														letterSpacing: 'widest',
														lineHeight: 'none',
														mb: '1',
													})}
												>
													{ep.guest}
												</p>
												<p
													className={css({
														fontSize: 'xs',
														fontWeight: 'medium',
														color: 'gray.400',
														textTransform: 'uppercase',
														letterSpacing: 'widest',
													})}
												>
													{ep.role}
												</p>
											</div>
										</div>
										<div
											className={`${hstack({ gap: '2' })} ${css({ color: 'gray.300' })}`}
										>
											<Clock size={14} />
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
												})}
											>
												{ep.duration}
											</span>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div
							className={css({
								textAlign: 'center',
								py: '20',
								bg: 'gray.50',
								rounded: '3xl',
								border: '1px dashed',
								borderColor: 'gray.200',
							})}
						>
							<p
								className={css({
									color: 'gray.400',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'xl',
								})}
							>
								Aucun épisode trouvé pour cette recherche.
							</p>
							<button
								type="button"
								onClick={() => setSearchTerm('')}
								className={css({
									mt: '4',
									color: 'ocobo.dark',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									fontSize: 'xs',
									textDecoration: 'underline',
									cursor: 'pointer',
								})}
							>
								Réinitialiser la recherche
							</button>
						</div>
					)}
				</div>

				<div className={`${flex({ justify: 'center' })} ${css({ mt: '20' })}`}>
					<Button
						variant="outline"
						className={css({
							px: '12',
							py: '4',
							fontSize: 'xs',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							border: '2px solid',
						})}
					>
						Voir tous les épisodes
					</Button>
				</div>
			</section>

			{/* Host Section */}
			<section
				className={css({
					py: '24',
					bg: 'gray.50',
					borderTop: '1px solid',
					borderBottom: '1px solid',
					borderColor: 'gray.100',
				})}
			>
				<div
					className={css({
						maxW: '4xl',
						mx: 'auto',
						px: '4',
						textAlign: 'center',
					})}
				>
					<div
						className={css({
							width: '24',
							height: '24',
							mx: 'auto',
							mb: '8',
							rounded: 'full',
							overflow: 'hidden',
							border: '4px solid',
							borderColor: 'white',
							shadow: 'xl',
							filter: 'grayscale(1)',
						})}
					>
						<img
							src="https://placehold.co/200x200/F3F4F6/212323?text=AC"
							alt="Host"
						/>
					</div>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: '3xl',
							fontWeight: 'bold',
							color: 'ocobo.dark',
							mb: '4',
						})}
					>
						Animé par Aude Cadiot
					</h2>
					<p
						className={css({
							fontSize: 'xl',
							color: 'gray.600',
							fontWeight: 'medium',
							lineHeight: 'relaxed',
							mb: '8',
							fontStyle: 'italic',
						})}
					>
						"Ma mission avec Revenue Echoes est de mettre en lumière les
						architectures de revenus qui fonctionnent, loin des buzzwords et des
						recettes miracles."
					</p>
					<div className={flex({ justify: 'center', gap: '4' })}>
						<a
							href="#"
							className={css({
								color: 'gray.400',
								transition: 'color 200ms',
								_hover: { color: 'ocobo.dark' },
							})}
						>
							<Linkedin size={20} />
						</a>
						<a
							href="#"
							className={css({
								color: 'gray.400',
								transition: 'color 200ms',
								_hover: { color: 'ocobo.dark' },
							})}
						>
							<Share2 size={20} />
						</a>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section
				className={css({
					bg: 'ocobo.yellow',
					py: '32',
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
					<span
						className={css({
							fontFamily: 'display',
							fontWeight: 'black',
							color: 'ocobo.dark',
							opacity: 0.3,
							fontSize: 'xs',
							textTransform: 'uppercase',
							letterSpacing: '0.4em',
							mb: '8',
							display: 'inline-block',
						})}
					>
						Prochainement
					</span>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '5xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '0.9',
							letterSpacing: 'tighter',
						})}
					>
						Ne manquez plus aucun
						<br />
						écho stratégique.
					</h2>
					<div
						className={flex({
							direction: { base: 'column', sm: 'row' },
							justify: 'center',
							gap: '6',
						})}
					>
						<Button variant="cta" size="xl">
							S'abonner à la newsletter
						</Button>
						<Button variant="outline" size="xl">
							Nous suggérer un invité
						</Button>
					</div>
				</div>

				{/* Decorative */}
				<div
					className={css({
						position: 'absolute',
						top: '50%',
						left: '10',
						transform: 'translateY(-50%)',
						opacity: 0.1,
					})}
				>
					<Star size={180} strokeWidth={1} />
				</div>
			</section>
		</div>
	);
}

export default Podcast;
