/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette: black · pink · gold · white
        ink: '#0B0B0F',
        night: '#121218',
        rose: '#C84D87',
        blush: '#C84D87',
        petal: '#FBD9E8', // decorative light-pink candles only
        gold: '#C6A66B',
        white: '#FAF8F9',
      },
      fontFamily: {
        display: ['"American Captain"', '"American Captain Fallback"', 'Impact', '"Arial Narrow"', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        script: ['"Brother Signature"', '"Snell Roundhand"', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(200,77,135,.5)',
        'glow-lg': '0 0 80px -12px rgba(200,77,135,.6)',
        gold: '0 0 50px -14px rgba(198,166,107,.45)',
        'gold-lg': '0 0 70px -12px rgba(198,166,107,.6)',
      },
    },
  },
  plugins: [],
}
