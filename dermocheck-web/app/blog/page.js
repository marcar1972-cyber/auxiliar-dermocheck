import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Check, Zap, Star, ShieldCheck, Globe } from "lucide-react";

export const metadata = {
  title: 'Blog DermoCheck | Análisis de Skincare y Guía de Importación Inteligente',
  description: 'Aprende sobre dermocosmética científica. Analizamos ingredientes, comparamos precios de Amazon USA vs Chile y verificamos la seguridad de tus productos.',
};

const posts = [
  {
    title: "¿Ojeras Marrones? La Vitamina C que sí funciona",
    slug: "ojeras",
    excerpt: "Analizamos los mejores contornos de ojos disponibles en Amazon que atacan el pigmento real (melanina). Por qué la versión de USA es superior en potencia.",
    image: "/cerave-vit-c.jpg",
    tag: "Ciencia Aplicada",
    readTime: "5 min",
    location: "Amazon USA"
  },
  {
    title: "Skincare en Chile: El 'Hack' de los Formatos Gigantes",
    slug: "ofertas",
    excerpt: "En Chile el estándar facial es 50ml. Te enseñamos a identificar versiones de 400ml en Amazon ahorrando hasta un 60% por gramo de producto.",
    image: "/makeuperaser.jpg",
    tag: "Ahorro Inteligente",
    readTime: "4 min",
    location: "Amazon USA"
  },
  {
    title: "¿Dedos o Espátula? Mitos sobre la Contaminación",
    slug: "espatula-vs-dedos",
    excerpt: "Antes de comprar accesorios innecesarios, lee lo que dice la ciencia sobre la estabilidad de las fórmulas y el rol de los conservantes modernos.",
    image: "/aplicar-mano.png",
    tag: "Protocolos",
    readTime: "3 min",
    location: "Amazon USA"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-500 text-left">
      
      {/* 1. HERO EDITORIAL (SEO OPTIMIZADO) */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <span className="text-rose-800 font-bold tracking-widest text-[10px] uppercase bg-rose-50 border border-rose-100 py-1 px-4 rounded-full mb-6 inline-block">
                Ciencia y Compra Inteligente
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Dermocosmética <br />
                <span className="text-rose-800 italic">Basada en Evidencia</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Educamos sobre tu piel para ayudarte a encontrar los <strong>mejores precios y formatos globales</strong> en Amazon, seleccionados bajo estricto criterio dermatológico y científico.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-emerald-500" /> Criterio Clínico
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-6">
                <Globe size={14} className="text-rose-800" /> Formatos Globales
              </div>
            </div>
        </div>
      </section>

      {/* 2. GRILLA DE ARTÍCULOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
              <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col w-full transform hover:-translate-y-2">
                
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex items-center justify-center p-8 text-left">
                    <div className="relative w-full h-full">
                       <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-700 font-sans"
                       />
                    </div>
                    <span className="absolute top-6 left-6 bg-white/95 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-full text-slate-900 border border-slate-100 shadow-sm uppercase tracking-tighter">
                        {post.tag}
                    </span>
                </div>

                <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 mb-4 font-bold uppercase tracking-widest">
                        <Clock size={12} /> <span>{post.readTime}</span>
                        <span className="text-slate-200">|</span>
                        <span className="text-rose-800">{post.location}</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-rose-800 transition-colors leading-snug">
                        {post.title}
                    </h2>
                    
                    <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-sans">
                        {post.excerpt}
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                        <span className="text-rose-800 font-bold text-[11px] uppercase tracking-widest group-hover:gap-4 transition-all flex items-center gap-2">
                            Analizar Guía <ArrowRight size={16} />
                        </span>
                    </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FOOTER SEO: POR QUÉ AMAZON? */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">¿Por qué comprar vía Amazon USA?</h2>
            <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                Acceso a <strong>lanzamientos exclusivos</strong>, envíos garantizados a Chile y formatos económicos que las farmacias locales no suelen traer. Analizamos cada lote y formulación para tu seguridad.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300">
                    <Zap size={16} className="text-rose-500" /> Transparencia Total
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300">
                    <Check size={16} className="text-emerald-500" /> Enlaces Verificados
                </div>
            </div>
            <p className="text-[10px] text-slate-500 mt-12 uppercase tracking-widest">
                DermoCheck Chile • Programa de Afiliados Amazon
            </p>
        </div>
      </section>

    </div>
  );
}