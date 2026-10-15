'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, BookOpen, AlertTriangle, CalendarDays, Info, ExternalLink, Clock, Package, ScanLine, ShieldCheck, Sun, Sparkles, Hourglass, CheckCircle2, ChevronRight, Snowflake, HelpCircle } from 'lucide-react';

// ✅ IMPORTACIÓN LÓGICA (Misma carpeta)
import { calculateBatch } from './batchCalculator';

export default function Home() {
  // --- ESTADOS ---
  const [lote, setLote] = useState('');
  const [marca, setMarca] = useState('Eucerin');
  const [esExcepcion, setEsExcepcion] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setResultado(null);
    setError('');
    setEsExcepcion(false); 
    if(marca === 'Aquaphor') setEsExcepcion(true);
  }, [marca]);

  const analizarLote = () => {
    setError(''); 
    setResultado(null);
    const code = lote.trim();
    
    if (code.length < 3) { 
        setError('El código es muy corto.'); 
        return; 
    }

    try {
      const data = calculateBatch(code, marca, esExcepcion);
      setResultado(data);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-cream text-dark animate-in fade-in duration-500">
      
      {/* SECCIÓN HERO */}
      <section className="bg-white px-6 py-24 flex flex-col items-center text-center border-b border-gray-100 max-w-5xl mx-auto">
         <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">Herramienta Gratuita 2026</span>
         <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-[1.1]">¿Tu crema está vencida? Evita alergias con el Verificador de Lotes Pro 2026</h1>
         <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
            No arriesgues tu piel con productos expirados. Analizamos Vichy, Eucerin, CeraVe y más en segundos.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <div className="flex flex-col items-center">
                <a href="https://auxiliarpro.cl/dermocheck?origen=dermocheck" target="_blank" rel="noopener noreferrer" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all shadow-lg flex items-center justify-center gap-2"><Search size={18} /> Verificar Ahora</a>
                <p className="text-xs text-gray-500 mt-2">Potenciado por AuxiliarPro SpA</p>
            </div>
            <a href="#guias-compra" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-dark transition-all flex items-center justify-center gap-2"><BookOpen size={18} /> Ver Reseñas</a>
         </div>
      </section>

      {/* SECCIÓN DE RESEÑAS */}
      <section id="guias-compra" className="py-24 px-6 max-w-6xl mx-auto bg-slate-50 border-t border-b border-slate-200">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">Encuentra tu Rutina Ideal</h2>
            <p className="text-gray-500">Selecciona tu preocupación principal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/acne" className="group bg-white p-8 rounded-xl hover:shadow-2xl transition-all text-center flex flex-col items-center border-t-4 border-t-emerald-500">
                <div className="bg-emerald-50 p-4 rounded-full text-emerald-600 mb-4 group-hover:scale-110 transition-transform"><Sun size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Acné y Piel Grasa</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-manchas" className="group bg-white p-8 rounded-xl hover:shadow-2xl transition-all text-center flex flex-col items-center border-t-4 border-t-purple-500">
                <div className="bg-purple-50 p-4 rounded-full text-purple-600 mb-4 group-hover:scale-110 transition-transform"><Sparkles size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Manchas</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-edad" className="group bg-white p-8 rounded-xl hover:shadow-2xl transition-all text-center flex flex-col items-center border-t-4 border-t-orange-500">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mb-4 group-hover:scale-110 transition-transform"><Hourglass size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Edad</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
        </div>
      </section>

      {/* RECOMENDACIÓN FINAL (Nevera) */}
      <section className="bg-white px-6 py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-gray-50 rounded-xl min-h-[400px] relative overflow-hidden group shadow-lg flex items-center justify-center">
                <Image src="/nevera.jpg" alt="Nevera de Skincare" fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" priority />
            </div>
            <div className="flex-1">
                <span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Accesorio Indispensable</span>
                <h2 className="font-serif text-4xl font-bold text-dark mb-4 text-left">Nevera de Skincare (Beauty Fridge)</h2>
                <div className="flex items-center gap-1 mb-6 text-yellow-500">
                    <span className="text-xs font-bold text-gray-400 mr-2">CALIFICACIÓN:</span>★★★★★ <span className="text-gray-400 text-xs">(4.9/5)</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed text-left">
                    Prolonga la vida útil de tus productos favoritos. Ideal para conservar la potencia de la <strong>Vitamina C</strong> y mantener tus fórmulas frescas.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-emerald-600 font-bold text-sm mb-2">
                        <Snowflake size={20}/>
                        <span>Despacho Disponible a Chile</span>
                    </div>
                    <a href="https://amzn.to/45HECr3" target="_blank" rel="noopener noreferrer" className="bg-emerald-btn text-white font-bold px-8 py-4 rounded-lg uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg flex justify-center items-center gap-2 group w-full md:w-fit">
                        <span>Ver en Amazon</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}