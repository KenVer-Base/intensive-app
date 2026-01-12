import React, { useEffect, useRef } from 'react';

export default function Location() {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      // Pastikan google maps script sudah terload dari index.html
      if (!window.google) return;

      const { Map, InfoWindow } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary("marker");

      // ------------------------------------------------------------------
      // 👇 GANTI KOORDINAT DI BAWAH INI DENGAN LOKASI BARU ANDA 👇
      // ------------------------------------------------------------------
      // Cara dapat koordinat: Buka Google Maps > Klik Kanan Lokasi > Copy angka pertama (Lat) dan kedua (Lng)
      const position = { 
        lat: 1.1768,   // Ganti dengan Latitude baru
        lng: 108.9624  // Ganti dengan Longitude baru
      }; 
      // ------------------------------------------------------------------

      const map = new Map(mapRef.current, {
        center: position,
        zoom: 15,
        mapId: 'INTENSIVE_MAP_ID_V2',
        disableDefaultUI: true,
        gestureHandling: 'cooperative'
      });

      // Membuat Pin Custom (Icon Sekolah)
      const glyph = document.createElement("div");
      glyph.innerHTML = '<span class="material-symbols-outlined text-white text-base">school</span>';
      
      const pin = new PinElement({
        glyph: glyph,
        background: "#2563eb",
        borderColor: "#1e3a8a",
        scale: 1.2
      });

      // Membuat Marker di Peta
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        content: pin.element,
        title: "Intensive Bimbingan Belajar"
      });

      // Konten Info Window (Pop-up saat marker diklik)
      const infoContent = document.createElement('div');
      infoContent.innerHTML = `
        <div class="p-2 text-slate-800">
          <h3 class="font-bold text-brand-700">Intensive Bimbel</h3>
          <p class="text-sm mt-1">Jl. SDN.04 GG. Abdul Hakim No. 26</p>
          <p class="text-xs text-slate-500 mt-1">Pemangkat, Kalimantan Barat</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}" target="_blank" class="text-xs text-blue-600 hover:underline mt-2 block">
            Lihat di Google Maps
          </a>
        </div>
      `;

      const infoWindow = new InfoWindow({
        headerContent: document.createElement('div'),
        content: infoContent
      });

      // Event Listener: Klik marker untuk buka info
      marker.addListener('click', () => {
        infoWindow.open({ anchor: marker, map });
      });
      
      // Buka info window secara default saat load
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
          
          {/* Bagian Kanan: Peta */}
          <div className="lg:w-2/3 h-96 lg:h-auto relative">
             <div ref={mapRef} id="map" className="w-full h-full" style={{ position: 'relative', overflow: 'hidden' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}