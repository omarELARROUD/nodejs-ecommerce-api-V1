const Category = require('../models/category.model');
const factory = require('./handlersFactory');


// create a category
exports.createCategory = factory.createOne(Category);

// getall  categories
exports.getAllCategories = factory.getAll(Category);

//get a subCategory
exports.getCategoryById = factory.getOne(Category);


// update a category
exports.updateCategory = factory.updateOne(Category);

// delete a Category
exports.deleteCategory = factory.deleteOne(Category);