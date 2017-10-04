mongoose = require('mongoose');
const campaignModel = require('./campaignModel.js');

module.exports = {

  list: (req, res) => {
    campaignModel.find()
      .then(campaigns => res.status(200).json(campaigns))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign.',
        error: e.error
      }));
  },

  show: (req, res) => {
    const id = req.params.id;
    campaignModel.findById(id)
      .then(campaign => res.status(200).json(campaign))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign.',
        error: e.message
      }))
  },

  create: (req, res) => {
    const {status, price, delivery, redLine, minimumOrder, partners, user } = req.body;
    const campaign = new campaignModel({
      status, price, delivery, redLine, minimumOrder, partners, user
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
    const { status, price, delivery, redLine, minimumOrder, partners, user } = req.body;
    const updates = {
      status, price, delivery, redLine, minimumOrder, partners, user
    }

    campaignModel.findByIdAndUpdate(req.params.id, updates, {new:true})
      .then(campaign => res.status(200).json(campaign))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign',
        error: e.message
      }))
  },


  remove: (req, res) => {
    campaignModel.findByIdAndRemove(req.params.id)
      .then(campaign => res.status(200).json(campaign))
      .catch(error => res.status(500).json({ message: 'Error when deleting the campaign.', error: err }))
  }
};
