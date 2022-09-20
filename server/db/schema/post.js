const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  cover: String,
  content: String,
});

module.exports = mongoose.model("post", postSchema);
