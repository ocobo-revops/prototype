import React, { useState } from 'react';
import Button from '../components/Button';
import { Check, ArrowRight, Calendar, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    teamSize: '',
    source: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Un architecte Ocobo va étudier votre demande.");
  };

  return (
    <div className="w-full pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-ocobo-yellow rounded-full filter blur-[100px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Copy */}
          <div className="lg:w-1/2 pt-10">
            <div className="sticky top-32">
              <span className="font-display font-bold text-ocobo-coral uppercase tracking-widest text-sm mb-4 block">
                Première consultation
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-ocobo-dark mb-8 leading-tight">
                Parlez à un architecte.<br/>
                <span className="text-gray-400">Pas à un vendeur.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                En 30 minutes, nous analysons la maturité de votre machine revenue et identifions vos leviers de croissance immédiats.
              </p>

              <div className="space-y-8">
                 <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-ocobo-mint-light text-ocobo-mint rounded-xl flex items-center justify-center shrink-0 group-hover:bg-ocobo-mint group-hover:text-white transition-colors duration-300">
                        <Check strokeWidth={3} size={20} />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-bold text-ocobo-dark">Audit flash</h3>
                        <p className="text-sm text-gray-600">Diagnostic rapide de vos processus actuels et de votre stack.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-ocobo-sky-light text-ocobo-sky rounded-xl flex items-center justify-center shrink-0 group-hover:bg-ocobo-sky group-hover:text-white transition-colors duration-300">
                        <MessageSquare strokeWidth={3} size={20} />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-bold text-ocobo-dark">Clarté radicale</h3>
                        <p className="text-sm text-gray-600">Recommandations stratégiques immédiates, sans jargon.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-ocobo-yellow-light text-ocobo-yellow rounded-xl flex items-center justify-center shrink-0 group-hover:bg-ocobo-yellow group-hover:text-white transition-colors duration-300">
                        <Calendar strokeWidth={3} size={20} />
                    </div>
                    <div>
                        <h3 className="font-display text-lg font-bold text-ocobo-dark">Zéro engagement</h3>
                        <p className="text-sm text-gray-600">Un échange entre pairs pour valider la pertinence d'une collaboration.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocobo-yellow via-ocobo-coral to-ocobo-sky"></div>
              
              <h3 className="font-display text-2xl font-bold mb-8 text-ocobo-dark">
                  Dites-nous en plus sur vos enjeux
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 mb-2">E-mail professionnel*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all placeholder-gray-300"
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase text-gray-500 mb-2">Prénom*</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase text-gray-500 mb-2">Nom*</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs font-bold uppercase text-gray-500 mb-2">Intitulé du poste*</label>
                  <input
                    type="text"
                    name="role"
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all"
                    value={formState.role}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-xs font-bold uppercase text-gray-500 mb-2">Taille de l'équipe Revenue*</label>
                  <select
                    name="teamSize"
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all appearance-none cursor-pointer"
                    value={formState.teamSize}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Sélectionnez...</option>
                    <option value="1-5">1-5 personnes</option>
                    <option value="6-20">6-20 personnes</option>
                    <option value="21-50">21-50 personnes</option>
                    <option value="50+">+50 personnes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="source" className="block text-xs font-bold uppercase text-gray-500 mb-2">Comment nous avez-vous connus ?</label>
                  <input
                    type="text"
                    name="source"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-100 focus:border-ocobo-dark focus:bg-white focus:ring-0 outline-none transition-all"
                    value={formState.source}
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-6">
                    <Button type="submit" className="w-full py-4 text-base bg-ocobo-dark hover:bg-black text-white shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        Prendre rendez-vous
                    </Button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        En cliquant, vous acceptez d'être recontacté par l'équipe Ocobo.
                    </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;