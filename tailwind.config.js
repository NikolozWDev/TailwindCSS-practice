/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

    extend: {
      colors: {
        primary: '#cc7596'
      },
    },
    
    keyframes: {
      wiggle: {
        '50%': {
          background: 'red'
        },
        '100%': {
          background: 'black'
        }
      }
    },
    animation: {
      wiggle: 'wiggle 50s infinite',
    },

  },
  plugins: [],
}