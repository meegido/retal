mongoose = require('mongoose');
const fabricModel = require('./Fabric');

module.exports = {
  list: (req, res) => {
    fabricModel.find()
      .then(fabrics => res.status(200).json(fabrics))
      .catch(e => res.status(500).json({
        message: 'Error when getting the fabric.',
        error: e.error
      }));
  },
  show: (req, res) => {
    const id = req.params.id;
    fabricModel.findById(id)
      .then(fabric => res.status(200).json(fabric))
      .catch(e => res.status(500).json({
        message: 'Error when getting fabric.',
        error: e.message
      }))
  },
  remove: (req, res) => {
    fabricModel.findByIdAndRemove(req.params.id)
      .then(fabric => res.status(200).json(fabric))
      .catch(error => res.status(500).json({ message: 'Error when deleting the fabric.', error: err }))
  }
}
