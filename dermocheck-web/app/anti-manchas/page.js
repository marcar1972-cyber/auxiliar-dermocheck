import Image from 'next/image';
import { CheckCircle2, ExternalLink, Star, Sun, ShieldAlert, Sparkles, AlertTriangle, Eye } from 'lucide-react';
// Importamos la base de datos
import { products } from '../data/products';

export default function AntiManchasPage() {
  // Filtramos solo los productos de manchas
  const manchasProducts = products.filter(product => product.category === 'manchas');

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
          <a href="/acne" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Acné & Piel Grasa</a>
          <a href="/anti-manchas" className="text-ruby border-b-2 border-ruby pb-1">Anti-Manchas</a>
          <a href="/anti-edad" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Anti-Edad</a>
          <a href="/marcas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">Marcas</a>
        </nav>
      </header>

      {/* 1. HERO: EL PROBLEMA */}
      <section className="bg-white px-6 py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-purple-50 text-purple-800 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 border border-purple-100">
                Protocolo Despigmentante
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Borra el Daño Solar y el Melasma <br/>
                <span className="text-ruby italic">Sin efecto rebote</span>
            </h1>
            <div className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto space-y-4">
                <p>
                    Las manchas no se borran frotando. Se borran inhibiendo la enzima que produce el pigmento (Tirosinasa). 
                </p>
                <p>
                    Ya sea melasma hormonal, manchas de sol o marcas antiguas de acné, la clave es bloquear la luz visible y usar activos que "duerman" a los melanocitos sin irritarlos.
                </p>
            </div>
        </div>
      </section>

      {/* 2. DICCIONARIO DE ACTIVOS */}
      <section className="bg-cream/50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-center mb-4">La Ciencia: ¿Qué buscar en la etiqueta?</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">Estos son los únicos ingredientes con respaldo clínico real.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ACTIVO 1 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-purple-50 p-2 rounded-full text-purple-600"><Sparkles size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Melasyl™ / Thiamidol</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Las moléculas modernas. Actúan atrapando los precursores de melanina antes de que suban a la superficie. Más potentes que la Vitamina C.
                    </p>
                </div>
                {/* ACTIVO 2 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-purple-50 p-2 rounded-full text-purple-600"><Eye size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Óxidos de Hierro</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Están en los protectores <strong>con color</strong>. Son los ÚNICOS que bloquean la Luz Azul de pantallas y sol, la principal causa del melasma recurrente.
                    </p>
                </div>
                {/* ACTIVO 3 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-purple-50 p-2 rounded-full text-purple-600"><ShieldAlert size={20}/></div>
                        <h3 className="font-bold text-lg text-dark">Retinol Encapsulado</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Acelera la renovación celular. Elimina las células viejas manchadas de la superficie para revelar piel nueva y uniforme.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. MITOS */}
      <section className="bg-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-10 text-ruby">
                <AlertTriangle />
                <h2 className="font-serif text-2xl font-bold text-white">Errores Comunes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5">
                    <span className="text-ruby font-bold text-2xl leading-none">✗</span>
                    <div>
                        <h4 className="font-bold text-lg mb-1">"Usar limón o bicarbonato"</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Peligrosísimo. El limón es fototóxico: al contacto con el sol provoca quemaduras químicas que dejan manchas negras permanentes.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5">
                    <span className="text-ruby font-bold text-2xl leading-none">✗</span>
                    <div>
                        <h4 className="font-bold text-lg mb-1">"El protector solo en verano"</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Falso. La radiación UVA (la que mancha) atraviesa las nubes y los vidrios de las ventanas los 365 días del año.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. PRODUCTOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Selección del Editor</span>
            <h2 className="font-serif text-3xl font-bold text-dark">Top 3: Protocolo Anti-Manchas</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">Productos seleccionados por su capacidad de inhibir la producción de melanina y bloquear la luz visible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manchasProducts.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                    <div className="h-64 bg-gray-50 flex items-center justify-center relative p-4">
                        {item.image.includes('jpg') || item.image.includes('webp') || item.image.includes('png') ? (
                           <div className="relative w-full h-full">
                             <Image src={item.image} alt={item.name} fill className="object-contain hover:scale-105 transition-transform" />
                           </div>
                        ) : (
                           <span className="text-6xl group-hover:scale-110 transition-transform">✨</span>
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
        <div className="max-w-3xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-100 flex gap-6 items-center shadow-sm">
            <CheckCircle2 className="text-purple-600 flex-shrink-0" size={32} />
            <div>
                <h3 className="font-serif font-bold text-xl mb-1 text-purple-900">Paciencia y Constancia</h3>
                <p className="text-purple-800 text-sm leading-relaxed">
                   Las manchas tardan años en formarse y no se van en una semana. Espera ver resultados reales a partir de las <strong>8 a 12 semanas</strong> de uso diario. ¡No abandones el protector con color!
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