const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
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
    streetAddress: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.ObjectId,     // Kis user ka address hai, This is an foreign key finding in the JS
        ref: "users"
    },
    mobile: {
        type: String,
        required: true
    }
})

const address = mongoose.model("addresses", addressSchema);
module.exports = address;