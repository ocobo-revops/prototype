import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Filter, Plus, Zap, BarChart3, TrendingUp, Clock, Target, CheckCircle2, Smile } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../components/button-legacy';

const StoriesIllustration = () => {
  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center overflow-visible">
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-radar-sweep {
          transform-origin: 300px 300px;
          animation: radar-sweep 10s linear infinite;
        }
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
      `}</style>

      {/* BACKGROUND ARCHITECTURAL GRID */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#212323 1px, transparent 1px), linear-gradient(rgba(33,35,35,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(33,35,35,0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px, 80px 80px, 80px 80px' 
           }}>
      </div>

      <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#212323" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#212323" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* RADIAL RADAR CIRCLES - DARKENED GRADIENT OF OPACITY */}
        <g stroke="#212323" strokeWidth="0.5">
          <circle cx="300" cy="300" r="60" opacity="0.3" />
          <circle cx="300" cy="300" r="120" opacity="0.2" />
          <circle cx="300" cy="300" r="180" opacity="0.12" />
          <circle cx="300" cy="300" r="240" opacity="0.08" />
          <circle cx="300" cy="300" r="300" opacity="0.04" />
        </g>

        {/* RADAR SWEEP ANIMATION - DARKENED */}
        <g className="animate-radar-sweep">
          <path d="M300,300 L300,0 A300,300 0 0,1 512,87 Z" fill="url(#radarGradient)" opacity="0.15" />
          <line x1="300" y1="300" x2="300" y2="0" stroke="#212323" strokeWidth="0.5" opacity="0.25" />
        </g>

        {/* CENTRAL HUB - OCOBO CORE */}
        <g transform="translate(300, 300)">
            {/* Animated Ring */}
            <circle r="60" fill="none" stroke="#9ADBBA" strokeWidth="1" className="animate-pulse" opacity="0.25" />
            
            {/* Core Box */}
            <rect x="-45" y="-45" width="90" height="90" rx="20" fill="#212323" className="shadow-2xl" />
            <Star x="-20" y="-20" size={40} fill="#9ADBBA" className="text-semantic-success" />
            
            {/* Decorative dots around core */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <circle 
                    key={i} 
                    cx={Math.cos(angle * Math.PI / 180) * 55} 
                    cy={Math.sin(angle * Math.PI / 180) * 55} 
                    r="2.5" 
                    fill="#F1CF25" 
                />
            ))}
        </g>

        {/* SATELLITE 1: ROI CARD (Coral) */}
        <foreignObject x="420" y="80" width="160" height="100" className="animate-float-gentle">
            <div className="bg-white border-2 border-ocobo-dark p-4 rounded-md shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-semantic-accent" />
                    <span className="text-micro font-black uppercase tracking-widest text-semantic-text opacity-40">Impact</span>
                </div>
                <div className="text-2xl font-display font-black text-semantic-text leading-none">+50%</div>
                <div className="text-micro font-bold text-gray-400 mt-1 uppercase">Efficacité GTM</div>
            </div>
        </foreignObject>

        {/* SATELLITE 2: AUTOMATION CARD (Sky) */}
        <foreignObject x="40" y="320" width="160" height="100" className="animate-float-gentle" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white border-2 border-ocobo-dark p-4 rounded-md shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-semantic-info" />
                    <span className="text-micro font-black uppercase tracking-widest text-semantic-text opacity-40">Process</span>
                </div>
                <div className="text-2xl font-display font-black text-semantic-text leading-none">100%</div>
                <div className="text-micro font-bold text-gray-400 mt-1 uppercase">Automatisé</div>
            </div>
        </foreignObject>

        {/* SATELLITE 3: DATA CARD (Yellow) */}
        <foreignObject x="350" y="440" width="160" height="100" className="animate-float-gentle" style={{ animationDelay: '2.5s' }}>
            <div className="bg-white border-2 border-ocobo-dark p-4 rounded-md shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={14} className="text-semantic-primary" />
                    <span className="text-micro font-black uppercase tracking-widest text-semantic-text opacity-40">Data</span>
                </div>
                <div className="text-2xl font-display font-black text-semantic-text leading-none">Clean</div>
                <div className="text-micro font-bold text-gray-400 mt-1 uppercase">Donnée fiable</div>
            </div>
        </foreignObject>

        {/* SATELLITE 4: USER EXPERIENCE (Mint) */}
        <foreignObject x="50" y="60" width="160" height="100" className="animate-float-gentle" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white border-2 border-ocobo-dark p-4 rounded-md shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                    <Smile size={14} className="text-semantic-success" />
                    <span className="text-micro font-black uppercase tracking-widest text-semantic-text opacity-40">User Experience</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-display font-black text-semantic-text leading-none">Fluidité</div>
                    <svg width="24" height="24" viewBox="0 0 84 84" fill="none" className="text-semantic-success">
                        <circle cx="42" cy="42" r="38" stroke="currentColor" strokeWidth="6" />
                        <ellipse cx="32" cy="36" rx="4.5" ry="8" fill="currentColor" />
                        <ellipse cx="52" cy="36" rx="4.5" ry="8" fill="currentColor" />
                        <path d="M26 55 C34 65, 50 65, 58 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="text-micro font-bold text-gray-400 mt-1 uppercase">Adoption & Engagement</div>
            </div>
        </foreignObject>

        {/* DECORATIVE ELEMENTS */}
        <g opacity="0.3">
            <circle cx="100" cy="100" r="4" fill="#9ADBBA" className="animate-pulse" />
            <circle cx="500" cy="500" r="4" fill="#FE9C87" className="animate-pulse" style={{animationDelay: '1.5s'}} />
            <path d="M50,50 l10,0 m-5,-5 l0,10" stroke="#212323" strokeWidth="2" />
            <path d="M550,50 l10,0 m-5,-5 l0,10" stroke="#212323" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

const ClientMarquee = () => {
    const clients = [
        "YOUSIGN", "QONTO", "TOMORRO", "QARE", "COMBO", "STEEPLE", "CYBELANGEL", "CITRON", "CHR GROUPE", "VIBE", "JUS MUNDI", "VIZZIA", "RESILIENCE", "QOBRA"
    ];
    
    const extendedClients = [...clients, ...clients, ...clients];

    return (
        <div className="relative w-full overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-ocobo-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-ocobo-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee-ultra-slow whitespace-nowrap">
                {extendedClients.map((client, idx) => (
                    <div key={idx} className="flex items-center justify-center px-10 md:px-14">
                        <span className="font-display font-black text-white/30 text-base md:text-xl tracking-[0.25em] uppercase hover:text-semantic-primary transition-colors cursor-default select-none">
                            {client}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Stories: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tout');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const categories = ['Tout', 'Série A/B', 'Scale-up', 'Enterprise'];
  
  const cases = [
    {
      id: "yousign",
      company: "Yousign",
      name: "Antoine S.",
      role: "Head of RevOps",
      segment: "Scale-up",
      headline: "Scaling GTM Architecture & Global Strategy",
      roi: "Efficacité GTM +50%",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-yellow",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg"
      ]
    },
    {
      id: "qonto",
      company: "Qonto",
      name: "Léa S.",
      role: "RevOps Lead",
      segment: "Enterprise",
      headline: "Scaling Flux de Données & BI Revenue",
      roi: "Reporting 100% Automatisé",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-mint",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg",
        "https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg"
      ]
    },
    {
      id: "tomorro",
      company: "Tomorro",
      name: "Jean de Tomorro",
      role: "CEO & Co-founder",
      segment: "Scale-up",
      headline: "Architecture CRM & Sales Automation",
      roi: "+30% Velocité de deal",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-yellow",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://dust.tt/static/logo_icon.png",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg"
      ]
    },
    {
      id: "combo",
      company: "Combo",
      name: "Marie Piquemil",
      role: "VP Operations",
      segment: "Scale-up",
      headline: "Optimisation Planhat & Productivité CS",
      roi: "+25% Temps gagné CS",
      image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg",
      logo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-combo-white.svg",
      color: "ocobo-mint",
      tools: [
        "https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg",
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
      ]
    },
    {
      id: "qare",
      company: "Qare",
      name: "Thibault de Qare",
      role: "Head of Sales Ops",
      segment: "Scale-up",
      headline: "HubSpot Core Model & Data Quality",
      roi: "Données 100% fiables",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-sky",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg"
      ]
    },
    {
      id: "cybelangel",
      company: "CybelAngel",
      name: "Thomas R.",
      role: "RevOps Director",
      segment: "Enterprise",
      headline: "Sales Operations Excellence & Forecasting",
      roi: "Forecast Accuracy +20%",
      image: "https://images.unsplash.com/photo-1454165833767-131438967b21?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-coral",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
        "https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg"
      ]
    },
    {
      id: "citron",
      company: "Citron",
      name: "Maxime L.",
      role: "Operations Manager",
      segment: "Série A/B",
      headline: "Architecture Data & Automatisation Flux",
      roi: "Zéro Saisie Manuelle",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-yellow",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg",
        "https://dust.tt/static/logo_icon.png"
      ]
    },
    {
      id: "chr-groupe",
      company: "CHR Groupe",
      name: "Laurent B.",
      role: "COO",
      segment: "Enterprise",
      headline: "Migration & Unification CRM Multi-Entités",
      roi: "Centralisation 100%",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-sky",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg"
      ]
    },
    {
      id: "vibe",
      company: "Vibe",
      name: "Arnaud M.",
      role: "Co-founder",
      segment: "Série A/B",
      headline: "HubSpot Custom Objects & Visibilité Pipeline",
      roi: "Visibilité Pipeline x2",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-mint",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg",
        "https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg"
      ]
    },
    {
      id: "steeple",
      company: "Steeple",
      name: "Jean-Baptiste de Steeple",
      role: "CEO",
      segment: "Série A/B",
      headline: "Structuration Sales Ops & Pipeline",
      roi: "+40% Conv. Lead-to-SQL",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
      color: "ocobo-coral",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg",
        "https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg"
      ]
    },
    {
      id: "jusmundi",
      company: "Jus Mundi",
      name: "Luciana Collinet",
      role: "VP Revenue & Care",
      segment: "Scale-up",
      headline: "Data-driven Growth Série B",
      roi: "Architecture Hubspot & CS",
      image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Luciana%20Collinet.jpg",
      logo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-jusmundi-white.svg",
      color: "ocobo-sky",
      tools: [
        "https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg",
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
      ]
    },
    {
      id: "vizzia",
      company: "Vizzia",
      name: "Louis Vannereau",
      role: "COO",
      segment: "Série A/B",
      headline: "Fondations RevOps post-Série A",
      roi: "Pipeline x3 en 6 mois",
      image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Louis%20Vannereau.jpg",
      logo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-vizzia-white.svg",
      color: "ocobo-yellow",
      tools: [
        "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg",
        "https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg"
      ]
    },
    {
        id: "resilience",
        company: "Resilience",
        name: "Céline L.",
        role: "Head of Sales Ops",
        segment: "Série A/B",
        headline: "Architecture CRM Santé (Compliance)",
        roi: "-15% Cycle de Vente",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
        logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        color: "ocobo-coral",
        tools: [
          "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
          "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
          "https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg"
        ]
    },
    {
        id: "qobra",
        company: "Qobra",
        name: "Marine B.",
        role: "Ops Manager",
        segment: "Série A/B",
        headline: "Automatisation du Commissionnement",
        roi: "Gain de temps Ops x5",
        image: "https://images.unsplash.com/photo-1454165833767-131438967b21?auto=format&fit=crop&w=600&q=80",
        logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
        color: "ocobo-mint",
        tools: [
          "https://qobra.co/favicon.ico",
          "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
          "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg"
        ]
    }
  ];

  const filteredCases = activeFilter === 'Tout' ? cases : cases.filter(c => c.segment === activeFilter);

  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          <div className="lg:w-1/2">
            <span className="font-display font-black text-semantic-text bg-ocobo-yellow-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-yellow/20">
                SUCCESS STORIES
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-semantic-text mb-10 leading-[0.95] tracking-tight">
              Ils ont choisi<br/>l’architecture.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-md">
              Découvrez comment nous accompagnons les plus belles scale-ups européennes dans leur quête d’excellence opérationnelle.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center relative">
            <StoriesIllustration />
          </div>
        </div>
      </section>

      {/* Black Marquee Banner */}
      <section className="bg-semantic-text overflow-hidden border-y border-white/5">
        <ClientMarquee />
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
         <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-gray-100 py-8 gap-6">
             <div className="flex items-center gap-3">
                <Filter size={14} className="text-gray-400" />
                <span className="text-micro font-black uppercase tracking-[0.4em] text-gray-400">Filtrer par segment</span>
             </div>
             <div className="flex flex-wrap justify-center gap-3">
                 {categories.map((cat) => (
                     <button 
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-8 py-2.5 rounded-full text-micro font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                            activeFilter === cat 
                            ? 'bg-semantic-text text-white shadow-xl scale-105' 
                            : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-semantic-text'
                        }`}
                     >
                        {cat}
                     </button>
                 ))}
             </div>
         </div>
      </section>

      {/* Bento Grid Stories */}
      <section className="max-w-7xl mx-auto px-4 pb-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item, idx) => (
                <Link 
                    key={item.id} 
                    to={`/stories/${item.id}`} 
                    className={`group relative flex flex-col bg-white border border-gray-100 rounded-md p-6 transition-all duration-500 hover:shadow-hero hover:-translate-y-2 overflow-hidden h-full ${animate ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-ocobo-${item.color.split('-')[1]} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity`}></div>

                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-gray-50 mb-8">
                        <img 
                            src={item.image} 
                            alt={item.company}
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute bottom-4 right-4 bg-semantic-text p-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            <img src={item.logo} alt={item.company} className="h-4 w-auto object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-micro font-black uppercase tracking-[0.2em] text-gray-400">{item.segment}</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        <span className="text-micro font-black uppercase tracking-[0.2em] text-semantic-text">{item.company}</span>
                    </div>

                        <h3 className="font-display text-2xl font-bold text-semantic-text leading-tight mb-2 tracking-tight group-hover:text-black transition-colors">
                            {item.headline}
                        </h3>

                    <div className="mb-6">
                        <span className="text-micro font-black uppercase tracking-widest text-semantic-text opacity-60 block">{item.name}</span>
                        <span className="text-micro font-medium text-gray-400">{item.role}</span>
                    </div>

                        <div className="mt-auto space-y-4">
                            {/* ROI Section */}
                        <div className="bg-gray-50 group-hover:bg-white border border-gray-100 p-5 rounded-md transition-all">
                            <span className="text-micro font-black uppercase tracking-[0.3em] text-gray-400 block mb-1">Impact mesuré</span>
                            <div className="font-display text-xl font-black text-semantic-text flex items-center gap-3">
                                {item.roi}
                                <ArrowRight size={18} className="text-gray-300 group-hover:text-semantic-text group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>

                        {/* Tools Section */}
                        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-micro font-black uppercase tracking-[0.3em] text-gray-400">Stack Opérée</span>
                            <div className="flex items-center gap-3 grayscale opacity-40 group-hover:opacity-100 transition-all">
                                {item.tools.map((tool, tIdx) => (
                                    <img key={tIdx} src={tool} className="h-3.5 w-auto object-contain" alt="tool" />
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-semantic-primary py-32 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10">
              <Plus size={120} strokeWidth={1} />
          </div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10">
              <Plus size={120} strokeWidth={1} />
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="font-display text-5xl md:text-7xl font-black text-semantic-text mb-10 leading-[0.9] tracking-tighter">
                Prêt à devenir la prochaine<br/>success story ?
              </h2>
              <div className="flex justify-center">
                  <Link to="/contact">
                      <Button variant="primary" className="px-14 py-6 text-lg shadow-hero bg-semantic-text text-white border-none hover:bg-black">
                          Discutons de votre architecture
                      </Button>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Stories;