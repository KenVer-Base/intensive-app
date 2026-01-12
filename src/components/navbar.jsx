import React, { useState } from 'react';

export default function Navbar({ onOpenRegister }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-500/30">I</div>
            <div>
              <span className="font-bold text-xl tracking-tight text-brand-900 block leading-none">INTENSIVE</span>
              <span className="text-xs font-semibold text-brand-500 tracking-wider">BIMBINGAN BELAJAR</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
            <a href="#home" className="hover:text-brand-600 transition-colors">Beranda</a>
            <a href="#subjects" className="hover:text-brand-600 transition-colors">Program</a>
            <a href="#tutors" className="hover:text-brand-600 transition-colors">Tentor</a>
            <a href="#location" className="hover:text-brand-600 transition-colors">Lokasi</a>
            <button onClick={onOpenRegister} className="bg-brand-600 text-white px-6 py-2.5 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">how_to_reg</span> Daftar Sekarang
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-600 p-2">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4 font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-brand-600 py-2">Beranda</a>
            <a href="#subjects" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-brand-600 py-2">Program</a>
            <a href="#tutors" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-brand-600 py-2">Tentor</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-brand-600 py-2">Lokasi</a>
            <button onClick={() => { onOpenRegister(); setIsOpen(false); }} className="bg-brand-600 text-white w-full py-3 rounded-xl font-bold">Daftar Sekarang</button>
          </div>
        </div>
      )}
    </nav>
  );
}