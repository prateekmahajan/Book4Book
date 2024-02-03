const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  image: String,
  title: String,
  auther: String,
})

module.exports = mongoose.model('book', schema)