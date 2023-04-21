var express = require('express');
const islands_controlers= require('../controllers/islands');
var router = express.Router();

/* GET costumes */
router.get('/', islands_controlers.islands_view_all_Page );

/* GET detail costume page */
router.get('/detail', islands_controlers.islands_view_one_Page);

/* GET create costume page */
router.get('/create', islands_controlers.islands_create_Page);

/* GET create update page */
router.get('/update', islands_controlers.islands_update_Page);

/* GET delete costume page */
router.get('/delete', islands_controlers.islands_delete_Page);

module.exports = router;
