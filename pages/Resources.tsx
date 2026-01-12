
import React, { useState } from 'react';
import { Mic, Video, BookOpen, Play, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'podcast' | 'webinar' | 'blog'>('all');

  const resources = [
    {
      id: 1,
      type: 'podcast',
      slug: 'scaler-equipe-sales',
      title: 'Ep. 42 : Comment scaler son équipe Sales sans chaos',
      guest: 'Jean de Qonto',
      duration: '45 min',
      image: 'https://picsum.photos/400/300?grayscale&random=10',
      date: '12 Oct 2024',
      tag: 'Stratégie'
    },
    {
      id: 2,
      type: 'blog',
      slug: 'comprendre-et-structurer-une-equipe-RevOps-modeles-stades-de-maturite',
      title: 'Comprendre et structurer une équipe RevOps : modèles et stades de maturité',
      readTime: '12 min de lecture',
      image: 'https://picsum.photos/400/300?grayscale&random=11',
      date: '10 Oct 2024',
      tag: 'Organisation'
    },
    {
      id: 3,
      type: 'webinar',
      slug: 'nettoyer-crm-5-etapes',
      title: 'Masterclass : Nettoyer son CRM en 5 étapes',
      status: 'Replay disponible',
      image: 'https://picsum.photos/400/300?grayscale&random=12',
      date: '05 Oct 2024',
      tag: 'Data'
    },
    {
      id: 4,
      type: 'blog',
      slug: 'revops-vs-salesops',
      title: 'RevOps vs Sales Ops : Quelles différences ?',
      readTime: '5 min de lecture',
      image: 'https://picsum.photos/400/300?grayscale&random=13',
      date: '28 Sep 2024',
      tag: 'Organisation'
    },
    {
      id: 5,
      type: 'podcast',
      slug: 'alignement-marketing-sales-payfit',
      title: 'Ep. 41 : L\'alignement Marketing-Sales chez PayFit',
      guest: 'Marie de PayFit',
      duration: '38 min',
      image: 'https://picsum.photos/400/300?grayscale&random=14',
      date: '20 Sep 2024',
      tag: 'Alignement'
    },
     {
      id: 6,
      type: 'webinar',
      slug: 'live-qa-commissionnement',
      title: 'Live Q&A : Vos questions sur le commissionnement',
      status: 'Prochainement',
      image: 'https://picsum.photos/400/300?grayscale&random=15',
      date: '15 Nov 2024',
      tag: 'Compensation'
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(r => r.type === activeTab);

  return (
    <div className="w-full pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 border-b border-gray-200 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <span className="font-display font-bold text-ocobo-coral uppercase tracking-widest text-sm mb-2 block">RevOps Library</span>
                <h1 className="font-display text-5xl font-bold text-ocobo-dark mb-6">Explorez la science du revenu.</h1>
                <p className="text-xl text-gray-600 font-medium">
                    Articles, interviews et masterclasses pour structurer votre croissance.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
                {[
                    { id: 'all', label: 'Tout voir' },
                    { id: 'podcast', label: 'Podcast', icon: <Mic size={14} /> },
                    { id: 'webinar', label: 'Webinars', icon: <Video size={14} /> },
                    { id: 'blog', label: 'Articles', icon: <BookOpen size={14} /> }
                ].map(tab => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
                            activeTab === tab.id 
                            ? 'bg-ocobo-dark text-white border-ocobo-dark' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Featured Resource (First item) */}
        {activeTab === 'all' && (
            <div className="mb-16">
                <div className="group relative rounded-3xl overflow-hidden bg-ocobo-dark text-white grid md:grid-cols-2 shadow-2xl">
                    <div className="relative overflow-hidden h-64 md:h-auto">
                        <img 
                            src="https://picsum.photos/800/600?grayscale&random=99" 
                            alt="Featured" 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocobo-dark/90 to-transparent md:bg-gradient-to-r"></div>
                    </div>
                    <div className="p-10 md:p-16 flex flex-col justify-center items-start">
                        <span className="bg-ocobo-yellow text-ocobo-dark px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6">À la une</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 group-hover:text-ocobo-yellow transition-colors">
                            The Revenue Experience System™ : Le Framework complet
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Découvrez notre méthodologie propriétaire pour aligner vos équipes et scaler vos revenus. Un guide complet de 40 pages.
                        </p>
                        <Button variant="white" className="border-none">Télécharger le guide</Button>
                    </div>
                </div>
            </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredResources.map((item) => (
                <Link 
                    key={item.id} 
                    to={item.type === 'blog' ? `/blog/${item.slug}` : item.type === 'webinar' ? `/webinar/${item.slug}` : `/resources`}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    <div className="relative overflow-hidden mb-5 border border-gray-100 aspect-[4/3]">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ocobo-dark flex items-center gap-2 shadow-sm">
                            {item.type === 'podcast' && <Mic size={12} />}
                            {item.type === 'webinar' && <Video size={12} />}
                            {item.type === 'blog' && <BookOpen size={12} />}
                            {item.type}
                        </div>

                        {/* Play Button Overlay */}
                        {(item.type === 'podcast' || item.type === 'webinar') && (
                            <div className="absolute inset-0 flex items-center justify-center bg-ocobo-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-ocobo-dark shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Play fill="currentColor" size={24} className="ml-1" />
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                        <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                            <span>{item.tag}</span>
                            <span>{item.date}</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-ocobo-coral transition-colors leading-tight">
                            {item.title}
                        </h3>
                        
                        <div className="mt-auto pt-4 flex items-center text-sm font-medium text-gray-500 border-t border-gray-100">
                             {item.guest ? (
                                 <span>Invité : <span className="text-ocobo-dark">{item.guest}</span></span>
                             ) : (
                                 <span>{item.readTime || item.status}</span>
                             )}
                             <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-ocobo-dark" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Newsletter / Community Section */}
        <div className="mt-32 border-t-2 border-ocobo-dark pt-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display text-4xl font-bold mb-6">Rejoignez le cercle des architectes RevOps.</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Pas de spam. Juste des playbooks, des templates et des retours d'expérience concrets. Une fois par mois.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                         <input 
                            type="email" 
                            placeholder="votre@email.com"
                            className="flex-grow px-6 py-4 bg-gray-50 border border-gray-200 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all placeholder-gray-400"
                        />
                        <Button className="whitespace-nowrap">S'inscrire</Button>
                    </div>
                </div>
                <div className="bg-ocobo-yellowLight p-10 border border-ocobo-yellow/20 relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-ocobo-dark"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-ocobo-dark"></div>
                    <h3 className="font-display text-2xl font-bold mb-4">Dernier playbook envoyé :</h3>
                    <div className="bg-white p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="w-12 h-12 bg-ocobo-mint/20 text-ocobo-mint flex items-center justify-center font-bold text-xl">
                            <span className="font-display">%</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-ocobo-dark">Modèle de Variable Sales 2024</h4>
                            <p className="text-sm text-gray-500 mt-1">Template GSheet + Guide de calcul</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Resources;
