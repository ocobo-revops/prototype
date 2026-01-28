import { CheckCircle2, Handshake, Layers, Send, Sparkles } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid, vstack } from 'styled-system/patterns';
import { Badge } from '../../atoms/Badge';
import { FormField } from '../../atoms/form-field';
import { IconBox } from '../../atoms/icon-box';
import { Text } from '../../atoms/text';
import FlexPair from '../../layout/FlexPair';
import { Container } from '../../organisms/Container';

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
				<Text variant="body" color="muted">
					{description}
				</Text>
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
			<Text
				as="h3"
				variant="display-md"
				color="dark"
				className={css({ mb: '4' })}
			>
				Demande reçue !
			</Text>
			<Text color="muted" className={css({ mb: '8' })}>
				Notre équipe étudiera votre solution et vous recontactera sous 48h.
			</Text>
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

	return (
		<form
			onSubmit={handleSubmit}
			className={vstack({ gap: '6', alignItems: 'stretch' })}
		>
			<Text
				as="h3"
				variant="display-md"
				color="dark"
				className={css({ mb: '8' })}
			>
				Devenez partenaire
			</Text>
			<div
				className={grid({
					columns: { base: 1, md: 2 },
					gap: '6',
				})}
			>
				<FormField label="Nom de la solution" required>
					<input
						required
						type="text"
						placeholder="ex: HubSpot"
						className={inputStyles}
					/>
				</FormField>
				<FormField label="Site Web" required>
					<input
						required
						type="url"
						placeholder="https://..."
						className={inputStyles}
					/>
				</FormField>
			</div>
			<FormField label="E-mail pro" required>
				<input
					required
					type="email"
					placeholder="nom@solution.com"
					className={inputStyles}
				/>
			</FormField>
			<FormField label="Votre message">
				<textarea
					rows={4}
					placeholder="Parlez-nous de votre vision et de vos envies de partenariat..."
					className={`${inputStyles} ${css({ resize: 'none' })}`}
				/>
			</FormField>
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

			<Container>
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
						<Text
							as="h2"
							variant="display-xl"
							color="dark"
							className={css({
								mb: '8',
								lineHeight: '0.95',
							})}
						>
							Rejoignez <br />
							l'écosystème{' '}
							<span className={css({ color: 'ocobo.sky' })}>Ocobo.</span>
						</Text>
						<Text
							variant="subtitle"
							color="muted"
							className={css({ mb: '10' })}
						>
							Vous développez une solution logicielle qui transforme la
							croissance des entreprises B2B ? Intégrez notre écosystème
							d'architectes.
						</Text>

						<div
							className={`${vstack({ gap: '6' })} ${css({
								mb: '12',
							})}`}
						>
							<BenefitItem
								icon={
									<IconBox size="md" variant="outline" color="sky">
										<Handshake size={20} />
									</IconBox>
								}
								title="Partenariat Stratégique"
								description="Accès privilégié à notre Studio pour le déploiement de votre solution chez nos clients."
							/>
							<BenefitItem
								icon={
									<IconBox size="md" variant="outline" color="yellow">
										<Sparkles size={20} />
									</IconBox>
								}
								title="Co-Marketing & Events"
								description="Webinars, podcasts et masterclasses en commun pour évangéliser le marché."
							/>
							<BenefitItem
								icon={
									<IconBox size="md" variant="outline" color="mint">
										<Layers size={20} />
									</IconBox>
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
			</Container>
		</section>
	);
}
