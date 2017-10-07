const mongoose = require('mongoose')
const Order = require('../routes/api/order/Order')
mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const order = [
  {
    meters: 20,
    userId: '59d7c31e266345982ebe4deb'
  },
  {
    meters: 30,
    userId: '59d7c31e266345982ebe4deb'
  },
  {
    meters: 10,
    userId: '59d7c31e266345982ebe4deb'
  },

]

Order.create(order, (err, docs) => {
    if (err) {
      throw err
    }

    docs.forEach((order) => {
      console.log(order)
    })
    mongoose.connection.close()
  })
