/** @type {import('tailwindcss').Config} */
module.exports = {
  // Importante: le decimos que busque en 'app', 'pages', 'components' y 'src' por si acaso.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aquí vuelven tus colores espectaculares
      colors: {
        'cream': '#FDFBF7',
        'ruby': '#9F1239',
        'emerald-btn': '#059669',
        'dark': '#111827',
      },
      // Y tus fuentes elegantes
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}