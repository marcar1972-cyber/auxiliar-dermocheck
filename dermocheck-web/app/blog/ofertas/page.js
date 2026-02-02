import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, CalendarClock, AlertTriangle, Check, X, ArrowLeft, ExternalLink, Calculator, Tag, TrendingDown, PackageCheck, Star } from "lucide-react";

export const metadata = {
  title: 'Ahorro en Skincare: Guía de Ofertas y Formatos Profesionales | DermoCheck',
  description: 'Aprende a identificar ofertas reales vs. vencimiento corto. El secreto de los accesorios profesionales que ahorran miles de pesos en Chile.',
};

export default function OfertasPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500 text-left">
      
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
          <h1 className="font-serif text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900 text-center">
            Skincare en Chile: <br />
            <span className="text-rose-800 italic font-serif">Aprovecha ofertas sin caer en la trampa.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-center font-light">
            Los precios han subido. Te enseñamos a distinguir un <strong>descuento real</strong> de una liquidación por vencimiento y cómo invertir en productos que duran años.
          </p>
        </div>
      </section>

      {/* 3. DICCIONARIO DEL AHORRO */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold mb-2 text-slate-900">Las 3 Reglas del Comprador Inteligente</h2>
            <p className="text-slate-500">Optimiza tu presupuesto dermatológico.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-rose-800">
              <ShoppingBag size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">La Estrategia "Packs"</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Los packs de farmacia son la mejor opción de ahorro, pero a menudo rotan stock antiguo. <strong>Revisa siempre el lote</strong> de ambos productos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
            <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <CalendarClock size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">Días Clave</h3>
            <p className="text-sm text-slate-600 leading-relaxed text-left">
              Cadenas locales tienen calendarios fijos. No compres un lunes lo que tendrá un <strong>40% de descuento</strong> un jueves.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-slate-600 text-left">
              <Tag size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 text-left">Inversión a Largo Plazo</h3>
            <p className="text-sm text-slate-600 leading-relaxed text-left font-light">
              El ahorro real no es solo comprar barato, sino eliminar gastos recurrentes (algodones, desmaquillantes) por herramientas de grado profesional.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DARK: ¿OFERTA O LIQUIDACIÓN? */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-[3rem] max-w-6xl mx-auto mb-16 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-white">¿Oferta o Liquidación Disfrazada?</h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h4 className="text-rose-400 font-bold uppercase text-xs flex items-center gap-2 tracking-widest text-left">
                <AlertTriangle size={16}/> Activa tu Alarma
              </h4>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-left">
                <p className="font-bold mb-2">El descuento del 60%</p>
                <p className="text-sm text-slate-400 leading-relaxed text-left font-light">En marcas premium, esto indica <strong>"Vencimiento Corto"</strong>. Solo sirve si lo usarás de inmediato y no para guardar.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-emerald-400 font-bold uppercase text-xs flex items-center gap-2 tracking-widest text-left">
                <Check size={16}/> La Solución
              </h4>
              <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-800/50 text-left">
                <p className="font-bold mb-2">Verifica el Batch Code</p>
                <p className="text-sm text-emerald-100/70 leading-relaxed text-left font-light">Usa nuestra herramienta para saber exactamente cuándo se fabricó el producto antes de pagar en caja.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTO DESTACADO (MAKEUP ERASER) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-800 font-bold tracking-widest text-xs uppercase mb-2 block text-center">
                Dato PRO DermoCheck
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
                El "Hack" de Amazon: Adiós a los Algodones
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-center font-light">
                El ahorro en skincare también está en eliminar los desechables. Este set profesional reemplaza 3,600 toallitas y <strong>sí despacha a Chile.</strong>
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300 group">
            
            <div className="bg-slate-50 md:w-1/2 relative min-h-[300px] flex items-center justify-center p-8">
                <span className="absolute top-6 left-6 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm flex items-center gap-1">
                  <PackageCheck size={14} /> Envío Confirmado a Chile
                </span>
                <div className="relative w-64 h-64">
                   <Image 
                      src="/makeuperaser.jpg" 
                      alt="The Original MakeUp Eraser 7-Day Set" 
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
            </div>

            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center text-left">
                <div className="flex items-center text-amber-400 mb-4 text-sm font-bold gap-1 text-left">
                  <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/>
                  <span className="text-slate-400 font-normal ml-2 text-left text-xs">(4.6/5 • Amazon Choice)</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900 leading-tight text-left">
                    The Original MakeUp Eraser Set
                </h3>
                
                <div className="mb-6 space-y-2 text-left">
                    <p className="text-slate-600 text-sm leading-relaxed text-left italic font-light">
                        Set de 7 días (uno para cada día de la semana). Elimina maquillaje incluso a prueba de agua usando solo agua tibia.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-2 mt-4 text-left">
                        <li className="flex gap-2 items-center text-left font-medium"><Check size={16} className="text-rose-800"/> Antibacteriano y Dermatológico.</li>
                        <li className="flex gap-2 items-center text-left font-medium"><Check size={16} className="text-rose-800"/> Lavable a máquina (Dura 3 a 5 años).</li>
                        <li className="flex gap-2 items-center text-left font-medium"><Check size={16} className="text-rose-800"/> <strong>Ahorro masivo en desmaquillantes.</strong></li>
                    </ul>
                </div>

                <div className="mt-auto pt-4 text-left">
                    <a 
                        href="https://amzn.to/4qYbF2G" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-rose-800 text-white font-bold py-4 rounded-xl hover:bg-rose-900 transition-colors text-sm uppercase tracking-wide shadow-md"
                    >
                        Ver Precio en Amazon <ExternalLink size={16} />
                    </a>
                    <p className="text-[10px] text-slate-400 text-center mt-3 text-left">
                        DermoCheck puede recibir una comisión por compras elegibles.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKING (BANNER POTENCIADO) */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-white border-2 border-rose-800/20 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-16 -mt-16 z-0"></div>
            
            <div className="bg-rose-800 p-5 rounded-2xl text-white shadow-lg relative z-10">
                <Calculator size={40} />
            </div>
            
            <div className="flex-1 text-left relative z-10">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 text-left">¿Esa oferta está por vencer?</h3>
                <p className="text-slate-600 text-left leading-relaxed">
                    No dejes que te engañen con liquidaciones de último minuto. Verifica la fecha real de fabricación de tus productos <strong>Eucerin, Vichy, La Roche-Posay e ISDIN</strong> antes de comprar.
                </p>
            </div>
            
            <Link 
              href="/#calculator-section" 
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-rose-800 transition-all shadow-lg relative z-10 whitespace-nowrap active:scale-95"
            >
                Verificar Lote (Batch Code)
            </Link>
        </div>
      </section>

    </div>
  );
}