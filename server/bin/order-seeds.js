const mongoose = require('mongoose')
const Order = require('../routes/api/order/Order')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const order = [
  {
    meters: 20,
    maker: '59df71deae8afc23706622f7',
    buyerUsername: 'Pedro',
    buyerEmail: 'pedro@gmail.com'
  },
  {
    meters: 10,
    maker: '59df71deae8afc23706622f8',
    buyerUsername: 'Olga',
    buyerEmail: 'olga@gmail.com'
  },
  {
    meters: 30,
    maker: '59df71deae8afc23706622f9',
    buyerUsername: 'María',
    buyerEmail: 'maria@gmail.com'
  },
  {
    meters: 35,
    maker: '59df71deae8afc23706622fa',
    buyerUsername: 'Rubén',
    buyerEmail: 'ruben@gmail.com'
  },
  {
    meters: 10,
    maker: '59df71deae8afc23706622fb',
    buyerUsername: 'Juancho',
    buyerEmail: 'juancho@gmail.com'
  },
  {
    meters: 10,
    maker: '59df71deae8afc23706622f7',
    buyerUsername: 'Torreta',
    buyerEmail: 'torreta@gmail.com'
  },
  {
    meters: 15,
    maker: '59df71deae8afc23706622fb',
    buyerUsername: 'Chanel',
    buyerEmail: 'chanel@gmail.com'
  },
  {
    meters: 50,
    maker: '59df71deae8afc23706622f9',
    buyerUsername: 'Diesel',
    buyerEmail: 'diesel@gmail.com'
  },
  {
    meters: 80,
    maker: '59df71deae8afc23706622f8',
    buyerUsername: 'Chipie',
    buyerEmail: 'chipie@gmail.com'
  },
  {
    meters: 25,
    maker: '59df71deae8afc23706622f7',
    buyerUsername: 'Adidas',
    buyerEmail: 'adidas@gmail.com'
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
