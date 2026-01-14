import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  showArrow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  showArrow = true, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group";
  
  const variants = {
    primary: "bg-semantic-text text-white hover:bg-gray-800 border border-transparent",
    outline: "bg-transparent text-semantic-text border border-semantic-text hover:bg-semantic-text hover:text-white",
    white: "bg-white text-semantic-text hover:bg-gray-100 border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;