const mongoose = require('mongoose');
const orderModel = require('./Order');
const { showError }  = require('../utils');

module.exports = {
  list: (req, res) => {
    orderModel.find().populate('maker')
      .then(orders => res.status(200).json(orders))
      .catch(showError(res, 'Error when getting the order.'));
  },

  show: (req, res) => {
    const id = req.params.id;
    orderModel.findById(id).populate('maker')
      .then(order => res.status(200).json(order))
      .catch(showError(res, 'Error when getting the orders.'))
  },

  create: (req, res) => {
    const { campaignId, meters, maker, buyerUsername, buyerEmail } = req.body;
    const order = new orderModel({
      campaignId, meters, maker, buyerUsername, buyerEmail
    });
    order.save()
      .then(order => res.status(200).json({
        message: 'New order ordered!',
        order: order
      }))
      .catch(showError(res, 'Error when creating order'))
  },

  update: (req, res) => {
    const { meters, maker, buyerUsername, buyerEmail } = req.body;
    const id = req.params.id;
    const query = { $set: { meters, maker, buyerUsername, buyerEmail } }
    const options = { new: true }
    orderModel.findByIdAndUpdate(id, query, options).exec()
      .then(order => res.status(200).json(order))
      .catch(showError(res, 'Error when you try tu update your order'))
  },

  remove: (req, res) => {
    orderModel.findByIdAndRemove(req.params.id)
      .then(order => res.status(200).json(order))
      .catch(showError(res, 'Error when deleting the order.'))
  }
}
