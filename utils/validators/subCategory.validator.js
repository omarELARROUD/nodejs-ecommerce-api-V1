const slugify = require('slugify');
const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const CategoryModel = require('../../models/category.model')

exports.getSubCategoriesValidator = [
    check('id').optional().isMongoId().withMessage("Invalid subCategory ID format"),
    validatorMiddleware
];

exports.getSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid subCategory ID format"),
    validatorMiddleware
];

exports.createSubCategoryValidator = [
    check('name').notEmpty().withMessage('subCategory required')
    .isLength({min: 2}).withMessage('Too short subCategory name')
    .isLength({max: 32}).withMessage('Too long subCategory name')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    }),
    check('category').notEmpty().isMongoId().withMessage('Invalid category ID format')
    .custom((id) =>
    CategoryModel.findById(id).then((category) =>{
        if (!category){
            return Promise.reject(
                new Error(`No category for this id: ${id}`)
            )
        }
    })),
    validatorMiddleware
]

exports.deleteSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category ID format"),
    validatorMiddleware
];

exports.updateSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid subCategory ID format"),
    check('name').isLength({min: 2}).withMessage('Too short subCategory name')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    })
    .isLength({max: 32}).withMessage('Too long subCategory name'),
    validatorMiddleware
]