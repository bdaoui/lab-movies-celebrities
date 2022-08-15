//  Add your code here
const mongoose = require("mongoose");
const {Schema} = mongoose;


const celebSchema = new Schema({
    name: {type: String},
    occupation: {type: String, default: "unknown"},
    catchPhrase: {type: String, required: true}

});





module.exports = mongoose.model("Celebrity", celebSchema);
