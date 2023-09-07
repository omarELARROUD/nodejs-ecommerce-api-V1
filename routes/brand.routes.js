const express = require('express');

const router = express.Router();
const BrandController = require('../controllers/brand.controller');
const { getBrandValidator,
    createBrandValidator,
     deleteBrandValidator,
      updateBrandValidator} = require('../utils/validators/brand.validator');


// Create a new Brand
router.post('/',createBrandValidator, BrandController.createBrand);

// Get all Brands
router.get('/',BrandController.getAllBrands);

// Get a single Brand by ID
router.get("/:id",getBrandValidator, BrandController.getBrandById);

// update the name of the Brand by ID
router.put("/:id",updateBrandValidator, BrandController.updateBrand);

// delete a Brand by ID
router.delete("/:id",deleteBrandValidator, BrandController.deleteBrand);


module.exports = router;
