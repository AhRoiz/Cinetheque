import React, { useState, useEffect } from 'react';

export const Badge = ({ children, variant = "outline", onClick, active }) => {
  const variants = {
    outline: active 
      ? "border-amber-600 bg-amber-900/30 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]" 
      : "border-stone-800 text-stone-400 hover:border-stone-600 hover:text-stone-200", 
    accent: "border-amber-900/50 text-amber-500 bg-amber-900/10",
    mood: "bg-stone-900 border border-stone-800 text-stone-300"
  };
  return (
    <span 
      onClick={onClick} 
      className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full font-medium border transition-all duration-300 cursor-pointer ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export const AnimatedScore = ({ score, label }) => {
  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    setDisplayScore(0);
    const timer = setTimeout(() => setDisplayScore(score), 400);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-1 group cursor-default">
        <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#292524" strokeWidth="2" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray={`${displayScore}, 100`} className="transition-all duration-1000 ease-out" />
        </svg>
        <span className="absolute text-xl font-editorial italic text-stone-100">{displayScore}</span>
        </div>
        {label && <span className="text-[10px] uppercase tracking-widest text-stone-400">{label}</span>}
    </div>
  );
};

export const MetricBar = ({ label, value, icon: Icon, color = "bg-amber-700" }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(0);
        const timer = setTimeout(() => setWidth(value), 600);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end text-xs">
                <span className="flex items-center gap-2 text-stone-300 uppercase tracking-widest font-medium"> 
                    {Icon && <Icon size={12} className="text-stone-500" />} {label}
                </span>
                <span className="font-mono text-stone-400">{value}/100</span>
            </div>
            <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden border border-stone-700/50">
                <div className={`h-full ${color} rounded-full transition-all duration-1000 ease-out shadow-lg`} style={{ width: `${width}%` }} />
            </div>
        </div>
    )
}

export const ContextItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 text-sm group">
    <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 group-hover:text-amber-500 group-hover:border-amber-900/50 transition-colors">
      <Icon size={14} />
    </div>
    <div>
      <span className="block text-[10px] uppercase tracking-widest text-stone-500">{label}</span>
      <span className="text-stone-200 font-medium">{value}</span>
    </div>
  </div>
);