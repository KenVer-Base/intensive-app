import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-2">Intensive Bimbingan Belajar</h4>
          <p className="text-sm text-slate-500">Membantu siswa meraih prestasi sejak dini.</p>
        </div>
        <div className="flex gap-4">
          <button className="text-sm text-brand-400 hover:text-brand-300 flex items-center gap-1">
            <span className="material-symbols-outlined text-base">code</span> Made with React & Tailwind
          </button>
        </div>
        <div className="text-sm text-slate-600">
          © 2026 Intensive Bimbel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}