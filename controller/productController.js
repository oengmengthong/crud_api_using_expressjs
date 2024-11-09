// routes/products.js
const express = require('express');
const Product = require('../models/Product');

exports.post = async (req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const products = await Product.findById(
            req.params.productId
        );
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, { $set: req.body }, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.productId);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
