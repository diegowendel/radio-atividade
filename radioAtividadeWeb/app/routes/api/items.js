const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})  
    .then(items => res.json(items));
});

module.exports = router;