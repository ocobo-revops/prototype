
import React from 'react';
import { ArrowRight, Check, Quote, X, CheckCircle2, Layout, Layers, BarChart3, Users, Zap, Target, MousePointer2, Plus, Sliders, Cpu, ChevronDown, Star } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router';

const DashboardIllustration = () => {
  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center animate-hero-reveal-fast" style={{ animationDelay: '0.4s' }}>
      {/* SHARP ARCHITECTURAL BACKGROUND SHAPES - More refined */}
      
      {/* Top Center: Mint Circle with Burst */}
      <div className="absolute top-[8%] left-[38%] w-[110px] h-[110px] rounded-full bg-ocobo-mint/80 flex items-center justify-center transform rotate-12 transition-transform hover:rotate-45 duration-1000">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
          </svg>
      </div>

      {/* Top Right: Coral Square */}
      <div className="absolute top-[12%] right-[12%] w-[90px] h-[90px] bg-ocobo-coral/80 transform -rotate-6 rounded-sm"></div>

      {/* Mid Left: Yellow Square */}
      <div className="absolute top-[42%] left-[5%] w-[85px] h-[100px] bg-ocobo-yellow/80 transform rotate-3 rounded-sm"></div>

      {/* Bottom Center: Sky Circle */}
      <div className="absolute bottom-[8%] left-[48%] w-[100px] h-[100px] rounded-full bg-ocobo-sky/80"></div>

      <svg viewBox="0 0 600 600" className="relative z-10 w-full h-full overflow-visible" fill="none">
        {/* WINDOW 1: HORIZONTAL BARS (TOP LEFT) - Higher rx and thinner stroke */}
        <g className="animate-float-very-slow">
            <rect x="50" y="100" width="280" height="180" rx="16" fill="white" stroke="#212323" strokeWidth="1.5" className="shadow-2xl" />
            <line x1="50" y1="145" x2="330" y2="145" stroke="#212323" strokeWidth="1.5" />
            <circle cx="80" cy="122" r="3.5" fill="#212323" />
            <circle cx="100" cy="122" r="3.5" fill="#212323" />
            <circle cx="120" cy="122" r="3.5" fill="#212323" />
            
            <g transform="translate(85, 175)">
                <rect x="0" y="0" width="200" height="6" rx="3" fill="#212323" />
                <rect x="0" y="20" width="170" height="6" rx="3" fill="#212323" />
                <rect x="0" y="40" width="185" height="6" rx="3" fill="#212323" />
                <rect x="0" y="60" width="130" height="6" rx="3" fill="#212323" />
                <rect x="0" y="80" width="160" height="6" rx="3" fill="#212323" />
                <line x1="-15" y1="-10" x2="-15" y2="95" stroke="#212323" strokeWidth="1" strokeOpacity="0.3" />
            </g>
        </g>

        {/* WINDOW 2: PIE CHART (TOP RIGHT) */}
        <g className="animate-float-very-slow" style={{ animationDelay: '-4s' }}>
            <rect x="350" y="100" width="180" height="230" rx="16" fill="white" stroke="#212323" strokeWidth="1.5" className="shadow-2xl" />
            <line x1="350" y1="145" x2="530" y2="145" stroke="#212323" strokeWidth="1.5" />
            <circle cx="380" cy="122" r="3.5" fill="#212323" />
            <circle cx="400" cy="122" r="3.5" fill="#212323" />
            
            <g transform="translate(440, 240)">
                <circle cx="0" cy="0" r="60" stroke="#212323" strokeWidth="1.5" />
                <path d="M0,0 L0,-60 A60,60 0 0,1 52,-30 Z" fill="#212323" transform="rotate(30)" />
                <path d="M0,0 L-60,0 A60,60 0 0,1 -30,-52 Z" fill="#212323" opacity="0.8" />
                <line x1="0" y1="0" x2="60" y2="0" stroke="#212323" strokeWidth="1" />
                <line x1="0" y1="0" x2="-30" y2="52" stroke="#212323" strokeWidth="1" />
            </g>
        </g>

        {/* WINDOW 3: WAVE CHART (BOTTOM RIGHT) */}
        <g className="animate-float-very-slow" style={{ animationDelay: '-8s' }}>
            <rect x="350" y="350" width="180" height="150" rx="16" fill="white" stroke="#212323" strokeWidth="1.5" className="shadow-2xl" />
            <line x1="350" y1="395" x2="530" y2="395" stroke="#212323" strokeWidth="1.5" />
            <circle cx="380" cy="372" r="3.5" fill="#212323" />
            
            <path d="M 375,460 Q 405,400 435,460 T 495,460" stroke="#212323" strokeWidth="1.5" fill="none" />
            <path d="M 375,445 Q 415,485 455,435 T 515,445" stroke="#212323" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            <line x1="375" y1="480" x2="510" y2="480" stroke="#212323" strokeWidth="1" strokeOpacity="0.2" />
        </g>

        {/* WINDOW 4: COLUMN CHART (CENTER BOTTOM) */}
        <g className="animate-float-very-slow" style={{ animationDelay: '-2s' }}>
            <rect x="200" y="305" width="130" height="210" rx="16" fill="white" stroke="#212323" strokeWidth="1.5" className="shadow-2xl" />
            <line x1="200" y1="350" x2="330" y2="350" stroke="#212323" strokeWidth="1.5" />
            
            <g transform="translate(225, 490)">
                <rect x="0" y="-40" width="12" rx="2" height="40" fill="#212323" />
                <rect x="18" y="-70" width="12" rx="2" height="70" fill="#212323" />
                <rect x="36" y="-55" width="12" rx="2" height="55" fill="#212323" />
                <rect x="54" y="-30" width="12" rx="2" height="30" fill="#212323" />
                <rect x="72" y="-85" width="12" rx="2" height="85" fill="#212323" />
            </g>
        </g>

        {/* WINDOW 5: CANDLE CHART (BOTTOM LEFT) */}
        <g className="animate-float-very-slow" style={{ animationDelay: '-6s' }}>
            <rect x="50" y="305" width="130" height="210" rx="16" fill="white" stroke="#212323" strokeWidth="1.5" className="shadow-2xl" />
            <line x1="50" y1="350" x2="180" y2="350" stroke="#212323" strokeWidth="1.5" />
            
            <g transform="translate(75, 430)">
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#212323" strokeWidth="1" />
                <rect x="-4" y="-12" width="8" rx="1" height="24" stroke="#212323" strokeWidth="1" fill="white" />
                <line x1="22" y1="-45" x2="22" y2="25" stroke="#212323" strokeWidth="1" />
                <rect x="18" y="-22" width="8" rx="1" height="35" fill="#212323" />
                <line x1="44" y1="-25" x2="44" y2="55" stroke="#212323" strokeWidth="1" />
                <rect x="40" y="5" width="8" rx="1" height="40" fill="#212323" />
                <line x1="66" y1="-55" x2="66" y2="15" stroke="#212323" strokeWidth="1" />
                <rect x="62" y="-45" width="8" rx="1" height="30" stroke="#212323" strokeWidth="1" fill="white" />
            </g>
        </g>
      </svg>
    </div>
  );
};

const ModularStackGrid = () => {
  const items = [
    { type: 'logo', label: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
    { type: 'logo', label: "Clay", logo: "https://www.clay.com/favicon.ico" },
    { type: 'logo', label: "Salesforce", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
    { type: 'logo', label: "Notion", logo: "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg" },
    { type: 'logo', label: "Vasco", logo: "https://vasco.app/favicon.ico" },
    { type: 'logo', label: "Aircall", logo: "https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg" },
    { type: 'empty' },
    { type: 'logo', label: "Qobra", logo: "https://qobra.co/favicon.ico" },
    { type: 'logo', label: "Modjo", logo: "https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg" },
    { type: 'empty' },
    { type: 'logo', label: "Planhat", logo: "https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg" },
    { type: 'logo', label: "Dust", logo: "https://dust.tt/static/logo_icon.png" },
    { type: 'empty' },
    { type: 'logo', label: "Hyperline", logo: "https://www.hyperline.co/favicon.ico" },
    { type: 'logo', label: "Lemlist", logo: "https://www.lemlist.com/hubfs/lemlist-logo-2023.svg" },
    { type: 'empty' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square p-4 mb-16">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#212323 1px, transparent 1px), linear-gradient(90deg, #212323 1px, transparent 1px)', 
             backgroundSize: '25% 25%' 
           }}>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-4 relative z-10 h-full">
        {items.map((item, i) => (
          <div 
            key={i}
            className={`
              aspect-square rounded-md md:rounded-lg border transition-all duration-500 flex items-center justify-center
              ${item.type === 'logo' 
                ? 'group bg-white border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-ocobo-sky/30' 
                : 'bg-gray-50/50 border-dashed border-gray-200 group/empty hover:bg-white hover:border-solid hover:border-ocobo-yellow/40'}
            `}
          >
            {item.type === 'logo' ? (
              <div className="flex flex-col items-center gap-1.5">
                <img src={item.logo} alt={item.label} className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                <span className="text-[6px] md:text-micro font-black uppercase tracking-widest text-ocobo-dark opacity-30">{item.label}</span>
              </div>
            ) : (
              <Plus size={16} className="text-gray-200 group-hover/empty:text-ocobo-yellow transition-colors" />
            )}
          </div>
        ))}
      </div>
      
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ocobo-yellow/5 rounded-full blur-2xl -z-10"></div>
    </div>
  );
};

const ClientMarquee = () => {
    const clients = [
        "TheFork", "ePack Hygiène", "Qonto", "PayFit", "Spendesk", "Qobra", "Tomorro", "Jus Mundi", "Vizzia", "Combo", "Sortlist", "Zenchef"
    ];
    
    const extendedClients = [...clients, ...clients, ...clients];

    return (
        <div className="relative w-full overflow-hidden py-3 border-y border-white/5">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-ocobo-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-ocobo-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee-ultra-slow whitespace-nowrap">
                {extendedClients.map((client, idx) => (
                    <div key={idx} className="flex items-center justify-center px-10 md:px-14">
                        <span className="font-display font-black text-white/20 text-base md:text-lg tracking-[0.25em] uppercase hover:text-ocobo-yellow transition-colors cursor-default select-none">
                            {client}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Home component
const Home: React.FC = () => {
  return (
    <div className="w-full">
      <style>{`
        @keyframes float-very-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes hero-reveal-soft {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-very-slow { animation: float-very-slow 12s ease-in-out infinite; }
        .animate-hero-reveal-fast {
          opacity: 0;
          animation: hero-reveal-soft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-marquee-ultra-slow {
          animation: marquee-ultra-slow 90s linear infinite;
          display: flex;
          width: max-content;
        }
        @keyframes marquee-ultra-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
      
      {/* HERO SECTION - REFINED LOADING SEQUENCE */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
              <div className="lg:w-1/2">
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight animate-hero-reveal-fast" style={{ animationDelay: '0.1s' }}>
                      L'architecture<br/>
                      qui fait tenir<br/>
                      <span className="text-gray-400">votre croissance.</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium max-w-xl animate-hero-reveal-fast" style={{ animationDelay: '0.2s' }}>
                      Voici comment nous transformons la croissance en <span className="underline decoration-ocobo-yellow decoration-[3px] underline-offset-[6px]">expérience simple, fluide et pilotable.</span>
                  </p>

                  <div className="mb-14 py-1.5 animate-hero-reveal-fast" style={{ animationDelay: '0.3s' }}>
                      <p className="font-display text-lg md:text-xl font-normal text-ocobo-dark leading-tight tracking-tight">
                        Le RevOps n’est pas un outil : c’est <span className="font-bold">la science qui organise votre revenu.</span>
                      </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 items-start animate-hero-reveal-fast" style={{ animationDelay: '0.4s' }}>
                      <Link to="/contact">
                          <Button 
                            variant="primary" 
                            className="px-14 py-6 text-sm font-bold uppercase tracking-[0.2em] shadow-lg bg-ocobo-dark hover:bg-black transition-all hover:-translate-y-1"
                          >
                            Rencontrer un architecte
                          </Button>
                      </Link>
                  </div>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
                  <DashboardIllustration />
              </div>
          </div>
      </section>

      {/* BLOC 2 - LOGOS DÉFILANTS ET TÉMOIGNAGES - STYLE À PROPOS AFFINÉ */}
      <section className="bg-ocobo-dark py-20 md:py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.02]" 
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-ocobo-yellow/5 rounded-full -translate-x-1/2 blur-3xl opacity-30"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="mb-16 text-center">
                <span className="font-display font-black text-white/40 text-micro uppercase tracking-[0.4em] mb-4 inline-block">
                    Ils nous font confiance
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-8 tracking-tight">La preuve par l'expérience</h3>
            </div>
            
            <div className="mb-24">
                <ClientMarquee />
            </div>

            <div className="max-w-4xl mx-auto relative py-16 px-8 md:px-16 bg-white/5 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm group/card">
                {/* Massive Yellow Quote Mark - More visible */}
                <div className="absolute top-12 left-10 text-ocobo-yellow/40 font-display font-black text-[120px] leading-none select-none pointer-events-none transform -translate-y-1/4">
                    “
                </div>
                
                <div className="relative z-10">
                  <p className="text-white font-display text-lg md:text-2xl font-medium mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0">
                     Nous avons fait appel à Ocobo dans notre seconde phase d’hypercroissance afin de réinventer notre modèle de commissionnement.
                  </p>
                  
                  {/* Multi-color separator line style "Inside" */}
                  <div className="w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky opacity-40 mb-10"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-ocobo-yellow rounded-lg flex items-center justify-center text-ocobo-dark font-display font-black text-xl shadow-lg transform rotate-3 group-hover/card:rotate-0 transition-transform duration-500">
                              AM
                          </div>
                          <div className="flex flex-col">
                              <p className="text-white font-black text-lg tracking-tight">Arnaud Meunier</p>
                               <p className="text-micro font-black text-ocobo-yellow uppercase tracking-[0.25em] opacity-70">CSO @ ePack Hygiène</p>
                          </div>
                      </div>
                      
                       <Link to="/stories" className="group/btn flex items-center gap-4 text-white/40 hover:text-ocobo-yellow transition-colors font-display font-black text-micro uppercase tracking-[0.3em]">
                           Découvrir nos stories
                           <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                       </Link>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* BLOC 3 - PAIN POINT ET POSITIONNEMENT */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
         </div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
               Le RevOps est partout. <br/>Mais personne ne comprend vraiment ce dont il s’agit.
            </h2>
            <div className="prose prose-xl mx-auto text-gray-500 mb-12 font-medium">
                <p>
                    Le marché a transformer un métier essentiel en une discipline fourre-tout : CRM, intégration, automatisation, data, growth…
                    Résultat : une cacophonie, des stacks qui débordent et des organisations qui avancent à tâtons.
                </p>
            </div>
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-ocobo-dark text-white font-display font-black uppercase tracking-[0.2em] text-sm rounded-full transform hover:scale-105 transition-transform cursor-default shadow-lg">
                Nous refusons ce flou
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 mt-28 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                    { title: "Aligner", desc: "les équipes", icon: <Layout size={28} />, color: "ocobo-coral", lightColor: "ocobo-coral-light" },
                    { title: "Simplifier", desc: "les process", icon: <Zap size={28} />, color: "ocobo-yellow", lightColor: "ocobo-yellow-light" },
                    { title: "Fiabiliser", desc: "la donnée", icon: <Target size={28} />, color: "ocobo-sky", lightColor: "ocobo-sky-light" },
                    { title: "Piloter", desc: "la croissance", icon: <BarChart3 size={28} />, color: "ocobo-mint", lightColor: "ocobo-mint-light" }
                ].map((item, i) => (
                    <div key={i} className="group relative bg-white border border-gray-100 p-12 aspect-square rounded-lg transition-all duration-500 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center justify-center text-center">
                        <div className={`absolute inset-0 bg-${item.lightColor} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`}></div>
                        
                        <div className={`mb-8 text-${item.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            {item.icon}
                        </div>

                       <span className="font-display font-black text-ocobo-dark/30 text-micro uppercase tracking-[0.5em] mb-4">
                           Organiser =
                       </span>
                        
                        <h3 className={`font-display text-4xl font-black text-ocobo-dark group-hover:text-${item.color} mb-3 tracking-tighter transition-colors`}>
                            {item.title}
                        </h3>
                        
                         <p className="text-gray-400 font-bold text-micro uppercase tracking-[0.2em]">
                           {item.desc}
                         </p>

                        <div className="absolute bottom-6 opacity-0 group-hover:opacity-20 transition-opacity">
                            <Plus size={20} className="text-ocobo-dark" />
                        </div>
                    </div>
                ))}
            </div>
         </div>

         <div className="text-center mt-32 max-w-4xl mx-auto px-4">
             <div className="inline-block px-5 py-2 bg-ocobo-mint-light text-ocobo-mint font-display font-black uppercase tracking-[0.3em] text-micro mb-8 rounded-full border border-ocobo-mint/20">
                Notre Mission
             </div>
             <h3 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">Démocratiser la science du revenu.</h3>
             <p className="text-xl text-gray-500 font-medium MI-6 leading-relaxed">
                Pour que chaque organisation puisse faire l’expérience d’une croissance saine et maîtrisée.
             </p>
         </div>
      </section>

      {/* BLOC 5 - CE QUI CHANGE AVEC OCOBO */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2">
                      <h2 className="font-display text-4xl font-bold text-ocobo-dark mb-6">
                          On ne scale pas avec des outils. On scale avec un système.
                      </h2>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          La plupart des organisations grandissent en empilant les outils. Nous préférons construire des fondations solides et un système qui tient la charge.
                      </p>
                      <ul className="space-y-6">
                          <li className="flex gap-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm shrink-0 font-bold border border-gray-100">1</div>
                              <div>
                                  <h4 className="font-bold text-lg">Clarté radicale</h4>
                                  <p className="text-sm text-gray-600">Une vérité partagée entre équipes. Des décisions éclairées. La fin du pilotage à l’intuition.</p>
                              </div>
                          </li>
                          <li className="flex gap-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm shrink-0 font-bold border border-gray-100">2</div>
                              <div>
                                  <h4 className="font-bold text-lg">Simplicité opérationnelle</h4>
                                  <p className="text-sm text-gray-600">Moins de friction, moins de complexité, moins d’outils. Des équipes concentrées sur le closing.</p>
                              </div>
                          </li>
                          <li className="flex gap-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-sm shrink-0 font-bold border border-gray-100">3</div>
                              <div>
                                  <h4 className="font-bold text-lg">Performance mesurable</h4>
                                  <p className="text-sm text-gray-600">Des conversions qui augmentent. Des cycles qui raccourcissent. Un revenu enfin prévisible.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="md:w-1/2 bg-white p-10 shadow-lg border border-gray-100 rounded-none relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>
                      <h3 className="font-display text-2xl font-bold mb-8 text-center">Ce n’est pas un hasard.<br/>C’est une méthode.</h3>
                      <div className="space-y-4">
                          <div className="p-4 bg-ocobo-yellow-light border-l-4 border-ocobo-yellow">
                              <span className="font-bold text-ocobo-dark">Alignment</span>
                              <p className="text-xs text-gray-600">Aligner les équipes qui font le revenu.</p>
                          </div>
                          <div className="p-4 bg-ocobo-sky-light border-l-4 border-ocobo-sky">
                              <span className="font-bold text-ocobo-dark">Technology</span>
                              <p className="text-xs text-gray-600">Une stack claire, connectée, utile.</p>
                          </div>
                          <div className="p-4 bg-ocobo-mint-light border-l-4 border-ocobo-mint">
                              <span className="font-bold text-ocobo-dark">Performance</span>
                              <p className="text-xs text-gray-600">Indicateurs fiables, pilotage, cockpit.</p>
                          </div>
                          <div className="p-4 bg-ocobo-coral-light border-l-4 border-ocobo-coral">
                              <span className="font-bold text-ocobo-dark">Enablement</span>
                              <p className="text-xs text-gray-600">Equipes formées et autonomes.</p>
                          </div>
                      </div>
                      <div className="mt-8 text-center">
                          <p className="font-display font-bold text-sm uppercase tracking-wider mb-4">The Revenue Experience System™</p>
                          <Link to="/method">
                              <Button className="w-full">Découvrir notre méthode</Button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* BLOC 7 - CE QUE NOUS FAISONS (NOS INTERVENTIONS) */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-4xl font-bold text-ocobo-dark mb-4 text-center">Nos interventions</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">Nous vous aidons à construire les fondations RevOps dont dépend votre croissance.</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
                      <div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">1</div>
                      <h3 className="font-display text-xl font-bold mb-4">Immersion, diagnostic et plan d’action RevOps</h3>
                      <p className="text-gray-600 text-sm">Pour voir clair et savoir quoi faire. Dans cet ordre là.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
                      <div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">2</div>
                      <h3 className="font-display text-xl font-bold mb-4">Déploiement RevOps (Agile)</h3>
                      <p className="text-gray-600 text-sm">Pour (re)construire et opérer votre machine revenue en sprints de 2 semaines.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-8 hover:border-ocobo-dark transition-colors group">
                      <div className="w-12 h-12 bg-ocobo-dark text-white flex items-center justify-center mb-6">3</div>
                      <h3 className="font-display text-xl font-bold mb-4">Formation & Coaching</h3>
                      <p className="text-gray-600 text-sm">Pour rendre vos équipes autonomes et pérennes.</p>
                  </div>
              </div>

              <div className="flex justify-center mt-12">
                   <Link to="/offer">
                    <Button variant="outline">Voir nos offres</Button>
                   </Link>
              </div>
          </div>
      </section>

      {/* BLOC 7 - COMPARATIF */}
      <section className="py-24 bg-ocobo-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold mb-4">Pourquoi Ocobo n’est pas un intégrateur.<br/>Ni un cabinet. Ni un freelance CRM.</h2>
                  <p className="text-gray-400">Notre savoir-faire : transformer une machine commerciale grippée en mécanique de précision.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white text-ocobo-dark p-10 relative">
                      <div className="absolute top-0 left-0 bg-ocobo-yellow text-ocobo-dark px-4 py-1 font-bold text-xs uppercase tracking-widest">Ocobo</div>
                      <h3 className="font-display text-2xl font-bold mb-8 mt-4">La Revenue Experience</h3>
                      <ul className="space-y-4">
                          {[
                              "Commence par la stratégie, pas par l’outil",
                              "Conçoit l’architecture complète de votre croissance",
                              "Travaille en immersion, en sprints courts",
                              "Opère comme une direction revenue, pas comme un prestataire",
                              "Mesure l’impact, pas les livrables"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                  <Check className="text-ocobo-mint shrink-0 mt-1" size={18} />
                                  <span className="font-medium">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-10 text-gray-300">
                      <h3 className="font-display text-2xl font-bold mb-8 mt-4 text-white">Les autres acteurs</h3>
                      <ul className="space-y-4">
                          {[
                              "Pensent “outil” avant “système”",
                              "Empilent les automatisations",
                              "Reproduisent les silos (Sales Ops, Marketing Ops…)",
                              "Livrent des dashboards illisibles",
                              "Confondent complexité et performance"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                  <X className="text-red-400 shrink-0 mt-1" size={18} />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              <div className="flex justify-center mt-16">
                  <Link to="/studio">
                      <Button variant="white" className="px-10 py-4 font-bold border-none shadow-lg hover:shadow-2xl">
                          Découvrez le RevOps Studio
                      </Button>
                  </Link>
              </div>
          </div>
      </section>

      {/* BLOC 8 - RÉASSURANCE / STACK */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="font-display text-4xl font-bold mb-6">La bonne technologie. Au bon moment. Pour les bonnes raisons.</h2>
              <p className="text-gray-500 mb-16 max-w-3xl mx-auto text-lg font-medium">
                  Nous ne sommes pas là pour empiler les outils, but pour construire un écosystème cohérent. Nous certifions et implémentons les solutions leaders du marché.
              </p>
              
              <ModularStackGrid />

              <div className="mt-8 flex flex-col items-center">
                  <Link to="/technology">
                      <Button variant="outline" className="px-10 py-4 font-bold border-2">Nos solutions partenaires</Button>
                  </Link>
                  <p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                      Notre rôle : démanteler les usines à gaz et rendre votre stack utile.
                  </p>
              </div>
          </div>
      </section>

      {/* BLOC 9 - CTA FINAL */}
      <section className="bg-ocobo-yellow py-24 text-ocobo-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-display text-5xl font-bold text-ocobo-dark mb-6 tracking-tighter">Rencontrer un architecte RevOps</h2>
              <p className="text-xl text-ocobo-dark mb-10 font-medium">
                  En 30 minutes, nous évaluons la maturité de votre machine revenue.<br/>
                  Vous repartez avec plus de clarté.
              </p>
              <div className="flex justify-center">
                  <Link to="/contact">
                      <Button variant="primary" className="px-12 py-5 text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">Prendre RDV</Button>
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;
