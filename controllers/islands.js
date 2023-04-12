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
exports.islands_create_post = async function(req, res) {
    console.log(req.body)
    let document = new islands();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.island_name = req.body.island_name;
    document.island_location = req.body.island_location;
    document.number_of_visitors = req.body.number_of_visitors;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.islands_delete = function(req, res) {
res.send('NOT IMPLEMENTED: islands delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.islands_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: islands update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.islands_view_all_Page = async function(req, res) {
    try{
    theislands = await islands.find();
    res.render('islands', { title: 'islands Search Results', results: theislands });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
