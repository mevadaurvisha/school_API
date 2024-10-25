import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User/user-model.js";
import userModel from "../models/User/user-model.js";


// Register a new user
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });
        
        await newUser.save();
        res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const allRegisterdUser = async (req, res) => {

    try {

        const allUser = await userModel.find();

        res.status(201).json(allUser)
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Login an existing user
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, "mysecretkey", { expiresIn: "1d" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
