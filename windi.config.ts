export default {
    theme: {
      screens: {
          tablet: '600px',
          laptop: '1024px',
          desktop: '1280px',
      },
      extend: {
        fontFamily: {
          'sans':[ 'Oswald', 'sans-serif', 'Roboto']

        }
      }
    },
    plugins: [
      require('windicss/plugin/typography'),
      // ...
    ],
  }
  



