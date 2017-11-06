const axios = require('axios');
const NYTAPIKEY = process.env.NYTAPIKEY;

module.exports = function(express) {
  let router = express.Router();
  let api = express.Router();
  api.get('/search', (req, res) => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYTAPIKEY}&q=${req.query.q}&begin_date=${req.query.begin_date}&end_date=${req.query.end_date}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).end());
  });
  router.use('/api', api);
  return router;
}
