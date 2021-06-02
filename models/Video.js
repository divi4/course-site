const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  length: {
    type: String.
    required: true
  }
})

module.exports = mongoose.model("Video", VideoSchema)
