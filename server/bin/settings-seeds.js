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
    campaignId: '59d663c92951475dce3505df'
  },
  {
    finalUse: 'Abrigo',
    shorten: false,
    ironing: false,
    washed: 'En seco',
    campaignId: '59d663c92951475dce3505e0'
  },
  {
    finalUse: 'Camiseta',
    shorten: false,
    ironing: true,
    washed: 'A máquina',
    campaignId: '59d663c92951475dce3505e1'
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
