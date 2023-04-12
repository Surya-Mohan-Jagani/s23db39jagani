var express = require('express');
const islands_controlers= require('../controllers/islands');
var router = express.Router();

/* GET costumes */
router.get('/', islands_controlers.islands_view_all_Page );
module.exports = router;
