import { Popover } from '@ark-ui/react/popover';
import { ArrowRight, Mail, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { css } from 'styled-system/css';

export function NewsletterWidget() {
	const [isVisible, setIsVisible] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400 && !isDismissed) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isDismissed]);

	if (isDismissed) return null;

	return (
		<Popover.Root
			open={isExpanded}
			onOpenChange={(details) => setIsExpanded(details.open)}
			positioning={{ placement: 'top-end', offset: { mainAxis: 8 } }}
		>
			<div
				className={css({
					position: 'fixed',
					bottom: '6',
					right: '6',
					zIndex: 110,
					transition: 'all 700ms cubic-bezier(0.23, 1, 0.32, 1)',
					transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
					opacity: isVisible ? 1 : 0,
					pointerEvents: isVisible ? 'auto' : 'none',
				})}
			>
				<div
					className={css({
						position: 'relative',
						_hover: { '& .dismiss-btn': { opacity: 1 } },
					})}
				>
					{/* Quick dismiss button on collapsed badge */}
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setIsDismissed(true);
						}}
						className={`dismiss-btn ${css({
							position: 'absolute',
							top: '-2',
							right: '-2',
							width: '6',
							height: '6',
							bg: 'white',
							color: 'ocobo.dark',
							rounded: 'full',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							shadow: 'lg',
							border: '1px solid',
							borderColor: 'gray.100',
							opacity: 0,
							transition: 'opacity 0.2s',
							zIndex: 10,
							cursor: 'pointer',
							_hover: { bg: 'ocobo.coral', color: 'white' },
						})}`}
						title="Ne plus afficher"
					>
						<X size={12} strokeWidth={3} />
					</button>

					<Popover.Trigger asChild>
						<button
							type="button"
							className={css({
								bg: 'ocobo.dark',
								color: 'white',
								p: '4',
								rounded: '2xl',
								shadow: '2xl',
								border: '1px solid',
								borderColor: 'white/10',
								display: 'flex',
								alignItems: 'center',
								gap: '3',
								transition: 'all 0.2s',
								cursor: 'pointer',
								_hover: { borderColor: 'ocobo.yellow/50' },
							})}
						>
							<div className={css({ position: 'relative' })}>
								<Mail size={20} className={css({ color: 'ocobo.yellow' })} />
								<span
									className={css({
										position: 'absolute',
										top: '-1',
										right: '-1',
										width: '2',
										height: '2',
										bg: 'ocobo.coral',
										rounded: 'full',
										animation: 'pulse',
									})}
								/>
							</div>
							<span
								className={css({
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: '0.2em',
									pr: '2',
								})}
							>
								La Lettre de l'Architecte
							</span>
						</button>
					</Popover.Trigger>
				</div>

				<Popover.Positioner>
					<Popover.Content
						className={css({
							bg: 'ocobo.dark',
							color: 'white',
							p: '6',
							rounded: '3xl',
							shadow: 'dark',
							border: '1px solid',
							borderColor: 'white/10',
							width: '320px',
							position: 'relative',
							overflow: 'hidden',
							_open: {
								animation: 'fade-in-up 0.3s ease-out',
							},
						})}
					>
						<div
							className={css({
								position: 'absolute',
								top: 0,
								left: 0,
								width: 'full',
								height: '1',
								bg: 'ocobo.yellow',
							})}
						/>

						<Popover.CloseTrigger asChild>
							<button
								type="button"
								className={css({
									position: 'absolute',
									top: '4',
									right: '4',
									color: 'gray.500',
									transition: 'colors 0.2s',
									cursor: 'pointer',
									_hover: { color: 'white' },
								})}
							>
								<X size={16} />
							</button>
						</Popover.CloseTrigger>

						<div className={css({ mb: '6', mt: '2' })}>
							<div
								className={css({
									display: 'flex',
									alignItems: 'center',
									gap: '2',
									mb: '3',
								})}
							>
								<Sparkles
									size={14}
									className={css({ color: 'ocobo.yellow' })}
								/>
								<span
									className={css({
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: '0.3em',
										color: 'ocobo.yellow',
									})}
								>
									Newsletter Mensuelle
								</span>
							</div>
							<h4
								className={css({
									fontFamily: 'display',
									fontSize: 'lg',
									fontWeight: 'bold',
									lineHeight: 'tight',
									mb: '2',
								})}
							>
								La science du revenu, <br />
								directement dans votre boîte.
							</h4>
							<p
								className={css({
									fontSize: 'xs',
									color: 'gray.400',
									fontWeight: 'medium',
								})}
							>
								Rejoignez 2 000+ leaders. <br />
								Pas de spam, juste de l'architecture.
							</p>
						</div>

						<form
							className={css({
								display: 'flex',
								flexDirection: 'column',
								gap: '3',
							})}
							onSubmit={(e) => {
								e.preventDefault();
								setIsDismissed(true);
							}}
						>
							<input
								type="email"
								placeholder="votre@email.com"
								required
								className={css({
									width: 'full',
									bg: 'white/5',
									border: '1px solid',
									borderColor: 'white/10',
									rounded: 'xl',
									px: '4',
									py: '3',
									fontSize: 'xs',
									outline: 'none',
									transition: 'all 0.2s',
									_placeholder: { color: 'gray.600' },
									_focus: { borderColor: 'ocobo.yellow' },
								})}
							/>
							<button
								type="submit"
								className={css({
									width: 'full',
									bg: 'ocobo.yellow',
									color: 'ocobo.dark',
									py: '3',
									rounded: 'xl',
									fontSize: 'xs',
									fontWeight: 'black',
									textTransform: 'uppercase',
									letterSpacing: '0.2em',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '2',
									transition: 'all 0.2s',
									cursor: 'pointer',
									_hover: {
										bg: 'white',
										'& svg': { transform: 'translateX(4px)' },
									},
								})}
							>
								S'inscrire{' '}
								<ArrowRight
									size={14}
									className={css({
										transition: 'transform 0.2s',
									})}
								/>
							</button>
						</form>

						<button
							type="button"
							onClick={() => {
								setIsDismissed(true);
							}}
							className={css({
								width: 'full',
								mt: '4',
								fontSize: 'xs',
								fontWeight: 'bold',
								color: 'gray.600',
								textTransform: 'uppercase',
								letterSpacing: '0.15em',
								transition: 'colors 0.2s',
								cursor: 'pointer',
								_hover: { color: 'gray.400' },
							})}
						>
							Masquer définitivement
						</button>
					</Popover.Content>
				</Popover.Positioner>
			</div>
		</Popover.Root>
	);
}
