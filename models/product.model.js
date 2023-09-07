const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'product name required'],
    trim: true,
    minlength: [3, 'Too short product name '],
    maxlength: [100, 'Too long product name']

  },
  slug: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
    minlength: [20, 'Too short product name '],
  },
  quantity: {
    type: Number,
    required: [true, 'product quantity is required']
  },
  sold: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'product price is required'],
    trim: true,
    max: [200000, 'Too long product price']
  },
  priceAfterDiscount: {
    type: Number,
  },
  colors: [String],

  imageCover: {
    type: String,
    required: true
  },

  images: [String],
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: [true, 'product must be belong to a category']
  },
  
  subCategory: {
    type: mongoose.Schema.ObjectId,
    ref: 'SubCategory',
  },

  brand: {
    type: mongoose.Schema.ObjectId,
    ref: 'Brand'
  },

  ratingsAverage: {
    type: Number,
    min: [1, 'rating must be above or equal 1'],
    max: [5, 'rating must be below or equal 5']
  },

  ratingsQuantity: {
    type: Number,
    default: 0
  }
},
  {
    timestamps : true
  }
  // additional fields as needed
);

// Mongoose query middleware
productSchema.pre(/^find/,function (next){
  this.populate({
    path: 'category',
    select: 'name-_id'
  });
  next()
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
