var express = require("express");
const userModel = require("./models");
var app = express();

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/addUser", async (request, response) => {
  const user = new userModel(request.body);

  console.log(request, response);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
