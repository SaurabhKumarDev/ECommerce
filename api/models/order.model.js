const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems"
    }],
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    deliveryDate: {
        type: Date
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    },
    paymentDetails: {
        paymentMethod: {
            type: String
        },
        transactionId: {
            type: String
        },
        paymentId: {
            type: String
        },
        paymentStatus: {
            type: String,
            default: "Pending"
        }
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalDiscountedPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Pending"
    },
    totalItem: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const order = mongoose.model("orders", orderSchema);
module.exports = order;