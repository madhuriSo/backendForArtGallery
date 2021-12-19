const express = require('express');

const productImgController = require('../controller/productController');

const storage = require('../helper/storage');

const router = express.Router();

router.get('/', productImgController.getProductImages);

router.post('/', storage, productImgController.postProductImage);

router.get('/products',productImgController.getProducts);

module.exports = router;