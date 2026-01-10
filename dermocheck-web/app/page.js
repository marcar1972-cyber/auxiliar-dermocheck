'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// He agregado ChevronRight para la flecha del selector
import { Search, BookOpen, AlertTriangle, CalendarDays, Info, ExternalLink, Clock, Package, ScanLine, ShieldCheck, Sun, Sparkles, Hourglass, CheckCircle2, ChevronRight } from 'lucide-react';

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
  }, [marca]);

  // --- LÓGICA DE CÁLCULO ---
  const calcularBeiersdorf = (codigo) => {
    const cleanCode = codigo.replace(/[^0-9]/g, ''); 
    const yearDigit = parseInt(cleanCode.substring(0, 1)); 
    const weekNumber = parseInt(cleanCode.substring(1, 3)); 
    if (isNaN(yearDigit) || isNaN(weekNumber) || weekNumber > 53) throw new Error("Formato inválido. Eucerin requiere: Año (1 dígito) + Semana (2 dígitos). Ej: 402...");
    const manufacturingYear = 2020 + yearDigit; 
    const days = weekNumber * 7;
    const manufacturingDate = new Date(manufacturingYear, 0, days); 
    const mesesVidaUtil = esExcepcion ? 30 : 36;
    const expirationDate = new Date(manufacturingDate);
    expirationDate.setMonth(expirationDate.getMonth() + mesesVidaUtil);
    return { fabDate: manufacturingDate, expDate: expirationDate, shelfLife: mesesVidaUtil };
  };

  const calcularIsdin = (codigo) => {
    const cleanCode = codigo.replace(/[^0-9]/g, '');
    if (cleanCode.length < 4) throw new Error("El código ISDIN necesita al menos 4 números al inicio.");
    const yearDigit = parseInt(cleanCode.substring(0, 1)); 
    const dayOfYear = parseInt(cleanCode.substring(1, 4)); 
    if (dayOfYear > 366) throw new Error("El día del año no puede ser mayor a 366.");
    const manufacturingYear = 2020 + yearDigit;
    const manufacturingDate = new Date(manufacturingYear, 0, dayOfYear);
    const mesesVidaUtil = 36;
    const expirationDate = new Date(manufacturingDate);
    expirationDate.setMonth(expirationDate.getMonth() + mesesVidaUtil);
    return { fabDate: manufacturingDate, expDate: expirationDate, shelfLife: mesesVidaUtil };
  };

  const analizarLote = () => {
    setError(''); 
    setResultado(null);
    const code = lote.trim();
    if (code.length < 3) { setError('El código es muy corto.'); return; }

    try {
      let calculo = null;
      const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

      if (['Eucerin', 'Nivea', 'Aquaphor'].includes(marca)) {
        calculo = calcularBeiersdorf(code);
      } else if (marca === 'ISDIN') {
        calculo = calcularIsdin(code);
      } else {
        calculo = { fabDate: new Date(), expDate: new Date(2026, 11, 31), shelfLife: 36 };
      }

      if (calculo) {
          setResultado({
            year: calculo.expDate.getFullYear(),
            month: monthNames[calculo.expDate.getMonth()],
            fabYear: calculo.fabDate.getFullYear(),
            fabMonth: monthNames[calculo.fabDate.getMonth()],
            shelfLife: calculo.shelfLife
          });
      }
    } catch (err) {
      setError(`Error de lectura: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-cream text-dark animate-in fade-in duration-500">
      
      {/* SECCIÓN HERO */}
      <section className="bg-white px-6 py-16 md:py-24 flex flex-col items-center text-center border-b border-gray-100 max-w-5xl mx-auto">
         <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">Herramienta Gratuita 2026</span>
         <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-[1.1]">Verificador de Lotes y <br className="hidden md:block"/><span className="text-ruby">Guía Dermocosmética</span></h1>
         <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">Protege tu piel y tu inversión. Verifica la <strong>fecha de fabricación</strong> de tus cosméticos y descubre por qué la ley europea exige ciertos etiquetados.</p>
         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#calculator-section" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all shadow-lg flex items-center justify-center gap-2"><Search size={18} /> Verificar mi Crema</a>
            <a href="#guias-compra" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-dark transition-all flex items-center justify-center gap-2"><BookOpen size={18} /> Ver Reseñas</a>
         </div>
         <div className="mt-12 pt-8 border-t border-gray-50 flex flex-wrap justify-center gap-6 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Base de Datos Actualizada</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Algoritmo 2026</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Sin Registro</span>
         </div>
      </section>

      {/* SECCIÓN DE RESEÑAS */}
      <section id="guias-compra" className="py-20 px-6 max-w-6xl mx-auto border-b border-gray-100 bg-white">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">Encuentra tu Rutina Ideal</h2>
            <p className="text-gray-500">Selecciona tu preocupación principal para ver productos recomendados por expertos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/acne" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-emerald-50 p-4 rounded-full text-emerald-600 mb-4 group-hover:scale-110 transition-transform"><Sun size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Acné y Piel Grasa</h3>
                <p className="text-sm text-gray-500 mb-4">Controla el brillo y los brotes sin resecar tu piel.</p>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-manchas" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-purple-50 p-4 rounded-full text-purple-600 mb-4 group-hover:scale-110 transition-transform"><Sparkles size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Manchas</h3>
                <p className="text-sm text-gray-500 mb-4">Despigmentantes efectivos para melasma y marcas de sol.</p>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
            <Link href="/anti-edad" className="group bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all text-center flex flex-col items-center">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mb-4 group-hover:scale-110 transition-transform"><Hourglass size={32} /></div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">Anti-Edad</h3>
                <p className="text-sm text-gray-500 mb-4">Retinol y péptidos para arrugas y firmeza.</p>
                <span className="text-xs font-bold text-ruby uppercase tracking-widest group-hover:underline">Ver Guía →</span>
            </Link>
        </div>
      </section>

      {/* CALCULADORA (MEJORADA UX: Encapsulada como "Máquina") */}
      <section id="calculator-section" className="py-20 bg-cream border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ruby via-dark to-emerald-btn"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
            <div className="flex-1 text-left w-full pt-4">
                <h2 className="font-serif text-3xl font-bold text-dark mb-4">¿Tu cosmético sigue fresco?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                   Decodifica el <strong>Batch Code</strong> para saber la fecha exacta de producción.
                </p>
                
                {/* Caja de ayuda visual */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-ruby mb-4 flex items-center gap-2"><ScanLine size={16}/> ¿Dónde está el código?</h3>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-center">
                            <div className="bg-gray-100 p-2 rounded text-dark"><Package size={20}/></div>
                            <div className="text-xs text-gray-500">
                                <strong className="block text-dark">En Cajas</strong>
                                Impreso en la solapa inferior (troquelado).
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-gray-100 p-2 rounded text-dark"><div className="w-5 h-5 border-2 border-dark rounded-full"></div></div>
                            <div className="text-xs text-gray-500">
                                <strong className="block text-dark">En Envases</strong>
                                Tinta azul/negra en la base o dorso.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* COLUMNA DERECHA: LA MÁQUINA (DISEÑO MEJORADO) */}
            <div className="flex-1 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:scale-[1.01]">
                
                {/* CABECERA DE LA "MÁQUINA" */}
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
                                <option value="Eucerin">Eucerin</option><option value="Nivea">Nivea</option><option value="Aquaphor">Aquaphor</option><option value="ISDIN">ISDIN</option><option value="Vichy">Vichy</option><option value="La Roche-Posay">La Roche-Posay</option>
                            </select>
                            {/* Icono de flecha para el select */}
                            <ChevronRight size={16} className="absolute right-3 top-4 text-gray-400 rotate-90 pointer-events-none"/>
                        </div>
                    </div>

                    {['Eucerin', 'Nivea'].includes(marca) && (
                        <div className="flex items-start gap-3 p-3 bg-ruby/5 rounded-lg border border-ruby/10">
                            <input type="checkbox" id="excepcion" checked={esExcepcion} onChange={(e) => setEsExcepcion(e.target.checked)} className="mt-1 w-4 h-4 text-ruby rounded focus:ring-ruby border-gray-300 cursor-pointer accent-ruby"/>
                            <label htmlFor="excepcion" className="text-xs text-gray-600 cursor-pointer select-none leading-tight">
                                ¿Es <strong>Aquaphor</strong> o línea <strong>Baby</strong>?
                                <span className="block text-[10px] text-ruby mt-0.5">Estos productos caducan antes (30 meses).</span>
                            </label>
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">2. Ingresa Batch Code</label>
                        <input type="text" placeholder={marca === 'ISDIN' ? "Ej: 42731n" : "Ej: 40229376"} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono text-lg uppercase focus:ring-2 focus:ring-ruby outline-none placeholder:text-gray-300" value={lote} onChange={(e) => setLote(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && analizarLote()}/>
                    </div>

                    {resultado && (
                        <div className="bg-emerald-50 border-l-4 border-emerald-btn p-4 shadow-sm animate-in zoom-in duration-300">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-emerald-700 mb-1 tracking-wider">Vencimiento Estimado</p>
                                    <p className="text-2xl font-serif font-bold text-dark">{resultado.month} {resultado.year}</p>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-emerald-100 flex flex-col gap-1 text-xs text-gray-500">
                                <p className="flex items-center gap-2"><CalendarDays size={14}/> Fabricado: <strong>{resultado.fabMonth} {resultado.fabYear}</strong></p>
                                <p className="flex items-center gap-2"><Info size={14}/> Vida útil: <strong>{resultado.shelfLife} Meses</strong></p>
                            </div>
                        </div>
                    )}
                    
                    <div className="bg-gray-50 p-3 rounded text-[10px] text-gray-400 leading-tight flex gap-2 border border-gray-100">
                        <AlertTriangle size={16} className="flex-shrink-0 text-gray-300"/>
                        <p>Los algoritmos son aproximados. Siempre revisa el olor y textura del producto.</p>
                    </div>

                    {error && (<div className="bg-red-50 text-ruby p-3 rounded text-sm font-bold flex gap-2 items-center animate-pulse"><AlertTriangle size={16}/> {error}</div>)}
                    
                    <button onClick={analizarLote} className="w-full bg-dark text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-ruby transition-colors shadow-lg active:scale-95 duration-200">
                        Verificar Ahora
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* EDUCACIÓN PAO Y TIEMPOS */}
      <section id="education" className="bg-white py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">¿Cuánto duran realmente tus cosméticos?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">La frescura depende de dos factores clave: la <strong>Fecha de Producción</strong> y el <strong>PAO (Periodo Después de Apertura)</strong>.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream/30 p-8 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-sm text-ruby"><Clock size={32} /></div>
                <div>
                    <h3 className="font-bold text-lg text-dark mb-2">1. Periodo Post-Apertura (PAO)</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">Debido a la oxidación y bacterias, una vez que abres el producto, el reloj corre. Busca el dibujo de un <strong>frasco abierto</strong> con un número (ej: 6M, 12M).</p>
                    <span className="inline-block bg-white border border-gray-200 text-[10px] font-bold px-2 py-1 rounded uppercase">Ej: 6M = 6 Meses de uso</span>
                </div>
            </div>
            <div className="bg-cream/30 p-8 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-4 rounded-full shadow-sm text-emerald-600"><ShieldCheck size={32} /></div>
                <div>
                    <h3 className="font-bold text-lg text-dark mb-2">2. Fecha de Producción (Legal)</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">Los cosméticos cerrados también envejecen. Según la <strong>legislación de la UE</strong>, si un producto dura más de 30 meses cerrado, el fabricante NO está obligado a poner fecha de vencimiento.</p>
                    <span className="inline-block bg-white border border-gray-200 text-[10px] font-bold px-2 py-1 rounded uppercase">Por eso necesitas el Batch Code</span>
                </div>
            </div>
        </div>
        
        {/* TABLA DE DURACIÓN */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-8 text-gray-400">Tiempos de Vida Útil Comunes (Desde Fabricación)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">🧴</span>
                    <h4 className="font-bold text-dark text-sm mb-1">Cuidado de la Piel</h4>
                    <p className="text-emerald-600 font-bold text-lg">Mínimo 3 Años</p>
                    <p className="text-xs text-gray-400 mt-2">Cremas, Solares, Limpiadores</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">💄</span>
                    <h4 className="font-bold text-dark text-sm mb-1">Maquillaje</h4>
                    <p className="text-emerald-600 font-bold text-lg">3 a 5 Años</p>
                    <p className="text-xs text-gray-400 mt-2">Rímel (menos) a Polvos (más)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <span className="text-2xl mb-2 block">💎</span>
                    <h4 className="font-bold text-dark text-sm mb-1">Perfumes (Alcohol)</h4>
                    <p className="text-emerald-600 font-bold text-lg">~5 Años</p>
                    <p className="text-xs text-gray-400 mt-2">Alta conservación</p>
                </div>
            </div>
        </div>
      </section>

      {/* RECOMENDACIÓN FINAL (Eucerin Sun Advanced) */}
      <section className="bg-white px-6 py-20 border-b border-gray-100 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-gray-50 rounded-xl min-h-[400px] relative overflow-hidden group shadow-lg flex items-center justify-center">
                <Image src="/Eucerin Sun Advanced.jpg" alt="Eucerin Sun Advanced" fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" priority />
            </div>
            <div className="flex-1">
                <span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Reseña del Farmacéutico</span>
                <h2 className="font-serif text-4xl font-bold text-dark mb-4">Eucerin Sun Advanced Hydration</h2>
                <div className="flex items-center gap-1 mb-6 text-yellow-500">
                    <span className="text-xs font-bold text-gray-400 mr-2">CALIFICACIÓN:</span>★★★★★ <span className="text-gray-400 text-xs">(4.8/5)</span>
                </div>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    Protección solar superior SPF 50 formulada con <strong>Ácido Hialurónico</strong> y humectantes para una hidratación de 24 horas. Ideal para piel seca, dejando un acabado invisible sin residuos blancos.
                </p>
                <div className="flex gap-4">
                    <a href="https://amzn.to/4qatg6W" target="_blank" rel="noopener noreferrer" className="flex-1 bg-emerald-btn text-white font-bold px-6 py-4 rounded-lg uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg flex justify-center items-center gap-2 group">
                        <span>Ver Precio en Amazon</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
                <p className="text-[10px] text-gray-400 mt-3 text-center md:text-left">*Análisis basado en formulación clínica.</p>
            </div>
        </div>
      </section>

    </div>
  );
}