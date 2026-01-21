import React, { useState } from 'react';
import { 
  Clock, Lock, ChevronLeft, Quote, Brain, Feather, Heart, Star, Sparkles, ArrowLeft, 
  RefreshCw, Zap, User, Eye, EyeOff
} from 'lucide-react';
import CommonStyles from '../components/GlobalStyles';
import { Badge, MetricBar, ContextItem } from '../components/UI';

export default function FilmDetail({ activeFilm, onBack, onTagClick }) {
  const [isPrivateMode, setIsPrivateMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900/40 selection:text-amber-100">
        <CommonStyles />

        {/* Ambient Backdrop */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#0c0a09]" />
            <div 
              className="absolute inset-0 opacity-40 mix-blend-screen transition-all duration-1000 animate-enter-fade"
              style={{
                backgroundImage: `url(${activeFilm.poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(80px) saturate(150%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/95 to-[#0c0a09]/70" />
        </div>

        {/* Sticky Header Navigation */}
        <div className="sticky top-0 z-50 px-6 py-4 bg-[#0c0a09]/80 backdrop-blur-md border-b border-stone-800/50 flex justify-between items-center animate-enter-fade">
           <button onClick={onBack} className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors text-xs uppercase tracking-widest">
              <ArrowLeft size={14} /> Back
           </button>
           
           <button 
             onClick={() => setIsPrivateMode(!isPrivateMode)}
             className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] uppercase tracking-widest transition-all ${
               isPrivateMode 
               ? 'border-amber-600 bg-amber-900/20 text-amber-400 shadow-[0_0_10px_rgba(180,83,9,0.2)]' 
               : 'border-stone-800 text-stone-500 hover:text-stone-300'
             }`}
           >
             {isPrivateMode ? <EyeOff size={12} /> : <Eye size={12} />}
             {isPrivateMode ? 'Private Vault' : 'Public View'}
           </button>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
          
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4 animate-enter-up delay-100">
              <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-stone-800 group">
                <img 
                  src={activeFilm.poster} 
                  alt={activeFilm.title} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                   <Star size={12} className="text-amber-500 fill-amber-500" />
                   <span className="text-xs font-mono text-white">{activeFilm.impactScore}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col justify-end animate-enter-up delay-200">
              <div className="mb-6">
                 <div className="flex flex-wrap gap-3 mb-4">
                    {activeFilm.tags.map(tag => (
                      <Badge key={tag} variant="outline" onClick={() => onTagClick(tag)}>{tag}</Badge>
                    ))}
                 </div>
                 <h1 className="font-editorial text-5xl md:text-7xl text-stone-100 leading-tight mb-2 drop-shadow-lg">
                    {activeFilm.title}
                 </h1>
                 <p className="font-reading text-stone-400 italic text-lg">
                    {activeFilm.originalTitle} <span className="mx-2 text-stone-600">•</span> {activeFilm.year}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-5 bg-stone-900/40 border border-stone-800/60 rounded-lg backdrop-blur-sm">
                 <ContextItem icon={User} label="Director" value={activeFilm.director} />
                 <ContextItem icon={Clock} label="Duration" value={activeFilm.duration} />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12 animate-enter-up delay-300">
              <div className="relative pl-8 border-l-2 border-amber-700/50">
                <Quote size={32} className="absolute -left-4 -top-4 text-amber-900/80 bg-[#0c0a09] p-1" />
                <p className="font-editorial italic text-2xl md:text-3xl text-stone-200 leading-relaxed">
                  "{activeFilm.quote}"
                </p>
              </div>

              {isPrivateMode && activeFilm.privateNotes && (
                <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-sm relative overflow-hidden animate-scale-in">
                   <div className="absolute top-0 left-0 w-1 h-full bg-red-900/50"></div>
                   <div className="flex items-center gap-2 mb-3 text-red-400/80 uppercase tracking-widest text-xs font-bold">
                      <Lock size={12} /> Brutal Honest Opinion
                   </div>
                   <p className="font-reading text-stone-300 italic">
                      "{activeFilm.privateNotes}"
                   </p>
                </div>
              )}

              <div className="prose prose-invert prose-stone max-w-none">
                <h3 className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-6 flex items-center gap-3">
                  <Feather size={16} /> Journal Entry
                </h3>
                
                <div className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px]' : 'max-h-[300px]'}`}>
                   <p className="font-reading text-lg md:text-xl leading-8 text-stone-200 whitespace-pre-line">
                      {activeFilm.longReflection}
                   </p>
                   {!isExpanded && (
                     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c0a09] to-transparent pointer-events-none" />
                   )}
                </div>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-xs uppercase tracking-widest text-stone-500 hover:text-amber-500 transition-colors flex items-center gap-2"
                >
                  {isExpanded ? "Collapse Entry" : "Read Deep Dive"} <ChevronLeft size={10} className={`transform ${isExpanded ? 'rotate-90' : '-rotate-90'}`} />
                </button>
              </div>

              <div className="bg-stone-900/60 p-8 border border-stone-800/80 rounded-lg hover:border-amber-900/30 transition-all duration-500 shadow-xl">
                <h3 className="text-xs uppercase tracking-widest text-amber-500/80 mb-3 flex items-center gap-2 font-bold">
                  <Brain size={14} /> The Synthesis
                </h3>
                <p className="font-editorial text-xl text-stone-100">
                  {activeFilm.keyTakeaway}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-10 animate-enter-up delay-500">
               <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-widest text-stone-500 border-b border-stone-800 pb-2 mb-4">
                    Personal Metrics
                  </h3>
                  <MetricBar label="Impact" value={activeFilm.impactScore} icon={Zap} />
                  <MetricBar label="Rewatch Value" value={activeFilm.rewatchValue} icon={RefreshCw} color="bg-stone-500" />
                  <MetricBar label="Emotional Wgt" value={activeFilm.emotionalWeight} icon={Heart} color="bg-rose-900" />
               </div>

               {activeFilm.context && (
                 <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-stone-500 border-b border-stone-800 pb-2">
                      Viewing Context
                    </h3>
                    <div className="space-y-3">
                       <div className="flex justify-between text-sm">
                          <span className="text-stone-500">Life Phase</span>
                          <span className="text-stone-300 font-medium text-right">{activeFilm.context.lifePhase}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-stone-500">Location</span>
                          <span className="text-stone-300 text-right">{activeFilm.context.location}</span>
                       </div>
                    </div>
                 </div>
               )}

               <div className="p-6 border border-dashed border-stone-800 rounded-lg text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-stone-600 mb-2">Dominant Mood</span>
                  <div className="inline-flex items-center gap-2 text-stone-200 font-editorial text-xl">
                     <Sparkles size={18} className="text-amber-500" /> {activeFilm.mood}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
  );
}