const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  handicap: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  clubs: {
    type: Array,
  },
});

const User = mongoose.model("User", UserSchema);

/* const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tees: {
    type: Array,
    required: true,
  },
});

const Course = mongoose.model("Course", CourseSchema);
 */
module.exports = User;
//module.exports = Course;
