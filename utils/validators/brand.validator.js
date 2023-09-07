const slugify = require('slugify');
const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');


exports.getBrandValidator = [
    check('id').isMongoId().withMessage("Invalid Brand ID format"),
    validatorMiddleware
];

exports.createBrandValidator = [
    check('name').notEmpty().withMessage('Brand required')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    })
    .isLength({min: 2}).withMessage('Too short Brand name')
    .isLength({max: 32}).withMessage('Too long Brand name'),
    validatorMiddleware
]

exports.deleteBrandValidator = [
    check('id').isMongoId().withMessage("Invalid Brand ID format"),
    validatorMiddleware
];

exports.updateBrandValidator = [
    check('id').isMongoId().withMessage("Invalid Brand ID format"),
    check('name').isLength({min: 3}).withMessage('Too short Brand name')
    .custom((val, {req}) => {
        req.body.slug  = slugify(val);
        return true;
    })
    .isLength({max: 32}).withMessage('Too long Brand name'),
    validatorMiddleware
]