import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Check, Zap, Star, Globe } from "lucide-react";

export const metadata = {
  title: 'Blog DermoCheck | Inteligencia en Cosmética y Skincare Científico',
  description: 'Análisis experto de Eucerin, Vichy y CeraVe. Guías de ingredientes, rutinas dermatológicas y hacks de ahorro inteligente en Chile.',
};

const posts = [
  {
    title: "¿Ojeras Marrones? La Vitamina C que sí funciona",
    slug: "ojeras",
    excerpt: "Descubre por qué las ojeras pigmentarias requieren activos que inactiven la enzima tirosinasa. Análisis de fórmulas que realmente aclaran la mirada.",
    image: "/cerave-vit-c.jpg",
    tag: "Ciencia",
    readTime: "5 min",
  },
  {
    title: "Dermocosmética en Chile: Ofertas y Formatos Gigantes",
    slug: "ofertas",
    excerpt: "Analizamos el mercado local y global. Cómo identificar descuentos reales y el secreto de los formatos que triplican el producto por el mismo precio.",
    image: "/Eucerin Sun Advanced.jpg",
    tag: "Ahorro PRO",
    readTime: "4 min",
  },
  {
    title: "¿Dedos o Espátula? Mitos sobre la Contaminación",
    slug: "espatula-vs-dedos",
    excerpt: "Desmitificamos el pánico viral. Por qué los conservantes de tu crema son un escudo real y cuándo es estrictamente necesario usar herramientas.",
    image: "/aplicar-mano.png",
    tag: "Protocolos",
    readTime: "3 min",
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* 1. HERO EDITORIAL: MÁXIMA AUTORIDAD SEO */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-rose-800 font-bold tracking-widest text-[10px] uppercase bg-rose-50 border border-rose-100 py-1 px-4 rounded-full mb-6 inline-block">
                Dermatología Cosmética • Análisis de Ingredientes 2026
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Guía Definitiva de Skincare: <br />
                <span className="text-rose-800 italic">Ciencia y Rutinas para tu Piel</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Bienvenido al centro de inteligencia en cosmética. Aquí encontrarás <strong>análisis profundos de fórmulas</strong>, comparativas de marcas líderes como <strong>Eucerin, Vichy y CeraVe</strong>, y protocolos basados en evidencia científica para cuidar tu salud cutánea de forma inteligente.
            </p>

            {/* Señales de confianza para Google Bots */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <Check size={14} className="text-emerald-500" /> Contenido Verificado
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-6">
                <Star size={14} className="text-rose-800" /> Independencia Editorial
              </div>
            </div>
        </div>
      </section>

      {/* 2. GRILLA DE ARTÍCULOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
              <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col w-full transform hover:-translate-y-2">
                
                {/* Thumbnail con Badge */}
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                       <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-700"
                       />
                    </div>
                    <span className="absolute top-6 left-6 bg-white/95 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-full text-slate-900 border border-slate-100 shadow-sm uppercase tracking-tighter">
                        {post.tag}
                    </span>
                </div>

                {/* Contenido Editorial */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-rose-800 transition-colors leading-snug">
                        {post.title}
                    </h2>
                    
                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                        <span className="text-rose-800 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all flex items-center gap-2">
                            Leer Análisis <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. BANNER DE INTERLINKING: EL VERIFICADOR */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                    <Zap size={40} className="text-rose-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">¿Dudas con la vigencia de tu producto?</h2>
                    <p className="text-slate-400 text-lg mb-0 max-w-xl">
                        No apliques cremas sin estar seguro de su frescura. Usa nuestro verificador de <strong>Batch Code</strong> para marcas como Eucerin, Vichy e ISDIN.
                    </p>
                </div>
                <Link 
                    href="/#calculator-section" 
                    className="bg-rose-800 text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-rose-700 transition-all uppercase tracking-widest shadow-lg"
                >
                    Probar Herramienta
                </Link>
            </div>
        </div>
      </section>

      {/* 4. FOOTER DE CALIDAD SEO */}
      <section className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">
                © 2026 DermoCheck Chile • Inteligencia en Cosmética
            </p>
            <div className="flex gap-8">
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <Check size={14} className="text-emerald-500" /> E-E-A-T Autority
                </span>
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <Star size={14} className="text-rose-800" /> Información Basada en Ciencia
                </span>
            </div>
        </div>
      </section>

    </div>
  );
}