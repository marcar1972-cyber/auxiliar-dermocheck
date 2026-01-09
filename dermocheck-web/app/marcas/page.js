import Image from 'next/image';
import { ShieldCheck, Zap } from 'lucide-react';

export default function MarcasPage() {
  return (
    <div className="min-h-screen font-sans bg-cream text-dark animate-in fade-in duration-500">
      
      {/* HEADER ELIMINADO (Ya está en layout.js) */}

      {/* HERO SECTION */}
      <section className="bg-dark text-white px-6 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ruby opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 block">Selección Premium</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Los Gigantes de la Dermatología</h1>
            <p className="text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              No todas las marcas son iguales. Hemos seleccionado laboratorios que invierten millones en I+D y patentes clínicas. Aquí la ciencia va antes que el marketing.
            </p>
        </div>
      </section>

      {/* MARCA 1: CERAVE (Enfoque Barrera + Retinol Anti-Edad) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-4xl font-serif font-bold text-dark">CeraVe</h2>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Tecnología MVE</span>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Desarrollada con dermatólogos, CeraVe es la autoridad mundial en la <strong>restauración de la barrera cutánea</strong>. Su secreto son las 3 ceramidas esenciales idénticas a las de la piel.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-ruby mb-3 flex items-center gap-2">
                        <Zap size={16} /> Producto Estrella: Anti-Edad
                    </h3>
                    <div className="flex gap-4 items-start">
                        <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded p-2">
                             <Image src="/cerave-renewing-day.jpg" alt="CeraVe Skin Renewing" fill className="object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark">Skin Renewing Day Cream SPF 30</h4>
                            <p className="text-xs text-gray-500 mt-1">
                                Combina su famosa hidratación de ceramidas con Retinol encapsulado para liberar el activo poco a poco sin irritar.
                            </p>
                            <a href="/anti-edad" className="text-ruby text-xs font-bold mt-2 inline-block hover:underline">Ver en Anti-Edad →</a>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1"><ShieldCheck size={14} /> No Comedogénico</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={14} /> Sin Fragancia</span>
                </div>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-96 bg-gray-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                      <span className="text-6xl mb-4 block">💧</span>
                      <p className="text-2xl font-serif font-bold text-gray-400">Ciencia de Ceramidas</p>
                </div>
            </div>
        </div>
      </section>

      {/* MARCA 2: NEUTROGENA (Enfoque Retinol SA) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-64 md:h-96 bg-gray-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <div className="text-center p-8">
                      <span className="text-6xl mb-4 block">⚡</span>
                      <p className="text-2xl font-serif font-bold text-gray-400">Acción Acelerada</p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-4xl font-serif font-bold text-dark">Neutrogena</h2>
                    <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Retinol SA</span>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Si buscas rapidez, buscas Neutrogena. Su patente <strong>"Retinol SA" (Sustained Action)</strong> estabiliza el retinol puro para que trabaje más rápido que las fórmulas tradicionales.
                </p>

                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-ruby mb-3 flex items-center gap-2">
                        <Zap size={16} /> Producto Estrella: Ojos
                    </h3>
                    <div className="flex gap-4 items-start">
                        <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded p-2">
                             <Image src="/neutrogena-rapid-wrinkle.jpg" alt="Neutrogena Eyes" fill className="object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark">Rapid Wrinkle Repair Eye Cream</h4>
                            <p className="text-xs text-gray-500 mt-1">
                                Un "Best Seller" absoluto. Ataca las patas de gallo rebeldes con una concentración alta pero tolerable de Retinol SA.
                            </p>
                            <a href="/anti-edad" className="text-ruby text-xs font-bold mt-2 inline-block hover:underline">Ver en Anti-Edad →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* MARCA 3: RoC (Enfoque Historia/Pioneros) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-4xl font-serif font-bold text-dark">RoC Skincare</h2>
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Pioneros 1957</span>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Nacida en una farmacia de París. RoC fue la <strong>primera marca en estabilizar el Retinol</strong> para uso cosmético. Sus fórmulas son referencia de "Gold Standard" clínico.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <h3 className="font-bold text-sm uppercase tracking-widest text-ruby mb-3 flex items-center gap-2">
                        <Zap size={16} /> Producto Estrella: Noche
                    </h3>
                    <div className="flex gap-4 items-start">
                        <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded p-2">
                             <Image src="/roc-retinol-night.jpg" alt="RoC Retinol" fill className="object-contain" />
                        </div>
                        <div>
                            <h4 className="font-bold text-dark">Retinol Correxion Deep Wrinkle</h4>
                            <p className="text-xs text-gray-500 mt-1">
                                Funciona mientras duermes. Clínicamente probado para reducir arrugas profundas en 12 semanas de uso continuo.
                            </p>
                            <a href="/anti-edad" className="text-ruby text-xs font-bold mt-2 inline-block hover:underline">Ver en Anti-Edad →</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-96 bg-gray-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <div className="text-center p-8">
                      <span className="text-6xl mb-4 block">🏛️</span>
                      <p className="text-2xl font-serif font-bold text-gray-400">Legado Parisino</p>
                </div>
            </div>
        </div>
      </section>

      {/* MENCIONES HONORÍFICAS: LRP & CERAVE (ANTI-MANCHAS) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Innovación en Manchas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD La Roche-Posay */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-serif">La Roche-Posay</h3>
                    <span className="text-3xl">🛡️</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                    Líderes en pieles sensibles. Famosos por su Agua Termal y su nueva molécula patentada <strong>Melasyl™</strong> (presente en Mela-B3) que atrapa el pigmento antes de que manche.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                    <strong>Destacado:</strong> Anthelios (Protección Solar) y Mela B3.
                </div>
                <a href="/anti-manchas" className="block text-center mt-6 text-ruby font-bold text-xs uppercase tracking-widest border border-ruby rounded py-2 hover:bg-ruby hover:text-white transition-colors">
                    Ver en Anti-Manchas
                </a>
            </div>

            {/* CARD CeraVe (Reemplazando a Eucerin) */}
            <div className="bg-white border border-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-serif">CeraVe</h3>
                    <span className="text-3xl">💙</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                    Experiencia accesible y efectiva. Su <strong>Retinol Encapsulado</strong> (Resurfacing Serum) es el secreto para borrar marcas de acné antiguas restaurando la barrera natural.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                    <strong>Destacado:</strong> Resurfacing Retinol Serum.
                </div>
                {/* BOTÓN CORRECTO: LLEVA A ANTI-MANCHAS DONDE ESTÁ EL PRODUCTO */}
                <a href="/anti-manchas" className="block text-center mt-6 text-ruby font-bold text-xs uppercase tracking-widest border border-ruby rounded py-2 hover:bg-ruby hover:text-white transition-colors">
                    Ver en Anti-Manchas
                </a>
            </div>

        </div>
      </section>

      {/* FOOTER ELIMINADO (Ya está en layout.js) */}
      
    </div>
  );
}