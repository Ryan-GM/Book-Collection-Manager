const { default: mongoose } = require("mongoose");
const require = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  year: Number,
});
const book= mongoose.model("Book", bookSchema);
module.exports = book;
