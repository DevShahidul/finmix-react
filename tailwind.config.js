/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'biennale': 'FONTSPRING DEMO-Biennale',
      'popins': 'Poppins',
    },
    

    extend: {
      spacing: {
        '6.5': '1.625rem',
        '2.5': '0.625rem',
      },
      colors: {
        'green':{
          DEFAULT:'#2DCC89',
          'secondary':'#54CC8B',
          'gradient-light':'#48DD5F',
          'gradient-secondary':'#46CDA2',
        },
        'dark':{
          DEFAULT:'#000077',
          'title':'#2D405A',
          'body':'#56606D',
          'text':'#79828D',
        },
        'sky':'#DBF5E7',
        'gray':{
          DEFAULT:'#E8EFF6',
          'secondary-50':'#F2F6FA',
          'secondary-100':'#C4CEFE',
          'secondary-200':'#B9B9B9',
          'secondary-300':'#6F6F6F',
        },
        'blue':{
          DEFAULT:'#4465FF',
          'gradient-50':'#5DE8FF',
          'gradient-100':'#2DA9E7',
          'gradient-200':'#46B0FE',
        },
        'blue':{
          DEFAULT:'#FFB13C',
          '50':'#3699FF',
          'gradient-50':'#F7C01D',
          'gradient-100':'#FF6C39',
        },
        'red':'#FF5050',
        'border':{
          DEFAULT:'#DDE1E5',
          'check':'#99A6B9',
        }
      },
      borderRadius: {
        'lg-10': '10px',
      },
      
      fontSize: {
        13: '0.813rem',
      },

    },
  },
  plugins: [],
}

