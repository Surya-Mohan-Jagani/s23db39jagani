var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var islands_controller = require('../controllers/islands');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/islands', islands_controller.islands_create_post);
// DELETE request to delete Costume.
router.delete('/islands/:id', islands_controller.islands_delete);
// PUT request to update Costume.
router.put('/islands/:id', islands_controller.islands_update_put);
// GET request for one Costume.
router.get('/islands/:id', islands_controller.islands_detail);
// GET request for list of all Costume items.
router.get('/islands', islands_controller.islands_list);
module.exports = router;