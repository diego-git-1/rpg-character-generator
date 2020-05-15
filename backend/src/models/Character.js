const { model, Schema } = require('mongoose')

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
})

module.exports = model('Character', CharacterSchema)