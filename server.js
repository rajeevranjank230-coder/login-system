const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "Account Created Successfully ✅" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (foundUser) {
        res.json({ message: "Login Successful ✅" });
    } else {
        res.json({ message: "Invalid Credentials ❌" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});