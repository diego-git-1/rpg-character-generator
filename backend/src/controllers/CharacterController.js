const Character = require('../models/Character')

module.exports = {
  async index(req, res) {
    const characters = await Character.find()
    res.json(characters)
  }
}