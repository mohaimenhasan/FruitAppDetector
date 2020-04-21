var express = require('express');
var router = express.Router();
let analysisController = require("../controllers/anlayisis.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mohaimens\'s FruitApp Backend' });
});

router.get('/test', analysisController.test);
router.get('/analyzeFruit', analysisController.getFruit);

module.exports = router;
