const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

// POST track analytics event
router.post('/track', async (req, res) => {
  try {
    const analyticsData = {
      ...req.body,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };
    
    const analytics = new Analytics(analyticsData);
    await analytics.save();
    res.status(201).json({ message: 'Analytics tracked successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET analytics data
router.get('/', async (req, res) => {
  try {
    const { type, startDate, endDate, limit } = req.query;
    let query = {};
    
    if (type) query.type = type;
    if (startDate || endDate) {
      query.timestamp = {};
      if (startDate) query.timestamp.$gte = new Date(startDate);
      if (endDate) query.timestamp.$lte = new Date(endDate);
    }
    
    let analyticsQuery = Analytics.find(query).sort({ timestamp: -1 });
    
    if (limit) analyticsQuery = analyticsQuery.limit(parseInt(limit));
    
    const analytics = await analyticsQuery;
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET analytics summary
router.get('/summary', async (req, res) => {
  try {
    const summary = {
      totalPageViews: await Analytics.countDocuments({ type: 'page_view' }),
      totalContactForms: await Analytics.countDocuments({ type: 'contact_form' }),
      totalPortfolioViews: await Analytics.countDocuments({ type: 'portfolio_view' }),
      totalServiceInquiries: await Analytics.countDocuments({ type: 'service_inquiry' })
    };
    
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;