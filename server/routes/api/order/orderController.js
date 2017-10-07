mongoose = require('mongoose');
const orderModel = require('./Order');

module.exports = {
  list: (req, res) => {
    orderModel.find()
      .then(orders => res.status(200).json(orders))
      .catch(e => res.status(500).json({
        message: 'Error when getting the orders.',
        error: e.error
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
  remove: (req, res) => {
    orderModel.findByIdAndRemove(req.params.id)
      .then(order => res.status(200).json(order))
      .catch(error => res.status(500).json({ message: 'Error when deleting the order.', error: err }))
  }
}
