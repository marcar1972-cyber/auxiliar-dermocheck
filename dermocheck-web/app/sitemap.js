import { blogPosts } from './data/posts';

export default function sitemap() {
  const baseUrl = 'https://www.dermocheck.cl'; 

  // 1. Páginas Estáticas (SOLO SKINCARE Y COSMÉTICA)
  const staticPages = [
    '',              // Home (Verificador)
    '/acne',
    '/anti-manchas',
    '/anti-edad',
    '/marcas',
    '/blog',         // Blog de ofertas (Eucerin, etc.)
    // ❌ ELIMINADO: '/guias' (Pertenece a auxiliaresdefarmacia.cl)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8, 
  }));

  // 2. Artículos del Blog (Solo los que estén en posts.js)
  // Asegúrate que en posts.js solo haya artículos de dermocosmética/ahorro
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // ❌ ELIMINADO: Sección de Guías de Farmacia (Leyes, Decretos, Posología)

  return [...staticPages, ...blogUrls];
}