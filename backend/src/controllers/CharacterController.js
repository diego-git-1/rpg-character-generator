const Character = require('../models/Character')

module.exports = {
  async index(req, res) {
    const characters = await Character.find()
    res.json(characters)
  },

  async create(req, res) {
    const { name, profession } = req.body
    const character = await Character.create({
      name,
      profession
    })
    res.json(character)
  }
}