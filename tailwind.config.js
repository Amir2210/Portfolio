/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'bg-dark': '#161613',
        'gray': '#a3a3a3',
        'gradient-purple': '#B16CEA',
        'gradient-red': '#FF5E69',
        'gradient-orange': '#FF8A56',
        'gradient-orange1': '#FFA84B',
        'linkedin': '#0A66C2',
        'github': '#6e5494'
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}