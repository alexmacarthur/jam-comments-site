module.exports = {
    purge: {
      enabled: true,
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