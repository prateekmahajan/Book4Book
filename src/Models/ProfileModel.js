const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: { type: String, minlength: 5, trim: true, lowercase: true, unique: true },
  password: String,
  name: String,
  profilePic: String,
  description: String,
  myListings: [{ ref: 'books', type: mongoose.Schema.Types.ObjectId }],
})

module.exports = mongoose.model('profile', schema)