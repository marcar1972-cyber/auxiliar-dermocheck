'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, BookOpen, AlertTriangle, CalendarDays, Info, ExternalLink, Clock, Package, ScanLine, ShieldCheck, Sun, Sparkles, Hourglass, CheckCircle2, ChevronRight, Snowflake } from 'lucide-react';

// ✅ CORRECCIÓN AQUÍ: Usamos './' porque ahora están juntos en la misma carpeta
import { calculateBatch } from './batchCalculator';

export default function Home() {
  // --- ESTADOS ---
  const [lote, setLote] = useState('');
  const [marca, setMarca] = useState('Eucerin');
  const [esExcepcion, setEsExcepcion] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  // Efecto para limpiar resultados al cambiar de marca
  useEffect(() => {
    setResultado(null);
    setError('');
    setEsExcepcion(false); 
    // Aquaphor siempre es excepción (30 meses)
    if(marca === 'Aquaphor') setEsExcepcion(true);
  }, [marca]);

  // Función que conecta con el "Cerebro" (batchCalculator.js)
  const analizarLote = () => {
    setError(''); 
    setResultado(null);
    const code = lote.trim();
    
    if (code.length < 3) { 
        setError('El código es muy corto.'); 
        return; 
    }

    try {
      // 🧠 LLAMADA AL CEREBRO LÓGICO
      const data = calculateBatch(code, marca, esExcepcion);
      setResultado(data);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-cream text-dark animate-in fade-in duration-500">
      
      {/* SECCIÓN HERO */}
      <section className="bg-white px-6 py-16 md:py-24 flex flex-col items-center text-center border-b border-gray-100 max-w-5xl mx-auto">
         <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">Herramienta Gratuita 2026</span>
         <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-[1.1]">Verificador de Lotes y <br className="hidden md:block"/><span className="text-ruby">Guía Dermocosmética</span></h1>
         <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">Protege tu piel y tu inversión. Verifica la <strong>fecha de fabricación y vencimiento</strong> de tus cosméticos según los últimos estándares.</p>
         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#calculator-section" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all shadow-lg flex items-center justify-center gap-2"><Search size={18} /> Verificar mi Crema</a>
            <a href="#guias-compra" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-dark transition-all flex items-center justify-center gap-2"><BookOpen size={18} /> Ver Reseñas</a>
         </div>
      </section>

      {/* SECCIÓN DE RESEÑAS */}
      <section id="guias-compra" className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-100 bg-white">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">Encuentra tu Rutina Ideal</h2>
            <p className="text-gray-500">Selecciona tu preocupación principal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/acne" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-emerald-50 p-4 rounded-full text-emerald-600 mb-4 group-hover:scale-110 transition-transform"><Sun size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Acné y Piel Grasa</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-manchas" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-purple-50 p-4 rounded-full text-purple-600 mb-4 group-hover:scale-110 transition-transform"><Sparkles size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Manchas</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-edad" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mb-4 group-hover:scale-110 transition-transform"><Hourglass size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Edad</h3>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
        </div>
      </section>

      {/* CALCULADORA */}
      <section id="calculator-section" className="py-20 bg-cream border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ruby via-dark to-emerald-btn"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-start">
            
            <div className="flex-1 text-left w-full pt-4">
                <h2 className="font-serif text-3xl font-bold text-dark mb-4">Decodifica tu Batch Code</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                   Introduce el código impreso en el envase para saber si tu producto sigue siendo seguro.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-ruby mb-4 flex items-center gap-2"><ScanLine size={16}/> Ayuda de Códigos</h3>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-center">
                            <div className="bg-gray-100 p-2 rounded text-dark"><Package size={20}/></div>
                            <div className="text-xs text-gray-500">
                                <strong className="block text-dark">Eucerin / Nivea</strong>
                                8 a 10 dígitos numéricos (Ej: 402...).
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-gray-100 p-2 rounded text-dark"><ShieldCheck size={20}/></div>
                            <div className="text-xs text-gray-500">
                                <strong className="block text-dark">L'Oréal / Vichy / CeraVe</strong>
                                Busca la letra clave: W(25), X(26), Y(27).
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-gray-100 p-2 rounded text-dark"><Sun size={20}/></div>
                            <div className="text-xs text-gray-500">
                                <strong className="block text-dark">ISDIN</strong>
                                5-6 caracteres, empieza por número (Ej: 427...).
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:scale-[1.01]">
                <div className="bg-dark text-white p-4 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        <Search size={14} className="text-ruby"/> Panel de Verificación
                    </span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-ruby animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">1. Selecciona Marca</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-bold text-dark focus:ring-2 focus:ring-ruby outline-none cursor-pointer appearance-none" value={marca} onChange={(e) => setMarca(e.target.value)}>
                                <optgroup label="Beiersdorf">
                                    <option value="Eucerin">Eucerin</option>
                                    <option value="Nivea">Nivea</option>
                                    <option value="Aquaphor">Aquaphor</option>
                                </optgroup>
                                <optgroup label="L'Oréal Group">
                                    <option value="CeraVe">CeraVe</option>
                                    <option value="Vichy">Vichy</option>
                                    <option value="La Roche-Posay">La Roche-Posay</option>
                                    <option value="Garnier">Garnier</option>
                                </optgroup>
                                <optgroup label="Otros">
                                    <option value="ISDIN">ISDIN</option>
                                </optgroup>
                            </select>
                            <ChevronRight size={16} className="absolute right-3 top-4 text-gray-400 rotate-90 pointer-events-none"/>
                        </div>
                    </div>

                    {['Eucerin', 'Nivea'].includes(marca) && (
                        <div className="flex items-start gap-3 p-3 bg-ruby/5 rounded-lg border border-ruby/10">
                            <input type="checkbox" id="excepcion" checked={esExcepcion} onChange={(e) => setEsExcepcion(e.target.checked)} className="mt-1 w-4 h-4 text-ruby rounded focus:ring-ruby border-gray-300 cursor-pointer accent-ruby"/>
                            <label htmlFor="excepcion" className="text-xs text-gray-600 cursor-pointer select-none leading-tight">
                                ¿Es línea <strong>Baby</strong> o protección solar especial?
                                <span className="block text-[10px] text-ruby mt-0.5">Vencimiento reducido a 30 meses.</span>
                            </label>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">2. Ingresa Batch Code</label>
                        <input type="text" placeholder={marca === 'ISDIN' ? "Ej: 42731n" : "Ej: 40229376 / 28Y109"} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono text-lg uppercase focus:ring-2 focus:ring-ruby outline-none placeholder:text-gray-300" value={lote} onChange={(e) => setLote(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && analizarLote()}/>
                    </div>

                    {resultado && (
                        <div className="bg-emerald-50 border-l-4 border-emerald-btn p-4 shadow-sm animate-in zoom-in duration-300">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-emerald-700 mb-1 tracking-wider">Vence</p>
                                    <p className="text-3xl font-serif font-black text-dark">{resultado.month} {resultado.year}</p>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-emerald-100 flex flex-col gap-1 text-xs text-gray-500">
                                <p className="flex items-center gap-2"><CalendarDays size={14}/> Fabricado: <strong>{resultado.fabMonth} {resultado.fabYear}</strong></p>
                                <p className="flex items-center gap-2"><Info size={14}/> Vida útil estimada: <strong>{resultado.shelfLife} Meses</strong></p>
                            </div>
                        </div>
                    )}
                    
                    <div className="bg-gray-50 p-3 rounded text-[10px] text-gray-400 leading-tight flex gap-2 border border-gray-100">
                        <AlertTriangle size={16} className="flex-shrink-0 text-gray-300"/>
                        <p>Resultado basado en guías oficiales. Verifica olor y textura.</p>
                    </div>

                    {error && (<div className="bg-red-50 text-ruby p-3 rounded text-sm font-bold flex gap-2 items-center animate-pulse"><AlertTriangle size={16}/> {error}</div>)}
                    
                    <button onClick={analizarLote} className="w-full bg-dark text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-ruby transition-colors shadow-lg active:scale-95 duration-200">
                        Verificar Ahora
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* RECOMENDACIÓN FINAL (Nevera) */}
      <section className="bg-white px-6 py-20 border-b border-gray-100 border-t border-gray-100">
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