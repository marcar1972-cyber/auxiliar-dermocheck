import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, Sun, Check, X, Beaker, ArrowLeft, Star, ExternalLink, CalendarClock, AlertCircle, Microscope, Fingerprint } from "lucide-react";

export const metadata = {
  title: 'Ojeras Marrones: La Ciencia de la Pigmentación y Vitamina C | DermoCheck',
  description: 'Guía médica basada en el Dr. Simón Scarano. Por qué el pigmento no se va durmiendo, qué es la Tirosinasa y top 3 contornos con Vitamina C.',
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

      {/* 2. HERO SEO: AUTORIDAD MÉDICA */}
      <section className="relative bg-white pt-8 pb-20 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Badge de Fuente Externa */}
          <a 
            href="https://vt.tiktok.com/ZSap6Npcm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-8 hover:bg-rose-800 transition-colors shadow-lg hover:shadow-rose-900/20 group"
          >
            <ExternalLink size={12} className="group-hover:animate-pulse" /> Analizado por Dr. Simón Scarano
          </a>

          <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
            ¿Ojeras Marrones? <br />
            <span className="text-rose-800 italic font-serif">El pigmento no se quita durmiendo.</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Si tu ojera es café, no te falta sueño, te sobra <strong>melanina</strong>. Explicamos la ciencia detrás de la hiperpigmentación periorbital y por qué la Vitamina C es el único activo capaz de "apagar" el color.
          </p>
        </div>
      </section>

      {/* 3. DICCIONARIO DE CIENCIA: EL PORQUÉ */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold mb-2 text-slate-900">Decodificando la Ojera</h2>
            <p className="text-slate-500">Entiende el problema para elegir la solución correcta.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Melanocitos */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-rose-800">
              <Microscope size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">El Origen: Melanocitos</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Las células que dan color a tu piel (melanocitos) están hiperactivas en la zona del ojo. Esto deposita pigmento marrón de forma crónica, creando ese efecto de "mapache" que el maquillaje apenas cubre.
            </p>
          </div>

          {/* Card 2: Tirosinasa */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-100/50 px-3 py-1 text-[10px] font-bold text-emerald-800 rounded-bl-xl uppercase tracking-wider">La Clave</div>
            <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              <Zap size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">El Objetivo: Tirosinasa</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Para borrar la mancha, necesitamos inhibir la <strong>enzima Tirosinasa</strong>. Aquí entra la Vitamina C: actúa como un interruptor que le dice a la célula "deja de producir color marrón".
            </p>
          </div>

          {/* Card 3: Fricción */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-slate-600">
              <Fingerprint size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">El Agravante: Fricción</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Frotarse los ojos no es inocente. La fricción mecánica genera inflamación, y la inflamación se convierte en pigmento. Si te frotas, anulas el efecto de tus cremas.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DARK: ESTRATEGIA CLÍNICA */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-[3rem] max-w-6xl mx-auto mb-16 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
             <h2 className="font-serif text-3xl font-bold text-white text-center md:text-left">
                Lo que dice el Dr. Scarano
             </h2>
             <a href="https://vt.tiktok.com/ZSap6Npcm/" target="_blank" className="text-xs font-bold text-rose-400 border border-rose-400/30 px-4 py-2 rounded-full hover:bg-rose-900/50 transition-colors uppercase tracking-widest flex items-center gap-2">
                Ver Video Original <ExternalLink size={12}/>
             </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-4 border-b border-rose-400/20 pb-2">Errores Comunes</h3>
              <div className="flex gap-4">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400 shrink-0"><X size={18} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Usar crema hidratante simple</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Una crema hidratante básica solo "moja" la piel. Para la ojera marrón, necesitas <strong>activos despigmentantes</strong>, no solo agua.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-rose-900/50 p-2 rounded-full h-fit text-rose-400 shrink-0"><X size={18} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Frotar al desmaquillar</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Usar algodones ásperos crea micro-traumas que oscurecen la zona. Usa limpiadores en aceite o bálsamos.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 border-b border-emerald-400/20 pb-2">La Estrategia Correcta</h3>
              <div className="flex gap-4">
                <div className="bg-emerald-900/50 p-2 rounded-full h-fit text-emerald-400 shrink-0"><Check size={18} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">Vitamina C Específica</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">No uses el serum de la cara en el ojo (puede irritar). Usa contornos formulados con Vitamina C estabilizada para esa zona delicada.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-900/50 p-2 rounded-full h-fit text-emerald-400 shrink-0"><Check size={18} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-emerald-100">Protección Solar</h4>
                  <p className="text-emerald-200/70 text-sm leading-relaxed">El sol oxida la melanina y la oscurece más. El protector solar en el contorno de ojos es <strong>obligatorio</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP 3 PRODUCTOS (AMAZON PICKS) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-800 font-bold tracking-widest text-xs uppercase mb-2 block text-center">
                Selección DermoCheck
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
                Top 3: Aliados con Vitamina C
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-center">
                Elegimos estos productos porque combinan potencia antioxidante con tolerancia ocular probada.
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
              <div className="p-8 flex flex-col flex-grow text-left">
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
              <div className="p-8 flex flex-col flex-grow text-left">
                <div className="flex items-center text-amber-400 mb-3 text-xs gap-1 font-bold">
                  <Star size={14} fill="currentColor" /> 4.6 <span className="text-slate-400 font-normal ml-1">(Muy Popular)</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 leading-tight">Olay Vitamin C + Peptide 24</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  Fórmula ligera y potente. Mezcla Vitamina C con <strong>Péptidos 24</strong> para una acción doble: ilumina la ojera y reafirma la piel flácida.
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
              <div className="p-8 flex flex-col flex-grow text-left">
                <div className="flex items-center text-amber-400 mb-3 text-xs gap-1 font-bold">
                  <Star size={14} fill="currentColor" /> 4.8 <span className="text-slate-400 font-normal ml-1">(Clínico)</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-900 leading-tight">Paula's Choice C5 Boost</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  Para ojeras rebeldes. Concentrado con <strong>5% de Vitamina C estabilizada</strong>. Es el tratamiento más potente de la lista para manchas difíciles.
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

      {/* 6. BANNER INTERLINKING (HERRAMIENTA OBLIGATORIA) */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto bg-slate-100 border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white p-4 rounded-full text-rose-800 shadow-sm">
                <CalendarClock size={32} />
            </div>
            <div className="flex-1 text-left">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Advertencia: La Vitamina C se oxida</h3>
                <p className="text-sm text-slate-600">
                    Si tu contorno de ojos cambia a color naranja oscuro, <strong>está vencido</strong> y manchará tu piel. Verifica el lote de tus productos Eucerin, Vichy y CeraVe aquí.
                </p>
            </div>
            <Link href="/#calculator-section" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors whitespace-nowrap">
                Verificar Vencimiento
            </Link>
        </div>
      </section>

      {/* 7. PROTOCOLO FINAL */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100 shadow-sm text-left">
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
                <li className="flex gap-3 items-start"><Check size={16} className="text-emerald-500 shrink-0 mt-0.5"/> <span><strong>Técnica:</strong> Usa el dedo anular (tiene menos fuerza) y aplica a toques suaves. ¡NO FROTES!</span></li>
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