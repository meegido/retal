mongoose = require('mongoose');
const settingsModel = require('./Settings');

module.exports = {
  list: (req, res) => {
    settingsModel.find()
      .then(settings => res.status(200).json(settings))
      .catch(e => res.status(500).json({
        message: 'Error when getting the settings.',
        error: e.error
      }));
  },
  show: (req, res) => {
    const id = req.params.id;
    settingsModel.findById(id)
      .then(setting => res.status(200).json(setting))
      .catch(e => res.status(500).json({
        message: 'Error when getting setting.',
        error: e.message
      }))
  },
  remove: (req, res) => {
    settingsModel.findByIdAndRemove(req.params.id)
      .then(setting => res.status(200).json(setting))
      .catch(error => res.status(500).json({ message: 'Error when deleting the setting.', error: err }))
  }
}
