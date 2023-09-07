const product = require('../models/product.model');
const factory = require('./handlersFactory');

// create a product
exports.createproduct = factory.createOne(product);

// getall  products
exports.getAllproducts = factory.getAll(product,'product');

//get a product
exports.getproductById = factory.getOne(product);

// update a product
exports.updateproduct = factory.updateOne(product);

// delete a product
exports.deleteproduct = factory.deleteOne(product);