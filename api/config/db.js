const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017";

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit the application if the database connection fails
    }
};

module.exports = { connectToDB };