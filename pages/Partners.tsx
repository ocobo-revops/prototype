
import React, { useState, useEffect } from 'react';
import { Layers, Database, Cpu, Link as LinkIcon, Lock, ExternalLink, Plus, ShieldCheck, Sparkles, ChevronDown, CheckCircle2, Award, Zap, Send, Handshake } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router';

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
    <div className="relative w-full max-w-xl aspect-square p-4">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', 
             backgroundSize: '25% 25%' 
           }}>
      </div>

      <div className="grid grid-cols-4 gap-4 relative z-10 h-full">
        {items.map((item, i) => (
          <div 
            key={i}
            className={`
              aspect-square rounded-2xl border transition-all duration-500 flex items-center justify-center
              ${item.type === 'logo' 
                ? 'group bg-white border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-ocobo-sky/30' 
                : 'bg-gray-50/50 border-dashed border-gray-200 group/empty hover:bg-white hover:border-solid hover:border-ocobo-yellow/40'}
              animate-fade-in-up
            `}
            style={{ animationDelay: `${i * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
          >
            {item.type === 'logo' ? (
              <div className="flex flex-col items-center gap-2">
                <img src={item.logo} alt={item.label} className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ) : (
              <Plus size={20} className="text-gray-200 group-hover/empty:text-ocobo-yellow transition-colors" />
            )}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes fadeInUpTuile {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUpTuile 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

const Partners: React.FC = () => {
  const [filter, setFilter] = useState('TOUS');
  const [animate, setAnimate] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [filter]);

  const partners = [
    { 
        name: 'HubSpot', category: ['CRM'], color: 'ocobo-yellow',
        tags: ['Intégration', "CRM", "Marketing Automation"],
        logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg',
        desc: 'Plateforme complète de CRM & Marketing Automation.',
        status: 'OFFICIAL',
        certificationLogo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/hubspot-platinum-partner-badge.png"
    },
    { 
        name: 'Vasco', category: ['FINANCE'], color: 'ocobo-sky',
        tags: ['Vertical SaaS', "Billing", "SaaS Ops"],
        logo: 'https://vasco.app/favicon.ico',
        desc: 'Le système d\'exploitation pour bâtir et gérer votre Vertical SaaS.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Qobra', category: ['COMP'], color: 'ocobo-coral',
        tags: ['Intégration', "Apporteur d'affaires", "Commission Plan"],
        logo: 'https://qobra.co/favicon.ico',
        desc: 'Automatisation des commissions pour motiver vos équipes de vente.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Hyperline', category: ['FINANCE'], color: 'ocobo-mint',
        tags: ['Intégration', "Apporteur d'affaires", "Quote2Cash"],
        logo: 'https://www.hyperline.co/favicon.ico',
        desc: 'Billing moderne pour les modèles de revenus récurrents.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Folk', category: ['CRM'], color: 'ocobo-yellow',
        tags: ['Intégration', "CRM"],
        logo: 'https://www.folk.app/apple-touch-icon.png',
        desc: 'Le CRM intelligent et collaboratif pour centraliser vos relations.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Vitally', category: ['CS'], color: 'ocobo-sky',
        tags: ['Intégration', "CS Platform"],
        logo: 'https://framerusercontent.com/images/kQ9rX6H7m0m2mY3V1W1N8U.svg',
        desc: 'Customer Success Platform pour piloter la rétention.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Modjo', category: ['SALES', 'AI'], color: 'ocobo-mint',
        tags: ['Intégration', "Enablement", "AI"],
        logo: 'https://framerusercontent.com/images/8r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Analyse conversationnelle pour coacher vos équipes.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Planhat', category: ['CS'], color: 'ocobo-sky',
        tags: ['Intégration', "CS Platform"],
        logo: 'https://www.planhat.com/static/logo-icon-bc8b2f9f8c0b5f1f9b9a6c9a9d0a9b3a.svg',
        desc: 'Plateforme CS entreprise pour scaler l\'expansion.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Dust', category: ['AI'], color: 'ocobo-dark',
        tags: ['Intégration', "AI"],
        logo: 'https://dust.tt/static/logo_icon.png',
        desc: 'Moteur d\'IA interne pour la productivité d\'équipe.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Notion', category: ['ENABLEMENT'], color: 'ocobo-yellow',
        tags: ['Documentation', "Enablement"],
        logo: 'https://www.vectorlogo.zone/logos/notionso/notionso-icon.svg',
        desc: 'L\'outil central pour vos playbooks et process.',
        status: 'OFFICIAL'
    },
    { 
        name: 'AGO', category: ['AI'], color: 'ocobo-sky',
        tags: ['Intégration', "AI"],
        logo: 'https://framerusercontent.com/images/3m8i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Intelligence Artificielle au service du Revenue.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Surfe', category: ['SALES'], color: 'ocobo-sky',
        tags: ['Enrichment', "Sales Automation"],
        logo: 'https://framerusercontent.com/images/5r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Connectez LinkedIn à votre CRM en un clic.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Full Enrich', category: ['SALES'], color: 'ocobo-sky',
        tags: ["Enrichment", 'Intégration'],
        logo: 'https://framerusercontent.com/images/2r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Multi-enrichissement de données de contact.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Claap', category: ['SALES'], color: 'ocobo-coral',
        tags: ['CRM Fillings', "AI"],
        logo: 'https://framerusercontent.com/images/6r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Vidéo asynchrone et enregistrement de calls.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Chargebee', category: ['FINANCE'], color: 'ocobo-coral',
        tags: ['Quote2Cash'],
        logo: 'https://www.vectorlogo.zone/logos/chargebee/chargebee-icon.svg',
        desc: 'Gestion des abonnements et facturation récurrente.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Aircall', category: ['SALES'], color: 'ocobo-mint',
        tags: ['Intégration', "Téléphonie"],
        logo: 'https://www.vectorlogo.zone/logos/aircallio/aircallio-icon.svg',
        desc: 'Téléphonie cloud intégrée nativement à vos outils.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Lemlist', category: ['SALES'], color: 'ocobo-sky',
        tags: ['Sales Automation', "Enrichment"],
        logo: 'https://www.lemlist.com/hubfs/lemlist-logo-2023.svg',
        desc: 'Prospection multicanale hautement personnalisée.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Oneflow', category: ['CONTRAT'], color: 'ocobo-dark',
        tags: ['Contract Management'],
        logo: 'https://framerusercontent.com/images/1r0i7N1W9Tz6zY3Y3V1W1N8U.svg',
        desc: 'Gestion de contrats digitaux et signature.',
        status: 'OFFICIAL'
    },
    { 
        name: 'Salesforce', category: ['CRM'], color: 'ocobo-sky',
        tags: ['Intégration', "CRM"],
        logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
        desc: 'Le CRM entreprise de référence pour les stacks complexes.',
        status: 'OFFICIAL'
    },
    // EXPERTISE TOOLS
    { 
        name: 'Clay', category: ['SALES', 'AI'], color: 'ocobo-dark',
        tags: ['Enrichment', "Prospecting", "AI"],
        logo: 'https://www.clay.com/favicon.ico',
        desc: 'L\'outil leader pour l\'enrichissement de données et la prospection hyper-personnalisée via l\'IA.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Attio', category: ['CRM'], color: 'ocobo-dark',
        tags: ['CRM', 'Data-driven', 'Relationship'],
        logo: 'https://attio.com/favicon.ico',
        desc: 'Le CRM de nouvelle génération construit pour la flexibilité et la donnée.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Cargo', category: ['SALES', 'NO-CODE'], color: 'ocobo-coral',
        tags: ['Revenue Workflow', "Sales Automation", "AI"],
        logo: 'https://getcargo.ai/favicon.ico',
        desc: 'L\'infrastructure de revenus pour orchestrer vos workflows Sales & Marketing via l\'IA.',
        status: 'EXPERTISE'
    },
    { 
        name: 'N8N', category: ['NO-CODE'], color: 'ocobo-coral',
        tags: ['Automation', "Workflow", "Self-hosted"],
        logo: 'https://n8n.io/favicon.ico',
        desc: 'Solution d\'automatisation flexible et puissante pour les flux techniques.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Make', category: ['NO-CODE'], color: 'ocobo-sky',
        tags: ['Automation', "iPaaS", "Workflow"],
        logo: 'https://www.make.com/favicon.ico',
        desc: 'Plateforme visuelle pour connecter vos applications et automatiser vos process.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Pipedrive', category: ['CRM'], color: 'ocobo-mint',
        tags: ['CRM', "Sales Management", "SME"],
        logo: 'https://www.pipedrive.com/favicon.ico',
        desc: 'Le CRM pensé par des commerciaux pour la gestion simplifiée du pipeline.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Ringover', category: ['SALES'], color: 'ocobo-coral',
        tags: ['Téléphonie', "Call Center", "SMS"],
        logo: 'https://www.ringover.fr/favicon.ico',
        desc: 'Solution de téléphonie cloud française intégrée à vos outils métiers.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Tomorro', category: ['CONTRAT'], color: 'ocobo-sky',
        tags: ['CLM', "Contract automation", "LegalOps"],
        logo: 'https://www.tomorro.com/favicon.ico',
        desc: 'Simplifiez la gestion et le cycle de vie de vos contrats commerciaux.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Yousign', category: ['CONTRAT'], color: 'ocobo-mint',
        tags: ['e-Signature', "Legal Compliance", "API"],
        logo: 'https://yousign.com/favicon.ico',
        desc: 'La solution française de signature électronique sécurisée et intuitive.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Pandadoc', category: ['CONTRAT'], color: 'ocobo-mint',
        tags: ['Proposal', "e-Signature", "Quotes"],
        logo: 'https://www.pandadoc.com/favicon.ico',
        desc: 'Automatisation de la création, du suivi et de la signature de documents.',
        status: 'EXPERTISE'
    },
    { 
        name: 'Docusign', category: ['CONTRAT'], color: 'ocobo-sky',
        tags: ['e-Signature', "Agreement Cloud"],
        logo: 'https://www.docusign.com/favicon.ico',
        desc: 'Leader mondial de la signature électronique et de la gestion d\'accords.',
        status: 'EXPERTISE'
    }
  ];

  const categories = ['TOUS', 'CRM', 'AI', 'NO-CODE', 'ENABLEMENT', 'COMP', 'CS', 'SALES', 'FINANCE', 'CONTRAT'];
  
  const filtered = (filter === 'TOUS' 
    ? partners 
    : partners.filter(p => p.category.includes(filter)))
    .sort((a, b) => {
      if (a.status === 'OFFICIAL' && b.status !== 'OFFICIAL') return -1;
      if (a.status !== 'OFFICIAL' && b.status === 'OFFICIAL') return 1;
      return 0;
    });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-entry {
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      {/* HERO TECHNOLOGIE */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-4xl mx-auto mb-16 relative z-10">
              <span className="font-display font-black text-ocobo-dark bg-ocobo-sky-light px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-sky/20">
                TECHNOLOGIE
              </span>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ocobo-dark mb-10 leading-[0.95] tracking-tight">
                  Un écosystème <br/>
                  de solutions <span className="text-ocobo-sky italic">connectées.</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
                  Nous maîtrisons les architectures technologiques les plus avancées pour transformer vos outils en <span className="font-bold">véritable levier de croissance.</span>
              </p>
          </div>

          <div className="flex justify-center mb-16 px-4">
              <ModularStackGrid />
          </div>

          <div className="flex flex-col items-center gap-12">
              <Link to="/contact">
                  <Button 
                    variant="primary" 
                    className="px-16 py-5 text-xs font-bold uppercase tracking-[0.25em] shadow-xl bg-ocobo-dark hover:bg-black transition-all hover:-translate-y-1"
                  >
                    Auditer ma stack
                  </Button>
              </Link>
          </div>

          <div className="mt-16 flex justify-center w-full animate-bounce-slow">
              <ChevronDown className="text-ocobo-sky" size={24} strokeWidth={1.5} />
          </div>
      </section>

      {/* SECTION PHILOSOPHIE */}
      <section className="bg-ocobo-dark py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mb-20 text-center md:text-left">
                  <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">Le système avant l'outil.</h2>
                  <p className="text-gray-400 text-lg font-medium leading-relaxed">
                      L'outil n'est qu'un moyen. Notre valeur réside dans l'architecture qui permet à ces technologies de communiquer et de produire de la donnée fiable.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                  <div className="bg-white p-10 rounded-xl shadow-xl group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-ocobo-dark text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-ocobo-sky transition-colors">
                          <Lock size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-ocobo-dark">Agnostique</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          On ne force pas un outil. On choisit celui qui sert votre stratégie de manière juste.
                      </p>
                  </div>
                  <div className="bg-white p-10 rounded-xl shadow-xl group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-ocobo-dark text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-ocobo-mint transition-colors">
                          <LinkIcon size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-ocobo-dark">Connectée</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          La donnée doit circuler fluidement. Nous supprimons les silos pour une vérité unique.
                      </p>
                  </div>
                  <div className="bg-white p-10 rounded-xl shadow-xl group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-ocobo-dark text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-ocobo-yellow transition-colors">
                          <ShieldCheck size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-ocobo-dark">Certifiée</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Nous sommes partenaires officiels et certifiés sur les solutions les plus puissantes du marché.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* ECOSYSTEME TECH */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div>
                      <h2 className="font-display text-4xl font-black mb-4 text-ocobo-dark tracking-tight">Notre Ecosystème Tech</h2>
                      <p className="text-gray-500 font-medium">Les solutions que nous implémentons, des partenariats officiels aux maîtrises techniques d'experts.</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                                filter === cat ? 'bg-ocobo-dark text-white border-ocobo-dark shadow-lg' : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-ocobo-dark'
                            }`}
                          >
                            {cat === 'TOUS' ? 'Tous les outils' : cat === 'NO-CODE' ? 'No Code & Automatisation' : cat}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                  {filtered.map((partner, idx) => (
                      <div 
                        key={`${partner.name}-${filter}`} 
                        className={`group bg-white border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-xl flex flex-col h-full ${animate ? 'animate-card-entry' : 'opacity-0'}`}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                          <div className="flex justify-between items-start mb-8">
                              <div className="w-16 h-16 flex items-center justify-center p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-all duration-500 border border-transparent group-hover:border-gray-100 shadow-inner group-hover:shadow-none">
                                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                {partner.category.map(cat => (
                                    <div key={cat} className="text-[8px] font-black uppercase tracking-widest bg-gray-100 text-gray-400 px-3 py-1 rounded-md group-hover:bg-ocobo-dark group-hover:text-white transition-all">
                                        {cat === 'NO-CODE' ? 'No-Code & Automatisation' : cat}
                                    </div>
                                ))}
                              </div>
                          </div>
                          
                          <div className="mb-6 flex-grow flex flex-col">
                            <h3 className="font-display text-2xl font-black text-ocobo-dark mb-4 tracking-tight">{partner.name}</h3>
                            <div className="h-[48px] flex flex-wrap gap-1.5 mb-4 content-start overflow-hidden">
                                {partner.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[8px] font-bold bg-gray-50 text-gray-400 border border-gray-100 px-2 py-0.5 rounded transition-all group-hover:border-ocobo-dark/10 group-hover:text-ocobo-dark whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium min-h-[4rem]">{partner.desc}</p>
                          </div>

                          {/* Horizontal Black Separator - Aligned correctly for all tiles */}
                          <div className="w-full h-1 bg-ocobo-dark opacity-10 mb-6 rounded-full group-hover:opacity-100 transition-opacity"></div>

                          <div className="flex items-center justify-between mt-auto h-12">
                              <div className="flex-1">
                                  {partner.certificationLogo ? (
                                      <div className="flex items-center gap-2">
                                          <img 
                                            src={partner.certificationLogo} 
                                            alt={`${partner.name} Platinum`} 
                                            className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                          />
                                      </div>
                                  ) : partner.status === 'OFFICIAL' ? (
                                      <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-ocobo-dark">
                                          <Award size={12} className="text-ocobo-yellow" />
                                          Partenaire Officiel
                                      </div>
                                  ) : (
                                      <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-gray-400 group-hover:text-ocobo-mint transition-colors">
                                          <Zap size={12} className="opacity-50 group-hover:opacity-100" />
                                          Maîtrise Technique
                                      </div>
                                  )}
                              </div>

                              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ocobo-dark transition-colors p-2 transform group-hover:translate-x-1 duration-300">
                                  <ExternalLink size={20} />
                              </a>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION DEVENIR PARTENAIRE - UPDATED TO SKY THEME AND SQUARE FORM STYLE */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-1/2 -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                  <div className="lg:w-1/2">
                      <span className="font-display font-black text-ocobo-sky bg-ocobo-sky-light px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-sky/20">
                          CO-CONSTRUCTION
                      </span>
                      <h2 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-8 leading-[0.95] tracking-tight">
                          Rejoignez <br/>l’écosystème <span className="text-ocobo-sky">Ocobo.</span>
                      </h2>
                      <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                          Vous développez une solution logicielle qui transforme la croissance des entreprises B2B ? Intégrez notre écosystème d'architectes.
                      </p>

                      <div className="space-y-6 mb-12">
                          <div className="flex gap-5 items-start">
                              <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-ocobo-sky shrink-0">
                                  <Handshake size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-ocobo-dark">Partenariat Stratégique</h4>
                                  <p className="text-sm text-gray-500">Accès privilégié à notre Studio pour le déploiement de votre solution chez nos clients.</p>
                              </div>
                          </div>
                          <div className="flex gap-5 items-start">
                              <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-ocobo-yellow shrink-0">
                                  <Sparkles size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-ocobo-dark">Co-Marketing & Events</h4>
                                  <p className="text-sm text-gray-500">Webinars, podcasts et masterclasses en commun pour évangéliser le marché.</p>
                              </div>
                          </div>
                          <div className="flex gap-5 items-start">
                              <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-ocobo-mint shrink-0">
                                  <Layers size={20} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-ocobo-dark">Expertise Produit</h4>
                                  <p className="text-sm text-gray-500">Feedback opérationnel de nos architectes seniors pour optimiser vos intégrations.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="lg:w-1/2 w-full">
                      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                          {/* Multi-color top bar */}
                          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-ocobo-yellow via-ocobo-sky to-ocobo-mint"></div>
                          
                          {formSubmitted ? (
                            <div className="py-12 text-center animate-fade-in-up">
                                <div className="w-20 h-20 bg-ocobo-mint-light text-ocobo-mint rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="font-display text-2xl font-black text-ocobo-dark mb-4">Demande reçue !</h3>
                                <p className="text-gray-500 mb-8">Notre équipe étudiera votre solution et vous recontactera sous 48h.</p>
                                <button onClick={() => setFormSubmitted(false)} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-ocobo-dark transition-colors">Envoyer une autre demande</button>
                            </div>
                          ) : (
                            <form onSubmit={handlePartnerSubmit} className="space-y-6">
                                <h3 className="font-display text-2xl font-black text-ocobo-dark mb-8">Devenez partenaire</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Nom de la solution*</label>
                                        <input required type="text" placeholder="ex: HubSpot" className="w-full bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white outline-none p-4 rounded-none text-sm font-bold placeholder:text-gray-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Site Web*</label>
                                        <input required type="url" placeholder="https://..." className="w-full bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white outline-none p-4 rounded-none text-sm font-bold placeholder:text-gray-300" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">E-mail pro*</label>
                                    <input required type="email" placeholder="nom@solution.com" className="w-full bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white outline-none p-4 rounded-none text-sm font-bold placeholder:text-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Votre message</label>
                                    <textarea rows={4} placeholder="Parlez-nous de votre vision et de vos envies de partenariat..." className="w-full bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white outline-none p-4 rounded-none text-sm font-bold placeholder:text-gray-300 resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 bg-ocobo-dark text-white font-black uppercase tracking-[0.25em] text-[11px] rounded-none hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    Soumettre ma solution <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-ocobo-sky py-28 text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="font-display text-5xl md:text-6xl font-black text-ocobo-dark mb-10 leading-[0.9] tracking-tight">
                Besoin d'un architecte pour votre stack ?
              </h2>
              <p className="text-xl text-ocobo-dark/70 mb-12 font-bold">
                  Évaluons ensemble l'interconnexion de vos outils pour supprimer les silos.
              </p>
              <div className="flex justify-center">
                  <Link to="/contact">
                      <Button variant="primary" className="px-14 py-6 text-lg shadow-lg bg-ocobo-dark border-none text-white">Prendre RDV</Button>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Partners;
