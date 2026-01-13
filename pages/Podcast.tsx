
import React, { useState } from 'react';
// Added missing Linkedin icon to imports from 'lucide-react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Calendar, Clock, ArrowRight, ExternalLink, Search, Filter, Headphones, Share2, Star, Linkedin } from 'lucide-react';
import Button from '../components/Button';

const Podcast: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const episodes = [
    {
      id: 1,
      number: "42",
      title: "L'art de l'architecture RevOps : Scaler sans casser",
      guest: "Benjamin Boileux",
      role: "CEO @ Ocobo",
      duration: "45 min",
      date: "15 Jan 2024",
      description: "Comment passer d'un CRM 'poubelle' à une infrastructure de données qui soutient réellement la croissance. Pourquoi l'architecture doit précéder l'outil.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
      category: "Architecture"
    },
    {
      id: 2,
      number: "41",
      title: "Le Customer Success Ops : L'arme secrète de la rétention",
      guest: "Marie Piquemil",
      role: "VP Operations @ Combo",
      duration: "38 min",
      date: "02 Jan 2024",
      description: "Pourquoi le RevOps ne s'arrête pas au closing. Focus sur l'onboarding et l'expansion. Comment structurer la donnée post-sale.",
      image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Marie%20Piquemil.jpg",
      category: "CS Ops"
    },
    {
      id: 3,
      number: "40",
      title: "Aligner Marketing & Sales : Mythe ou réalité ?",
      guest: "Arnaud Meunier",
      role: "CSO @ ePack Hygiène",
      duration: "42 min",
      date: "18 Dec 2023",
      description: "Retour d'expérience sur une transformation RevOps complète après une phase d'hypercroissance. Les clés de l'alignement stratégique.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      category: "Alignement"
    },
    {
        id: 4,
        number: "39",
        title: "La Data Revenue : Du chaos au cockpit de pilotage",
        guest: "Luciana Collinet",
        role: "VP Revenue @ Jus Mundi",
        duration: "52 min",
        date: "05 Dec 2023",
        description: "Comment construire des dashboards que le board utilise vraiment pour prendre des décisions. L'importance de la Single Source of Truth.",
        image: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Luciana%20Collinet.jpg",
        category: "Data"
    }
  ];

  const filteredEpisodes = episodes.filter(e => 
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.guest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* HERO SECTION - REVENUE ECHOES BRANDING */}
      <section className="pt-48 pb-24 md:pt-64 md:pb-32 bg-semantic-text relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-12 h-px bg-semantic-primary"></span>
                        <span className="font-display font-black text-semantic-primary text-micro uppercase tracking-[0.4em]">Ocobo Originals</span>
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                        Revenue<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Echoes.</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
                        Le podcast qui déconstruit la science du revenu avec ceux qui la bâtissent au quotidien.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-3 px-6 py-3 bg-white text-semantic-text rounded-full font-bold text-xs uppercase tracking-widest hover:bg-semantic-primary transition-colors group">
                            <Headphones size={18} /> S'abonner
                        </button>
                        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full grayscale opacity-50">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="h-5 w-auto" alt="Spotify" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-5 w-auto invert" alt="Apple" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Deezer_logo.svg" className="h-4 w-auto invert" alt="Deezer" />
                        </div>
                    </div>
                </div>

                {/* SPOTLIGHT PLAYER CARD */}
                <div className="lg:w-1/2">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-lg relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-semantic-primary/10 rounded-full blur-3xl"></div>
                        
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg shrink-0 border-2 border-white/10">
                                <img src={episodes[0].image} className="w-full h-full object-cover" alt="Current Episode" />
                            </div>
                            <div>
                                <span className="text-micro font-black text-semantic-primary uppercase tracking-[0.3em] block mb-2">Dernier Épisode — #{episodes[0].number}</span>
                                <h3 className="font-display text-2xl font-bold text-white leading-tight">{episodes[0].title}</h3>
                            </div>
                        </div>

                        {/* Player Controls Mockup */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-semantic-primary"></div>
                                </div>
                                <div className="flex justify-between text-micro font-bold text-gray-500 uppercase tracking-widest">
                                    <span>12:45</span>
                                    <span>{episodes[0].duration}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-10">
                                <button className="text-white/40 hover:text-white transition-colors"><SkipBack size={24} /></button>
                                <button 
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-20 h-20 bg-semantic-primary text-semantic-text rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all"
                                >
                                    {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                                </button>
                                <button className="text-white/40 hover:text-white transition-colors"><SkipForward size={24} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FILTER BAR - SEARCH ONLY */}
      <section className="sticky top-[80px] z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-6">
          <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative w-full group">
                  <input 
                    type="text" 
                    placeholder="Rechercher un épisode, un invité, un sujet..." 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-full text-base focus:outline-none focus:border-ocobo-dark focus:bg-white transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-semantic-text transition-colors" />
              </div>
          </div>
      </section>

      {/* EPISODES LIST - ONE BY ONE */}
      <section className="max-w-5xl mx-auto px-4 py-24">
          <div className="flex flex-col gap-10">
              {filteredEpisodes.length > 0 ? filteredEpisodes.map((ep) => (
                  <div key={ep.id} className="group relative flex flex-col md:flex-row gap-10 p-8 bg-white border border-gray-100 rounded-sm hover:shadow-hero hover:-translate-y-2 transition-all duration-500">
                      {/* Architectural Number Overlay */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-white border border-gray-100 rounded-sm shadow-lg flex items-center justify-center font-display font-black text-semantic-text/20 text-xl z-20">
                          {ep.number}
                      </div>

                      <div className="md:w-1/3 aspect-[4/3] relative overflow-hidden rounded-lg shrink-0">
                          <img 
                            src={ep.image} 
                            alt={ep.guest} 
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-semantic-text/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-semantic-text shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                                  <Play size={24} fill="currentColor" className="ml-1" />
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col justify-between py-2 flex-grow">
                          <div>
                              <div className="flex items-center gap-3 mb-4">
                                  <span className="text-micro font-black uppercase tracking-[0.2em] text-semantic-primary">{ep.category}</span>
                                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                  <span className="text-micro font-black uppercase tracking-[0.2em] text-gray-400">{ep.date}</span>
                              </div>
                              <h3 className="font-display text-3xl font-bold text-semantic-text mb-4 leading-tight group-hover:text-black transition-colors">{ep.title}</h3>
                              <p className="text-base text-gray-500 mb-8 font-medium leading-relaxed max-w-2xl">{ep.description}</p>
                          </div>

                          <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full overflow-hidden grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all border border-gray-100">
                                      <img src={ep.image} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                      <p className="text-xs font-black text-semantic-text uppercase tracking-widest leading-none mb-1">{ep.guest}</p>
                                      <p className="text-micro font-medium text-gray-400 uppercase tracking-widest">{ep.role}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-2 text-gray-300">
                                  <Clock size={14} />
                                  <span className="text-micro font-black uppercase tracking-widest">{ep.duration}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              )) : (
                <div className="text-center py-20 bg-gray-50 rounded-sm border border-dashed border-gray-200">
                    <p className="text-gray-400 font-display font-bold text-xl">Aucun épisode trouvé pour cette recherche.</p>
                    <button onClick={() => setSearchTerm('')} className="mt-4 text-semantic-text font-black uppercase tracking-widest text-micro underline">Réinitialiser la recherche</button>
                </div>
              )}
          </div>

          <div className="mt-20 flex justify-center">
              <Button variant="outline" className="px-12 py-4 text-xs font-black uppercase tracking-widest border-2">Voir tous les épisodes</Button>
          </div>
      </section>

      {/* HOST SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl grayscale">
                  <img src="https://placehold.co/200x200/F3F4F6/212323?text=AC" alt="Host" />
              </div>
              <h2 className="font-display text-3xl font-bold text-semantic-text mb-4">Animé par Aude Cadiot</h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8 italic">
                "Ma mission avec Revenue Echoes est de mettre en lumière les architectures de revenus qui fonctionnent, loin des buzzwords et des recettes miracles."
              </p>
              <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-semantic-text transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-semantic-text transition-colors"><Share2 size={20} /></a>
              </div>
          </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-semantic-primary py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <span className="font-display font-black text-semantic-text opacity-30 text-xs uppercase tracking-[0.4em] mb-8 inline-block">Prochainement</span>
              <h2 className="font-display text-5xl md:text-7xl font-black text-semantic-text mb-10 leading-[0.9] tracking-tighter">
                Ne manquez plus aucun<br/>écho stratégique.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button variant="primary" className="px-14 py-6 text-lg bg-semantic-text text-white border-none shadow-lg">
                      S'abonner à la newsletter
                  </Button>
                  <Button variant="outline" className="px-10 py-6 text-lg border-ocobo-dark text-semantic-text border-2 bg-transparent">
                      Nous suggérer un invité
                  </Button>
              </div>
          </div>
          
          {/* Decorative architectural shapes */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10">
              <Star size={180} strokeWidth={1} />
          </div>
      </section>
    </div>
  );
};

export default Podcast;
