mongoose = require('mongoose');
const campaignModel = require('./campaignModel.js');
const orderModel = require('../order/Order');
const { showError } = require('../utils');

module.exports = {
  list: (req, res) => {
    campaignModel.find().populate({
      path: 'maker fabric order',
      populate: {
        path: 'buyer',
        model: 'User'
      }
    })
      .then(campaign => res.status(200).json(campaign))
      .catch(showError(res, 'Error when getting campaign.'));
  },

  show: (req, res) => {
    const id = req.params.id;
    campaignModel.findById(id).populate({
      path: 'order maker fabric',
      populate: {
        path: 'buyer',
        model: 'User'
      }
    })
    .then( campaigns => {
      res.status(200).json(campaigns)
    })
    .catch(showError(res, 'Error when getting campaign.'))
  },

  create: (req, res) => {
    const { status, meterPrice, totalMeters, revenue, minimumOrder,
      startAt, endsAt, maker, fabric, order
     } = req.body;

    const campaign = new campaignModel({
      status, meterPrice, totalMeters, revenue, minimumOrder,
        startAt, endsAt, maker, fabric, order
    });

    campaign.save()
      .then( campaign => res.status(200).json({
        message: 'New campaign created!',
        campaign: campaign
      }))
      .catch(showError(res, 'Error when creating campaign'));
  },

  update: (req, res) => {
    const { status, meterPrice, totalMeters, revenue, minimumOrder,
      startAt, endsAt, maker,fabric, order } = req.body;

    campaignModel.findByIdAndUpdate(req.params.id, {
      $set: {status, meterPrice, totalMeters, revenue, minimumOrder,
        startAt, endsAt, maker, fabric, order }
    }, {new:true})
      .then(campaign => res.status(200).json(campaign))
      .catch(showError(res, 'Error when getting campaign'))
  },

  remove: (req, res) => {
    const id = req.params.id;
    campaignModel.findByIdAndRemove(id)
      .then(campaign => res.status(200).json(campaign))
      .catch(showError(res, 'Error when deleting the campaign.'))
  }
};
