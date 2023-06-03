/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'content/**/*.md'
  ],
  theme: {
    fontFamily: {
      sans: ["montserrat", "Arial", "Tahoma", "sans-serif"],
      sol: ["Sol-Medium"]
    },
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#000000',
        1: '#100c08'
      },
      white: {
        DEFAULT: '#c9c9c9',
        1: '#ffffff',
      },
      red: '#cf2e2e',
      gray: {
        DEFAULT: '#777',
        1: '#aaa',
        2: '#615476'
      },
      pink: {
        DEFAULT: '#f78da7',
        1: '#e100ff',
        2: '#c827c3',
        3: '#fc00ff'
      },
      blue: {
        DEFAULT: '#8ed1fc',
        1: '#3c96a3',
        2: '#0693e3',
        3: '#00dbde'
      },
      orange: {
        DEFAULT: '#fcb900',
        1: '#ff6900',
        2: '#f27121',
        3: '#df4f6b'
      },
      green: {
        DEFAULT: '#7bdcb5',
        1: '#00d084',
        2: '#34e89e',
      },
      purple: {
        DEFAULT: '#1a1423',
        1: '#7f00ff',
        2: '#9b51e0',
      },
    },
    extend: {
      fontSize: {
        sm: '0.813rem', // 13 pxm
        '5xl': ['3.125rem', '1.4'], // 50 px
      },
      screens: {
        'xs': '460px',
      }
    }
  }
}
