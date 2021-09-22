module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'ssm': '450px',
      },
      colors:{
        main:{
          blue: '#3AB5EF',
          lightblue: '#4677ff',
          purple: '#B77CF5',
          lightpurple: '#9534FB',
          grey: '#C4C4C4'
        }
      },
      backgroundImage: theme => ({
        'home-background': "url('/Background.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
