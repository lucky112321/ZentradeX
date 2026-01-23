const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    console.log("Signup request received:", req.body);
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            console.log("Missing fields:", { username, email, password });
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Checking if user exists...");
        const user = await UserModel.findOne({ email });
        if (user) {
            console.log("User already exists:", email);
            return res.status(400).json({ message: "User already exists" })
        }

        console.log("Hashing password...");
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Creating user...");
        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        console.log("User created successfully:", newUser._id);
        return res.status(201).json({ message: "User registered successfully" })

    } catch (error) {
        console.error("Registration error details:", error);
        return res.status(500).json({ message: "User registration failed", error: error.message })
    }
}

const loginUser = async (req, res) => {
    console.log("Login request received:", req.body);
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            message: "User Logged in successfully",
            token,
            user: { username: user.username, email: user.email }
        });

    } catch (error) {
        console.error("Login error details:", error);
        return res.status(500).json({ message: "User login failed", error: error.message })
    }
}

module.exports = {
    registerUser,
    loginUser
};