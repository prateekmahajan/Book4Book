const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: { type: String, minlength: 5, trim: true, lowercase: true, unique: true },
  password: { type: String, minlength: 8, maxlength: 256 },
  name: { type: String, required: true, maxlength: 50 },
  profilePic: String,
  description: { type: String, maxlength: 256 },
  myListings: [{ ref: 'books', type: mongoose.Schema.Types.ObjectId }],
})

module.exports = mongoose.model('profile', schema)