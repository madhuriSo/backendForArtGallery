const ProductImage = require('../model/productImage');
const Product =require('../model/product');

exports.getProductImages = async (req, res) => {
  const prodImages = await ProductImage.find();
  res.status(200).json({ prodImages });
};

exports.getProducts=async(req,res)=>{
  const prod=await Product.find();
  res.status(200).json(prod);

}

exports.postProductImage = async (req, res) => {
  const { name } = req.body;
  const { productId } = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const productImage = new ProductImage({
    productId,
      name,
     imagePath,
  });
  const createdImage = await productImage.save();
  res.status(201).json({
    productImage: {
      ...createdImage._doc,
    },
  });
};