import React from 'react';
import { Layout, Sliders, LineChart, GraduationCap, ArrowDown, Target, Database, BarChart3, RefreshCw, Star, MousePointer2, Sparkles, Zap, Layers, ShieldCheck, Compass, Heart, CheckCircle2, ChevronDown, Plus } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router';

const AttioPillarsIllustration = () => {
  return (
    <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center overflow-visible">
      <style>{`
        @keyframes gentleReveal {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); transform-origin: center; }
          to { transform: rotate(360deg); transform-origin: center; }
        }
        .pillar-animate {
          opacity: 0;
          animation: gentleReveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

      {/* ATTIO-STYLE FINE DOTS BACKGROUND - RESTRAINED AREA */}
      <div className="absolute inset-4 opacity-[0.12]" 
           style={{ 
             backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      {/* CENTRAL ARCHITECTURAL GRID */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
          {/* MAIN CONNECTING LINES (Subtle) */}
          <g stroke="#212323" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1">
            <line x1="250" y1="50" x2="250" y2="450" />
            <line x1="50" y1="250" x2="450" y2="250" />
            <circle cx="250" cy="250" r="100" fill="none" />
            <circle cx="250" cy="250" r="180" fill="none" />
          </g>

          {/* PILLAR 1: ALIGNEMENT (Yellow) */}
          <g className="group/p1 cursor-default pillar-animate" style={{ animationDelay: '0.2s' }}>
            <rect x="70" y="70" width="160" height="160" fill="white" stroke="#212323" strokeWidth="1.5" className="transition-all duration-500 group-hover/p1:-translate-y-1 shadow-sm" />
            <rect x="70" y="70" width="160" height="4" fill="#F1CF25" />
            <g className="opacity-40 group-hover/p1:opacity-100 transition-opacity">
                <Layout x="135" y="130" size={32} className="text-ocobo-dark" />
            </g>
            <text x="150" y="210" textAnchor="middle" fill="#212323" fontSize="10" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Alignement</text>
            <circle cx="230" cy="230" r="3" fill="#F1CF25" className="animate-pulse" />
          </g>

          {/* PILLAR 2: TECHNOLOGIE (Sky) */}
          <g className="group/p2 cursor-default pillar-animate" style={{ animationDelay: '0.35s' }}>
            <rect x="270" y="70" width="160" height="160" fill="white" stroke="#212323" strokeWidth="1.5" className="transition-all duration-500 group-hover/p2:-translate-y-1 shadow-sm" />
            <rect x="270" y="70" width="160" height="4" fill="#99D1DF" />
            <g className="opacity-40 group-hover/p2:opacity-100 transition-opacity">
                <Sliders x="335" y="130" size={32} className="text-ocobo-dark" />
            </g>
            <text x="350" y="210" textAnchor="middle" fill="#212323" fontSize="10" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Technologie</text>
            <circle cx="270" cy="230" r="3" fill="#99D1DF" className="animate-pulse" />
          </g>

          {/* PILLAR 3: PERFORMANCE (Mint) */}
          <g className="group/p3 cursor-default pillar-animate" style={{ animationDelay: '0.5s' }}>
            <rect x="70" y="270" width="160" height="160" fill="white" stroke="#212323" strokeWidth="1.5" className="transition-all duration-500 group-hover/p3:translate-y-1 shadow-sm" />
            <rect x="70" y="270" width="160" height="4" fill="#9ADBBA" />
            <g className="opacity-40 group-hover/p3:opacity-100 transition-opacity">
                <LineChart x="135" y="330" size={32} className="text-ocobo-dark" />
            </g>
            <text x="150" y="410" textAnchor="middle" fill="#212323" fontSize="10" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Performance</text>
            <circle cx="230" cy="270" r="3" fill="#9ADBBA" className="animate-pulse" />
          </g>

          {/* PILLAR 4: ENABLEMENT (Coral) */}
          <g className="group/p4 cursor-default pillar-animate" style={{ animationDelay: '0.65s' }}>
            <rect x="270" y="270" width="160" height="160" fill="white" stroke="#212323" strokeWidth="1.5" className="transition-all duration-500 group-hover/p4:translate-y-1 shadow-sm" />
            <rect x="270" y="270" width="160" height="4" fill="#FE9C87" />
            <g className="opacity-40 group-hover/p4:opacity-100 transition-opacity">
                <GraduationCap x="335" y="330" size={32} className="text-ocobo-dark" />
            </g>
            <text x="350" y="410" textAnchor="middle" fill="#212323" fontSize="10" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Enablement</text>
            <circle cx="270" cy="270" r="3" fill="#FE9C87" className="animate-pulse" />
          </g>

          {/* CENTRAL CORE NODE */}
          <g className="pillar-animate" style={{ animationDelay: '0.9s' }}>
            <circle cx="250" cy="250" r="25" fill="#212323" />
            <path d="M242,250 L258,250 M250,242 L250,258" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="250" cy="250" r="35" fill="none" stroke="#212323" strokeWidth="0.5" strokeDasharray="2 4" className="animate-spin-slow" />
          </g>
        </svg>
      </div>
    </div>
  );
};

const UnifiedBowtie = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 overflow-visible group/bowtie">
        <div className="relative w-full aspect-[21/9] md:aspect-[28/9]">
            {/* GRID BACKGROUND FOR BOWTIE */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', 
                    backgroundSize: '20px 20px' 
                }}>
            </div>

            <svg viewBox="0 0 1200 350" className="w-full h-full overflow-visible" fill="none">
                <defs>
                    <linearGradient id="blueprintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#212323" stopOpacity="0.01" />
                        <stop offset="50%" stopColor="#212323" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#212323" stopOpacity="0.01" />
                    </linearGradient>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#212323" fillOpacity="0.2" />
                    </marker>
                </defs>

                {/* CYCLIC LOOPS (Subtle Overlays) */}
                <g stroke="#212323" strokeWidth="1" strokeOpacity="0.1" fill="none">
                    {/* Left Loop: Acquisition Cycle */}
                    <path d="M 350,110 C 300,50 150,50 100,110" strokeDasharray="3 3" />
                    <path d="M 100,240 C 150,300 300,300 350,240" strokeDasharray="3 3" markerEnd="url(#arrowhead)" />
                    <text x="225" y="45" textAnchor="middle" fill="#212323" fillOpacity="0.15" fontSize="7" fontWeight="900" className="font-display uppercase tracking-[0.3em]">Acquisition</text>

                    {/* Right Loop: Expansion Cycle */}
                    <path d="M 850,110 C 900,50 1050,50 1100,110" strokeDasharray="3 3" />
                    <path d="M 1100,240 C 1050,300 900,300 850,240" strokeDasharray="3 3" markerEnd="url(#arrowhead)" />
                    <text x="975" y="45" textAnchor="middle" fill="#212323" fillOpacity="0.15" fontSize="7" fontWeight="900" className="font-display uppercase tracking-[0.3em]">Expansion</text>
                </g>

                {/* ARCHITECTURAL OUTLINES */}
                <path d="M40,60 L540,140 L540,210 L40,290 Z" fill="white" stroke="#212323" strokeWidth="0.5" strokeOpacity="0.2" />
                <path d="M1160,60 L660,140 L660,210 L1160,290 Z" fill="white" stroke="#212323" strokeWidth="0.5" strokeOpacity="0.2" />
                
                {/* INNER FILLED PERSPECTIVE (Subtle) */}
                <path d="M40,60 L540,140 L540,210 L40,290 Z" fill="url(#blueprintGradient)" />
                <path d="M1160,60 L660,140 L660,210 L1160,290 Z" fill="url(#blueprintGradient)" />

                {/* STAGE DIVIDERS (Subtle Dashed) */}
                <g stroke="#212323" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.15">
                    <line x1="206" y1="40" x2="206" y2="310" />
                    <line x1="373" y1="40" x2="373" y2="310" />
                    <line x1="826" y1="40" x2="826" y2="310" />
                    <line x1="993" y1="40" x2="993" y2="310" />
                </g>

                {/* CENTRAL HUB (Nouveau Client) */}
                <g>
                    <rect x="540" y="125" width="120" height="100" fill="#212323" rx="4" className="shadow-lg" />
                    <text x="600" y="165" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Nouveau</text>
                    <text x="600" y="185" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="font-display uppercase tracking-[0.2em]">Client</text>
                    {/* Pulsing indicator */}
                    <circle cx="600" cy="125" r="3" fill="#9ADBBA" className="animate-pulse" />
                </g>

                {/* FLOW INDICATORS (MQL, SQL, SQO, ACTIF, UPSELL, CROSSELL) */}
                <g fill="#212323" fillOpacity="0.3" fontSize="8" fontWeight="900" className="font-display uppercase tracking-[0.2em]">
                    {/* Left Flow */}
                    <text x="40" y="240" textAnchor="start" dx="5">MQL</text>
                    <text x="206" y="220" textAnchor="middle">SQL</text>
                    <text x="373" y="200" textAnchor="middle">SQO</text>
                    
                    {/* Right Flow */}
                    <text x="826" y="200" textAnchor="middle">ACTIF</text>
                    <text x="993" y="220" textAnchor="middle">UPSELL</text>
                    <text x="1160" y="240" textAnchor="end" dx="-5">CROSSELL</text>
                </g>

                {/* MAIN LABELS */}
                <g className="font-display" fontSize="11" fontWeight="900" fill="#212323" letterSpacing="0.05em">
                    {/* Stage 1 */}
                    <text x="123" y="175" textAnchor="middle">GÉNÉRATION</text>
                    <text x="123" y="192" textAnchor="middle">DE DEMANDE</text>
                    
                    {/* Stage 2 */}
                    <text x="289" y="185" textAnchor="middle">QUALIFICATION</text>
                    
                    {/* Stage 3 */}
                    <text x="456" y="185" textAnchor="middle">NÉGOCIATION</text>
                    
                    {/* Stage 4 */}
                    <text x="743" y="185" textAnchor="middle">ONBOARDING</text>
                    
                    {/* Stage 5 */}
                    <text x="909" y="185" textAnchor="middle">ADOPTION</text>
                    
                    {/* Stage 6 */}
                    <text x="1076" y="185" textAnchor="middle">IMPACT</text>
                </g>

                {/* DECORATIVE PLUS SIGNS AT INTERSECTIONS */}
                <g stroke="#212323" strokeOpacity="0.2" strokeWidth="1">
                    <path d="M206,60 v-6 m-3,3 h6" />
                    <path d="M373,85 v-6 m-3,3 h6" />
                    <path d="M826,85 v-6 m-3,3 h6" />
                    <path d="M993,60 v-6 m-3,3 h6" />
                </g>
            </svg>
        </div>
    </div>
  );
}

const Method: React.FC = () => {
  return (
    <div className="w-full bg-white">
      
      {/* HERO METHODE - UNIFORMISÉ & CENTRÉ AVEC ANIMATION LIGHT ET ESPACES RÉDUITS */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center overflow-hidden">
          <div className="max-w-4xl mx-auto mb-8 relative z-10">
              <span className="font-display font-black text-ocobo-dark bg-ocobo-yellowLight px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-yellow/20">
                NOTRE MÉTHODE
              </span>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
                  4 piliers pour <br/>
                  une architecture <span className="text-ocobo-yellow italic">solide.</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                  <span className="font-bold">The Revenue Experience System™</span> est notre framework propriétaire conçu pour transformer le chaos opérationnel en une machine de revenu pilotable.
              </p>
          </div>

          <div className="flex justify-center mb-10 relative z-10 px-4">
              <AttioPillarsIllustration />
          </div>

          <div className="flex flex-col items-center gap-12 relative z-10">
              <div className="italic font-medium text-gray-400 text-sm leading-relaxed max-w-md">
                  "Une croissance saine n'est jamais le fruit du hasard, c'est le résultat d'un système pensé pour durer et pour favoriser l'usage."
              </div>
              
              <Link to="/contact">
                  <Button 
                    variant="primary" 
                    className="px-16 py-5 text-xs font-bold uppercase tracking-[0.25em] shadow-xl bg-ocobo-dark hover:bg-black transition-all hover:-translate-y-1"
                  >
                    Auditer mon système
                  </Button>
              </Link>
          </div>

          <div className="mt-16 flex justify-center w-full animate-bounce-slow">
              <ChevronDown className="text-gray-200" size={24} strokeWidth={1.5} />
          </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      {/* THE REVENUE EXPERIENCE SYSTEM™ */}
      <section className="bg-gray-50 py-32 border-y border-gray-100 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ 
                 backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-24 text-center">
                   <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight">The Revenue Experience System™</h2>
                   <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium">Nous n'intervenons jamais au hasard. Nous suivons un ordre logique pour garantir la stabilité de l'édifice.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                  {/* Card 1: Alignment */}
                  <div className="bg-white p-10 border-t-8 border-ocobo-yellow shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      <div className="flex justify-between items-start mb-10">
                          <div className="bg-ocobo-yellowLight p-4 rounded-full text-ocobo-yellow">
                              <Layout size={32} />
                          </div>
                          <span className="text-7xl font-display font-bold text-gray-100/60 leading-none select-none">01</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold mb-6">Alignement</h3>
                      <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                          Avant de toucher aux outils, nous alignons les hommes. Nous cassons les silos entre Marketing, Sales et CS pour créer une seule équipe Revenue avec des objectifs communs.
                      </p>
                      
                      <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                          <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">LIVRABLES CLÉS</span>
                          <div className="space-y-6">
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellowLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Cartographie du cycle de vie (Lifecycle Map)</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Visualisation précise du parcours client et des points de friction.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellowLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Protocoles de "Handover" & SLAs</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Règles strictes de passage de relais entre équipes (fini les zones grises).</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-yellow ring-4 ring-ocobo-yellowLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Dictionnaire de données (KPIS clés)</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Définitions partagées par toute l'entreprise pour garantir l'intégrité de la donnée.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                   {/* Card 2: Technologie */}
                  <div className="bg-white p-10 border-t-8 border-ocobo-sky shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      <div className="flex justify-between items-start mb-10">
                          <div className="bg-ocobo-skyLight p-4 rounded-full text-ocobo-sky">
                              <Sliders size={32} />
                          </div>
                          <span className="text-7xl font-display font-bold text-gray-100/60 leading-none select-none">02</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold mb-6">Technologie</h3>
                      <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                          Nous construisons une stack connectée et épurée. Pas d'usine à gaz. Juste les bons outils, connectés au bon moment, pour servir les process.
                      </p>
                      
                      <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                          <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">LIVRABLES CLÉS</span>
                          <div className="space-y-6">
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-skyLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Audit & assainissement de la Stack</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Nettoyage des dettes techniques et suppression des outils redondants.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-skyLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Architecture de données scalable (Core Model)</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Structure CRM prête pour le multi-segment et l'hyper-croissance.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-sky ring-4 ring-ocobo-skyLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Flux d'enrichissement & routage automatisé</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Mécanismes pour livrer la bonne info au bon commercial, au bon moment.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                   {/* Card 3: Performance */}
                  <div className="bg-white p-10 border-t-8 border-ocobo-mint shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      <div className="flex justify-between items-start mb-10">
                          <div className="bg-ocobo-mintLight p-4 rounded-full text-ocobo-mint">
                              <LineChart size={32} />
                          </div>
                          <span className="text-7xl font-display font-bold text-gray-100/60 leading-none select-none">03</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold mb-6">Performance</h3>
                      <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                          On ne pilote pas ce qu'on ne mesure pas. Nous alignons les indicateurs et les incitations (rémunération) sur vos objectifs stratégiques.
                      </p>
                      
                      <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                          <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">LIVRABLES CLÉS</span>
                          <div className="space-y-6">
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mintLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Dashboards COMEX & Investisseurs</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Vues macro pour le pilotage stratégique (CAC, LTV, Churn) et reporting financier.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mintLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Plans de commissionnement (Comp Plans)</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Modèles de variable qui orientent les comportements vers la valeur réelle.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-mint ring-4 ring-ocobo-mintLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Fiabilisation du Forecast</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Routines pour passer de la "devinette" à une prévision fiable (+/- 10%).</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                   {/* Card 4: Enablement */}
                  <div className="bg-white p-10 border-t-8 border-ocobo-coral shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                      <div className="flex justify-between items-start mb-10">
                          <div className="bg-ocobo-coralLight p-4 rounded-full text-ocobo-coral">
                              <GraduationCap size={32} />
                          </div>
                          <span className="text-7xl font-display font-bold text-gray-100/60 leading-none select-none">04</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold mb-6">Enablement</h3>
                      <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                          Le meilleur système ne vaut rien s'il n'est pas utilisé. Nous formons, coachons et documentons pour assurer l'adoption durable.
                      </p>
                      
                      <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
                          <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-ocobo-dark/40 block mb-6">LIVRABLES CLÉS</span>
                          <div className="space-y-6">
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coralLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Playbooks d'exécution</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Guides pratiques (Sales & Ops) pour standardiser les méthodes de travail.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coralLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Documentation technique pérenne</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Wiki complet pour ne plus dépendre de la connaissance individuelle.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4 items-start group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-ocobo-coral ring-4 ring-ocobo-coralLight shrink-0"></div>
                                  <div>
                                      <h4 className="text-sm font-bold text-ocobo-dark mb-1 leading-snug">Routines d'onboarding CRM</h4>
                                      <p className="text-xs text-gray-500 leading-relaxed">Parcours de formation pour rendre les nouveaux entrants opérationnels vite.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* NOTRE PERIMETRE D'ACTION (BOWTIE INTEGRATED) */}
      <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">Notre périmètre d'action</h2>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">Nous intervenons sur l'intégralité de la chaîne de valeur du revenu.</p>
              
              {/* THE RE-ENGINEERED BOWTIE */}
              <UnifiedBowtie />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-24">
                   {/* Card 1 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-yellow">
                       <div className="w-12 h-12 bg-ocobo-yellowLight text-ocobo-yellow rounded-lg flex items-center justify-center mb-6">
                          <Target size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Génération de Revenu</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Lead Gen & Scoring</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Pipeline Management</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Account Based Marketing</li>
                       </ul>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-sky">
                       <div className="w-12 h-12 bg-ocobo-skyLight text-ocobo-sky rounded-lg flex items-center justify-center mb-6">
                          <Database size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Architecture & Data</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>CRM Setup (HubSpot/SFDC)</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>Data Quality & Enrichment</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>Integrations & Stack</li>
                       </ul>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-mint">
                       <div className="w-12 h-12 bg-ocobo-mintLight text-ocobo-mint rounded-lg flex items-center justify-center mb-6">
                          <BarChart3 size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Pilotage & Performance</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>Forecasting & Reporting</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>Plan de Commissionnement</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-mint rounded-full shrink-0"></div>Territory Planning</li>
                       </ul>
                   </div>

                   {/* Card 4 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-coral">
                       <div className="w-12 h-12 bg-ocobo-coralLight text-ocobo-coral rounded-lg flex items-center justify-center mb-6">
                          <RefreshCw size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Customer Success & Expansion</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>Churn Management & Health Score</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>Upsell & Cross-sell Routines</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-coral rounded-full shrink-0"></div>Onboarding & CS Ops Strategy</li>
                       </ul>
                   </div>

                   {/* Card 5 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-yellow">
                       <div className="w-12 h-12 bg-ocobo-yellowLight text-ocobo-yellow rounded-lg flex items-center justify-center mb-6">
                          <GraduationCap size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Sales Enablement</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Playbooks & Sales Methodology</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Onboarding & Continuous Training</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-yellow rounded-full shrink-0"></div>Sales Content & Tool Adoption</li>
                       </ul>
                   </div>

                   {/* Card 6 */}
                   <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-xl hover:border-ocobo-sky">
                       <div className="w-12 h-12 bg-ocobo-skyLight text-ocobo-sky rounded-lg flex items-center justify-center mb-6">
                          <Layers size={24} />
                       </div>
                       <h3 className="font-display text-xl font-bold mb-4">Gouvernance & Stratégie</h3>
                       <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>Go-to-Market Strategy Review</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>Revenue Planning & Board Reporting</li>
                          <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ocobo-sky rounded-full shrink-0"></div>Revenue Management & Leadership</li>
                       </ul>
                   </div>
              </div>
          </div>
      </section>

      {/* CTA BRIDGE - UNIFIED AND NON-ITALIC */}
      <section className="bg-ocobo-yellow py-32 text-center text-ocobo-dark relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-8">Prêt à sortir du bricolage ?</h2>
              <p className="text-ocobo-dark/70 mb-12 text-xl font-bold leading-relaxed">
                  Notre méthode est le fruit de 10 ans d'expérience dans les scale-ups les plus performantes (TheFork, PayFit, Spendesk).
              </p>
              <div className="flex justify-center">
                  <Link to="/contact">
                      <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 border-none bg-ocobo-dark text-white">Bâtir mon architecture</Button>
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Method;