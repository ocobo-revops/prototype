
import React from 'react';
import Button from '../components/Button';
import { ArrowRight, Star, MapPin, Briefcase, GraduationCap, Phone, Video, Settings, PenTool, Users, CheckCircle, Lightbulb, Play, Quote, Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const VideoStoryCard = ({ episode, title, pitch, consultant, role, quote, icon, videoThumb }: any) => {
  return (
    <div className="flex flex-col gap-4 group">
      {/* Title Header */}
      <div className="flex items-center gap-2 px-1">
        <span className="text-white text-base">🎬</span>
        <h4 className="font-display font-black text-white text-sm md:text-base tracking-tight">
          Ocobo Stories — Épisode {episode}
        </h4>
      </div>

      {/* Pitch Box */}
      <div className="bg-[#2D2F2F] p-5 rounded-2xl border border-white/5 min-h-[90px] flex items-start gap-4">
        <span className="text-xl shrink-0">{icon}</span>
        <p className="text-gray-300 text-xs md:text-sm font-medium leading-snug">
          {pitch}
        </p>
      </div>

      {/* Video Placeholder Card */}
      <div className="relative aspect-[9/16] w-full rounded-md overflow-hidden bg-gray-800 border border-white/5 shadow-lg group-hover:shadow-ocobo-yellow/10 transition-all duration-500">
        <img 
          src={videoThumb} 
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
          alt={consultant} 
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-semantic-text transition-all duration-500 shadow-lg">
                <Play fill="currentColor" size={28} className="ml-1" />
            </div>
        </div>
        
        {/* Logo Overlay top left (as seen in screenshot) */}
        <div className="absolute top-6 left-6 w-10 h-10 border-2 border-white rounded-full flex items-center justify-center opacity-80">
            <div className="w-6 h-6 border-r-2 border-white rounded-full"></div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-1 mt-2">
        <h5 className="text-white font-black text-base mb-1">{consultant}</h5>
        <p className="text-gray-500 italic text-sm mb-4 font-medium">{role}</p>
        
        <div className="relative pl-4 border-l border-white/20">
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              "{quote}"
            </p>
        </div>
      </div>
    </div>
  );
};

const Jobs: React.FC = () => {
  const stories = [
    {
      episode: "1",
      icon: "💡",
      pitch: "Pourquoi rejoindre Ocobo ? Un terrain de jeu, une méthode, une équipe.",
      consultant: "Domitille",
      role: "RevOps Manager",
      quote: "Un vrai gain de temps dans l’évolution de sa carrière grâce à la variété des sujets que l’on traite",
      videoThumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      episode: "2",
      icon: "🧑‍💻",
      pitch: "À quoi ressemble une journée chez Ocobo quand on fait du RevOps “pour de vrai” ?",
      consultant: "Dorian",
      role: "RevOps Manager",
      quote: "On est en permanence challengé par la dimension premium que l’on vient délivrer chez nos clients",
      videoThumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      episode: "3",
      icon: "💥",
      pitch: "De l’impact dès le début ! Cadrage clair & intégration a une squad avec des expert·e·s.",
      consultant: "Ethel",
      role: "RevOps Manager",
      quote: "Comment avoir de l’autonomie? Grâce à l’équilibre parfait entre cadre et autonomie ! On a également beaucoup de temps pour se former et s’entre aider",
      videoThumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const values = [
      {
          title: "Excellence Senior",
          desc: "Ici, on ne bricole pas. On architecture des systèmes robustes avec l'exigence des meilleurs standards du marché.",
          icon: <Sparkles className="text-semantic-primary" size={24} />,
          bg: "bg-semantic-primary-light",
          border: "border-ocobo-yellow"
      },
      {
          title: "Transparence Radicale",
          desc: "Pas de politique, pas de non-dits. On progresse par le feedback honnête et la remise en question permanente.",
          icon: <ShieldCheck className="text-semantic-info" size={24} />,
          bg: "bg-ocobo-sky-light",
          border: "border-ocobo-sky"
      },
      {
          title: "Impact Mesurable",
          desc: "Chaque sprint, chaque ligne de process, chaque dashboard doit créer de la valeur concrète pour nos clients.",
          icon: <Zap className="text-semantic-success" size={24} />,
          bg: "bg-ocobo-mint-light",
          border: "border-ocobo-mint"
      },
      {
          title: "Esprit de Squad",
          desc: "On ne travaille jamais seul. On partage nos blocages, nos victoires et nos apprentissages en temps réel.",
          icon: <Heart className="text-semantic-accent" size={24} />,
          bg: "bg-ocobo-coral-light",
          border: "border-ocobo-coral"
      }
  ];

  const jobs = [
    {
      id: 1,
      title: "Manager Conseil RevOps",
      type: "CDI",
      location: "Paris / Remote",
      exp: "> 7 ans",
      tag: "Senior",
      theme: "bg-semantic-primary-light border-ocobo-yellow"
    },
    {
      id: 2,
      title: "Consultant RevOps Senior",
      type: "CDI",
      location: "Paris / Remote",
      exp: "4-6 ans",
      tag: "Confirmé",
      theme: "bg-ocobo-sky-light border-ocobo-sky"
    },
    {
      id: 3,
      title: "Data Analyst Revenue",
      type: "CDI",
      location: "Paris / Remote",
      exp: "> 3 ans",
      tag: "Expert",
      theme: "bg-ocobo-mint-light border-ocobo-mint"
    }
  ];

  const processSteps = [
      { 
        title: "RH, Fit et Motivation", 
        duration: "30 min", 
        desc: "Première discussion avec le référant RH sur l’expérience professionnelle du candidat, ses motivations sur le poste et Ocobo.",
        icon: <Phone size={24} strokeWidth={1.5} /> 
      },
      { 
        title: "Hiring Manager Call", 
        duration: "45 min", 
        desc: "Première discussion avec son/sa manager RevOps pour un échange plus détaillé sur l’expérience professionnelle et les enjeux du poste.",
        icon: <Video size={24} strokeWidth={1.5} /> 
      },
      { 
        title: "Entretien Technique", 
        duration: "45 à 60 min", 
        desc: "Echange sur les compétences techniques et méthodologiques indispensables pour Ocobo.",
        icon: <Settings size={24} strokeWidth={1.5} /> 
      },
      { 
        title: "Case Study", 
        duration: "90 à 120 min", 
        desc: "Restitution du cas pratique préparé en amont auprès de tous les fondateurs afin de valider les compétences techniques.",
        icon: <Users size={24} strokeWidth={1.5} /> 
      },
      { 
        title: "Cultural Fit", 
        duration: "45 min", 
        desc: "Échange avec un collaborateur pour valider le fit avec les valeurs et l’ambition d’Ocobo et permettre au candidat de poser ses questions à un consultant RevOps Ocobo.",
        icon: <Star size={24} strokeWidth={1.5} /> 
      },
      { 
        title: "Prise de référence", 
        duration: "15 min", 
        desc: "Prise de référence auprès d'un ancien employeur.",
        icon: <CheckCircle size={24} strokeWidth={1.5} /> 
      },
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-white">
      
      {/* 1. Header & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
         <div className="flex flex-col lg:flex-row items-start gap-20">
            <div className="lg:w-1/2">
                <span className="font-display font-black text-semantic-text bg-ocobo-mint-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-10 inline-block border border-ocobo-mint/20">
                    RECRUTEMENT
                </span>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-semantic-text mb-10 leading-[0.95] tracking-tight">
                    Rejoignez les<br/>architectes.
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                    Rejoindre Ocobo, c'est intégrer une équipe d'experts issus des plus belles scale-ups (TheFork, PayFit, Qonto).
                </p>
                <div className="text-gray-600 space-y-4 leading-relaxed border-l-4 border-ocobo-yellow pl-8 py-2">
                    <p className="font-medium">
                        Ici, pas de "juniors vendus comme des seniors". Nous cherchons l'excellence opérationnelle et la capacité à comprendre les enjeux business profonds de nos clients.
                    </p>
                    <p className="text-gray-400 text-sm">
                        C'est une occasion unique d'apprendre les meilleures méthodologies RevOps et de façonner le futur de la discipline en France.
                    </p>
                </div>
            </div>
             <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-6 mt-12">
                         <div className="bg-semantic-text text-white p-8 aspect-square flex flex-col justify-between rounded-lg shadow-lg">
                             <Lightbulb size={32} className="text-semantic-primary" />
                             <span className="font-display font-bold text-xl">Intelligence Collective</span>
                         </div>
                         <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="w-full aspect-square object-cover rounded-lg grayscale" />
                     </div>
                     <div className="space-y-6">
                         <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80" className="w-full aspect-square object-cover rounded-lg grayscale" />
                         <div className="bg-semantic-primary p-8 aspect-square flex flex-col justify-between rounded-lg shadow-lg">
                             <span className="font-display font-bold text-4xl text-semantic-text">100%<br/>Impact</span>
                         </div>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* 2. OCOBO STORIES (DARK MODE) */}
      <section className="bg-semantic-text py-32 mb-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-20">
            <span className="font-display font-black text-semantic-primary bg-semantic-primary-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-8 inline-block border border-ocobo-yellow/20 rounded-full">
                SÉRIE ORIGINALE
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ocobo Stories
            </h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed">
              Immersion totale. Nos consultants racontent la réalité du Studio, leurs défis et ce qui fait d'Ocobo une aventure à part.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {stories.map((story, idx) => (
              <VideoStoryCard key={idx} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOS VALEURS / CULTURE (REINTEGRATED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-16">
          <div className="text-center mb-20">
              <span className="font-display font-black text-semantic-accent bg-ocobo-coral-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-6 inline-block border border-ocobo-coral/20 rounded-full">
                  NOTRE ADN
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-black text-semantic-text tracking-tight">Ce qui définit notre culture</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                  <div key={idx} className={`p-10 rounded-xl border ${val.border} ${val.bg} flex flex-col gap-6 hover:shadow-xl transition-all duration-500 group`}>
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-500">
                          {val.icon}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-semantic-text leading-tight">{val.title}</h3>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">{val.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* 4. Nos offres à pourvoir */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
         <div className="flex justify-between items-end mb-16">
            <div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-semantic-text tracking-tight">Postes ouverts</h2>
                <p className="text-gray-500 font-medium mt-4">Nous recherchons des architectes passionnés par la donnée et les systèmes.</p>
            </div>
            <div className="hidden md:block">
                <span className="text-micro font-black uppercase tracking-widest text-gray-300">3 OPPORTUNITÉS DISPONIBLES</span>
            </div>
         </div>
         <div className="flex flex-col gap-6">
             {jobs.map((job) => (
                 <Link key={job.id} to={`/jobs/${job.id}`} className="group">
                     <div className={`flex flex-col md:flex-row justify-between items-center p-8 md:p-12 rounded-xl border border-gray-100 bg-white hover:bg-white hover:shadow-hero transition-all duration-500 relative overflow-hidden`}>
                         {/* Hover Highlight Bar */}
                         <div className={`absolute top-0 left-0 w-1.5 h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${job.theme.split(' ')[1].replace('border-', 'bg-')}`}></div>

                         <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full">
                             <div className="md:w-5/12">
                                 <h3 className="font-display text-2xl md:text-3xl font-bold text-semantic-text group-hover:text-black transition-colors">{job.title}</h3>
                             </div>
                             
                             <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest md:w-4/12">
                                 <span className="flex items-center gap-2"><MapPin size={16} className="text-semantic-accent" /> {job.location}</span>
                                 <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">{job.type}</span>
                             </div>

                             <div className="md:w-3/12 flex justify-end items-center gap-6">
                                 <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Exp : {job.exp}</span>
                                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-semantic-text group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-12">
                                     <ArrowRight size={24} />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </Link>
             ))}
         </div>
      </section>

      {/* 5. Processus de recrutement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
          <div className="border-[1.5px] border-gray-100 rounded-xl p-8 md:p-24 bg-gray-50/30 relative overflow-hidden">
            
            <div className="text-center mb-32 relative z-10">
                <span className="font-display font-black text-semantic-info bg-ocobo-sky-light px-4 py-1.5 text-micro uppercase tracking-[0.3em] mb-6 inline-block border border-ocobo-sky/20 rounded-full">
                    TRANSPARENCE
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-semantic-text tracking-tight">Processus de recrutement</h2>
                <p className="text-gray-500 text-xl font-medium">Simple, rigoureux et bienveillant.</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
                {/* Central Line (Desktop) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                {/* Left Line (Mobile) */}
                <div className="absolute left-6 top-0 bottom-0 w-[1.5px] bg-gray-200 md:hidden"></div>

                <div className="space-y-24 relative z-10">
                    {processSteps.map((step, idx) => {
                        const isEven = idx % 2 === 0; 
                        
                        return (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Center Circle */}
                                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-[2.5px] border-ocobo-dark rounded-full z-10 -translate-x-1/2 shadow-[0_0_0_10px_#fcfcfc]"></div>

                                {/* Content Half */}
                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
                                    <div className={`flex items-start gap-8 ${isEven ? 'md:justify-start md:text-right' : 'md:justify-end md:text-left'} flex-row`}>
                                        
                                        {/* Icon Box */}
                                        <div className={`
                                            w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-semantic-text shrink-0 shadow-lg border border-gray-100
                                            ${isEven ? 'md:order-2' : 'md:order-1'}
                                            order-1 transform transition-transform group-hover:scale-110
                                        `}>
                                            {step.icon}
                                        </div>

                                        {/* Text */}
                                        <div className={`
                                            ${isEven ? 'md:order-1' : 'md:order-2'}
                                            order-2
                                        `}>
                                            <h3 className="font-display text-2xl font-bold text-semantic-text mb-2 tracking-tight">{step.title}</h3>
                                            <p className="text-micro font-black text-semantic-accent mb-3 uppercase tracking-[0.2em]">{step.duration}</p>
                                            <p className="text-base text-gray-500 leading-relaxed max-w-sm font-medium">{step.desc}</p>
                                        </div>

                                    </div>
                                </div>
                                
                                {/* Empty Half */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
          </div>
      </section>

      {/* 6. Nos Bureaux */}
      <section className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                  <div>
                      <h2 className="font-display text-4xl font-black mb-2 tracking-tight">Nos bureaux</h2>
                      <p className="text-gray-500 font-medium text-lg italic">9ème arrondissement, Paris.</p>
                  </div>
                  <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-semantic-text border-b-2 border-ocobo-yellow pb-1 hover:text-semantic-accent hover:border-ocobo-coral transition-all">
                    Voir sur Maps <ArrowRight size={14} />
                  </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[500px]">
                   <div className="col-span-2 row-span-2 relative overflow-hidden group rounded-xl">
                       <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale" />
                       <div className="absolute inset-0 bg-semantic-text/10 group-hover:bg-transparent transition-colors"></div>
                   </div>
                   <div className="relative overflow-hidden group rounded-lg">
                        <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale" />
                   </div>
                   <div className="relative overflow-hidden group rounded-lg">
                        <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale" />
                   </div>
                   <div className="col-span-2 bg-semantic-primary p-12 flex flex-col justify-center items-start rounded-xl shadow-lg">
                        <span className="font-display font-black text-3xl text-semantic-text mb-6 tracking-tight leading-tight">Venez prendre <br/>un café.</span>
                        <p className="text-lg text-semantic-text/80 font-bold leading-relaxed">On adore parler RevOps, même si vous ne cherchez pas de job tout de suite.</p>
                   </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Jobs;
