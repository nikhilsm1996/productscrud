const mongoose = require('mongoose');

var ProductSchema = mongoose.model('ProductSchema', {
    Name: 
    { type: String, required:true },
    Status: { type: String },
    Price: { type: Number,required:true },
    Brand: { type: String },
    Care:{type:String},
    Category:{type:String},
    Color:{type:String},
    Material:{type:String},
    Size:{type:String},
    AvailableDate:{type:Date}

});

module.exports = { ProductSchema };