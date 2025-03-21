const cartService = require("./cart.service.js")
const Order = require("../models/order.model.js")
const Address = require("../models/address.model.js")
const OrderItem = require("../models/orderItems.model.js")

async function createOrder(user, shipAddress) {
    let address;

    if (shipAddress._id) {
        let existAddress = await Address.findById(shipAddress._id);
        address = existAddress;
    } else {
        address = new Address(shipAddress);
        address.user = user;
        await address.save();

        user.addresses.push(address);
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            product: item.product,
            quantity: item.quantity,
            userId: item.userId,
            size: item.size,
            discountedPrice: item.discountedPrice,
            price: item.product.price * item.quantity,
        })

        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new Order({
        user, orderItems, totalPrice: cart.totalPrice, totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount, totalItem: cart.totalItem, shippingAddress: address
    })    

    const savedOrder = await createdOrder.save();

    return savedOrder;
}

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
}

async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CONFIRMED";

    return await order.save();
}

async function shipOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "SHIPPED";

    return await order.save();
}

async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "DELIVERED";

    return await order.save();
}

async function cancelOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CANCELLED";

    return await order.save();
}

async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress")

    return order;
}

async function usersOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "product" } }).lean()

        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllOrders() {
    return await Order.find({ user: userId, orderStatus: "PLACED" })
        .populate({ path: "orderItems", populate: { path: "product" } }).lean()
}

async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(orderId);
}

module.exports = { createOrder, placeOrder, confirmedOrder, shipOrder, deleteOrder, cancelOrder, deliverOrder, findOrderById, usersOrderHistory, getAllOrders, deleteOrder };