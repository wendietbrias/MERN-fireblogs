const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
