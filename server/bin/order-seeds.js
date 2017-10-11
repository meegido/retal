const mongoose = require('mongoose')
const Order = require('../routes/api/order/Order')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const order = [
  {
    meters: 20,
    maker: '59da0213cf62694ff8df2a62',
    buyer: '59da02f6cf62694ff8df2a69'
  },
  {
    meters: 30,
    maker: '59da023ecf62694ff8df2a63',
    buyer: '59da02f6cf62694ff8df2a69'
  },
  {
    meters: 10,
    maker: '59da0257cf62694ff8df2a64',
    buyer: '59da02e7cf62694ff8df2a68'
  },
  {
    meters: 50,
    maker: '59da0287cf62694ff8df2a65',
    buyer: '59da02e7cf62694ff8df2a68'
  },
  {
    meters: 80,
    maker: '59da02bdcf62694ff8df2a66',
    buyer: '59da02e7cf62694ff8df2a68'
  }
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
