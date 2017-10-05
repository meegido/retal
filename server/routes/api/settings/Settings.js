var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var settingsSchema = new Schema({
  finalUse: {
    type: String,
    enum: ['Camisa', 'Vestido', 'Pantalón', 'Abrigo', 'Camiseta']
  },
  shorten: Boolean,
  ironing: Boolean,
  washed: {
    type: String,
    enum: ['A mano', 'A máquina', 'En seco']
  },
  'fabricId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}',
		required: true
	}
})
settingsSchema.set('timestamps', true);

module.exports = mongoose.model('Settings', settingsSchema);
