const express = require("express");
const router = express.Router();
const CartItem = require("../../models/CartItem");

router.get('/users/:user_id/cart_items', (req, res) => {
    const user_id = req.params.user_id;
    CartItem.find({ "user_id": user_id })
        .then(cart_items => res.json(cart_items))
        .catch(err => res.status(404).json({
            noCartItems: 'Cart is empty'
        }));
});

router.put('/cart_items/:id', (req, res) => {
    const cart_item_id = req.params.id
    CartItem.findById({ "_id": cart_item_id })
        .then(cart_item => {

            cart_item.quantity = req.body.quantity;
            cart_item.size = req.body.size;

            cart_item.save()
                .then(cart_item => {
                    res.json({
                        success: true,
                        cart_item 
                    });
                })
        })
        .catch(err => res.status(404).json({
            noCartItems: 'Product not found in cart'
        }));
});

router.post('/cart_items/:id', (req,res) => {
    const new_cart_item = new CartItem({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        user_id: req.body.user_id,
        quantity: req.body.quantity,
        size: req.body.size,
        price: req.body.price,
        image: req.body.image
    });
    debugger
    new_cart_item.save()
        .then(cart_item => {
            res.json({
                success: true,
                cart_item
            });
        })
        .catch(err => res.status(404).json({
            noCartItems: 'Could not add the item to the cart'
        }));
});

router.delete('/cart_items/:id', (req, res) => {
        const cart_item_id = req.params.id;
        CartItem.findByIdAndDelete({"_id": cart_item_id})
            .then(() => {
            res.json({
                success: true
            });
        })
        .catch(err => res.status(404).json({
            noCartItems: 'Could not delete item from cart'
        }));
});

module.exports = router;