/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#70008f'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1024px'},
      'md': {'max': '767px'},
      'sm': {'max': '640px'},
      'xs': {'max':'400px'}
    }
  },
  plugins: [],
}
