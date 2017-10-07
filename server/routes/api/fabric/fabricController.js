mongoose = require('mongoose');
const fabricModel = require('./Fabric');

module.exports = {
  list: (req, res) => {
    fabricModel.find().populate('maker')
      .then(fabrics => res.status(200).json(fabrics))
      .catch(e => res.status(500).json({
        message: 'Error when getting the fabric.',
        error: e.error
      }));
  },
  
  show: (req, res) => {
    const id = req.params.id;
    fabricModel.findById(id).populate('maker')
      .then(fabric => res.status(200).json(fabric))
      .catch(e => res.status(500).json({
        message: 'Error when getting fabric.',
        error: e.message
      }))
  },
  create: (req, res) => {
    const { typeName, origin, fiber, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker } = req.body;

    const fabric = new fabricModel({
      typeName, origin, fiber, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker
    });

    fabric.save()
      .then(fabric => res.status(200).json({
        message: 'New fabric created!',
        fabric: fabric
      }))
      .catch(e => res.status(500).json({
        message: 'Error when creating fabric',
        error: e.message
      }))
  },

  update: (req, res) => {
    const { typeName, origin, fiber, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker } = req.body;

    fabricModel.findByIdAndUpdate(req.params.id, {
      $set: { typeName, origin, fiber, colour, weight,
        structure, dye, finalUse, shorten, iron, washed, maker }
      }, { new:true }).exec()
        .then(fabric => res.status(200).json(fabric))
        .catch(e => res.status(500).json('Error when you try to update the order'));
  },

  remove: (req, res) => {
    fabricModel.findByIdAndRemove(req.params.id)
      .then(fabric => res.status(200).json(fabric))
      .catch(e => res.status(500).json({
        message: 'Error when deleting the fabric.',
        error: e.message
      }))
  }
}
