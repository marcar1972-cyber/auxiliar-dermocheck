import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css"; // <--- ¡ESTA LÍNEA ES VITAL!

// Configuración de fuentes elegantes
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ['400', '600', '700'], 
  variable: '--font-playfair'
});

export const metadata = {
  title: "DermoCheck | Verificador y Guía Dermocosmética",
  description: "Valida el lote de tus cremas y encuentra reseñas profesionales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* Aplicamos el fondo crema y texto oscuro por defecto */}
      <body className={`${lato.variable} ${playfair.variable} bg-cream text-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}