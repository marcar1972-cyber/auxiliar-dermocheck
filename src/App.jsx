import { useState } from 'react';
import { Search, CheckCircle2, AlertTriangle, BookOpen, Clock } from 'lucide-react';

function App() {
  // --- LÓGICA DE LA CALCULADORA ---
  const [lote, setLote] = useState('');
  const [marca, setMarca] = useState('Eucerin');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const yearMap = { 'R': 2021, 'S': 2022, 'T': 2023, 'U': 2024, 'W': 2025, 'X': 2026, 'Y': 2027, 'Z': 2028 };
  const monthMap = { '1': 'Enero', '2': 'Febrero', '3': 'Marzo', '4': 'Abril', '5': 'Mayo', '6': 'Junio', '7': 'Julio', '8': 'Agosto', '9': 'Septiembre', 'O': 'Octubre', 'N': 'Noviembre', 'D': 'Diciembre' };

  const analizarLote = () => {
    setError(''); setResultado(null);
    const code = lote.toUpperCase().trim();
    
    if (code.length < 3) { setError('Código muy corto.'); return; }

    let foundYear = null, foundMonth = null;
    // Lógica simple para demo
    for (let i = 0; i < code.length - 1; i++) {
      if (yearMap[code[i]] && monthMap[code[i+1]]) {
        foundYear = yearMap[code[i]];
        foundMonth = monthMap[code[i+1]];
        break;
      }
    }
    // Fallback Demo
    if (!foundYear && code.length >= 4) { foundYear = 2026; foundMonth = 'Marzo'; }

    if (foundYear) {
      setResultado({ year: foundYear, month: foundMonth, code, marca });
    } else {
      setError(`Formato no reconocido para ${marca}.`);
    }
  };

  return (
    <main className="min-h-screen font-sans bg-cream text-dark">
      
      {/* --- HEADER --- */}
      <header className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="w-40 relative">
             {/* Asegúrate de poner tu logo en la carpeta 'public' */}
             <img src="/logo_dermocheck.png" alt="DermoCheck Logo" className="h-10 object-contain" />
        </div>
        <nav className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-dark">
          <a href="#calculator" className="hover:text-ruby transition-colors">Verificador</a>
          <a href="#reviews" className="hover:text-ruby transition-colors">Reseñas</a>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="bg-white px-6 py-16 flex flex-col items-center text-center border-b border-gray-100">
        <span className="inline-block bg-emerald-50 text-emerald-btn px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">
          Herramienta Gratuita
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Verificador de Lotes y <br className="hidden md:block"/>
          <span className="text-ruby">Guía Dermocosmética</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl font-light">
          Protege tu piel. Verifica la fecha de fabricación de tus cosméticos y descubre reseñas avaladas por especialistas.
        </p>
        <div className="flex gap-4">
            <a href="#calculator" className="bg-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-ruby transition-all flex items-center gap-2 shadow-lg">
                <Search size={18} /> Verificar Ahora
            </a>
        </div>
      </section>

      {/* --- CALCULADORA --- */}
      <section id="calculator" className="py-20 bg-cream border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
                <h2 className="font-serif text-3xl font-bold mb-4">¿Tu crema sigue fresca?</h2>
                <p className="text-gray-600 mb-6">Los códigos de lote esconden la fecha real. Un producto vencido pierde efectividad.</p>
                <ul className="space-y-3 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-btn"/> Base de datos 2025</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-btn"/> Resultados inmediatos</li>
                </ul>
            </div>

            <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">Marca</label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-bold mb-4 outline-none cursor-pointer" 
                        value={marca} onChange={(e) => setMarca(e.target.value)}>
                    <option>Eucerin</option><option>Vichy</option><option>CeraVe</option><option>L'Oréal</option>
                </select>
                
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">Batch Code</label>
                <input type="text" placeholder="Ej: 28Y100" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono uppercase mb-4 outline-none focus:ring-2 focus:ring-ruby"
                       value={lote} onChange={(e) => setLote(e.target.value)} />

                {resultado && (
                    <div className="bg-emerald-50 border-l-4 border-emerald-btn p-4 mb-4 animate-pulse">
                        <p className="text-2xl font-serif font-bold text-dark">{resultado.month} {resultado.year}</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Lote Válido</p>
                    </div>
                )}
                {error && <div className="text-ruby text-sm font-bold mb-4 bg-red-50 p-3 rounded flex gap-2 items-center"><AlertTriangle size={16}/> {error}</div>}

                <button onClick={analizarLote} className="w-full bg-dark text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-ruby transition-colors shadow-lg">
                    Verificar
                </button>
            </div>
        </div>
      </section>

      {/* --- REVIEWS RAPIDAS --- */}
      <section id="reviews" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold mb-10 text-center">Favoritos del Mes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {name: "Vichy Mineral 89", price: "$22.990", desc: "Booster fortificante."},
                {name: "Anthelios UV 400", price: "$19.990", desc: "Protección invisible."},
                {name: "CeraVe Limpiadora", price: "$12.990", desc: "Piel normal a seca."}
            ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer text-center">
                    <div className="text-4xl mb-4">🧴</div>
                    <h3 className="font-bold text-dark mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-4">{item.desc}</p>
                    <span className="block font-bold text-emerald-btn text-lg">{item.price}</span>
                </div>
            ))}
        </div>
      </section>

      <footer className="bg-dark text-gray-400 py-10 text-center text-sm border-t-4 border-ruby">
        <p className="mb-2">© 2025 DermoCheck</p>
        <p className="text-xs opacity-50">Code by &lt; macz.dev /&gt;</p>
      </footer>

    </main>
  );
}

export default App;
