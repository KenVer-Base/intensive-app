import React from 'react';

const tutorsData = [
  {
    name: "Dwi Kartika Chandra, S.Pd",
    subject: "Matematika & Fisika",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Astry Fajrin Hidayaty, S.Pd., Gr.",
    subject: "Bahasa Inggris",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Meutia Eka Tirtasary, M.Pd",
    subject: "Bahasa Jepang",
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nila Zulfa, S.Pd",
    subject: "Membaca & Mengetik",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80"
  },
];

export default function Tutors() {
  return (
    <section id="tutors" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kenalan dengan Tentor Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tim pengajar profesional yang siap membimbing siswa mencapai prestasi terbaik.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorsData.map((tutor, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-brand-300 to-brand-600">
                <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover rounded-full border-4 border-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{tutor.name}</h3>
              <p className="text-brand-600 text-sm font-semibold mb-2">{tutor.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}