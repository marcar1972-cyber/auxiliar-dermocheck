import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Video, Check, X, AlertCircle, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: '¿Dedos o Espátula? La Verdad sobre la Aplicación de Cremas | DermoCheck',
  description: '¿Es malo meter el dedo en la crema? El Dr. Simón Scarano explica por qué los conservantes protegen tu skincare y cuándo sí es necesaria una espátula.',
};

export default function EspatulaPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="bg-white pt-6 px-6 max-w-6xl mx-auto text-left">
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
          <span className="inline-block py-1 px-4 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100">
            Dermatólogo Explica
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
            ¿Dedos o Espátula? <br />
            <span className="text-rose-800 italic font-serif">La Verdad sobre la Aplicación de Cremas</span>
          </h1>
          
          <div className="flex justify-center gap-6 mt-8 text-slate-400 text-xs font-bold uppercase tracking-tighter">
            <span className="flex items-center gap-1"><Clock size={14}/> 24 Enero, 2026</span>
            <span className="flex items-center gap-1">Equipo DermoCheck</span>
          </div>

          <div className="text-lg text-slate-600 max-w-3xl mx-auto mt-10 leading-relaxed text-left space-y-6 font-light">
            <p>
              ¿Alguna vez te has sentido culpable por "meter el dedo" en tu crema favorita? Existe un mito muy extendido en el mundo del <strong>skincare</strong>: la creencia de que es obligatorio usar una espátula para evitar convertir nuestros productos en un caldo de cultivo de bacterias.
            </p>
            <p>
              Recientemente, el dermatólogo <strong>Dr. Simón Scarano</strong> abordó este tema viral, desmitificando el pánico con ciencia clara: <span className="text-rose-800 italic">"No es necesario usar una espátula para aplicar sus productos; usar los dedos es completamente seguro en la mayoría de los casos"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EL MITO Y LA CIENCIA */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white">
                <Image 
                    src="/aplicar-mano.png" 
                    alt="Uso de dedos en crema facial" 
                    fill 
                    className="object-cover"
                />
            </div>
            <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-slate-900">El Mito de la Contaminación por Contacto</h2>
                <p className="text-slate-600 leading-relaxed">
                  Es común pensar que nuestros dedos arruinarán la fórmula. Sin embargo, no hay motivo para entrar en pánico.
                </p>
                <h3 className="text-xl font-bold text-slate-900">¿Por qué tus dedos no arruinan tu crema?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Como explica el Dr. Scarano, la industria cosmética formula los productos pensando en su uso real. Las cremas contienen <strong>conservantes específicos</strong> que actúan como un escudo protector, diseñados para inhibir el crecimiento de microorganismos (bacterias y hongos) incluso tras el contacto repetido.
                </p>
            </div>
        </div>

        {/* CTA VIDEO */}
        <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-4">
                <div className="bg-rose-800 p-3 rounded-full text-white">
                    <Video size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">🎥 Lo dice el experto</h4>
                    <p className="text-sm text-slate-600">Si quieres ver la explicación detallada del Dr. Simón Scarano, puedes ver su video viral aquí:</p>
                </div>
            </div>
            <Link 
                href="https://vt.tiktok.com/ZSaprwB3S/" 
                target="_blank" 
                className="bg-rose-800 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-rose-900 transition-all whitespace-nowrap shadow-md"
            >
                Ver video en TikTok →
            </Link>
        </div>

        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">La Regla de Oro: Higiene Básica</h2>
        <div className="space-y-6 text-slate-600 text-lg mb-16">
            <p>
              La única condición innegociable es el sentido común y la <strong>higiene</strong>.
            </p>
            <p>
              <strong>Manos Limpias:</strong> <span className="italic">"Nadie va a aplicarse una crema con las manos llenas de barro o suciedad"</span>, señala Scarano. Lávate bien las manos antes de tu rutina; es una regla de salud básica.
            </p>
        </div>
      </section>

      {/* 4. SECCIÓN DARK: RIESGOS REALES */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-[3rem] max-w-6xl mx-auto mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4 text-center">¿Qué Realmente Pone en Riesgo tus Productos?</h2>
          <p className="text-center text-slate-400 mb-12">Si los dedos no son los culpables, ¿qué daña nuestras cremas? El riesgo real de contaminación proviene de dos factores clave que a menudo confundimos:</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-rose-800/20 transition-colors">
                    <AlertCircle size={120} />
                </div>
                <h4 className="font-bold text-xl text-white mb-4">1. El PAO (Tarrito Abierto)</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Es el símbolo que ves en la caja (ej: 6M, 12M). Indica cuántos meses dura la crema <strong>una vez que la abriste</strong>. Esto depende de ti: si abriste una crema hace 2 años, sus conservantes ya no sirven, aunque uses espátula.
                </p>
            </div>
            <div className="bg-rose-800/10 p-8 rounded-2xl border border-rose-800/20 relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-white/5">
                    <Calendar size={120} />
                </div>
                <h4 className="font-bold text-xl text-white mb-4">2. La Fecha de Fabricación</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A veces compramos productos "nuevos" que llevan años en bodega. Si tu envase solo trae un código y no la fecha, usa nuestra herramienta.
                </p>
                <Link href="https://www.dermocheck.cl/#calculator-section" className="text-rose-400 font-bold hover:text-rose-300 transition-colors inline-flex items-center gap-2">
                    Usar Verificador DermoCheck →
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUÁNDO SÍ USAR ESPÁTULA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-left">
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">¿Cuándo SÍ recomienda el experto usar Espátula?</h2>
        <p className="text-slate-600 mb-8">Aunque en casa es opcional, el Dr. Scarano destaca tres escenarios donde la espátula tiene sentido:</p>
        
        <div className="space-y-4">
            <div className="flex gap-4 items-start border-l-4 border-rose-800 pl-6 py-2">
                <p className="text-slate-700"><strong>Uso Profesional:</strong> En gabinetes o consultorios donde el producto se usa en múltiples pacientes.</p>
            </div>
            <div className="flex gap-4 items-start border-l-4 border-rose-800 pl-6 py-2">
                <p className="text-slate-700"><strong>Productos Compartidos:</strong> Si muchas personas van a probar la misma crema.</p>
            </div>
            <div className="flex gap-4 items-start border-l-4 border-rose-800 pl-6 py-2">
                <p className="text-slate-700"><strong>Infecciones:</strong> Si tienes heridas o infecciones en los dedos para no trasladar patógenos.</p>
            </div>
        </div>

        <div className="mt-20 bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 text-center">
            <h2 className="font-serif text-3xl font-bold text-emerald-900 mb-6">Conclusión</h2>
            <p className="text-lg text-emerald-800 leading-relaxed italic">
                En resumen: <strong>"Que nadie te trate de delincuente por usar tus dedos"</strong>. La espátula es una elección estética, no una obligación sanitaria. Disfruta tu rutina sin culpa, siempre con las manos limpias.
            </p>
            <p className="mt-6 font-bold text-emerald-900">— Equipo DermoCheck</p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 text-center border-t border-slate-200">
        <Link href="/marcas" className="group inline-flex items-center gap-3 text-rose-800 font-bold uppercase tracking-widest text-sm">
            Explorar Marcas de Confianza <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
        </Link>
      </section>

    </div>
  );
}