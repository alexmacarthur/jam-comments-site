module.exports = {
  isProd: process.env.ELEVENTY_PRODUCTION === 'true',
  auth0ClientId: process.env.AUTH0_CLIENT_ID
};
