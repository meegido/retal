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
    email: 'cotoroig@gmail.com',
    description: "Lo que pretendemos hacer circular con este proyecto es que cuando creatividad y propósito se dan la mano, encontramos aún las herramientas para vehicularlos, porque somos una cultura rica en oficios. Pero no nos engañemos, el algodón o es industrial o no es viable."
  },
  {
    username: 'Foxfibre',
    password: hashPass,
    email: 'foxfibre@gmail.com',
    description: "Located in the Capay Valley of California northeast of San Francisco, Viriditas Farm is the place where Foxfibre® naturally colored cottons are bred and grown. Certified organic by CCOF, about 140 merino sheep enrich the soil and produce the finest wool in the state.  Heirloom Sonora wheat produces flavorful low-yield  grain while adding tons of root and straw per acre, beautifully building the soil with each crop year."
  },
  {
    username: 'CottonColours',
    password: hashPass,
    email: 'conttoncolours@gmail.com',
    description: "El algodón natural nace con multitud de colores, como el crudo, el marrón y el verde, los que nosotros cultivamos. Quien no lo sabe, puede pensar que innovamos, pero solo hacemos lo que es natural. Por eso controlamos todo el proceso de producción: desde la semilla hasta la manufactura, incluyendo el cultivo y la hilatura."
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
