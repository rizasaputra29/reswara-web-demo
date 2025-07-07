const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['page_view', 'contact_form', 'portfolio_view', 'service_inquiry']
  },
  page: {
    type: String,
    required: false
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: false
  },
  userAgent: {
    type: String,
    required: false
  },
  ip: {
    type: String,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Analytics', analyticsSchema);