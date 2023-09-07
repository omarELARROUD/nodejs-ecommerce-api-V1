const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { getCategoryValidator,createCategoryValidator, deleteCategoryValidator, updateCategoryValidator} = require('../utils/validators/category.validator');
const subCategoriesRoute = require('./subCategory.routes')

router.use('/:id/subcategories',subCategoriesRoute);

// Create a new category
router.post('/',createCategoryValidator, categoryController.createCategory);

// Get all categories
router.get('/',categoryController.getAllCategories);

// Get a single category by ID
router.get("/:id",getCategoryValidator, categoryController.getCategoryById);

// update the name of the category by ID
router.put("/:id",updateCategoryValidator, categoryController.updateCategory);

// delete a category by ID
router.delete("/:id",deleteCategoryValidator, categoryController.deleteCategory);


module.exports = router;
