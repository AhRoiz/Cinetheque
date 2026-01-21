import React from 'react';
import { ChevronLeft, Feather, Film, Disc, Clock } from 'lucide-react';
import CommonStyles from '../components/GlobalStyles';
import { Badge } from '../components/UI';
import { authorProfile } from '../data/store';

export default function Profile({ onBack }) {
    return (
      <div className="min-h-screen bg-[#0c0a09] text-stone-300 font-sans">
        <CommonStyles />
        
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-stone-500 hover:text-amber-500 transition-colors duration-500 mb-16 animate-enter-right delay-100"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
            <span className="text-xs uppercase tracking-[0.2em]">Kembali ke Dashboard</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left animate-enter-up delay-200">
               <div className="relative w-64 h-80 mb-8 overflow-hidden rounded-sm bg-stone-900 shadow-2xl ring-1 ring-stone-800">
                  <img 
                    src={authorProfile.avatar} 
                    alt={authorProfile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/20 pointer-events-none"></div>
               </div>
               
               <h1 className="font-editorial text-4xl text-stone-100 mb-2">{authorProfile.name}</h1>
               <p className="text-stone-500 text-sm uppercase tracking-widest mb-6">{authorProfile.handle}</p>
               
               <div className="w-full border-t border-stone-800 pt-6 mt-2 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block font-editorial text-2xl text-stone-200">{authorProfile.stats.totalLogged}</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600">Films</span>
                  </div>
                  <div>
                    <span className="block font-editorial text-2xl text-stone-200">{authorProfile.stats.hoursWatched}</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600">Hours</span>
                  </div>
                  <div>
                    <span className="block font-editorial text-2xl text-stone-200">{authorProfile.stats.avgResonance}</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600">Avg Impact</span>
                  </div>
               </div>
            </div>

            <div className="md:col-span-7 space-y-12 animate-enter-up delay-300">
               <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-700/80 mb-2">
                    <Feather size={14} /> The Manifesto
                  </h3>
                  <p className="font-editorial text-2xl md:text-3xl leading-relaxed text-stone-400 italic">
                    "{authorProfile.manifesto}"
                  </p>
               </div>

               <div className="h-px bg-stone-900 w-full"></div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                        <Film size={14} /> Top Directors
                     </h4>
                     <ul className="space-y-3">
                        {authorProfile.dna.topDirectors.map(director => (
                           <li key={director} className="text-stone-300 font-reading border-l-2 border-stone-800 pl-3 hover:border-amber-700 transition-colors cursor-default">
                              {director}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="space-y-4">
                     <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                        <Disc size={14} /> Current Obsessions
                     </h4>
                     <div className="flex flex-wrap gap-2">
                        {authorProfile.dna.obsessions.map(item => (
                           <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                     </div>
                  </div>
               </div>
               
               <div className="p-6 bg-stone-900/30 border border-stone-800/50 rounded-sm">
                  <div className="flex items-start gap-4">
                     <Clock size={20} className="text-stone-600 mt-1" />
                     <div>
                        <h4 className="text-sm font-medium text-stone-300 mb-1">Favorite Era</h4>
                        <p className="text-stone-500 text-sm">{authorProfile.dna.favoriteEra}</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
}