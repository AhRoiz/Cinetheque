import React from 'react';

export default function CommonStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Libre+Baskerville:ital@0;1&display=swap');
      .font-editorial { font-family: 'Playfair Display', serif; }
      .font-reading { font-family: 'Libre Baskerville', serif; }
      .text-glow { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
      
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes scaleIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
      @keyframes slideInRight { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
      @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      
      .animate-enter-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
      .animate-enter-fade { animation: fadeIn 1s ease-out forwards; }
      .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
      .animate-enter-right { animation: slideInRight 0.6s ease-out forwards; opacity: 0; }
      .animate-dash-down { animation: slideDown 0.8s ease-out forwards; opacity: 0; }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-500 { animation-delay: 500ms; }
    `}</style>
  );
}