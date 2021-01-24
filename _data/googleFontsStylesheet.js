const fetch = require('node-fetch');
const url = 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap'

module.exports = fetch(url).then(res => res.text());

// module.exports = () => {
//   return "nothing";
// }
