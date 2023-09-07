const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category required'],
    unique: [true, 'Category must be unique']
  },
  slug: {
    type: String,
    lowercase: true,
},
  image: {
    type: String
  },
},
  {
    timestamps : true
  }
  // additional fields as needed
);

// // Pre-save middleware to generate the slug and set the activated timestamp
// categorySchema.pre('save', function(next) {
//   if (this.isModified('name')) {
//     this.slug = slugify(this.name, { lower: true, strict: true });
//   }
//   next();
// });

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
