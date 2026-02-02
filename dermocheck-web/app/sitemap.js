export default function sitemap() {
  const baseUrl = 'https://www.dermocheck.cl';
  const currentDate = new Date().toISOString();

  // 1. Páginas Estáticas Principales
  const staticPages = [
    '',               // Home / Verificador
    '/acne',
    '/anti-manchas',
    '/anti-edad',
    '/marcas',
    '/blog',          // Índice que acabas de actualizar
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Artículos del Blog (Slugs exactos de tu post array)
  const blogSlugs = ['ojeras', 'ofertas', 'espatula-vs-dedos'];
  
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...blogUrls];
}