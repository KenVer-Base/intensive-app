import React, { useEffect, useRef } from 'react';

export default function Location() {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      // Pastikan google maps script sudah terload dari index.html
      if (!window.google) return;

      const { Map, InfoWindow } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary("marker");

      // -----------------------------------------------------------
      // 👇 GANTI KOORDINAT DI BAWAH INI DENGAN YANG BENAR 👇
      // -----------------------------------------------------------
      const position = { 
        lat: 1.1768,   // Ganti dengan Latitude dari Google Maps
        lng: 108.9624  // Ganti dengan Longitude dari Google Maps
      }; 
      // -----------------------------------------------------------

      const map = new Map(mapRef.current, {
        center: position,
        zoom: 16, // Zoom sedikit diperbesar agar lebih jelas
        mapId: 'INTENSIVE_MAP_ID_V2',
        disableDefaultUI: true,
        gestureHandling: 'cooperative'
      });

      // Style Pin
      const glyph = document.createElement("div");
      glyph.innerHTML = '<span class="material-symbols-outlined text-white text-base">school</span>';
      
      const pin = new PinElement({
        glyph: glyph,
        background: "#2563eb",
        borderColor: "#1e3a8a",
        scale: 1.2
      });

      // Membuat Marker
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        content: pin.element,
        title: "Intensive Bimbingan Belajar"
      });

      // Info Window
      const infoContent = document.createElement('div');
      infoContent.innerHTML = `
        <div class="p-2 text-slate-800">
          <h3 class="font-bold text-brand-700">Intensive Bimbel</h3>
          <p class="text-sm mt-1">Jl. SDN.04 GG. Abdul Hakim No. 26</p>
          <p class="text-xs text-slate-500 mt-1">Pemangkat, Kalimantan Barat</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}" target="_blank" class="text-xs text-blue-600 hover:underline mt-2 block font-semibold">
            Buka di Google Maps
          </a>
        </div>
      `;

      const infoWindow = new InfoWindow({
        headerContent: document.createElement('div'),
        content: infoContent
      });

      marker.addListener('click', () => {
        infoWindow.open({ anchor: marker, map });
      });
      
      infoWindow.open({ anchor: marker, map });
    }

    const timeoutId = setTimeout(initMap, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Bagian Kiri: Informasi Kontak */}
          <div className="lg:w-1/3 p-8 lg:p-12 text-white flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Lokasi & Kontak</h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-300">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Alamat</h4>
                  <p className="text-brand-100 leading-relaxed">
                    Jl. SDN.04 GG. Abdul Hakim No. 26<br />
                    Pemangkat, Kalimantan Barat
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-300">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Hubungi Kami</h4>
                  <p className="text-brand-100">0897 - 8607 - 205</p>
                  <p className="text-sm text-brand-300 mt-1">(Ms. Dwi)</p>
                </div>
              </div>
            </div>
            <button onClick={() => window.open('https://wa.me/628978607205', '_blank')} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              Chat via WhatsApp
            </button>
          </div>
          
          {/* Bagian Kanan: Peta Embed (Ganti src di bawah) */}
          <div className="lg:w-2/3 h-96 lg:h-auto relative min-h-[400px]">
             {/* PENTING: 
                Ganti link di dalam src="..." di bawah ini dengan link yang Anda copy dari Google Maps (Embed Map).
                Pastikan hanya mengambil bagian url-nya saja (https://www.google.com/maps/embed?...)
             */}
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.311272274037!2d108.98237118472323!3d1.1743061663074583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e48398afc63e5f%3A0x771f9fa2b26b8a2d!2sRumah%20faqih%20Ibnu%20shiddiq!5e0!3m2!1sid!2sid!4v1768217748379!5m2!1sid!2sid"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full absolute inset-0"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
