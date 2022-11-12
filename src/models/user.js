const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  identityNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
