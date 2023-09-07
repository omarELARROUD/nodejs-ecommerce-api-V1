const brand = require('../models/brand.model');
const factory = require('./handlersFactory');

// create a brand
exports.createBrand = factory.createOne(brand);

// getall  brands
exports.getAllBrands = factory.getAll(brand);

//get a subCategory
exports.getBrandById = factory.getOne(brand);

// update a brand
exports.updateBrand = factory.updateOne(brand);

// delete a brand
exports.deleteBrand = factory.deleteOne(brand);