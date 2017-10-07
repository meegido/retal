mongoose = require('mongoose');
const orderModel = require('./Order');

module.exports = {
  list: (req, res) => {
    orderModel.find().populate('maker buyer')
      .then(orders => res.status(200).json(orders))
      .catch(e => res.status(500).json({
        message: 'Error when getting the orders.',
        error: e.message
      }));
  },
  
  show: (req, res) => {
    const id = req.params.id;
    orderModel.findById(id)
      .then(order => res.status(200).json(order))
      .catch(e => res.status(500).json({
        message: 'Error when getting order.',
        error: e.message
      }))
  },

  create: (req, res) => {
    const { meters, maker, buyer } = req.body;
    const order = new orderModel({
      meters, maker, buyer
    });
    order.save()
      .then(order => res.status(200).json({
        message: 'New order ordered!',
        order: order
      }))
      .catch(e => res.status(500).json({
        message: 'Error when creating order',
        error: e.message
      }))
  },

  update: (req, res) => {
    const { meters, maker, buyer } = req.body;

    orderModel.findByIdAndUpdate(req.params.id, {
      $set: { meters, maker, buyer }
    }, { new:true }).exec()
      .then(order => res.status(200).json(order))
      .catch(e => res.status(500).json('Error when you try tu update your order'))
  },

  remove: (req, res) => {
    orderModel.findByIdAndRemove(req.params.id)
      .then(order => res.status(200).json(order))
      .catch(e => res.status(500).json({
        message: 'Error when deleting the order.',
        error: e.message }))
  }
}
