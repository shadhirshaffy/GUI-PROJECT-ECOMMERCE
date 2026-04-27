/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-gold': '#d4af37', // Approximation of the gold color in the screenshot
        'theme-gold-hover': '#b5952f',
        'theme-dark-bg': '#121212',
        'theme-dark-card': '#1a1a1a',
      },
      animation: {
        levitate: 'levitate 4s ease-in-out infinite',
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
