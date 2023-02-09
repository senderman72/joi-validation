const express = require("express");
const app = express();
const Joi = require("joi");
const { validateSignup } = require("./validator");

app.use(express.json());

app.post("/", (req, res) => {
  const { error, value } = validateSignup(req.body);

  if (error) {
    console.log(error);
    return res.send(error.details);
  }

  res.send("successfully signed up!");
});

app.listen(3000, () => {
  console.log("server started up on port 3000");
});
