import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Check, Zap, Globe } from "lucide-react";

export const metadata = {
  title: 'Blog DermoCheck | Skincare Científico y Guía de Importación Amazon',
  description: 'Análisis de dermocosmética para Chile. Aprende a importar formatos gigantes desde Amazon, ahorrar en marcas premium y desmentir mitos.',
};

const posts = [
  {
    title: "¿Ojeras Marrones? La Vitamina C que sí funciona",
    slug: "ojeras",
    excerpt: "Analizamos los 3 mejores contornos de ojos disponibles en Amazon que atacan el pigmento real. Por qué importar la versión de USA vale la pena.",
    image: "/cerave-vit-c.jpg",
    tag: "Importación",
    readTime: "5 min",
    cta: "Ver Guía de Compra"
  },
  {
    title: "Dermocosmética: El 'Hack' de los Formatos Gigantes",
    slug: "ofertas",
    excerpt: "En Chile el estándar es 50ml. Te mostramos cómo traer versiones de 150ml desde Amazon ahorrando hasta un 60% por gramo de producto.",
    image: "/Eucerin Sun Advanced.jpg",
    tag: "Ahorro PRO",
    readTime: "4 min",
    cta: "Ver Ofertas Amazon"
  },
  {
    title: "¿Dedos o Espátula? Mitos sobre la Contaminación",
    slug: "espatula-vs-dedos",
    excerpt: "Antes de comprar accesorios innecesarios, lee lo que dice la ciencia sobre la estabilidad de las cremas y el uso de conservantes.",
    image: "/aplicar-mano.png",
    tag: "Ciencia",
    readTime: "3 min",
    cta: "Leer Análisis"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500">
      
      {/* 1. HERO EDITORIAL CON ENFOQUE GLOBAL */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-rose-800 font-bold tracking-widest text-[10px] uppercase bg-rose-50 border border-rose-100 py-1 px-4 rounded-full mb-6 inline-block">
                Guía de Compra Inteligente & Ciencia
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Skincare sin <br /><span className="text-rose-800 italic">Fronteras</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                Educamos sobre tu piel y te ayudamos a encontrar los mejores precios y formatos globales en <strong>Amazon</strong>, seleccionados bajo criterio dermatológico.
            </p>
        </div>
      </section>

      {/* 2. GRILLA DE ARTÍCULOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
              <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col w-full transform hover:-translate-y-2">
                
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                       <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-700"
                       />
                    </div>
                    <span className="absolute top-6 left-6 bg-rose-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-widest">
                        {post.tag}
                    </span>
                </div>

                <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                        <span className="text-rose-800/30">|</span>
                        <Globe size={14} />
                        <span>Amazon USA</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-rose-800 transition-colors leading-snug">
                        {post.title}
                    </h2>
                    
                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                        <span className="text-rose-800 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all flex items-center gap-2">
                            {post.cta} <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. BANNER DE AFILIACIÓN Y CONFIANZA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                    <Globe size={40} className="text-rose-500" />
                </div>
                <div className="flex-1">
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">¿Por qué comprar vía Amazon?</h2>
                    <p className="text-slate-400 text-lg mb-0">
                        Acceso a <strong>lanzamientos exclusivos</strong>, envíos garantizados a Chile y formatos económicos que las farmacias locales no suelen traer. Analizamos cada lote para tu seguridad.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. FOOTER DIVULGACIÓN */}
      <section className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">
                DermoCheck Chile • Programa de Afiliados Amazon
            </p>
            <div className="flex gap-8">
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <Check size={14} className="text-emerald-500" /> Transparencia Total
                </span>
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <Zap size={14} className="text-rose-800" /> Enlaces Verificados
                </span>
            </div>
        </div>
      </section>

    </div>
  );
}