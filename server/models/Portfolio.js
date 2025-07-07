const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['landscape', 'building', 'perizinan', 'pengujian', 'studi', 'penyelidikan-tanah']
  },
  subcategory: {
    type: String,
    required: false
  },
  client: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  images: [{
    url: String,
    caption: String,
    isPrimary: Boolean
  }],
  services: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['completed', 'ongoing', 'planned'],
    default: 'completed'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

portfolioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Portfolio', portfolioSchema);