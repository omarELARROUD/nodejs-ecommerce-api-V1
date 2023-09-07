const express = require('express');

// const router = express.Router();
const subCategoryController = require('../controllers/subCategory.controller');
const { getSubCategoryValidator,
    getSubCategoriesValidator,
    createSubCategoryValidator,
    updateSubCategoryValidator,
     deleteSubCategoryValidator} = require('../utils/validators/subCategory.validator');

const {setCategoryIdToBody}=require('../controllers/subCategory.controller');

//mergeParams: Allow us to access parameters  on other routers
const router = express.Router({mergeParams: true});

// Create a new subCategory
router.post('/',setCategoryIdToBody,createSubCategoryValidator, subCategoryController.createSubCategory);

// Get all subCategories
router.get('/', getSubCategoriesValidator,subCategoryController.getAllSubCategories);

// Get a single subCategory by ID
router.get("/:id",getSubCategoryValidator ,subCategoryController.getSubCategoryById);

// update the name of the subCategory by ID
router.put("/:id",updateSubCategoryValidator ,subCategoryController.updateSubCategory);

// delete a category by ID
router.delete("/:id",deleteSubCategoryValidator, subCategoryController.deleteSubCategory);


module.exports = router;
