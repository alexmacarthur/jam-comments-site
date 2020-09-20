module.exports = {
    purge: {
      enabled: process.env.NODE_ENV == 'production',
      content: ['./**/*.njk'],
      options: {
        whitelist: ['bg-red-500', 'bg-green-500'],
      }
    },
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }