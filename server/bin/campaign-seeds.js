const mongoose = require('mongoose')
const campaignSchema = require('../routes/api/campaign/campaignModel')

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const campaign = [
  {
    status: 'draft',
    totalPrice: 4000,
    totalMeters: 100,
    minimumOrder: 10,
    countOrders: 0,
    countMeters: 0,
    manufactured: true,
    // startAt: '12/09/2017',
    // endsAt: '27/09/2017'
    userId: "59d550033b7fe739107310ae"
  },
  {
    status: 'open',
    totalPrice: 8000,
    totalMeters: 150,
    minimumOrder: 20,
    countOrders: 4,
    countMeters: 80,
    manufactured: true,
    // startAt: '10/12/2017'
    // endsAt: '25/09/2017'
    userId: "59d550033b7fe739107310af"

  },
  {
    status: 'closed',
    totalPrice: 12000,
    totalMeters: 120,
    minimumOrder: 20,
    countOrders: 6,
    countMeters: 120,
    manufactured: false,
    // startAt: '12/03/2018'
    // endsAt: '27/03/2018'
    userId: "59d550033b7fe739107310b0"
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
