const mongoose = require('mongoose');
const campaignSchema = require('../routes/api/campaign/campaignModel');

mongoose.connect('mongodb://localhost/retal')
  .then(() => console.log('connected to db!'))


const campaign = [
  {
    status: 'borrador',
    meterPrice: 30,
    totalMeters: 100,
    revenue: 0,
    minimumOrder: 10,
    startAt: '2017-10-07T19:29:34.390Z',
    endsAt: '2017-10-17T19:29:34.390Z',
    maker: "59da0213cf62694ff8df2a62",
    fabric: '59ddf97c2f89b9231b69da3a',
    order: ['59ddfd8c4ea968254d057f72', '59ddfd8c4ea968254d057f73']
  },
  {
    status: 'abierta',
    meterPrice: 25,
    totalMeters: 150,
    revenue: 50,
    minimumOrder: 0,
    startAt: '2017-10-07T19:29:34.390Z',
    endsAt: '2017-10-27T19:29:34.390Z',
    maker: '59da023ecf62694ff8df2a63',
    fabric: '59ddf97c2f89b9231b69da3b',
    order: ['59ddfd8c4ea968254d057f74', '59ddfd8c4ea968254d057f75']
  },
  {
    status: 'cerrada',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-10-02T19:29:34.390Z',
    endsAt: '2017-10-12T19:29:34.390Z',
    maker: '59da0257cf62694ff8df2a64',
    fabric: '59ddf97c2f89b9231b69da3c',
    order: ['59ddfd8c4ea968254d057f76', '59ddfd8c4ea968254d057f77']
  },
  {
    status: 'abierta',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-09-07T19:29:34.390Z',
    endsAt: '2017-09-17T19:29:34.390Z',
    maker: '59da0287cf62694ff8df2a65',
    fabric: '59ddf97c2f89b9231b69da3d',
    order: ['59ddfd8c4ea968254d057f78', '59ddfd8c4ea968254d057f79']
  },
  {
    status: 'abierta',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-08-07T19:29:34.390Z',
    endsAt: '2017-08-17T19:29:34.390Z',
    maker: '59da02bdcf62694ff8df2a66',
    fabric: '59ddf97c2f89b9231b69da3e',
    order: ['59ddfd8c4ea968254d057f7a', '59ddfd8c4ea968254d057f7b']
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
