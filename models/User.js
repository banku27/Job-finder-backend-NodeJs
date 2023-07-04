const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: false },
  phone: { type: String, required: false},
  isAdmin: { type: Boolean, default: false },
  isAgent: { type: Boolean, default: false },
  skills: { type: Array, default: "Add Skills" },
  profile: {
    type: String,
    required: true,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_qnmwriQPIcde0IMpwmVe8FdjP1S8aaxXlTN3zrtEQ&s"},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema)
//if i don't include this line then my model wont be accessible in other files.
 
