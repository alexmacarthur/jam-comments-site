const plugins = {
  'tailwindcss': {},
  'postcss-nested': {}
};

if(process.env.NODE_ENV === 'production') {
  plugins['cssnano'] = {};
  plugins['autoprefixer'] = {};
}

module.exports = { plugins };
