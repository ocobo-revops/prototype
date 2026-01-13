
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
// Added missing ArrowRight icon to imports from 'lucide-react'
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Plus, 
  Send, 
  FileText, 
  ChevronRight,
  Share2,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';
import Button from '../components/Button';

const JobDetail: React.FC = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState<string>("mission");

  // Mock data structuré pour correspondre aux sections du blog
  const job = {
    title: "Manager Conseil RevOps",
    category: "Recrutement",
    meta: [
      { label: "Contrat", value: "CDI", icon: <Briefcase size={14} className="text-ocobo-yellow" /> },
      { label: "Lieu", value: "Paris / Remote", icon: <MapPin size={14} className="text-ocobo-sky" /> },
      { label: "Expérience", value: "> 7 ans", icon: <Clock size={14} className="text-ocobo-mint" /> },
      { label: "Éducation", value: "Master", icon: <GraduationCap size={14} className="text-ocobo-coral" /> }
    ],
    intro: "En tant que Manager Conseil RevOps, tu es la clé de voûte entre la vision stratégique de nos clients et l'excellence opérationnelle de ton équipe. Tu architectures des systèmes de croissance pour les plus belles scale-ups.",
    sections: [
      {
        id: "mission",
        title: "La Mission",
        content: "Directement rattaché(e) au COO d'Ocobo, ta mission principale est de piloter la performance et la montée en compétences d'une équipe RevOps, d'assurer le delivery et la direction de projets à fort impact, et de développer un portefeuille client via la création de valeur.",
        list: [
          "Direction de projets stratégiques (GTM Strategy, Scaling Tech Stack).",
          "Management & Coaching d'une squad de consultants RevOps seniors.",
          "Pilotage de la rentabilité et de la satisfaction client au niveau COMEX.",
          "Contribution au rayonnement méthodologique d'Ocobo (Playbooks, Assets)."
        ]
      },
      {
        id: "responsabilites",
        title: "Responsabilités",
        content: "Le scope d'intervention est large et dépendra des besoins clients. Nous accompagnons nos clients sur toute la chaîne de Revenue : de la génération de la demande à la rétention.",
        list: [
          "Cadrage et pilotage de roadmaps RevOps pluriannuelles.",
          "Animer les rituels de performance et le partage de connaissances interne.",
          "Identifier les opportunités d'Upsell et de Cross-sell stratégiques.",
          "Garantir l'intégrité de la donnée et la fiabilité du Forecast client."
        ]
      },
      {
        id: "profil",
        title: "Profil recherché",
        content: "Nous recherchons un profil hybride, capable de penser 'Système' tout en gardant une forte orientation business et humaine.",
        list: [
          "Formation Bac+5 (Grande École de Commerce ou Ingénieur).",
          "Expertise prouvée en RevOps, Sales Ops ou Conseil en stratégie.",
          "Capacité de leadership naturel et aisance relationnelle C-Level.",
          "Français courant et Anglais professionnel impératif."
        ]
      }
    ],
    contact: {
      name: "Aude Cadiot",
      role: "Co-fondatrice @ Ocobo",
      image: "https://placehold.co/100x100/F3F4F6/212323?text=AC",
      bio: "Aude est la référente RevOps chez Ocobo. Elle accompagne la structuration des équipes et la montée en compétence des talents du Studio."
    }
  };

  // Gestion du scroll pour le sommaire actif (copié de ArticleDetail)
  useEffect(() => {
    const handleScroll = () => {
      const sections = [...job.sections.map(s => s.id), "apply"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [job.sections]);

  return (
    <div className="w-full bg-white pt-32 pb-24 font-sans">
      {/* Blueprint background pattern ultra-léger */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS & TOP NAV (Style Blog) */}
        <div className="mb-12 flex items-center justify-between">
          <Link to="/jobs" className="inline-flex items-center text-gray-400 hover:text-ocobo-dark font-black uppercase tracking-widest text-[10px] transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Retour aux offres
          </Link>
        </div>

        {/* HERO OFFRE (Style Blog) */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="font-display font-bold text-ocobo-yellow bg-ocobo-yellow-light px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-8 inline-block border border-ocobo-yellow/20">
            {job.category}
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-black text-ocobo-dark mb-10 leading-[1.05] tracking-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black text-gray-400 uppercase tracking-widest">
            {job.meta.map((m, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2 bg-gray-50/50 border border-gray-100 rounded-full">
                    {m.icon}
                    <span className="text-ocobo-dark">{m.value}</span>
                </div>
            ))}
          </div>
        </div>

        {/* MAIN LAYOUT (Style Blog) */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* SIDEBAR : SOMMAIRE (Style Blog) */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32">
              <h4 className="font-display font-black text-[10px] uppercase tracking-[0.4em] text-ocobo-dark mb-8">Navigation</h4>
              <nav className="space-y-4">
                {job.sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className={`flex items-center justify-between py-2 text-xs font-black uppercase tracking-[0.3em] transition-all border-l-2 pl-6 ${
                      activeSection === section.id 
                      ? 'border-ocobo-yellow text-ocobo-dark translate-x-2' 
                      : 'border-gray-50 text-gray-300 hover:text-ocobo-dark'
                    }`}
                  >
                    {section.title}
                    {activeSection === section.id && <ChevronRight size={14} className="text-ocobo-yellow" />}
                  </a>
                ))}
                <a 
                  href="#apply"
                  className={`flex items-center justify-between py-2 text-xs font-black uppercase tracking-[0.3em] transition-all border-l-2 pl-6 ${
                    activeSection === "apply" 
                    ? 'border-ocobo-yellow text-ocobo-dark translate-x-2' 
                    : 'border-gray-50 text-ocobo-yellow hover:text-ocobo-dark'
                  }`}
                >
                  Postuler
                  {activeSection === "apply" && <ChevronRight size={14} className="text-ocobo-yellow" />}
                </a>
              </nav>

              {/* BOX SIDEBAR (Style Blog) */}
              <div className="mt-20 p-8 bg-ocobo-dark rounded-2xl text-white relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-ocobo-yellow/10 rounded-full blur-2xl"></div>
                  <h5 className="font-display text-lg font-bold mb-4">Pourquoi nous rejoindre ?</h5>
                  <ul className="space-y-4 mb-8">
                      {[
                          "Management 100% Senior",
                          "Culture du feedback radical",
                          "Équipe issue des tops scale-ups",
                          "Impact GTM direct"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <Plus size={12} className="text-ocobo-yellow shrink-0 mt-0.5" />
                            {benefit}
                        </li>
                      ))}
                  </ul>
                  <a href="#apply">
                      <button className="w-full py-3 bg-ocobo-yellow text-ocobo-dark font-black text-[10px] uppercase tracking-widest rounded-lg hover:bg-white transition-colors">Postuler maintenant</button>
                  </a>
              </div>
            </div>
          </aside>

          {/* CONTENT AREA (Style Blog) */}
          <article className="lg:w-3/4 max-w-3xl">
            {/* Intro text (Style Blog) */}
            <div className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-16 italic border-l-4 border-ocobo-yellow pl-8">
              {job.intro}
            </div>

            {/* Content blocks (Style Blog) */}
            <div className="space-y-24">
              {job.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-40">
                  <h2 className="font-display text-3xl font-black text-ocobo-dark mb-8 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="prose prose-xl prose-ocobo max-w-none text-gray-600 leading-relaxed font-medium">
                    <p className="mb-10">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-4 mt-8">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-5 p-6 bg-gray-50/50 rounded-xl border border-transparent hover:border-ocobo-yellow/20 hover:bg-white transition-all group">
                            <div className="mt-1 text-gray-200 group-hover:text-ocobo-yellow transition-colors">
                              <CheckCircle2 size={20} />
                            </div>
                            <span className="text-ocobo-dark font-bold text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* BIOGRAPHIE CONTACT (Style Blog Author Bio) */}
            <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center gap-8 bg-gray-50/50 p-10 rounded-3xl">
                <div className="w-24 h-24 rounded-full overflow-hidden grayscale shrink-0 border-4 border-white shadow-lg">
                    <img src={job.contact.image} alt={job.contact.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <h4 className="font-display text-2xl font-bold text-ocobo-dark mb-1">{job.contact.name}</h4>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{job.contact.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        {job.contact.bio}
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <a href="#" className="text-gray-400 hover:text-ocobo-dark transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-ocobo-dark transition-colors"><MessageSquare size={20} /></a>
                    </div>
                </div>
            </div>

            {/* FORMULAIRE CANDIDATURE (Style Newsletter Blog) */}
            <div id="apply" className="mt-24 bg-ocobo-yellow p-10 md:p-14 rounded-xl relative overflow-hidden shadow-lg scroll-mt-40">
                {/* Motif architectural discret */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                    <FileText size={200} strokeWidth={1} />
                </div>
                
                <div className="relative z-10">
                    <h2 className="font-display text-4xl font-black text-ocobo-dark mb-4 tracking-tight">Prêt(e) pour l'impact ?</h2>
                    <p className="text-ocobo-dark/70 font-bold text-lg mb-12 max-w-xl">
                        Envoie-nous ton profil. On ne cherche pas des exécutants, mais des architectes du revenu.
                    </p>
                    
                    <form className="space-y-8 max-w-2xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-ocobo-dark opacity-50">Prénom Nom*</label>
                                <input type="text" className="w-full bg-white/90 focus:bg-white border-none outline-none text-ocobo-dark font-bold p-4 rounded-xl placeholder-gray-300" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-ocobo-dark opacity-50">Email Pro*</label>
                                <input type="email" className="w-full bg-white/90 focus:bg-white border-none outline-none text-ocobo-dark font-bold p-4 rounded-xl placeholder-gray-300" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-ocobo-dark opacity-50">Lien LinkedIn*</label>
                                <input type="url" className="w-full bg-white/90 focus:bg-white border-none outline-none text-ocobo-dark font-bold p-4 rounded-xl placeholder-gray-300" placeholder="https://linkedin.com/in/..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-ocobo-dark opacity-50">Ton CV (PDF)*</label>
                            <div className="border-2 border-dashed border-ocobo-dark/10 p-10 text-center bg-white/40 rounded-2xl hover:bg-white transition-all cursor-pointer group">
                                <FileText className="mx-auto mb-3 text-ocobo-dark/20 group-hover:text-ocobo-dark transition-colors" size={32} />
                                <p className="text-[10px] font-black uppercase tracking-widest text-ocobo-dark/40 group-hover:text-ocobo-dark transition-colors">Dépose ton fichier ou clique ici</p>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-ocobo-dark text-white font-black uppercase tracking-[0.4em] text-[11px] rounded-xl hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 group">
                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                            Envoyer ma candidature
                        </button>
                    </form>
                </div>
            </div>

            {/* RELATED JOBS (Style Related Articles Blog) */}
            <div className="mt-32 pt-20 border-t border-gray-100">
                <h3 className="font-display text-3xl font-black text-ocobo-dark mb-12">Autres opportunités</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Consultant RevOps Senior", exp: "Confirmé", type: "CDI" },
                        { title: "Revenue Data Analyst", exp: "Expert", type: "CDI" }
                    ].map((other, i) => (
                        <div key={i} className="group p-8 border border-gray-100 bg-white hover:border-ocobo-yellow hover:shadow-xl transition-all rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[9px] font-black uppercase tracking-widest text-ocobo-coral bg-ocobo-coral-light px-2 py-0.5 border border-ocobo-coral/10">{other.exp}</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">{other.type}</span>
                            </div>
                            <h4 className="font-display text-2xl font-black text-ocobo-dark mb-6 group-hover:text-ocobo-yellow transition-colors leading-tight">
                                {other.title}
                            </h4>
                            <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 gap-2">
                                <div className="flex items-center gap-1 group-hover:text-ocobo-dark transition-colors">
                                    Voir l'offre <ArrowRight size={12} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
