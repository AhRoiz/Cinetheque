import React, { useMemo } from 'react';
import { ArrowLeft, Tag } from 'lucide-react';
import CommonStyles from '../components/GlobalStyles';

export default function TagExplorer({ tag, entries, onBack, onFilmClick }) {
  
  const tagFilteredEntries = useMemo(() => {
    if (!tag) return [];
    return entries.filter(e => e.tags.includes(tag));
  }, [tag, entries]);

  return (
      <div className="min-h-screen bg-[#0c0a09] text-stone-300 font-sans">
        <CommonStyles />
        
        <div className="sticky top-0 z-50 px-6 py-4 bg-[#0c0a09]/90 backdrop-blur-md border-b border-stone-900 flex justify-between items-center animate-dash-down">
           <button onClick={onBack} className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors text-xs uppercase tracking-widest">
              <ArrowLeft size={14} /> Back to Journal
           </button>
           <div className="text-[10px] uppercase tracking-widest text-stone-600">
              Exploring Tag
           </div>
        </div>

        <main className="max-w-5xl mx-auto px-6 py-20">
           <div className="mb-16 text-center animate-enter-up delay-100">
              <span className="inline-block p-3 rounded-full bg-stone-900 mb-4 border border-stone-800">
                 <Tag size={24} className="text-amber-500" />
              </span>
              <h1 className="font-editorial text-4xl md:text-5xl text-stone-100 mb-4">
                 {tag}
              </h1>
              <p className="text-stone-500 text-sm uppercase tracking-widest">
                 {tagFilteredEntries.length} Entries found in Archive
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-enter-up delay-200">
              {tagFilteredEntries.map(film => (
                 <div 
                   key={film.id}
                   onClick={() => onFilmClick(film)}
                   className="group bg-stone-900/30 border border-stone-800 rounded-lg overflow-hidden cursor-pointer hover:border-amber-900/50 transition-all duration-500"
                 >
                    <div className="flex">
                       <div className="w-1/3 aspect-[2/3] relative overflow-hidden">
                          <img 
                            src={film.poster} 
                            alt={film.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                          />
                       </div>
                       <div className="w-2/3 p-6 flex flex-col justify-center">
                          <h3 className="font-editorial text-xl text-stone-200 mb-2 group-hover:text-amber-100 transition-colors">
                             {film.title}
                          </h3>
                          <p className="text-xs text-stone-500 mb-4">{film.year} • {film.director}</p>
                          <p className="text-sm text-stone-400 line-clamp-2 mb-4 italic font-serif">
                             "{film.shortReflection}"
                          </p>
                          <div className="flex items-center gap-2 mt-auto">
                             <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                   <div key={i} className={`w-1 h-1 rounded-full ${i < Math.round(film.impactScore / 20) ? 'bg-amber-600' : 'bg-stone-800'}`}></div>
                                ))}
                             </div>
                             <span className="text-[10px] uppercase tracking-widest text-stone-600 ml-2">{film.mood}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </main>
      </div>
  );
}