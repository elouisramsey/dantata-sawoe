module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f9b416',
        secondary: '#28245f',
        tertiary: '#27235C'
      },
      fontSize: {
        three: '1.3rem',
        tiny: '0.6rem',
        four: '4.3rem'
      },
      width: {
        '8/11': '73%',
        '1/7': '46%'
      },
      height: {
        half: '50vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
