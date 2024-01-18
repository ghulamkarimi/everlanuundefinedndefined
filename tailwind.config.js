/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding: '42px',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        '18.5': '4.625rem',
      }
    },
  },
  plugins: [],
}