const express = require("express");
const cors = require("cors");
const app = express();

const { validateLogin } = require("./loginvalidator");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  if (validateLogin(email, password)) {
    res.json("Valid input");
  } else {
    res.status(400).json("Invalid input");
  }
});
app.listen(3000, () => {
  console.log("server started up on port 3000");
});
