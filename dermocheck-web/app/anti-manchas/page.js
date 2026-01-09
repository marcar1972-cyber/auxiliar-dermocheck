import Image from 'next/image';
import { CheckCircle2, ExternalLink, Star, Sparkles, ShieldAlert, Eye, AlertTriangle } from 'lucide-react';

// PRODUCTOS CONFIGURADOS CON TUS NUEVOS LINKS
const manchasProducts = [
  {
    id: 'manchas-1',
    brand: 'La Roche-Posay',
    name: 'Mela B3 Serum',
    description: 'La revolución con Melasyl™. Atrapa los precursores de melanina antes de que manchen. Resultados visibles en 1 semana.',
    rating: '4.5',
    reviews: '5k+',
    tag: 'Novedad 2025',
    image: '/lrp_mela_b3.jpg', 
    affiliateLink: 'https://amzn.to/4b6MndN', // Link Actualizado
    category: 'manchas'
  },
  {
    id: 'manchas-2',
    brand: 'La Roche-Posay',
    name: 'Anthelios Tinted Mineral',
    description: 'Protector con color (Óxidos de Hierro). Indispensable para melasma, ya que es el único filtro que bloquea la luz visible de pantallas.',
    rating: '4.7',
    reviews: '18k+',
    tag: 'Bloquea Luz Azul',
    image: '/lrp_tinted.jpg', 
    affiliateLink: 'https://amzn.to/4srHmm4', // Link Actualizado
    category: 'manchas'
  },
  {
    id: 'manchas-3',
    brand: 'CeraVe',
    name: 'Resurfacing Retinol Serum',
    description: 'Retinol encapsulado suave. Acelera la renovación celular para eliminar las capas de piel manchada sin irritación excesiva.',
    rating: '4.6',
    reviews: '45k+',
    tag: 'Renovador',
    image: '/cerave_retinol.jpg', 
    affiliateLink: 'https://amzn.to/452vEEr', // Link Corregido (Turquesa)
    category: 'manchas'
  }
];

export default function AntiManchasPage() {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* HEADER ELIMINADO (Ya está en layout.js) */}

      {/* 1. HERO: EL PROBLEMA */}
      <section className="bg-white px-6 py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-purple-50 text-purple-800 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 border border-purple-100">
                Protocolo Despigmentante
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Borra el Daño Solar y el Melasma <br/>
                <span className="text-ruby italic">Sin efecto rebote</span>
            </h1>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto space-y-4">
                <p>Las manchas no se borran frotando. Se borran inhibiendo la enzima que produce el pigmento (Tirosinasa).</p>
                <p>La clave es bloquear la luz visible y usar activos que "duerman" a los melanocitos sin irritarlos.</p>
            </div>
        </div>
      </section>

      {/* 2. DICCIONARIO */}
      <section className="bg-cream/50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-center mb-4">La Ciencia: ¿Qué buscar en la etiqueta?</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">Estos son los únicos ingredientes con respaldo clínico real.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-purple-50 p-2 rounded-full text-purple-600"><Sparkles size={20}/></div><h3 className="font-bold text-lg text-dark">Melasyl™ / Thiamidol</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Actúan atrapando los precursores de melanina. Más potentes que la Vitamina C.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-purple-50 p-2 rounded-full text-purple-600"><Eye size={20}/></div><h3 className="font-bold text-lg text-dark">Óxidos de Hierro</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Están en los protectores <strong>con color</strong>. ÚNICOS que bloquean la Luz Azul de pantallas, causa del melasma.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-purple-50 p-2 rounded-full text-purple-600"><ShieldAlert size={20}/></div><h3 className="font-bold text-lg text-dark">Retinol Encapsulado</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Elimina las células viejas manchadas de la superficie para revelar piel nueva y uniforme.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. MITOS */}
      <section className="bg-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-10 text-ruby"><AlertTriangle /><h2 className="font-serif text-2xl font-bold text-white">Errores Comunes</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5"><span className="text-ruby font-bold text-2xl leading-none">✗</span><div><h4 className="font-bold text-lg mb-1">"Usar limón o bicarbonato"</h4><p className="text-gray-400 text-sm leading-relaxed">Peligrosísimo. El limón es fototóxico y provoca quemaduras que dejan manchas negras.</p></div></div>
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5"><span className="text-ruby font-bold text-2xl leading-none">✗</span><div><h4 className="font-bold text-lg mb-1">"El protector solo en verano"</h4><p className="text-gray-400 text-sm leading-relaxed">Falso. La radiación UVA atraviesa nubes y vidrios los 365 días del año.</p></div></div>
            </div>
        </div>
      </section>

      {/* 4. PRODUCTOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12"><span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Selección del Editor</span><h2 className="font-serif text-3xl font-bold text-dark">Top 3: Protocolo Anti-Manchas</h2><p className="text-gray-500 mt-2 max-w-xl mx-auto">Productos seleccionados por su capacidad de inhibir la producción de melanina.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manchasProducts.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                    <div className="h-64 bg-gray-50 flex items-center justify-center relative p-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image src={item.image} alt={item.name} width={200} height={200} className="object-contain hover:scale-105 transition-transform" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                        </div>
                        {item.tag && (<div className="absolute top-4 right-4 bg-ruby text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm z-10">{item.tag}</div>)}
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">{item.brand}</p>
                        <h3 className="font-serif text-xl font-bold mb-2 leading-tight">{item.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500 text-xs mb-4"><Star size={12} fill="currentColor" /><span className="font-bold text-dark ml-1">{item.rating}</span><span className="text-gray-400">({item.reviews} reseñas)</span></div>
                        <p className="text-sm text-gray-500 mb-6 flex-grow">{item.description}</p>
                        <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer" className="w-full border border-dark text-dark font-bold py-3 rounded uppercase tracking-widest hover:bg-dark hover:text-white transition-colors text-xs flex items-center justify-center gap-2">Ver Precio en Amazon <ExternalLink size={14}/></a>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* 5. CONSEJO FINAL */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-100 flex gap-6 items-center shadow-sm flex-col md:flex-row text-center md:text-left">
            <CheckCircle2 className="text-purple-600 flex-shrink-0" size={32} />
            <div><h3 className="font-serif font-bold text-xl mb-1 text-purple-900">Paciencia y Constancia</h3><p className="text-purple-800 text-sm leading-relaxed">Las manchas tardan años en formarse. Espera resultados reales a partir de las <strong>8 a 12 semanas</strong> de uso diario. ¡No abandones el protector!</p></div>
        </div>
      </section>
      
      {/* FOOTER ELIMINADO (Ya está en layout.js) */}
      
    </div>
  );
}