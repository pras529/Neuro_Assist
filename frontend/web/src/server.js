require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(bodyParser.json());


app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const client = await pool.connect();
        const checkUser = await client.query("SELECT * FROM users WHERE email = $1", [email]);

        if (checkUser.rows.length > 0) {
            client.release();
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, hashedPassword]);

        client.release();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const client = await pool.connect();
        const userResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);

        if (userResult.rows.length === 0) {
            client.release();
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = userResult.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            client.release();
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        client.release();
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
