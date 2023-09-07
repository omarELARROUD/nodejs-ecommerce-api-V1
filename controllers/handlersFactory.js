const asyncHandler = require("express-async-handler");
const ApiError = require ('../utils/apiError');
const ApiFeatures = require('../utils/apiFeatures');

// Controller function to create a new brand
exports.createOne = (model) =>
 asyncHandler(async (req, res) => {
  const Model = await model.create(req.body);
  res.status(201).json({data: Model});
});

// Controller function to delete a document
exports.deleteOne = (model) =>
 asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const Model = await model.findByIdAndDelete(id);
    if (!Model) {
      return next(new ApiError(`document not found with id : ${id}`,404));
    }
    res.status(204).json('delete done');
  });

  // Controller function to update a document
exports.updateOne = (model) =>
 asyncHandler(async (req, res, next) => {
    const Model = await model.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    });
    if (!Model) {
      return next(new ApiError(`document not found with id : ${req.params.id}`,404));
    }
    res.status(200).json(Model);
  })

  exports.getAll = (model,modelName='') =>
   asyncHandler(async (req, res) => {
  
    let filterObject = {};
    if (req.params.id) filterObject = {category: req.params.id};
  
    
    const documentCounts = await model.countDocuments();
    const apiFeatures = new ApiFeatures(model.find(filterObject), req.query)
    .paginate(documentCounts)
    .filter()
    .search(modelName)
    .limitFields()
    .sort();
    const {mongooseQuery, paginationResult} = apiFeatures;
    const Model = await mongooseQuery.find(mongooseQuery);
    res.status(200).json({result: Model.length, paginationResult, data: Model});
  
  });

  // Controller function to get a brand by id
exports.getOne = (model) =>
 asyncHandler(async (req, res, next) => {
  const Model = await model.findById(req.params.id);
  if (!Model) {
    return next(new ApiError(`document not found with id : ${req.params.id}`,404));

  }
  res.status(200).json({data : Model});
});