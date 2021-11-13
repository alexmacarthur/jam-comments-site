module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.njk'],
    options: {
      whitelist: ['bg-red-500', 'bg-green-500'],
    }
  },
  theme: {
    fontFamily: {
      sans: ["Heebo", "sans-serif"]
    },
    extend: {
      maxWidth: {
        wide: "1300px"
      },
      borderRadius: {
        big: "5rem"
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            'pre code': {
              fontSize: 'inherit !important',
              padding: theme('padding.1'),
            },
            'td::before, th::before': {
              content: 'none !important'
            },
            'ul > li': {
              paddingLeft: '0 !important'
            },
            'ul > li::before': {
              content: 'none'
            },
            code: {
              fontWeight: '100 !important',
              fontFamily: "Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace !important",
              fontSize: theme('text.xl'),
              color: theme('colors.gray.700'),
              borderRadius: theme('border.sm'),
              paddingTop: `1px !important`,
              paddingBottom: `1px !important`,
              background: theme('colors.gray.200')
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.800')
            },
            'ul > li, ol > li': {
              paddingLeft: theme('padding.2')
            },
            'ul, ol': {
              marginLeft: theme('margin.5')
            }
          }
        }
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
