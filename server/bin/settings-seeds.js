const mongoose = require('mongoose')
const settingsSchema = require('../routes/api/settings/Settings')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const setting = [
  {
    finalUse: 'Camisa',
    shorten: false,
    ironing: true,
    washed: 'A mano',
    fabricId: '59d6079fc212474805908479'
  },
  {
    finalUse: 'Abrigo',
    shorten: false,
    ironing: false,
    washed: 'En seco',
    fabricId: '59d6079fc21247480590847a'
  },
  {
    finalUse: 'Camiseta',
    shorten: false,
    ironing: true,
    washed: 'A máquina',
    fabricId: '59d6079fc21247480590847b'
  },

]

settingsSchema.create(setting, (err, docs) => {
    if (err) {
      throw err
    }

    docs.forEach((setting) => {
      console.log(setting)
    })
    mongoose.connection.close()
  })
