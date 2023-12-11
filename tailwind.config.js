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
        '30': '1.625rem',
        '2.5': '0.625rem',
        '400': '25rem',
        '33': '33.333%',
        '30': '1.875rem', //30px
        '9': '0.563rem', //9px
        
      },
      maxHeight: {
        '970': '60.625rem',
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
          'secondary':'#C4C4C4',
          'secondary-1':'#DEE8F1',
          'secondary-5':'#F2F4FB',
          'secondary-50':'#F2F6FA',
          'secondary-100':'#C4CEFE',
          'secondary-200':'#B9B9B9',
          'secondary-300':'#6F6F6F',
          'secondary-400':'#F5F6FA',
        },
        'blue':{
          DEFAULT:'#4465FF',
          'gradient-50':'#5DE8FF',
          'gradient-60':'#4677F4',
          'gradient-100':'#2DA9E7',
          'gradient-200':'#46B0FE',
        },

        'red':{
          DEFAULT:'#FF5050',
          '5':'#FF5050',
        },
        'border':{
          DEFAULT:'#DDE1E5',
          'check':'#99A6B9',
        },
        'theme':'#142550',
      },
      borderRadius: {
        'lg-10': '10px',
        'lg-20': '20px',
        'lg-30': '30px',
        'lg-50': '50px',
      },
      
      fontSize: {
        13: '0.813rem',
        9: '0.563rem',
      },
      padding: {
        '137': '8.563rem',
        '18': '1.125rem', //18px,
        '2.5': '0.625rem',
        '1.5': '0.75rem',
        '0.5': '0.375rem',
      },
      letterSpacing: {
        0.9: '0.056em',
      },
      opacity: {
        '15': '0.15',
      }

    },
  },
  plugins: [],
}

