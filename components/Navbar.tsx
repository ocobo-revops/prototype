
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Mic, Youtube, BookOpen, Layers, Cpu, Briefcase, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Détection des pages sombres pour adapter le contraste
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
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navigation = [
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
          color: 'yellow' // Demandé : Jaune
        },
        { 
          label: 'Technologie', 
          description: 'L’architecture d’outils connectés.',
          path: '/technology', 
          icon: <Cpu size={16} />,
          color: 'sky' // Demandé : Bleue
        },
        { 
          label: 'Le RevOps Studio', 
          description: 'Votre équipe de seniors embarquée.',
          path: '/studio', 
          icon: <Briefcase size={16} />,
          color: 'mint' // Demandé : Vert
        },
      ]
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
          color: 'yellow' // Demandé : Jaune
        },
        { 
          label: 'Nous rejoindre', 
          description: 'Bâtissez le futur du RevOps avec nous.',
          path: '/jobs', 
          icon: <Heart size={16} />,
          color: 'coral' // Demandé : Corail
        },
      ]
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
          color: 'yellow'
        },
        { 
          label: 'Chaîne Youtube', 
          description: 'Masterclasses et replays techniques.',
          path: 'https://www.youtube.com/@Ocobo-Revenue', 
          icon: <Youtube size={16} />,
          color: 'coral'
        },
        { 
          label: 'Librairie RevOps', 
          description: 'Articles, playbooks et templates.',
          path: '/resources', 
          icon: <BookOpen size={16} />,
          color: 'coral'
        },
        { 
          label: 'Modern Revenue Club', 
          description: 'La communauté privée des leaders RevOps.',
          path: 'https://modernrevenue.club', 
          icon: <img src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Monogramme-couleurs.png" alt="Modern Revenue Club" className="w-6 h-6 object-contain" />,
          color: 'sky'
        },
      ]
    },
  ];

  const useWhiteText = isDarkPage && !scrolled;
  const logoUrl = useWhiteText 
    ? "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg"
    : "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png";

  const getThemeClasses = (isDropdownActive: boolean, isCurrentPath: boolean) => {
    if (useWhiteText) {
      if (isDropdownActive || isCurrentPath) return 'text-white bg-white/10';
      return 'text-gray-300 hover:text-white hover:bg-white/5';
    }

    // Menu principal uniquement noir/gris foncé, pas de couleur
    if (isDropdownActive || isCurrentPath) {
      return 'text-ocobo-dark font-black';
    }
    
    return 'text-gray-500 hover:text-ocobo-dark';
  };

  const getSubMenuHoverClasses = (color: string) => {
    const subThemeMap: Record<string, string> = {
      yellow: 'hover:bg-ocobo-yellow-light',
      coral: 'hover:bg-ocobo-coral-light',
      mint: 'hover:bg-ocobo-mint-light',
      sky: 'hover:bg-ocobo-sky-light',
    };
    return subThemeMap[color] || 'hover:bg-gray-50';
  };

  const getIconThemeClasses = (color: string) => {
    const iconThemeMap: Record<string, string> = {
      yellow: 'bg-ocobo-yellow/10 text-ocobo-yellow',
      coral: 'bg-ocobo-coral/10 text-ocobo-coral',
      mint: 'bg-ocobo-mint/10 text-ocobo-mint',
      sky: 'bg-ocobo-sky/10 text-ocobo-sky',
    };
    return iconThemeMap[color] || 'bg-gray-50 text-ocobo-dark';
  };

  const getHoverTextColor = (color: string) => {
    const textThemeMap: Record<string, string> = {
      yellow: 'group-hover/item:text-ocobo-yellow',
      coral: 'group-hover/item:text-ocobo-coral',
      mint: 'group-hover/item:text-ocobo-mint',
      sky: 'group-hover/item:text-ocobo-sky',
    };
    return textThemeMap[color] || 'group-hover/item:text-ocobo-dark';
  };

  const renderDropdownItem = (subItem: any, idx: number) => {
    const isExternal = subItem.path.startsWith('http');
    const content = (
      <>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover/item:scale-105 ${getIconThemeClasses(subItem.color)}`}>
          {subItem.icon}
        </div>
        <div className="transition-transform group-hover/item:translate-x-1">
           <h4 className={`font-bold text-ocobo-dark text-[14px] mb-0.5 transition-colors ${getHoverTextColor(subItem.color)}`}>
              {subItem.label}
           </h4>
           <p className="text-[11px] text-gray-400 font-medium leading-tight">
              {subItem.description}
           </p>
        </div>
      </>
    );

    const className = `flex items-start gap-4 p-4 rounded-2xl transition-all group/item ${getSubMenuHoverClasses(subItem.color)}`;

    if (isExternal) {
      return (
        <a
          key={idx}
          href={subItem.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={() => setActiveDropdown(null)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        key={idx}
        to={subItem.path}
        className={className}
        onClick={() => setActiveDropdown(null)}
      >
        {content}
      </Link>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none p-4 md:p-6 h-32 items-start">
        <nav 
          className={`
            relative w-full max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto
            ${scrolled 
              ? 'bg-white/80 backdrop-blur-lg border border-gray-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] rounded-[2rem] py-2 px-3 md:px-6 lg:max-w-5xl' 
              : 'bg-white/0 border-transparent py-4 px-0'
            }
            ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
          `}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex justify-between items-center relative h-12">
            
            <Link to="/" className="relative z-50 group flex items-center gap-2 pl-2">
              <img 
                  src={logoUrl} 
                  alt="Ocobo Logo" 
                  className={`transition-all duration-700 object-contain ${scrolled ? 'h-6 md:h-7' : 'h-9 md:h-10'}`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 px-2">
              {navigation.map((item) => {
                const isDropdownActive = activeDropdown === item.label;
                const isCurrentPath = location.pathname === item.path;
                
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  >
                    <Link
                      to={item.path}
                      className={`
                        px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 flex items-center gap-1
                        ${getThemeClasses(isDropdownActive, isCurrentPath)}
                      `}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown size={14} className={`transition-transform duration-500 opacity-30 ${isDropdownActive ? 'rotate-180 opacity-60' : ''}`} />
                      )}
                    </Link>

                    {item.dropdown && (
                      <div 
                        className={`
                            absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[380px]
                            transition-all duration-500 transform origin-top
                            ${isDropdownActive ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'}
                        `}
                      >
                        <div className="bg-white rounded-[2rem] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-50 overflow-hidden">
                          {item.dropdown.map((subItem, idx) => renderDropdownItem(subItem, idx))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
               <Link to="/contact" className="hidden md:block">
                <Button className={`!py-2 !px-5 text-[11px] font-black uppercase tracking-widest border-none transition-all duration-700 
                  ${scrolled 
                    ? 'bg-ocobo-dark text-white shadow-none scale-95' 
                    : (useWhiteText ? 'bg-ocobo-yellow text-ocobo-dark shadow-xl' : 'bg-ocobo-dark text-white shadow-xl')
                  }`}>
                  Prendre RDV
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className={`md:hidden relative z-50 p-2.5 rounded-full transition-colors ${useWhiteText ? 'bg-white/10 text-white' : 'bg-black/5 text-ocobo-dark'}`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`
        fixed inset-0 bg-white z-[1000] md:hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-8 pointer-events-none'}
      `}>
          <div className="flex flex-col h-full pt-8 px-8 pb-10">
             <div className="flex justify-between items-center mb-10">
                <img 
                    src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png" 
                    alt="Ocobo Logo" 
                    className="h-8" 
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-ocobo-dark bg-gray-50 rounded-full active:scale-90 transition-transform"
                >
                  <X size={24} />
                </button>
             </div>

             <div className="flex-grow space-y-8 overflow-y-auto scrollbar-hide">
                {navigation.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                        {item.dropdown ? (
                            <div className="space-y-5">
                                <Link 
                                    to={item.path} 
                                    onClick={() => setIsOpen(false)}
                                    className="font-display text-[22px] font-black block tracking-tight text-ocobo-dark"
                                >
                                    {item.label}
                                </Link>
                                <div className="space-y-5 pl-2">
                                    {item.dropdown.map((sub, subIdx) => {
                                        const isExternal = sub.path.startsWith('http');
                                        const mobileLinkContent = (
                                          <>
                                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-50 ${getIconThemeClasses(sub.color)}`}>
                                                  {React.cloneElement(sub.icon as any, { size: 18 })}
                                              </div>
                                              <div>
                                                  <span className={`font-bold text-[14px] block leading-tight transition-colors ${getHoverTextColor(sub.color).replace('group-hover/item:', '')}`}>{sub.label}</span>
                                                  <span className="text-[11px] text-gray-400 font-medium">{sub.description}</span>
                                              </div>
                                          </>
                                        );

                                        if (isExternal) {
                                          return (
                                            <a 
                                                key={subIdx} 
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
                                                key={subIdx} 
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
                                className="font-display text-[22px] font-black block tracking-tight text-ocobo-dark"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                ))}
             </div>
             
             <div className="mt-10">
                 <Link to="/contact" onClick={() => setIsOpen(false)}>
                     <button className="w-full flex items-center justify-center gap-3 py-5 rounded-full bg-ocobo-dark text-white text-[13px] font-black uppercase tracking-[0.15em] shadow-2xl active:scale-[0.98] transition-all">
                        Prendre rendez-vous <ArrowRight size={16} />
                     </button>
                 </Link>
             </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
