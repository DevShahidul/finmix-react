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
        '29': '7.188rem',
        '14.2': '3.625rem', //58px
        '6.5': '1.625rem',
        '30': '1.625rem',
        '2.5': '0.625rem',
        '400': '25rem',
        '33': '33.333%',
        '30': '1.875rem', //30px
        '26': '1.625rem', //26px
        '22': '1.375rem', //22px
        '9.5': '0.625rem', //10px
        '9': '0.563rem', //9px
        '1.7': '0.438rem', //7px
        
      },
      maxHeight: {
        '970': '60.625rem',
      },
      colors: {
        'green':{
          DEFAULT:'#2DCC89',
          'secondary':'#54CC8B',
          'secondary-50':'#049D79',
          'secondary-light':'#49DA9D',
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
          'secondary':'#0C9ECD',
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
        11: '0.688rem', //11px
        9: '0.563rem',
      },
      padding: {
        '137': '8.563rem',
        '18': '1.125rem', //18px,
        '2.5': '0.625rem',
        '0.5': '0.375rem',
      },
      letterSpacing: {
        0.9: '0.056em',
      },
      opacity: {
        '15': '0.15',
        '12': '0.12',
      },
      dropShadow: {
        '3xl': '0 4px 11px rgba(24, 217, 142, 0.40)',
      },
      boxShadow: {
        'shadow-feed': '0 2px 20px 0px rgba(14, 112, 74, 0.06)',
      }

    },
  },
  plugins: [],
}

