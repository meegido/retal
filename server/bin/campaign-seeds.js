const mongoose = require('mongoose');
const campaignSchema = require('../routes/api/campaign/campaignModel');
const User = require('../models/User');
const orderSchema = require('../routes/api/order/Order');
const fabricSchema = require('../routes/api/fabric/Fabric');

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const campaign = [
  {
    status: 'borrador',
    meterPrice: 30,
    totalMeters: 100,
    revenue: ,
    minimumOrder: 10,
    // startAt: '12/09/2017',
    // endsAt: '27/09/2017'
    userId: "59d74d214a9687849b60118d",
    fabricId: "",
    orderId: ""
  },
  {
    status: 'abierta',
    meterPrice: 25,
    totalPrice: 8000,
    revenue: 50,
    minimumOrder: 0,
    // startAt: '10/12/2017'
    // endsAt: '25/09/2017'
    userId: "59d74d214a9687849b60118e",
    fabricId: "",
    settingId: ""
  },
  {
    status: 'cerrada',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    // startAt: '12/03/2018'
    // endsAt: '27/03/2018'
    userId: "59d74d214a9687849b60118c",
    fabricId: "",
    settingId: ""

  }
]

campaignSchema.create(campaign, (err, docs) => {
  if (err) {
    throw err
  }

  docs.forEach((campaign) => {
    console.log(campaign.status)
  })
  mongoose.connection.close()
})
