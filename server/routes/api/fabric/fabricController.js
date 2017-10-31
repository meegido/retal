mongoose = require('mongoose');
const fabricModel = require('./Fabric');
const { showError }  = require('../utils');

module.exports = {
  list: (req, res) => {
    fabricModel.find().populate('maker')
      .then(fabrics => res.status(200).json(fabrics))
      .catch(showError(res, 'Error when getting the fabric.'));
  },

  show: (req, res) => {
    const id = req.params.id;
    fabricModel.findById(id).populate('maker')
      .then(fabric => res.status(200).json(fabric))
      .catch(showError(res, 'Error when getting fabric.'))
  },
  create: (req, res) => {
    const { typeName, origin, description, fiber, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker, files } = req.body;

    const fabric = new fabricModel({
      typeName, origin, fiber, description, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker, files
    });

    fabric.save()
      .then(fabric => res.status(200).json({
        message: 'New fabric created!',
        fabric: fabric
      }))
      .catch(showError(res, 'Error when getting fabric.'))
  },

  update: (req, res) => {
    const { typeName, origin, description, fiber, colour, weight,
      structure, dye, finalUse, shorten, iron, washed, maker, files } = req.body;

    fabricModel.findByIdAndUpdate(req.params.id, {
      $set: { typeName, origin, description, fiber, colour, weight,
        structure, dye, finalUse, shorten, iron, washed, maker, files }
      }, { new:true }).exec()
        .then(fabric => res.status(200).json(fabric))
        .catch(showError(res, 'Error when getting fabric.'));
  },

  remove: (req, res) => {
    fabricModel.findByIdAndRemove(req.params.id)
      .then(fabric => res.status(200).json(fabric))
      .catch(showError(res, 'Error when deleting the fabric.'))
  }
}
