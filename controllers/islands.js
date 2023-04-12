var islands = require('../models/islands');
// List of all Costumes
exports.islands_list = async function(req, res) {
    try{
        theislands = await islands.find();
        res.send(theislands);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
        

// for a specific Costume.
exports.islands_detail = function(req, res) {
res.send('NOT IMPLEMENTED: islands detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.islands_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: islands create POST');
};
// Handle Costume delete form on DELETE.
exports.islands_delete = function(req, res) {
res.send('NOT IMPLEMENTED: islands delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.islands_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: islands update PUT' + req.params.id);
};
