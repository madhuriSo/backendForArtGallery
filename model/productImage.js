const mongoose = require('mongoose');

const productImageSchema = mongoose.Schema({
  name: { type: String, required: true },
  price:{ type:Number,required:true},
  description:{type:String,required:true},
  url: { type: String, required: true },
});

module.exports = mongoose.model('ProductImage', productImageSchema);