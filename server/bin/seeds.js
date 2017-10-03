const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))

const password = '1234'
const salt     = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const user = [
  {
    username: 'Cotoroig',
    password: hashPass,
    email: 'cotoroig@gmail.com'
  },
  {
    username: 'Foxfibre',
    password: hashPass,
    email: 'foxfibre@gmail.com'
  },
  {
    username: 'CottonColours',
    password: hashPass,
    email: 'conttoncolours@gmail.com'
  }
]

User.create(user, (err, docs) => {
  if (err) {
    throw err
  }

  docs.forEach((user) => {
    console.log(user.username)
  })
  mongoose.connection.close()
})
