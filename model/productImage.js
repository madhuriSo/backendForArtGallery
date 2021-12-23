const mongoose = require('mongoose');

const productImageSchema = mongoose.Schema({
  productId:{type:Number,required:true},
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('ProductImage', productImageSchema);