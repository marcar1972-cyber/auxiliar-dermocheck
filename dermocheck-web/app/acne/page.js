import Image from 'next/image';
import { CheckCircle2, ArrowLeft, ExternalLink, Star, Beaker, ShieldBan, Sun, AlertOctagon } from 'lucide-react';
// Importamos tu base de datos de productos
import { products } from '../data/products';

export default function AcnePage() {
  // Filtramos solo los productos de acné
  const acneProducts = products.filter(product => product.category === 'acne');

  return (
    <main className="min-h-screen font-sans bg-cream text-dark">
      {/* HEADER */}
      <header className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
            <a href="/" className="w-48 relative h-12 block">
                <Image src="/logo.jpg" alt="DermoCheck Logo" fill className="object-contain object-left" priority />
            </a>
        </div>
        <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-600">
          <a href="/" className="hover:text-emerald-600 transition-colors border-b-2 border-transparent hover:border-emerald-600 pb-1">Verificador</a>
          <a href="/acne" className="text-ruby border-b-2 border-ruby pb-1">Acné & Piel Grasa</a>
          <a href="/anti-manchas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Anti-Manchas</a>
          <a href="/anti-edad" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Anti-Edad</a>
          <a href="/marcas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Marcas</a>
        </nav>
      </header>

      {/* 1. HERO SEO: MÁS TEXTO, MEJOR ESTRUCTURA */}
      <section className="bg-white px-6 py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            
            <span className="inline-block bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 border border-emerald-100">
                Protocolo Dermatológico 2025
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Domina el Acné y el Brillo <br/>
                <span className="text-ruby italic">Sin destruir tu piel</span>
            </h1>
            
            <div className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto space-y-4">
                <p>
                    Lidiar con la piel grasa es frustrante. El error #1 es atacar el brillo con agresividad usando jabones fuertes o alcohol. Esto solo destruye tu <strong>barrera cutánea</strong> y provoca el temido <em>"efecto rebote"</em>: tu piel entra en pánico y produce el doble de grasa.
                </p>
                <p>
                    La dermatología moderna ya no busca "secar". Busca <strong>regular</strong>.
                </p>
            </div>

            {/* PUNTOS CLAVE PARA RETENER AL LECTOR */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs font-bold uppercase tracking-wider text-gray-400">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Fórmulas No Comedogénicas</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Sin Alcohol Denat</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Activos Clínicos</span>
            </div>
        </div>
      </section>

      {/* 2. EDUCACIÓN: DICCIONARIO DE ACTIVOS */}
      <section className="bg-cream/50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-center mb-4">La Ciencia: ¿Qué buscar en la etiqueta?</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">No compres por la marca, compra por el ingrediente.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ACTIVO 1 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><Beaker size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Ácido Salicílico</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        El rey de los poros. Al ser soluble en aceite, penetra profundo para disolver el tapón de grasa y "barrer" los puntos negros desde adentro.
                    </p>
                </div>
                {/* ACTIVO 2 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><ShieldBan size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Niacinamida</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        El pacificador. Calma la rojez inflamatoria de los granitos activos y regula la producción de sebo sin resecar. Ideal para piel sensible.
                    </p>
                </div>
                {/* ACTIVO 3 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><Sun size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Licochalcona A</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        El secreto de Eucerin. Un antioxidante derivado de la raíz de regaliz que reduce la micro-inflamación, la causa raíz del acné recurrente.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. EDUCACIÓN: MITOS (FONDO OSCURO) */}
      <section className="bg-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-10 text-ruby">
                <AlertOctagon />
                <h2 className="font-serif text-2xl font-bold text-white">Mitos que arruinan tu piel</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5">
                    <span className="text-ruby font-bold text-2xl leading-none">✗</span>
                    <div>
                        <h4 className="font-bold text-lg mb-1">"El sol seca los granitos"</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Una ilusión peligrosa. El sol engrosa la piel (hiperqueratosis), atrapando el sebo y causando un brote explosivo semanas después.</p>
                    </div>
                </div>
                
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5">
                    <span className="text-ruby font-bold text-2xl leading-none">✗</span>
                    <div>
                        <h4 className="font-bold text-lg mb-1">"La pasta de dientes seca"</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">¡Nunca! El mentol y flúor causan quemaduras químicas, dejando una mancha oscura post-inflamatoria que dura meses.</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 p-6 bg-emerald-900/30 border border-emerald-800 rounded-xl text-center">
                <p className="text-emerald-200 font-bold text-lg mb-1">✓ La Verdad: La piel grasa necesita hidratación</p>
                <p className="text-emerald-100/70 text-sm">Si no hidratas, tu piel interpreta "sequedad" y produce aún MÁS aceite para compensar. La clave son texturas gel.</p>
            </div>
        </div>
      </section>

      {/* 4. PRODUCTOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Selección del Editor</span>
            <h2 className="font-serif text-3xl font-bold text-dark">Top 3: Rutina Control Grasa</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">Hemos filtrado cientos de productos. Estos son los únicos que cumplen con: textura ligera, activos reales y precio justo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acneProducts.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                    <div className="h-64 bg-gray-50 flex items-center justify-center relative p-4">
                        {item.image.includes('jpg') || item.image.includes('webp') ? (
                           <div className="relative w-full h-full">
                             <Image src={item.image} alt={item.name} fill className="object-contain hover:scale-105 transition-transform" />
                           </div>
                        ) : (
                           <span className="text-6xl group-hover:scale-110 transition-transform">🧴</span>
                        )}
                        
                        {item.tag && (
                            <div className="absolute top-4 right-4 bg-ruby text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                                {item.tag}
                            </div>
                        )}
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">{item.brand}</p>
                        <h3 className="font-serif text-xl font-bold mb-2 leading-tight">{item.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs mb-4">
                            <Star size={12} fill="currentColor" />
                            <span className="font-bold text-dark ml-1">{item.rating}</span> 
                            <span className="text-gray-400">({item.reviews} reseñas)</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-6 flex-grow">{item.description}</p>
                        <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer" className="w-full border border-dark text-dark font-bold py-3 rounded uppercase tracking-widest hover:bg-dark hover:text-white transition-colors text-xs flex items-center justify-center gap-2">
                            Ver Precio en Amazon <ExternalLink size={14}/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* 5. CONSEJO FINAL */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex gap-6 items-center shadow-sm">
            <CheckCircle2 className="text-emerald-btn flex-shrink-0" size={32} />
            <div>
                <h3 className="font-serif font-bold text-xl mb-1 text-emerald-900">Tu Rutina Simplificada</h3>
                <p className="text-emerald-800 text-sm leading-relaxed">
                   <strong>Mañana:</strong> Limpiador Suave + Hidratante (opcional) + <strong>Protector Oil Control</strong>.<br/>
                   <strong>Noche:</strong> Doble Limpieza + <strong>Tratamiento</strong> (ej: Effaclar o Serum).
                </p>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-gray-400 py-12 text-center text-sm border-t-4 border-ruby mt-auto">
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