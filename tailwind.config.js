const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      headerBg: '#3C1856',
      primary1: '#9854CB',
      primary2: '#3613F2',
      primary3: '#1A1A1A',
      secondary1: '#FFFEFE',
      secondary2: '#5B5B5B',
      secondary3: '#0F0F0F',
      error: '#FF0000',
      white: '#fff',
      black: '#000',
      borderColor: '#797979',
      neutral: {
        50: '#FFFFFF',
        100: '#D9D9D9',
        200: '#D9D9D9CC',
        300: '#797979',
      },
    },
    fontFamily: {
      sans: ['var(--font-rajdhani)', ...fontFamily.sans],
      cursive: ['var(--font-block)', 'cursive'],
    },
    extend: {
      animation: {
        spin: 'spin 25s linear infinite',
      },

      spacing: {
        container: `max(
          1rem,
          calc((100vw - calc(1280px - 1rem * 2)) / 2)
        )`,
        'sm-container': `max(
          1rem,
          calc((100vw - calc(550px - 1rem * 2)) / 2)
        )`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      h1: ['4rem', '1.3em'],
      h2: ['3.5rem', '1.3em'],
      h3: ['3rem', '1.3em'],
      h4: ['2.125rem', '1.3em'],
      h5: ['1.75rem', '1.3em'],
      h6: ['1.5rem', '1.3em'],
      subtitle1: ['1.25rem', '1.3em'],
      subtitle2: ['1.125rem', '1.3em'],
      body1: ['1rem', '1.3em'],
      body2: ['0.875rem', '1.3em'],
      button: ['1.25rem', '1.3em'],
      caption: ['0.75rem', '1.3em'],
    },
  },
  plugins: [],
};
