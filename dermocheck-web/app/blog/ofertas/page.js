import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, CalendarClock, AlertTriangle, Check, X, ArrowLeft, ExternalLink, Calculator, Tag, TrendingDown } from "lucide-react";

export const metadata = {
  title: 'Ahorro en Dermocosmética: Guía de Ofertas y Packs en Chile | DermoCheck',
  description: 'Aprende a identificar ofertas reales vs. vencimiento corto. Descubre el secreto de los formatos gigantes y cómo usar el Batch Code a tu favor.',
};

export default function OfertasPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* 1. BOTÓN VOLVER AL BLOG */}
      <div className="bg-white pt-6 px-6 max-w-6xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-rose-800 transition-colors group">
            <div className="bg-slate-100 p-2 rounded-full mr-3 group-hover:bg-rose-100 transition-colors">
                <ArrowLeft size={16} />
            </div>
            Volver al Blog
        </Link>
      </div>

      {/* 2. HERO SEO */}
      <section className="relative bg-white pt-8 pb-20 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100">
            Guía de Mercado 2026
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
            Dermocosmética en Chile: <br />
            <span className="text-rose-800 italic font-serif">Aprovecha ofertas sin caer en la trampa.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Los precios han subido y encontrar una rutina de calidad requiere estrategia. Ya seas paciente o farmacéutico, te enseñamos a distinguir un <strong>descuento real</strong> de una liquidación por vencimiento.
          </p>
        </div>
      </section>

      {/* 3. DICCIONARIO DEL AHORRO (Conceptos Clave) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold mb-2">Las 3 Reglas del Comprador Inteligente</h2>
            <p className="text-slate-500">Antes de pasar tu tarjeta, revisa estos puntos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Packs */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-rose-800">
              <ShoppingBag size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">La Estrategia "Packs"</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Vichy o Eucerin suelen lanzar packs con "regalos". Son la mejor opción de ahorro, pero a menudo se usan para rotar stock antiguo. <strong>Revisa siempre el lote</strong> de ambos productos.
            </p>
          </div>

          {/* Card 2: Calendario */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <CalendarClock size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">Días Clave</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cadenas como Cruz Verde o Salcobrand tienen calendarios fijos. No compres un lunes lo que tendrá un <strong>40% de descuento</strong> un jueves. Planifica tu reposición.
            </p>
          </div>

          {/* Card 3: Formatos */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-slate-600">
              <Tag size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">Formatos Gigantes</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              El secreto mejor guardado. Existen versiones de <strong>150ml (5 oz)</strong> de productos que acá solo llegan en 50ml. Misma fórmula, triple cantidad, casi el mismo precio.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DARK: MITOS Y REALIDADES DE LA OFERTA */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-white">¿Oferta o Liquidación Disfrazada?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* El Peligro */}
            <div className="space-y-6">
              <h3 className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-4">Activa tu Alarma</h3>
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">El descuento del 60%</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">En farmacia, un descuento tan agresivo en marcas premium casi siempre indica <strong>"Vencimiento Corto"</strong> (menos de 3 a 6 meses).</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400">
                  <X size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">¿Vale la pena?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Solo si lo usarás de inmediato. Si es para "guardar stock", estás perdiendo dinero. El producto podría oxidarse antes de abrirlo.</p>
                </div>
              </div>
            </div>

            {/* La Solución */}
            <div className="space-y-6">
              <h3 className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4">La Estrategia Correcta</h3>
              <div className="flex gap-4 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800/50">
                <div className="bg-emerald-500/20 p-2 rounded-full h-fit text-emerald-400">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">Compra Contra-Temporada</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">Consejo de Farmacéutico: Compra tu protector solar en invierno. Suelen estar hasta un <strong>30% más baratos</strong> que en temporada alta.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800/50">
                <div className="bg-emerald-500/20 p-2 rounded-full h-fit text-emerald-400">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">Verifica el Batch Code</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">Si la caja no tiene fecha clara, usa el código impreso en el envase para saber exactamente cuándo se fabricó.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTO DESTACADO (DATO PRO) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-800 font-bold tracking-widest text-xs uppercase mb-2 block">
                Dato PRO DermoCheck
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4">
                El "Hack" de Amazon: Triple Cantidad
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                En Chile, el estándar facial es 50ml. Encontrando el formato correcto (Body/Face) puedes obtener <strong>3 veces más producto</strong> por casi el mismo precio.
            </p>
          </div>

          {/* Tarjeta de Producto Única y Destacada */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300 group">
            
            {/* Imagen */}
            <div className="bg-slate-50 md:w-1/2 relative min-h-[300px] flex items-center justify-center p-8 group-hover:bg-slate-100 transition-colors">
                <span className="absolute top-6 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm flex items-center gap-1">
                  <TrendingDown size={14} /> Mejor Valor
                </span>
                <div className="relative w-64 h-64">
                   <Image 
                      src="/Eucerin Sun Advanced.jpg" 
                      alt="Eucerin Sun Advanced Hydration 150ml" 
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
            </div>

            {/* Contenido */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center text-amber-400 mb-4 text-sm font-bold gap-1">
                  ★★★★★ <span className="text-slate-400 font-normal">(4.7/5 • Amazon Choice)</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900 leading-tight">
                    Eucerin Advanced Hydration SPF 50
                </h3>
                
                <div className="mb-6 space-y-2">
                    <p className="text-slate-600 leading-relaxed">
                        Este envase trae <strong>150ml (5 fl oz)</strong>. Un Eucerin facial normal en farmacia trae solo 50ml.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-2 mt-4">
                        <li className="flex gap-2 items-center"><Check size={16} className="text-rose-800"/> Con Ácido Hialurónico.</li>
                        <li className="flex gap-2 items-center"><Check size={16} className="text-rose-800"/> Textura ligera (Face & Body).</li>
                        <li className="flex gap-2 items-center"><Check size={16} className="text-rose-800"/> Apto para piel sensible.</li>
                    </ul>
                </div>

                <div className="mt-auto pt-4">
                    <a 
                        href="https://amzn.to/4qatg6W" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-rose-800 text-white font-bold py-4 rounded-xl hover:bg-rose-900 transition-colors text-sm uppercase tracking-wide shadow-md hover:shadow-lg"
                    >
                        Ver Precio (150ml) <ExternalLink size={16} />
                    </a>
                    <p className="text-[10px] text-slate-400 text-center mt-3">
                        DermoCheck puede recibir una comisión por compras elegibles.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKING (HERRAMIENTA OBLIGATORIA) */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-slate-100 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white p-4 rounded-full text-rose-800 shadow-sm">
                <Calculator size={32} />
            </div>
            <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">¿Esa oferta está por vencer?</h3>
                <p className="text-sm text-slate-600">
                    No dejes que te engañen con liquidaciones. Verifica la fecha real de fabricación de tus productos 
                    <strong> Eucerin, Vichy, La Roche-Posay e ISDIN</strong> antes de comprar.
                </p>
            </div>
            <Link href="/#calculator-section" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors whitespace-nowrap">
                Verificar Lote (Batch Code)
            </Link>
        </div>
      </section>

    </div>
  );
}