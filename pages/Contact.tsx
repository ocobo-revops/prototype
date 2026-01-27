import { createListCollection, Select } from '@ark-ui/react/select';
import { Calendar, Check, ChevronDown, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack } from 'styled-system/patterns';
import { Button } from '../components/atoms/Button';
import { Input } from '../components/atoms/Input';

const teamSizeOptions = createListCollection({
	items: [
		{ value: '1-5', label: '1-5 personnes' },
		{ value: '6-20', label: '6-20 personnes' },
		{ value: '21-50', label: '21-50 personnes' },
		{ value: '50+', label: '+50 personnes' },
	],
});

export function Contact() {
	const [formState, setFormState] = useState({
		email: '',
		firstName: '',
		lastName: '',
		role: '',
		teamSize: [] as string[],
		source: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleTeamSizeChange = (details: { value: string[] }) => {
		setFormState({
			...formState,
			teamSize: details.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Merci ! Un architecte Ocobo va étudier votre demande.');
	};

	return (
		<div
			className={css({
				w: 'full',
				pt: '32',
				pb: '24',
				bg: 'white',
				position: 'relative',
				overflow: 'hidden',
			})}
		>
			{/* Background Abstract Elements */}
			<div
				className={css({
					position: 'absolute',
					top: '0',
					right: '0',
					w: '1/3',
					h: 'full',
					bg: 'gray.50',
					zIndex: -10,
				})}
			/>
			<div
				className={css({
					position: 'absolute',
					top: '40',
					right: '20',
					w: '64',
					h: '64',
					bg: 'ocobo.yellow',
					rounded: 'full',
					filter: 'blur(100px)',
					opacity: 0.2,
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
					})}
				>
					{/* Left Side: Copy */}
					<div className={css({ lg: { w: '1/2' }, pt: '10' })}>
						<div className={css({ position: 'sticky', top: '32' })}>
							<span
								className={css({
									fontFamily: 'display',
									fontWeight: 'bold',
									color: 'ocobo.coral',
									textTransform: 'uppercase',
									letterSpacing: 'widest',
									fontSize: 'sm',
									mb: '4',
									display: 'block',
								})}
							>
								Première consultation
							</span>
							<h1
								className={css({
									fontFamily: 'display',
									fontSize: { base: '5xl', md: '6xl' },
									fontWeight: 'bold',
									color: 'ocobo.dark',
									mb: '8',
									lineHeight: 'tight',
								})}
							>
								Parlez à un architecte.
								<br />
								<span className={css({ color: 'gray.400' })}>
									Pas à un vendeur.
								</span>
							</h1>

							<p
								className={css({
									fontSize: 'xl',
									color: 'gray.600',
									mb: '12',
									lineHeight: 'relaxed',
									fontWeight: 'medium',
								})}
							>
								En 30 minutes, nous analysons la maturité de votre machine
								revenue et identifions vos leviers de croissance immédiats.
							</p>

							<div className={css({ spaceY: '8' })}>
								<div className={flex({ gap: '6', align: 'flex-start' })}>
									<div
										className={`${center()} ${css({
											w: '12',
											h: '12',
											bg: 'ocobo.mint.light',
											color: 'ocobo.mint',
											rounded: 'xl',
											flexShrink: 0,
											transition: 'all',
											transitionDuration: '300ms',
											_groupHover: { bg: 'ocobo.mint', color: 'white' },
										})}`}
									>
										<Check strokeWidth={3} size={20} />
									</div>
									<div>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: 'lg',
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Audit flash
										</h3>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Diagnostic rapide de vos processus actuels et de votre
											stack.
										</p>
									</div>
								</div>
								<div className={flex({ gap: '6', align: 'flex-start' })}>
									<div
										className={`${center()} ${css({
											w: '12',
											h: '12',
											bg: 'ocobo.sky.light',
											color: 'ocobo.sky',
											rounded: 'xl',
											flexShrink: 0,
											transition: 'all',
											transitionDuration: '300ms',
											_groupHover: { bg: 'ocobo.sky', color: 'white' },
										})}`}
									>
										<MessageSquare strokeWidth={3} size={20} />
									</div>
									<div>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: 'lg',
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Clarté radicale
										</h3>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Recommandations stratégiques immédiates, sans jargon.
										</p>
									</div>
								</div>
								<div className={flex({ gap: '6', align: 'flex-start' })}>
									<div
										className={`${center()} ${css({
											w: '12',
											h: '12',
											bg: 'ocobo.yellow.light',
											color: 'ocobo.yellow',
											rounded: 'xl',
											flexShrink: 0,
											transition: 'all',
											transitionDuration: '300ms',
											_groupHover: { bg: 'ocobo.yellow', color: 'white' },
										})}`}
									>
										<Calendar strokeWidth={3} size={20} />
									</div>
									<div>
										<h3
											className={css({
												fontFamily: 'display',
												fontSize: 'lg',
												fontWeight: 'bold',
												color: 'ocobo.dark',
											})}
										>
											Zéro engagement
										</h3>
										<p className={css({ fontSize: 'sm', color: 'gray.600' })}>
											Un échange entre pairs pour valider la pertinence d'une
											collaboration.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side: Form */}
					<div className={css({ lg: { w: '1/2' } })}>
						<div
							className={css({
								bg: 'white',
								p: { base: '8', md: '12' },
								shadow: 'card',
								borderWidth: '1px',
								borderColor: 'gray.100',
								position: 'relative',
							})}
						>
							<div
								className={css({
									position: 'absolute',
									top: '0',
									left: '0',
									w: 'full',
									h: '1',
									bgGradient: 'to-r',
									gradientFrom: 'ocobo.yellow',
									gradientVia: 'ocobo.coral',
									gradientTo: 'ocobo.sky',
								})}
							/>

							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '2xl',
									fontWeight: 'bold',
									mb: '8',
									color: 'ocobo.dark',
								})}
							>
								Dites-nous en plus sur vos enjeux
							</h3>

							<form onSubmit={handleSubmit} className={css({ spaceY: '6' })}>
								<Input
									type="email"
									name="email"
									label="E-mail professionnel*"
									required
									placeholder="name@company.com"
									className={css({ _placeholder: { color: 'gray.300' } })}
									value={formState.email}
									onChange={handleChange}
								/>

								<div className={grid({ columns: 2, gap: '4' })}>
									<Input
										type="text"
										name="firstName"
										label="Prénom*"
										required
										value={formState.firstName}
										onChange={handleChange}
									/>
									<Input
										type="text"
										name="lastName"
										label="Nom*"
										required
										value={formState.lastName}
										onChange={handleChange}
									/>
								</div>

								<Input
									type="text"
									name="role"
									label="Intitulé du poste*"
									required
									value={formState.role}
									onChange={handleChange}
								/>

								<Select.Root
									collection={teamSizeOptions}
									value={formState.teamSize}
									onValueChange={handleTeamSizeChange}
									required
								>
									<Select.Label
										className={css({
											display: 'block',
											fontSize: 'xs',
											fontWeight: 'bold',
											textTransform: 'uppercase',
											color: 'gray.500',
											mb: '2',
										})}
									>
										Taille de l'équipe Revenue*
									</Select.Label>
									<Select.Control>
										<Select.Trigger
											className={`${hstack({ justify: 'space-between' })} ${css(
												{
													width: 'full',
													px: '4',
													py: '4',
													bg: 'gray.50',
													border: '1px solid',
													borderColor: 'gray.100',
													outline: 'none',
													transition: 'all 0.2s',
													cursor: 'pointer',
													_focus: {
														borderColor: 'ocobo.dark',
														bg: 'white',
													},
												},
											)}`}
										>
											<Select.ValueText
												placeholder="Sélectionnez..."
												className={css({
													color: formState.teamSize.length
														? 'ocobo.dark'
														: 'gray.400',
												})}
											/>
											<Select.Indicator>
												<ChevronDown
													size={16}
													className={css({ color: 'gray.400' })}
												/>
											</Select.Indicator>
										</Select.Trigger>
									</Select.Control>
									<Select.Positioner>
										<Select.Content
											className={css({
												bg: 'white',
												border: '1px solid',
												borderColor: 'gray.100',
												shadow: 'lg',
												py: '1',
												zIndex: 50,
												_open: {
													animation: 'fade-in-up 0.15s ease-out',
												},
											})}
										>
											{teamSizeOptions.items.map((item) => (
												<Select.Item
													key={item.value}
													item={item}
													className={css({
														px: '4',
														py: '3',
														cursor: 'pointer',
														outline: 'none',
														transition: 'background 0.1s',
														_highlighted: { bg: 'gray.50' },
														_selected: {
															bg: 'ocobo.yellow/10',
															fontWeight: 'medium',
														},
													})}
												>
													<Select.ItemText>{item.label}</Select.ItemText>
												</Select.Item>
											))}
										</Select.Content>
									</Select.Positioner>
								</Select.Root>

								<Input
									type="text"
									name="source"
									label="Comment nous avez-vous connus ?"
									value={formState.source}
									onChange={handleChange}
								/>

								<div className={css({ pt: '6' })}>
									<Button
										type="submit"
										className={css({
											w: 'full',
											py: '4',
											fontSize: 'base',
											bg: 'ocobo.dark',
											color: 'white',
											shadow: 'xl',
											_hover: {
												bg: 'black',
												shadow: '2xl',
												transform: 'translateY(-1px)',
											},
										})}
									>
										Prendre rendez-vous
									</Button>
									<p
										className={css({
											textAlign: 'center',
											fontSize: 'xs',
											color: 'gray.400',
											mt: '4',
										})}
									>
										En cliquant, vous acceptez d'être recontacté par l'équipe
										Ocobo.
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
