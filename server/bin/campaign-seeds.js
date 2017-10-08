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
    buyer: ['59da02f6cf62694ff8df2a69', '59da0318cf62694ff8df2a6a'],
    fabric: '59da7eaea2fe3a14429ca4ef',
    order: '59da7f073b3a92146eb1d465'
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
    buyer: '59da02f6cf62694ff8df2a69',
    fabric: '59da7eaea2fe3a14429ca4f0',
    order: '59da7f073b3a92146eb1d466'
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
    buyer: ['59da0318cf62694ff8df2a6a', '59da02e7cf62694ff8df2a68'],
    fabric: '59da7eaea2fe3a14429ca4f1',
    order: '59da7f073b3a92146eb1d467'
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
    buyer: '59da02e7cf62694ff8df2a68',
    fabric: '59da7eaea2fe3a14429ca4f2',
    order: '59da7f073b3a92146eb1d468'
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
    buyer: '59da02e7cf62694ff8df2a68',
    fabric: '59da7eaea2fe3a14429ca4f3',
    order: '59da7f073b3a92146eb1d469'
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
