// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

const productController = require('../controller/productController');

// Create a new product
router.post('/', productController.post);

// Get all products
router.get('/', productController.getAll);

// Get a specific product
router.get('/:productId', productController.getById);

// Update a product
router.put('/:productId', productController.update);

// Delete a product
router.delete('/:productId', productController.delete);

module.exports = router;