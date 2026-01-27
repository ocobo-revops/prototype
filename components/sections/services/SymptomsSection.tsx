import type React from 'react';
import { css } from 'styled-system/css';
import { PyramidSection } from '../../illustrations';

export const SymptomsSection: React.FC = () => {
	return (
		<section
			className={css({
				pt: { base: '12', md: '24' },
				pb: '0',
				bg: 'white',
				overflow: 'hidden',
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
						textAlign: 'center',
						mb: { base: '16', md: '24' },
					})}
				>
					<h2
						className={css({
							fontFamily: 'display',
							fontSize: { base: '3xl', md: '5xl' },
							fontWeight: 'bold',
							color: 'ocobo.dark',
							mb: '6',
							lineHeight: 'tight',
						})}
					>
						Quand la croissance s'accélère,{' '}
						<br className={css({ display: { base: 'none', md: 'block' } })} />{' '}
						la complexité arrive.
					</h2>
					<p
						className={css({
							fontSize: { base: 'lg', md: 'xl' },
							color: 'gray.600',
							fontWeight: 'medium',
						})}
					>
						Dans toutes les entreprises en mouvement, les mêmes symptômes sont
						légion :
					</p>
				</div>

				{/* MOBILE LAYOUT (List) */}
				<div
					className={css({
						display: { md: 'none' },
						spaceY: '8',
						pb: '12',
					})}
				>
					<div
						className={css({
							bg: 'gray.50',
							p: '6',
							rounded: '2xl',
							borderWidth: '1px',
							borderColor: 'gray.100',
							position: 'relative',
							overflow: 'hidden',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								right: '0',
								w: '20',
								h: '20',
								bg: 'ocobo.coral',
								opacity: '0.1',
								roundedBottomLeft: 'full',
							})}
						/>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '4',
								mb: '4',
							})}
						>
							<div
								className={css({
									w: '10',
									h: '10',
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									rounded: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'lg',
									shadow: 'sm',
								})}
							>
								1
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
								})}
							>
								CEO
							</h3>
						</div>
						<ul
							className={css({
								spaceY: '2',
								fontSize: 'sm',
								color: 'gray.600',
							})}
						>
							<li
								className={css({
									display: 'flex',
									alignItems: 'flex-start',
									gap: '2',
								})}
							>
								• Manque de visibilité sur le business
							</li>
						</ul>
					</div>
					<div
						className={css({
							bg: 'gray.50',
							p: '6',
							rounded: '2xl',
							borderWidth: '1px',
							borderColor: 'gray.100',
							position: 'relative',
							overflow: 'hidden',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								right: '0',
								w: '20',
								h: '20',
								bg: 'ocobo.yellow',
								opacity: '0.1',
								roundedBottomLeft: 'full',
							})}
						/>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '4',
								mb: '4',
							})}
						>
							<div
								className={css({
									w: '10',
									h: '10',
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									rounded: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'lg',
									shadow: 'sm',
								})}
							>
								2
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
								})}
							>
								Managers
							</h3>
						</div>
						<ul
							className={css({
								spaceY: '2',
								fontSize: 'sm',
								color: 'gray.600',
							})}
						>
							<li
								className={css({
									display: 'flex',
									alignItems: 'flex-start',
									gap: '2',
								})}
							>
								• Prévisions instables
							</li>
						</ul>
					</div>
					<div
						className={css({
							bg: 'gray.50',
							p: '6',
							rounded: '2xl',
							borderWidth: '1px',
							borderColor: 'gray.100',
							position: 'relative',
							overflow: 'hidden',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								right: '0',
								w: '20',
								h: '20',
								bg: 'ocobo.sky',
								opacity: '0.1',
								roundedBottomLeft: 'full',
							})}
						/>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '4',
								mb: '4',
							})}
						>
							<div
								className={css({
									w: '10',
									h: '10',
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									rounded: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'lg',
									shadow: 'sm',
								})}
							>
								3
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
								})}
							>
								Équipes terrain
							</h3>
						</div>
						<ul
							className={css({
								spaceY: '2',
								fontSize: 'sm',
								color: 'gray.600',
							})}
						>
							<li
								className={css({
									display: 'flex',
									alignItems: 'flex-start',
									gap: '2',
								})}
							>
								• Trop d'outils, pas assez de clarté
							</li>
						</ul>
					</div>
					<div
						className={css({
							bg: 'gray.50',
							p: '6',
							rounded: '2xl',
							borderWidth: '1px',
							borderColor: 'gray.100',
							position: 'relative',
							overflow: 'hidden',
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: '0',
								right: '0',
								w: '20',
								h: '20',
								bg: 'ocobo.mint',
								opacity: '0.1',
								roundedBottomLeft: 'full',
							})}
						/>
						<div
							className={css({
								display: 'flex',
								alignItems: 'center',
								gap: '4',
								mb: '4',
							})}
						>
							<div
								className={css({
									w: '10',
									h: '10',
									bg: 'white',
									borderWidth: '1px',
									borderColor: 'ocobo.dark',
									rounded: 'full',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: 'display',
									fontWeight: 'bold',
									fontSize: 'lg',
									shadow: 'sm',
								})}
							>
								4
							</div>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: 'xl',
									fontWeight: 'bold',
									color: 'ocobo.dark',
								})}
							>
								Clients
							</h3>
						</div>
						<ul
							className={css({
								spaceY: '2',
								fontSize: 'sm',
								color: 'gray.600',
							})}
						>
							<li
								className={css({
									display: 'flex',
									alignItems: 'flex-start',
									gap: '2',
								})}
							>
								• Expérience inégale
							</li>
						</ul>
					</div>
				</div>

				{/* DESKTOP LAYOUT (Pyramid Redesign) */}
				<div className={css({ display: { base: 'none', md: 'block' } })}>
					<PyramidSection />
				</div>
			</div>
		</section>
	);
};
