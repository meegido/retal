const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const fabricSchema = new Schema({
  'typeName': {
    type: String,
    enum: [ 'Oxford', 'Plisado', 'Tafetán', 'Satén',
      'Franela', 'Lino', 'Muselina', 'Lona', 'Loneta',
      'Denim', 'Sarga', 'Pana', 'Gasa', 'Lamé', 'Punto']},

  'origin': String,

  'description': String,

  'fiber': {
    type: String,
    enum: [ 'Algodón', 'Cáñamo', 'Bambú', 'Ortiga', 'Seda', 'Lana',
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

  'finalUse': {
    type: String,
    enum: ['Camisa', 'Vestido', 'Falda', 'Pantalón', 'Abrigo', 'Camiseta']
  },
  'shorten': {
    type: Boolean,
    enum: ['Si', 'No']
  },
  'iron': {
    type: Boolean,
    enum: ['Si', 'No']
  },
  'washed': {
    type: String,
    enum: ['A mano', 'A máquina', 'En seco']
  },
  'files': [{ type: String, default: '' }],
  'maker': { type: Schema.Types.ObjectId, ref: 'User' }

})

fabricSchema.set('timestamps', true);

module.exports = mongoose.model('Fabric', fabricSchema);
