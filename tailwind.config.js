module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        180: '45rem',
      },
      height: {
        120: '30rem',
      },
      colors: {
        'light-grey': '#f0f2ff',
        'light-grey-hov': '#d1d9ff',
        'dark-grey': '#a6abba',
        'light-blue': '#5969c5',
        'dark-blue': '#4f537c',
      },
      backgroundImage: {
        'background-header':
          'url("./assets/images/suggestions/desktop/background-header.png")',
      },
    },
  },
  variants: {},
  plugins: [],
}
