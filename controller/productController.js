const ProductImage = require('../model/productImage');
const Product =require('../model/product');
const product = require('../model/product');

exports.getProductImages = async (req, res) => {
  const prodImages = await ProductImage.find();
  res.status(200).json({ prodImages });
};

exports.getProducts=async(req,res)=>{
  const prod=await Product.find();
  res.status(200).json(prod);

}

exports.addProduct=async(req,res)=>{
  const {name}=req.body;
  const {price}=req.body;
  const{description}=req.body;
  const url="http://localhost:3000/images/"+name+".jpg";
  const product=new Product({name,price,description,url});
  const createProduct=await product.save();
  res.status(201).json("Product created successfully.")

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
  console.log("postProductImage"+createdImage);

  res.status(201).json({
    productImage: {
      ...createdImage._doc,
    },
  });
};
