const Cart = require("../models/cart.model");
const CartItems = require("../models/cartItem.model");
const Product = require("../models/product.model");

const createCart = async (user) => {
    try {
        const cart = new Cart({ user });

        const createdCart = await cart.save();

        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
};

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId });

        let cartItems = await CartItems.find({ cart: cart._id }).populate("product");
        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.productId);

        const isPresent = await CartItems.findOne({ cart: cart_id, product: product._id, userId });
        if (!isPresent) {
            const cartItem = new CartItems({
                product: product._id,
                cart: cart._id,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
                quantity: req.quantity || 1
            })

            const createdCartItem = await cartItem.save();

            cart.cartItems.push(createdCartItem);
            await cart.save();

            return "Item added to cart";
        } else {
            return "Already in cart";
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createCart, addCartItem, findUserCart };