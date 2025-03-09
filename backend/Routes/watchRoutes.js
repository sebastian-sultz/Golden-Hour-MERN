const express = require('express');
const router = express.Router();
const Watch = require('../Models/Watch');






router.get('/products/all', async (req, res) => {
  try {
    const allWatches = await Watch.find({ isNewArrival: false })
      .sort({ createdAt: -1 }) // Sort by newest first
      .select('name brand price description image createdAt isNewArrival'); // Select needed fields

    res.status(200).json(allWatches);
  } catch (error) {
    console.error('Error fetching all watches:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching watches',
      error: error.message,
    });
  }
});




// Get new arrivals
router.get('/products/new', async (req, res) => {
  try {
    const newWatches = await Watch.find({ isNewArrival: true })
      .sort({ createdAt: -1 })
      .limit(10)
      .select('name brand price description image createdAt isNewArrival'); // Select only needed fields

    res.status(200).json(newWatches);
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching new arrivals',
      error: error.message,
    });
  }
});

module.exports = router;