
import React from 'react';
import { Linkedin, Youtube, ArrowRight } from 'lucide-react';
// Changed import from 'react-router-dom' to 'react-router' to fix missing export errors
import { Link } from 'react-router';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocobo-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-gray-800 pb-12">
          
          {/* Brand & Social - Aligned Left */}
          <div className="flex flex-col items-start space-y-6">
            <img 
                src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo_full-white.svg" 
                alt="Ocobo Logo" 
                className="h-10 w-auto object-contain" 
            />
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ocobofr/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-ocobo-dark transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@Ocobo-Revenue" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-ocobo-dark transition-all duration-300">
                <Youtube size={16} />
              </a>
            </div>
            <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-ocobo-dark transition-all">
              Prendre RDV <ArrowRight className="ml-2 w-3 h-3" />
            </Link>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-display font-bold mb-6 text-gray-400 text-sm uppercase tracking-wider">Ocobo</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-ocobo-yellow transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/jobs" className="hover:text-ocobo-yellow transition-colors">Nous rejoindre</Link></li>
            </ul>
          </div>

          {/* Links 2 - UPDATED TO METHODE */}
          <div>
            <h4 className="font-display font-bold mb-6 text-gray-400 text-sm uppercase tracking-wider">Méthode</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/method" className="hover:text-ocobo-yellow transition-colors">The Revenue Experience System</Link></li>
              <li><Link to="/technology" className="hover:text-ocobo-yellow transition-colors">Technologie</Link></li>
              <li><Link to="/studio" className="hover:text-ocobo-yellow transition-colors">Le RevOps Studio</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold mb-6 text-gray-400 text-sm uppercase tracking-wider">Ne manquez pas nos actualités</h4>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full bg-white text-ocobo-dark px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ocobo-yellow"
                />
                <button type="button" className="absolute right-1 top-1 bottom-1 bg-ocobo-dark text-white text-xs px-3 rounded hover:bg-gray-800 transition-colors">
                  S'inscrire
                </button>
              </div>
            </form>
            <div className="mt-6 flex items-center text-sm text-gray-400">
              <span className="mr-2">🇫🇷</span> Français
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>2025 © Ocobo - Tous droits réservés</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
