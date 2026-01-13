import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ThemeColor } from '../types';

interface ServiceCardProps {
  title: string;
  description: string;
  theme: ThemeColor;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, theme, icon }) => {
  const themeStyles = {
    [ThemeColor.YELLOW]: {
      border: 'border-l-ocobo-yellow',
      bg: 'bg-ocobo-yellow-light',
      hover: 'group-hover:text-ocobo-yellow',
    },
    [ThemeColor.MINT]: {
      border: 'border-l-ocobo-mint',
      bg: 'bg-ocobo-mint-light',
      hover: 'group-hover:text-ocobo-mint',
    },
    [ThemeColor.SKY]: {
      border: 'border-l-ocobo-sky',
      bg: 'bg-ocobo-sky-light',
      hover: 'group-hover:text-ocobo-sky',
    },
    [ThemeColor.CORAL]: {
      border: 'border-l-ocobo-coral',
      bg: 'bg-ocobo-coral-light',
      hover: 'group-hover:text-ocobo-coral',
    },
    [ThemeColor.DARK]: {
        border: 'border-l-black',
        bg: 'bg-gray-100',
        hover: 'group-hover:text-black',
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className={`group relative p-8 h-full ${currentTheme.bg} border-l-4 ${currentTheme.border} transition-all duration-300 hover:shadow-lg flex flex-col justify-between`}>
      <div>
        <div className="mb-6">
            {icon && <div className="p-3 bg-white w-fit rounded-lg shadow-sm text-ocobo-dark">{icon}</div>}
        </div>
        <h3 className="font-display text-2xl font-bold mb-4 leading-tight text-ocobo-dark">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <div className="mt-auto">
        <span className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-ocobo-dark border-b border-transparent ${currentTheme.hover} transition-colors`}>
          En savoir plus <ArrowRight className="ml-2 w-3 h-3" />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;