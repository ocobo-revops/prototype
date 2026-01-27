import { CheckCircle2, Handshake, Layers, Send, Sparkles } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid, vstack } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import FlexPair from '../../layout/FlexPair';

function BenefitItem({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<FlexPair gap={5}>
			<FlexPair.Icon>{icon}</FlexPair.Icon>
			<FlexPair.Content>
				<h4
					className={css({
						fontWeight: 'bold',
						color: 'ocobo.dark',
					})}
				>
					{title}
				</h4>
				<p className={css({ fontSize: 'sm', color: 'gray.500' })}>
					{description}
				</p>
			</FlexPair.Content>
		</FlexPair>
	);
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
	return (
		<div
			className={css({
				py: '12',
				textAlign: 'center',
				animation: 'fade-in-up',
			})}
		>
			<div
				className={`${center()} ${css({
					w: '20',
					h: '20',
					bg: 'ocobo.mintLight',
					color: 'ocobo.mint',
					rounded: 'full',
					mx: 'auto',
					mb: '6',
				})}`}
			>
				<CheckCircle2 size={40} />
			</div>
			<h3
				className={css({
					fontFamily: 'display',
					fontSize: '2xl',
					fontWeight: 'black',
					color: 'ocobo.dark',
					mb: '4',
				})}
			>
				Demande reçue !
			</h3>
			<p className={css({ color: 'gray.500', mb: '8' })}>
				Notre équipe étudiera votre solution et vous recontactera sous 48h.
			</p>
			<button
				type="button"
				onClick={onReset}
				className={css({
					fontSize: 'xs',
					fontWeight: 'black',
					textTransform: 'uppercase',
					letterSpacing: 'widest',
					color: 'gray.400',
					transition: 'colors',
					_hover: { color: 'ocobo.dark' },
				})}
			>
				Envoyer une autre demande
			</button>
		</div>
	);
}

function PartnerFormFields({ onSubmit }: { onSubmit: () => void }) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit();
	};

	const inputStyles = css({
		w: 'full',
		bg: 'gray.50',
		borderWidth: '1px',
		borderColor: 'gray.100',
		outline: 'none',
		p: '4',
		rounded: 'none',
		fontSize: 'sm',
		fontWeight: 'bold',
		_placeholder: { color: 'gray.300' },
		_focus: {
			borderColor: 'ocobo.dark',
			bg: 'white',
		},
	});

	const labelStyles = css({
		fontSize: 'xs',
		fontWeight: 'black',
		textTransform: 'uppercase',
		letterSpacing: '0.2em',
		color: 'gray.400',
	});

	return (
		<form
			onSubmit={handleSubmit}
			className={vstack({ gap: '6', alignItems: 'stretch' })}
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
				Devenez partenaire
			</h3>
			<div
				className={grid({
					columns: { base: 1, md: 2 },
					gap: '6',
				})}
			>
				<div className={vstack({ gap: '2', alignItems: 'stretch' })}>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
					<label className={labelStyles}>Nom de la solution*</label>
					<input
						required
						type="text"
						placeholder="ex: HubSpot"
						className={inputStyles}
					/>
				</div>
				<div className={vstack({ gap: '2', alignItems: 'stretch' })}>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
					<label className={labelStyles}>Site Web*</label>
					<input
						required
						type="url"
						placeholder="https://..."
						className={inputStyles}
					/>
				</div>
			</div>
			<div className={vstack({ gap: '2', alignItems: 'stretch' })}>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
				<label className={labelStyles}>E-mail pro*</label>
				<input
					required
					type="email"
					placeholder="nom@solution.com"
					className={inputStyles}
				/>
			</div>
			<div className={vstack({ gap: '2', alignItems: 'stretch' })}>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
				<label className={labelStyles}>Votre message</label>
				<textarea
					rows={4}
					placeholder="Parlez-nous de votre vision et de vos envies de partenariat..."
					className={`${inputStyles} ${css({ resize: 'none' })}`}
				/>
			</div>
			<button
				type="submit"
				className={`${center()} ${css({
					w: 'full',
					py: '5',
					bg: 'ocobo.dark',
					color: 'white',
					fontWeight: 'black',
					textTransform: 'uppercase',
					letterSpacing: '0.25em',
					fontSize: 'xs',
					rounded: 'none',
					transition: 'all',
					shadow: 'xl',
					gap: '3',
					_hover: { bg: 'black' },
					'& svg': {
						transition: 'transform',
					},
					'&:hover svg': {
						transform: 'translateX(4px) translateY(-4px)',
					},
				})}`}
			>
				Soumettre ma solution <Send size={16} />
			</button>
		</form>
	);
}

export function PartnerFormSection() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<section
			className={css({
				py: '32',
				bg: 'gray.50',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			<div
				className={css({
					position: 'absolute',
					top: '0',
					right: '0',
					w: '1/3',
					h: 'full',
					bg: 'white',
					transform: 'skewX(12deg) translateX(50%)',
					zIndex: -10,
				})}
			/>

			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				<div
					className={flex({
						direction: { base: 'column', lg: 'row' },
						gap: '20',
						align: 'center',
					})}
				>
					<div className={css({ lg: { w: '1/2' } })}>
						<Badge variant="sky" className={css({ mb: '10' })}>
							CO-CONSTRUCTION
						</Badge>
						<h2
							className={css({
								fontFamily: 'display',
								fontSize: { base: '4xl', md: '6xl' },
								fontWeight: 'black',
								color: 'ocobo.dark',
								mb: '8',
								lineHeight: '0.95',
								letterSpacing: 'tight',
							})}
						>
							Rejoignez <br />
							l'écosystème{' '}
							<span className={css({ color: 'ocobo.sky' })}>Ocobo.</span>
						</h2>
						<p
							className={css({
								fontSize: 'xl',
								color: 'gray.600',
								mb: '10',
								lineHeight: 'relaxed',
								fontWeight: 'medium',
							})}
						>
							Vous développez une solution logicielle qui transforme la
							croissance des entreprises B2B ? Intégrez notre écosystème
							d'architectes.
						</p>

						<div
							className={`${vstack({ gap: '6' })} ${css({
								mb: '12',
							})}`}
						>
							<BenefitItem
								icon={
									<div
										className={`${center()} ${css({
											w: '10',
											h: '10',
											bg: 'white',
											shadow: 'sm',
											borderWidth: '1px',
											borderColor: 'gray.100',
											rounded: 'xl',
											color: 'ocobo.sky',
										})}`}
									>
										<Handshake size={20} />
									</div>
								}
								title="Partenariat Stratégique"
								description="Accès privilégié à notre Studio pour le déploiement de votre solution chez nos clients."
							/>
							<BenefitItem
								icon={
									<div
										className={`${center()} ${css({
											w: '10',
											h: '10',
											bg: 'white',
											shadow: 'sm',
											borderWidth: '1px',
											borderColor: 'gray.100',
											rounded: 'xl',
											color: 'ocobo.yellow',
										})}`}
									>
										<Sparkles size={20} />
									</div>
								}
								title="Co-Marketing & Events"
								description="Webinars, podcasts et masterclasses en commun pour évangéliser le marché."
							/>
							<BenefitItem
								icon={
									<div
										className={`${center()} ${css({
											w: '10',
											h: '10',
											bg: 'white',
											shadow: 'sm',
											borderWidth: '1px',
											borderColor: 'gray.100',
											rounded: 'xl',
											color: 'ocobo.mint',
										})}`}
									>
										<Layers size={20} />
									</div>
								}
								title="Expertise Produit"
								description="Feedback opérationnel de nos architectes seniors pour optimiser vos intégrations."
							/>
						</div>
					</div>

					<div className={css({ lg: { w: '1/2' }, w: 'full' })}>
						<div
							className={css({
								bg: 'white',
								p: { base: '8', md: '12' },
								rounded: '3xl',
								shadow: '2xl',
								borderWidth: '1px',
								borderColor: 'gray.100',
								position: 'relative',
								overflow: 'hidden',
							})}
						>
							{/* Multi-color top bar */}
							<div
								className={css({
									position: 'absolute',
									top: '0',
									left: '0',
									w: 'full',
									h: '1.5',
									background:
										'linear-gradient(to right, token(colors.ocobo.yellow), token(colors.ocobo.sky), token(colors.ocobo.mint))',
								})}
							/>

							{formSubmitted ? (
								<SuccessMessage onReset={() => setFormSubmitted(false)} />
							) : (
								<PartnerFormFields onSubmit={() => setFormSubmitted(true)} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
