const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))

const password = '1234'
const salt     = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const user = new User({
    username: 'cualquiera',
    email: 'cualquiera@email.com',
    password: hashPass
  })

const fabric = [
  {
    'typeName': 'Punto',
    'cropOrigin': 'Andalucia',
    'prodOrigin': 'Valencia',
    'fiber': 'Ortiga',
    'colour': 'Azul',
    'weight': 'Media',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'typeName': 'Punto',
    'cropOrigin': 'Andalucia',
    'prodOrigin': 'Valencia',
    'fiber': 'Ortiga',
    'colour': 'Azul',
    'weight': 'Media',
    'structure': 'Fluída',
    'dye': 'Inmersión',
    'userId' : ''

  },
  {
    'typeName': 'Lino',
    'cropOrigin': 'Cataluña',
    'prodOrigin': 'Cataluña',
    'fiber': 'Bambú',
    'colour': 'Marron',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'typeName': 'Lino',
    'cropOrigin': 'Cataluña',
    'prodOrigin': 'Cataluña',
    'fiber': 'Bambú',
    'colour': 'Marron',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'Inmersión',
    'userId' : ''
  },
  {
    'typeName': 'Oxford',
    'cropOrigin': 'Galicia',
    'prodOrigin': 'Anadalucia',
    'fiber': 'Cáñamo',
    'colour': 'Rojo',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'No tintado',
    'typeName': 'Oxford',
    'cropOrigin': 'Galicia',
    'prodOrigin': 'Anadalucia',
    'fiber': 'Cáñamo',
    'colour': 'Rojo',
    'weight': 'Media',
    'structure': 'Media',
    'dye': 'No tintado',
    'user' : ''
  }
]

User.create(user)
  .then(user => {
    console.log("user admin/admin created")
    return Fabric.create(fabrics)
  })
  .then((fabric) => {
    console.log(fabric)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))

  // Fabric.create(fabric, (err, docs) => {
  //   if (err) {
  //     throw err
  //   }
  //
  //   docs.forEach((fabric) => {
  //     console.log(fabric)
  //   })
  //   mongoose.connection.close()
  // })
