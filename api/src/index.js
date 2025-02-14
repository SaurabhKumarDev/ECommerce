const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).json({ message: "E-Commerce website", Status: true });
})

const authRouter = require("../routes/auth.route.js");
app.use("/auth", authRouter);

const userRouter = require("../routes/user.route.js");
app.use("/api/users", userRouter);

const productRouter = require("../routes/product.route.js");
app.use("/api/products", productRouter);

const adminProductRouter = require("../routes/adminProduct.route.js");
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("../routes/cart.route.js");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("../routes/cartItem.route.js");
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require("../routes/order.route.js");
app.use("/api/orders", orderRouter);

const reviewRouter = require("../routes/review.route.js");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("../routes/rating.route.js");
app.use("/api/ratings", ratingRouter);

const adminOrderRouter = require("../routes/adminOrder.route.js");
app.use("/api/admin/orders", adminOrderRouter);

module.exports = app;