const Address = require("../models/address.model");

async function getAllAddressByUserId(userId) {
    const address = await Address.find({ user: userId });
    const totalAddress = await Address.countDocuments({ user: userId });

    return { address, totalAddress };
}

module.exports = { getAllAddressByUserId };
