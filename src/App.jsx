import React, { useState } from 'react';
import { HelpCircle, Calendar, Search, Pill, ExternalLink, AlertTriangle, X, CheckCircle2, AlertOctagon, Info, Package, Disc, Cylinder, Sun } from 'lucide-react';

const BRAND_GROUPS = {
  LOREAL: {
    id: 'loreal',
    name: "Grupo L'Oréal",
    brands: ["Vichy", "La Roche Posay", "CeraVe", "Garnier", "L'Oréal Paris", "Maybelline", "Vogue"],
    placeholder: "Ej: 28Y109",
    helpText: "Busca un código alfanumérico. El 3er carácter (Letra) es la clave."
  },
  BEIERSDORF: {
    id: 'beiersdorf',
    name: "Grupo Beiersdorf (Nivea / Eucerin)",
    brands: ["Eucerin", "Nivea"],
    placeholder: "Ej: 42767557",
    helpText: "Busca un número largo. 1er dígito = Año. 2do y 3ro = Semana del año."
  }
};

const MONTH_NAMES = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

const getMonthFromWeek = (weekInt) => {
  if (weekInt >= 1 && weekInt <= 5) return 0;   
  if (weekInt >= 6 && weekInt <= 9) return 1;   
  if (weekInt >= 10 && weekInt <= 13) return 2; 
  if (weekInt >= 14 && weekInt <= 18) return 3; 
  if (weekInt >= 19 && weekInt <= 22) return 4; 
  if (weekInt >= 23 && weekInt <= 26) return 5; 
  if (weekInt >= 27 && weekInt <= 30) return 6; 
  if (weekInt >= 31 && weekInt <= 35) return 7; 
  if (weekInt >= 36 && weekInt <= 39) return 8; 
  if (weekInt >= 40 && weekInt <= 43) return 9; 
  if (weekInt >= 44 && weekInt <= 48) return 10; 
  if (weekInt >= 49 && weekInt <= 53) return 11; 
  return -1; 
};

const calculateExpiration = (brandGroup, code, isSunscreen) => {
  const cleanCode = code.toUpperCase().trim();

  if (brandGroup.id === 'loreal') {
    if (cleanCode.length < 4) return { error: "Código muy corto (mínimo 4 caracteres)." };
    const yearChar = cleanCode.charAt(2);  
    const monthChar = cleanCode.charAt(3); 
    const yearMap = { 'W': 2025, 'X': 2026, 'Y': 2027, 'Z': 2028 };
    const monthMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, 'O': 9, '0': 9, 'N': 10, 'D': 11 };
    const expYear = yearMap[yearChar];
    const expMonth = monthMap[monthChar];
    if (!expYear) return { error: `La letra '${yearChar}' no es un año válido.` };
    if (expMonth === undefined) return { error: `El mes '${monthChar}' no es válido.` };
    return { type: 'DIRECT', expYear: expYear, expMonthIndex: expMonth, mfgText: "N/A - Cifrado directo", details: "Basado en letra de año L'Oréal", durationMonths: null };
  }

  if (brandGroup.id === 'beiersdorf') {
    const numericCode = cleanCode.replace(/[^0-9]/g, '');
    if (numericCode.length < 3) return { error: "Necesito al menos 3 dígitos numéricos." };
    const yearDigit = parseInt(numericCode.charAt(0), 10);
    const weekDigits = parseInt(numericCode.substring(1, 3), 10);
    if (isNaN(weekDigits) || weekDigits < 1 || weekDigits > 53) return { error: `La semana ${weekDigits} no es válida.` };

    const currentYear = new Date().getFullYear();
    const decade = Math.floor(currentYear / 10) * 10; 
    let mfgYear = decade + yearDigit;
    if (mfgYear > currentYear + 1) mfgYear -= 10; 
    const mfgMonthIndex = getMonthFromWeek(weekDigits);

    // AJUSTE DE CALIBRACIÓN: RESTAMOS 1 MES AL FINAL
    const durationMonths = isSunscreen ? 30 : 36;
    let totalMonths = mfgMonthIndex + durationMonths - 1; // Restamos 1 mes por seguridad del laboratorio
    
    let expYear = mfgYear;
    let expMonthIndex = totalMonths;

    while (expMonthIndex > 11) {
      expMonthIndex -= 12;
      expYear += 1;
    }
    
    return {
      type: 'CALCULATED',
      mfgYear: mfgYear,
      mfgMonthIndex: mfgMonthIndex,
      expYear: expYear,
      expMonthIndex: expMonthIndex,
      details: `Semana ${weekDigits} del ${mfgYear}`,
      durationMonths: durationMonths
    };
  }
  return { error: "Marca no configurada." };
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-700">
        <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
          <h3 className="text-emerald-400 font-bold text-lg flex items-center gap-2"><HelpCircle size={20} /> {title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors"><X size={24} /></button>
        </div>
        <div className="p-6 text-slate-700 text-sm leading-relaxed">{children}</div>
        <div className="bg-slate-50 p-3 flex justify-end">
           <button onClick={onClose} className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-300 transition">CERRAR</button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [batchCode, setBatchCode] = useState('');
  const [isSunscreen, setIsSunscreen] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const activeGroup = Object.values(BRAND_GROUPS).find(group => group.brands.includes(selectedBrand));

  const handleCalculate = () => {
    setError(null); setResult(null);
    if (!activeGroup) { setError("Por favor, selecciona una marca."); return; }
    if (!batchCode) { setError("Ingresa el código del lote."); return; }
    const calc = calculateExpiration(activeGroup, batchCode, isSunscreen);
    if (calc.error) { setError(calc.error); } else { setResult(calc); }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
      <header className="bg-slate-800 border-b border-emerald-600/30 p-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20"><Pill className="text-slate-900" size={24} strokeWidth={2.5} /></div>
            <div><h1 className="text-xl font-bold tracking-tight text-white leading-tight">Dermo<span className="text-emerald-400">Check</span></h1><span className="text-[10px] font-bold text-emerald-500/80 uppercase tracking-[0.2em]">AuxiliarPro</span></div>
          </div>
        </div>
      </header>
      <main className="flex-grow max-w-md mx-auto w-full p-4 space-y-6 mt-2 pb-40">
        <div className="space-y-2">
          <label className="text-emerald-400 text-xs font-bold uppercase tracking-wider ml-1">1. Selecciona la Marca</label>
          <div className="relative group">
            <select className="w-full bg-slate-800 border-2 border-slate-700 text-white rounded-xl p-4 pr-10 appearance-none focus:border-emerald-500 focus:ring-0 outline-none transition-all cursor-pointer font-medium text-lg shadow-sm group-hover:border-slate-600" value={selectedBrand} onChange={(e) => { setSelectedBrand(e.target.value); setBatchCode(''); setResult(null); setError(null); setIsSunscreen(false); }}>
              <option value="">-- Elegir Marca --</option>
              {Object.values(BRAND_GROUPS).map((group) => (
                <optgroup key={group.id} label={group.name} className="bg-slate-800 text-slate-300">
                  {group.brands.map(brand => (<option key={brand} value={brand} className="text-white font-medium py-1">{brand}</option>))}
                </optgroup>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500"><Search size={20} /></div>
          </div>
        </div>
        {activeGroup && (
          <div className="space-y-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
            {activeGroup.id === 'beiersdorf' && (
              <div onClick={() => setIsSunscreen(!isSunscreen)} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${isSunscreen ? 'bg-amber-500/10 border-amber-500/50' : 'bg-slate-800 border-slate-700'}`}>
                <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${isSunscreen ? 'bg-amber-500 border-amber-500 text-slate-900' : 'border-slate-500 text-transparent'}`}><Sun size={16} fill="currentColor" /></div>
                <div className="flex flex-col"><span className={`text-sm font-bold ${isSunscreen ? 'text-amber-400' : 'text-slate-400'}`}>¿Es Protector Solar?</span><span className="text-[10px] text-slate-500 leading-tight">Cambia el cálculo de 36 a 30 meses.</span></div>
              </div>
            )}
            <div className="flex justify-between items-end ml-1">
              <label className="text-emerald-400 text-xs font-bold uppercase tracking-wider">2. Código de Lote</label>
              <button onClick={() => setShowHelp(true)} className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 transition-colors bg-emerald-900/30 px-2 py-1 rounded border border-emerald-500/30 hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-900"><HelpCircle size={14} />¿Dónde está?</button>
            </div>
            <div className="flex flex-col gap-3">
              <input type="text" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} placeholder={activeGroup.placeholder} className="w-full bg-slate-100 text-slate-900 border-2 border-transparent focus:border-emerald-500 rounded-xl p-4 font-mono text-2xl uppercase text-center tracking-widest outline-none shadow-inner placeholder:text-slate-400 placeholder:text-lg placeholder:normal-case placeholder:tracking-normal" />
              <button onClick={handleCalculate} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"><CheckCircle2 size={24} />VERIFICAR FECHA</button>
            </div>
          </div>
        )}
        {error && (<div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 flex gap-3 items-center text-red-200 animate-in shake"><AlertOctagon className="shrink-0 text-red-400" size={24} /><p className="font-medium text-sm">{error}</p></div>)}
        {result && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300 ring-4 ring-emerald-500/20">
            <div className="bg-emerald-500 p-3 text-center"><h2 className="text-slate-900 font-extrabold text-xs uppercase tracking-widest opacity-80 flex items-center justify-center gap-2"><Calendar size={14} /> Resultado Oficial</h2></div>
            <div className="p-6 text-center bg-white relative space-y-4">
              <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1"><Info size={10} /> Fecha Elaboración (Aprox)</span>
                <span className="text-slate-600 font-bold text-lg">{result.type === 'CALCULATED' ? `${MONTH_NAMES[result.mfgMonthIndex]} ${result.mfgYear}` : result.mfgText}</span>
                {result.details && (<span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full mt-1">{result.details}</span>)}
              </div>
              <div><span className="text-[10px] uppercase tracking-wider text-red-500 font-bold mb-1 block">Fecha Límite de Uso</span><div className="text-emerald-600 font-black text-4xl tracking-tight leading-none">VENCE: {MONTH_NAMES[result.expMonthIndex]} {result.expYear}</div></div>
              {result.durationMonths && (<div className="flex justify-center"><span className={`text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 ${result.durationMonths === 30 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>{result.durationMonths === 30 ? <Sun size={10} /> : <CheckCircle2 size={10} />}Regla usada: {result.durationMonths} Meses (-1 mes seguridad)</span></div>)}
            </div>
            <div className="bg-slate-50 border-t border-slate-100 p-2 text-center"><p className="text-[10px] text-slate-400 uppercase tracking-widest">Verificar siempre el envase físico</p></div>
          </div>
        )}
      </main>
      <footer className="fixed bottom-0 w-full bg-slate-950 border-t border-slate-800 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
        <div className="max-w-md mx-auto py-4 px-6 text-center">
          <div className="flex flex-col items-center gap-1 mb-3">
            <p className="text-xs text-slate-400 font-semibold">© 2025 <span className="text-emerald-500">AuxiliarPro</span></p>
            <p className="text-xs text-slate-500">Herramienta gratuita para la comunidad de Farmacia</p>
            <a href="https://www.auxiliaresdefarmacia.cl" target="_blank" rel="noopener noreferrer" className="text-emerald-500 text-sm font-bold hover:text-emerald-400 hover:underline flex items-center gap-1 transition-all mt-1">www.auxiliaresdefarmacia.cl<ExternalLink size={12} /></a>
          </div>
        </div>
      </footer>
      <Modal isOpen={showHelp} onClose={() => setShowHelp(false)} title="Ubicación del Lote">
        <div className="space-y-5">
          <div><h4 className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 border-b border-slate-200 pb-1">Zonas Comunes</h4><ul className="space-y-3"><li className="flex gap-3 items-start"><div className="bg-slate-100 p-2 rounded text-slate-600"><Package size={18} /></div><div><strong className="text-slate-800 text-sm block">Cajas</strong><span className="text-xs text-slate-500">Busca el troquelado (relieve) en la base inferior o tapas.</span></div></li><li className="flex gap-3 items-start"><div className="bg-slate-100 p-2 rounded text-slate-600"><Disc size={18} /></div><div><strong className="text-slate-800 text-sm block">Tubos</strong><span className="text-xs text-slate-500">En el borde superior plano (el cierre o "crimp").</span></div></li><li className="flex gap-3 items-start"><div className="bg-slate-100 p-2 rounded text-slate-600"><Cylinder size={18} /></div><div><strong className="text-slate-800 text-sm block">Botellas</strong><span className="text-xs text-slate-500">Impreso con tinta negra/azul en el fondo o dorso inferior.</span></div></li></ul></div>
          {activeGroup && (<div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3"><h4 className="text-emerald-800 text-xs font-bold uppercase tracking-widest mb-1">Tip de Lectura</h4><p className="text-emerald-700 text-xs leading-relaxed">{activeGroup.helpText}</p></div>)}
        </div>
      </Modal>
    </div>
  );
}
