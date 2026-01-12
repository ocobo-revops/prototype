
import React, { useState, useEffect } from 'react';
import { Mail, X, ArrowRight, Sparkles } from 'lucide-react';

const NewsletterWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[110] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {!isExpanded ? (
        <div className="relative group">
          {/* Bouton de fermeture rapide (X) sur le badge réduit */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white text-ocobo-dark rounded-full flex items-center justify-center shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-ocobo-coral hover:text-white"
            title="Ne plus afficher"
          >
            <X size={12} strokeWidth={3} />
          </button>

          <button 
            onClick={() => setIsExpanded(true)}
            className="bg-ocobo-dark text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 hover:border-ocobo-yellow/50 transition-all"
          >
            <div className="relative">
              <Mail size={20} className="text-ocobo-yellow" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-ocobo-coral rounded-full animate-pulse"></span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] pr-2">La Lettre de l'Architecte</span>
          </button>
        </div>
      ) : (
        <div className="bg-ocobo-dark text-white p-6 rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 w-[320px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-ocobo-yellow"></div>
          
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>

          <div className="mb-6 mt-2">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-ocobo-yellow" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-ocobo-yellow">Newsletter Mensuelle</span>
            </div>
            <h4 className="font-display text-lg font-bold leading-tight mb-2">La science du revenu, <br/>directement dans votre boîte.</h4>
            <p className="text-[11px] text-gray-400 font-medium">Rejoignez 2 000+ leaders. <br/>Pas de spam, juste de l'architecture.</p>
          </div>

          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsDismissed(true); }}>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-ocobo-yellow transition-all placeholder:text-gray-600"
            />
            <button 
              type="submit"
              className="w-full bg-ocobo-yellow text-ocobo-dark py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition-all group"
            >
              S'inscrire <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <button 
            onClick={() => { setIsDismissed(true); }}
            className="w-full mt-4 text-[9px] font-bold text-gray-600 hover:text-gray-400 uppercase tracking-widest transition-colors"
          >
            Masquer définitivement
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterWidget;
