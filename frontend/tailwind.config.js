/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1400px',
        'custom-1200': '1200px',
        'custom-900': '900px',
      },
      colors: {
        'primary': '#4f46e5',       
        'primary-dark': '#3730a3',   
        'primary-light': '#ede9fe',  
        'secondary': '#f59e0b',      
        'text-dark': '#111827',      
        'text-light': '#6b7280',     
        'extra-light': '#f9fafb'     
      }
    },
  },
  plugins: [],
}

