/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-gray': '#3C3C3D',
        'light-gray': '#E5E5E5',
        'light-gray-2': '#AFAEAE',
        'light-gray-3': '#BDBDBD',
        'light-green': '#8EFF8B',
        'cream-gray': '#CBFFDA',
        'dark-black': '#302F2F',
      },
      fontFamily:{
        'lato': ['Lato', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}