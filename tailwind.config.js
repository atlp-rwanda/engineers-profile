module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: '0.6rem',
      },
      maxWidth: {
        xx: '22.2rem',
      },
      minHeight: {
        xx: '20rem',
      },
      colors: {
        primary: '#3359DF',
        'primary-200': '#0E29A5',
        'primary-100': '#F4F6FC',
        dark: '#1F2C46',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['last'],
      justifySelf: ['last'],
    },
  },
  plugins: [],
};
