
import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Play, Calendar, Clock, ArrowRight, Video, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const WebinarDetail: React.FC = () => {
  const { slug } = useParams();

  // Mock data matching the Resources page for consistency
  const webinars: Record<string, any> = {
    'nettoyer-crm-5-etapes': {
      title: "Masterclass : Nettoyer son CRM en 5 étapes",
      category: "DATA",
      date: "05 OCT 2024",
      duration: "45 min",
      youtubeId: "dQw4w9WgXcQ", // Example placeholder ID
      description: "La donnée est le carburant de votre machine revenue. Un CRM pollué par des doublons, des champs vides et des process obsolètes freine votre croissance. Dans ce webinar, nous vous montrons comment reprendre le contrôle et transformer votre CRM en actif stratégique.",
      topics: [
        "Identifier les zones de pollution de votre CRM",
        "Le dictionnaire de données : votre boussole",
        "Automatiser le nettoyage sans risque de perte",
        "Les rituels pour maintenir la qualité sur le long terme",
        "Reporting : comment mesurer l'impact de la data quality"
      ]
    },
    'live-qa-commissionnement': {
        title: "Live Q&A : Vos questions sur le commissionnement",
        category: "COMPENSATION",
        date: "15 NOV 2024",
        duration: "60 min",
        youtubeId: "dQw4w9WgXcQ",
        description: "Le plan de commissionnement est l'un des leviers les plus puissants pour orienter les comportements vers la valeur. Découvrez les réponses aux questions les plus fréquentes sur la structuration du variable.",
        topics: [
          "Choisir les bons accélérateurs",
          "Gérer les commissions sur le multi-year",
          "Aligner Sales et CS sur l'expansion",
          "Automatiser le calcul pour plus de transparence"
        ]
      }
  };

  const webinar = webinars[slug || ''] || webinars['nettoyer-crm-5-etapes'];

  return (
    <div className="w-full pt-40 pb-24 bg-white font-sans">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#212323 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-12">
          <Link to="/resources" className="inline-flex items-center text-gray-400 hover:text-ocobo-dark font-black uppercase tracking-[0.2em] text-[10px] transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Retour à la librairie
          </Link>
        </div>

        {/* Header Section */}
        <div className="max-w-4xl mb-16">
          <span className="font-display font-black text-ocobo-sky bg-ocobo-sky-light px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-8 inline-block border border-ocobo-sky/20 rounded-sm">
            WEBINAR / {webinar.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-ocobo-dark mb-8 leading-tight tracking-tight">
            {webinar.title}
          </h1>
          <div className="flex gap-8 text-[11px] font-black text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-ocobo-yellow" /> {webinar.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-ocobo-sky" /> {webinar.duration}
            </div>
          </div>
        </div>

        {/* Video Player Section */}
        <div className="mb-20">
          <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-ocobo-dark group">
            <iframe 
              src={`https://www.youtube.com/embed/${webinar.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
              title={webinar.title}
              className="absolute inset-0 w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Content Body */}
          <div className="lg:col-span-8 space-y-16">
            <div>
                <h2 className="font-display text-3xl font-black text-ocobo-dark mb-8 tracking-tight">Résumé du webinar</h2>
                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
                {webinar.description}
                </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <h3 className="font-display text-2xl font-black text-ocobo-dark mb-8">Au programme :</h3>
                <ul className="space-y-6">
                {webinar.topics.map((topic: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-5 group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-ocobo-sky shrink-0 shadow-sm group-hover:bg-ocobo-sky group-hover:text-white transition-all">
                            <CheckCircle2 size={14} />
                        </div>
                        <span className="text-lg font-bold text-ocobo-dark group-hover:text-black transition-colors">{topic}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
                <div className="p-10 bg-ocobo-dark rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-ocobo-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h4 className="font-display text-2xl font-black mb-6 leading-tight">Prêt à transformer votre machine revenue ?</h4>
                    <p className="text-gray-400 font-medium mb-10 leading-relaxed text-sm">
                        Nos architectes RevOps vous accompagnent dans l'audit et l'assainissement de vos systèmes pour libérer votre croissance.
                    </p>
                    <Link to="/contact" className="block">
                        <Button variant="white" className="w-full !py-4 text-[10px] font-black uppercase tracking-widest border-none hover:bg-ocobo-sky hover:text-white transition-all">
                        Réserver mon audit flash
                        </Button>
                    </Link>
                    
                    <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-ocobo-dark bg-gray-600 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                                </div>
                            ))}
                        </div>
                        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none">
                            +100 architectes <br/> déjà engagés
                        </span>
                    </div>
                </div>

                {/* Related Resource link */}
                <div className="mt-8 p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all group cursor-pointer">
                    <span className="text-[8px] font-black text-ocobo-coral uppercase tracking-widest mb-2 block">Dernier Article</span>
                    <h5 className="font-display text-lg font-bold text-ocobo-dark group-hover:text-ocobo-yellow transition-colors leading-tight">
                        Pourquoi votre reporting HubSpot est faux (et comment le réparer)
                    </h5>
                    <div className="mt-4 flex items-center text-[10px] font-black text-gray-300 group-hover:text-ocobo-dark transition-colors uppercase tracking-[0.2em]">
                        Lire l'article <ArrowRight size={14} className="ml-2" />
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Footer Area with more webinars */}
        <div className="mt-40 pt-20 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-display text-3xl font-black text-ocobo-dark">Autres masterclasses</h3>
            <Link to="/resources" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-ocobo-dark transition-colors flex items-center gap-2">
                Tout voir <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2].map(i => (
                <div key={i} className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100 relative shadow-sm">
                        <img src={`https://picsum.photos/600/400?grayscale&random=${i+60}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Related" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-ocobo-dark opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                                <Play fill="currentColor" size={16} />
                            </div>
                        </div>
                    </div>
                    <span className="font-display font-black text-[9px] uppercase tracking-[0.2em] text-ocobo-sky mb-3 block">WEBINAR</span>
                    <h4 className="font-display text-xl font-black text-ocobo-dark mb-4 group-hover:text-ocobo-sky transition-colors leading-tight">
                        Scaling des flux Data : les secrets des leaders SaaS
                    </h4>
                    <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 gap-2">
                        <div className="flex items-center gap-1 group-hover:text-ocobo-dark transition-colors">
                            Voir le replay <ArrowRight size={12} />
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

export default WebinarDetail;
