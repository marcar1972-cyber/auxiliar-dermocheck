import './globals.css'
import Image from 'next/image';

export const metadata = {
  title: 'DermoCheck Chile',
  description: 'Verificador de lotes cosméticos y guía de skincare.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-cream text-dark font-sans antialiased min-h-screen flex flex-col">
        
        {/* --- HEADER GLOBAL (INTACTO) --- */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            {/* LOGICA RESPONSIVE:
               - mobile (default): 'flex-col' -> Pone el logo arriba y menú abajo.
               - PC (md): 'md:flex-row' -> Pone logo a la izquierda y menú a la derecha.
            */}
            <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
                
                {/* LOGO */}
                <div className="flex items-center">
                    <a href="/" className="w-40 md:w-48 relative h-10 md:h-12 block hover:opacity-80 transition-opacity">
                        {/* Asegúrate de que logo.jpg existe en public */}
                        <Image src="/logo.jpg" alt="DermoCheck Logo" fill className="object-contain" priority />
                    </a>
                </div>

                {/* MENÚ DE NAVEGACIÓN */}
                {/* - mobile: 'justify-center' (centrado) y 'w-full' (ocupa todo el ancho).
                   - PC: 'md:justify-end' (a la derecha) y 'md:w-auto' (tamaño normal).
                */}
                <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-widest text-gray-600 w-full md:w-auto">
                    <a href="/" className="hover:text-emerald-600 transition-colors border-b-2 border-transparent hover:border-emerald-600 pb-1">
                        Verificador
                    </a>
                    <a href="/acne" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">
                        Acné
                    </a>
                    <a href="/anti-manchas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">
                        Manchas
                    </a>
                    <a href="/anti-edad" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">
                        Anti-Edad
                    </a>
                    <a href="/marcas" className="hover:text-ruby transition-colors border-b-2 border-transparent hover:border-ruby pb-1">
                        Marcas
                    </a>
                </nav>
            </div>
        </header>

        {/* --- CONTENIDO DE CADA PÁGINA --- */}
        <main className="flex-grow">
            {children}
        </main>

        {/* --- FOOTER GLOBAL CON DISCLAIMER (CENTRADO Y DESPLEGABLE) --- */}
        <footer className="bg-dark text-gray-400 py-10 border-t-4 border-ruby mt-auto">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            
            {/* 1. Identidad Centrada */}
            <div className="flex flex-col items-center gap-3">
               <div className="w-32 h-8 relative opacity-90 hover:opacity-100 transition-opacity">
                  <Image src="/logo_4.webp" alt="DermoCheck" fill className="object-contain" />
               </div>
               <p className="text-sm text-gray-500">© 2026 DermoCheck Chile. Inteligencia en Cosmética.</p>
               <a href="https://maczdev.vercel.app" target="_blank" className="text-emerald-500 font-mono text-xs hover:text-white transition-colors">
                 Code by &lt; macz.dev /&gt;
               </a>
            </div>

            {/* 2. Disclaimers Desplegables (Botones Limpios) */}
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs">
                
                {/* Botón Aviso Médico */}
                <details className="group relative inline-block cursor-pointer">
                    <summary className="list-none font-bold text-gray-500 hover:text-ruby transition-colors outline-none flex items-center justify-center gap-1">
                       <span>⚕️ AVISO MÉDICO (Leer)</span>
                    </summary>
                    <div className="mt-3 bg-white/5 p-4 rounded border border-white/10 text-[10px] leading-relaxed text-gray-400 max-w-md mx-auto animate-in fade-in zoom-in duration-300">
                        El contenido de este sitio web es puramente informativo y educativo, recopilado de fuentes públicas y literatura especializada. No constituye consejo médico, diagnóstico ni tratamiento. Ante cualquier problema cutáneo, consulta siempre a un dermatólogo certificado.
                    </div>
                </details>

                {/* Botón Amazon */}
                <details className="group relative inline-block cursor-pointer">
                    <summary className="list-none font-bold text-gray-500 hover:text-ruby transition-colors outline-none flex items-center justify-center gap-1">
                       <span>🛒 AFILIACIÓN (Leer)</span>
                    </summary>
                    <div className="mt-3 bg-white/5 p-4 rounded border border-white/10 text-[10px] leading-relaxed text-gray-400 max-w-md mx-auto animate-in fade-in zoom-in duration-300">
                        DermoCheck participa en el Programa de Afiliados de Amazon Services LLC, un programa de publicidad diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.com.
                    </div>
                </details>

            </div>

          </div>
        </footer>

      </body>
    </html>
  )
}