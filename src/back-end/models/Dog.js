const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: false
  },

  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  city : {
    type: String,
    required: false
  },

  organization: {
    type: String,
    required: true
  },


  age : {
    type: Number,
    required: false
  },

  sex : {
    type: String,
    required: false
  },

  breed : {
    type: String,
    required: false
  }
}, {timestamps: true})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog