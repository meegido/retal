var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var fabricSchema = new Schema({
  'typeName': {
    type: String,
    enum: [ 'Oxford', 'Plisado', 'Tafetán', 'Satén',
      'Franela', 'Lino', 'Muselina', 'Lona', 'Loneta',
      'Denim', 'Sarga', 'Pana', 'Gasa', 'Lamé', 'Punto']},

  'cropOrigin': String,

  'prodOrigin': String,

  'fiber': {
    type: String,
    enum: [ 'Algodón', 'Cáñamo', 'Bambú', 'Ortiga', 'Seda',
      'Mohair', 'Cachemir', 'Alpaca', 'PET', 'Rayón', 'PLA', 'Soja']},

  'colour': String,

  'weight': { type: String,
    enum: ['Ligera', 'Media', 'Pesada', 'Muy pesada']},

  'structure': {
    type: String,
    enum: ['Fluída', 'Media', 'Dura']},

  'dye': {
    type: String,
    enum: ['Inmersión', 'Estampado', 'No tintado']},

  'campaignId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}',
		required: true
	}
  // files: [{
  //   pic_path: String,
  //   pic_name: String
  // }]
})

fabricSchema.set('timestamps', true);

module.exports = mongoose.model('Fabric', fabricSchema);
