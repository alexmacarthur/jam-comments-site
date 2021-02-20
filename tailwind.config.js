module.exports = {
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
              code: {
                fontWeight: 'inherit'
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
