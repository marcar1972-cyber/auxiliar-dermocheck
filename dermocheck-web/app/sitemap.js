// 👇 CORRECCIÓN: Usamos un solo punto (.) porque la carpeta data está dentro de app
import { blogPosts } from './data/posts';

export default function sitemap() {
  // ⚠️ Tu dominio real de producción
  const baseUrl = 'https://www.dermocheck.cl'; 

  // 1. Páginas Estáticas (Tu menú principal)
  const staticPages = [
    '',              // Home
    '/acne',
    '/anti-manchas',
    '/anti-edad',
    '/marcas',
    '/blog',         // Nueva página
    '/guias',        // Nueva página
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8, // Home es prioridad 1, el resto 0.8
  }));

  // 2. Artículos del Blog (Dinámicos: Se generan solos desde posts.js)
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'weekly',
    priority: 0.9, // Alta prioridad porque es contenido fresco
  }));

  // 3. Guías de Estudio (Las agregamos manualmente)
  const guiasUrls = [
    'ley-20724-farmacos-1',
    'decreto-466-reglamento-farmacias',
    'decreto-404-estupefacientes',
    'decreto-405-psicotropicos',
    'decreto-3-control-productos',
    'guia-posologia',
    'farmacologia-1' // La nueva guía
  ].map((slug) => ({
    url: `${baseUrl}/guias/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Fusionamos todo en un solo array para Google
  return [...staticPages, ...blogUrls, ...guiasUrls];
}