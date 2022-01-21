const plugins = {
  'tailwindcss/nesting': {},
  'tailwindcss': {}
};

if(process.env.NODE_ENV === 'production') {
  plugins['cssnano'] = {};
  plugins['autoprefixer'] = {};
}

module.exports = { plugins };
