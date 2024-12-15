const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).json({ message: "E-Commerce website", Status: true });
})

app.use("/auth", require("../routes/auth.route"));
app.use("/api/users",require("../routes/user.route"));

module.exports = app;