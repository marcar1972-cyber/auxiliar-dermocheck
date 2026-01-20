// src/app/blog/[slug]/page.js

// 👇 AQUÍ ESTÁ LA CORRECCIÓN: Subimos 2 niveles para encontrar "data"
import { blogPosts } from '../../data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// Esto ayuda a SEO generando las rutas estáticas al construir
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Esto genera el título y descripción para Google de cada artículo
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return;
  return {
    title: `${post.title} | Blog DermoCheck`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Cabecera */}
      <div className="bg-cream py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-ruby mb-8 transition-colors">
                <ArrowLeft size={16}/> Volver al Blog
            </Link>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">{post.title}</h1>
            <div className="flex gap-6 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-ruby"/> {post.date}</span>
                <span className="flex items-center gap-2"><User size={16} className="text-ruby"/> Equipo DermoCheck</span>
            </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="px-6 py-12 md:py-20">
        <div 
            className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-dark prose-p:text-gray-600 prose-a:text-ruby prose-strong:text-dark"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
}