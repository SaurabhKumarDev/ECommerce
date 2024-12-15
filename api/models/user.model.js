const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true,
        default: "Customer"
    },
    mobile: {
        type: Number,
    },
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }],
    paymentInformation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information"
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings"
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews"
    }],
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("users", userSchema);
module.exports = User;