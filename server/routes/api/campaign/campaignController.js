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


  // list: function(req, res) {
  //   campaignModel.find(function(err, campaigns) {
  //     if (err) {
  //       return res.status(500).json({message: 'Error when getting campaign.', error: err});
  //     }
  //     return res.json(campaigns);
  //   });
  // },

  show: (req, res) => {
    const id = req.params.id;
    campaignModel.findById(id)
      .then(campaign => res.status(200).json(campaign))
      .catch(e => res.status(500).json({
        message: 'Error when getting campaign.',
        error: e.message
      }))
  },

  // show: function(req, res) {
  //   var id = req.params.id;
  //   campaignModel.findOne({
  //     _id: id
  //   }, function(err, campaign) {
  //     if (err) {
  //       return res.status(500).json({message: 'Error when getting campaign.', error: err});
  //     }
  //     if (!campaign) {
  //       return res.status(404).json({message: 'No such campaign'});
  //     }
  //     return res.json(campaign);
  //   });
  // },

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

  // create: function(req, res) {
  //   var campaign = new campaignModel({
  //     status: req.body.status,
  //     price: req.body.price,
  //     delivery: req.body.delivery,
  //     redLine: req.body.redLine,
  //     minimumOrder: req.body.minimumOrder,
  //     partners: req.body.partners,
  //     user: req.body.user
  //
  //   });
  //
  //   campaign.save(function(err, campaign) {
  //     if (err) {
  //       return res.status(500).json({message: 'Error when creating campaign', error: err});
  //     } --> Esto es el error
  //     return res.status(201).json(campaign: campaign); --> Es el then, lo bueno. Lo uqe en el cb va después.
  //   });
  // },

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

  // update: function(req, res) {
  //   var id = req.params.id;
  //   campaignModel.findOne({
  //     _id: id
  //   }, function(err, campaign) {
  //     if (err) {
  //       return res.status(500).json({message: 'Error when getting campaign', error: err});
  //     }
  //     if (!campaign) {
  //       return res.status(404).json({message: 'No such campaign'});
  //     }
  //
  //     campaign.status = req.body.status ? req.body.status : campaign.status;
  //     campaign.price = req.body.price ? req.body.price : campaign.price;
  //     campaign.delivery = req.body.delivery ? req.body.delivery : campaign.delivery;
  //     campaign.redLine = req.body.redLine ? req.body.redLine : campaign.redLine;
  //     campaign.minimumOrder = req.body.minimumOrder ? req.body.minimumOrder : campaign.minimumOrder;
  //     campaign.partners = req.body.partners ? req.body.partners : campaign.partners;
  //     campaign.user = req.body.user ? req.body.user : campaign.user;
  //
  //     campaign.save(function(err, campaign) {
  //       if (err) {
  //         return res.status(500).json({ message: 'Error when updating campaign.', error: err });
  //       }
  //
  //       return res.json(campaign);
  //     });
  //   });
  // },

  remove: (req, res) => {
    campaignModel.findByIdAndRemove(req.params.id)
      .then(campaign => res.status(200).json(campaign))
      .catch(error => res.status(500).json({ message: 'Error when deleting the campaign.', error: err }))
  }

  // remove: function(req, res) {
  //   var id = req.params.id;
  //   campaignModel.findByIdAndRemove(id, function(err, campaign) {
  //     if (err) {
  //       return res.status(500).json({message: 'Error when deleting the campaign.', error: err});
  //     }
  //     return res.status(204).json();
  //   });
  // }
};
