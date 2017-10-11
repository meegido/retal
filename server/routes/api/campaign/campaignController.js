mongoose = require('mongoose');
const campaignModel = require('./campaignModel.js');

module.exports = {
  list: (req, res) => {
    campaignModel.find().populate('maker buyer fabric order')
      .then(campaigns => res.status(200).json(campaigns))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign.',
        error: e.error
      }));
  },

  show: (req, res) => {
    const id = req.params.id;
    campaignModel.findById(id).populate('maker buyer fabric order')
      .then(campaign => res.status(200).json(campaign))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign.',
        error: e.message
      }))
  },

  create: (req, res) => {
    const { status, meterPrice, totalMeters, revenue, minimumOrder,
      startAt, endsAt, maker, buyer, fabric, order
     } = req.body;

    const campaign = new campaignModel({
      status, meterPrice, totalMeters, revenue, minimumOrder,
        startAt, endsAt, maker, buyer, fabric, order
    });

    campaign.save()
      .then( campaign => res.status(200).json({
        message: 'New campaign created!',
        campaign: campaign
      }))
      .catch( e => res.status(500).json({
        message: 'Error when creating campaign',
        error: e.message
      }));
  },

  update: (req, res) => {
    const { status, meterPrice, totalMeters, revenue, minimumOrder,
      startAt, endsAt, maker, buyer, fabric, order } = req.body;

    campaignModel.findByIdAndUpdate(req.params.id, {
      $set: {status, meterPrice, totalMeters, revenue, minimumOrder,
        startAt, endsAt, maker, buyer, fabric, order }
    }, {new:true})
      .then(campaign => res.status(200).json(campaign))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign',
        error: e.message
      }))
  },

  remove: (req, res) => {
    const id = req.params.id;
    campaignModel.findByIdAndRemove(id)
      .then(campaign => res.status(200).json(campaign))
      .catch(error => res.status(500).json({
        message: 'Error when deleting the campaign.',
        error: e.message }))
  }
};
