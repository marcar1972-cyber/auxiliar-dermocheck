import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, Sun, Moon, Check, X, Beaker, ArrowLeft, Star, ExternalLink, CalendarClock, AlertCircle } from "lucide-react";

export const metadata = {
  title: 'Ojeras Pigmentarias: Cómo eliminarlas con Vitamina C | DermoCheck',
  description: 'Guía médica para tratar ojeras marrones. Descubre por qué aparecen, el error de frotarse los ojos y los mejores contornos con Vitamina C.',
};

export default function OjerasPage() {
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

      {/* 2. HERO SEO (Con enlace externo al Dr. Scarano) */}
      <section className="relative bg-white pt-8 pb-20 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <a 
            href="https://vt.tiktok.com/ZSap6Npcm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100 hover:bg-rose-100 transition-colors"
          >
            <ExternalLink size={12} /> Fuente: Dr. Simón Scarano
          </a>
          <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
            ¿Ojeras Marrones? <br />
            <span className="text-rose-800 italic font-serif">El pigmento no se va durmiendo.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Las ojeras pigmentarias surgen cuando los <strong>melanocitos</strong> de la zona ocular producen más melanina de lo normal. No es cansancio, es un depósito de color que requiere activos específicos.
          </p>
        </div>
      </section>

      {/* 3. DICCIONARIO DE CIENCIA (Factores y Soluciones) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold mb-2">La Ciencia del Problema (y la Solución)</h2>
            <p className="text-slate-500">Para eliminar la ojera, primero debes entender qué la causa.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: El Enemigo (Fricción) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-rose-800">
              <AlertCircle size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">El Factor Fricción</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Frotarse los ojos frecuente e intensamente activa los melanocitos. Es una de las causas principales de las manchas oscuras permanentes en esta zona.
            </p>
          </div>

          {/* Card 2: Vitamina C */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <Zap size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">Vitamina C</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              El ingrediente estrella. Funciona <strong>inactivando la enzima</strong> encargada de producir el pigmento. Además, estimula el colágeno para tratar líneas finas.
            </p>
          </div>

          {/* Card 3: Glutatión */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <Beaker size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">Glutatión</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              El aliado silencioso. Un antioxidante complementario que contribuye al proceso de aclarar la piel y unificar el tono progresivamente.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DARK: MITOS Y CAUSAS */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-white">Lo que empeora tus ojeras</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Factores Negativos */}
            <div className="space-y-6">
              <h3 className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-4">Evita esto a toda costa</h3>
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400">
                  <X size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Maquillaje de mala calidad</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Productos irritantes inflaman la piel. La inflamación crónica se convierte en hiperpigmentación (mancha).</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400">
                  <X size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Frotar sin piedad</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Al desmaquillarte o por alergia. La fricción mecánica rompe vasos y oscurece la piel "a la fuerza".</p>
                </div>
              </div>
            </div>

            {/* Factores Positivos */}
            <div className="space-y-6">
              <h3 className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4">La Verdad Médica</h3>
              <div className="flex gap-4 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800/50">
                <div className="bg-emerald-500/20 p-2 rounded-full h-fit text-emerald-400">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">La paciencia paga</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">Las ojeras pigmentarias NO se van en 2 días. Los despigmentantes necesitan constancia diaria para frenar la producción de melanina.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-emerald-900/20 border border-emerald-800/50">
                <div className="bg-emerald-500/20 p-2 rounded-full h-fit text-emerald-400">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">Genética no es sentencia</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">Aunque tengas predisposición genética, el uso de Vitamina C y protección solar puede mejorar visiblemente el tono.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GRID DE PRODUCTOS (TOP 3) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-800 font-bold tracking-widest text-xs uppercase mb-2 block">
                Selección DermoCheck
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Top 3: Aliados con Vitamina C
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Elegimos estos productos porque son efectivos despigmentando pero suaves con la piel fina del ojo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            
            {/* PRODUCTO 1: CERAVE */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="bg-slate-50 h-64 relative flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                  Dermatólogo Choice
                </span>
                <div className="relative w-40 h-40">
                   <Image 
                      src="/cerave-vit-c.jpg" 
                      alt="CeraVe Skin Renewing Vitamin C Eye Cream" 
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-amber-400 mb-3 text-xs gap-1 font-bold">
                  <Star size={14} fill="currentColor" /> 4.6 <span className="text-slate-400 font-normal ml-1">(Piel Sensible)</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 leading-tight">CeraVe Skin Renewing</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  Ideal para empezar. Combina <strong>Vitamina C pura</strong> con 3 ceramidas esenciales para iluminar sin irritar la barrera cutánea.
                </p>
                <a 
                  href="https://amzn.to/46c7cAY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm uppercase tracking-wide"
                >
                  Ver Precio <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* PRODUCTO 2: OLAY */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-t-4 border-t-emerald-500 border-x border-b border-slate-100 flex flex-col transform md:-translate-y-4 h-full relative z-10">
              <div className="bg-slate-50 h-64 relative flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                  Best Seller
                </span>
                <div className="relative w-44 h-44">
                   <Image 
                      src="/olay-vit-c.jpg" 
                      alt="Olay Vitamin C + Peptide 24" 
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-amber-400 mb-3 text-xs gap-1 font-bold">
                  <Star size={14} fill="currentColor" /> 4.6 <span className="text-slate-400 font-normal ml-1">(Muy Popular)</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 leading-tight">Olay Vitamin C + Peptide 24</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  Fórmula ligera y potente. Mezcla Vitamina C con <strong>Péptidos 24</strong> para una acción doble: ilumina la ojera y reafirma la piel.
                </p>
                <a 
                  href="https://amzn.to/4ahu1om" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm uppercase tracking-wide shadow-md hover:shadow-lg"
                >
                  Ver Oferta del Día <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* PRODUCTO 3: PAULA'S CHOICE */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="bg-slate-50 h-64 relative flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                <span className="absolute top-4 left-4 bg-rose-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                  Alta Gama
                </span>
                <div className="relative w-40 h-40">
                   <Image 
                      src="/paulas-choice-vit-c.jpg" 
                      alt="Paula's Choice C5 Super Boost" 
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-amber-400 mb-3 text-xs gap-1 font-bold">
                  <Star size={14} fill="currentColor" /> 4.8 <span className="text-slate-400 font-normal ml-1">(Clínico)</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 leading-tight">Paula's Choice C5 Boost</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  Para ojeras rebeldes. Concentrado con <strong>5% de Vitamina C estabilizada</strong>. Es el tratamiento más potente de la lista.
                </p>
                <a 
                  href="https://amzn.to/3NQspKx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-900 text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors text-sm uppercase tracking-wide"
                >
                  Ver Precio <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKING (DERMOCHECK TOOL) */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-slate-100 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white p-4 rounded-full text-rose-800 shadow-sm">
                <CalendarClock size={32} />
            </div>
            <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">¿Tu crema sigue siendo efectiva?</h3>
                <p className="text-sm text-slate-600">
                    Usar productos vencidos causa irritación y más manchas. Verifica el lote de tus productos 
                    <strong> Eucerin, Vichy, La Roche-Posay e ISDIN</strong> en nuestra herramienta gratuita.
                </p>
            </div>
            <Link href="/#calculator-section" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors whitespace-nowrap">
                Verificar Vencimiento
            </Link>
        </div>
      </section>

      {/* 7. PROTOCOLO FINAL (Rutina) */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-emerald-900 mb-2">Protocolo de Aplicación 📝</h2>
            <p className="text-emerald-700 text-sm">Sigue este orden estricto para asegurar el éxito del tratamiento.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                <Sun className="text-amber-500" />
                <h3 className="font-bold text-slate-900">Cuándo y Cómo</h3>
              </div>
              <ul className="text-sm text-slate-600 space-y-4">
                <li className="flex gap-3 items-start"><Check size={16} className="text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Orden:</strong> Primer paso después de la limpieza (antes de la crema facial).</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Tolerancia:</strong> Empieza día de por medio. Si no arde, pasa a uso diario.</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Técnica:</strong> Usa el dedo anular (tiene menos fuerza) y aplica a toques suaves.</span></li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                <ShieldCheck className="text-indigo-500" />
                <h3 className="font-bold text-slate-900">La Regla de Oro</h3>
              </div>
              <div className="text-sm text-slate-600 space-y-4">
                <p className="leading-relaxed">
                    Si usas despigmentantes pero no te proteges del sol, <strong>estás perdiendo el tiempo</strong>. El sol vuelve a oxidar la melanina que intentas borrar.
                </p>
                <div className="bg-emerald-100/50 p-4 rounded-lg border border-emerald-100 text-emerald-800 font-bold text-center">
                    ¡Protector Solar Obligatorio!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}