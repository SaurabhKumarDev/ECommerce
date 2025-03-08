const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "ECommerce";

const generateToken = (userId) => {    
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
    return token;
}

const getUserIdFromToken = (token) => {
    try {
        // Error : when i am using the user profile it work singly but in another api it will not work because token is return array
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId; 
    } catch (error) {
        console.error("Invalid or expired token: ", error.message);
        throw new Error("Invalid or expired token.");
    }
}

module.exports = { generateToken, getUserIdFromToken };