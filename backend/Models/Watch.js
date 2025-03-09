const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Watch name is required'],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  description: {
    type: String,
    trim: true,
  },
  image: {  // Changed from imageUrl to match frontend
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isNewArrival: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Watch', watchSchema);