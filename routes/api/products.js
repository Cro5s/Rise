const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

// Category index page
router.get('/:category', (req, res) => {
    const category = req.params.category;
    Product.find({ "category": category })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({
            noProductFound: 'No product found'
        }));
});

// Product index page
router.get('/:category/:product_type', (req, res) => {
    const category = req.params.category
    const product_type = req.params.product_type
    Product.find({ "category": category }, { "product_type": product_type })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({
            noProductFound: 'No product found'
        }));
});

// Product show page
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err =>
            res.status(404).json({
                noProductFound: 'No product found with that ID'
            })
        );
});

module.exports = router;