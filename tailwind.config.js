/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '960': '960px',
      },
      boxShadow: {
        'white-lg': 'rgba(255, 255, 255, 0.15) 0px 48px 100px 0px',
      },
      zIndex:{
        '-1' : -100,
      },
      keyframes:{
        growMove:{
          '0%, 100%' : {
            transform: 'scale(1.2) translateY(-10px)'
          },
          '50%':{
            transform: 'scale(1) translateY(0)'
          },
        },
      },
      animation: {
        growMove: 'growMove 1.5s ease-in-out infinite',
      },
      colors :{
        'fm-color': '#fe2a7b',
        'sm-color': '#ff5864',
        'tm-color': '#ff655b'
      },
      backgroundImage:{
        'wel-gradient': 'linear-gradient(to top, #f67848, #ff5864 50%, #fe2a7b 100%)',
        'wel-gradient-but': 'linear-gradient(to right, #f67848, #ff5864 50%, #fe2a7b 100%)',
        'welcome': "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0)), linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/images/backgroundWelcome.jpeg')",
      }
    },
  },
  plugins: [],
}