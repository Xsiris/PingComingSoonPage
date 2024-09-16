/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
        'sm' : '375px',
        'md' : '935px',
        'lg' : '1440px'
    },
    extend: {
      colors:{
        'pingBlue' : 'hsl(223, 87%, 63%)',
        'pingPaleBlue' : 'hsl(223, 100%, 88%)',
        'pingLightRed' : 'hsl(223, 100%, 88%)',
        'pingGray' : 'hsl(0, 0%, 59%)',
        'pingLightGray' : 'hsl(0, 0%, 90%)',
        'pingVeryDarkBlue' : 'hsl(209, 33%, 12%)'
      }

    },
    fontFamily:{
      'pingLibreFranklin' : "Libre Franklin"
    }
  },
  plugins: [],
}

