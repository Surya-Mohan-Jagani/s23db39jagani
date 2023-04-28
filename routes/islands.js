var express = require('express');
const islands_controlers= require('../controllers/islands');
var router = express.Router();


// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}


//GET request for one islands.
router.get('/', islands_controlers.islands_view_all_Page);
router.get('/detail',secured, islands_controlers.islands_view_one_Page);
router.get('/create', secured,islands_controlers.islands_create_Page);

router.get('/delete',secured,islands_controlers.islands_delete_Page);

router.get('/update', securedislands_controlers.islands_update_Page);

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
