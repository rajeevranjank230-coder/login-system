const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static HTML files
app.use(express.static(__dirname));

let users = [];

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/register", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "Account Created Successfully ✅" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (foundUser) {
    res.json({ message: "Login Successful ✅" });
  } else {
    res.json({ message: "Invalid Credentials ❌" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});