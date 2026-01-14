import React, { useState, useEffect } from 'react';
import { Users, Zap, Target, ShieldCheck, Linkedin, Star, ArrowRight, Cpu, BarChart3, Layers, GraduationCap, Hammer, Compass, MousePointer2, RefreshCw, Plus, ChevronDown, Sparkles } from 'lucide-react';
import Button from '../components/button-legacy';
import { Link } from 'react-router';

const TeamPhotoIllustration = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 group">
      <style>{`
        @keyframes float-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-float-blob {
          animation: float-blob 12s infinite ease-in-out;
        }
      `}</style>

      {/* BACKGROUND DECORATIVE SPHERES - FAVORING THE SQUAD ASPECT */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-semantic-primary/30 rounded-full blur-3xl animate-float-blob" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-semantic-success/30 rounded-full blur-3xl animate-float-blob" style={{ animationDelay: '-4s' }}></div>
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-ocobo-coral/20 rounded-full blur-3xl animate-float-blob" style={{ animationDelay: '-8s' }}></div>
          <div className="absolute top-1/4 right-0 w-56 h-56 bg-ocobo-sky/30 rounded-full blur-3xl animate-float-blob" style={{ animationDelay: '-2s' }}></div>
      </div>

      {/* PHOTO CONTAINER */}
      <div className="relative z-10 mx-auto">
        {/* Decorative corner accents */}
        <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-ocobo-dark/10 group-hover:border-ocobo-yellow transition-colors duration-700"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-ocobo-dark/10 group-hover:border-ocobo-mint transition-colors duration-700"></div>

        {/* Main Photo Card */}
        <div className="relative bg-white p-2.5 rounded-sm shadow-hero border border-gray-100 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700">
            {/* NOTE: Remplacer l'URL ci-dessous par le lien de votre photo une fois hébergée */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="L'équipe Ocobo" 
              className="w-full h-auto rounded-sm grayscale contrast-[1.1] brightness-[1.05] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Caption Badge */}
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md px-6 py-3.5 rounded-md shadow-lg flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="w-2.5 h-2.5 rounded-full bg-semantic-success animate-pulse"></div>
                <span className="font-display font-black text-xs uppercase tracking-[0.25em] text-semantic-text">La Squad Ocobo</span>
            </div>
        </div>

        {/* Floating Architectural Icons */}
        <div className="absolute -top-12 right-12 p-5 bg-white rounded-md shadow-lg transform rotate-12 animate-bounce-slow hidden md:flex border border-gray-50">
            <Sparkles className="text-semantic-primary" size={28} />
        </div>
        <div className="absolute -bottom-10 left-24 p-5 bg-semantic-text text-white rounded-md shadow-lg transform -rotate-6 animate-bounce-slow hidden md:flex" style={{ animationDelay: '1s' }}>
            <Users size={24} />
        </div>
      </div>
    </div>
  );
};

const Studio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('TOUS');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const categories = ['TOUS', 'Architecte', 'Builder', 'Expert Engineer'];

  const team = [
    {
        name: "Benjamin Boileux",
        category: "Architecte",
        role: "Associé",
        desc: "12+ ans en Ops, CRM, Product et Revenue Operations (TheFork, Tripadvisor, Yousign). Spécialiste des systèmes et du pilotage opérationnel.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-primary group-hover:text-semantic-text"
    },
    {
        name: "Aude Cadiot",
        category: "Architecte",
        role: "Associée",
        desc: "Référence française du Revenue Operations (TheFork, Spendesk). Experte du customer journey, des organisations GTM, du scaling d’équipes RevOps.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-primary group-hover:text-semantic-text"
    },
    {
        name: "Corentin Guérin",
        category: "Architecte",
        role: "Associée",
        desc: "Finance, Deloitte, Business Ops (TheFork). Spécialiste du forecasting, de la performance, des rémunérations variables et du pricing.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-primary group-hover:text-semantic-text"
    },
    {
        name: "Tony Chalencon",
        category: "Architecte",
        role: "Senior Manager",
        desc: "Expert en alignement stratégique et pilotage de grands comptes. Orienté résultats et excellence opérationnelle.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-primary group-hover:text-semantic-text"
    },
    {
        name: "Clara Lecarrie",
        category: "Architecte",
        role: "Manager",
        desc: "Spécialiste de l'expérience utilisateur et de l'optimisation des parcours de vente complexes.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-primary group-hover:text-semantic-text"
    },
    {
        name: "Louis Strauss",
        category: "Expert Engineer",
        role: "RevOps Engineer",
        desc: "Le cerveau technique derrière nos intégrations les plus poussées et nos outils propriétaires.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-semantic-success group-hover:text-semantic-text"
    },
    {
        name: "Domitille Raimbault",
        category: "Builder",
        role: "Senior RevOps Manager",
        desc: "Maîtrise les architectures CRM les plus complexes pour transformer la donnée en levier de croissance.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    },
    {
        name: "Ethel Gosset",
        category: "Builder",
        role: "Senior RevOps Manager",
        desc: "Experte en automatisation et fluidification des processus opérationnels Sales & Marketing.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    },
    {
        name: "Dorian Cutullic",
        category: "Builder",
        role: "RevOps Manager",
        desc: "Accompagne les scale-ups dans la structuration de leur stack et l'adoption des rituels RevOps.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    },
    {
        name: "Damien Robert",
        category: "Builder",
        role: "RevOps Manager",
        desc: "Spécialiste de la performance commerciale et du pilotage par la donnée fiable.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    },
    {
        name: "Mariette Baudras",
        category: "Builder",
        role: "RevOps Manager",
        desc: "Experte en Customer Success Operations et optimisation de la rétention client.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    },
    {
        name: "Yoann Boileux",
        category: "Builder",
        role: "RevOps Manager",
        desc: "Focus sur l'enablement des équipes et la création de playbooks d'exécution robustes.",
        img: "https://placehold.co/200x200/F3F4F6/F3F4F6",
        hoverClass: "group-hover:bg-ocobo-coral group-hover:text-white"
    }
  ];

  const filteredTeam = activeFilter === 'TOUS' 
    ? team 
    : team.filter(member => member.category === activeFilter);

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
      
      {/* HERO STUDIO - REIMAGINED WITH PHOTO ILLUSTRATION */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-4xl mx-auto mb-16">
              <span className="font-display font-black text-semantic-text bg-ocobo-mint-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-mint/20">
                RevOps Studio
              </span>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-semantic-text mb-10 leading-[0.95] tracking-tight">
                  Une direction Revenue Ops <br/>
                  <span className="text-semantic-success italic">embarquée.</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
                  Nous ne sommes pas une agence classique. Nous sommes <span className="font-bold">un studio d'experts seniors</span> qui s'intègrent à vos équipes pour opérer de l'intérieur.
              </p>
          </div>

          <TeamPhotoIllustration />

          <div className="flex flex-col items-center gap-12 mt-16">
              <div className="italic font-medium text-gray-400 text-sm leading-relaxed max-w-md">
                  "Nous rejoignons vos Slacks, vos rituels et nous construisons le système à vos côtés."
              </div>
              
              <Link to="/contact">
                  <Button 
                    variant="primary" 
                    className="px-16 py-5 text-xs font-bold uppercase tracking-[0.25em] shadow-lg bg-semantic-text hover:bg-black transition-all hover:-translate-y-1"
                  >
                    Discuter avec le Studio
                  </Button>
              </Link>
          </div>

          <div className="mt-16 flex justify-center w-full animate-bounce-slow">
              <ChevronDown className="text-semantic-success" size={24} strokeWidth={1.5} />
          </div>
      </section>

      {/* SECTION MODÈLE STUDIO (APPLAT NOIR) */}
      <section className="bg-semantic-text py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mb-20">
                <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">Le modèle Studio Ocobo™</h2>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                    L'agence traditionnelle est souvent trop lente et trop loin de la reality du terrain. Nous avons conçu une alternative pragmatique pour scaler vraiment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                  <div className="bg-white p-10 rounded-sm shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-semantic-text text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-semantic-success transition-colors">
                          <Users size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-semantic-text">Squad Immergée</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Nous déployons une squad pluridisciplinaire qui rejoint votre environnement de travail quotidien.
                      </p>
                  </div>
                  <div className="bg-white p-10 rounded-sm shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-semantic-text text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-semantic-info transition-colors">
                          <Zap size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-semantic-text">100% Impact</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Pas de grands rapports théoriques. Nous délivrons des briques de système prêtes à l'emploi.
                      </p>
                  </div>
                  <div className="bg-white p-10 rounded-sm shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-semantic-text text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-semantic-primary transition-colors">
                          <Target size={28} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-4 text-semantic-text">Zéro Junior</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                          Sur chaque compte, uniquement des profils seniors ayant déjà scalé des entreprises leaders.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* L'ÉQUIPE (LISTE) */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <div>
                      <h2 className="font-display text-4xl font-black mb-4 text-semantic-text tracking-tight">Votre équipe Studio</h2>
                      <p className="text-gray-500 font-medium">Des experts seniors habitués à scaler ensemble des organisations complexes.</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-micro font-black uppercase tracking-widest transition-all border ${
                                activeFilter === cat
                                ? 'bg-semantic-text text-white border-ocobo-dark shadow-lg'
                                : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-ocobo-dark hover:text-semantic-text'
                            }`}
                          >
                            {cat === 'TOUS' ? 'Tous les profils' : cat}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                  {filteredTeam.map((member, idx) => (
                      <div 
                        key={`${member.name}-${activeFilter}`} 
                        className={`group bg-white border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm ${animate ? 'animate-card-entry' : 'opacity-0'}`}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                          {/* Left trait that lights up on hover */}
                          <div className={`absolute top-0 left-0 w-1.5 h-full bg-gray-50 transition-colors duration-300 ${member.hoverClass}`}></div>

                          {/* Dynamic Badge with hover effect */}
                      <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl font-display font-black text-micro uppercase tracking-widest shadow-sm bg-gray-100 text-gray-400 transition-all duration-300 ${member.hoverClass}`}>
                          {member.category}
                      </div>

                          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-ocobo-dark transition-all duration-500 shadow-sm bg-gray-50">
                              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          </div>
                          
                          <div className="text-center">
                            <h3 className="font-display text-xl font-black text-semantic-text mb-1">{member.name}</h3>
                        <p className="text-micro font-black text-gray-400 uppercase tracking-[0.2em] mb-4 h-6 flex items-center justify-center">
                            {member.role}
                        </p>

                            <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-[4rem] font-medium">
                                {member.desc}
                            </p>

                            <div className="pt-4 border-t border-gray-50 flex items-center justify-center">
                                <a 
                                  href="#" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-gray-300 hover:text-semantic-text transition-colors"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-semantic-success py-28 text-center relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="font-display text-5xl md:text-6xl font-black text-semantic-text mb-10 leading-[0.9] tracking-tight">
                Envie d'une équipe qui agit vraiment ?
              </h2>
              <p className="text-xl text-semantic-text/70 mb-12 font-bold">
                  Évaluons ensemble la squad dont vous avez besoin pour passer au niveau supérieur.
              </p>
              <div className="flex justify-center">
                  <Link to="/contact">
                      <Button variant="primary" className="px-14 py-6 text-lg shadow-lg bg-semantic-text border-none text-white">Discuter avec le Studio</Button>
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Studio;