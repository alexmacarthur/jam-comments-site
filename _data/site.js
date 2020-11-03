module.exports = {
  isProd: process.env.ELEVENTY_PRODUCTION === 'true',
  signUpUrl: `https://jamcomments.us.auth0.com/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=https://app.jamcomments.com`
};
