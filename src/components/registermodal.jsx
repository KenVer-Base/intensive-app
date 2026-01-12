import React from 'react';

export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Admin kami akan segera menghubungi Anda via WhatsApp.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl text-blue-600">edit_note</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Daftar Sekarang</h3>
          <p className="text-slate-500">Isi data diri untuk konsultasi program.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Siswa</label>
            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Kelas / Jenjang</label>
            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
              <option>SD</option>
              <option>SMP</option>
              <option>SMA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Program Diminati</label>
            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
              <option>Bahasa Inggris</option>
              <option>Matematika</option>
              <option>Fisika</option>
              <option>Lainnya</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
            Kirim Data
          </button>
        </form>
      </div>
    </div>
  );
}