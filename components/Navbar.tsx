import { Menu } from '@ark-ui/react/menu';
import {
	ArrowRight,
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
				className={`${css({
					w: '10',
					h: '10',
					rounded: 'xl',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
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

	const itemClass = `${css({
		display: 'flex',
		alignItems: 'flex-start',
		gap: '4',
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

	const getThemeClasses = (isDropdownActive: boolean, isCurrent: boolean) => {
		if (useWhiteText) {
			if (isDropdownActive || isCurrent) return 'text-white bg-white/10';
			return 'text-gray-300 hover:text-white hover:bg-white/5';
		}
		if (isDropdownActive || isCurrent) {
			return 'text-ocobo-dark font-black';
		}
		return 'text-gray-500 hover:text-ocobo-dark';
	};

	if (!item.dropdown) {
		return (
			<Link
				to={item.path}
				className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${getThemeClasses(false, isCurrentPath)}`}
			>
				{item.label}
			</Link>
		);
	}

	return (
		<Menu.Root
			open={isOpen}
			onOpenChange={(details) => {
				if (details.open) {
					setActiveDropdown(item.label);
				} else {
					setActiveDropdown(null);
				}
			}}
			positioning={{ placement: 'bottom', gutter: 16 }}
			closeOnSelect
		>
			{/* biome-ignore lint/a11y/noStaticElementInteractions: hover behaviour for dropdown */}
			<div
				className={css({ position: 'relative' })}
				onMouseEnter={() => setActiveDropdown(item.label)}
				onMouseLeave={() => setActiveDropdown(null)}
			>
				<Menu.Trigger asChild>
					<Link
						to={item.path}
						className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1 ${getThemeClasses(isOpen, isCurrentPath)}`}
						onClick={() => {
							// Allow navigation on click, menu opens on hover
							setActiveDropdown(null);
						}}
					>
						{item.label}
						<ChevronDown
							size={14}
							className={css({
								transition: 'transform 0.5s',
								opacity: isOpen ? 0.6 : 0.3,
								transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
							})}
						/>
					</Link>
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
								key={subItem.path}
								item={subItem}
								onClose={() => setActiveDropdown(null)}
							/>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</div>
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
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsOpen(false);
		setActiveDropdown(null);
	}, []);

	// Body scroll lock for mobile menu
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

	// Escape key handler for dropdowns and mobile menu
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

	const getHoverTextColor = (color: string) => {
		const textThemeMap: Record<string, string> = {
			yellow: 'group-hover/item:text-ocobo-yellow',
			coral: 'group-hover/item:text-ocobo-coral',
			mint: 'group-hover/item:text-ocobo-mint',
			sky: 'group-hover/item:text-ocobo-sky',
		};
		return textThemeMap[color] || 'group-hover/item:text-ocobo-dark';
	};

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none p-4 md:p-6 h-32 items-start">
				<nav
					className={`
            relative w-full max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto
            ${
							scrolled
								? 'bg-white/80 backdrop-blur-lg border border-gray-100 shadow-soft-md rounded-3xl py-2 px-3 md:px-6 lg:max-w-5xl'
								: 'bg-white/0 border-transparent py-4 px-0'
						}
            ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
          `}
				>
					<div className="flex justify-between items-center relative h-12">
						<Link
							to="/"
							className="relative z-50 group flex items-center gap-2 pl-2"
						>
							<img
								src={logoUrl}
								alt="Ocobo Logo"
								className={`transition-all duration-700 object-contain ${scrolled ? 'h-6 md:h-7' : 'h-9 md:h-10'}`}
							/>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-1 px-2">
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

						<div className="flex items-center gap-3">
							<Link to="/contact" className="hidden md:block">
								<Button
									className={`!py-2 !px-5 text-xs font-black uppercase tracking-widest border-none transition-all duration-700
                  ${
										scrolled
											? 'bg-ocobo-dark text-white shadow-none scale-95'
											: useWhiteText
												? 'bg-ocobo-yellow text-ocobo-dark shadow-xl'
												: 'bg-ocobo-dark text-white shadow-xl'
									}`}
								>
									Prendre RDV
								</Button>
							</Link>

							<button
								type="button"
								onClick={() => setIsOpen(true)}
								aria-label="Open menu"
								aria-expanded={isOpen}
								className={`md:hidden relative z-50 p-2.5 rounded-full transition-colors ${useWhiteText ? 'bg-white/10 text-white' : 'bg-black/5 text-ocobo-dark'}`}
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
				className={`
					fixed inset-0 bg-white z-[1000] md:hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
					${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-8 pointer-events-none'}
				`}
			>
				<div className="flex flex-col h-full pt-8 px-8 pb-10">
					<div className="flex justify-between items-center mb-10">
						<img
							src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png"
							alt="Ocobo Logo"
							className="h-8"
						/>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close menu"
							className="p-2 text-ocobo-dark bg-gray-50 rounded-full active:scale-90 transition-transform"
						>
							<X size={24} />
						</button>
					</div>

					<div className="flex-grow space-y-8 overflow-y-auto scrollbar-hide">
						{navigation.map((item) => (
							<div key={item.label} className="space-y-4">
								{item.dropdown ? (
									<div className="space-y-5">
										<Link
											to={item.path}
											onClick={() => setIsOpen(false)}
											className="font-display text-2xl font-black block tracking-tight text-ocobo-dark"
										>
											{item.label}
										</Link>
										<div className="space-y-5 pl-2">
											{item.dropdown.map((sub) => {
												const isExternal = sub.path.startsWith('http');
												const mobileLinkContent = (
													<>
														<div
															className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-50 ${getIconThemeClasses(sub.color)}`}
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
																className={`font-bold text-base block leading-tight transition-colors ${getHoverTextColor(sub.color).replace('group-hover/item:', '')}`}
															>
																{sub.label}
															</span>
															<span className="text-xs text-gray-400 font-medium">
																{sub.description}
															</span>
														</div>
													</>
												);

												if (isExternal) {
													return (
														<a
															key={sub.path}
															href={sub.path}
															target="_blank"
															rel="noopener noreferrer"
															onClick={() => setIsOpen(false)}
															className="flex items-center gap-4 group active:translate-x-1 transition-transform"
														>
															{mobileLinkContent}
														</a>
													);
												}

												return (
													<Link
														key={sub.path}
														to={sub.path}
														onClick={() => setIsOpen(false)}
														className="flex items-center gap-4 group active:translate-x-1 transition-transform"
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
										className="font-display text-2xl font-black block tracking-tight text-ocobo-dark"
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</div>

					<div className="mt-10">
						<Link to="/contact" onClick={() => setIsOpen(false)}>
							<button
								type="button"
								className="w-full flex items-center justify-center gap-3 py-5 rounded-full bg-ocobo-dark text-white text-sm font-black uppercase tracking-[0.15em] shadow-2xl active:scale-[0.98] transition-all"
							>
								Prendre rendez-vous <ArrowRight size={16} />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
