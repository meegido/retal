const mongoose = require('mongoose')
const Fabric = require('../routes/api/fabric/Fabric')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


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
    'campaignId' : '59d663c92951475dce3505df'
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
    'campaignId' : '59d663c92951475dce3505e0'
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
    'campaignId' : '59d663c92951475dce3505e1'
  }
]


  Fabric.create(fabric, (err, docs) => {
    if (err) {
      throw err
    }

    docs.forEach((fabric) => {
      console.log(fabric)
    })
    mongoose.connection.close()
  })
