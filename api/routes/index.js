var express = require("express");
const User = require("./models");
const Course = require("./models");
var app = express();

app.get("/users", async (request, response) => {
  const users = await User.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/updateUser", async (request, response) => {
  await User.findOneAndUpdate(
    { username: request.body.username },
    {
      clubs: request.body.clubs,
    },
    { new: true }
  ).then((user) => {
    response.send(user);
  });
});

app.get("/courses", async (request, response) => {
  const courses = await Course.find({});

  try {
    response.send(courses);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/addCourse", async (request, response) => {
  const course = new Course(request.body);

  try {
    await course.save();
    response.send(course);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/getUserLogin", async (request, response) => {
  await User.findOne(request.body).then((user) => {
    response.send(user);
  });
});

app.post("/addUser", async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
