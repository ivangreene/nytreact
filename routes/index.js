const path = require('path');

module.exports = function(express) {
  let router = express.Router();
  router.use(require('./api')(express));
  router.use('/', express.static(path.join(appRoot, 'client/build')));
  return router;
};
