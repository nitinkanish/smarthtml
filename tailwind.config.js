/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '100': '500px'
      },
      backgroundColor: {
        'grey1' : '#ececed',
        'grey2' : '#fcfcfd',
        'grey3' : '#f7f7f7',
        'dark': '#403F3F',
        'dark1': '#4f4f4f',
        'dark2': '#4e4b4b'
      },
      width: {
        '65%': '65%',
        '80%': '80%',
        '90%': '90%',
        '9.5': '13px'
      },
      height: {
        '9.5': '13px'
      },
      textColor: {
        'secondary': '#9b9b9b',
        'dark': '#403F3F',
        'shadow': '#e6e7e9',
        'shadow2' : '#dcdcdc',
        'grey1': '#706F6F',
        'greyFade': '#d7d8d9',
        'grey3' : '#f7f7f7',
        'white1': '#c8c8c8'
      },
      fontSize: {
        '40': '40px',
        '35':'35px',
        '25': "25px",
        '22': '22px',
        '300': '300px',
        '45': '45px',
        '100': '100px'
      },
      boxShadow: {
        'custom': '0px 261px 452px rgba(0, 0, 0, 0.08), 0px 125.522px 294.152px rgba(0, 0, 0, 0.05), 0px 88.1459px 178.594px rgba(0, 0, 0, 0.0315), 0px 61.1687px 98.5331px rgba(0, 0, 0, 0.0319), 0px 32.7755px 42.0751px rgba(0, 0, 0, 0.15)',
        'dice': '5px 4px 3px #e3e1e1'
      },
      borderRadius: {
        '32': '32px',
        '100': '100px'
      },
      backgroundImage: {
        'pattern': "url(../../my-app/src/images/noise.png)",
      },
      spacing: {
        '41%': '35%',
        '20%': '57%',
        '15%': '15%'
      }
    },
  },
  plugins: [],
}