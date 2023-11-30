const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);
// Add plugin
Course.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' 
});
mongoose.plugin(slug);


module.exports = mongoose.model('Course', Course);