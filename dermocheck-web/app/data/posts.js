// src/data/posts.js

export const blogPosts = [
    {
      id: 1,
      slug: 'guia-ofertas-dermocosmetica-chile',
      title: 'Dermocosmética en Chile: Cómo aprovechar ofertas, packs y descuentos reales',
      excerpt: '¿Buscas Eucerin o La Roche-Posay barato? Guía práctica para encontrar descuentos en Cruz Verde, Salcobrand y evitar mermas en tu compra. Descubre el truco de los formatos gigantes.',
      image: '/Eucerin Sun Advanced.jpg', 
      date: '17 Enero, 2026',
      readTime: '4 min lectura',
      category: 'Ahorro Inteligente',
      content: `
        <p class="mb-4">La <strong>dermocosmética</strong> en Chile ha subido de precio, y encontrar una rutina completa sin gastar una fortuna se ha vuelto un arte. Ya seas un paciente buscando calidad o un auxiliar de farmacia gestionando stock, entender cómo funcionan las ofertas es clave.</p>
        
        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">1. La estrategia de los "Packs de Dermocosmética"</h2>
        <p class="mb-4">Seguro has visto los famosos packs de <em>Eucerin</em> o <em>Vichy</em> que incluyen "regalos". Ojo aquí: estos packs son la mejor oportunidad de ahorro, pero también requieren revisión.</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Ventaja:</strong> Suelen costar lo mismo que el producto unitario, pero te llevas un limpiador o mini-talla gratis.</li>
            <li><strong>Precaución:</strong> Muchas veces estos packs se arman para rotar stock próximo a vencer. <strong>Siempre verifica el Batch Code</strong> antes de llevarlo usando nuestra <a href="/#calculator-section" class="text-ruby font-bold hover:underline">herramienta gratuita DermoCheck</a>.</li>
        </ul>

        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">2. Cruz Verde, Salcobrand y los días clave</h2>
        <p class="mb-4">Las grandes cadenas como <strong>Cruz Verde</strong> y <strong>Salcobrand</strong> tienen calendarios de descuento fijos. No compres un lunes lo que estará con 40% de descuento un jueves.</p>
        
        <div class="bg-gray-50 p-6 border-l-4 border-ruby my-6 rounded-r-lg shadow-sm">
            <p class="font-bold text-dark text-lg mb-2">💡 DATO PRO: Formatos "Gigantes" (150ml)</p>
            <p class="text-sm text-gray-600 mb-3">En Chile, el protector facial estándar trae solo 50ml. En Amazon puedes encontrar el <strong>Eucerin Advanced Hydration con Ácido Hialurónico</strong> (el de la foto) en formato de <strong>150ml (5 oz)</strong>.</p>
            <p class="text-sm text-gray-600 mb-4">Es decir: <strong>¡3 veces más producto por casi el mismo precio!</strong> Ideal para usar en rostro y cuerpo sin que duela el bolsillo.</p>
            
            <a href="https://amzn.to/4qatg6W" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-ruby text-white font-bold rounded-lg hover:bg-dark transition-colors gap-2 no-underline">
                Ver Oferta de 150ml en Amazon →
            </a>
            <p class="text-[10px] text-gray-400 mt-2 text-center md:text-left">DermoCheck puede recibir una pequeña comisión por compras elegibles.</p>
        </div>

        <h2 class="text-2xl font-bold text-dark mt-8 mb-4">3. Ojo con la "Merma" disfrazada de oferta</h2>
        <p class="mb-4">Cuando veas un descuento del 50% o 60% en un producto premium de skincare, activa tu alarma interna. En farmacia, esto suele indicar un <strong>"Vencimiento Corto"</strong> (menos de 3 a 6 meses).</p>
        <p class="mb-4">¿Vale la pena? Solo si lo vas a usar de inmediato. Si es para guardar, estás botando plata. Usa el <a href="/#calculator-section" class="text-ruby font-bold hover:underline">verificador de lotes</a> para saber la fecha exacta de fabricación si el envase solo trae el código impreso.</p>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
            <h3 class="font-bold text-emerald-800 mb-2">💊 Consejo de Farmacéutico</h3>
            <p class="text-sm text-emerald-700">El protector solar se debe usar todo el año. Comprarlo en invierno suele ser hasta un 30% más barato que en temporada alta de verano.</p>
        </div>
      `
    },
    {
        id: 2,
        slug: 'mitos-dedos-vs-espatula-skincare',
        title: '¿Dedos o Espátula? La Verdad sobre la Aplicación de Cremas (Según Dermatólogos)',
        excerpt: 'Dr. Scarano desmiente el mito: ¿Realmente contaminas tu crema si usas los dedos? Descubre cuándo es necesario usar espátula y la diferencia clave entre PAO y Batch Code.',
        image: '/dedos-espatula.jpg', // ⚠️ IMPORTANTE: Sube una foto con este nombre a tu carpeta public/
        date: '24 Enero, 2026',
        readTime: '3 min lectura',
        category: 'Mitos del Skincare',
        content: `
          <p class="mb-4">¿Alguna vez te has sentido culpable por "meter el dedo" en tu crema favorita? Existe un mito muy extendido en el mundo del <em>skincare</em>: la creencia de que es obligatorio usar una espátula para evitar convertir nuestros productos en un caldo de cultivo de bacterias.</p>
          
          <p class="mb-4">Recientemente, el dermatólogo <strong>Dr. Simón Scarano</strong> abordó este tema viral, desmitificando el pánico con ciencia clara: <strong>"No es necesario usar una espátula para aplicar sus productos; usar los dedos es completamente seguro en la mayoría de los casos".</strong></p>
  
          <h2 class="text-2xl font-bold text-dark mt-8 mb-4">El Mito de la Contaminación por Contacto</h2>
          <p class="mb-4">Es común pensar que nuestros dedos arruinarán la fórmula. Sin embargo, no hay motivo para entrar en pánico.</p>
  
          <h3 class="text-xl font-bold text-dark mt-6 mb-3">¿Por qué tus dedos no arruinan tu crema?</h3>
          <p class="mb-4">Como explica el Dr. Scarano, la industria cosmética formula los productos pensando en su uso real. Las cremas contienen <strong>conservantes</strong> específicos que actúan como un escudo protector, diseñados para inhibir el crecimiento de microorganismos (bacterias y hongos) incluso tras el contacto repetido.</p>
  
          <div class="bg-indigo-50 p-6 border-l-4 border-indigo-500 my-6 rounded-r-lg shadow-sm">
              <p class="font-bold text-indigo-900 mb-2">🎥 Lo dice el experto</p>
              <p class="text-sm text-indigo-800 mb-3">Si quieres ver la explicación detallada del Dr. Simón Scarano, puedes ver su video viral aquí:</p>
              <a href="https://vt.tiktok.com/ZSaD36WqY/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-indigo-700 font-bold hover:underline">
                  Ver video en TikTok →
              </a>
          </div>
  
          <h2 class="text-2xl font-bold text-dark mt-8 mb-4">La Regla de Oro: Higiene Básica</h2>
          <p class="mb-4">La única condición innegociable es el sentido común y la <strong>higiene</strong>.</p>
          <ul class="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Manos Limpias:</strong> "Nadie va a aplicarse una crema con las manos llenas de barro o suciedad", señala Scarano. Lávate bien las manos antes de tu rutina; es una regla de salud básica.</li>
          </ul>
  
          <h2 class="text-2xl font-bold text-dark mt-8 mb-4">¿Qué Realmente Pone en Riesgo tus Productos?</h2>
          <p class="mb-4">Si los dedos no son los culpables, ¿qué daña nuestras cremas? El riesgo real de contaminación proviene de dos factores clave que a menudo confundimos:</p>
  
          <div class="grid md:grid-cols-2 gap-6 my-6">
              <div class="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <strong class="block text-dark text-lg mb-2">1. El PAO (Tarrito Abierto)</strong>
                  <p class="text-sm text-gray-600">Es el símbolo que ves en la caja (ej: 6M, 12M). Indica cuántos meses dura la crema <strong>una vez que la abriste</strong>. Esto depende de ti: si abriste una crema hace 2 años, sus conservantes ya no sirven, aunque uses espátula.</p>
              </div>
              <div class="bg-ruby/10 p-5 rounded-xl border border-ruby/20">
                  <strong class="block text-ruby text-lg mb-2">2. La Fecha de Fabricación</strong>
                  <p class="text-sm text-gray-700 mb-3">A veces compramos productos "nuevos" que llevan años en bodega. Si tu envase solo trae un código y no la fecha, usa nuestra herramienta.</p>
                  <a href="/#calculator-section" class="text-ruby font-bold text-sm hover:underline">Usar Verificador DermoCheck →</a>
              </div>
          </div>
  
          <h2 class="text-2xl font-bold text-dark mt-8 mb-4">¿Cuándo SÍ recomienda el experto usar Espátula?</h2>
          <p class="mb-4">Aunque en casa es opcional, el Dr. Scarano destaca tres escenarios donde la espátula tiene sentido:</p>
          <ul class="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Uso Profesional:</strong> En gabinetes o consultorios donde el producto se usa en múltiples pacientes.</li>
              <li><strong>Productos Compartidos:</strong> Si muchas personas van a probar la misma crema.</li>
              <li><strong>Infecciones:</strong> Si tienes heridas o infecciones en los dedos para no trasladar patógenos.</li>
          </ul>
  
          <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
              <h3 class="font-bold text-emerald-800 mb-2">Conclusión</h3>
              <p class="text-sm text-emerald-700">En resumen: <strong>"Que nadie te trate de delincuente por usar tus dedos"</strong>. La espátula es una elección estética, no una obligación sanitaria. Disfruta tu rutina sin culpa, siempre con las manos limpias.</p>
          </div>
        `
      },
];