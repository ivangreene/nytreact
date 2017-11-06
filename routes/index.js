module.exports = function(express) {
  let router = express.Router();
  router.use(require('./api')(express));
  return router;
};
