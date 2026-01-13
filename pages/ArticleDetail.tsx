import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
// Added missing 'Layout' icon to imports from 'lucide-react'
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, MessageSquare, ArrowRight, CheckCircle2, Layout } from 'lucide-react';
import Button from '../components/Button';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState<string>("");

  // Simulation de données d'article basées sur l'URL fournie
  const article = {
    title: "Comprendre et structurer une équipe RevOps : modèles et stades de maturité",
    category: "Organisation",
    date: "15 Janvier 2024",
    readTime: "12 min",
    author: {
      name: "Aude Cadiot",
      role: "Co-fondatrice @ Ocobo",
      image: "https://placehold.co/100x100/F3F4F6/212323?text=AC"
    },
    intro: "Le Revenue Operations (RevOps) n'est plus une option pour les entreprises qui souhaitent scaler durablement. Mais comment passer d'un CRM géré 'au mieux' à une véritable direction de l'architecture revenue ?",
    sections: [
      {
        id: "pourquoi-structurer",
        title: "Pourquoi structurer le RevOps maintenant ?",
        content: "Dans les premières phases d'une startup, le CRM est souvent le jouet du fondateur ou du premier Sales. Mais dès que l'équipe dépasse 10-15 personnes, les silos s'installent. Le Marketing envoie des leads que les Sales ne traitent pas, et le CS découvre des promesses de vente intenables."
      },
      {
        id: "stades-maturite",
        title: "Les 4 stades de maturité RevOps",
        content: "Nous avons identifié quatre grandes étapes par lesquelles passent les entreprises en croissance :",
        list: [
          "L'Ad-hoc : Réparation de bugs et gestion d'urgence.",
          "Le Tactique : Automatisation des process existants.",
          "L'Architecture : Refonte globale du système de donnée.",
          "Le Stratégique : Pilotage prédictif du revenu."
        ]
      },
      {
        id: "modeles-organisationnels",
        title: "Choisir son modèle organisationnel",
        content: "Il n'existe pas de structure unique. Selon votre business model (PLG vs SLG), votre équipe RevOps doit être rattachée soit au COO, soit au CRO, soit rester décentralisée dans chaque pôle avec une forte coordination."
      }
    ]
  };

  // Gestion du scroll pour le sommaire actif
  useEffect(() => {
    const handleScroll = () => {
      const sections = article.sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      const currentSection = sections.find((section, index) => {
        if (!section) return false;
        const nextSection = sections[index + 1];
        if (nextSection) {
          return scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop;
        }
        return scrollPosition >= section.offsetTop;
      });

      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.sections]);

  return (
    <div className="w-full bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS & TOP NAV */}
        <div className="mb-12 flex items-center justify-between">
          <Link to="/resources" className="inline-flex items-center text-gray-400 hover:text-ocobo-dark font-black uppercase tracking-widest text-[10px] transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Retour au blog
          </Link>
          <div className="flex items-center gap-4 text-gray-300">
            <Share2 size={16} />
            <span className="h-4 w-px bg-gray-200"></span>
            <button className="hover:text-ocobo-dark transition-colors"><Linkedin size={16} /></button>
            <button className="hover:text-ocobo-dark transition-colors"><Twitter size={16} /></button>
          </div>
        </div>

        {/* HERO ARTICLE */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="font-display font-bold text-ocobo-coral bg-ocobo-coral-light px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-8 inline-block border border-ocobo-coral/20">
            {article.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-10 leading-[1.05] tracking-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
                <Calendar size={14} className="text-ocobo-yellow" />
                <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock size={14} className="text-ocobo-sky" />
                <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR : SOMMAIRE */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32">
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.4em] text-ocobo-dark mb-8">Sommaire</h4>
              <nav className="space-y-4">
                {article.sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className={`block text-sm font-medium transition-all duration-300 border-l-2 pl-4 ${
                      activeSection === section.id 
                      ? 'border-ocobo-yellow text-ocobo-dark translate-x-1' 
                      : 'border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-20 p-8 bg-ocobo-dark rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-ocobo-yellow/10 rounded-full blur-2xl"></div>
                  <h5 className="font-display text-lg font-bold mb-4">Besoin d'aide pour structurer votre équipe ?</h5>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">Nos architectes vous accompagnent dans la définition de votre modèle RevOps.</p>
                  <Link to="/contact">
                      <button className="w-full py-3 bg-ocobo-yellow text-ocobo-dark font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors">Discuter avec nous</button>
                  </Link>
              </div>
            </div>
          </aside>

          {/* CONTENT AREA */}
          <article className="lg:w-3/4 max-w-3xl">
            {/* Intro text */}
            <div className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-16 italic border-l-4 border-ocobo-yellow pl-8">
              {article.intro}
            </div>

            {/* Content blocks */}
            <div className="space-y-16">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-40">
                  <h2 className="font-display text-3xl font-black text-ocobo-dark mb-8 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="prose prose-xl prose-ocobo max-w-none text-gray-600 leading-relaxed font-medium">
                    <p className="mb-6">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-4 mt-8">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-transparent hover:border-ocobo-yellow/20 transition-all">
                            <div className="mt-1 text-ocobo-yellow">
                              <CheckCircle2 size={18} />
                            </div>
                            <span className="text-gray-800 font-bold">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* AUTHOR BIO */}
            <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center gap-8 bg-gray-50/50 p-10 rounded-3xl">
                <div className="w-24 h-24 rounded-full overflow-hidden grayscale shrink-0 border-4 border-white shadow-lg">
                    <img src={article.author.image} alt={article.author.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <h4 className="font-display text-2xl font-bold text-ocobo-dark mb-1">{article.author.name}</h4>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{article.author.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        Experte en architecture de revenus et transformation opérationnelle. Aude accompagne les dirigeants à transformer leur vision en système pilotable.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <a href="#" className="text-gray-400 hover:text-ocobo-dark transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-ocobo-dark transition-colors"><MessageSquare size={20} /></a>
                    </div>
                </div>
            </div>

            {/* NEWSLETTER INTEGRATION */}
            <div className="mt-20 bg-ocobo-yellow p-10 md:p-14 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Layout size={200} strokeWidth={1} />
                </div>
                <div className="relative z-10 max-w-xl">
                    <h3 className="font-display text-3xl font-black text-ocobo-dark mb-4 italic">Le RevOps vous passionne ?</h3>
                    <p className="text-ocobo-dark/70 font-bold text-lg mb-8">
                        Rejoignez 2 000+ décideurs qui revents nos meilleures méthodologies une fois par mois.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="votre@email.com" 
                            className="flex-grow px-6 py-4 bg-white/90 focus:bg-white border-none outline-none text-ocobo-dark font-bold placeholder-gray-400 rounded-xl"
                        />
                        <button className="px-8 py-4 bg-ocobo-dark text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-black transition-all">S'inscrire</button>
                    </form>
                </div>
            </div>
          </article>
        </div>

        {/* RELATED ARTICLES */}
        <div className="mt-32 pt-20 border-t border-gray-100">
            <h3 className="font-display text-3xl font-black text-ocobo-dark mb-12">À lire ensuite</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100 border border-gray-100">
                            <img src={`https://picsum.photos/600/400?grayscale&random=${i+20}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" alt="Related" />
                        </div>
                        <span className="font-display font-bold text-[9px] uppercase tracking-widest text-ocobo-coral mb-3 block">Performance</span>
                        <h4 className="font-display text-xl font-bold text-ocobo-dark mb-4 group-hover:text-ocobo-yellow transition-colors leading-tight">
                            Comment réduire votre CAC via l'automatisation RevOps
                        </h4>
                        <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 gap-2">
                            <span>8 MIN</span>
                            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                            <div className="flex items-center gap-1 group-hover:text-ocobo-dark transition-colors">
                                Lire l'article <ArrowRight size={12} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;