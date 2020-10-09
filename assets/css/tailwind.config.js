const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: ['./layouts/**/*.html'],
    options: {
      whitelist: [],
    }
},
important: true,
theme: {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },  
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      'roboto': ['Roboto', ...defaultTheme.fontFamily.serif],
      source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      system: defaultTheme.fontFamily.sans,
      'sf': ['Product Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'background':'#fffffe',
      'headline':'#094067',
      'paragraph': '#5f6c7b',
      'button': '#3da9fc',
      'button-text': '#fffffe',
    },
    spacing: {
      '2px': '2px',
      '7': '1.75rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '80': '20rem',
      '128': '32rem',
      '(screen-16)': 'calc(100vh - 4rem)',
    },
    inset: {
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
    },
    borderWidth: {
      '6': '6px',
    },
    maxWidth: (theme) => ({
      'screen-xl': theme('screens.xl'),
    }),
    maxHeight: {
      xs: '20rem',
      sm: '30rem',
      '(screen-16)': 'calc(100vh - 4rem)',
    },
    boxShadow: {
      'md-light': '0 0 12px 8px rgb(255,255,255)',
    },
    zIndex: {
      '90': '90',
      '100': '100',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '5.25rem',
    },
  },
},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}