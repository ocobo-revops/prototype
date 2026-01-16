import React from 'react';
import { useParams, Link } from 'react-router';
import { 
  ArrowLeft, 
  Check, 
  Users, 
  Target, 
  Layout, 
  Quote, 
  ArrowRight, 
  Layers, 
  BarChart3, 
  Zap, 
  Clock, 
  Cpu, 
  FileText, 
  MousePointer2,
  ChevronDown,
  Plus,
  Compass
} from 'lucide-react';
import Button from '../components/button-legacy';

// Configuration exhaustive des 14 Stories
const STORY_DATA: Record<string, any> = {
  "yousign": {
    company: "Yousign",
    title: "Yousign : Bâtir une architecture GTM scalable pour conquérir l'Europe.",
    name: "Antoine S.",
    role: "Head of RevOps @ Yousign",
    segment: "Scale-up",
    duration: "6 mois",
    team: "Benjamin & Ocobo",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    color: "ocobo-yellow",
    tools: ["HubSpot", "Salesforce", "Notion", "Aircall"],
    results: [
        { label: "Efficacité GTM", value: "+50%", icon: <Zap size={24} className="text-semantic-primary" /> },
        { label: "Fiabilité Data", value: "99%", icon: <BarChart3 size={24} className="text-semantic-success" /> },
        { label: "Pays couverts", value: "5", icon: <Compass size={24} className="text-semantic-info" /> }
    ],
    mission: {
        intro: "Yousign souhaitait unifier son infrastructure GTM après une phase de croissance organique rapide, afin de préparer son expansion internationale massive.",
        objectives: [
            "Unification des instances CRM Sales & Marketing",
            "Mise en place d'un Core Model de donnée unique",
            "Automatisation du cycle de vente international"
        ]
    },
    phases: [
        {
            title: "Phase 1 - Diagnostic & Core Model",
            desc: "Définition de la structure de donnée cible pour supporter le multi-pays.",
            items: [
                "Audit des processus commerciaux FR, IT, DE, ES",
                "Définition du dictionnaire de donnée global",
                "Cadrage de la stack technologique cible"
            ]
        },
        {
            title: "Phase 2 - Implémentation GTM",
            desc: "Refonte de l'instance HubSpot et déploiement des automatisations.",
            items: [
                "Migration et nettoyage des bases de données",
                "Mise en place des flux d'enrichissement automatique",
                "Création des dashboards de pilotage global"
            ]
        }
    ],
    livrables: ["Core Model de donnée", "Playbook GTM International", "Dashboards COMEX", "Architecture d'enrichissement"],
    interview: [
        {
            q: "Pourquoi avoir choisi Ocobo ?",
            a: "Nous avions besoin de profils seniors capables de comprendre nos enjeux business complexes avant de parler technique. Ocobo a su apporter cette vision architecturale."
        }
    ]
  },
  "combo": {
    company: "Combo",
    title: "Combo libère ses équipes Customer Success : comment optimiser Planhat pour gagner en productivité.",
    name: "Marie Piquemil",
    role: "VP Operations @ Combo",
    segment: "Scale-up",
    duration: "3 mois",
    team: "Clara & Ocobo",
    image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg",
    logo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-combo-white.svg",
    color: "ocobo-mint",
    tools: ["Planhat", "HubSpot", "Salesforce", "Notion"],
    results: [
        { label: "Productivité CS", value: "+25%", icon: <Zap size={24} className="text-semantic-success" /> },
        { label: "Adoption Outils", value: "100%", icon: <Users size={24} className="text-semantic-primary" /> },
        { label: "Délai de migration", value: "3 mois", icon: <Clock size={24} className="text-semantic-info" /> }
    ],
    mission: {
        intro: "Les enjeux de Combo étaient de remettre à plat l’instance Planhat actuelle pour en faire l'unique outil de référence des équipes Customer Success.",
        objectives: [
            "En faire l'unique outil de référence des équipes CS",
            "Soulage les équipes Ops et CS en termes de bande passante",
            "Transmettre l'expertise Planhat et former les futurs admins"
        ]
    },
    phases: [
        {
            title: "Phase 1 - Audit & Roadmap",
            desc: "Audit et recommandations sur Planhat et les processus métiers associés.",
            items: [
                "Cartographie du Customer Journey actuel",
                "Analyse des instances Planhat et Salesforce et de leurs intégrations",
                "Dimensionnement du projet et définition de la roadmap"
            ]
        },
        {
            title: "Phase 2 - Déploiement Cible",
            desc: "Définition et déploiement de la version cible de l'outil Planhat.",
            items: [
                "Mise à plat du modèle de donnée cible",
                "Définition des processus via des ateliers métiers",
                "Implémentation du modèle, intégrations et automatisations",
                "Documentation et formations admin"
            ]
        }
    ],
    livrables: ["Restitution d'audit", "Cartographie Customer Journey", "Instance Planhat MVP", "Documentation technique Notion"],
    interview: [
        {
            q: "Quelle problématique Ocobo est venue adresser ?",
            a: "Le manque de ressources et de disponibilité en interne freinait le déploiement de Planhat. Ocobo a permis de réussir la migration complète en 3 mois."
        }
    ]
  },
  "qonto": {
    company: "Qonto",
    title: "Qonto : Scaling de l'architecture Data & BI pour le leader de la FinTech.",
    name: "Léa S.",
    role: "RevOps Lead @ Qonto",
    segment: "Enterprise",
    duration: "8 mois",
    team: "Corentin & Ocobo",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    color: "ocobo-mint",
    tools: ["Snowflake", "dbt", "HubSpot", "Tableau"],
    results: [
        { label: "Automatisation Report", value: "100%", icon: <Zap size={24} className="text-semantic-success" /> },
        { label: "Data Accuracy", value: "+40%", icon: <BarChart3 size={24} className="text-semantic-primary" /> },
        { label: "Utilisateurs BI", value: "500+", icon: <Users size={24} className="text-semantic-info" /> }
    ],
    mission: {
        intro: "Qonto avait besoin de fiabiliser ses flux de données entre son CRM et ses outils de BI pour piloter son revenu en temps réel.",
        objectives: [
            "Fiabilisation des flux de données CRM → Data Warehouse",
            "Mise en place de dashboards de Revenue Intelligence",
            "Formation des équipes Ops à la maintenance des flux"
        ]
    },
    phases: [
        {
            title: "Phase 1 - Data Audit",
            desc: "Analyse des écarts de données et des goulots d'étranglement.",
            items: ["Audit des pipelines dbt", "Réconciliation de donnée CRM vs Finance", "Mapping des objets custom"]
        }
    ],
    livrables: ["Pipelines data optimisés", "Dashboard de pilotage Revenue", "Documentation dbt"],
    interview: [{ q: "L'apport d'Ocobo ?", a: "Une expertise technique rare couplée à une compréhension fine des enjeux business d'une FinTech à cette échelle." }]
  },
  "vizzia": {
    company: "Vizzia",
    title: "Vizzia : Fondations RevOps post-Série A pour tripler le pipeline.",
    name: "Louis Vannereau",
    role: "COO @ Vizzia",
    segment: "Série A/B",
    duration: "4 mois",
    team: "Aude & Ocobo",
    image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Louis%20Vannereau.jpg",
    logo: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-vizzia-white.svg",
    color: "ocobo-yellow",
    tools: ["HubSpot", "Salesforce", "Modjo"],
    results: [
        { label: "Pipeline Growth", value: "x3", icon: <BarChart3 size={24} className="text-semantic-primary" /> },
        { label: "Sales Velocity", value: "+30%", icon: <Zap size={24} className="text-semantic-accent" /> },
        { label: "Data Integrity", value: "95%", icon: <Check size={24} className="text-semantic-success" /> }
    ],
    mission: {
        intro: "Après une levée de fonds en Série A, Vizzia devait structurer ses équipes Sales et CS pour soutenir une croissance agressive.",
        objectives: ["Mise en place d'un système de prospection industrialisé", "Unification du cycle de vie client", "Visibilité totale sur le Forecast"]
    },
    phases: [
        {
            title: "Phase 1 - GTM Setup",
            desc: "Construction des fondations sur HubSpot.",
            items: ["Définition des étapes de pipeline", "Automatisation du suivi des leads", "Setup des séquences de prospection"]
        }
    ],
    livrables: ["Playbook Sales", "Configuration HubSpot complète", "Dashboard Forecast"],
    interview: [{ q: "Verdict ?", a: "Ocobo nous a permis de gagner 1 an de maturité opérationnelle en seulement 4 mois." }]
  },
  "citron": {
    company: "Citron",
    title: "Citron : Automatisation des flux Data pour une efficacité Ops maximale.",
    name: "Maxime L.",
    role: "Operations Manager @ Citron",
    segment: "Série A/B",
    duration: "3 mois",
    team: "Dorian & Ocobo",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&w=600&q=80",
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    color: "ocobo-yellow",
    tools: ["HubSpot", "Make", "Aircall"],
    results: [
        { label: "Saisie manuelle", value: "0", icon: <Zap size={24} className="text-semantic-primary" /> },
        { label: "Lead response time", value: "-80%", icon: <Clock size={24} className="text-semantic-success" /> },
        { label: "Conversion SQL", value: "+15%", icon: <BarChart3 size={24} className="text-semantic-info" /> }
    ],
    mission: {
        intro: "Citron perdait une part importante de sa productivité dans des tâches de saisie manuelle répétitives entre ses outils.",
        objectives: ["Automatisation totale de la chaîne de prospection", "Synchronisation bidirectionnelle des données", "Optimisation du temps des SDR"]
    },
    phases: [
        {
            title: "Phase 1 - Automation Audit",
            desc: "Mapping des process manuels chronophages.",
            items: ["Identification des sources de friction", "Cadrage des flux Make", "Tests de charge sur HubSpot"]
        }
    ],
    livrables: ["Flux d'automatisation Make", "Playbook d'onboarding SDR", "Reporting productivité"],
    interview: [{ q: "Le bénéfice principal ?", a: "Mes équipes ne passent plus 2h par jour à copier-coller des données. Elles vendent." }]
  }
};

const StoryDetail: React.FC = () => {
  const { id } = useParams();
  
  // Fallback sur Combo si l'ID n'est pas trouvé
  const story = id && STORY_DATA[id] ? STORY_DATA[id] : STORY_DATA["combo"];

  if (!story) return null;

  return (
    <div className="w-full bg-white pt-32 pb-40">
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
            <Link to="/stories" className="inline-flex items-center text-gray-400 hover:text-semantic-text font-black uppercase tracking-widest text-micro transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Retour aux Success Stories
            </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
            <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-display font-black text-micro uppercase tracking-[0.3em] text-semantic-text bg-ocobo-mint-light px-4 py-1.5 border border-ocobo-mint/20 rounded-full">
                        {story.segment}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-semantic-primary"></span>
                    <span className="font-display font-black text-micro uppercase tracking-[0.3em] text-gray-400">Mission Architecture</span>
                </div>
                <h1 className="font-display text-4xl md:text-7xl font-black text-semantic-text mb-0 leading-[0.95] tracking-tight">
                    {story.title}
                </h1>
            </div>
            <div className="lg:w-1/3 flex lg:justify-end lg:pt-20">
                <div className="bg-semantic-text p-8 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src={story.logo} alt={story.company} className="h-10 w-auto object-contain" />
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 mb-32 border border-gray-100 bg-gray-50/30 rounded-sm overflow-hidden">
            {story.results.map((res: any, idx: number) => (
                <div key={idx} className={`flex flex-col items-center text-center p-12 ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}>
                    <div className="mb-6 bg-white p-4 rounded-md shadow-sm">
                        {res.icon}
                    </div>
                    <div className="font-display text-5xl font-black text-semantic-text mb-2 tracking-tighter">
                        {res.value}
                    </div>
                    <div className="font-display font-black text-micro uppercase tracking-[0.3em] text-gray-400">
                        {res.label}
                    </div>
                </div>
            ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 mb-40">
            
            <div className="lg:col-span-8 space-y-24">
                
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-semantic-text text-white rounded-lg flex items-center justify-center font-display font-bold">1</div>
                        <h2 className="font-display text-3xl font-black text-semantic-text tracking-tight uppercase tracking-widest text-sm">La Mission</h2>
                    </div>
                    <div className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12 border-l-4 border-ocobo-mint pl-8">
                        {story.mission.intro}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {story.mission.objectives.map((obj: string, i: number) => (
                            <div key={i} className="p-6 bg-white border border-gray-100 rounded-md flex items-start gap-4">
                                <Check size={18} className="text-semantic-success shrink-0 mt-1" />
                                <p className="text-sm font-bold text-gray-700">{obj}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 bg-semantic-text text-white rounded-lg flex items-center justify-center font-display font-bold">2</div>
                        <h2 className="font-display text-3xl font-black text-semantic-text tracking-tight uppercase tracking-widest text-sm">L'Architecture du projet</h2>
                    </div>
                    
                    <div className="space-y-10 relative">
                        <div className="absolute left-[2.4rem] top-10 bottom-10 w-px border-l-2 border-dashed border-gray-200"></div>

                        {story.phases.map((phase: any, idx: number) => (
                            <div key={idx} className="relative pl-24 group">
                                <div className="absolute left-0 top-0 w-20 h-20 bg-white border-2 border-ocobo-dark rounded-3xl flex items-center justify-center font-display text-3xl font-black group-hover:bg-semantic-text group-hover:text-white transition-colors duration-500 shadow-xl z-10">
                                    0{idx+1}
                                </div>
                                <div className="p-10 bg-white border border-gray-100 rounded-sm group-hover:border-ocobo-dark transition-all duration-500 hover:shadow-2xl">
                                    <h3 className="font-display text-2xl font-bold mb-4">{phase.title}</h3>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-8">{phase.desc}</p>
                                    <ul className="space-y-4">
                                        {phase.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-semantic-success mt-1.5 shrink-0"></div>
                                                <span className="text-gray-600 text-sm font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="feedback" className="pt-20 border-t border-gray-100">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-10 h-10 bg-semantic-text text-white rounded-lg flex items-center justify-center font-display font-bold">3</div>
                        <h2 className="font-display text-3xl font-black text-semantic-text tracking-tight uppercase tracking-widest text-sm">Le Retour d'Expérience</h2>
                    </div>

                    <div className="space-y-20">
                        {story.interview.map((item: any, idx: number) => (
                            <div key={idx} className="relative">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="w-8 h-px bg-semantic-primary"></div>
                                    <h4 className="font-display text-xl font-bold text-semantic-text leading-tight max-w-xl">
                                        {item.q}
                                    </h4>
                                </div>
                                <div className="relative pl-12">
                                    <Quote size={24} className="absolute left-0 top-0 text-semantic-primary opacity-40" />
                                    <p className="text-lg text-gray-500 leading-relaxed font-medium italic">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-10 bg-gray-50 rounded-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-32 h-32 rounded-lg overflow-hidden grayscale border-4 border-white shadow-xl rotate-3">
                            <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-display text-2xl font-black text-semantic-text mb-1">{story.name}</p>
                            <p className="text-micro font-black text-semantic-success uppercase tracking-[0.3em] mb-4">{story.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                "La collaboration avec Ocobo nous a permis de franchir un cap critique dans notre architecture revenue."
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-10">
                    <div className="bg-white border border-gray-100 p-10 rounded-sm shadow-sm">
                        <h4 className="font-display font-black text-micro uppercase tracking-[0.4em] text-semantic-text mb-8">Process & Outils</h4>
                        
                        <div className="space-y-8">
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-10 bg-gray-50 rounded-sm flex items-center justify-center text-semantic-text">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-micro font-black text-gray-400 uppercase tracking-widest">DURÉE</p>
                                    <p className="text-sm font-bold text-semantic-text">{story.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-10 bg-gray-50 rounded-sm flex items-center justify-center text-semantic-text">
                                    <Users size={18} />
                                </div>
                                <div>
                                    <p className="text-micro font-black text-gray-400 uppercase tracking-widest">ÉQUIPE</p>
                                    <p className="text-sm font-bold text-semantic-text">{story.team}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-10 h-10 bg-gray-50 rounded-sm flex items-center justify-center text-semantic-text">
                                    <Cpu size={18} />
                                </div>
                                <div>
                                    <p className="text-micro font-black text-gray-400 uppercase tracking-widest">TECH STACK</p>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {story.tools.map((tool: string) => (
                                            <span key={tool} className="text-micro font-bold bg-white border border-gray-100 px-2 py-0.5 rounded text-gray-500">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-semantic-text p-10 rounded-sm text-white relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-semantic-success/10 rounded-full blur-3xl"></div>
                        <h4 className="font-display font-black text-micro uppercase tracking-[0.4em] text-white/40 mb-8">Livrables de la mission</h4>
                        
                        <ul className="space-y-5">
                            {story.livrables.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 bg-white/10 p-1 rounded group-hover:bg-semantic-success transition-colors">
                                        <Check size={12} className="text-semantic-success group-hover:text-semantic-text" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-300 leading-snug group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-micro font-black text-gray-400 uppercase tracking-widest mb-4">Parlons de vos projets</p>
                            <Link to="/contact">
                                <button className="w-full py-4 bg-white text-semantic-text font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-semantic-success transition-all shadow-xl flex items-center justify-center gap-2 group">
                                    Prendre RDV <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-semantic-primary p-12 md:p-24 rounded-sm text-center text-semantic-text relative overflow-hidden shadow-hero">
             <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
             <div className="relative z-10 max-w-3xl mx-auto">
                <span className="font-display font-black text-xs uppercase tracking-[0.4em] mb-8 inline-block opacity-40">Votre futur système</span>
                <h2 className="font-display text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">Votre machine revenue mérite une architecture d'élite.</h2>
                <div className="flex justify-center">
                    <Link to="/contact">
                        <Button variant="primary" className="px-14 py-6 text-lg bg-semantic-text text-white border-none shadow-lg hover:scale-105 transition-transform">
                            Démarrer mon audit RevOps
                        </Button>
                    </Link>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default StoryDetail;