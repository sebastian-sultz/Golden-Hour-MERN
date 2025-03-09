/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'], // Elegant serif for headings
        'montserrat': ['"Montserrat"', 'sans-serif'], // Clean, modern sans-serif for body text
        'moondance': ["'Moon Dance'", "cursive"],
        'domine': ["Domine", "serif"],
        'libre': ["Libre Baskerville", "serif"],
        'calligraphy': ['Dancing Script', 'cursive'],
        'serif': ['Merriweather', 'serif'],
      },
      colors: {
        'golden': '#ffcc33', // Rich gold for accents
        'deep-black': '#000000', // Deep black for hero and footer
        'charcoal': '#4a4a4a', // Medium gray for features, new arrivals, banner, facts, testimonials
        'silver': '#808080', // Light gray for text
        'off-white': '#f8f8f8', // Soft off-white for testimonials
        'gold-gradient': 'linear-gradient(45deg, #ffcc33, #e6b800)', // Aesthetic gold gradient for borders
      },
      boxShadow: {
        'luxury': '0 15px 30px rgba(0, 0, 0, 0.4)', // Enhanced luxury shadow
        'inner-luxury': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle inner shadow
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'all': 'all',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}