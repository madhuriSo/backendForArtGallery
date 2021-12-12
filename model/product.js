const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId:{ type:String,required:true},  
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);