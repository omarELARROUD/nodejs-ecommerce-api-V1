const subCategory = require('../models/subCategory.model');
const factory = require('./handlersFactory');


exports.setCategoryIdToBody = (req, res, next) => {
  // Nested route
  if(!req.body.category) req.body.category=req.params.id;
  next();
}

// create a subCategory
exports.createSubCategory = factory.createOne(subCategory);

// getall  subCategories
exports.getAllSubCategories = factory.getAll(subCategory);

//get a subCategory
exports.getSubCategoryById = factory.getOne(subCategory);

// update a subCategory
exports.updateSubCategory = factory.updateOne(subCategory);


// delete a subCategory
exports.deleteSubCategory = factory.deleteOne(subCategory);