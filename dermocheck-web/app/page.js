'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, BookOpen, AlertTriangle, CheckCircle2, CalendarDays, Info, ExternalLink, Clock, HelpCircle, Package, ScanLine, ShieldCheck } from 'lucide-react';

export default function Home() {
  // --- ESTADOS ---
  const [lote, setLote] = useState('');
  const [marca, setMarca] = useState('Eucerin');
  const [esExcepcion, setEsExcepcion] = useState(false); // Checkbox 30 meses
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setResultado(null);
    setError('');
    setEsExcepcion(false); 
  }, [marca]);

  // --- LÓGICA BEIERSDORF ---
  const calcularBeiersdorf = (codigo) => {
    const cleanCode = codigo.replace(/[^0-9]/g, ''); 
    const yearDigit = parseInt(cleanCode.substring(0, 1)); 
    const weekNumber = parseInt(cleanCode.substring(1, 3)); 

    if (isNaN(yearDigit) || isNaN(weekNumber) || weekNumber > 53) {
        throw new Error("Formato inválido. Eucerin requiere: Año (1 dígito) + Semana (2 dígitos). Ej: 402...");
    }

    const manufacturingYear = 2020 + yearDigit; 
    const days = weekNumber * 7;
    const manufacturingDate = new Date(manufacturingYear, 0, days); 

    const mesesVidaUtil = esExcepcion ? 30 : 36;
    const expirationDate = new Date(manufacturingDate);
    expirationDate.setMonth(expirationDate.getMonth() + mesesVidaUtil);

    return { fabDate: manufacturingDate, expDate: expirationDate, shelfLife: mesesVidaUtil };
  };

  // --- LÓGICA ISDIN ---
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

    if (code.length < 3) { 
      setError('El código es muy corto.'); 
      return; 
    }

    try {
      let calculo = null;
      let data = null;
      const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

      if (['Eucerin', 'Nivea', 'Aquaphor'].includes(marca)) {
        const esCasoEspecial = marca === 'Aquaphor' || esExcepcion;
        calculo = (() => {
             const cleanCode = code.replace(/[^0-9]/g, '');
             const yearDigit = parseInt(cleanCode.substring(0, 1));
             const weekNumber = parseInt(cleanCode.substring(1, 3));
             if (isNaN(yearDigit) || isNaN(weekNumber)) throw new Error("Código Eucerin inválido.");
             const year = 2020 + yearDigit;
             const date = new Date(year, 0, weekNumber * 7);
             const shelf = esCasoEspecial ? 30 : 36;
             const exp = new Date(date);
             exp.setMonth(exp.getMonth() + shelf);
             return { fabDate: date, expDate: exp, shelfLife: shelf };
        })();

      } else if (marca === 'ISDIN') {
        calculo = calcularIsdin(code);
      } else {
        calculo = { fabDate: new Date(), expDate: new Date(2026, 11, 31), shelfLife: 36 };
      }

      if (calculo) {
          setResultado({
            year: calculo.expDate.getFullYear(),
            month: monthNames[calculo.expDate.getMonth()],
            code: code,
            marca: marca,
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
    <main className="min-h-screen font-sans bg-cream text-dark">
      
      {/* --- HEADER --- */}
      <header className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
            <div className="w-48 relative h-12">
                <Image src="/logo.jpg" alt="DermoCheck Logo" fill className="object-contain object-left" priority />
            </div>
        </div>
        <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-600">
          <a href="#calculator-section" className="text-emerald-600 hover:text-emerald-800 transition-colors border-b-2 border-transparent hover:border-emerald-600 pb-1">Verificador</a>
          
          {/* ENLACES ACTIVADOS A LAS NUEVAS PÁGINAS */}
          <a href="/acne" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Acné & Piel Grasa</a>
          <a href="/anti-manchas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Anti-Manchas</a>
          <a href="/anti-edad" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Anti-Edad</a>
          <a href="/marcas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Marcas</a>
        </nav>
      </header>

      {/* ... HERO, CALCULADORA, INFOGRAFÍAS (Mismo código que tenías) ... */}
      {/* (Para ahorrar espacio aquí, asumo que mantienes el contenido central igual. Si necesitas que lo repita todo, dímelo) */}
      
      {/* Resumen de secciones centrales para referencia: */}
      <section className="bg-white px-6 py-16 md:py-24 flex flex-col items-center text-center border-b border-gray-100 max-w-5xl mx-auto">
         {/* ... Contenido Hero ... */}
         <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">Herramienta Gratuita 2025</span>
         <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-[1.1]">Verificador de Lotes y <br className="hidden md:block"/><span className="text-ruby">Guía Dermocosmética</span></h1>
         <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">Protege tu piel y tu inversión. Verifica la <strong>fecha de fabricación</strong> de tus cosméticos y descubre por qué la ley europea exige ciertos etiquetados.</p>
         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#calculator-section" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all shadow-lg flex items-center justify-center gap-2"><Search size={18} /> Verificar mi Crema</a>
            <a href="#reviews" className="bg-white text-dark border-2 border-gray-200 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-dark transition-all flex items-center justify-center gap-2"><BookOpen size={18} /> Ver Reseñas</a>
         </div>
      </section>

      <section id="calculator-section" className="py-20 bg-cream border-y border-gray-200 relative overflow-hidden">
        {/* ... Calculadora Lógica Completa ... */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ruby via-dark to-emerald-btn"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 text-left w-full">
                <h2 className="font-serif text-3xl font-bold text-dark mb-4">¿Tu cosmético sigue fresco?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">Ingresa el <strong>Batch Code</strong> (número de lote) para decodificar su fecha de producción.</p>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-ruby mb-4 flex items-center gap-2"><ScanLine size={16}/> ¿Dónde encuentro el código?</h3>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-center"><div className="bg-gray-100 p-2 rounded text-dark"><Package size={20}/></div><p className="text-xs text-gray-500"><strong>Cajas:</strong> Generalmente impreso en la solapa inferior (troquelado).</p></div>
                        <div className="flex gap-3 items-center"><div className="bg-gray-100 p-2 rounded text-dark"><div className="w-5 h-5 border-2 border-dark rounded-full"></div></div><p className="text-xs text-gray-500"><strong>Botellas:</strong> Impreso en tinta azul/negra en la base del envase.</p></div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="space-y-5">
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">1. Selecciona Marca</label><div className="relative"><select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-bold text-dark focus:ring-2 focus:ring-ruby outline-none cursor-pointer" value={marca} onChange={(e) => setMarca(e.target.value)}><option value="Eucerin">Eucerin</option><option value="Nivea">Nivea</option><option value="Aquaphor">Aquaphor</option><option value="ISDIN">ISDIN</option><option value="Vichy">Vichy</option><option value="La Roche-Posay">La Roche-Posay</option></select></div></div>
                    {['Eucerin', 'Nivea'].includes(marca) && (<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"><input type="checkbox" id="excepcion" checked={esExcepcion} onChange={(e) => setEsExcepcion(e.target.checked)} className="w-5 h-5 text-ruby rounded focus:ring-ruby border-gray-300 cursor-pointer accent-ruby"/><label htmlFor="excepcion" className="text-sm text-gray-600 cursor-pointer select-none">¿Es <strong>Aquaphor</strong> o línea <strong>Baby</strong>?<span className="block text-[10px] text-gray-400">Estos productos duran menos (30 meses)</span></label></div>)}
                    <div><label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Ingresa Batch Code</label><input type="text" placeholder={marca === 'ISDIN' ? "Ej: 42731n (Primeros 4 números)" : "Ej: 40229376 (Primeros 3 números)"} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono text-lg uppercase focus:ring-2 focus:ring-ruby outline-none" value={lote} onChange={(e) => setLote(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && analizarLote()}/></div>
                    {resultado && (<div className="bg-emerald-50 border-l-4 border-emerald-btn p-4 shadow-sm animate-pulse"><div className="flex justify-between items-start"><div><p className="text-xs font-bold uppercase text-emerald-700 mb-1">Vencimiento Estimado</p><p className="text-3xl font-serif font-bold text-dark">{resultado.month} {resultado.year}</p></div></div><div className="mt-3 pt-3 border-t border-emerald-100 flex flex-col gap-1 text-xs text-gray-500"><p className="flex items-center gap-2"><CalendarDays size={14}/> Fabricado: <strong>{resultado.fabMonth} {resultado.fabYear}</strong></p><p className="flex items-center gap-2"><Info size={14}/> Vida útil: <strong>{resultado.shelfLife} Meses</strong></p></div></div>)}
                    <div className="bg-gray-50 p-3 rounded text-[10px] text-gray-400 leading-tight flex gap-2 border border-gray-100"><AlertTriangle size={24} className="flex-shrink-0 text-gray-300"/><p><strong>Aviso:</strong> Los algoritmos decodifican la fecha de producción. La vida útil puede variar según la fórmula exacta. Prevalece el símbolo PAO del envase.</p></div>
                    {error && (<div className="bg-red-50 text-ruby p-3 rounded text-sm font-bold flex gap-2 items-center"><AlertTriangle size={16}/> {error}</div>)}
                    <button onClick={analizarLote} className="w-full bg-dark text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-ruby transition-colors shadow-lg">Verificar Ahora</button>
                </div>
            </div>
        </div>
      </section>

      <section id="education" className="bg-white py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-dark mb-4">¿Cuánto duran realmente tus cosméticos?</h2><p className="text-gray-500 max-w-2xl mx-auto">La frescura depende de dos factores clave: la <strong>Fecha de Producción</strong> y el <strong>PAO (Periodo Después de Apertura)</strong>.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cream/30 p-8 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start"><div className="bg-white p-4 rounded-full shadow-sm text-ruby"><Clock size={32} /></div><div><h3 className="font-bold text-lg text-dark mb-2">1. Periodo Post-Apertura (PAO)</h3><p className="text-sm text-gray-600 leading-relaxed mb-3">Debido a la oxidación y bacterias, una vez que abres el producto, el reloj corre. Busca el dibujo de un <strong>frasco abierto</strong> con un número (ej: 6M, 12M).</p><span className="inline-block bg-white border border-gray-200 text-[10px] font-bold px-2 py-1 rounded uppercase">Ej: 6M = 6 Meses de uso</span></div></div>
            <div className="bg-cream/30 p-8 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start"><div className="bg-white p-4 rounded-full shadow-sm text-emerald-600"><ShieldCheck size={32} /></div><div><h3 className="font-bold text-lg text-dark mb-2">2. Fecha de Producción (Legal)</h3><p className="text-sm text-gray-600 leading-relaxed mb-3">Los cosméticos cerrados también envejecen. Según la <strong>legislación de la UE</strong>, si un producto dura más de 30 meses cerrado, el fabricante NO está obligado a poner fecha de vencimiento.</p><span className="inline-block bg-white border border-gray-200 text-[10px] font-bold px-2 py-1 rounded uppercase">Por eso necesitas el Batch Code</span></div></div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100"><h3 className="text-sm font-bold uppercase tracking-widest text-center mb-8 text-gray-400">Tiempos de Vida Útil Comunes (Desde Fabricación)</h3><div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"><div className="bg-white p-6 rounded-lg shadow-sm"><span className="text-2xl mb-2 block">🧴</span><h4 className="font-bold text-dark text-sm mb-1">Cuidado de la Piel</h4><p className="text-emerald-600 font-bold text-lg">Mínimo 3 Años</p><p className="text-xs text-gray-400 mt-2">Cremas, Solares, Limpiadores</p></div><div className="bg-white p-6 rounded-lg shadow-sm"><span className="text-2xl mb-2 block">💄</span><h4 className="font-bold text-dark text-sm mb-1">Maquillaje</h4><p className="text-emerald-600 font-bold text-lg">3 a 5 Años</p><p className="text-xs text-gray-400 mt-2">Rímel (menos) a Polvos (más)</p></div><div className="bg-white p-6 rounded-lg shadow-sm"><span className="text-2xl mb-2 block">💎</span><h4 className="font-bold text-dark text-sm mb-1">Perfumes (Alcohol)</h4><p className="text-emerald-600 font-bold text-lg">~5 Años</p><p className="text-xs text-gray-400 mt-2">Alta conservación</p></div></div></div>
    </section>

    <section className="bg-white px-6 py-20 border-b border-gray-100 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-gray-50 rounded-xl min-h-[400px] relative overflow-hidden group shadow-lg"><Image src="/mujer-eucerin.webp" alt="Mujer aplicando Eucerin Sun Oil Control" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" priority /></div>
            <div className="flex-1"><span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Reseña del Farmacéutico</span><h2 className="font-serif text-4xl font-bold text-dark mb-4">Eucerin Sun Oil Control</h2><div className="flex items-center gap-1 mb-6 text-yellow-500"><span className="text-xs font-bold text-gray-400 mr-2">CALIFICACIÓN:</span>★★★★★ <span className="text-gray-400 text-xs">(4.9/5)</span></div><p className="text-gray-600 mb-4 text-lg leading-relaxed">Si tienes <strong>piel grasa, mixta o con tendencia acnéica</strong>, este es el estándar de oro. Contiene <strong>L-Carnitina</strong> para regular el sebo durante 8 horas.</p><div className="flex gap-4"><a href="#" className="flex-1 bg-emerald-btn text-white font-bold px-6 py-4 rounded-lg uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg flex justify-center items-center gap-2 group"><span>Ver Oferta del Día</span><ExternalLink size={18} className="group-hover:translate-x-1 transition-transform"/></a></div><p className="text-[10px] text-gray-400 mt-3 text-center md:text-left">*Enlace a tienda partner oficial.</p></div>
        </div>
    </section>

      <footer className="bg-dark text-gray-400 py-12 text-center text-sm border-t-4 border-ruby">
        <div className="w-32 h-8 relative mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/logo_4.webp" alt="DermoCheck" fill className="object-contain" />
        </div>
        <p className="mb-2">© 2025 DermoCheck Chile | Inteligencia en Cosmética</p>
        <p className="text-xs opacity-50 mb-6">Aviso: Participamos en programas de afiliados.</p>
        <a href="https://maczdev.vercel.app" target="_blank" className="text-emerald-500 font-mono text-xs hover:text-white transition-colors">Code by &lt; macz.dev /&gt;</a>
      </footer>

    </main>
  );
}