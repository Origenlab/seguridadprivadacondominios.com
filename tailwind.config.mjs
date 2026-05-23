/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Estilo REDEIL: negro + rojo/coral
        ink: {
          950: '#0a0a0a',
          900: '#0f0f0f',
          800: '#161616',
          700: '#1f1f1f',
          600: '#2a2a2a',
          500: '#3a3a3a',
          400: '#5a5a5a',
        },
        brand: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ff9d9d',
          400: '#ff6868',
          500: '#f43f3f',
          600: '#e02424',
          700: '#bc1c1c',
          800: '#9b1c1c',
          900: '#811c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
      },
      boxShadow: {
        brand: '0 10px 40px -10px rgba(244, 63, 63, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
