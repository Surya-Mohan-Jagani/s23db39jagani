const mongoose = require("mongoose")
const islandsSchema = mongoose.Schema({
island_name: String,
island_location: String,
number_of_visitors: Number
})
module.exports = mongoose.model("islands",islandsSchema)