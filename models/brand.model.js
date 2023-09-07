const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Brand name required'],
    unique: [true, 'Brand must be unique']
  },
  slug: {
    type: String,
    lowercase: true,
  },
  image: {
    type: String,
    optional: true
  },
},
  {
    timestamps : true
  }
  // additional fields as needed
);

const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
