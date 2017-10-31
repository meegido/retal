const mongoose = require('mongoose');
const campaignSchema = require('../routes/api/campaign/campaignModel');

// mongoose.connect('mongodb://localhost/retal')
//   .then(() => console.log('connected to db!'))

mongoose.connect('mongodb://admin:KindR2yu!!@ds113455.mlab.com:13455/retales')
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
    maker: "59df71deae8afc23706622f7",
    fabric: '59df7a35c73efe25395e8f16',
    order: ['59df7d5a45d033260ade4079', '59df7d5a45d033260ade407e', '59df7d5a45d033260ade4082']
  },
  {
    status: 'abierta',
    meterPrice: 25,
    totalMeters: 150,
    revenue: 50,
    minimumOrder: 0,
    startAt: '2017-10-07T19:29:34.390Z',
    endsAt: '2017-10-27T19:29:34.390Z',
    maker: '59df71deae8afc23706622f8',
    fabric: '59df7a35c73efe25395e8f17',
    order: ['59df7d5a45d033260ade407a', '59df7d5a45d033260ade4081']
  },
  {
    status: 'cerrada',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-10-02T19:29:34.390Z',
    endsAt: '2017-10-12T19:29:34.390Z',
    maker: '59df71deae8afc23706622f9',
    fabric: '59df7a35c73efe25395e8f18',
    order: ['59df7d5a45d033260ade407b', '59df7d5a45d033260ade4080']
  },
  {
    status: 'abierta',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-09-07T19:29:34.390Z',
    endsAt: '2017-09-17T19:29:34.390Z',
    maker: '59df71deae8afc23706622fa',
    fabric: '59df7a35c73efe25395e8f19',
    order: ['59df7d5a45d033260ade407c']
  },
  {
    status: 'abierta',
    meterPrice: 10,
    totalMeters: 150,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-09-07T19:29:34.390Z',
    endsAt: '2017-09-17T19:29:34.390Z',
    maker: '59df71deae8afc23706622fa',
    fabric: '59df7a35c73efe25395e8f1a',
    order: []
  },
  {
    status: 'abierta',
    meterPrice: 15,
    totalMeters: 120,
    revenue: 0,
    minimumOrder: 0,
    startAt: '2017-08-07T19:29:34.390Z',
    endsAt: '2017-08-17T19:29:34.390Z',
    maker: '59df71deae8afc23706622fb',
    fabric: '59df7a35c73efe25395e8f1b',
    order: ['59df7d5a45d033260ade407d', '59df7d5a45d033260ade407f']
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
