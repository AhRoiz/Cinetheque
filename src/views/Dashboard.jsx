import React, { useMemo, useState } from 'react';
import { 
  BookOpen, Film, Tv, ArrowDownUp, TrendingUp, Heart, Clock 
} from 'lucide-react'; 
import CommonStyles from '../components/GlobalStyles';
import { authorProfile } from '../data/store';

export default function Dashboard({ 
  entries, 
  onFilmClick, 
  onProfileClick, 
  activeCategory,    
  setActiveCategory  
}) {
  const [sortBy, setSortBy] = useState('newest');

  // Logic Filtering & Sorting
  const filteredEntries = useMemo(() => {
    let result = entries.filter(e => e.category === activeCategory);
    result.sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'impact') return b.impactScore - a.impactScore;
      if (sortBy === 'emotion') return b.emotionalWeight - a.emotionalWeight;
      return 0;
    });
    return result;
  }, [activeCategory, sortBy, entries]);

  // Logic Analytics
  const analytics = useMemo(() => {
    const total = entries.length;
    const avgScore = Math.round(entries.reduce((acc, curr) => acc + curr.impactScore, 0) / total);
    const moods = entries.map(e => e.mood);
    const topMood = moods.sort((a,b) => moods.filter(v => v===a).length - moods.filter(v => v===b).length).pop();
    return { total, avgScore, topMood };
  }, [entries]);

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-300 font-sans">
      <CommonStyles />

      <header className="fixed top-0 w-full z-50 bg-[#0c0a09]/80 backdrop-blur-md border-b border-stone-900/50 animate-dash-down">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="font-editorial text-xl tracking-wide text-stone-200">Arsip Film</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-600">Jurnal Reflektif Pribadi</p>
          </div>
          <div className="flex gap-6 items-center">
            <BookOpen size={18} className="text-stone-500 cursor-pointer hover:text-stone-300 transition-colors" />
            <button 
              onClick={onProfileClick}
              className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 overflow-hidden hover:border-amber-700 transition-colors"
            >
               <img src={authorProfile.avatar} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO INTRO */}
        <div className="mb-12 animate-enter-up delay-100 text-center md:text-left">
          <p className="font-editorial text-3xl md:text-5xl text-stone-200 leading-tight mb-4">
            Film bukan sekadar tontonan,<br />
            tapi <span className="text-amber-700/80 italic">cermin</span> bagaimana pikiranmu berevolusi.
          </p>
        </div>

        {/* ANALYTICS DASHBOARD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-enter-up delay-200">
           <div className="p-4 bg-stone-900/30 border border-stone-800 rounded-lg hover:border-amber-900/30 transition-colors">
              <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-widest mb-1">
                 <Film size={12} /> Total Logged
              </div>
              <div className="text-2xl font-editorial text-stone-200">{analytics.total}</div>
           </div>
           <div className="p-4 bg-stone-900/30 border border-stone-800 rounded-lg hover:border-amber-900/30 transition-colors">
              <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-widest mb-1">
                 <TrendingUp size={12} /> Avg Resonance
              </div>
              <div className="text-2xl font-editorial text-stone-200">{analytics.avgScore}</div>
           </div>
           <div className="p-4 bg-stone-900/30 border border-stone-800 rounded-lg hover:border-amber-900/30 transition-colors">
              <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-widest mb-1">
                 <Heart size={12} /> Top Mood
              </div>
              <div className="text-2xl font-editorial text-stone-200">{analytics.topMood}</div>
           </div>
           <div className="p-4 bg-stone-900/30 border border-stone-800 rounded-lg hover:border-amber-900/30 transition-colors">
              <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-widest mb-1">
                 <Clock size={12} /> Hours
              </div>
              <div className="text-2xl font-editorial text-stone-200">{authorProfile.stats.hoursWatched}h</div>
           </div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-stone-900 py-6 gap-6 animate-enter-up delay-300">
           <div className="flex gap-4">
              {['film', 'anime'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${
                    activeCategory === cat 
                    ? 'bg-stone-200 text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                    : 'bg-stone-900/50 text-stone-500 hover:text-stone-300 border border-stone-800'
                  }`}
                >
                  {cat === 'film' ? <Film size={12} /> : <Tv size={12} />} {cat.toUpperCase()}
                </button>
              ))}
           </div>
           
           <div className="flex items-center gap-4 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-2"><ArrowDownUp size={12} /> Sort by:</span>
              {['newest', 'impact', 'emotion'].map(sort => (
                 <button 
                   key={sort}
                   onClick={() => setSortBy(sort)}
                   className={`hover:text-amber-500 transition-colors uppercase ${sortBy === sort ? 'text-amber-500 underline underline-offset-4 decoration-amber-900/50' : ''}`}
                 >
                   {sort}
                 </button>
              ))}
           </div>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-stone-800 via-stone-800 to-transparent transform md:-translate-x-1/2 animate-enter-up delay-500"></div>

          <div className="space-y-24">
            {filteredEntries.map((film, index) => (
              <div 
                key={film.id} 
                onClick={() => onFilmClick(film)}
                className={`group relative flex flex-col md:flex-row gap-10 items-center cursor-pointer ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-enter-up`}
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#0c0a09] border-2 border-stone-700 rounded-full transform -translate-x-2 md:-translate-x-2 group-hover:border-amber-500 group-hover:bg-amber-900 transition-all duration-500 z-10 shadow-[0_0_10px_#000]"></div>

                {/* Date */}
                <div className={`hidden md:block w-1/2 text-center px-10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="font-mono text-xs text-stone-500 group-hover:text-amber-500/80 transition-colors tracking-widest">{film.watchedDate}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <div className={`flex gap-6 items-start transition-transform duration-500 group-hover:-translate-y-1 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Poster Thumb (UPDATED) */}
                    <div className="w-24 h-36 flex-shrink-0 overflow-hidden rounded-md shadow-[0_0_15px_rgba(0,0,0,0.5)] ring-1 ring-stone-800 group-hover:ring-amber-500/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-500">
                      <img 
                        src={film.poster} 
                        alt={film.title}
                        // Grayscale dihapus, poster sekarang berwarna penuh
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                      />
                    </div>

                    {/* Text */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : ''} flex-1`}>
                      <h2 className="font-editorial text-2xl text-stone-200 group-hover:text-amber-100 transition-colors duration-300 mb-1">
                        {film.title}
                      </h2>
                      <div className="flex items-center gap-3 mb-3 text-xs text-stone-500 font-medium">
                        <span>{film.year}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-700"></span>
                        <span>{film.director}</span>
                      </div>
                      
                      <p className="text-sm text-stone-400 font-light leading-relaxed line-clamp-2 mb-3 group-hover:text-stone-300 transition-colors">
                        {film.shortReflection}
                      </p>

                      <div className="flex items-center gap-3">
                         <div className="px-2 py-1 bg-stone-900/80 border border-stone-800 rounded text-[10px] uppercase tracking-widest text-amber-500/80 group-hover:bg-amber-900/20 group-hover:border-amber-900/50 transition-colors">
                            {film.mood}
                         </div>
                         <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                               <div key={i} className={`w-1 h-1 rounded-full ${i < Math.round(film.impactScore / 20) ? 'bg-amber-600' : 'bg-stone-800'}`}></div>
                            ))}
                         </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center pb-12">
             <div className="w-px h-20 bg-gradient-to-b from-stone-800 to-transparent mx-auto mb-4"></div>
             <p className="text-xs uppercase tracking-widest text-stone-700">End of Archive</p>
          </div>
        </div>
      </main>
    </div>
  );
}