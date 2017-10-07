const User = require('./User')
const bcrypt = require('bcrypt')

module.exports = {
  list: (req, res, next) => {
    User.find({})
    .then(users => res.status(200).json(users))
    .catch(e => res.status(500).json({message: `Error getting all users -> ${e}`}))
  },
  getOne: (req, res, next) => {
    User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json(`Error getting user -> ${e}`))
  },
  update: (req, res, next) => {
    const { username, password, email, address, userType } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)
    User.findByIdAndUpdate(req.params.id,{
      $set: {
        'username': username,
        'password': hashPass,
        'email': email,
        'userType': userType
      }},
      { new: true }).exec()
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({message: `Error updating user -> ${e}`}))
  },
  remove: (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({message: 'User removed'}))
    .catch( e => res.status(500).json({message: `Error when trying to delete user -> ${e}`}))
  }
}
