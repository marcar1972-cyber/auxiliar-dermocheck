import Image from 'next/image';
import { CheckCircle2, ExternalLink, Star, Beaker, ShieldBan, Sun, AlertOctagon } from 'lucide-react';

// PRODUCTOS CORREGIDOS SEGÚN TUS ARCHIVOS DE IMAGEN
const acneProducts = [
  {
    id: 'acne-1',
    brand: 'CeraVe',
    name: 'Foaming Facial Cleanser',
    description: 'El limpiador #1 para piel grasa. Elimina el exceso de sebo sin alterar la barrera protectora gracias a sus ceramidas esenciales.',
    rating: '4.8',
    reviews: '95k+',
    tag: 'Top Ventas',
    image: '/cerave_foaming.jpg', // CORREGIDO (guion bajo)
    affiliateLink: 'https://amzn.to/3N9rftl', 
    category: 'acne'
  },
  {
    id: 'acne-2',
    brand: 'PanOxyl',
    name: 'Acne Foaming Wash 10%',
    description: 'Fuerza máxima. Contiene peróxido de benzoilo al 10% para matar las bacterias del acné rápidamente. Usar con precaución.',
    rating: '4.6',
    reviews: '62k+',
    tag: 'Acción Rápida',
    image: '/panoxyl.jpg', // Este estaba bien
    affiliateLink: 'https://amzn.to/3N1Cfce', 
    category: 'acne'
  },
  {
    id: 'acne-3',
    brand: 'EltaMD',
    name: 'UV Clear Facial Sunscreen SPF 46',
    description: 'Protector solar facial sin aceite, recomendado por dermatólogos para pieles propensas al acné, rosácea e hiperpigmentación.',
    rating: '4.7',
    reviews: '40k+',
    tag: 'Dermatólogos',
    image: '/eltamd_clear.jpg', // CORREGIDO (nombre completo)
    affiliateLink: 'https://amzn.to/49O1rL5', 
    category: 'acne'
  }
];

export default function AcnePage() {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* 1. HERO SEO */}
      <section className="bg-white px-6 py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 border border-emerald-100">
                Protocolo Dermatológico 2025
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Domina el Acné y el Brillo <br/>
                <span className="text-ruby italic">Sin destruir tu piel</span>
            </h1>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto space-y-4">
                <p>Lidiar con la piel grasa es frustrante. El error #1 es atacar el brillo con agresividad usando jabones fuertes o alcohol. Esto solo destruye tu <strong>barrera cutánea</strong> y provoca el temido <em>"efecto rebote"</em>.</p>
                <p>La dermatología moderna ya no busca "secar". Busca <strong>regular</strong>.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-400">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> No Comedogénico</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Sin Alcohol</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500"/> Activos Reales</span>
            </div>
        </div>
      </section>

      {/* 2. DICCIONARIO */}
      <section className="bg-cream/50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-center mb-4">La Ciencia: ¿Qué buscar en la etiqueta?</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">No compres por la marca, compra por el ingrediente.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><Beaker size={20}/></div><h3 className="font-bold text-lg text-dark">Ácido Salicílico</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Penetra profundo para disolver el tapón de grasa y "barrer" los puntos negros desde adentro.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><ShieldBan size={20}/></div><h3 className="font-bold text-lg text-dark">Niacinamida</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Calma la rojez inflamatoria y regula la producción de sebo sin resecar.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-3"><div className="bg-emerald-50 p-2 rounded-full text-emerald-600"><Sun size={20}/></div><h3 className="font-bold text-lg text-dark">Licochalcona A</h3></div>
                    <p className="text-sm text-gray-600 leading-relaxed">Potente antioxidante que reduce la micro-inflamación, causa raíz del acné recurrente.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. MITOS */}
      <section className="bg-dark text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-10 text-ruby"><AlertOctagon /><h2 className="font-serif text-2xl font-bold text-white">Mitos que arruinan tu piel</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5"><span className="text-ruby font-bold text-2xl leading-none">✗</span><div><h4 className="font-bold text-lg mb-1">"El sol seca los granitos"</h4><p className="text-gray-400 text-sm leading-relaxed">Ilusión peligrosa. El sol engrosa la piel y causa brotes explosivos después.</p></div></div>
                <div className="flex gap-4 items-start p-4 border border-gray-800 rounded-lg bg-white/5"><span className="text-ruby font-bold text-2xl leading-none">✗</span><div><h4 className="font-bold text-lg mb-1">"La pasta de dientes seca"</h4><p className="text-gray-400 text-sm leading-relaxed">El mentol causa quemaduras químicas y manchas oscuras.</p></div></div>
            </div>
            <div className="mt-8 p-6 bg-emerald-900/30 border border-emerald-800 rounded-xl text-center"><p className="text-emerald-200 font-bold text-lg mb-1">✓ La Verdad: La piel grasa necesita hidratación</p><p className="text-emerald-100/70 text-sm">Si no hidratas, tu piel produce MÁS aceite para compensar. Usa texturas gel.</p></div>
        </div>
      </section>

      {/* 4. PRODUCTOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12"><span className="text-ruby font-bold tracking-widest text-xs uppercase mb-2 block">Selección del Editor</span><h2 className="font-serif text-3xl font-bold text-dark">Top 3: Rutina Control Grasa</h2><p className="text-gray-500 mt-2 max-w-xl mx-auto">Filtramos cientos de productos. Estos son los únicos con textura ligera y precio justo.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acneProducts.map((item) => (
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
        <div className="max-w-3xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex gap-6 items-center shadow-sm flex-col md:flex-row text-center md:text-left">
            <CheckCircle2 className="text-emerald-btn flex-shrink-0" size={32} />
            <div><h3 className="font-serif font-bold text-xl mb-1 text-emerald-900">Tu Rutina Simplificada</h3><p className="text-emerald-800 text-sm leading-relaxed"><strong>Mañana:</strong> Limpiador Suave + Hidratante + <strong>Protector Oil Control</strong>.<br/><strong>Noche:</strong> Doble Limpieza + <strong>Tratamiento</strong> (ej: PanOxyl o Retinol).</p></div>
        </div>
      </section>
    </div>
  );
}