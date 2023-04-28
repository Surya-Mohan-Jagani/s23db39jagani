const mongoose = require("mongoose");

const islandsSchema = mongoose.Schema({
  island_name:  {type:String , required: true, minLength:[1,'itemname']},
  island_location: {type:String,required: true,maxLength:[30]},
  number_of_visitors: { type: Number, required: true,min: 0, max: 6000},
   
});

module.exports = mongoose.model("islands", islandsSchema);