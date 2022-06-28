const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    password:{type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
