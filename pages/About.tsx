import React from 'react';
import { Linkedin, Quote, ArrowRight, Check, MousePointer2, Plus } from 'lucide-react';
import Button from '../components/button-legacy';
import { Link } from 'react-router';

const DataIllustration = () => {
  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes float-cursor {
          0%, 100% { transform: translate(430px, 430px) rotate(-10deg); }
          50% { transform: translate(440px, 420px) rotate(-5deg); }
        }
        @keyframes slow-fade {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.85; }
        }
        .animate-float-cursor { animation: float-cursor 5s infinite ease-in-out; }
        .animate-slow-fade { animation: slow-fade 6s infinite ease-in-out; }
        .bar-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>
      <div className="relative w-full max-w-3xl h-[280px] md:h-[420px] mx-auto p-4 flex flex-col items-center">
        {/* Illustration Container */}
        <div className="relative w-full h-full bg-[#FCFAF5] rounded-lg p-6 md:p-8 shadow-hero border border-gray-100 group/svg overflow-hidden">
          <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Background Bars (Grey/Black) - Following the image structure */}
            <g className="bars">
              {[
                { x: 40, h: 140 }, { x: 70, h: 180 }, { x: 100, h: 160 }, { x: 130, h: 220 },
                { x: 160, h: 200 }, { x: 190, h: 240 }, { x: 220, h: 190 }, { x: 250, h: 280 },
                { x: 280, h: 320 }, { x: 310, h: 300 }, { x: 340, h: 350 }, { x: 370, h: 330 },
                { x: 400, h: 380 }, { x: 430, h: 360 }, { x: 460, h: 400 }, { x: 490, h: 340 },
                { x: 520, h: 320 }, { x: 550, h: 280 }, { x: 580, h: 300 }, { x: 610, h: 260 },
                { x: 640, h: 320 }, { x: 670, h: 340 }, { x: 700, h: 300 }, { x: 730, h: 360 }
              ].map((bar, i) => {
                return (
                  <g key={i}>
                    {/* Bottom part of bar (filled) */}
                    <rect 
                      x={bar.x} 
                      y={450 - bar.h} 
                      width="14" 
                      height={bar.h} 
                      fill="#212323" 
                      className="bar-transition"
                    />
                    {/* Inner detail (white segment) */}
                    <rect 
                      x={bar.x + 1} 
                      y={450 - (bar.h * 0.7)} 
                      width="12" 
                      height={bar.h * 0.3} 
                      fill="white" 
                    />
                    {/* Top segment border */}
                    <rect 
                      x={bar.x} 
                      y={450 - bar.h} 
                      width="14" 
                      height={bar.h} 
                      fill="none" 
                      stroke="#212323" 
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </g>

            {/* Selection Highlight (Yellow Zone) with Slow Appearing/Disappearing Animation */}
            <g>
                <rect 
                  x="270" y="60" 
                  width="205" height="400" 
                  fill="#F1CF25" 
                  className="animate-slow-fade"
                />
                <rect 
                  x="270" y="60" 
                  width="205" height="400" 
                  fill="none"
                  stroke="#212323" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
            </g>

            {/* Sparkles / Crosses (Static as requested) */}
            <path d="M110,410 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z" fill="#212323" />
            <path d="M180,120 l3,6 l6,3 l-6,3 l-3,6 l-3,-6 l-6,-3 l6,-3 Z" fill="#212323" />
            <path d="M520,30 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z" fill="#212323" />
            <path d="M750,150 l3,6 l6,3 l-6,3 l-3,6 l-3,-6 l-6,-3 l6,-3 Z" fill="#212323" />
            <path d="M620,400 l4,8 l8,4 l-8,4 l-4,8 l-4,-8 l-8,-4 l8,-4 Z" fill="#212323" />

            {/* Logo Spinner Icon (Bottom Right of yellow zone) */}
            <g transform="translate(485, 460)" className="animate-float-cursor">
                 <circle cx="0" cy="0" r="18" fill="white" stroke="#212323" strokeWidth="1.5" />
                 <path d="M-8,-8 C-4,-12 4,-12 8,-8 M-8,8 C-4,12 4,12 8,8 M-12,0 C-12,-4 -12,4 -12,0 M12,0 C12,-4 12,4 12,0" stroke="#212323" strokeWidth="1.5" strokeLinecap="round" />
                 <path d="M-5,-5 L5,5 M-5,5 L5,-5" stroke="#212323" strokeWidth="1" />
            </g>

            {/* Mouse Cursor (Black Arrow) */}
            <path 
              transform="translate(470, 455) scale(1.2)" 
              d="M0,0 L25,40 L10,35 L0,55 Z" 
              fill="#212323" 
              className="animate-float-cursor"
            />
          </svg>
        </div>
        <div className="mt-10 text-center max-w-lg mx-auto">
             <h3 className="font-display text-xl md:text-2xl font-bold text-semantic-text mb-3 uppercase tracking-[0.2em]">Transformer le bruit en signal.</h3>
             <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed px-4">L'architecture n'est pas qu'une question de structure, c'est une question de vision. Savoir où regarder pour trouver la croissance.</p>
        </div>
      </div>
    </div>
  );
};

const IconSeparator = () => {
  return (
    <div className="flex justify-center items-center gap-10 md:gap-20 pt-16 pb-0 bg-white">
      {/* Left Star/Sparkle - Exactly like provided image */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-semantic-text">
        <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        {/* Horizontal & Vertical lines */}
        <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" />
        {/* Diagonal lines */}
        <line x1="9.8" y1="9.8" x2="38.2" y2="38.2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="38.2" y1="9.8" x2="9.8" y2="38.2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
      
      {/* Smiley Face - Exactly like provided image */}
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" className="text-semantic-text">
        <circle cx="42" cy="42" r="38" stroke="currentColor" strokeWidth="3" />
        {/* Eyes: Vertical Ovals */}
        <ellipse cx="32" cy="36" rx="4.5" ry="8" fill="currentColor" />
        <ellipse cx="52" cy="36" rx="4.5" ry="8" fill="currentColor" />
        {/* Smile Arc */}
        <path d="M26 55 C34 65, 50 65, 58 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Dimples/Terminal marks */}
        <line x1="24" y1="53" x2="27" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="53" x2="57" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Right Star/Sparkle - Exactly like provided image */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-semantic-text">
        <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" />
        <line x1="9.8" y1="9.8" x2="38.2" y2="38.2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="38.2" y1="9.8" x2="9.8" y2="38.2" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* BLOC 1 - HERO & MISSION */}
      <section className="pt-40 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-semantic-text mb-8 leading-[0.9] tracking-tight">
                Notre mission : <br/>démocratiser la <span className="text-semantic-primary">science du revenu.</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                Rendre accessible à toutes les organisations B2B une discipline réservée, jusqu’ici, aux scale-ups les plus avancées.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg">
                Parce qu’une croissance fiable n’est jamais un hasard : c’est le résultat d’une architecture solide, d’équipes alignées, et d’un système qui respire la simplicité.
            </p>
        </div>

        {/* ILLUSTRATION RÉHAUSSÉE AU HERO */}
        <DataIllustration />
      </section>

      {/* BLOC 2 - MANIFESTE (STYLE POÉTIQUE & IMPACTANT - VERSION NOIRE) */}
      <section className="py-32 bg-semantic-text text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-semantic-primary/10 rounded-full -translate-x-1/2 blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-40 h-40 bg-ocobo-sky/10 rounded-full translate-x-1/2 blur-3xl opacity-50"></div>

          <div className="max-w-4xl mx-auto px-6 text-left relative z-10">
              <div className="flex justify-center md:justify-start mb-24">
                <span className="font-display font-bold text-semantic-text bg-semantic-primary px-6 py-2 text-xs uppercase tracking-[0.3em] inline-block rounded-full shadow-lg">
                    Manifeste
                </span>
              </div>
              
              <div className="space-y-12 md:space-y-20 max-w-3xl">
                  {/* Stanza 1 */}
                  <div className="space-y-4">
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Nous ne sommes pas là pour configurer des outils.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Mais pour remettre, dans la croissance, de l’ordre et de la philosophie.</p>
                      <p className="text-xl md:text-3xl font-medium text-gray-400 leading-tight">Le marché a transformé le RevOps en un labyrinthe de jargon, d’automatisations décoratives et de stacks toujours plus lourdes et éclatées.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Tout le monde promet de la performance.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Très peu savent la penser et la structurer.</p>
                  </div>

                  {/* Stanza 2 - Strong statement */}
                  <div className="space-y-4 border-l-4 border-ocobo-yellow pl-8 py-2">
                      <p className="text-xl md:text-3xl font-bold text-white leading-tight">Chez Ocobo, nous refusons la confusion, le bruit, les mirages technologiques.</p>
                      <p className="text-xl md:text-3xl font-bold text-white leading-tight">Pour nous, le RevOps n’est pas un métier technique.</p>
                      <p className="text-xl md:text-3xl font-bold text-semantic-primary leading-tight italic">C’est une discipline stratégique : l’architecture de votre revenu.</p>
                  </div>

                  {/* Stanza 3 */}
                  <div className="space-y-4">
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Aligner les équipes, réparer les silos.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Simplifier les process jusqu’à l’usage et jusqu’à la moelle s’il le faut.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Rendre la donnée fiable, lisible et actionnable.</p>
                  </div>

                  {/* Stanza 4 */}
                  <div className="space-y-4">
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Nous existons pour appeler les choses par leur nom,</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">ramener de la clarté dans un monde de jargon</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">et offrir aux organisations un privilège rare :</p>
                      <p className="text-xl md:text-3xl font-bold text-semantic-primary leading-tight">l’expérience d’une croissance simple, saine et maîtrisée.</p>
                  </div>

                  {/* Stanza 5 - The Invitation */}
                  <div className="relative pt-20 pb-16 px-8 md:px-12 bg-white/5 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm">
                      {/* Top multi-color line */}
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>
                      
                      <p className="text-xl md:text-3xl font-bold text-white leading-tight mb-12">Ocobo est notre invitation</p>
                      
                      <div className="space-y-8">
                          <div className="flex items-start gap-5">
                              <div className="bg-semantic-primary rounded-full p-1 mt-1.5 shrink-0">
                                <ArrowRight size={16} className="text-semantic-text" />
                              </div>
                              <p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">à regarder votre machine revenue en face,</p>
                          </div>
                          <div className="flex items-start gap-5">
                              <div className="bg-semantic-primary rounded-full p-1 mt-1.5 shrink-0">
                                <ArrowRight size={16} className="text-semantic-text" />
                              </div>
                              <p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">à préférer la vérité opérationnelle aux illusions de performance,</p>
                          </div>
                          <div className="flex items-start gap-5">
                              <div className="bg-semantic-primary rounded-full p-1 mt-1.5 shrink-0">
                                <ArrowRight size={16} className="text-semantic-text" />
                              </div>
                              <p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">à faire primer la stratégie sur l’urgence,</p>
                          </div>
                          <div className="flex items-start gap-5">
                              <div className="bg-semantic-primary rounded-full p-1 mt-1.5 shrink-0">
                                <ArrowRight size={16} className="text-semantic-text" />
                              </div>
                              <p className="text-xl md:text-3xl font-medium text-gray-300 leading-tight">
                                à construire votre revenu non comme un empilement, <br className="hidden md:block" />
                                mais comme un système pensé, durable et vivant.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Stanza 6 */}
                  <div className="space-y-4 pt-10">
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Nous croyons que la croissance n’est jamais un accident.</p>
                      <p className="text-xl md:text-3xl font-medium text-white leading-tight">Mais le résultat d’une architecture juste, d’une mécanique revenue qui respire et d’une exigence d’alignement.</p>
                  </div>

                  {/* Conclusion Signature - White Logo */}
                  <div className="pt-24">
                      <div className="flex flex-col items-start text-left">
                          <img 
                              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg" 
                              alt="Ocobo Logo" 
                              className="h-16 md:h-20 w-auto mb-8 object-contain" 
                          />
                          <p className="font-display text-xl md:text-3xl text-semantic-primary uppercase tracking-[0.3em] font-bold leading-tight">La clarté au service du revenu.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ICON SEPARATOR ILLUSTRATION */}
      <IconSeparator />

      {/* BLOC 3 - EQUIPE FONDATRICE */}
      <section className="pt-12 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16 max-w-3xl mx-auto">
                 <h2 className="font-display text-4xl font-bold mb-6">L’équipe fondatrice</h2>
                 <p className="text-xl font-medium text-semantic-text mb-4">Une équipe 100% senior. Issue des meilleures scale-ups. Construite pour l’impact.</p>
                 <p className="text-gray-600">Nous ne sommes ni des juniors, ni des exécutants externes. Nous opérons comme une direction Revenue embarquée : exigeante, stratégique, opérationnelle.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {/* Benjamin */}
                 <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                     <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-ocobo-yellow">
                         <img src="https://placehold.co/200x200/F3F4F6/F3F4F6" alt="Benjamin Boileux" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="font-display text-2xl font-bold text-semantic-text mb-1">Benjamin Boileux</h3>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Architecte RevOps & Associé</p>
                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        12+ ans en Ops, CRM, Product et Revenue Operations (TheFork, Tripadvisor, Yousign). Spécialiste des systèmes et du pilotage opérationnel.
                     </p>
                     <a href="#" className="inline-block text-gray-400 hover:text-semantic-text"><Linkedin size={20} /></a>
                 </div>

                 {/* Aude */}
                 <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                     <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-ocobo-coral">
                         <img src="https://placehold.co/200x200/F3F4F6/F3F4F6" alt="Aude Cadiot" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="font-display text-2xl font-bold text-semantic-text mb-1">Aude Cadiot</h3>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Architecte RevOps & Associée</p>
                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Référence française du Revenue Operations (TheFork, Spendesk). Experte du customer journey, des organisations GTM, du scaling d’équipes RevOps.
                     </p>
                     <a href="#" className="inline-block text-gray-400 hover:text-semantic-text"><Linkedin size={20} /></a>
                 </div>

                 {/* Corentin */}
                 <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                     <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-ocobo-sky">
                         <img src="https://placehold.co/200x200/F3F4F6/F3F4F6" alt="Corentin Guérin" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="font-display text-2xl font-bold text-semantic-text mb-1">Corentin Guérin</h3>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Analyste & Stratège Revenue, Associé</p>
                     <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Finance, Deloitte, Business Ops (TheFork). Spécialiste du forecasting, de la performance, des rémunérations variables et du pricing.
                     </p>
                     <a href="#" className="inline-block text-gray-400 hover:text-semantic-text"><Linkedin size={20} /></a>
                 </div>
             </div>
             
             <div className="text-center mt-12 flex flex-col items-center gap-8">
                 <p className="font-bold text-xl">Trois parcours, une même conviction : <span className="bg-semantic-primary-light px-2">la croissance a besoin d’architectes, pas de techniciens.</span></p>
                 <Link to="/studio">
                     <Button variant="primary" className="px-8 py-4">Rencontrez le reste de l'équipe</Button>
                 </Link>
             </div>
          </div>
      </section>

      {/* BLOC 4 - VALEURS */}
      <section className="py-24 bg-semantic-text text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-4xl font-bold mb-16 text-center">Ce qui nous lie</h2>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                  <div>
                      <h3 className="text-semantic-primary font-display text-2xl font-bold mb-4">Clarté radicale</h3>
                      <p className="text-gray-300">Nommer les problèmes. Rendre simple ce qui était obscur.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ Dire la vérité sur le revenu</p>
                  </div>
                  <div>
                      <h3 className="text-semantic-success font-display text-2xl font-bold mb-4">Simplicité pragmatique</h3>
                      <p className="text-gray-300">Moins de complexité. Moins d’outils. Moins de bruit.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ Une mécanique de précision, pas une usine à gaz</p>
                  </div>
                  <div>
                      <h3 className="text-semantic-info font-display text-2xl font-bold mb-4">Exigence senior</h3>
                      <p className="text-gray-300">Des profils qui ont vécu les enjeux, les crises, les restructurations.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ Parler C-level, agir opérationnel</p>
                  </div>
                  <div>
                      <h3 className="text-semantic-accent font-display text-2xl font-bold mb-4">Architecture avant la maçonnerie</h3>
                      <p className="text-gray-300">Pas d’outil sans intention. Pas d’automatisation sans vision. Il ne suffit pas de connecter les tuyaux, encore faut-il que l'eau circule.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ La tech suit la stratégie, jamais l’inverse</p>
                  </div>
                   <div>
                      <h3 className="text-white font-display text-2xl font-bold mb-4">Expérience humaine</h3>
                      <p className="text-gray-300">Concevoir pour les équipes. Fluidifier leur quotidien.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ Si l’usage casse, tout trépasse</p>
                  </div>
                  <div>
                      <h3 className="text-white font-display text-2xl font-bold mb-4">Anti-bullshit technologique</h3>
                      <p className="text-gray-300">Pas de promesses miracles. Pas d’IA gadget.</p>
                      <p className="text-sm text-gray-500 mt-2 italic">→ La technologie est un levier, pas un totem</p>
                  </div>
              </div>
          </div>
      </section>

      {/* BLOC 6 - CTA FINAL */}
      <section className="bg-ocobo-sky-light py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="font-display text-4xl font-bold text-semantic-text mb-6">Parlons de votre machine revenue.</h2>
              <p className="text-xl text-gray-600 mb-4">30 minutes pour éclairer, diagnostiquer, orienter.</p>
              <p className="text-lg text-semantic-text font-medium mb-10">Zéro détour. Zéro jargon. Rien que la vérité sur votre croissance et vos options.</p>
              <Link to="/contact" className="inline-block">
                  <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">Rencontrer un architecte RevOps</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

export default About;