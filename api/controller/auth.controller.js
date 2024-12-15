const userService = require("../services/user.service");
const cartService = require("../services/cart.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const cart = await cartService.createCart(user);
        const jwt = jwtProvider.generateToken(user._id);

        return res.status(201).send({ jwt, message: "Register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.getUserByEmail(email);

        const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        const token = jwtProvider.generateToken(user[0]._id);

        return res.status(200).send({ token, message: "Login successful" });
    } catch (error) {
        console.error("Error during login: ", error.message);
        return res.status(500).send({ message: "An error occurred during login", error: error.message });
    }
};


module.exports = { login, register };