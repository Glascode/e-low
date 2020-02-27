const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#26a69a',
        'primary-light': '#ebfff7',
        'primary-extra-light': '#fafffc',
        'primary-dark': '#176a61',
        'dark-fg': '#2b2e32',
        'dark-bg': '#222529'
      },
      borderWidth: {
        '3': '3px'
      },
      borderRadius: {
        'xl': '0.75rem'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    margin: ['responsive', 'first']
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(`dark${separator}${className}`)}`
        })
      })
    })
  ]
}
