
const slugify = require('slugify');
const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');


exports.getCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category ID format"),
    validatorMiddleware
];

exports.createCategoryValidator = [
    check('name').notEmpty().withMessage('Category required')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    })
    .isLength({min: 3}).withMessage('Too short category name')
    .isLength({max: 32}).withMessage('Too long category name'),
    validatorMiddleware
]

exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category ID format"),
    validatorMiddleware
];

exports.updateCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category ID format"),
    check('name').isLength({min: 3}).withMessage('Too short category name')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    })
    .isLength({max: 32}).withMessage('Too long category name'),
    validatorMiddleware
]