var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('islands', { title: 'Search Results Islands' });
});

module.exports = router;