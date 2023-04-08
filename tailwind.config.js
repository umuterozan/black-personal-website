/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile' : '414px',
      'computer': '1152px',
    },
    container: {
      center: true,
    },
    extend: {      
      backgroundImage: {
        'header-gradient': 'linear-gradient(158.71deg, rgba(255, 255, 255, 0.208) -100%, rgba(255, 255, 255, 0.0208) 100%)'
      },
      boxShadow: {
        'header-box': 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)'
      },
      borderColor: {
        'header-color': 'rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
}

