import { css } from 'styled-system/css';
import { center, flex, grid } from 'styled-system/patterns';

export const ArchitecturalGrid = () => {
	return (
		<div
			className={css({
				position: 'relative',
				w: 'full',
				maxW: '500px',
				animation: 'float-grid',
			})}
		>
			<div
				className={flex({
					align: 'stretch',
					gap: '4',
					position: 'relative',
				})}
			>
				{/* Axe Ordonnée : ALIGNEMENT */}
				<div
					className={flex({
						direction: 'column',
						align: 'center',
						justify: 'center',
						py: '4',
						shrink: '0',
					})}
				>
					<div
						className={css({
							writingMode: 'vertical-lr',
							transform: 'rotate(180deg)',
							fontFamily: 'display',
							fontWeight: 'bold',
							color: 'ocobo.dark/40',
							fontSize: 'xs',
							textTransform: 'uppercase',
							letterSpacing: '0.6em',
							mb: '4',
						})}
					>
						Alignement
					</div>
					<div
						className={css({
							w: '1px',
							bg: 'ocobo.dark/20',
							flexGrow: 1,
							transformOrigin: 'top',
							animation: 'blueprint-in',
						})}
						style={{ animationDelay: '0.2s' }}
					/>
				</div>

				{/* Grid Container */}
				<div
					className={css({
						position: 'relative',
						zIndex: '10',
						bg: 'white',
						borderWidth: '2px',
						borderColor: 'ocobo.dark',
						p: '8',
						shadow: 'offset',
						flexGrow: 1,
					})}
				>
					<div
						className={`${grid({ columns: 2, gap: '4' })} ${css({
							mb: '4',
						})}`}
					>
						<div
							className={`${center({
								opacity: '0',
								animation: 'box-pop',
								h: '24',
								bg: 'ocobo.yellow.light',
								borderWidth: '1px',
								borderColor: 'ocobo.dark',
								transition: 'transform',
								transitionDuration: '300ms',
								cursor: 'pointer',
								_hover: { transform: 'translateY(-4px)' },
							})} group`}
							style={{ animationDelay: '0.4s' }}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									transition: 'colors',
									transitionDuration: '300ms',
									fontSize: { base: 'xs', md: 'sm' },
									_groupHover: { color: 'ocobo.yellow' },
								})}
							>
								MARKETING
							</span>
						</div>
						<div
							className={`${center({
								opacity: '0',
								animation: 'box-pop',
								h: '24',
								bg: 'ocobo.sky.light',
								borderWidth: '1px',
								borderColor: 'ocobo.dark',
								transition: 'transform',
								transitionDuration: '300ms',
								cursor: 'pointer',
								_hover: { transform: 'translateY(-4px)' },
							})} group`}
							style={{ animationDelay: '0.5s' }}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									transition: 'colors',
									transitionDuration: '300ms',
									fontSize: { base: 'xs', md: 'sm' },
									_groupHover: { color: 'ocobo.sky' },
								})}
							>
								SALES
							</span>
						</div>
						<div
							className={`${center({
								opacity: '0',
								animation: 'box-pop',
								h: '24',
								bg: 'ocobo.mint.light',
								borderWidth: '1px',
								borderColor: 'ocobo.dark',
								transition: 'transform',
								transitionDuration: '300ms',
								cursor: 'pointer',
								_hover: { transform: 'translateY(-4px)' },
							})} group`}
							style={{ animationDelay: '0.6s' }}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									transition: 'colors',
									transitionDuration: '300ms',
									fontSize: { base: 'xs', md: 'sm' },
									_groupHover: { color: 'ocobo.mint' },
								})}
							>
								CLIENT
							</span>
						</div>
						<div
							className={`${center({
								opacity: '0',
								animation: 'box-pop',
								h: '24',
								bg: 'ocobo.coral.light',
								borderWidth: '1px',
								borderColor: 'ocobo.dark',
								transition: 'transform',
								transitionDuration: '300ms',
								cursor: 'pointer',
								_hover: { transform: 'translateY(-4px)' },
							})} group`}
							style={{ animationDelay: '0.7s' }}
						>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									transition: 'colors',
									transitionDuration: '300ms',
									fontSize: { base: 'xs', md: 'sm' },
									_groupHover: { color: 'ocobo.coral' },
								})}
							>
								FINANCE
							</span>
						</div>
					</div>

					{/* Foundation Line (X-Axis) */}
					<div
						className={css({
							h: '2',
							bg: 'ocobo.dark',
							w: 'full',
							mb: '4',
							transformOrigin: 'left',
							animation: 'blueprint-in',
						})}
					/>

					{/* Axe Abscisse labels */}
					<div
						className={flex({
							justify: 'space-between',
							fontSize: 'xs',
							fontWeight: 'bold',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							color: 'ocobo.dark/60',
						})}
					>
						<span
							className={css({ opacity: '0', animation: 'box-pop' })}
							style={{ animationDelay: '0.9s' }}
						>
							Technology
						</span>
						<span
							className={css({ opacity: '0', animation: 'box-pop' })}
							style={{ animationDelay: '1s' }}
						>
							Performance
						</span>
						<span
							className={css({ opacity: '0', animation: 'box-pop' })}
							style={{ animationDelay: '1.1s' }}
						>
							Enablement
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
