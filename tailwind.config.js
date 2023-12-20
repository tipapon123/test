/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      "./node_modules/@nextui-org/theme/dist/components/button.js", 
      // or you can use a glob pattern (multiple component styles)
      './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
      extend: {
          colors: {
              primary: '#53BD95',
              'primary-dark': '#2c785c',
          },
          
      },
      fontFamily: {
          sans: ['Prompt','sans-serif'],
      },
  },
  plugins: [],
};
