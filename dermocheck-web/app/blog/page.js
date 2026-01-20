// src/app/blog/page.js
import Link from 'next/link';
// 👇 AQUÍ ESTÁ LA CORRECCIÓN: Usamos ruta relativa
import { blogPosts } from '../data/posts'; 
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog de Dermocosmética y Gestión Farmacéutica | DermoCheck',
  description: 'Consejos sobre ofertas en Cruz Verde, Salcobrand, gestión de mermas y cuidado de la piel.',
};

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">Bitácora DermoCheck</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Análisis de mercado, guías de compra inteligente y gestión farmacéutica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-ruby tracking-widest uppercase mb-3">{post.category}</div>
                <h2 className="font-serif text-2xl font-bold text-dark mb-4 group-hover:text-ruby transition-colors leading-tight">{post.title}</h2>
                <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-6 border-t border-gray-50">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 font-bold text-dark group-hover:translate-x-1 transition-transform">Leer <ArrowRight size={14}/></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}