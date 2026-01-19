// src/data/posts.js

export const blogPosts = [
    {
      id: 1,
      slug: 'guia-ofertas-dermocosmetica-chile', // Esto será la URL
      title: 'Dermocosmética en Chile: Cómo aprovechar ofertas, packs y descuentos reales',
      excerpt: '¿Buscas Eucerin o La Roche-Posay barato? Guía práctica para encontrar descuentos en Cruz Verde, Salcobrand y evitar mermas en tu compra.',
      date: '17 Enero, 2026',
      readTime: '4 min lectura',
      category: 'Ahorro Inteligente',
      image: '/blog/ofertas-bg.jpg', // Puedes poner una imagen genérica aquí luego
      content: `
        <p class="mb-4">La <strong>dermocosmética</strong> en Chile ha subido de precio, y encontrar una rutina completa sin gastar una fortuna se ha vuelto un arte. Ya seas un paciente buscando calidad o un auxiliar de farmacia gestionando stock, entender cómo funcionan las ofertas es clave.</p>
        
        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">1. La estrategia de los "Packs de Dermocosmética"</h2>
        <p class="mb-4">Seguro has visto los famosos packs de <em>Eucerin</em> o <em>Vichy</em> que incluyen "regalos". Ojo aquí: estos packs son la mejor oportunidad de ahorro, pero también requieren revisión.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Ventaja:</strong> Suelen costar lo mismo que el producto unitario, pero te llevas un limpiador o mini-talla gratis.</li>
            <li><strong>Precaución:</strong> Muchas veces estos packs se arman para rotar stock próximo a vencer. <strong>Siempre verifica el Batch Code</strong> antes de llevarlo.</li>
        </ul>

        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">2. Cruz Verde, Salcobrand y los días clave</h2>
        <p class="mb-4">Las grandes cadenas como <strong>Cruz Verde</strong> y <strong>Salcobrand</strong> tienen calendarios de descuento fijos para dermocosmética.</p>
        <p class="mb-4">No compres un lunes lo que estará con 40% de descuento un jueves. Generalmente, los "Días de Dermocosmética" ocurren hacia fines de mes o en ciclos quincenales. Si eres auxiliar, avísale a tu cliente de confianza; esa fidelización vale oro.</p>

        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">3. Ojo con la "Merma" disfrazada de oferta</h2>
        <p class="mb-4">Cuando veas un descuento del 50% o 60% en un producto premium de skincare, activa tu alarma interna. En farmacia, esto suele indicar un <strong>"Vencimiento Corto"</strong> (menos de 3 a 6 meses).</p>
        <p class="mb-4">¿Vale la pena? Solo si lo vas a usar de inmediato. Si es para guardar, estás botando plata. Usa nuestra herramienta <strong>DermoCheck</strong> para saber la fecha exacta de fabricación si el envase solo trae el código de lote.</p>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
            <h3 class="font-bold text-emerald-800 mb-2">💡 Consejo de Farmacéutico</h3>
            <p class="text-sm text-emerald-700">El protector solar se debe usar todo el año. Comprarlo en invierno suele ser hasta un 30% más barato que en temporada alta de verano.</p>
        </div>
      `
    },
    // Aquí puedes agregar más artículos en el futuro copiando el bloque anterior
  ];