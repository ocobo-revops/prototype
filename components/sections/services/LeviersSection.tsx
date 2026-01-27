import { ArrowRight, Cpu, Layers, Users } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';
import { SectionHeader } from '../../organisms/SectionHeader';

export const LeviersSection: React.FC = () => {
	return (
		<section
			className={css({
				py: '24',
				bg: 'white',
				borderTopWidth: '1px',
				borderBottomWidth: '1px',
				borderColor: 'gray.50',
			})}
		>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<SectionHeader
					badge="LEVIERS DE CROISSANCE"
					title="Nos 3 leviers d'accompagnement."
					subtitle="Pour mettre votre stratégie Revenue en mouvement, nous combinons méthode, technologie et expertise."
					centered={false}
					className={css({ maxW: '3xl', mb: '20' })}
				/>

				<div
					className={grid({
						columns: { base: 1, lg: 3 },
						gap: { base: '12', lg: '8' },
					})}
				>
					{/* Levier 1: Méthode */}
					<Link
						to="/method"
						className={vstack({ h: 'full', alignItems: 'stretch' })}
					>
						<div
							className={`${vstack({ alignItems: 'stretch' })} ${css({
								position: 'relative',
								p: '10',
								bg: 'gray.50',
								rounded: '3xl',
								borderWidth: '1px',
								borderColor: 'gray.100',
								flexGrow: '1',
								transition: 'all',
								transitionDuration: '500',
								overflow: 'hidden',
								_hover: {
									shadow: '2xl',
									bg: 'white',
									transform: 'translateY(-8px)',
								},
							})}`}
						>
							<div
								className={`${hstack({ justify: 'space-between' })} ${css({ mb: '12' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '14',
										h: '14',
										bg: 'white',
										rounded: '2xl',
										color: 'ocobo.yellow',
										shadow: 'sm',
										borderWidth: '1px',
										borderColor: 'gray.100',
										_groupHover: { transform: 'scale(1.1)' },
										transition: 'transform',
									})}`}
								>
									<Layers size={28} />
								</div>
								<ArrowRight
									className={css({
										color: 'gray.200',
										_groupHover: { color: 'ocobo.dark' },
										transition: 'colors',
									})}
									size={24}
								/>
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									mb: '6',
									_groupHover: { color: 'ocobo.yellow' },
									transition: 'colors',
								})}
							>
								Notre méthode
							</h3>
							<p
								className={css({
									color: 'gray.400',
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									mb: '4',
								})}
							>
								The Revenue Experience System™
							</p>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'sm',
									lineHeight: 'relaxed',
									mb: '10',
									fontWeight: 'medium',
									flexGrow: '1',
								})}
							>
								Une méthode vivante, opérée en sprints, conçue pour durer :
								alignement des équipes, stack utile, data fiable et équipes
								autonomes.
							</p>

							<div
								className={css({
									w: 'full',
									h: '1',
									bg: 'ocobo.yellow',
									opacity: '0.2',
									mb: '8',
									rounded: 'full',
									_groupHover: { opacity: '1' },
									transition: 'opacity',
								})}
							/>

							<div
								className={flex({
									wrap: 'wrap',
									gap: '2',
									h: '48px',
									alignContent: 'flex-start',
								})}
							>
								{['Alignment', 'Technology', 'Performance', 'Enablement'].map(
									(tag) => (
										<span
											key={tag}
											className={css({
												px: '3',
												py: '1',
												bg: 'white',
												borderWidth: '1px',
												borderColor: 'gray.100',
												rounded: 'full',
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: 'wider',
												color: 'gray.400',
											})}
										>
											{tag}
										</span>
									),
								)}
							</div>
						</div>
					</Link>

					{/* Levier 2: Technologie */}
					<Link
						to="/technology"
						className={vstack({ h: 'full', alignItems: 'stretch' })}
					>
						<div
							className={`${vstack({ alignItems: 'stretch' })} ${css({
								position: 'relative',
								p: '10',
								bg: 'gray.50',
								rounded: '3xl',
								borderWidth: '1px',
								borderColor: 'gray.100',
								flexGrow: '1',
								transition: 'all',
								transitionDuration: '500',
								overflow: 'hidden',
								_hover: {
									shadow: '2xl',
									bg: 'white',
									transform: 'translateY(-8px)',
								},
							})}`}
						>
							<div
								className={`${hstack({ justify: 'space-between' })} ${css({ mb: '12' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '14',
										h: '14',
										bg: 'white',
										rounded: '2xl',
										color: 'ocobo.sky',
										shadow: 'sm',
										borderWidth: '1px',
										borderColor: 'gray.100',
										_groupHover: { transform: 'scale(1.1)' },
										transition: 'transform',
									})}`}
								>
									<Cpu size={28} />
								</div>
								<ArrowRight
									className={css({
										color: 'gray.200',
										_groupHover: { color: 'ocobo.dark' },
										transition: 'colors',
									})}
									size={24}
								/>
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									mb: '6',
									_groupHover: { color: 'ocobo.sky' },
									transition: 'colors',
								})}
							>
								Notre technologie
							</h3>
							<p
								className={css({
									color: 'gray.400',
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									mb: '4',
								})}
							>
								Infrastructure Unifiée
							</p>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'sm',
									lineHeight: 'relaxed',
									mb: '10',
									fontWeight: 'medium',
									flexGrow: '1',
								})}
							>
								Une stack rationalisée, co-conçue avec les leaders (HubSpot,
								Salesforce, Modjo...). Nous sommes des architectes agnostiques,
								chaque choix sert votre stratégie.
							</p>

							<div
								className={css({
									w: 'full',
									h: '1',
									bg: 'ocobo.sky',
									opacity: '0.2',
									mb: '8',
									rounded: 'full',
									_groupHover: { opacity: '1' },
									transition: 'opacity',
								})}
							/>

							<div
								className={vstack({
									h: '48px',
									justify: 'flex-start',
									gap: '3',
									alignItems: 'flex-start',
								})}
							>
								<div
									className={`${hstack({ gap: '4' })} ${css({
										filter: 'grayscale(1)',
										opacity: '0.4',
										_groupHover: { opacity: '1', filter: 'grayscale(0)' },
										transition: 'all',
									})}`}
								>
									<img
										src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg"
										className={css({ h: '4', w: 'auto' })}
										alt="Hubspot"
									/>
									<img
										src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
										className={css({ h: '4', w: 'auto' })}
										alt="Salesforce"
									/>
								</div>
								<div
									className={`${hstack()} ${css({
										filter: 'grayscale(1)',
										opacity: '0.4',
										_groupHover: { opacity: '1', filter: 'grayscale(0)' },
										transition: 'all',
									})}`}
								>
									<img
										src="https://dust.tt/static/logo_icon.png"
										className={css({ h: '4', w: 'auto' })}
										alt="Dust"
									/>
								</div>
							</div>
						</div>
					</Link>

					{/* Levier 3: Équipe */}
					<Link
						to="/studio"
						className={vstack({ h: 'full', alignItems: 'stretch' })}
					>
						<div
							className={`${vstack({ alignItems: 'stretch' })} ${css({
								position: 'relative',
								p: '10',
								bg: 'gray.50',
								rounded: '3xl',
								borderWidth: '1px',
								borderColor: 'gray.100',
								flexGrow: '1',
								transition: 'all',
								transitionDuration: '500',
								overflow: 'hidden',
								_hover: {
									shadow: '2xl',
									bg: 'white',
									transform: 'translateY(-8px)',
								},
							})}`}
						>
							<div
								className={`${hstack({ justify: 'space-between' })} ${css({ mb: '12' })}`}
							>
								<div
									className={`${center()} ${css({
										w: '14',
										h: '14',
										bg: 'white',
										rounded: '2xl',
										color: 'ocobo.mint',
										shadow: 'sm',
										borderWidth: '1px',
										borderColor: 'gray.100',
										_groupHover: { transform: 'scale(1.1)' },
										transition: 'transform',
									})}`}
								>
									<Users size={28} />
								</div>
								<ArrowRight
									className={css({
										color: 'gray.200',
										_groupHover: { color: 'ocobo.dark' },
										transition: 'colors',
									})}
									size={24}
								/>
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									mb: '6',
									_groupHover: { color: 'ocobo.mint' },
									transition: 'colors',
								})}
							>
								Notre équipe
							</h3>
							<p
								className={css({
									color: 'gray.400',
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									mb: '4',
								})}
							>
								Le RevOps Studio
							</p>
							<p
								className={css({
									color: 'gray.600',
									fontSize: 'sm',
									lineHeight: 'relaxed',
									mb: '10',
									fontWeight: 'medium',
									flexGrow: '1',
								})}
							>
								Votre squad d'experts seniors, issus des meilleures scale-ups :
								TheFork, Qonto, Payfit, Spendesk... Ils pensent comme une
								direction Revenue embarquée.
							</p>

							<div
								className={css({
									w: 'full',
									h: '1',
									bg: 'ocobo.mint',
									opacity: '0.2',
									mb: '8',
									rounded: 'full',
									_groupHover: { opacity: '1' },
									transition: 'opacity',
								})}
							/>

							<div
								className={vstack({
									h: '48px',
									justify: 'flex-start',
									alignItems: 'flex-start',
								})}
							>
								<div
									className={css({
										fontSize: 'xs',
										fontWeight: 'black',
										color: 'gray.400',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										lineHeight: 'relaxed',
									})}
								>
									TheFork • Qonto • Payfit
								</div>
								<div
									className={css({
										fontSize: 'xs',
										fontWeight: 'black',
										color: 'gray.400',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										lineHeight: 'relaxed',
									})}
								>
									Spendesk • Zenchef
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};
