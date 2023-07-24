const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model("Contact", contactSchema);
