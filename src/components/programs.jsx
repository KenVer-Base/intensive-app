import React from 'react';

// Data program disimpan dalam array agar mudah dikelola
const programsData = [
  {
    title: "Bahasa Inggris",
    desc: "Kuasai grammar dan conversation dengan metode yang interaktif dan menyenangkan.",
    icon: "language",
    img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bahasa Jepang",
    desc: "Pelajari Hiragana, Katakana, Kanji dan percakapan dasar sehari-hari.",
    icon: "translate",
    img: "https://i.pinimg.com/1200x/9b/5d/6b/9b5d6b3d58fbb7c5b34220ea30e55134.jpg"
  },
  {
    title: "Matematika",
    desc: "Pahami konsep berhitung dan logika matematika dari dasar hingga lanjut.",
    icon: "calculate",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fisika",
    desc: "Bedah rumus dan konsep fisika dengan eksperimen dan contoh nyata.",
    icon: "science",
    img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Membaca",
    desc: "Program lancar membaca untuk anak usia dini dan sekolah dasar.",
    icon: "menu_book",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mengetik",
    desc: "Keterampilan mengetik cepat dan tepat untuk kebutuhan sekolah dan kerja.",
    icon: "keyboard",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=600&q=80"
  },
];

export default function Programs() {
  return (
    <section id="subjects" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Kurikulum Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Program Menyelenggarakan</h2>
          <div className="w-20 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group border border-slate-100 hover:border-brand-200">
              <div className="h-40 mb-6 overflow-hidden rounded-xl bg-brand-50">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-brand-100 text-brand-600 rounded-lg material-symbols-outlined">{item.icon}</span>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              </div>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}