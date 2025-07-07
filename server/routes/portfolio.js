const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// GET all portfolios with filtering and sorting
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit, sort } = req.query;
    let query = {};
    
    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';
    
    let portfolioQuery = Portfolio.find(query);
    
    if (sort) {
      const sortOptions = {};
      if (sort === 'newest') sortOptions.createdAt = -1;
      if (sort === 'oldest') sortOptions.createdAt = 1;
      if (sort === 'year') sortOptions.year = -1;
      portfolioQuery = portfolioQuery.sort(sortOptions);
    }
    
    if (limit) portfolioQuery = portfolioQuery.limit(parseInt(limit));
    
    const portfolios = await portfolioQuery;
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single portfolio by ID
router.get('/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new portfolio
router.post('/', async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update portfolio
router.put('/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE portfolio
router.delete('/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;