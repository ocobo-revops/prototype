import { ArrowRight, Linkedin, Youtube } from 'lucide-react';
import type React from 'react';
import { Link } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';

export const Footer: React.FC = () => {
	return (
		<footer
			className={css({
				bg: 'ocobo.dark',
				color: 'white',
				pt: '20',
				pb: '10',
			})}
		>
			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				{/* Top Section */}
				<div
					className={`${grid({ columns: { base: 1, md: 2, lg: 4 }, gap: '12' })} ${css(
						{
							mb: '20',
							borderBottomWidth: '1px',
							borderColor: 'gray.800',
							pb: '12',
						},
					)}`}
				>
					{/* Brand & Social - Aligned Left */}
					<div
						className={`${flex({ direction: 'column', gap: '6' })} ${css({ alignItems: 'flex-start' })}`}
					>
						<img
							src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg"
							alt="Ocobo Logo"
							className={css({ h: '10', w: 'auto', objectFit: 'contain' })}
						/>

						<div className={hstack({ gap: '4' })}>
							<a
								href="https://www.linkedin.com/company/ocobofr/"
								target="_blank"
								rel="noopener noreferrer"
								className={`${center()} ${css({
									w: '8',
									h: '8',
									rounded: 'full',
									bg: 'gray.800',
									transition: 'all',
									transitionDuration: '300ms',
									_hover: { bg: 'white', color: 'ocobo.dark' },
								})}`}
							>
								<Linkedin size={16} />
							</a>
							<a
								href="https://www.youtube.com/@Ocobo-Revenue"
								target="_blank"
								rel="noopener noreferrer"
								className={`${center()} ${css({
									w: '8',
									h: '8',
									rounded: 'full',
									bg: 'gray.800',
									transition: 'all',
									transitionDuration: '300ms',
									_hover: { bg: 'white', color: 'ocobo.dark' },
								})}`}
							>
								<Youtube size={16} />
							</a>
						</div>
						<Link
							to="/contact"
							className={css({
								display: 'inline-flex',
								alignItems: 'center',
								fontSize: 'xs',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
								borderWidth: '1px',
								borderColor: 'white/30',
								rounded: 'full',
								px: '6',
								py: '3',
								transition: 'all',
								_hover: { bg: 'white', color: 'ocobo.dark' },
							})}
						>
							Prendre RDV{' '}
							<ArrowRight className={css({ ml: '2', w: '3', h: '3' })} />
						</Link>
					</div>

					{/* Links 1 */}
					<div>
						<h4
							className={css({
								fontFamily: 'display',
								fontWeight: 'bold',
								mb: '6',
								color: 'gray.400',
								fontSize: 'sm',
								textTransform: 'uppercase',
								letterSpacing: 'wider',
							})}
						>
							Ocobo
						</h4>
						<ul
							className={css({
								spaceY: '3',
								fontSize: 'sm',
								color: 'gray.300',
							})}
						>
							<li>
								<Link
									to="/about"
									className={css({
										transition: 'colors',
										_hover: { color: 'ocobo.yellow' },
									})}
								>
									Qui sommes-nous
								</Link>
							</li>
							<li>
								<Link
									to="/jobs"
									className={css({
										transition: 'colors',
										_hover: { color: 'ocobo.yellow' },
									})}
								>
									Nous rejoindre
								</Link>
							</li>
						</ul>
					</div>

					{/* Links 2 - UPDATED TO METHODE */}
					<div>
						<h4
							className={css({
								fontFamily: 'display',
								fontWeight: 'bold',
								mb: '6',
								color: 'gray.400',
								fontSize: 'sm',
								textTransform: 'uppercase',
								letterSpacing: 'wider',
							})}
						>
							Méthode
						</h4>
						<ul
							className={css({
								spaceY: '3',
								fontSize: 'sm',
								color: 'gray.300',
							})}
						>
							<li>
								<Link
									to="/method"
									className={css({
										transition: 'colors',
										_hover: { color: 'ocobo.yellow' },
									})}
								>
									The Revenue Experience System
								</Link>
							</li>
							<li>
								<Link
									to="/technology"
									className={css({
										transition: 'colors',
										_hover: { color: 'ocobo.yellow' },
									})}
								>
									Technologie
								</Link>
							</li>
							<li>
								<Link
									to="/studio"
									className={css({
										transition: 'colors',
										_hover: { color: 'ocobo.yellow' },
									})}
								>
									Le RevOps Studio
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h4
							className={css({
								fontFamily: 'display',
								fontWeight: 'bold',
								mb: '6',
								color: 'gray.400',
								fontSize: 'sm',
								textTransform: 'uppercase',
								letterSpacing: 'wider',
							})}
						>
							Ne manquez pas nos actualités
						</h4>
						<form className={vstack({ gap: '3' })}>
							<div className={css({ position: 'relative' })}>
								<input
									type="email"
									placeholder="votre@email.com"
									className={css({
										w: 'full',
										bg: 'white',
										color: 'ocobo.dark',
										px: '4',
										py: '3',
										rounded: 'md',
										fontSize: 'sm',
										outline: 'none',
										_focus: { ring: '2px', ringColor: 'ocobo.yellow' },
									})}
								/>
								<button
									type="button"
									className={css({
										position: 'absolute',
										right: '1',
										top: '1',
										bottom: '1',
										bg: 'ocobo.dark',
										color: 'white',
										fontSize: 'xs',
										px: '3',
										rounded: 'sm',
										transition: 'colors',
										_hover: { bg: 'gray.800' },
									})}
								>
									S'inscrire
								</button>
							</div>
						</form>
						<div
							className={`${flex({ align: 'center' })} ${css({
								mt: '6',
								fontSize: 'sm',
								color: 'gray.400',
							})}`}
						>
							<span className={css({ mr: '2' })}>🇫🇷</span> Français
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div
					className={`${flex({
						direction: { base: 'column', md: 'row' },
						justify: 'space-between',
						align: 'center',
					})} ${css({
						fontSize: 'xs',
						color: 'gray.500',
					})}`}
				>
					<p>2025 © Ocobo - Tous droits réservés</p>
					<div
						className={`${flex({ gap: '6' })} ${css({ mt: { base: '4', md: '0' } })}`}
					>
						<a
							href="#"
							className={css({
								transition: 'colors',
								_hover: { color: 'white' },
							})}
						>
							Confidentialité
						</a>
						<a
							href="#"
							className={css({
								transition: 'colors',
								_hover: { color: 'white' },
							})}
						>
							Conditions d'utilisation
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
