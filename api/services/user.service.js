const User = require("../models/user.model");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
    try {        
        let { firstName, lastName, email, password } = userData;        
        
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error(`User already exists with this email: ${email}`);
        }

        const genSaltPassword = await bcrypt.genSalt(10);
        const encodedPassword = await bcrypt.hash(password, genSaltPassword);

        const user = await User.create({ firstName, lastName, email, password: encodedPassword });
        
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        // .populate("addresses");
        if (!user) {
            throw new Error("User not found with id : ", userId);
        }

        return user;

    } catch (error) {
        throw new Error({ Message: "While finding user with ID got an error", Error: error.message });
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.find({ email });
        if (!user) {            
            throw new Error("User not found with email : ", email);
        }

        return user;

    } catch (error) {
        throw new Error({ Message: "While finding user with email got an error", Error: error.message });
    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);

        return user;

    } catch (error) {
        throw new Error({ Message: "While fetching user profile with ID got an error", Error: error.message });
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;

    } catch (error) {
        throw new Error({ Message: "While fetching users data got an error", Error: error.message });
    }
}

module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers };