const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

// mongoose.connect('mongodb://localhost/retal')
//   .then(() => console.log('connected to db!'))

  mongoose.connect('mongodb://admin:KindR2yu!!@ds113455.mlab.com:13455/retales')
    .then(() => console.log('connected to db!'))

  //mongodb://<dbuser>:<dbpassword>@ds113455.mlab.com:13455/retales

const password = '1234'
const salt     = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const user = [
  {
    username: 'Cotoroig',
    password: hashPass,
    email: 'cotoroig@gmail.com',
    orderId: ''
  },
  {
    username: 'Foxfibre',
    password: hashPass,
    email: 'foxfibre@gmail.com',
    orderId: ''
  },
  {
    username: 'CottonColours',
    password: hashPass,
    email: 'conttoncolours@gmail.com',
    orderId: ''
  },
  {
    username: 'Latitude',
    password: hashPass,
    email: 'latitude@gmail.com',
    orderId: ''
  },
  {
    username: 'Seda Organic',
    password: hashPass,
    email: 'sedaorganic@gmail.com',
    orderId: ''
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
