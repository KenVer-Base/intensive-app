import React from 'react';

export default function Hero({ onOpenRegister }) {
  const scrollToSubjects = () => {
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Classroom Atmosphere" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-800/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-800 border border-brand-700 text-brand-200 text-sm font-semibold mb-8">
          <span className="material-symbols-outlined text-sm">school</span>
          SD / SMP / SMA
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          INTENSIVE <span className="text-brand-300">Bimbingan Belajar</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Belajar Bersama Tutor yang <span className="font-semibold text-white">Berpengalaman</span> dan <span className="font-semibold text-white">Profesional</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={scrollToSubjects} className="bg-white text-brand-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
            Lihat Program
            <span className="material-symbols-outlined">arrow_downward</span>
          </button>
          <button onClick={onOpenRegister} className="bg-brand-600 text-white border border-brand-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-brand-900/50">
            <span className="material-symbols-outlined">radio_button_unchecked</span>
            Hubungi Kami
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full leading-none z-10">
        <svg className="block w-full h-12 md:h-24 text-slate-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}