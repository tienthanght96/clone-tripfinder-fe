module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'accent-1': '#333',
        teal: {
          400: '#4FD1C5',
          500: '#38B2AC',
          600: '#319795',
          700: '#2C7A7B',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
