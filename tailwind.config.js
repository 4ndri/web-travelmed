const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
      fontFamily:{
        title: ['Poiret One','Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}
