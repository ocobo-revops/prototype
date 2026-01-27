import {
	ArrowLeft,
	ArrowRight,
	Briefcase,
	CheckCircle2,
	ChevronRight,
	Clock,
	FileText,
	GraduationCap,
	Linkedin,
	MapPin,
	MessageSquare,
	Plus,
	Send,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, grid, hstack, vstack } from 'styled-system/patterns';
import { Badge } from '../components/atoms/Badge';

export const JobDetail: React.FC = () => {
	const { id: _ } = useParams();
	const [activeSection, setActiveSection] = useState<string>('mission');

	// Mock data structuré pour correspondre aux sections du blog
	const job = {
		title: 'Manager Conseil RevOps',
		category: 'Recrutement',
		meta: [
			{
				label: 'Contrat',
				value: 'CDI',
				icon: (
					<Briefcase size={14} className={css({ color: 'ocobo.yellow' })} />
				),
			},
			{
				label: 'Lieu',
				value: 'Paris / Remote',
				icon: <MapPin size={14} className={css({ color: 'ocobo.sky' })} />,
			},
			{
				label: 'Expérience',
				value: '> 7 ans',
				icon: <Clock size={14} className={css({ color: 'ocobo.mint' })} />,
			},
			{
				label: 'Éducation',
				value: 'Master',
				icon: (
					<GraduationCap size={14} className={css({ color: 'ocobo.coral' })} />
				),
			},
		],
		intro:
			"En tant que Manager Conseil RevOps, tu es la clé de voûte entre la vision stratégique de nos clients et l'excellence opérationnelle de ton équipe. Tu architectures des systèmes de croissance pour les plus belles scale-ups.",
		sections: [
			{
				id: 'mission',
				title: 'La Mission',
				content:
					"Directement rattaché(e) au COO d'Ocobo, ta mission principale est de piloter la performance et la montée en compétences d'une équipe RevOps, d'assurer le delivery et la direction de projets à fort impact, et de développer un portefeuille client via la création de valeur.",
				list: [
					'Direction de projets stratégiques (GTM Strategy, Scaling Tech Stack).',
					"Management & Coaching d'une squad de consultants RevOps seniors.",
					'Pilotage de la rentabilité et de la satisfaction client au niveau COMEX.',
					"Contribution au rayonnement méthodologique d'Ocobo (Playbooks, Assets).",
				],
			},
			{
				id: 'responsabilites',
				title: 'Responsabilités',
				content:
					"Le scope d'intervention est large et dépendra des besoins clients. Nous accompagnons nos clients sur toute la chaîne de Revenue : de la génération de la demande à la rétention.",
				list: [
					'Cadrage et pilotage de roadmaps RevOps pluriannuelles.',
					'Animer les rituels de performance et le partage de connaissances interne.',
					"Identifier les opportunités d'Upsell et de Cross-sell stratégiques.",
					"Garantir l'intégrité de la donnée et la fiabilité du Forecast client.",
				],
			},
			{
				id: 'profil',
				title: 'Profil recherché',
				content:
					"Nous recherchons un profil hybride, capable de penser 'Système' tout en gardant une forte orientation business et humaine.",
				list: [
					'Formation Bac+5 (Grande École de Commerce ou Ingénieur).',
					'Expertise prouvée en RevOps, Sales Ops ou Conseil en stratégie.',
					'Capacité de leadership naturel et aisance relationnelle C-Level.',
					'Français courant et Anglais professionnel impératif.',
				],
			},
		],
		contact: {
			name: 'Aude Cadiot',
			role: 'Co-fondatrice @ Ocobo',
			image: 'https://placehold.co/100x100/F3F4F6/212323?text=AC',
			bio: 'Aude est la référente RevOps chez Ocobo. Elle accompagne la structuration des équipes et la montée en compétence des talents du Studio.',
		},
	};

	// Gestion du scroll pour le sommaire actif (copié de ArticleDetail)
	useEffect(() => {
		const handleScroll = () => {
			const sections = [...job.sections.map((s) => s.id), 'apply'];
			const scrollPosition = window.scrollY + 200;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [job.sections]);

	return (
		<div
			className={css({
				width: 'full',
				bg: 'white',
				pt: '32',
				pb: '24',
				fontFamily: 'sans',
			})}
		>
			{/* Blueprint background pattern ultra-léger */}
			<div
				className={css({
					position: 'fixed',
					inset: '0',
					opacity: 0.02,
					pointerEvents: 'none',
					zIndex: -10,
					bg: 'dots-dark',
				})}
			/>

			<div
				className={css({
					maxW: '7xl',
					mx: 'auto',
					px: { base: '4', sm: '6', lg: '8' },
				})}
			>
				{/* BREADCRUMBS & TOP NAV (Style Blog) */}
				<div
					className={hstack({
						justify: 'space-between',
						mb: '12',
					})}
				>
					<Link
						to="/jobs"
						className={css({
							display: 'inline-flex',
							alignItems: 'center',
							color: 'gray.400',
							fontWeight: 'black',
							textTransform: 'uppercase',
							letterSpacing: 'widest',
							fontSize: 'xs',
							transition: 'colors',
							_hover: { color: 'ocobo.dark' },
						})}
					>
						<ArrowLeft size={14} className={css({ mr: '2' })} /> Retour aux
						offres
					</Link>
				</div>

				{/* HERO OFFRE (Style Blog) */}
				<div
					className={css({
						maxW: '5xl',
						mx: 'auto',
						textAlign: 'center',
						mb: '20',
					})}
				>
					<Badge variant="yellow" className={css({ mb: '8' })}>
						{job.category}
					</Badge>
					<h1
						className={css({
							fontFamily: 'display',
							fontSize: { base: '4xl', md: '6xl' },
							fontWeight: 'black',
							color: 'ocobo.dark',
							mb: '10',
							lineHeight: '1.05',
							letterSpacing: 'tight',
						})}
					>
						{job.title}
					</h1>
					<div
						className={`${flex({ gap: '6', justify: 'center', wrap: 'wrap' })} ${css(
							{
								fontSize: 'xs',
								fontWeight: 'black',
								color: 'gray.400',
								textTransform: 'uppercase',
								letterSpacing: 'widest',
							},
						)}`}
					>
						{job.meta.map((m) => (
							<div
								key={m.label}
								className={`${hstack({ gap: '2.5' })} ${css({
									px: '4',
									py: '2',
									bg: 'gray.50/50',
									borderWidth: '1px',
									borderColor: 'gray.100',
									rounded: 'full',
								})}`}
							>
								{m.icon}
								<span className={css({ color: 'ocobo.dark' })}>{m.value}</span>
							</div>
						))}
					</div>
				</div>

				{/* MAIN LAYOUT (Style Blog) */}
				<div
					className={`${flex({ direction: { base: 'column', lg: 'row' }, gap: '16' })} ${css(
						{
							position: 'relative',
						},
					)}`}
				>
					{/* SIDEBAR : SOMMAIRE (Style Blog) */}
					<aside className={css({ lg: { w: '1/4' } })}>
						<div className={css({ position: 'sticky', top: '32' })}>
							<h4
								className={css({
									fontFamily: 'display',
									fontWeight: 'black',
									fontSize: 'xs',
									textTransform: 'uppercase',
									letterSpacing: '0.4em',
									color: 'ocobo.dark',
									mb: '8',
								})}
							>
								Navigation
							</h4>
							<nav className={vstack({ gap: '4', alignItems: 'stretch' })}>
								{job.sections.map((section) => (
									<a
										key={section.id}
										href={`#${section.id}`}
										className={`${hstack({ justify: 'space-between' })} ${css({
											py: '2',
											fontSize: 'xs',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: '0.3em',
											transition: 'all',
											borderLeftWidth: '2px',
											pl: '6',
											borderColor:
												activeSection === section.id
													? 'ocobo.yellow'
													: 'gray.50',
											color:
												activeSection === section.id
													? 'ocobo.dark'
													: 'gray.300',
											transform:
												activeSection === section.id
													? 'translateX(8px)'
													: 'none',
											_hover: { color: 'ocobo.dark' },
										})}`}
									>
										{section.title}
										{activeSection === section.id && (
											<ChevronRight
												size={14}
												className={css({ color: 'ocobo.yellow' })}
											/>
										)}
									</a>
								))}
								<a
									href="#apply"
									className={`${hstack({ justify: 'space-between' })} ${css({
										py: '2',
										fontSize: 'xs',
										fontWeight: 'black',
										textTransform: 'uppercase',
										letterSpacing: '0.3em',
										transition: 'all',
										borderLeftWidth: '2px',
										pl: '6',
										borderColor:
											activeSection === 'apply' ? 'ocobo.yellow' : 'gray.50',
										color:
											activeSection === 'apply' ? 'ocobo.dark' : 'ocobo.yellow',
										transform:
											activeSection === 'apply' ? 'translateX(8px)' : 'none',
										_hover: { color: 'ocobo.dark' },
									})}`}
								>
									Postuler
									{activeSection === 'apply' && (
										<ChevronRight
											size={14}
											className={css({ color: 'ocobo.yellow' })}
										/>
									)}
								</a>
							</nav>

							{/* BOX SIDEBAR (Style Blog) */}
							<div
								className={css({
									mt: '20',
									p: '8',
									bg: 'ocobo.dark',
									rounded: '2xl',
									color: 'white',
									position: 'relative',
									overflow: 'hidden',
									shadow: 'xl',
								})}
							>
								<div
									className={css({
										position: 'absolute',
										top: '0',
										right: '0',
										w: '24',
										h: '24',
										bg: 'ocobo.yellow/10',
										rounded: 'full',
										filter: 'blur(32px)',
									})}
								/>
								<h5
									className={css({
										fontFamily: 'display',
										fontSize: 'lg',
										fontWeight: 'bold',
										mb: '4',
									})}
								>
									Pourquoi nous rejoindre ?
								</h5>
								<ul
									className={vstack({
										gap: '4',
										alignItems: 'stretch',
										mb: '8',
									})}
								>
									{[
										'Management 100% Senior',
										'Culture du feedback radical',
										'Équipe issue des tops scale-ups',
										'Impact GTM direct',
									].map((benefit) => (
										<li
											key={benefit}
											className={`${flex({ gap: '3', align: 'start' })} ${css({
												fontSize: 'xs',
												fontWeight: 'bold',
												textTransform: 'uppercase',
												letterSpacing: 'widest',
												color: 'gray.400',
											})}`}
										>
											<Plus
												size={12}
												className={css({
													color: 'ocobo.yellow',
													flexShrink: 0,
													mt: '0.5',
												})}
											/>
											{benefit}
										</li>
									))}
								</ul>
								<a href="#apply">
									<button
										type="button"
										className={css({
											w: 'full',
											py: '3',
											bg: 'ocobo.yellow',
											color: 'ocobo.dark',
											fontWeight: 'black',
											fontSize: 'xs',
											textTransform: 'uppercase',
											letterSpacing: 'widest',
											rounded: 'lg',
											transition: 'colors',
											_hover: { bg: 'white' },
										})}
									>
										Postuler maintenant
									</button>
								</a>
							</div>
						</div>
					</aside>

					{/* CONTENT AREA (Style Blog) */}
					<article className={css({ lg: { w: '3/4' }, maxW: '3xl' })}>
						{/* Intro text (Style Blog) */}
						<div
							className={css({
								fontSize: { base: 'xl', md: '2xl' },
								color: 'gray.600',
								fontWeight: 'medium',
								lineHeight: 'relaxed',
								mb: '16',
								fontStyle: 'italic',
								borderLeftWidth: '4px',
								borderColor: 'ocobo.yellow',
								pl: '8',
							})}
						>
							{job.intro}
						</div>

						{/* Content blocks (Style Blog) */}
						<div className={vstack({ gap: '24', alignItems: 'stretch' })}>
							{job.sections.map((section) => (
								<section
									key={section.id}
									id={section.id}
									className={css({ scrollMarginTop: '40' })}
								>
									<h2
										className={css({
											fontFamily: 'display',
											fontSize: '3xl',
											fontWeight: 'black',
											color: 'ocobo.dark',
											mb: '8',
											letterSpacing: 'tight',
										})}
									>
										{section.title}
									</h2>
									<div
										className={css({
											maxW: 'none',
											color: 'gray.600',
											lineHeight: 'relaxed',
											fontWeight: 'medium',
										})}
									>
										<p className={css({ mb: '10' })}>{section.content}</p>
										{section.list && (
											<ul
												className={vstack({
													gap: '4',
													alignItems: 'stretch',
													mt: '8',
												})}
											>
												{section.list.map((item) => (
													<li
														key={item}
														className={`${flex({ gap: '5', align: 'start' })} ${css(
															{
																p: '6',
																bg: 'gray.50/50',
																rounded: 'xl',
																borderWidth: '1px',
																borderColor: 'transparent',
																transition: 'all',
																'& .check-icon': {
																	transition: 'colors',
																},
																_hover: {
																	borderColor: 'ocobo.yellow/20',
																	bg: 'white',
																},
																'&:hover .check-icon': {
																	color: 'ocobo.yellow',
																},
															},
														)}`}
													>
														<div
															className={`check-icon ${css({
																mt: '1',
																color: 'gray.200',
															})}`}
														>
															<CheckCircle2 size={20} />
														</div>
														<span
															className={css({
																color: 'ocobo.dark',
																fontWeight: 'bold',
																fontSize: 'lg',
															})}
														>
															{item}
														</span>
													</li>
												))}
											</ul>
										)}
									</div>
								</section>
							))}
						</div>

						{/* BIOGRAPHIE CONTACT (Style Blog Author Bio) */}
						<div
							className={`${flex({ direction: { base: 'column', md: 'row' }, align: 'center', gap: '8' })} ${css(
								{
									mt: '24',
									pt: '12',
									borderTopWidth: '1px',
									borderColor: 'gray.100',
									bg: 'gray.50/50',
									p: '10',
									rounded: '3xl',
								},
							)}`}
						>
							<div
								className={css({
									w: '24',
									h: '24',
									rounded: 'full',
									overflow: 'hidden',
									filter: 'grayscale(100%)',
									flexShrink: 0,
									borderWidth: '4px',
									borderColor: 'white',
									shadow: 'lg',
								})}
							>
								<img
									src={job.contact.image}
									alt={job.contact.name}
									className={css({
										w: 'full',
										h: 'full',
										objectFit: 'cover',
									})}
								/>
							</div>
							<div
								className={css({
									textAlign: { base: 'center', md: 'left' },
								})}
							>
								<h4
									className={css({
										fontFamily: 'display',
										fontSize: '2xl',
										fontWeight: 'bold',
										color: 'ocobo.dark',
										mb: '1',
									})}
								>
									{job.contact.name}
								</h4>
								<p
									className={css({
										fontSize: 'sm',
										fontWeight: 'bold',
										color: 'gray.400',
										textTransform: 'uppercase',
										letterSpacing: 'widest',
										mb: '4',
									})}
								>
									{job.contact.role}
								</p>
								<p
									className={css({
										color: 'gray.500',
										fontSize: 'sm',
										lineHeight: 'relaxed',
										maxW: 'md',
									})}
								>
									{job.contact.bio}
								</p>
								<div
									className={hstack({
										gap: '4',
										justify: { base: 'center', md: 'flex-start' },
										mt: '6',
									})}
								>
									<a
										href="#"
										className={css({
											color: 'gray.400',
											transition: 'colors',
											_hover: { color: 'ocobo.dark' },
										})}
									>
										<Linkedin size={20} />
									</a>
									<a
										href="#"
										className={css({
											color: 'gray.400',
											transition: 'colors',
											_hover: { color: 'ocobo.dark' },
										})}
									>
										<MessageSquare size={20} />
									</a>
								</div>
							</div>
						</div>

						{/* FORMULAIRE CANDIDATURE (Style Newsletter Blog) */}
						<div
							id="apply"
							className={css({
								mt: '24',
								bg: 'ocobo.yellow',
								p: { base: '10', md: '14' },
								rounded: '3xl',
								position: 'relative',
								overflow: 'hidden',
								shadow: '2xl',
								scrollMarginTop: '40',
							})}
						>
							{/* Motif architectural discret */}
							<div
								className={css({
									position: 'absolute',
									top: '0',
									right: '0',
									p: '4',
									opacity: 0.05,
								})}
							>
								<FileText size={200} strokeWidth={1} />
							</div>

							<div className={css({ position: 'relative', zIndex: 10 })}>
								<h2
									className={css({
										fontFamily: 'display',
										fontSize: '4xl',
										fontWeight: 'black',
										color: 'ocobo.dark',
										mb: '4',
										letterSpacing: 'tight',
									})}
								>
									Prêt(e) pour l'impact ?
								</h2>
								<p
									className={css({
										color: 'ocobo.dark/70',
										fontWeight: 'bold',
										fontSize: 'lg',
										mb: '12',
										maxW: 'xl',
									})}
								>
									Envoie-nous ton profil. On ne cherche pas des exécutants, mais
									des architectes du revenu.
								</p>

								<form
									className={`${vstack({ gap: '8' })} ${css({
										maxW: '2xl',
									})}`}
								>
									<div
										className={grid({ columns: { base: 1, md: 2 }, gap: '6' })}
									>
										<div className={vstack({ gap: '2' })}>
											{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
											<label
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.3em',
													color: 'ocobo.dark',
													opacity: 0.5,
												})}
											>
												Prénom Nom*
											</label>
											<input
												type="text"
												className={css({
													w: 'full',
													bg: 'white/90',
													border: 'none',
													outline: 'none',
													color: 'ocobo.dark',
													fontWeight: 'bold',
													p: '4',
													rounded: 'xl',
													_placeholder: { color: 'gray.300' },
													_focus: { bg: 'white' },
												})}
												placeholder="John Doe"
											/>
										</div>
										<div className={vstack({ gap: '2' })}>
											{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
											<label
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.3em',
													color: 'ocobo.dark',
													opacity: 0.5,
												})}
											>
												Email Pro*
											</label>
											<input
												type="email"
												className={css({
													w: 'full',
													bg: 'white/90',
													border: 'none',
													outline: 'none',
													color: 'ocobo.dark',
													fontWeight: 'bold',
													p: '4',
													rounded: 'xl',
													_placeholder: { color: 'gray.300' },
													_focus: { bg: 'white' },
												})}
												placeholder="john@company.com"
											/>
										</div>
										<div
											className={`${vstack({ gap: '2' })} ${css({
												md: { gridColumn: 'span 2' },
											})}`}
										>
											{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
											<label
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: '0.3em',
													color: 'ocobo.dark',
													opacity: 0.5,
												})}
											>
												Lien LinkedIn*
											</label>
											<input
												type="url"
												className={css({
													w: 'full',
													bg: 'white/90',
													border: 'none',
													outline: 'none',
													color: 'ocobo.dark',
													fontWeight: 'bold',
													p: '4',
													rounded: 'xl',
													_placeholder: { color: 'gray.300' },
													_focus: { bg: 'white' },
												})}
												placeholder="https://linkedin.com/in/..."
											/>
										</div>
									</div>

									<div className={vstack({ gap: '2' })}>
										{/* biome-ignore lint/a11y/noLabelWithoutControl: form label */}
										<label
											className={css({
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: '0.3em',
												color: 'ocobo.dark',
												opacity: 0.5,
											})}
										>
											Ton CV (PDF)*
										</label>
										<div
											className={css({
												borderWidth: '2px',
												borderStyle: 'dashed',
												borderColor: 'ocobo.dark/10',
												p: '10',
												textAlign: 'center',
												bg: 'white/40',
												rounded: '2xl',
												cursor: 'pointer',
												transition: 'all',
												'& .file-icon': {
													transition: 'colors',
												},
												'& .file-text': {
													transition: 'colors',
												},
												_hover: {
													bg: 'white',
												},
												'&:hover .file-icon': {
													color: 'ocobo.dark',
												},
												'&:hover .file-text': {
													color: 'ocobo.dark',
												},
											})}
										>
											<FileText
												className={`file-icon ${css({
													mx: 'auto',
													mb: '3',
													color: 'ocobo.dark/20',
												})}`}
												size={32}
											/>
											<p
												className={`file-text ${css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
													color: 'ocobo.dark/40',
												})}`}
											>
												Dépose ton fichier ou clique ici
											</p>
										</div>
									</div>

									<button
										type="button"
										className={`${center({ gap: '3' })} ${css({
											w: 'full',
											py: '5',
											bg: 'ocobo.dark',
											color: 'white',
											fontWeight: 'black',
											textTransform: 'uppercase',
											letterSpacing: '0.4em',
											fontSize: 'xs',
											rounded: 'xl',
											transition: 'all',
											shadow: 'xl',
											'& .send-icon': {
												transition: 'transform',
											},
											_hover: {
												bg: 'black',
											},
											'&:hover .send-icon': {
												transform: 'translateX(4px) translateY(-4px)',
											},
										})}`}
									>
										<Send size={14} className={`send-icon`} />
										Envoyer ma candidature
									</button>
								</form>
							</div>
						</div>

						{/* RELATED JOBS (Style Related Articles Blog) */}
						<div
							className={css({
								mt: '32',
								pt: '20',
								borderTopWidth: '1px',
								borderColor: 'gray.100',
							})}
						>
							<h3
								className={css({
									fontFamily: 'display',
									fontSize: '3xl',
									fontWeight: 'black',
									color: 'ocobo.dark',
									mb: '12',
								})}
							>
								Autres opportunités
							</h3>
							<div className={grid({ columns: { base: 1, md: 2 }, gap: '8' })}>
								{[
									{
										title: 'Consultant RevOps Senior',
										exp: 'Confirmé',
										type: 'CDI',
									},
									{ title: 'Revenue Data Analyst', exp: 'Expert', type: 'CDI' },
								].map((other) => (
									<div
										key={other.title}
										className={css({
											p: '8',
											borderWidth: '1px',
											borderColor: 'gray.100',
											bg: 'white',
											rounded: '2xl',
											transition: 'all',
											'&:hover h4': {
												color: 'ocobo.yellow',
											},
											'&:hover .view-link': {
												color: 'ocobo.dark',
											},
											_hover: {
												borderColor: 'ocobo.yellow',
												shadow: 'xl',
											},
										})}
									>
										<div
											className={`${hstack({ gap: '3' })} ${css({
												mb: '4',
											})}`}
										>
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
													color: 'ocobo.coral',
													bg: 'ocobo.coralLight',
													px: '2',
													py: '0.5',
													borderWidth: '1px',
													borderColor: 'ocobo.coral/10',
												})}
											>
												{other.exp}
											</span>
											<span
												className={css({
													fontSize: 'xs',
													fontWeight: 'black',
													textTransform: 'uppercase',
													letterSpacing: 'widest',
													color: 'gray.300',
												})}
											>
												{other.type}
											</span>
										</div>
										<h4
											className={css({
												fontFamily: 'display',
												fontSize: '2xl',
												fontWeight: 'black',
												color: 'ocobo.dark',
												mb: '6',
												transition: 'colors',
												lineHeight: 'tight',
											})}
										>
											{other.title}
										</h4>
										<div
											className={`${hstack({ gap: '2' })} ${css({
												fontSize: 'xs',
												fontWeight: 'black',
												textTransform: 'uppercase',
												letterSpacing: 'widest',
												color: 'gray.400',
											})}`}
										>
											<div
												className={`view-link ${hstack({ gap: '1' })} ${css({
													transition: 'colors',
												})}`}
											>
												Voir l'offre <ArrowRight size={12} />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};
