const mongoose = require("mongoose");
const {Schema} = mongoose;


const movieSchema = new Schema({
    title : {type: String},
    genre : {type: String},
    plot : {type: String},
    cast : [{type: Schema.Types.ObjectId, ref:"Celebrity" }]
});




module.exports = mongoose.model("Movie", movieSchema);