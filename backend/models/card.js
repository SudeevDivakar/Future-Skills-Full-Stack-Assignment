const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  id: String,
  title: String,
  description: String,
});

module.exports = mongoose.model("Card", cardSchema);
