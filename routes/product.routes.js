const express = require('express');

const router = express.Router();
const productController = require('../controllers/product.controller');

const { getProductValidator,createProductValidator, deleteProductValidator, updateProductValidator} = require('../utils/validators/product.validator');


// Create a new product
router.post('/',createProductValidator, productController.createproduct);

// Get all products
router.get('/', productController.getAllproducts);

// Get a single product by ID
router.get('/:id',getProductValidator, productController.getproductById);

// update the name of the product by ID
router.put("/:id",updateProductValidator, productController.updateproduct);

// delete a product by ID
router.delete("/:id",deleteProductValidator, productController.deleteproduct);

module.exports = router;
