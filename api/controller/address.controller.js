const addressService = require("../services/address.service");

const getAllUserAddress = async (req, res) => {
    try {
        const userId = req.user;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const address = await addressService.getAllAddressByUserId(userId);
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUserAddress };
