import Image from 'next/image';
import { ExternalLink, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function AntiEdadPage() {
  return (
    <div className="min-h-screen font-sans bg-cream text-dark animate-in fade-in duration-500">
      
      {/* HEADER ELIMINADO (Ya está en layout.js) */}

      {/* HERO SECTION: INTRODUCCIÓN EDUCATIVA */}
      <section className="bg-white px-6 py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-ruby font-bold tracking-widest text-xs uppercase mb-4 block">Protocolo Anti-Edad</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">Ciencia para la Longevidad Cutánea</h1>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              El envejecimiento no se detiene, pero se gestiona. El 80% de las arrugas son causadas por el sol (fotoenvejecimiento). 
              La estrategia ganadora es simple: <span className="font-medium text-dark">Proteger de día y estimular colágeno de noche.</span>
            </p>
        </div>
      </section>

      {/* LA CIENCIA: INGREDIENTES */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-b border-gray-200">
        <h2 className="text-2xl font-serif font-bold text-center mb-10">La Ciencia: ¿Qué buscar en la etiqueta?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-ruby mb-4 flex justify-center"><CheckCircle2 size={32} /></div>
                <h3 className="font-bold text-lg mb-2">Retinol / Retinoides</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    El estándar de oro. Acelera la renovación celular y "engaña" a la piel para que produzca colágeno como si fuera más joven.
                </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-ruby mb-4 flex justify-center"><CheckCircle2 size={32} /></div>
                <h3 className="font-bold text-lg mb-2">Protección Solar (SPF)</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    El mejor antiarrugas del mundo. Si no usas protector solar a diario, ningún serum caro podrá reparar el daño que el sol causa en horas.
                </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="text-ruby mb-4 flex justify-center"><CheckCircle2 size={32} /></div>
                <h3 className="font-bold text-lg mb-2">Ácido Hialurónico</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    La molécula esponja. Retiene 1000 veces su peso en agua, rellenando arrugas finas instantáneamente y devolviendo el volumen.
                </p>
            </div>

        </div>
      </section>

      {/* ERRORES COMUNES (MYTH BUSTING) */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-center mb-10">Errores Comunes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-400 shadow-sm">
                    <div className="flex items-center gap-3 mb-3 text-red-500 font-bold uppercase text-xs tracking-widest">
                        <AlertTriangle size={16} /> Error Nº1
                    </div>
                    <h3 className="font-bold text-lg mb-2">"Si pica es porque está funcionando"</h3>
                    <p className="text-sm text-gray-600">
                        <strong className="text-dark">Falso.</strong> La inflamación crónica envejece la piel (Inflammaging). Si un producto te irrita demasiado, estás dañando tu barrera cutánea, no rejuveneciéndola.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-red-400 shadow-sm">
                    <div className="flex items-center gap-3 mb-3 text-red-500 font-bold uppercase text-xs tracking-widest">
                         <AlertTriangle size={16} /> Error Nº2
                    </div>
                    <h3 className="font-bold text-lg mb-2">"Soy muy joven para el Retinol"</h3>
                    <p className="text-sm text-gray-600">
                        <strong className="text-dark">Depende.</strong> A partir de los 25 años perdemos un 1% de colágeno anual. Empezar con dosis bajas previene arrugas profundas futuras.
                    </p>
                </div>

            </div>
        </div>
      </section>

      {/* SELECCIÓN DEL EDITOR (PRODUCTOS) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <span className="bg-ruby text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">Selección del Editor</span>
            <h2 className="text-3xl font-serif font-bold mt-4">Top 3: Protocolo Rejuvenecedor</h2>
            <p className="text-gray-500 mt-2 text-sm">Rutina simplificada con eficacia clínica probada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PRODUCTO 1: CERAVE DAY */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-64 bg-white flex items-center justify-center relative p-6">
                    <div className="relative w-full h-full">
                        <Image 
                            src="/cerave-renewing-day.jpg" 
                            alt="CeraVe Skin Renewing Day Cream" 
                            fill 
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
                <div className="p-8 border-t border-gray-50 flex-grow flex flex-col">
                    <div className="mb-auto">
                        <p className="text-[10px] uppercase font-bold text-ruby mb-2">Protección Diaria</p>
                        <h3 className="font-serif text-xl font-bold mb-2">CeraVe Skin Renewing Day</h3>
                        <div className="flex text-yellow-500 text-xs mb-4">★★★★★ (4.8)</div>
                        <p className="text-sm text-gray-500 mb-6">
                            Lo mejor de dos mundos: Retinol encapsulado para tratar arrugas y SPF 30 para prevenir nuevas. Todo reforzado con ceramidas para no irritar.
                        </p>
                    </div>
                    {/* TU LINK: CeraVe Skin Renewing Day */}
                    <a href="https://amzn.to/3Z0tKkd" target="_blank" rel="noopener noreferrer" className="w-full border border-dark text-dark font-bold py-3 rounded uppercase tracking-widest hover:bg-dark hover:text-white transition-colors text-xs flex justify-center items-center gap-2">
                        Ver Oferta Amazon <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* PRODUCTO 2: NEUTROGENA EYES */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-64 bg-white flex items-center justify-center relative p-6">
                      <div className="relative w-full h-full">
                        <Image 
                            src="/neutrogena-rapid-wrinkle.jpg" 
                            alt="Neutrogena Rapid Wrinkle Repair Eye Cream" 
                            fill 
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
                <div className="p-8 border-t border-gray-50 flex-grow flex flex-col">
                    <div className="mb-auto">
                        <p className="text-[10px] uppercase font-bold text-ruby mb-2">Contorno de Ojos</p>
                        <h3 className="font-serif text-xl font-bold mb-2">Neutrogena Rapid Wrinkle</h3>
                        <div className="flex text-yellow-500 text-xs mb-4">★★★★☆ (4.6)</div>
                        <p className="text-sm text-gray-500 mb-6">
                            Fórmula específica para la piel fina de los ojos. Utiliza "Retinol SA" acelerado para suavizar patas de gallo en tiempo récord.
                        </p>
                    </div>
                    {/* TU LINK: Neutrogena Rapid Wrinkle */}
                    <a href="https://amzn.to/4pwqU13" target="_blank" rel="noopener noreferrer" className="w-full border border-dark text-dark font-bold py-3 rounded uppercase tracking-widest hover:bg-dark hover:text-white transition-colors text-xs flex justify-center items-center gap-2">
                         Ver Oferta Amazon <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* PRODUCTO 3: ROC NIGHT */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-64 bg-white flex items-center justify-center relative p-6">
                      <div className="relative w-full h-full">
                        <Image 
                            src="/roc-retinol-night.jpg" 
                            alt="RoC Retinol Correxion Deep Wrinkle" 
                            fill 
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
                <div className="p-8 border-t border-gray-50 flex-grow flex flex-col">
                    <div className="mb-auto">
                        <p className="text-[10px] uppercase font-bold text-ruby mb-2">Tratamiento Nocturno</p>
                        <h3 className="font-serif text-xl font-bold mb-2">RoC Retinol Correxion</h3>
                        <div className="flex text-yellow-500 text-xs mb-4">★★★★★ (4.7)</div>
                        <p className="text-sm text-gray-500 mb-6">
                            Un clásico de farmacia francesa. Tratamiento intensivo nocturno clínicamente probado para reducir arrugas profundas mientras duermes.
                        </p>
                    </div>
                    {/* TU LINK: RoC Retinol Correxion */}
                    <a href="https://amzn.to/4qJojSF" target="_blank" rel="noopener noreferrer" className="w-full border border-dark text-dark font-bold py-3 rounded uppercase tracking-widest hover:bg-dark hover:text-white transition-colors text-xs flex justify-center items-center gap-2">
                         Ver Oferta Amazon <ExternalLink size={14} />
                    </a>
                </div>
            </div>

        </div>
      </section>

      {/* CIERRE / CONSEJO FINAL */}
      <section className="bg-white py-12 px-6 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
             <h3 className="font-serif text-xl font-bold mb-4">La Constancia es la Clave</h3>
             <p className="text-gray-600 text-sm leading-relaxed">
                El retinol y el cuidado anti-edad no son magia, son ciencia. Los resultados reales en textura y firmeza comienzan a verse tras <strong className="text-dark">12 semanas de uso continuo</strong>. Empieza despacio (2 veces por semana) y aumenta la frecuencia según tu tolerancia.
             </p>
        </div>
      </section>

      {/* FOOTER ELIMINADO (Ya está en layout.js) */}
      
    </div>
  );
}