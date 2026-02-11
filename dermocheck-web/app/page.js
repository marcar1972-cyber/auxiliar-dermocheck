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
      <section className="bg-white px-6 py-16 md:py-24 flex flex-col items-center text-center border-b border-gray-100 max-w-5xl mx-auto">
         <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">Herramienta Gratuita 2026</span>
         <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-[1.1]">Verificador de Lotes y <br className="hidden md:block"/><span className="text-ruby">Guía Dermocosmética</span></h1>
         <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
            Protege tu piel. Aprende a descifrar los códigos de <strong>L'Oréal (Vichy, LRP)</strong> y <strong>Beiersdorf (Eucerin, Nivea)</strong> o usa nuestra calculadora automática.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#calculator-section" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all shadow-lg flex items-center justify-center gap-2"><Search size={18} /> Verificar Ahora</a>
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

      {/* ================================================================================== */}
      {/* SECCIÓN HÍBRIDA: GUÍA MANUAL (IZQUIERDA) + CALCULADORA AUTOMÁTICA (DERECHA) */}
      {/* ================================================================================== */}
      <section id="calculator-section" className="py-20 bg-cream border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-ruby to-emerald-500"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-dark mb-4">La Ciencia del Lote</h2>
                <p className="text-gray-600">Aprende a interpretarlo tú mismo o deja que nuestro algoritmo lo haga por ti.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
            
                {/* === COLUMNA IZQUIERDA: GUÍA MANUAL === */}
                <div className="flex-1 w-full lg:w-1/2 space-y-6">
                    
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 p-4 flex justify-between items-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            <h3 className="text-white font-bold text-sm flex items-center gap-2 relative z-10">
                                <HelpCircle size={16} /> Guía Maestra de Lotes
                            </h3>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold relative z-10">Manual 2026</span>
                        </div>

                        <div className="p-5 space-y-6">
                            
                            {/* CARD AZUL: GRUPO L'ORÉAL */}
                            <div className="border border-blue-100 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-blue-600 px-4 py-2 flex justify-between items-center">
                                    <span className="text-white font-bold text-xs uppercase tracking-wider">Sistema de Letras</span>
                                    <span className="text-blue-100 text-[9px] uppercase font-bold text-right leading-tight">
                                        L'Oréal • Vichy • CeraVe <br/> La Roche-Posay • Garnier
                                    </span>
                                </div>
                                <div className="bg-blue-50 p-4">
                                    <div className="flex justify-center mb-4">
                                        <div className="inline-flex bg-white px-3 py-1.5 rounded border border-blue-200 shadow-sm font-mono text-base text-slate-500">
                                            28<span className="text-blue-600 font-bold mx-0.5">Y</span><span className="text-purple-600 font-bold mx-0.5">1</span>09
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div>
                                            <p className="font-bold text-blue-800 mb-1 text-center text-[10px] uppercase">3ª Letra = Año Vencimiento</p>
                                            <div className="bg-white rounded border border-blue-100 divide-y divide-blue-50 text-center text-[10px]">
                                                <div className="p-1">W = 2025</div>
                                                <div className="p-1">X = 2026</div>
                                                <div className="p-1 bg-blue-100 text-blue-800 font-bold">Y = 2027</div>
                                                <div className="p-1">Z = 2028</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-purple-800 mb-1 text-center text-[10px] uppercase">4º Dígito = Mes</p>
                                            <div className="bg-white rounded border border-purple-100 p-2 text-center h-full flex flex-col justify-center text-[10px] space-y-1">
                                                <p>1-9 = Ene a Sept</p>
                                                <div className="w-full h-px bg-purple-50"></div>
                                                <p>O = Oct | N = Nov | D = Dic</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CARD ROJA: GRUPO BEIERSDORF */}
                            <div className="border border-red-100 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-red-600 px-4 py-2 flex justify-between items-center">
                                    <span className="text-white font-bold text-xs uppercase tracking-wider">Sistema Numérico</span>
                                    <span className="text-red-100 text-[9px] uppercase font-bold text-right leading-tight">
                                        Beiersdorf • Eucerin <br/> Nivea • Aquaphor
                                    </span>
                                </div>
                                <div className="bg-red-50 p-4">
                                    <div className="flex justify-center mb-3">
                                        <div className="inline-flex bg-white px-3 py-1.5 rounded border border-red-200 shadow-sm font-mono text-base text-slate-500">
                                            <span className="text-red-600 font-bold mx-0.5">5</span><span className="text-orange-600 font-bold mx-0.5">12</span>36376
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 gap-2 text-xs text-center">
                                            <div className="bg-white p-2 rounded border border-red-100">
                                                <span className="block text-red-600 font-bold text-lg leading-none">5</span>
                                                <span className="text-[9px] text-slate-400 uppercase font-bold">Año Fab: 2025</span>
                                            </div>
                                            <div className="bg-white p-2 rounded border border-orange-100">
                                                <span className="block text-orange-600 font-bold text-lg leading-none">12</span>
                                                <span className="text-[9px] text-slate-400 uppercase font-bold">Semana 12</span>
                                            </div>
                                        </div>
                                        
                                        {/* TABLA DE SEMANAS - ESTRUCTURA IZQUIERDA/DERECHA */}
                                        <div className="bg-white p-3 rounded border border-slate-200">
                                            <p className="text-[10px] font-bold text-slate-700 mb-2 text-center uppercase border-b pb-1">📅 Guía Rápida: Semana a Mes</p>
                                            <div className="grid grid-cols-3 gap-y-1 gap-x-2 text-[10px] text-slate-600">
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 01-05</span><b className="text-black">Ene</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 06-09</span><b className="text-black">Feb</b></div>
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 10-13</span><b className="text-black">Mar</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 14-18</span><b className="text-black">Abr</b></div>
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 19-22</span><b className="text-black">May</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 23-26</span><b className="text-black">Jun</b></div>
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 27-31</span><b className="text-black">Jul</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 32-35</span><b className="text-black">Ago</b></div>
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 36-39</span><b className="text-black">Sep</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 40-44</span><b className="text-black">Oct</b></div>
                                                <div className="flex justify-between items-center bg-slate-50 px-2 py-0.5 rounded"><span>S 45-48</span><b className="text-black">Nov</b></div>
                                                <div className="flex justify-between items-center px-2 py-0.5 rounded"><span>S 49-52</span><b className="text-black">Dic</b></div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-[9px] text-center text-red-800 font-bold bg-white rounded py-1 border border-red-200 shadow-sm mt-2">
                                            ⚠️ OJO: Sumar +30 o +36 Meses a esta fecha
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* DISCLAIMER LEGAL */}
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <h4 className="text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center gap-1">
                                    <AlertTriangle size={10} /> Disclaimer
                                </h4>
                                <p className="text-[9px] text-slate-500 text-justify leading-relaxed">
                                    Esta herramienta es una guía de referencia educativa recopilada por <strong>AuxiliarPro / DermoCheck</strong>. 
                                    El usuario es responsable de verificar la fecha de vencimiento impresa en el envase o consultar directamente con el proveedor en caso de duda. 
                                    No nos hacemos responsables por errores de interpretación o cambios en la nomenclatura de los laboratorios.
                                </p>
                            </div>

                        </div>
                        <div className="bg-slate-900 p-2 text-center border-t border-slate-800">
                            <p className="text-[10px] text-slate-500">
                                &copy; 2026 AuxiliarPro | Hecho con código y café ☕
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* === COLUMNA DERECHA: CALCULADORA AUTOMÁTICA === */}
                <div className="flex-1 w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:scale-[1.01] flex flex-col h-full">
                    <div className="bg-dark text-white p-4 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <Search size={14} className="text-ruby"/> Calculadora Automática
                        </span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-ruby animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-center">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">1. Selecciona Marca</label>
                            <div className="relative">
                                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-bold text-dark focus:ring-2 focus:ring-ruby outline-none cursor-pointer appearance-none" value={marca} onChange={(e) => setMarca(e.target.value)}>
                                    <optgroup label="Grupo Beiersdorf">
                                        <option value="Eucerin">Eucerin</option>
                                        <option value="Nivea">Nivea</option>
                                        <option value="Aquaphor">Aquaphor</option>
                                    </optgroup>
                                    <optgroup label="Grupo L'Oréal">
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
                            <p>Resultado basado en guías oficiales. Verifica siempre el olor y textura.</p>
                        </div>

                        {error && (<div className="bg-red-50 text-ruby p-3 rounded text-sm font-bold flex gap-2 items-center animate-pulse"><AlertTriangle size={16}/> {error}</div>)}
                        
                        <button onClick={analizarLote} className="w-full bg-dark text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-ruby transition-colors shadow-lg active:scale-95 duration-200">
                            Verificar Ahora
                        </button>
                    </div>
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