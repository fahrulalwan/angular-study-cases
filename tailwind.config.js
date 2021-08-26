const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: false, // or 'media' or 'model'
    theme: {
      fontFamily: {
        'sans': ['"Open Sans"'],
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
