
import React from 'react';
import { CheckCircle2, Layout, BarChart3, GraduationCap, Cog, Search, Cpu, Plus, ChevronDown, Zap, Target, RefreshCw, Layers, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router';

const ArchitecturalGrid = () => {
    return (
        <div className="relative w-full max-w-[500px] animate-float-illustration">
            <div className="flex items-stretch gap-4 relative">
                
                {/* Axe Ordonnée : ALIGNEMENT */}
                <div className="flex flex-col items-center justify-center py-4 shrink-0">
                <div className="[writing-mode:vertical-lr] rotate-180 font-display font-bold text-ocobo-dark/40 text-micro uppercase tracking-[0.6em] mb-4">
                    Alignement
                </div>
                    <div className="w-px bg-ocobo-dark/20 flex-grow animate-blueprint-line origin-top" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Grid Container */}
                <div className="relative z-10 bg-white border-2 border-ocobo-dark p-8 shadow-lg flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="animate-box h-24 bg-ocobo-yellow-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group" style={{ animationDelay: '0.4s' }}>
                            <span className="font-display font-bold group-hover:text-ocobo-yellow transition-colors text-xs md:text-sm">MARKETING</span>
                        </div>
                        <div className="animate-box h-24 bg-ocobo-sky-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group" style={{ animationDelay: '0.5s' }}>
                            <span className="font-display font-bold group-hover:text-ocobo-sky transition-colors text-xs md:text-sm">SALES</span>
                        </div>
                        <div className="animate-box h-24 bg-ocobo-mint-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group" style={{ animationDelay: '0.6s' }}>
                            <span className="font-display font-bold group-hover:text-ocobo-mint transition-colors text-xs md:text-sm">CLIENT</span>
                        </div>
                        <div className="animate-box h-24 bg-ocobo-coral-light border border-ocobo-dark flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group" style={{ animationDelay: '0.7s' }}>
                            <span className="font-display font-bold group-hover:text-ocobo-coral transition-colors text-xs md:text-sm">FINANCE</span>
                        </div>
                    </div>

                    {/* Foundation Line (X-Axis) */}
                    <div className="h-2 bg-ocobo-dark w-full mb-4 animate-blueprint-line"></div>

                    {/* Axe Abscisse labels */}
                  <div className="flex justify-between text-micro md:text-micro font-bold uppercase tracking-widest text-ocobo-dark/60">
                      <span className="animate-box" style={{ animationDelay: '0.9s' }}>Technology</span>
                      <span className="animate-box" style={{ animationDelay: '1s' }}>Performance</span>
                      <span className="animate-box" style={{ animationDelay: '1.1s' }}>Enablement</span>
                  </div>
                </div>
            </div>
        </div>
    );
};

const PyramidSection = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto h-[620px]">
            <svg viewBox="0 0 1000 620" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Background decorative blobs - Colors synchronized with sections */}
                <circle cx="580" cy="180" r="50" fill="#FE9C87" fillOpacity="0.25" /> {/* 1. CEO -> Coral */}
                <circle cx="420" cy="250" r="45" fill="#F1CF25" fillOpacity="0.25" /> {/* 2. Managers -> Yellow */}
                <circle cx="630" cy="400" r="48" fill="#99D1DF" fillOpacity="0.25" /> {/* 3. Teams -> Blue */}
                <circle cx="370" cy="480" r="50" fill="#9ADBBA" fillOpacity="0.25" /> {/* 4. Clients -> Mint */}
                
                {/* Decorative Sparkles (crosses) - Adjusted positions */}
                <g transform="translate(450, 200) rotate(15)">
                    <path d="M-8 0 L8 0 M0 -8 L0 8" stroke="#212323" strokeWidth="2.5" />
                </g>
                <g transform="translate(680, 420)">
                    <path d="M-6 0 L6 0 M0 -6 L0 6" stroke="#212323" strokeWidth="2" />
                </g>
                <g transform="translate(340, 540) rotate(-15)">
                    <path d="M-5 0 L5 0 M0 -5 L0 5" stroke="#212323" strokeWidth="2" />
                </g>
                <g transform="translate(620, 310) rotate(45)">
                    <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="#212323" strokeWidth="1.5" />
                </g>

                {/* --- Pyramid Levels --- */}
                
                {/* Level 1: CEO (Triangle) */}
                <path d="M500 150 L460 220 L540 220 Z" fill="white" stroke="#212323" strokeWidth="2.5" />
                <path d="M540 220 L550 210 L510 140 L500 150" fill="#212323" />
                
                {/* Level 2: Managers */}
                <path d="M455 235 L545 235 L570 305 L430 305 Z" fill="white" stroke="#212323" strokeWidth="2.5" />
                <path d="M570 305 L580 295 L555 225 L545 235" fill="#212323" />

                {/* Level 3: Équipes terrain */}
                <path d="M425 320 L575 320 L605 390 L395 390 Z" fill="white" stroke="#212323" strokeWidth="2.5" />
                <path d="M605 390 L615 380 L585 310 L575 320" fill="#212323" />

                {/* --- Dashed Line moved up (between Teams and Clients) --- */}
                <path d="M380 397.5 L630 397.5" stroke="#212323" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

                {/* Level 4: Clients */}
                <path d="M385 405 L615 405 L650 490 L350 490 Z" fill="white" stroke="#212323" strokeWidth="2.5" />
                <path d="M650 490 L660 480 L625 395 L615 405" fill="#212323" />

                {/* --- Connectors & Text Boxes --- */}

                {/* Label 1 (CEO) - Top Right */}
                <path d="M525 180 C 560 180, 575 100, 605 100" stroke="#212323" strokeWidth="1.5" fill="none" />
                <circle cx="605" cy="100" r="3.5" fill="#212323" />
                <foreignObject x="625" y="40" width="350" height="200">
                    <div className="flex flex-col items-start text-left">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">1</div>
                            <h3 className="font-display font-bold text-2xl text-ocobo-dark">CEO</h3>
                        </div>
                        <ul className="text-sm text-gray-500 font-medium space-y-1">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-coral shrink-0 mt-1.5"></span>
                                Manque de visibilité sur le business
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-coral shrink-0 mt-1.5"></span>
                                Vision difficile à traduire en actions
                            </li>
                        </ul>
                    </div>
                </foreignObject>

                {/* Label 2 (Managers) - Mid Left */}
                <path d="M445 265 C 410 265, 410 210, 370 210" stroke="#212323" strokeWidth="1.5" fill="none" />
                <circle cx="370" cy="210" r="3.5" fill="#212323" />
                <foreignObject x="30" y="140" width="320" height="200">
                    <div className="flex flex-col items-end text-right pr-4">
                        <div className="flex items-center gap-4 mb-3">
                            <h3 className="font-display font-bold text-2xl text-ocobo-dark">Managers</h3>
                            <div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">2</div>
                        </div>
                        <ul className="text-sm text-gray-500 font-medium space-y-1">
                            <li className="flex items-start gap-2 justify-end">
                                Prévisions instables
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                Peu d’insights pour faire progresser les équipes
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                Ressources mal allouées
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-yellow shrink-0 mt-1.5"></span>
                            </li>
                        </ul>
                    </div>
                </foreignObject>

                {/* Label 3 (Équipes terrain) - Mid Right */}
                <path d="M590 355 C 640 355, 650 300, 695 300" stroke="#212323" strokeWidth="1.5" fill="none" />
                <circle cx="695" cy="300" r="3.5" fill="#212323" />
                <foreignObject x="715" y="235" width="280" height="200">
                    <div className="flex flex-col items-start text-left">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">3</div>
                            <h3 className="font-display font-bold text-2xl text-ocobo-dark">Équipes terrain</h3>
                        </div>
                        <ul className="text-sm text-gray-500 font-medium space-y-1">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
                                Trop d’outils, pas assez de clarté
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
                                Productivité en baisse
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-sky shrink-0 mt-1.5"></span>
                                Difficulté à comprendre la stratégie
                            </li>
                        </ul>
                    </div>
                </foreignObject>

                {/* Label 4 (Clients) - Bottom Left */}
                <path d="M370 445 C 330 445, 330 520, 280 520" stroke="#212323" strokeWidth="1.5" fill="none" />
                <circle cx="280" cy="520" r="3.5" fill="#212323" />
                <foreignObject x="10" y="450" width="250" height="200">
                    <div className="flex flex-col items-end text-right pr-4">
                        <div className="flex items-center gap-4 mb-3">
                            <h3 className="font-display text-2xl text-ocobo-dark">Clients</h3>
                            <div className="w-10 h-10 bg-white border-2 border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">4</div>
                        </div>
                        <ul className="text-sm text-gray-500 font-medium space-y-1">
                            <li className="flex items-start gap-2 justify-end">
                                Expérience inégale
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                Informations dispersées
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                Frictions dans le parcours
                                <span className="w-1.5 h-1.5 rounded-full bg-ocobo-mint shrink-0 mt-1.5"></span>
                            </li>
                        </ul>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
};

const Services: React.FC = () => {
  return (
    <div className="w-full">
      <style>{`
        @keyframes blueprint-in {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes box-pop {
          0% { opacity: 0; transform: translateY(20px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float-grid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-blueprint-line {
          transform-origin: left;
          animation: blueprint-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-box {
          opacity: 0;
          animation: box-pop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-float-illustration {
          animation: float-grid 6s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-entry {
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
      
      {/* BLOC 1 - HERO OFFRE */}
      <section className="pt-40 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <span className="font-display font-black text-ocobo-dark bg-ocobo-yellow-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-yellow/20">
                  NOTRE OFFRE
                </span>
                  <h1 className="font-display text-5xl md:text-7xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
                      Un système.<br/>
                      <span className="text-gray-400">Pas des rustines.</span>
                  </h1>
                  <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-xl">
                      Les entreprises qui passent à l’échelle ne misent pas sur l’empilement d’outils. Elles construisent un système de revenu clair, simple et pilotable.
                  </p>
                  <Link to="/contact">
                      <Button className="bg-ocobo-dark text-white px-12 py-5 text-lg shadow-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                        Prendre RDV
                      </Button>
                  </Link>
              </div>

              {/* Right Illustration */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end items-center relative">
                  <ArchitecturalGrid />
              </div>
          </div>

          {/* SOBER SCROLL INDICATOR - Dominante Corail */}
          <div className="flex justify-center w-full animate-bounce-subtle">
              <ChevronDown className="text-ocobo-coral opacity-30" size={28} strokeWidth={1.5} />
          </div>
      </section>

      {/* BLOC 2 - SYMPTOMES (REDESIGN PYRAMIDE PREMIUM) */}
      <section className="pt-12 md:pt-24 pb-0 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 md:mb-24">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-ocobo-dark mb-6 leading-tight">
                    Quand la croissance s’accélère, <br className="hidden md:block" /> la complexité arrive.
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 font-medium">
                    Dans toutes les entreprises en mouvement, les mêmes symptômes sont légion :
                  </p>
              </div>

              {/* MOBILE LAYOUT (List) */}
              <div className="md:hidden space-y-8 pb-12">
                  <div className="bg-gray-50 p-6 rounded-md border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-coral opacity-10 rounded-bl-full"></div>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">1</div>
                          <h3 className="font-display text-xl font-bold text-ocobo-dark">CEO</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">• Manque de visibilité sur le business</li>
                      </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-md border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-yellow opacity-10 rounded-bl-full"></div>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">2</div>
                          <h3 className="font-display text-xl font-bold text-ocobo-dark">Managers</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">• Prévisions instables</li>
                      </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-md border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-sky opacity-10 rounded-bl-full"></div>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">3</div>
                          <h3 className="font-display text-xl font-bold text-ocobo-dark">Équipes terrain</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">• Trop d’outils, pas assez de clarté</li>
                      </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-md border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-ocobo-mint opacity-10 rounded-bl-full"></div>
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-white border border-ocobo-dark rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">4</div>
                          <h3 className="font-display text-xl font-bold text-ocobo-dark">Clients</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">• Expérience inégale</li>
                      </ul>
                  </div>
              </div>

              {/* DESKTOP LAYOUT (Pyramid Redesign) */}
              <div className="hidden md:block">
                  <PyramidSection />
              </div>
          </div>
      </section>

      {/* BLOC 3 - TRANSITION (REDESIGN STYLE RECRUTEMENT) */}
      <section className="py-24 bg-ocobo-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border border-gray-700/50 p-12 md:p-20 relative">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-16 md:mb-20 text-center leading-tight">
                    RevOps vient remettre de l’ordre.
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                      <div className="space-y-4">
                          <h3 className="font-display text-2xl font-bold text-ocobo-yellow">Alignement</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Aligner Marketing, Sales, CS et Finance pour une vision commune et transverse du revenu.
                          </p>
                      </div>
                      <div className="space-y-4">
                          <h3 className="font-display text-2xl font-bold text-ocobo-mint">Process</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Fluidifier les parcours et supprimer les frictions opérationnelles à chaque étape du cycle de vie.
                          </p>
                      </div>
                      <div className="space-y-4">
                          <h3 className="font-display text-2xl font-bold text-ocobo-coral">Data</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Fiabiliser la donnée pour transformer les intuitions en décisions factuelles et pilotables.
                          </p>
                      </div>
                      <div className="space-y-4">
                          <h3 className="font-display text-2xl font-bold text-ocobo-sky">Performance</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Améliorer la conversion et le revenu à chaque étape clé du parcours client.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* BLOC OFFRES DETAILLEES */}
      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 md:mb-24">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-ocobo-dark mb-4 md:mb-6">Nous construisons et opérons les fondations RevOps</h2>
                  <p className="text-gray-600 text-lg">Nous construisons et opérons les fondations RevOps de votre organisation : process, outils, data et équipes alignés pour une croissance durable et maîtrisée.</p>
              </div>

              <div className="space-y-24">
                  {/* Service 1: Audit & Cadrage */}
                  <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                      <div className="w-full md:w-5/12 sticky top-32">
                           <div className="w-16 h-16 bg-ocobo-yellow text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-md mb-8">1</div>
                           <h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">Immersion, cadrage et plan d’action RevOps</h3>
                           <p className="text-gray-600 text-lg leading-relaxed">La vision claire pour savoir où agir.</p>
                      </div>
                      <div className="w-full md:w-7/12">
                          <div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-lg hover:border-ocobo-yellow transition-all duration-300 group rounded-sm">
                              <ul className="space-y-8">
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Diagnostic transversal</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Analyse en profondeur des interactions et frictions entre les départements.</p>
                                      </div>
                                  </li>
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Cartographie process / outils / data</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Audit complet de l'infrastructure existante et des flux de travail.</p>
                                      </div>
                                  </li>
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-yellow-light p-2 rounded-full text-ocobo-yellow group-hover:bg-ocobo-yellow group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Priorisation et feuille de route</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Un plan d'attaque chiffré et priorisé pour les mois à venir.</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="w-full h-px bg-gray-100"></div>

                  {/* Service 2: Déploiement */}
                  <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                      <div className="w-full md:w-5/12 sticky top-32">
                           <div className="w-16 h-16 bg-ocobo-coral text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-md mb-8">2</div>
                           <h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">Déploiement RevOps (Agile)</h3>
                           <p className="text-gray-600 text-lg leading-relaxed">Pour opérer et structurer la machine revenue en sprints de 2 semaines.</p>
                      </div>
                      <div className="w-full md:w-7/12">
                          <div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-lg hover:border-ocobo-coral transition-all duration-300 group rounded-sm">
                              <ul className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                                  {[
                                      "Funnel complet : demand gen → closing → onboarding → expansion",
                                      "Process simples & adoptés",
                                      "CRM utile et utilisé",
                                      "Stack lisible et connectée",
                                      "Automatisations utiles",
                                      "Data fiable & pilotable",
                                      "Rémunération variable claire, juste et motivante"
                                  ].map((item, i) => (
                                      <li key={i} className="flex items-start gap-4">
                                          <div className="mt-0.5 text-ocobo-coral">
                                              <CheckCircle2 size={18} />
                                          </div>
                                          <span className="font-medium text-gray-700 text-sm leading-snug">{item}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="w-full h-px bg-gray-100"></div>

                  {/* Service 3: Coaching */}
                  <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                      <div className="w-full md:w-5/12 sticky top-32">
                           <div className="w-16 h-16 bg-ocobo-mint text-ocobo-dark flex items-center justify-center font-display font-bold text-2xl border border-ocobo-dark shadow-md mb-8">3</div>
                           <h3 className="font-display text-3xl md:text-4xl font-bold text-ocobo-dark mb-4 leading-tight">Coaching & Formation</h3>
                           <p className="text-gray-600 text-lg leading-relaxed">Rendre vos équipes autonomes et capables de faire vivre le système.</p>
                      </div>
                      <div className="w-full md:w-7/12">
                          <div className="bg-white border border-gray-100 p-8 md:p-10 hover:shadow-lg hover:border-ocobo-mint transition-all duration-300 group rounded-sm">
                              <ul className="space-y-8">
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Acculturation RevOps pour dirigeants</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Aligner la vision stratégique et donner les clés de lecture aux décideurs.</p>
                                      </div>
                                  </li>
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Coaching Heads (Sales / CS / RevOps)</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Accompagnement individuel des responsables pour piloter l'excellence opérationnelle.</p>
                                      </div>
                                  </li>
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Montée en compétence des équipes</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Formation pratique aux nouveaux rituels, outils et méthodes GTM.</p>
                                      </div>
                                  </li>
                                  <li className="flex gap-5 items-start">
                                      <div className="mt-1 bg-ocobo-mint-light p-2 rounded-full text-ocobo-mint group-hover:bg-ocobo-mint group-hover:text-white transition-colors">
                                          <CheckCircle2 size={18} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-ocobo-dark mb-2">Playbooks pratiques</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">Création de bibles opérationnelles pour ancrer durablement les process.</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* BLOC 4 - NOS 3 LEVIERS D'ACCOMPAGNEMENT */}
      <section className="py-24 bg-white border-y border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-20">
                <span className="font-display font-black text-ocobo-dark bg-ocobo-yellow-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-8 inline-block border border-ocobo-yellow/20">
                    LEVIERS DE CROISSANCE
                </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-ocobo-dark mb-8 leading-tight tracking-tight">
                      Nos 3 leviers <br/>d’accompagnement.
                  </h2>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed">
                      Pour mettre votre stratégie Revenue en mouvement, nous combinons méthode, technologie et expertise.
                  </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                  {/* Levier 1: Méthode */}
                  <Link to="/method" className="group flex flex-col h-full">
                      <div className="relative p-10 bg-gray-50 rounded-sm border border-gray-100 flex-grow transition-all duration-500 hover:shadow-lg hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
                          <div className="mb-12 flex justify-between items-center">
                              <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center text-ocobo-yellow shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                  <Layers size={28} />
                              </div>
                              <ArrowRight className="text-gray-200 group-hover:text-ocobo-dark transition-colors" size={24} />
                          </div>
                          <h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-yellow transition-colors">Notre méthode</h3>
                          <p className="text-gray-400 font-display font-black text-micro uppercase tracking-widest mb-4">The Revenue Experience System™</p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
                              Une méthode vivante, opérée en sprints, conçue pour durer : alignement des équipes, stack utile, data fiable et équipes autonomes.
                          </p>
                          
                          {/* Internal Colored Separator */}
                          <div className="w-full h-1 bg-ocobo-yellow opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

                          <div className="flex flex-wrap gap-2 h-[48px] content-start">
                          {['Alignment', 'Technology', 'Performance', 'Enablement'].map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-micro font-black uppercase tracking-wider text-gray-400">{tag}</span>
                          ))}
                          </div>
                      </div>
                  </Link>

                  {/* Levier 2: Technologie */}
                  <Link to="/technology" className="group flex flex-col h-full">
                      <div className="relative p-10 bg-gray-50 rounded-sm border border-gray-100 flex-grow transition-all duration-500 hover:shadow-lg hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
                          <div className="mb-12 flex justify-between items-center">
                              <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center text-ocobo-sky shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                  <Cpu size={28} />
                              </div>
                              <ArrowRight className="text-gray-200 group-hover:text-ocobo-dark transition-colors" size={24} />
                          </div>
                          <h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-sky transition-colors">Notre technologie</h3>
                          <p className="text-gray-400 font-display font-black text-micro uppercase tracking-widest mb-4">Infrastructure Unifiée</p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
                              Une stack rationalisée, co-conçue avec les leaders (HubSpot, Salesforce, Modjo...). Nous sommes des architectes agnostiques, chaque choix sert votre stratégie.
                          </p>
                          
                          {/* Internal Colored Separator */}
                          <div className="w-full h-1 bg-ocobo-sky opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

                          <div className="h-[48px] flex flex-col justify-start gap-3">
                              <div className="flex items-center gap-4 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                                    <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" className="h-4 w-auto" alt="Hubspot" />
                                    <img src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" className="h-4 w-auto" alt="Salesforce" />
                              </div>
                              <div className="flex items-center grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                                    <img src="https://dust.tt/static/logo_icon.png" className="h-4 w-auto" alt="Dust" />
                              </div>
                          </div>
                      </div>
                  </Link>

                  {/* Levier 3: Équipe */}
                  <Link to="/studio" className="group flex flex-col h-full">
                      <div className="relative p-10 bg-gray-50 rounded-sm border border-gray-100 flex-grow transition-all duration-500 hover:shadow-lg hover:bg-white hover:-translate-y-2 overflow-hidden flex flex-col">
                          <div className="mb-12 flex justify-between items-center">
                              <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center text-ocobo-mint shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                  <Users size={28} />
                              </div>
                              <ArrowRight className="text-gray-200 group-hover:text-ocobo-dark transition-colors" size={24} />
                          </div>
                          <h3 className="font-display text-2xl font-bold mb-6 group-hover:text-ocobo-mint transition-colors">Notre équipe</h3>
                          <p className="text-gray-400 font-display font-black text-micro uppercase tracking-widest mb-4">Le RevOps Studio</p>
                          <p className="text-gray-600 text-sm leading-relaxed mb-10 font-medium flex-grow">
                              Votre squad d’experts seniors, issus des meilleures scale-ups : TheFork, Qonto, Payfit, Spendesk... Ils pensent comme une direction Revenue embarquée.
                          </p>
                          
                          {/* Internal Colored Separator */}
                          <div className="w-full h-1 bg-ocobo-mint opacity-20 mb-8 rounded-full group-hover:opacity-100 transition-opacity"></div>

                          <div className="h-[48px] flex flex-col justify-start">
                         <div className="text-micro font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                             TheFork • Qonto • Payfit
                         </div>
                         <div className="text-micro font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                             Spendesk • Zenchef
                         </div>
                          </div>
                      </div>
                  </Link>
              </div>
          </div>
      </section>

      {/* BLOC METHODE */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold mb-6">Notre méthode en 4 étapes</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                   {[
                       { title: "Aligner", icon: <Layout size={20} />, deliverable: "Playbooks, rituels" },
                       { title: "Outiller", icon: <Cog size={20} />, deliverable: "Roadmap tech" },
                       { title: "Piloter", icon: <BarChart3 size={20} />, deliverable: "Tableaux de bord" },
                       { title: "Former", icon: <GraduationCap size={20} />, deliverable: "Kits formation" }
                   ].map((step, i) => (
                       <div key={i} className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-all group">
                           <div className="w-10 h-10 bg-ocobo-dark text-white flex items-center justify-center text-sm font-bold mb-6 group-hover:bg-ocobo-yellow group-hover:text-ocobo-dark transition-colors">{i + 1}</div>
                           <h3 className="font-display text-xl font-bold text-ocobo-dark mb-3">{step.title}</h3>
                           <div className="pt-4 border-t border-gray-50">
                               <span className="text-micro font-black uppercase text-gray-400">Livrables :</span>
                               <p className="text-xs font-bold text-ocobo-dark mt-1">{step.deliverable}</p>
                           </div>
                       </div>
                   ))}
              </div>
          </div>
      </section>

      {/* BLOC IMPLICATIONS CONCRETES */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                  <h2 className="font-display text-4xl font-bold mb-6">Ce que cela implique concrètement</h2>
                  <p className="text-xl text-gray-600">Concrètement, voici ce que nous opérons avec vous :</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { title: "Diagnostiquer", color: "coral", icon: <Search size={24} />, items: ["Analyse interactions Mkt/Sales/CS", "Cartographie process + CRM", "Analyse KPI, pipeline, variable"] },
                      { title: "Aligner", color: "yellow", icon: <Layout size={24} />, items: ["ICP & buyer journey", "SLA Marketing ↔ Sales ↔ CS", "Organisation & rituels communs"] },
                      { title: "Outiller", color: "sky", icon: <Cog size={24} />, items: ["Repenser / implémenter CRM", "Automatisations intelligentes", "Dashboards partagés"] },
                      { title: "Activer la performance", color: "mint", icon: <BarChart3 size={24} />, items: ["Plans de variable", "Objectifs et KPIs", "Cockpit de pilotage"] },
                      { title: "Intégrer l'IA", color: "purple-500", icon: <Cpu size={24} />, items: ["Agents IA prospection", "Automatisation CRM after-call", "Scoring prédictif"] },
                      { title: "Former & Itérer", color: "dark", icon: <GraduationCap size={24} />, items: ["Pipeline review, roleplay", "Playbooks et templates", "Roadmap d’itération"] }
                  ].map((block, idx) => (
                    <div key={idx} className={`bg-white border border-gray-100 p-8 hover:shadow-lg transition-all rounded-sm group`}>
                      <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${block.color === 'dark' ? 'bg-gray-100 text-ocobo-dark' : block.color === 'purple-500' ? 'bg-purple-50 text-purple-500' : `bg-ocobo-${block.color}Light text-ocobo-${block.color}`}`}>
                          {block.icon}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-4">{block.title}</h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                          {block.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${block.color === 'dark' ? 'bg-ocobo-dark' : block.color === 'purple-500' ? 'bg-purple-500' : `bg-ocobo-${block.color}`}`}></div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      {/* BLOC POURQUOI OCOBO */}
      <section className="py-24 bg-ocobo-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold mb-6">Pourquoi choisir Ocobo</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-ocobo-yellow rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
                          <CheckCircle2 size={32} strokeWidth={4} />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-4">Profils seniors</h3>
                      <p className="text-gray-300 leading-relaxed">Aucun junior. Nous opérons comme une direction Revenue interne embarquée.</p>
                  </div>
                  <div className="text-center">
                      <div className="w-16 h-16 bg-ocobo-coral rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
                          <CheckCircle2 size={32} strokeWidth={4} />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-4">Impact réel</h3>
                      <p className="text-gray-300 leading-relaxed">Pas de slides inutiles. Nous construisons, opérons et transmettons.</p>
                  </div>
                  <div className="text-center">
                      <div className="w-16 h-16 bg-ocobo-mint rounded-full flex items-center justify-center text-ocobo-dark mx-auto mb-6">
                          <CheckCircle2 size={32} strokeWidth={4} />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-4">Système durable</h3>
                      <p className="text-gray-300 leading-relaxed">Nous laissons un système structuré et pilotable pour votre futur scale.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA FINAL - TEXTE MIS À JOUR & CENTRÉ */}
      <section className="bg-ocobo-yellow py-24 text-ocobo-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Prenez le contrôle de votre croissance.</h2>
              
              <div className="mb-10 space-y-2">
                  <p className="text-lg md:text-xl font-medium opacity-90">30 minutes pour analyser votre machine revenue.</p>
                  <p className="text-lg md:text-xl font-bold">Clarté garantie.</p>
              </div>

              <div className="flex justify-center">
                <Link to="/contact">
                    <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:shadow-lg hover:-translate-y-1 bg-ocobo-dark text-white border-none">
                        Prendre RDV
                    </Button>
                </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Services;
