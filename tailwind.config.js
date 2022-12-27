/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clrBrown: '#682C0E',
        clrSemiBrown: '#C24914',
        clrOrange: '#FC8621',
        clrLightOrange: '#F9E0AE',
        clrBlack: '#000000',
        clrWhite: '#FFFFFF',
        clrGrey: '#000000D9',
        clrLightGrey: '#000000b5'
      },
      fontFamily: {
        sans: ['SVN-Poppins', 'SVN-PoppinsItalic']
      },
      backgroundImage: {
        bgStore: "url('/src/assets/images/bgliststore.jpeg')"
      }
    }
  },
  plugins: []
};
