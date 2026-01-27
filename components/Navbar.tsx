import { Menu } from '@ark-ui/react/menu';
import {
	BookOpen,
	Briefcase,
	ChevronDown,
	Cpu,
	Heart,
	Layers,
	Menu as MenuIcon,
	Mic,
	Users,
	X,
	Youtube,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { css } from 'styled-system/css';
import { center, flex, hstack, vstack } from 'styled-system/patterns';
import { Button } from './atoms';

type DropdownItem = {
	label: string;
	description: string;
	path: string;
	icon: React.ReactNode;
	color: 'yellow' | 'coral' | 'mint' | 'sky';
};

type NavItem = {
	label: string;
	path: string;
	dropdown?: DropdownItem[];
};

/** Pixels scrolled before navbar background appears */
const SCROLL_THRESHOLD = 40;

const navigation: NavItem[] = [
	{
		label: 'Notre Offre',
		path: '/offer',
	},
	{
		label: 'Méthode',
		path: '/method',
		dropdown: [
			{
				label: 'The Revenue Experience System',
				description: 'Notre framework propriétaire en 4 piliers.',
				path: '/method',
				icon: <Layers size={16} />,
				color: 'yellow',
			},
			{
				label: 'Technologie',
				description: "L'architecture d'outils connectés.",
				path: '/technology',
				icon: <Cpu size={16} />,
				color: 'sky',
			},
			{
				label: 'Le RevOps Studio',
				description: 'Votre équipe de seniors embarquée.',
				path: '/studio',
				icon: <Briefcase size={16} />,
				color: 'mint',
			},
		],
	},
	{
		label: 'Success Stories',
		path: '/stories',
	},
	{
		label: 'À propos',
		path: '/about',
		dropdown: [
			{
				label: 'Qui sommes-nous',
				description: 'Notre vision de la science du revenu.',
				path: '/about',
				icon: <Users size={16} />,
				color: 'yellow',
			},
			{
				label: 'Nous rejoindre',
				description: 'Bâtissez le futur du RevOps avec nous.',
				path: '/jobs',
				icon: <Heart size={16} />,
				color: 'coral',
			},
		],
	},
	{
		label: 'Ressources',
		path: '/resources',
		dropdown: [
			{
				label: 'Podcast Revenue Echoes',
				description: 'Interviews de leaders du revenu.',
				path: '/podcast',
				icon: <Mic size={16} />,
				color: 'yellow',
			},
			{
				label: 'Chaîne Youtube',
				description: 'Masterclasses et replays techniques.',
				path: 'https://www.youtube.com/@Ocobo-Revenue',
				icon: <Youtube size={16} />,
				color: 'coral',
			},
			{
				label: 'Librairie RevOps',
				description: 'Articles, playbooks et templates.',
				path: '/resources',
				icon: <BookOpen size={16} />,
				color: 'coral',
			},
			{
				label: 'Modern Revenue Club',
				description: 'La communauté privée des leaders RevOps.',
				path: 'https://modernrevenue.club',
				icon: (
					<img
						src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Monogramme-couleurs.png"
						alt="Modern Revenue Club"
						className={css({ w: '6', h: '6', objectFit: 'contain' })}
					/>
				),
				color: 'sky',
			},
		],
	},
];

const iconStyles: Record<string, string> = {
	yellow: css({
		bg: 'ocobo.yellow/10',
		color: 'ocobo.yellow',
	}),
	coral: css({
		bg: 'ocobo.coral/10',
		color: 'ocobo.coral',
	}),
	mint: css({
		bg: 'ocobo.mint/10',
		color: 'ocobo.mint',
	}),
	sky: css({
		bg: 'ocobo.sky/10',
		color: 'ocobo.sky',
	}),
};

const hoverStyles: Record<string, string> = {
	yellow: css({ _hover: { bg: 'ocobo.yellow.light' } }),
	coral: css({ _hover: { bg: 'ocobo.coral.light' } }),
	mint: css({ _hover: { bg: 'ocobo.mint.light' } }),
	sky: css({ _hover: { bg: 'ocobo.sky.light' } }),
};

const hoverTextStyles: Record<string, string> = {
	yellow: css({ _groupHover: { color: 'ocobo.yellow' } }),
	coral: css({ _groupHover: { color: 'ocobo.coral' } }),
	mint: css({ _groupHover: { color: 'ocobo.mint' } }),
	sky: css({ _groupHover: { color: 'ocobo.sky' } }),
};

type NavDropdownItemProps = {
	key?: React.Key;
	item: DropdownItem;
	onClose: () => void;
};

function NavDropdownItem({ item, onClose }: NavDropdownItemProps) {
	const isExternal = item.path.startsWith('http');

	const content = (
		<>
			<div
				className={`${center()} ${css({
					w: '10',
					h: '10',
					rounded: 'xl',
					flexShrink: 0,
					transition: 'all',
					_groupHover: { transform: 'scale(1.05)' },
				})} ${iconStyles[item.color]}`}
			>
				{item.icon}
			</div>
			<div
				className={css({
					transition: 'transform',
					_groupHover: { transform: 'translateX(4px)' },
				})}
			>
				<h4
					className={`${css({
						fontWeight: 'bold',
						color: 'ocobo.dark',
						fontSize: 'base',
						mb: '0.5',
						transition: 'colors',
					})} ${hoverTextStyles[item.color]}`}
				>
					{item.label}
				</h4>
				<p
					className={css({
						fontSize: 'xs',
						color: 'gray.400',
						fontWeight: 'medium',
						lineHeight: 'tight',
					})}
				>
					{item.description}
				</p>
			</div>
		</>
	);

	const itemClass = `${flex({ gap: '4', align: 'flex-start' })} ${css({
		p: '4',
		rounded: '2xl',
		transition: 'all',
		cursor: 'pointer',
		outline: 'none',
		_focus: {
			outline: '2px solid',
			outlineColor: 'ocobo.dark',
			outlineOffset: '2px',
		},
	})} ${hoverStyles[item.color]} group`;

	if (isExternal) {
		return (
			<Menu.Item value={item.path} asChild>
				<a
					href={item.path}
					target="_blank"
					rel="noopener noreferrer"
					className={itemClass}
					onClick={onClose}
				>
					{content}
				</a>
			</Menu.Item>
		);
	}

	return (
		<Menu.Item value={item.path} asChild>
			<Link to={item.path} className={itemClass} onClick={onClose}>
				{content}
			</Link>
		</Menu.Item>
	);
}

type NavItemWithDropdownProps = {
	key?: React.Key;
	item: NavItem;
	isCurrentPath: boolean;
	useWhiteText: boolean;
	activeDropdown: string | null;
	setActiveDropdown: (label: string | null) => void;
};

function NavItemWithDropdown({
	item,
	isCurrentPath,
	useWhiteText,
	activeDropdown,
	setActiveDropdown,
}: NavItemWithDropdownProps) {
	const isOpen = activeDropdown === item.label;

	const getLinkStyles = (isDropdownActive: boolean, isCurrent: boolean) => {
		if (useWhiteText) {
			return `${flex({ gap: '1', align: 'center' })} ${css({
				px: '4',
				py: '2',
				rounded: 'full',
				fontSize: 'sm',
				fontWeight: 'bold',
				cursor: 'pointer',
				transition: 'all',
				transitionDuration: '300ms',
				color: isDropdownActive || isCurrent ? 'white' : 'gray.300',
				bg: isDropdownActive || isCurrent ? 'white/10' : 'transparent',
				_hover: { color: 'white', bg: 'white/5' },
			})}`;
		}
		return `${flex({ gap: '1', align: 'center' })} ${css({
			px: '4',
			py: '2',
			rounded: 'full',
			fontSize: 'sm',
			fontWeight: 'bold',
			cursor: 'pointer',
			transition: 'all',
			transitionDuration: '300ms',
			color: isDropdownActive || isCurrent ? 'ocobo.dark' : 'gray.500',
			_hover: { color: 'ocobo.dark' },
		})}`;
	};

	if (!item.dropdown) {
		return (
			<Link to={item.path} className={getLinkStyles(false, isCurrentPath)}>
				{item.label}
			</Link>
		);
	}

	return (
		<Menu.Root
			open={isOpen}
			onOpenChange={(details) => {
				setActiveDropdown(details.open ? item.label : null);
			}}
			positioning={{ placement: 'bottom', gutter: 16 }}
			closeOnSelect
		>
			<Menu.Trigger asChild>
				<button type="button" className={getLinkStyles(isOpen, isCurrentPath)}>
					{item.label}
					<ChevronDown
						size={14}
						className={css({
							transition: 'transform 0.3s',
							opacity: isOpen ? 0.6 : 0.3,
							transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
						})}
					/>
				</button>
			</Menu.Trigger>
			<Menu.Positioner
				className={css({
					position: 'absolute',
					top: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					pt: '4',
					zIndex: 200,
				})}
			>
				<Menu.Content
					className={css({
						w: '380px',
						bg: 'white',
						rounded: '3xl',
						p: '2',
						shadow: 'soft-lg',
						borderWidth: '1px',
						borderColor: 'gray.50',
						overflow: 'hidden',
						outline: 'none',
						transition: 'all 0.3s',
						'&[data-state="open"]': {
							opacity: 1,
							transform: 'translateY(0)',
						},
						'&[data-state="closed"]': {
							opacity: 0,
							transform: 'translateY(-8px)',
							pointerEvents: 'none',
						},
					})}
				>
					{item.dropdown.map((subItem) => (
						<NavDropdownItem
							key={`${item.label}-${subItem.label}`}
							item={subItem}
							onClose={() => setActiveDropdown(null)}
						/>
					))}
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
}

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const location = useLocation();

	const isDarkPage = location.pathname === '/podcast';

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > SCROLL_THRESHOLD);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: intentionally trigger on route change
	useEffect(() => {
		setIsOpen(false);
		setActiveDropdown(null);
	}, [location.pathname]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActiveDropdown(null);
				setIsOpen(false);
			}
		};
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, []);

	const useWhiteText = isDarkPage && !scrolled;
	const logoUrl = useWhiteText
		? 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg'
		: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png';

	const getIconThemeClasses = (color: string) => iconStyles[color] || '';

	return (
		<>
			<div
				className={`${flex({ justify: 'center', align: 'flex-start' })} ${css({
					position: 'fixed',
					top: '0',
					left: '0',
					right: '0',
					zIndex: 100,
					pointerEvents: 'none',
					p: { base: '4', md: '6' },
					h: '32',
				})}`}
			>
				<nav
					className={css({
						position: 'relative',
						w: 'full',
						maxW: scrolled ? '5xl' : '7xl',
						transition: 'all',
						transitionDuration: '700ms',
						transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)',
						pointerEvents: 'auto',
						bg: scrolled ? 'white/80' : 'transparent',
						backdropFilter: scrolled ? 'blur(12px)' : 'none',
						borderWidth: scrolled ? '1px' : '0',
						borderColor: 'gray.100',
						shadow: scrolled ? 'soft-md' : 'none',
						rounded: scrolled ? '3xl' : 'none',
						py: scrolled ? '2' : '4',
						px: scrolled ? { base: '3', md: '6' } : '0',
						opacity: isOpen ? 0 : 1,
						transform: isOpen ? 'scale(0.95)' : 'scale(1)',
					})}
				>
					<div
						className={`${flex({ justify: 'space-between', align: 'center' })} ${css(
							{
								position: 'relative',
								h: '12',
							},
						)}`}
					>
						<Link
							to="/"
							className={`${hstack({ gap: '2' })} ${css({
								position: 'relative',
								zIndex: 50,
								pl: '2',
							})}`}
						>
							<img
								src={logoUrl}
								alt="Ocobo Logo"
								className={css({
									transition: 'all',
									transitionDuration: '700ms',
									objectFit: 'contain',
									h: scrolled
										? { base: '6', md: '7' }
										: { base: '9', md: '10' },
								})}
							/>
						</Link>

						{/* Desktop Navigation */}
						<div
							className={`${hstack({ gap: '1' })} ${css({
								display: { base: 'none', md: 'flex' },
								px: '2',
							})}`}
						>
							{navigation.map((item) => (
								<NavItemWithDropdown
									key={item.label}
									item={item}
									isCurrentPath={location.pathname === item.path}
									useWhiteText={useWhiteText}
									activeDropdown={activeDropdown}
									setActiveDropdown={setActiveDropdown}
								/>
							))}
						</div>

						<div className={hstack({ gap: '3' })}>
							<Button
								as="link"
								to="/contact"
								size="sm"
								variant={useWhiteText ? 'cta' : 'primary'}
								className={css({
									display: { base: 'none', md: 'flex' },
									bg: useWhiteText ? 'ocobo.yellow' : undefined,
									color: useWhiteText ? 'ocobo.dark' : undefined,
								})}
							>
								Prendre RDV
							</Button>

							<button
								type="button"
								onClick={() => setIsOpen(true)}
								aria-label="Open menu"
								aria-expanded={isOpen}
								className={css({
									display: { base: 'block', md: 'none' },
									position: 'relative',
									zIndex: 50,
									p: '2.5',
									rounded: 'full',
									transition: 'colors',
									bg: useWhiteText ? 'white/10' : 'black/5',
									color: useWhiteText ? 'white' : 'ocobo.dark',
								})}
							>
								<MenuIcon size={20} />
							</button>
						</div>
					</div>
				</nav>
			</div>

			{/* Mobile Fullscreen Menu */}
			<div
				role="dialog"
				aria-modal="true"
				aria-label="Navigation menu"
				className={css({
					position: 'fixed',
					inset: '0',
					bg: 'white',
					zIndex: 1000,
					display: { md: 'none' },
					transition: 'all',
					transitionDuration: '700ms',
					transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)',
					opacity: isOpen ? 1 : 0,
					visibility: isOpen ? 'visible' : 'hidden',
					transform: isOpen ? 'translateY(0)' : 'translateY(32px)',
					pointerEvents: isOpen ? 'auto' : 'none',
				})}
			>
				<div
					className={`${vstack()} ${css({
						w: 'full',
						h: 'full',
						pt: '8',
						px: '8',
						pb: '10',
					})}`}
				>
					<div
						className={`${flex({ justify: 'space-between', align: 'center' })} ${css(
							{
								w: 'full',
								mb: '10',
							},
						)}`}
					>
						<img
							src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png"
							alt="Ocobo Logo"
							className={css({ h: '8' })}
						/>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close menu"
							className={css({
								p: '2',
								color: 'ocobo.dark',
								bg: 'gray.50',
								rounded: 'full',
								transition: 'transform',
								_active: { transform: 'scale(0.9)' },
							})}
						>
							<X size={24} />
						</button>
					</div>

					<div
						className={css({
							w: 'full',
							flexGrow: 1,
							spaceY: '8',
							overflowY: 'auto',
						})}
					>
						{navigation.map((item) => (
							<div key={item.label} className={css({ spaceY: '4' })}>
								{item.dropdown ? (
									<div className={css({ spaceY: '5' })}>
										<Link
											to={item.path}
											onClick={() => setIsOpen(false)}
											className={css({
												fontFamily: 'display',
												fontSize: '2xl',
												fontWeight: '900',
												display: 'block',
												letterSpacing: 'tight',
												color: 'ocobo.dark',
											})}
										>
											{item.label}
										</Link>
										<div className={css({ spaceY: '5', pl: '2' })}>
											{item.dropdown.map((sub) => {
												const isExternal = sub.path.startsWith('http');
												const mobileLinkContent = (
													<>
														<div
															className={`${center()} ${css({
																w: '10',
																h: '10',
																rounded: 'xl',
																flexShrink: 0,
																borderWidth: '1px',
																borderColor: 'gray.50',
															})} ${getIconThemeClasses(sub.color)}`}
														>
															{React.cloneElement(
																sub.icon as React.ReactElement<{
																	size?: number;
																}>,
																{ size: 18 },
															)}
														</div>
														<div>
															<span
																className={css({
																	fontWeight: 'bold',
																	fontSize: 'base',
																	display: 'block',
																	lineHeight: 'tight',
																	transition: 'colors',
																})}
															>
																{sub.label}
															</span>
															<span
																className={css({
																	fontSize: 'xs',
																	color: 'gray.400',
																	fontWeight: 'medium',
																})}
															>
																{sub.description}
															</span>
														</div>
													</>
												);

												if (isExternal) {
													return (
														<a
															key={`mobile-${item.label}-${sub.label}`}
															href={sub.path}
															target="_blank"
															rel="noopener noreferrer"
															onClick={() => setIsOpen(false)}
															className={`${hstack({ gap: '4' })} ${css({
																transition: 'transform',
																_active: { transform: 'translateX(4px)' },
															})}`}
														>
															{mobileLinkContent}
														</a>
													);
												}

												return (
													<Link
														key={`mobile-${item.label}-${sub.label}`}
														to={sub.path}
														onClick={() => setIsOpen(false)}
														className={`${hstack({ gap: '4' })} ${css({
															transition: 'transform',
															_active: { transform: 'translateX(4px)' },
														})}`}
													>
														{mobileLinkContent}
													</Link>
												);
											})}
										</div>
									</div>
								) : (
									<Link
										to={item.path}
										onClick={() => setIsOpen(false)}
										className={css({
											fontFamily: 'display',
											fontSize: '2xl',
											fontWeight: '900',
											display: 'block',
											letterSpacing: 'tight',
											color: 'ocobo.dark',
										})}
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</div>

					<div className={css({ w: 'full', mt: '10' })}>
						<Button
							as="link"
							to="/contact"
							onClick={() => setIsOpen(false)}
							className={css({
								w: 'full',
								py: '5!',
								fontSize: 'sm',
								fontWeight: '900',
								textTransform: 'uppercase',
								letterSpacing: '0.15em',
								shadow: '2xl',
							})}
						>
							Prendre rendez-vous
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
