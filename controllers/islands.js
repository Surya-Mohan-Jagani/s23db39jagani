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
// for a specific Costume.
exports.islands_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await islands.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
// Handle Costume update form on PUT.
exports.islands_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await islands.findById( req.params.id)
// Do updates of properties
if(req.body.island_name)
toUpdate.island_name = req.body.island_name;
if(req.body.island_location) toUpdate.island_location = req.body.island_location;
if(req.body.number_of_visitors) toUpdate.number_of_visitors = req.body.number_of_visitors;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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


    // Handle Costume delete on DELETE.
exports.islands_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await islands.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.islands_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await islands.findById( req.query.id)
    res.render('islandsdetail',
    { title: 'islands Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.islands_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('islandscreate', { title: 'islands Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

   // Handle building the view for updating a costume.
// query provides the id
exports.islands_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await islands.findById(req.query.id)
res.render('islandsupdate', { title: 'islands Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle a delete one view with id from query
exports.islands_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await islands.findById(req.query.id)
    res.render('islandsdelete', { title: 'islands Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };